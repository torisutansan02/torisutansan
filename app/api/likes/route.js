// routes/api/likes/route.js
import { NextResponse } from 'next/server';
import getRedis from '@/lib/redis';

const redis = getRedis();

export async function PATCH(req) {
  try {
    const { userId, postId } = await req.json();
    if (!userId || !postId) {
      return new NextResponse('Missing userId or postId', { status: 400 });
    }

    const userKey = `l:${userId}:${postId}`; // user-like
    const countKey = `p:likes:${postId}`;    // post-meta

    const setResult = await redis.set(userKey, '1', 'EX', 86400, 'NX');

    if (setResult) {
      // First time like — increment count
      await redis.incr(countKey);
    } else {
      // Already liked — unlike
      await redis.pipeline().del(userKey).decr(countKey).exec();
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('❌ PATCH /api/likes error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
