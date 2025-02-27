import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  try {
    const authRes = await auth0.middleware(request);

    if (request.nextUrl.pathname.startsWith("/auth")) {
      return authRes;
    }

    const session = await auth0.getSession(request);

    if (!session) {
      const baseUrl = request.nextUrl.origin || process.env.APP_BASE_URL || "http://localhost:3000";
      return NextResponse.redirect(new URL("/auth/login", baseUrl)); // ✅ Fixed URL issue
    }

    return authRes;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.error();
  }
}
