import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = work.find((x) => x.slug === slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.oneLiner,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: { title: w.title, description: w.oneLiner, images: [{ url: w.image }] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = work.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const w = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <article className="pb-24">
      <header className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-20">
        <Link href="/#work" className="text-sm text-pull underline-offset-4 hover:underline">
          All work
        </Link>
        <p className="mt-8 text-sm text-muted">
          {w.kind}, {w.year}
        </p>
        <h1 className="mt-2 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">{w.title}</h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{w.oneLiner}</p>

        <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-rule py-6">
          {w.results.map((r) => (
            <div key={r.label}>
              <dt className="sr-only">{r.label}</dt>
              <dd className="tabular font-display text-2xl font-semibold sm:text-4xl">{r.value}</dd>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{r.label}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <Image
          src={w.image}
          alt={w.imageAlt}
          width={1600}
          height={1000}
          priority
          sizes="(min-width: 1024px) 64rem, 100vw"
          className="aspect-[16/10] h-auto w-full rounded-2xl object-cover"
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_14rem]">
        <div className="space-y-10 text-lg leading-relaxed">
          <section aria-labelledby="problem">
            <h2 id="problem" className="text-2xl font-semibold">The problem</h2>
            <p className="mt-3 text-muted">{w.problem}</p>
          </section>
          <section aria-labelledby="approach">
            <h2 id="approach" className="text-2xl font-semibold">What I did</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted marker:font-medium marker:text-push">
              {w.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </section>
          <section aria-labelledby="outcome">
            <h2 id="outcome" className="text-2xl font-semibold">The outcome</h2>
            <p className="mt-3 text-muted">{w.outcome}</p>
          </section>
        </div>

        <aside className="space-y-8 text-sm">
          <div>
            <h2 className="font-sans text-sm font-semibold">Stack</h2>
            <ul className="mt-2 space-y-1 text-muted">
              {w.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-sans text-sm font-semibold">Evidence</h2>
            <ul className="mt-2 space-y-1">
              {w.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-pull underline-offset-4 hover:underline">
                    {l.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav aria-label="More work" className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-rule px-4 pt-8 sm:px-6">
        <Link href={`/work/${next.slug}`} className="group">
          <span className="block text-sm text-muted">Next project</span>
          <span className="font-display text-2xl font-semibold group-hover:text-push">{next.title}</span>
        </Link>
        <Link href="/#contact" className="rounded-full bg-push px-6 py-3 font-medium text-white hover:bg-ink">
          Talk to me about this
        </Link>
      </nav>
    </article>
  );
}
