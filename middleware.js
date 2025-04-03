import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  const start = Date.now(); // ✅ Start timer

  const authRes = await auth0.middleware(request);

  // Allow public access to /auth routes
  if (request.nextUrl.pathname.startsWith("/auth")) {
    logRequest(request, start); // ✅ Log before early return
    return authRes;
  }

  const { origin } = new URL(request.url);
  const session = await auth0.getSession();

  if (!session) {
    logRequest(request, start); // ✅ Log before redirect
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  logRequest(request, start); // ✅ Log successful authed request
  return authRes;
}

// ✅ Helper logger
function logRequest(request, start) {
  const duration = Date.now() - start;
  console.log(`${request.method} ${request.nextUrl.pathname} → ${duration}ms`);
}

// ✅ Middleware route matcher (you already have this)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
