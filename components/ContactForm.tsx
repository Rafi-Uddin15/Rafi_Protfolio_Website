"use client";

import { useRef, useState } from "react";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export default function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef<number>(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsedMs: Date.now() - startedAt.current }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-paper/20 p-8">
        <p className="font-display text-2xl font-semibold">Thanks, it&rsquo;s in my inbox.</p>
        <p className="mt-2 text-paper/75">I reply within two working days, usually sooner.</p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 text-sm underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-lg border border-paper/25 bg-paper/5 px-4 py-3 text-paper placeholder:text-paper/45 focus:border-paper focus:outline-none";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      className="space-y-5"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Work email
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        The role or question
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder="Team, role, and what you'd want me working on in the first month."
          className={`${field} resize-y`}
        />
      </label>
      {/* Honeypot: hidden from people and screen readers, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="rounded-full bg-push px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-ink disabled:opacity-60"
        >
          {status.kind === "sending" ? "Sending…" : "Send to Rafi"}
        </button>
        <p className="text-sm text-paper/70">Goes straight to my inbox. No mailing list.</p>
      </div>

      {status.kind === "error" && (
        <p role="alert" className="rounded-lg border border-push-bar/60 bg-push/15 px-4 py-3 text-sm">
          {status.message} You can also email{" "}
          <a href={`mailto:${fallbackEmail}`} className="font-medium underline underline-offset-4">
            {fallbackEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}
