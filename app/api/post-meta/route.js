// routes/api/post-meta/route.js
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

  const redis = getRedis();
  const cacheKey = `post-meta:${postId}`;

  // ✅ Check full cache for anonymous user
  if (!userId) {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { 'X-Cache': 'HIT' },
      });
    }
  }

  const start = Date.now();

  // ✅ Fetch postMeta and comments in parallel
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

  // ✅ Only run DB queries for user engagement if userId is present
  const engagementPromise = userId
    ? Promise.all([
        prisma.like.findUnique({ where: { userId_postId: { userId, postId } } }),
        prisma.favorite.findUnique({ where: { userId_postId: { userId, postId } } }),
      ])
    : Promise.resolve([null, null]);

  // ✅ Fetch Redis counts for likes/favorites
  const [redisLikes, redisFavorites] = await Promise.all(
    ['likes', 'favorites'].map((key) =>
      redis.get(`post-meta:${key}:${postId}`)
    )
  );

  const [
    postMeta,
    comments,
    [hasLiked, hasFavorited],
  ] = await Promise.all([
    postMetaPromise,
    commentsPromise,
    engagementPromise,
  ]);

  // ✅ Prefer Redis counts; fallback to DB
  const likes = redisLikes !== null ? parseInt(redisLikes) : postMeta?.likes ?? 0;
  const favorites = redisFavorites !== null ? parseInt(redisFavorites) : postMeta?.favorites ?? 0;

  const formattedComments = comments.map((c) => ({
    id: c.id,
    userId: c.userId,
    content: c.content,
    createdAt: c.createdAt,
    userName: c.user?.name ?? 'Unknown',
    userImage: c.user?.image ?? null,
  }));

  const responseData = {
    likes,
    favorites,
    comments: formattedComments,
    hasLiked: !!hasLiked,
    hasFavorited: !!hasFavorited,
  };

  // ✅ Set Redis cache for anonymous users
  if (!userId) {
    await redis.set(cacheKey, JSON.stringify(responseData), 'EX', 60); // 60s TTL
  }

  console.log(`⏱️ /api/post-meta took ${Date.now() - start}ms`);
  return NextResponse.json(responseData, {
    headers: { 'X-Cache': 'MISS' },
  });
}
