import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  if (isMobile) {
    const currentPath = request.nextUrl.pathname + request.nextUrl.search;
    return NextResponse.redirect(`https://m.godzillasoft.ru${currentPath}`, 302);
  }

  const response = NextResponse.next();
  const searchParams = request.nextUrl.searchParams.toString();
  response.headers.set("searchParams", searchParams);
  return response;
}

export const config = {
  matcher: '/:path*',
};