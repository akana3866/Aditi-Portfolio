import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  if (pathname === '/' || pathname === '') {
    return NextResponse.rewrite(new URL('/portfolio-canvas.html', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
