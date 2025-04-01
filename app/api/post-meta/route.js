import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const userId = searchParams.get('userId');

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
        take: 20,
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      }),
      userId ? prisma.like.findUnique({ where: { userId_postId: { userId, postId } } }) : null,
      userId ? prisma.favorite.findUnique({ where: { userId_postId: { userId, postId } } }) : null,
    ]);

    return NextResponse.json({
      likes,
      favorites,
      comments,
      hasLiked: !!hasLiked,
      hasFavorited: !!hasFavorited,
    });
  } catch (error) {
    console.error('Error fetching post meta:', error);
    return NextResponse.json({ error: 'Failed to fetch post meta' }, { status: 500 });
  }
}
