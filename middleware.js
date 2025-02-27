import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  const authRes = await auth0.middleware(request);

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes;
  }

  const session = await auth0.getSession();

  if (!session) {
    return NextResponse.redirect(`${request.nextUrl.origin}/auth/login`);
  }

  return authRes;
}
