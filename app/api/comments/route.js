// routes/api/comments/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getRedis from "@/lib/redis";
import { normalizeId } from "@/lib/normalize";

const redis = getRedis();

export async function GET(req) {
  const url = new URL(req.url);
  let postId = url.searchParams.get("postId");
  if (!postId)
    return NextResponse.json({ error: "Missing postId" }, { status: 400 });

  postId = normalizeId(postId);

  const comments = await prisma.comment.findMany({
    where: { postId },
    orderBy: { createdAt: "desc" },
    take: 20,
    select: {
      id: true,
      userId: true,
      content: true,
      createdAt: true,
      user: { select: { name: true, image: true } },
    },
  });

  return NextResponse.json(
    comments.map((c) => ({
      id: c.id,
      userId: c.userId,
      content: c.content,
      createdAt: c.createdAt,
      userName: c.user?.name ?? "Unknown",
      userImage: c.user?.image ?? null,
    }))
  );
}

export async function POST(req) {
  try {
    let { userId, postId, content } = await req.json();

    if (!userId || !postId || !content)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    if (content.length < 20 || content.length > 100) {
      return NextResponse.json(
        { error: "Meaningful comments must be 20–100 characters" },
        { status: 400 }
      );
    }

    postId = normalizeId(postId);

    await prisma.blogPost.upsert({
      where: { id: postId },
      update: {},
      create: { id: postId, title: postId, content: "" },
    });

    const existingCount = await prisma.comment.count({ where: { userId, postId } });
    if (existingCount >= 3)
      return NextResponse.json({ error: "Comment limit reached" }, { status: 429 });

    const newComment = await prisma.comment.create({
      data: { userId, postId, content },
      include: { user: true },
    });

    await redis.del(`post-meta:${postId}`);

    return NextResponse.json({
      id: newComment.id,
      userId: newComment.userId,
      content: newComment.content,
      createdAt: newComment.createdAt,
      userName: newComment.user?.name ?? "Unknown",
      userImage: newComment.user?.image ?? null,
    });
  } catch (err) {
    console.error("❌ POST /api/comments", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    let { commentId, userId } = await req.json();
    if (!commentId || !userId)
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment)
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    if (comment.userId !== userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

    await prisma.comment.delete({ where: { id: commentId } });
    await redis.del(`post-meta:${comment.postId}`);

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("❌ DELETE /api/comments", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
