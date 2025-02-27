import { NextResponse } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request) {
  try {
    const authRes = await auth0.middleware(request);

    if (request.nextUrl.pathname.startsWith("/auth")) {
      return authRes;
    }

    const session = await auth0.getSession(request); // ✅ Pass `request`

    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return authRes;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.error();
  }
}
