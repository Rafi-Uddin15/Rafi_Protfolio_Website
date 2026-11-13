import Image from "next/image";
import Link from "next/link";
import { work } from "@/data/portfolio";

export default function WorkList() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-rule bg-sheet">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 max-w-2xl">
          <h2 id="work-title" className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Three projects, each with its evidence
          </h2>
          <p className="mt-4 text-lg text-muted">
            Research, a BI pipeline and a vision model. All three explain their own answers, which is the part I care
            about most.
          </p>
        </div>

        <ul className="divide-y divide-rule border-y border-rule">
          {work.map((w, i) => (
            <li key={w.slug}>
              <Link
                href={`/work/${w.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10"
              >
                <div className={`overflow-hidden rounded-xl bg-paper ${i % 2 ? "md:order-2" : ""}`}>
                  <Image
                    src={w.image}
                    alt={w.imageAlt}
                    width={704}
                    height={440}
                    sizes="(min-width: 768px) 22rem, 100vw"
                    className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-muted">
                    {w.kind}, {w.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-push sm:text-3xl">
                    {w.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-muted">{w.oneLiner}</p>
                  <dl className="mt-6 grid max-w-xl grid-cols-3 gap-4">
                    {w.results.map((r) => (
                      <div key={r.label}>
                        <dt className="sr-only">{r.label}</dt>
                        <dd className="tabular font-display text-xl font-semibold sm:text-2xl">{r.value}</dd>
                        <dd className="mt-1 text-xs leading-snug text-muted">{r.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-6 text-sm font-medium text-pull">Read the case study</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
