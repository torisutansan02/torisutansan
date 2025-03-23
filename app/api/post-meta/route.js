// app/api/post-meta/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // adjust path if needed

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  try {
    const [likes, favorites, comments] = await Promise.all([
      prisma.like.count({ where: { postId } }),
      prisma.favorite.count({ where: { postId } }),
      prisma.comment.findMany({
        where: { postId },
        orderBy: { createdAt: 'desc' },
        take: 50, // Optional limit
      }),
    ]);

    return NextResponse.json({
      likes,
      favorites,
      comments,
    });
  } catch (error) {
    console.error('Error fetching post meta:', error);
    return NextResponse.json({ error: 'Failed to fetch post meta' }, { status: 500 });
  }
}
