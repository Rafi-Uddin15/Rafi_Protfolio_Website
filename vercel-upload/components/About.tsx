"use client";

import { aboutStats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Profile</p>
          <h2 className="section-heading reveal visible">A data solutions analyst built for accuracy at scale.</h2>
          <p className="section-copy reveal visible">
            I work across research operations, verification, due-diligence reporting, business intelligence, and AI-assisted analysis for teams that need reliable decisions under deadline pressure.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-panel reveal visible">
            <h3>Current background</h3>
            <p style={{ marginTop: "1rem", lineHeight: 1.85 }}>
              I am currently working as an Analyst - Data Solutions at SEBPO, supporting North American client workflows through cross-source verification, demographic and identity research, structured due-diligence reporting, and concise English-language content synthesis. My CSE background and AI project experience help me bring technical judgment, quality discipline, and analytical clarity to high-volume data operations.
            </p>
          </div>

          <div className="detail-grid reveal reveal-delay-1 visible">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="glass-card detail-card">
                <p className="detail-number">{stat.number}</p>
                <p className="detail-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
