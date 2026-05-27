"use client";

import type { CSSProperties } from "react";
import { capabilitySystems, educationItems, liveRows, stackHighlights } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Capability console</p>
          <h2 className="section-heading reveal visible">A real-time operating stack for data work.</h2>
          <p className="section-copy reveal visible">
            Instead of isolated tools, this is the working system: research quality, BI judgment, AI experimentation, and delivery discipline moving together.
          </p>
        </div>

        <div className="toolbox-dashboard reveal visible">
          <div className="toolbox-command glass-card">
            <div className="toolbox-command-top">
              <div>
                <p className="toolbox-status">Systems online</p>
                <h3>Data Solutions Core</h3>
              </div>
              <span className="toolbox-pulse">Live</span>
            </div>

            <div className="toolbox-orb" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="live-signal-list">
              {liveRows.map((row) => (
                <div className="live-signal-row" key={row.label}>
                  <div>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                  <i>
                    <b style={{ width: row.width }} />
                  </i>
                </div>
              ))}
            </div>
          </div>

          <div className="capability-grid">
            {capabilitySystems.map((system, i) => (
              <article key={system.title} className={`capability-card glass-card reveal reveal-delay-${Math.min(i + 1, 4)} visible`}>
                <div className="capability-head">
                  <span>{system.signal}</span>
                  <strong>{system.level}%</strong>
                </div>
                <h3>{system.title}</h3>
                <div className="capability-ring" style={{ "--level": `${system.level}%` } as CSSProperties}>
                  <span>{system.level}</span>
                </div>
                <div className="capability-tools">
                  {system.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="stack-marquee reveal reveal-delay-2 visible" aria-label="Technical stack">
          <div className="stack-track">
            {[...stackHighlights, ...stackHighlights].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className="section-head reveal reveal-delay-2 visible" style={{ marginTop: "4rem" }}>
          <p className="eyebrow">Education</p>
          <h2 className="section-heading">Academic foundation</h2>
        </div>

        <div className="education-grid education-grid-three">
          {educationItems.map((item) => (
            <div className="glass-card education-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
