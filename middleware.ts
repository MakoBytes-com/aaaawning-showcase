import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

/**
 * Protect /admin and all sub-paths with HTTP Basic Auth.
 * Credentials come from ADMIN_USER + ADMIN_PASSWORD Vercel env vars.
 * Uses constant-time comparison to resist timing attacks.
 */
export function middleware(req: NextRequest) {
  const expectedUser = process.env.ADMIN_USER;
  const expectedPass = process.env.ADMIN_PASSWORD;

  // If credentials aren't configured, block access entirely rather than
  // failing open. The admin area must never be reachable without auth.
  if (!expectedUser || !expectedPass) {
    return new NextResponse(
      "Admin area is not configured. Set ADMIN_USER and ADMIN_PASSWORD.",
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("basic ")) {
    const decoded = atob(auth.slice(6));
    const idx = decoded.indexOf(":");
    if (idx !== -1) {
      const user = decoded.slice(0, idx);
      const pass = decoded.slice(idx + 1);
      if (timingSafeEqual(user, expectedUser) && timingSafeEqual(pass, expectedPass)) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="AAA Awning Admin", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

/** Constant-time string comparison. Avoids leaking length via early exit. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Still run the loop to mask the difference
    let diff = 1;
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max; i++) {
      diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
    }
    return false && diff === 0;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
