import { NextResponse } from 'next/server';
import { auth0 } from './lib/auth0';

export async function middleware(request) {
  const start = Date.now();

  const { pathname } = request.nextUrl;

  // ✅ Allow public routes
  if (
    pathname.startsWith('/auth') ||
    pathname.startsWith('/api/public') ||
    pathname === '/'
  ) {
    logRequest(request, start);
    return NextResponse.next();
  }

  // ✅ Only check session (avoid double-auth calls)
  const session = await auth0.getSession();

  if (!session) {
    const loginUrl = new URL('/auth/login', request.url);
    logRequest(request, start);
    return NextResponse.redirect(loginUrl);
  }

  logRequest(request, start);
  return NextResponse.next();
}

// ✅ Log request timing
function logRequest(request, start) {
  const duration = Date.now() - start;
  console.log(`🛡 ${request.method} ${request.nextUrl.pathname} → ${duration}ms`);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
