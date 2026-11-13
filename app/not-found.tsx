import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-4 py-24 sm:px-6">
      <p className="font-mono text-sm text-push">404: record not found</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">I checked every source. This page isn&rsquo;t in any of them.</h1>
      <p className="mt-4 text-lg text-muted">The link may be old, or mistyped.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-ink px-6 py-3 font-medium text-paper hover:bg-push">
          Go to the homepage
        </Link>
        <Link href="/#work" className="rounded-full border border-ink/20 px-6 py-3 font-medium hover:border-ink">
          See the work
        </Link>
      </div>
    </section>
  );
}
