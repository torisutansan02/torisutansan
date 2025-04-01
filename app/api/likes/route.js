// ✅ /api/likes/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(req) {
  try {
    const { userId, postId } = await req.json();

    if (!userId || !postId) {
      return NextResponse.json({ error: 'Missing userId or postId' }, { status: 400 });
    }

    const existing = await prisma.like.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existing) {
      await prisma.like.delete({ where: { userId_postId: { userId, postId } } });
      return NextResponse.json({ message: 'Like removed' });
    } else {
      await prisma.like.create({ data: { userId, postId } });
      return NextResponse.json({ message: 'Like added' });
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}