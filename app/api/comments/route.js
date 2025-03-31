import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'postId query parameter is required' }, { status: 400 });
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { postId },
      select: {
        id: true,
        userId: true,
        postId: true,
        content: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            image: true, // ✅ select user profile image
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const formatted = comments.map((comment) => ({
      id: comment.id,
      userId: comment.userId,
      postId: comment.postId,
      content: comment.content,
      createdAt: comment.createdAt,
      userName: comment.user?.name,
      userImage: comment.user?.image,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, postId, content, name, email, image } = await req.json();

    if (!userId || !postId || !content) {
      return NextResponse.json({ error: 'Missing userId, postId or content' }, { status: 400 });
    }

    const existingCount = await prisma.comment.count({
      where: { userId, postId },
    });

    if (existingCount >= 3) {
      return NextResponse.json({ error: 'Comment limit reached for this post' }, { status: 429 });
    }

    const [, , newComment] = await prisma.$transaction([
      prisma.user.upsert({
        where: { auth0Id: userId },
        update: {
          name,
          email,
          image, // ✅ update profile picture
        },
        create: {
          auth0Id: userId,
          name,
          email: email || `${userId}@example.com`,
          image,
        },
      }),
      prisma.blogPost.upsert({
        where: { id: postId },
        update: {},
        create: {
          id: postId,
          title: postId,
          content: '',
        },
      }),
      prisma.comment.create({
        data: { userId, postId, content },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      }),
    ]);

    return NextResponse.json({
      id: newComment.id,
      content: newComment.content,
      createdAt: newComment.createdAt,
      userName: newComment.user?.name,
      userImage: newComment.user?.image,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
