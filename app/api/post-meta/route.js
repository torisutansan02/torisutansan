import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const userId = searchParams.get('userId'); // 👈 added

  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  try {
    const [likes, favorites, comments, hasLiked, hasFavorited] = await Promise.all([
      prisma.like.count({ where: { postId } }),
      prisma.favorite.count({ where: { postId } }),
      prisma.comment.findMany({
        where: { postId },
        orderBy: { createdAt: 'desc' },
        take: 50,
        select: {
          id: true,
          userId: true,
          postId: true,
          content: true,
          createdAt: true,
          user: { select: { name: true } },
        },
      }),
      userId ? prisma.like.findFirst({ where: { postId, userId } }) : null,
      userId ? prisma.favorite.findFirst({ where: { postId, userId } }) : null,
    ]);

    const formattedComments = comments.map((comment) => ({
      id: comment.id,
      userId: comment.userId,
      postId: comment.postId,
      content: comment.content,
      createdAt: comment.createdAt,
      userName: comment.user?.name,
    }));

    return NextResponse.json({
      likes,
      favorites,
      comments: formattedComments,
      hasLiked: !!hasLiked,
      hasFavorited: !!hasFavorited,
    });
  } catch (error) {
    console.error('Error fetching post meta:', error);
    return NextResponse.json({ error: 'Failed to fetch post meta' }, { status: 500 });
  }
}
