import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getRedis from '@/lib/redis';

const redis = getRedis();

export async function GET(req) {
  const postId = new URL(req.url).searchParams.get('postId');
  const userId = new URL(req.url).searchParams.get('userId');

  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  const cacheKey = `post-meta:${postId}`;

  // Try cache if anonymous
  if (!userId) {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { 'X-Cache': 'HIT' },
      });
    }
  }

  // Fetch from DB
  const [postMeta, comments, hasLiked, hasFavorited] = await Promise.all([
    prisma.postMeta.findUnique({ where: { postId } }),

    prisma.comment.findMany({
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
    }),

    userId
      ? prisma.like.findUnique({ where: { userId_postId: { userId, postId } } })
      : null,

    userId
      ? prisma.favorite.findUnique({ where: { userId_postId: { userId, postId } } })
      : null,
  ]);

  const formattedComments = comments.map(comment => ({
    id: comment.id,
    userId: comment.userId,
    content: comment.content,
    createdAt: comment.createdAt,
    userName: comment.user?.name ?? 'Unknown',
    userImage: comment.user?.image ?? null,
  }));

  const responseData = {
    likes: postMeta?.likes ?? 0,
    favorites: postMeta?.favorites ?? 0,
    comments: formattedComments,
    hasLiked: !!hasLiked,
    hasFavorited: !!hasFavorited,
  };

  // Cache for anonymous requests only
  if (!userId) {
    await redis.setEx(cacheKey, 60, JSON.stringify(responseData));
  }

  return NextResponse.json(responseData, {
    headers: {
      'X-Cache': 'MISS',
    },
  });
}
