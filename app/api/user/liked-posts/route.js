import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req) {
  const origin = req.nextUrl.origin;

  // Fetch the Auth0 profile session
  const me = await fetch(`${origin}/auth/profile`, {
    headers: { cookie: req.headers.get("cookie") || "" },
  });

  if (!me.ok) {
    return NextResponse.json(
      { likedPosts: [], error: "Not authenticated" },
      { status: 401 }
    );
  }

  // ❗ FIX: /auth/profile returns the user object directly
  const profile = await me.json();
  const user = profile;

  if (!user || !user.sub) {
    return NextResponse.json({ likedPosts: [] }, { status: 401 });
  }

  const userId = user.sub;

  // Fetch liked posts from Prisma
  const likedRows = await prisma.like.findMany({
    where: { userId },
    include: {
      blogpost: {
        select: {
          id: true,
          title: true,
          category: true,
          createdAt: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const likedPosts = likedRows.map((l) => l.blogpost);

  return NextResponse.json({ likedPosts });
}
