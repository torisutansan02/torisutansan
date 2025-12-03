// routes/api/favorites/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getRedis from "@/lib/redis";
import { normalizeId } from "@/lib/normalize";

const redis = getRedis();

export async function PATCH(req) {
  try {
    let { userId, postId } = await req.json();
    if (!userId || !postId)
      return NextResponse.json({ error: "Missing userId/postId" }, { status: 400 });

    postId = normalizeId(postId);

    const userKey = `f:${userId}:${postId}`;
    const countKey = `p:favorites:${postId}`;
    const already = await redis.get(userKey);

    await prisma.blogPost.upsert({
      where: { id: postId },
      update: {},
      create: { id: postId, title: postId, content: "" },
    });

    if (!already) {
      await redis.set(userKey, "1", "EX", 86400);
      await redis.incr(countKey);

      await prisma.favorite.upsert({
        where: { userId_postId: { userId, postId } },
        update: {},
        create: { userId, postId },
      });
    } else {
      await redis.pipeline().del(userKey).decr(countKey).exec();
      await prisma.favorite.deleteMany({ where: { userId, postId } });
    }

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("❌ /api/favorites error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
