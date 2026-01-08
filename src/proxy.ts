import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(req: NextRequest) {
  const session = req.cookies.get('better-auth.session_token');

  if(!session) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: '/dashboard/:path*',
}