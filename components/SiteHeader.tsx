import Link from "next/link";
import { person } from "@/data/portfolio";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          Rafi Uddin
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded px-2 py-1.5 text-sm text-muted transition-colors hover:text-ink sm:px-3 ${
                l.label === "Experience" ? "hidden sm:inline-block" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={person.resumePdf}
            download
            className="ml-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-push"
          >
            CV <span className="sr-only">(PDF download)</span>
            <span aria-hidden="true" className="text-paper/60"> PDF</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
