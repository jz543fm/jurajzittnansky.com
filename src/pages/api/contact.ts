import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 3;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  if (entry.count > RATE_MAX_REQUESTS) {
    return true;
  }

  return false;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const clientIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown';

    if (isRateLimited(clientIp)) {
      return new Response(JSON.stringify({ error: 'Too many requests' }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
        },
      });
    }

    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      const text = await request.text();
      if (text) {
        body = Object.fromEntries(new URLSearchParams(text).entries());
      }
    }

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const message = String(body.message ?? '').trim();
    const honeypot = String(body.website ?? '').trim();

    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!name || !email || !message || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (message.length > 4000) {
      return new Response(JSON.stringify({ error: 'Message too long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const workerEnv = env as Record<string, string | undefined>;
    const apiKey = (workerEnv.RESEND_API_KEY || import.meta.env.RESEND_API_KEY || '').trim();
    const toEmail = (workerEnv.CONTACT_TO_EMAIL || import.meta.env.CONTACT_TO_EMAIL || '').trim();

    if (!apiKey || !toEmail) {
      return new Response(JSON.stringify({ error: 'Mail service not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <contact@jurajzittnansky.com>',
        to: [toEmail],
        reply_to: email,
        subject: `[jurajzittnansky.com] Správa od ${name}`,
        text: `Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}`,
      }),
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Bad request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
