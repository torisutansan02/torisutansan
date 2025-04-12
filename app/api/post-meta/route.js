import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import getRedis from '@/lib/redis';

export async function GET(req) {
  const url = new URL(req.url);
  const postId = url.searchParams.get('postId');
  const userId = url.searchParams.get('userId');

  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  const cacheKey = `post-meta:${postId}`;

  // 🚀 Try Redis cache for anonymous users
  if (!userId) {
    const redis = getRedis();
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { 'X-Cache': 'HIT' },
      });
    }
  }

  const start = Date.now();

  // 🔁 Get postMeta + comments
  const postMetaPromise = prisma.postMeta.findUnique({ where: { postId } });

  const commentsPromise = prisma.comment.findMany({
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

  // 🧠 Get like/favorite in a transaction (if logged in)
  const engagementPromise = userId
    ? prisma.$transaction([
        prisma.like.findUnique({
          where: { userId_postId: { userId, postId } },
        }),
        prisma.favorite.findUnique({
          where: { userId_postId: { userId, postId } },
        }),
      ])
    : Promise.resolve([null, null]);

  const [postMeta, comments, [hasLiked, hasFavorited]] = await Promise.all([
    postMetaPromise,
    commentsPromise,
    engagementPromise,
  ]);

  const formattedComments = comments.map((comment) => ({
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

  // 🧊 Cache for anonymous users only
  if (!userId) {
    const redis = getRedis();
    await redis.setEx(cacheKey, 60, JSON.stringify(responseData));
  }

  console.log(`⏱️ post-meta API completed in ${Date.now() - start}ms`);

  return NextResponse.json(responseData, {
    headers: {
      'X-Cache': 'MISS',
    },
  });
}
