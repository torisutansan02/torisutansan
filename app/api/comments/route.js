// routes/api/comments/route.js

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getRedis from '@/lib/redis';

const redis = getRedis();

async function ensureUserExists(userId) {
  const exists = await prisma.user.findUnique({ where: { auth0Id: userId } });
  if (!exists) {
    await prisma.user.create({
      data: {
        auth0Id: userId,
        name: 'Anonymous',
        email: `${userId}@placeholder.com`,
      },
    });
  }
}

async function ensurePostExists(postId) {
  await prisma.blogPost.upsert({
    where: { id: postId },
    update: {},
    create: { id: postId, title: postId, content: '' },
  });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'postId is required' }, { status: 400 });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      select: {
        id: true,
        userId: true,
        content: true,
        createdAt: true,
        user: { select: { name: true, image: true } },
      },
    });

    const formatted = comments.map((c) => ({
      id: c.id,
      userId: c.userId,
      content: c.content,
      createdAt: c.createdAt,
      userName: c.user?.name ?? 'Unknown',
      userImage: c.user?.image ?? null,
    }));

    return NextResponse.json(formatted, {
      headers: { 'X-Cache': 'BYPASS' }, // We skip caching comments directly
    });
  } catch (error) {
    console.error('❌ GET /api/comments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, postId, content } = await req.json();

    if (!userId || !postId || !content) {
      return NextResponse.json({ error: 'Missing userId, postId, or content' }, { status: 400 });
    }

    if (content.length < 20 || content.length > 100) {
      return NextResponse.json({ error: 'Meaningful comments fall between 20 to 100 characters.' }, { status: 400} );
    }

    const [_, __, existingCount] = await Promise.all([
      ensureUserExists(userId),
      ensurePostExists(postId),
      prisma.comment.count({ where: { userId, postId } }),
    ]);

    if (existingCount >= 3) {
      return NextResponse.json({ error: 'Comment limit reached for this post' }, { status: 429 });
    }

    const [newComment] = await Promise.all([
      prisma.comment.create({
        data: { userId, postId, content },
        include: { user: { select: { name: true, image: true } } },
      }),
      redis.del(`post-meta:${postId}`), // ❄️ Invalidate cached post-meta
    ]);

    return NextResponse.json({
      id: newComment.id,
      userId: newComment.userId,
      content: newComment.content,
      createdAt: newComment.createdAt,
      userName: newComment.user?.name ?? 'Anonymous',
      userImage: newComment.user?.image ?? null,
    }, { status: 201 });
  } catch (error) {
    console.error('❌ POST /api/comments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { commentId, userId } = await req.json();
    if (!commentId || !userId) {
      return NextResponse.json({ error: 'Missing commentId or userId' }, { status: 400 });
    }

    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    if (comment.userId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await Promise.all([
      prisma.comment.delete({ where: { id: commentId } }),
      redis.del(`post-meta:${comment.postId}`),
    ]);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('❌ DELETE /api/comments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
