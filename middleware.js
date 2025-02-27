import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  try {
    const authRes = await auth0.middleware(request);

    if (request.nextUrl.pathname.startsWith("/auth")) {
      return authRes;
    }

    const { origin } = new URL(request.url)
    const session = await auth0.getSession(request);

    if (!session) {
      return NextResponse.redirect(`${origin}/auth/login`); // ✅ Fixed for production
    }

    return authRes;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.error();
  }
}
