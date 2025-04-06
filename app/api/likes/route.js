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
      // Try to insert the like
      await prisma.$executeRawUnsafe(
        `
        INSERT INTO \`Like\` (userId, postId, createdAt)
        VALUES (?, ?, NOW())
      `,
        userId,
        postId
      );

      // If successful, increment the like count
      await prisma.$executeRawUnsafe(
        `
        UPDATE \`PostMeta\`
        SET likes = likes + 1
        WHERE postId = ?
      `,
        postId
      );

      added = true;
    } catch (e) {
      // Like already exists — remove it instead
      await prisma.$executeRawUnsafe(
        `
        DELETE FROM \`Like\`
        WHERE userId = ? AND postId = ?
      `,
        userId,
        postId
      );

      await prisma.$executeRawUnsafe(
        `
        UPDATE \`PostMeta\`
        SET likes = GREATEST(likes - 1, 0)
        WHERE postId = ?
      `,
        postId
      );
    }

    return NextResponse.json({ message: added ? 'Like added' : 'Like removed' });
  } catch (error) {
    console.error('❌ /api/likes error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
