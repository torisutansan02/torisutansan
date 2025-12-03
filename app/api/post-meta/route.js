// routes/api/post-meta/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getRedis from "@/lib/redis";
import { normalizeId } from "@/lib/normalize";

export async function GET(req) {
  const url = new URL(req.url);
  let postId = url.searchParams.get("postId");
  const userId = url.searchParams.get("userId");

  if (!postId)
    return NextResponse.json({ error: "Missing postId" }, { status: 400 });

  postId = normalizeId(postId);

  const redis = getRedis();
  const cacheKey = `post-meta:${postId}`;

  // Anonymous users → return cached snapshot
  if (!userId) {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached), {
        headers: { "X-Cache": "HIT" },
      });
    }
  }

  //
  // 🔥 CRITICAL FIX — ensure BlogPost exists
  //
  await prisma.blogPost.upsert({
    where: { id: postId },
    update: {},
    create: {
      id: postId,
      title: postId,
      content: "",
    },
  });

  //
  // Ensure PostMeta exists
  //
  await prisma.postMeta.upsert({
    where: { postId },
    update: {},
    create: { postId, likes: 0, favorites: 0 },
  });

  const [
    dbMeta,
    redisLikes,
    redisFavorites,
    comments,
    userLike,
    userFavorite,
  ] = await Promise.all([
    prisma.postMeta.findUnique({ where: { postId } }),
    redis.get(`p:likes:${postId}`),
    redis.get(`p:favorites:${postId}`),
    prisma.comment.findMany({
      where: { postId },
      orderBy: { createdAt: "desc" },
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
      ? prisma.like.findUnique({
          where: { userId_postId: { userId, postId } },
        })
      : null,
    userId
      ? prisma.favorite.findUnique({
          where: { userId_postId: { userId, postId } },
        })
      : null,
  ]);

  const response = {
    likes: redisLikes ? +redisLikes : dbMeta.likes,
    favorites: redisFavorites ? +redisFavorites : dbMeta.favorites,
    comments: comments.map((c) => ({
      id: c.id,
      userId: c.userId,
      content: c.content,
      createdAt: c.createdAt,
      userName: c.user?.name ?? "Unknown",
      userImage: c.user?.image ?? null,
    })),
    hasLiked: !!userLike,
    hasFavorited: !!userFavorite,
  };

  // Cache only for anonymous users
  if (!userId) {
    await redis.set(cacheKey, JSON.stringify(response), "EX", 60);
  }

  return NextResponse.json(response, {
    headers: { "X-Cache": "MISS" },
  });
}
