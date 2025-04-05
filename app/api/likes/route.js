import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(req) {
  try {
    const { userId, postId } = await req.json();
    if (!userId || !postId) {
      return NextResponse.json({ error: 'Missing userId or postId' }, { status: 400 });
    }

    let added = false;

    try {
      // Try to insert the favorite
      await prisma.$executeRawUnsafe(
        `
        INSERT INTO \`Favorite\` (userId, postId, createdAt)
        VALUES (?, ?, NOW())
      `,
        userId,
        postId
      );

      // If successful, increment the favorite count
      await prisma.$executeRawUnsafe(
        `
        UPDATE \`PostMeta\`
        SET favorites = favorites + 1
        WHERE postId = ?
      `,
        postId
      );

      added = true;
    } catch (e) {
      // Favorite already exists — remove it instead
      await prisma.$executeRawUnsafe(
        `
        DELETE FROM \`Favorite\`
        WHERE userId = ? AND postId = ?
      `,
        userId,
        postId
      );

      await prisma.$executeRawUnsafe(
        `
        UPDATE \`PostMeta\`
        SET favorites = GREATEST(favorites - 1, 0)
        WHERE postId = ?
      `,
        postId
      );
    }

    return NextResponse.json({ message: added ? 'Favorite added' : 'Favorite removed' });
  } catch (error) {
    console.error('❌ /api/favorites error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
