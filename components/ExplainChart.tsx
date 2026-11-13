import Link from "next/link";
import { explanation, type Factor } from "@/data/portfolio";

/**
 * "Explain this candidate": a SHAP waterfall where the model is a hiring decision.
 * Each row starts where the previous one ended. Magenta pushes the outcome up, blue pulls it down.
 * Pure CSS: bars grow in order on load, hover or focus a row to dim the rest, click for evidence.
 */
export default function ExplainChart() {
  const { factors, base, output } = explanation;

  const rows = factors.reduce<(Factor & { start: number; end: number })[]>((acc, f) => {
    const from = acc.length ? acc[acc.length - 1].end : 0;
    const end = f.direction === "up" ? from + f.weight : from - f.weight;
    return [...acc, { ...f, start: Math.min(from, end), end }];
  }, []);
  const span = Math.max(...rows.map((r) => r.start + r.weight));
  const pct = (n: number) => `${(n / span) * 100}%`;

  return (
    <figure className="rounded-2xl border border-rule bg-sheet p-5 shadow-[0_1px_0_rgba(15,27,45,0.04)] sm:p-7">
      <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="font-display text-lg font-semibold">Explain this candidate</span>
        <span className="text-xs text-muted">
          <span className="font-medium text-push">■</span> pushes up{" "}
          <span className="ml-2 font-medium text-pull">■</span> pulls down
        </span>
      </figcaption>

      <p className="mb-3 font-mono text-xs text-muted">
        base: <span className="text-ink">{base}</span>
      </p>

      <ol className="group/chart space-y-4">
        {rows.map((r, i) => {
          const up = r.direction === "up";
          return (
            <li
              key={r.id}
              className="transition-opacity duration-200 group-has-[a:hover]/chart:opacity-35 group-has-[a:focus-visible]/chart:opacity-35 has-[a:hover]:!opacity-100 has-[a:focus-visible]:!opacity-100"
            >
              <Link
                href={r.evidence.href}
                className="-m-1 block rounded-md p-1 outline-offset-2"
              >
                <span className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-sm font-medium leading-tight">{r.feature}</span>
                  <span
                    className={`label-in font-mono text-[11px] leading-snug ${up ? "text-push" : "text-pull"}`}
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <span className="sr-only">{up ? "Pushes up: " : "Pulls down: "}</span>
                    {r.value}
                    <span className="sr-only">. {r.evidence.label}.</span>
                  </span>
                </span>
                <span aria-hidden="true" className="relative block h-6 sm:h-7">
                  <span className="absolute inset-y-[-4px] left-0 border-l border-rule" />
                  <span
                    className="bar-grow absolute inset-y-0"
                    style={
                      {
                        left: pct(r.start),
                        width: pct(r.weight),
                        "--i": i,
                        "--origin": up ? "left" : "right",
                        background: up ? "var(--color-push-bar)" : "var(--color-pull-bar)",
                        clipPath: up
                          ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)"
                          : "polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)",
                      } as React.CSSProperties
                    }
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 border-t border-rule pt-3 font-mono text-xs text-muted">
        output: <span className="font-medium text-ink">{output}</span>
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Bar lengths are my own weighting, not a model&rsquo;s. Every row links to the evidence behind it.
      </p>
    </figure>
  );
}
