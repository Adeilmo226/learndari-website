import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

const clerkAuth = clerkMiddleware()

export default function middleware(req: NextRequest) {
  // Proxy /__clerk/* requests to clerk.learndari.com with correct Host header
  if (req.nextUrl.pathname.startsWith('/__clerk')) {
    const clerkPath = req.nextUrl.pathname.replace('/__clerk', '') + req.nextUrl.search
    const clerkUrl = `https://clerk.learndari.com${clerkPath}`

    return NextResponse.rewrite(new URL(clerkUrl), {
      request: {
        headers: new Headers({
          ...Object.fromEntries(req.headers),
          host: 'clerk.learndari.com',
        }),
      },
    })
  }

  // All other requests go through Clerk auth middleware
  return clerkAuth(req, {} as any)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
