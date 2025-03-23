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
    console.log("▶️ Received:", { userId, postId, name, email });

    if (!userId || !postId) {
      console.log("❌ Missing userId or postId");
      return NextResponse.json({ error: 'Missing userId or postId' }, { status: 400 });
    }

    await prisma.blogPost.upsert({
      where: { id: postId },
      update: {},
      create: {
        id: postId,
        title: postId,
        content: '',
      },
    });

    await prisma.user.upsert({
      where: { auth0Id: userId },
      update: {},
      create: {
        auth0Id: userId,
        name: name || 'Anonymous',
        email: email || `${userId}@example.com`,
      },
    });

    const existing = await prisma.favorite.findFirst({ where: { userId, postId } });
    if (existing) {
      console.log("⚠️ Already favorited");
      return NextResponse.json({ error: 'Already favorited' }, { status: 409 });
    }

    const newFavorite = await prisma.favorite.create({
      data: { userId, postId },
    });

    console.log("✅ Favorite created:", newFavorite);
    return NextResponse.json(newFavorite, { status: 201 });

  } catch (error) {
    console.error("🔥 Error creating favorite:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

