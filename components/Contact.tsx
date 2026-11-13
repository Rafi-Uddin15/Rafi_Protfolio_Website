import { person } from "@/data/portfolio";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <h2 id="contact-title" className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Hiring for data or AI? Tell me about the role.
          </h2>
          <p className="mt-5 text-lg text-paper/75">{person.availability}</p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-paper/60">Email</dt>
              <dd>
                <a href={`mailto:${person.email}`} className="text-lg font-medium underline-offset-4 hover:underline">
                  {person.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/60">Elsewhere</dt>
              <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-base">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">LinkedIn</a>
                <a href={person.github} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">GitHub</a>
                <a href={person.scholar} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Google Scholar</a>
              </dd>
            </div>
            <div>
              <dt className="text-paper/60">Based in</dt>
              <dd className="text-base">{person.location} (GMT+6)</dd>
            </div>
          </dl>
        </div>
        <ContactForm fallbackEmail={person.email} />
      </div>
    </section>
  );
}
