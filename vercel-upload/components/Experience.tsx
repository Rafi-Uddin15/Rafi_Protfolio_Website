"use client";

import Image from "next/image";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Career track</p>
          <h2 className="section-heading reveal visible">Operational discipline meets analytical execution.</h2>
          <p className="section-copy reveal visible">
            A timeline across data solutions, AI delivery, go-to-market execution, and high-pressure event operations.
          </p>
        </div>

        <div className="timeline reveal reveal-delay-1 visible">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className="timeline-item">
              <div className="timeline-top">
                <div className="timeline-company-block">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={180}
                      height={40}
                      className="timeline-company-logo"
                    />
                  )}
                  <div>
                    <h3 className="timeline-title">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                </div>
                <p className="timeline-period">{exp.period}</p>
              </div>

              <p className="timeline-summary">{exp.summary}</p>

              <div className="experience-impact-grid">
                {exp.impact.map((item) => (
                  <div key={item} className="experience-impact">
                    {item}
                  </div>
                ))}
              </div>

              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
