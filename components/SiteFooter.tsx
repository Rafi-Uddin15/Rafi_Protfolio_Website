import { person } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {person.name}, {person.location}. Every number on this site is in my CV.
        </p>
        <p className="flex gap-5">
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">LinkedIn</a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
          <a href={person.resumePdf} download className="hover:text-paper">CV (PDF)</a>
        </p>
      </div>
    </footer>
  );
}
