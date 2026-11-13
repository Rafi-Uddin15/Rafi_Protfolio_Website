import Image from "next/image";
import { credentials, education, experience, toolkit } from "@/data/portfolio";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <h2 id="exp-title" className="max-w-2xl text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
        Where I&rsquo;ve done it
      </h2>

      <ol className="mt-12 space-y-0">
        {experience.map((r) => (
          <li
            key={r.org}
            className="grid gap-3 border-t border-rule py-8 md:grid-cols-[10rem_minmax(0,18rem)_1fr] md:gap-8"
          >
            <p className="tabular text-sm text-muted md:pt-1">{r.period}</p>
            <div className="flex items-start gap-3">
              {r.logo ? (
                <Image
                  src={r.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-lg border border-rule bg-sheet object-contain p-1"
                />
              ) : (
                <span aria-hidden="true" className="h-10 w-10 shrink-0 rounded-lg border border-rule bg-sheet" />
              )}
              <div>
                <h3 className="font-sans text-base font-semibold leading-tight">{r.title}</h3>
                <p className="text-sm text-muted">{r.org}</p>
              </div>
            </div>
            <ul className="space-y-2 text-[0.95rem] leading-relaxed">
              {r.points.map((p) => (
                <li key={p} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-push-bar">
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-12 border-t border-rule pt-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Education & credentials</h3>
          <p className="mt-4 font-medium">{education.degree}</p>
          <p className="text-muted">
            {education.school}, {education.year}
          </p>
          <ul className="mt-2 text-sm text-muted">
            {education.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm">
            {credentials.map((c) => (
              <li key={c.label}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-pull underline-offset-4 hover:underline">
                  {c.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Toolkit, with receipts</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink/20 text-muted">
                  <th scope="col" className="py-2 pr-4 font-medium">Tool</th>
                  <th scope="col" className="py-2 pr-4 font-medium">What I use it for</th>
                  <th scope="col" className="py-2 font-medium">Shown in</th>
                </tr>
              </thead>
              <tbody>
                {toolkit.map((t) => (
                  <tr key={t.tool} className="border-b border-rule align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold whitespace-nowrap">{t.tool}</th>
                    <td className="py-3 pr-4 text-muted">{t.use}</td>
                    <td className="py-3 whitespace-nowrap">
                      {t.proof ? (
                        <Link href={t.proof.href} className="text-pull underline-offset-4 hover:underline">
                          {t.proof.label}
                        </Link>
                      ) : (
                        <span className="text-muted">Ask me</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
