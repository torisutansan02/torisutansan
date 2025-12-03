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
        { favoritedPosts: [], error: "Not authenticated" },
        { status: 401 }
        );
    }

    // ❗ FIX: /auth/profile returns the user object directly
    const profile = await me.json();
    const user = profile;
    
    if (!user || !user.sub) {
    return NextResponse.json({ favoritedPosts: [] }, { status: 401 });
    }
    const userId = user.sub;
    
    // Fetch favorited posts from Prisma
    const favoritedRows = await prisma.favorite.findMany({
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
    
    const favoritedPosts = favoritedRows.map((f) => f.blogpost);
    
    return NextResponse.json({ favoritedPosts });
}