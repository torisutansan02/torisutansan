// ✅ /api/comments/route.ts
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
        content: true,
        createdAt: true,
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    const formatted = comments.map((comment) => ({
      id: comment.id,
      userId: comment.userId,
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
    const { userId, postId, content } = await req.json();

    if (!userId || !postId || !content) {
      return NextResponse.json({ error: 'Missing userId, postId or content' }, { status: 400 });
    }

    const existingCount = await prisma.comment.count({ where: { userId, postId } });
    if (existingCount >= 3) {
      return NextResponse.json({ error: 'Comment limit reached for this post' }, { status: 429 });
    }

    const newComment = await prisma.comment.create({
      data: { userId, postId, content },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json({
      id: newComment.id,
      content: newComment.content,
      createdAt: newComment.createdAt,
      userId: newComment.userId,
      userName: newComment.user?.name,
      userImage: newComment.user?.image,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
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

    await prisma.comment.delete({ where: { id: commentId } });
    return NextResponse.json({ message: 'Comment deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}