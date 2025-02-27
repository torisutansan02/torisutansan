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

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
  }