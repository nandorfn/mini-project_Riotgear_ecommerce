import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./app/utils/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const verifiedToken = token && (await verifyAuth(token))
    
  if (!verifiedToken || (verifiedToken && verifiedToken.role !== 'admin')) {
    if (req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  if (verifiedToken) {
    if (req.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}
export const config = {
  matcher: ['/admin', '/login']
}