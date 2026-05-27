"use client";

import { heroMetrics } from "@/data/portfolio";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy reveal visible">
            <div className="hero-badge">Data Solutions | Research QA | AI</div>
            <h1 className="hero-title">
              Rafi Uddin
              <strong>turns raw data into client-ready intelligence.</strong>
            </h1>
            <p className="hero-text">
              Analyst and AI practitioner delivering verified research, due-diligence reporting, business intelligence, and machine learning systems for teams that need accuracy at speed.
            </p>

            <div className="hero-highlight">
              <span className="feature-pill">SEBPO Data Solutions Analyst</span>
              <span className="feature-pill">IEEE Published Researcher</span>
              <span className="feature-pill">AI + Business Intelligence</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                Explore Work
              </a>
              <a href="/Rafi_Uddin_Resume.pdf" className="btn-outline" download>
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2 visible">
            <div className="motion-stage" aria-label="Animated data and AI decision system graphic">
              <div className="orbit orbit-one">
                <span />
              </div>
              <div className="orbit orbit-two">
                <span />
              </div>
              <div className="orbit orbit-three">
                <span />
              </div>

              <div className="data-core">
                <div className="core-face core-face-front">
                  <span>AI</span>
                  <small>Decision Layer</small>
                </div>
                <div className="core-face core-face-back" />
                <div className="core-face core-face-left" />
                <div className="core-face core-face-right" />
              </div>

              <div className="data-panel panel-one">
                <span className="panel-kicker">Research QA</span>
                <strong>96%</strong>
                <i />
              </div>
              <div className="data-panel panel-two">
                <span className="panel-kicker">BI Signal</span>
                <strong>40K+</strong>
                <i />
              </div>
              <div className="data-panel panel-three">
                <span className="panel-kicker">Current Role</span>
                <strong>SEBPO</strong>
                <i />
              </div>
            </div>

            <div className="hero-visual-card" aria-label="Core capability signals">
              <div className="signal-row">
                <span>Research accuracy</span>
                <div className="signal-meter"><span style={{ width: "96%" }} /></div>
              </div>
              <div className="signal-row">
                <span>AI delivery</span>
                <div className="signal-meter"><span style={{ width: "88%" }} /></div>
              </div>
              <div className="signal-row">
                <span>Client readiness</span>
                <div className="signal-meter"><span style={{ width: "94%" }} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="metric-strip" aria-label="Portfolio highlights">
        {heroMetrics.map((metric) => (
          <div className="metric-card reveal visible" key={metric.label}>
            <p className="metric-number">{metric.number}</p>
            <p className="metric-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
