// routes/api/favorites/route.js
import { NextResponse } from 'next/server';
import getRedis from '@/lib/redis';

const redis = getRedis();

export async function PATCH(req) {
  try {
    const { userId, postId } = await req.json();
    if (!userId || !postId) {
      return new NextResponse('Missing userId or postId', { status: 400 });
    }

    const userKey = `f:${userId}:${postId}`; // user-fav
    const countKey = `p:favs:${postId}`;     // post-meta

    const setResult = await redis.set(userKey, '1', 'EX', 86400, 'NX');

    if (setResult) {
      // First time favorite — increment count
      await redis.incr(countKey);
    } else {
      // Already favorited — remove favorite
      await redis.pipeline().del(userKey).decr(countKey).exec();
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('❌ PATCH /api/favorites error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
