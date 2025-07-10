import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Create the i18n middleware
const i18nMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Apply different logic based on path
  if (pathname.startsWith('/api/')) {
    // Custom API middleware logic
    console.log('API route accessed:', pathname);
    // You could add authentication, rate limiting, etc.
    return NextResponse.next();
  }
  
  if (pathname.startsWith('/admin/')) {
    // Admin-specific middleware
    console.log('Admin route accessed:', pathname);
    // Add admin authentication, role checking, etc.
    return NextResponse.next();
  }
  
  if (pathname.startsWith('/public/')) {
    // Public routes - no i18n needed
    console.log('Public route accessed:', pathname);
    return NextResponse.next();
  }
  
  // Apply i18n middleware to all other routes
  return i18nMiddleware(request);
}

export const config = {
  // Multiple matchers for different path patterns
  matcher: [
    // Apply to all routes except static files and Next.js internals
    '/((?!_next|_vercel|.*\\..*).*)',
    // Specific patterns you want to handle
    '/api/:path*',
    '/admin/:path*',
    '/public/:path*'
  ]
};
