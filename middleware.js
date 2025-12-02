import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  const start = Date.now();

  const authRes = await auth0.middleware(request);
  const session = await auth0.getSession();

  // If not logged in, redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log(`${request.method} ${request.nextUrl.pathname} → ${Date.now() - start}ms`);
  return authRes;
}

export const config = {
  matcher: ["/blog/:path*"],
};
