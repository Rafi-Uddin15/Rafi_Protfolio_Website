"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-head">
          <p className="eyebrow reveal visible">Selected systems</p>
          <h2 className="section-heading reveal visible">Proof that the work can think and ship.</h2>
          <p className="section-copy reveal visible">
            A focused body of work across fraud analytics, medical AI, interpretable machine learning, and sensor-driven advisory systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)} visible`}
            >
              <div className="project-visual">
                <div className="project-icon">{project.icon}</div>
              </div>

              <div className="project-body">
                <p className="project-role">{project.role}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-copy">{project.description}</p>

                <div className="project-tags">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <span className="project-link">View Project -&gt;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
