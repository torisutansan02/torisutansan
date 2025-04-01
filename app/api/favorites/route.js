import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(req) {
  try {
    const { userId, postId } = await req.json();

    if (!userId || !postId) {
      return NextResponse.json({ error: 'Missing userId or postId' }, { status: 400 });
    }

    const existing = await prisma.favorite.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existing) {
      await prisma.favorite.delete({ where: { userId_postId: { userId, postId } } });
      return NextResponse.json({ message: 'Favorite removed' });
    } else {
      await prisma.favorite.create({ data: { userId, postId } });
      return NextResponse.json({ message: 'Favorite added' });
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}