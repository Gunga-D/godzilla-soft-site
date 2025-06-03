import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    return NextResponse.redirect('https://m.godzillasoft.ru', 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};