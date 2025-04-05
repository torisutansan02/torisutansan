import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  const start = Date.now();

  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  const userId = searchParams.get('userId');

  if (!postId) {
    return NextResponse.json({ error: 'Missing postId' }, { status: 400 });
  }

  try {
    const [postMeta, comments, hasLiked, hasFavorited] = await Promise.all([
      prisma.postMeta.findUnique({ where: { postId } }),

      prisma.comment.findMany({
        where: { postId },
        orderBy: { createdAt: 'desc' },
        take: 20,
        select: {
          id: true,
          userId: true, // ✅ Needed for delete permission check
          content: true,
          createdAt: true,
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      }),

      userId
        ? prisma.like.findUnique({ where: { userId_postId: { userId, postId } } })
        : null,

      userId
        ? prisma.favorite.findUnique({ where: { userId_postId: { userId, postId } } })
        : null,
    ]);

    const formattedComments = comments.map((comment) => ({
      id: comment.id,
      userId: comment.userId,
      content: comment.content,
      createdAt: comment.createdAt,
      userName: comment.user?.name ?? "Unknown User",
      userImage: comment.user?.image ?? null,
    }));

    const duration = Date.now() - start;
    console.log(`✅ /api/post-meta for "${postId}" (${userId || 'anon'}) → ${duration}ms`);

    return NextResponse.json(
      {
        likes: postMeta?.likes ?? 0,
        favorites: postMeta?.favorites ?? 0,
        comments: formattedComments,
        hasLiked: !!hasLiked,
        hasFavorited: !!hasFavorited,
      },
      {
        headers: {
          'Cache-Control': userId
            ? 'no-store'
            : 's-maxage=60, stale-while-revalidate=120',
        },
      }
    );
  } catch (error) {
    console.error('❌ Error in /api/post-meta:', error);
    return NextResponse.json({ error: 'Failed to fetch post metadata' }, { status: 500 });
  }
}
