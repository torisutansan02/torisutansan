import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'postId query parameter is required' }, { status: 400 });
  }

  try {
    const count = await prisma.favorite.count({ where: { postId } });
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, postId, name, email } = await req.json();

    if (!userId || !postId) {
      return NextResponse.json({ error: 'Missing userId or postId' }, { status: 400 });
    }

    const existing = await prisma.favorite.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    if (existing) {
      return NextResponse.json({ error: 'Already favorited' }, { status: 409 });
    }

    const [, , newFavorite] = await prisma.$transaction([
      prisma.user.upsert({
        where: { auth0Id: userId },
        update: {},
        create: {
          auth0Id: userId,
          name,
          email: email || `${userId}@example.com`,
        },
      }),
      prisma.blogPost.upsert({
        where: { id: postId },
        update: {},
        create: {
          id: postId,
          title: postId,
          content: '',
        },
      }),
      prisma.favorite.create({
        data: { userId, postId },
      }),
    ]);

    return NextResponse.json(newFavorite, { status: 201 });
  } catch (error) {
    console.error('Error creating favorite:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
