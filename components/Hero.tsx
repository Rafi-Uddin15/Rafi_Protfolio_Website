import Image from "next/image";
import { person } from "@/data/portfolio";
import ExplainChart from "./ExplainChart";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Image
              src={person.portrait}
              alt="Portrait of Rafi Uddin"
              width={56}
              height={56}
              priority
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-sm leading-tight">
              <p className="font-medium">{person.name}</p>
              <p className="text-muted">
                {person.role}, {person.location}
              </p>
            </div>
          </div>

          <h1 id="hero-title" className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            I check the data before anyone trusts it, then explain what it says.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{person.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-push px-6 py-3 font-medium text-white transition-colors hover:bg-ink"
            >
              Ask me about a role
            </a>
            <a
              href={person.resumePdf}
              download
              className="rounded-full border border-ink/20 px-6 py-3 font-medium transition-colors hover:border-ink"
            >
              Download CV (PDF)
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{person.availability}</p>
        </div>

        <ExplainChart />
      </div>
    </section>
  );
}
