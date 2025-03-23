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
      include: { user: { select: { name: true } } },
      orderBy: { createdAt: 'desc' },
    });

    const formatted = comments.map((comment) => ({
      id: comment.id,
      userId: comment.userId,
      postId: comment.postId,
      content: comment.content,
      userName: comment.user?.name,
      createdAt: comment.createdAt,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, postId, content, name, email } = await req.json();

    if (!userId || !postId || !content) {
      return NextResponse.json({ error: 'Missing userId, postId or content' }, { status: 400 });
    }

    await prisma.blogPost.upsert({
      where: { id: postId },
      update: {},
      create: {
        id: postId,
        title: postId,
        content: '',
      },
    });

    await prisma.user.upsert({
      where: { auth0Id: userId },
      update: {},
      create: {
        auth0Id: userId,
        name: name,
        email: email || `${userId}@example.com`,
      },
    });

    const newComment = await prisma.comment.create({
      data: { userId, postId, content },
      include: { user: { select: { name: true } } },
    });

    return NextResponse.json({
      id: newComment.id,
      content: newComment.content,
      userName: newComment.user?.name,
      createdAt: newComment.createdAt,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
