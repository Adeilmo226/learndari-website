import { NextResponse } from 'next/server'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS = 60

/**
 * Simple in-memory rate limiter.
 * Returns a 429 NextResponse if rate limit exceeded, or null if allowed.
 */
export function rateLimit(ip: string): NextResponse | null {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return null
  }

  entry.count++

  if (entry.count > MAX_REQUESTS) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  return null
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitMap) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 5 * 60 * 1000)
