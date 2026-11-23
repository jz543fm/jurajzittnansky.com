import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
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
    const apiKey = workerEnv.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    const toEmail = workerEnv.CONTACT_TO_EMAIL || import.meta.env.CONTACT_TO_EMAIL;

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
      const details = await res.text();
      return new Response(JSON.stringify({ error: 'Failed to send email', details }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: 'Bad request', detail }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
