import type { APIRoute } from 'astro';

export const prerender = false;

async function parsePayload(request: Request): Promise<Record<string, unknown>> {
  const rawText = await request.text();
  if (!rawText) return {};

  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return JSON.parse(rawText) as Record<string, unknown>;
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(rawText);
    return Object.fromEntries(params.entries());
  }

  try {
    return JSON.parse(rawText) as Record<string, unknown>;
  } catch {
    const params = new URLSearchParams(rawText);
    if ([...params.keys()].length > 0) {
      return Object.fromEntries(params.entries());
    }
    throw new Error('Unsupported body format');
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await parsePayload(request);
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

    const runtimeEnv = (locals as any)?.runtime?.env ?? {};
    const apiKey = runtimeEnv.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    const toEmail = runtimeEnv.CONTACT_TO_EMAIL || import.meta.env.CONTACT_TO_EMAIL;

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
  } catch {
    return new Response(JSON.stringify({ error: 'Bad request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
