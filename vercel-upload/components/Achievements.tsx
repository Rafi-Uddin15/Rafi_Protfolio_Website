"use client";

import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Signals</p>
          <h2 className="section-heading reveal visible">Recognition that backs the claim.</h2>
          <p className="section-copy reveal visible">
            Research, certifications, and competitive experiences that sharpen the portfolio beyond project work.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <article key={item.title} className={`glass-card achievement-card reveal reveal-delay-${Math.min(i + 1, 4)} visible`}>
              <p className="achievement-type">{item.type}</p>
              <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
              <p style={{ marginTop: "0.75rem", lineHeight: 1.7 }}>{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View -&gt;
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
