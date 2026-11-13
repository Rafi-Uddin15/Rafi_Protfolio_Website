import { NextResponse } from "next/server";

/**
 * Contact endpoint. Delivers via Resend's REST API when configured:
 *   RESEND_API_KEY     - from resend.com
 *   CONTACT_TO_EMAIL   - where messages go
 *   CONTACT_FROM_EMAIL - verified sender, e.g. "Portfolio <hello@yourdomain.com>"
 *                        (defaults to Resend's onboarding sender, which only delivers to the account owner)
 * Without a key it logs in development and returns 503 in production, so the form shows the email fallback
 * instead of pretending the message was sent.
 */

const MIN_FILL_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>(); // best effort: per serverless instance

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function str(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const message = str(body.message, 4000);
  const honeypot = str(body.website, 200);
  const elapsed = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;

  // Bots: pretend success so they don't retry.
  if (honeypot || elapsed < MIN_FILL_MS) return NextResponse.json({ ok: true });

  if (!name || !email || message.length < 10) {
    return NextResponse.json({ error: "Please fill in your name, email and a short message." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages in a short time. Please try again later." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY/CONTACT_TO_EMAIL not set; message not sent:", { name, email, message });
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[contact] Email delivery is not configured.");
    return NextResponse.json({ error: "The form isn't connected right now." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio: message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `${message}\n\n-\n${name} <${email}>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "The message couldn't be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
