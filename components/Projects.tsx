"use client";

const projects = [
    {
        title: "Healthcare Claims Risk Engine",
        subtitle: "Business Intelligence & Fraud Detection",
        role: "Data Analyst",
        description:
            "Developed an automated fraud detection system for 40,000+ healthcare claims. Built SQL pipelines and Power BI dashboards that identified financial anomalies and projected a 40% reduction in manual audit hours.",
        tools: ["SQL", "Power BI", "Python", "Excel (VBA)"],
        link: "https://github.com/Rafi-Uddin15/Healthcare-Claims-Risk-Engine",
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
        icon: "📊",
        illustration: {
            bg: "linear-gradient(135deg, #1e1b4b, #312e81)",
            elements: ["bar-chart", "shield"],
        },
    },
    {
        title: "RetiNet AI Suite",
        subtitle: "Medical AI for Diabetic Retinopathy Detection",
        role: "AI Engineer",
        description:
            "Built a production-grade AI application for diagnosing diabetic retinopathy from retinal images. Achieved 92% accuracy using Swin Transformers and integrated Explainable AI (Grad-CAM) to visualize disease indicators for doctors.",
        tools: ["Python", "PyTorch", "Docker", "Streamlit"],
        link: "https://github.com/Rafi-Uddin15/RetiNet-Pro",
        gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
        icon: "🧠",
        illustration: {
            bg: "linear-gradient(135deg, #2e1065, #4c1d95)",
            elements: ["eye", "neural"],
        },
    },
    {
        title: "Pharma Market Intelligence",
        subtitle: "Predictive Analytics & Market Forecasting",
        role: "Data Scientist",
        description:
            "Analyzed pharmaceutical market using 10,000+ drug records. Developed a predictive model with 99.52% accuracy for drug classification. Published findings at IEEE QPAIN 2025 conference.",
        tools: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        link: "https://github.com/Rafi-Uddin15",
        gradient: "linear-gradient(135deg, #059669, #34d399)",
        icon: "💊",
        illustration: {
            bg: "linear-gradient(135deg, #064e3b, #065f46)",
            elements: ["line-chart", "pill"],
        },
    },
    {
        title: "AI Air Quality Advisor",
        subtitle: "IoT + AI Indoor Environmental Monitoring",
        role: "AI & IoT Engineer",
        description:
            "Built an AI-powered indoor environmental advisory system using Arduino sensors and real-time data analysis. The system monitors air quality and temperature and humidity then provides intelligent recommendations via an interactive Streamlit dashboard.",
        tools: ["Python", "Arduino", "Streamlit", "Scikit-Learn"],
        link: "https://github.com/Rafi-Uddin15",
        gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
        icon: "🌱",
        illustration: {
            bg: "linear-gradient(135deg, #083344, #164e63)",
            elements: ["sensor", "leaf"],
        },
    },
];

function ProjectIllustration({ project }: { project: typeof projects[0] }) {
    return (
        <div
            style={{
                background: project.illustration.bg,
                padding: "40px 32px 32px",
                position: "relative",
                overflow: "hidden",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
            }}
        >
            {/* Decorative floating elements */}
            <div
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 50,
                    right: 60,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -20,
                    left: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                }}
            />

            {/* Mini chart illustration */}
            <div
                style={{
                    position: "absolute",
                    top: 24,
                    left: 28,
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 4,
                    height: 50,
                    opacity: 0.3,
                }}
            >
                {[35, 55, 25, 70, 45, 60, 80, 50].map((h, i) => (
                    <div
                        key={i}
                        style={{
                            width: 6,
                            height: `${h}%`,
                            background: "rgba(255,255,255,0.5)",
                            borderRadius: 2,
                        }}
                    />
                ))}
            </div>

            {/* Dotted grid pattern */}
            <div
                style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 60,
                    height: 60,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 8,
                    opacity: 0.15,
                }}
            >
                {Array(16)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            style={{
                                width: 3,
                                height: 3,
                                borderRadius: "50%",
                                background: "#fff",
                            }}
                        />
                    ))}
            </div>

            <span style={{ fontSize: "2.5rem", position: "relative", zIndex: 2 }}>
                {project.icon}
            </span>
            <h3
                style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#fff",
                    marginTop: 12,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {project.title}
            </h3>
            <p
                style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                    marginTop: 4,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {project.subtitle}
            </p>
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem)",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">Projects</p>
            <h2 className="section-title reveal">Featured Work</h2>
            <p
                className="reveal"
                style={{
                    color: "#6b7280",
                    fontSize: "0.95rem",
                    marginBottom: 40,
                    maxWidth: 600,
                }}
            >
                A selection of projects showcasing my range from business intelligence
                dashboards to production-grade AI systems and full-stack web apps.
            </p>

            <div
                className="projects-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 28,
                }}
            >
                {projects.map((project, i) => (
                    <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`glass-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
                        style={{
                            padding: 0,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        {/* Visual illustration header */}
                        <ProjectIllustration project={project} />

                        {/* Project body */}
                        <div
                            style={{
                                padding: "24px 32px 28px",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#818cf8",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    marginBottom: 12,
                                }}
                            >
                                Role: {project.role}
                            </p>
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#9ca3af",
                                    lineHeight: 1.75,
                                    flex: 1,
                                }}
                            >
                                {project.description}
                            </p>

                            {/* Tools */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8,
                                    marginTop: 20,
                                }}
                            >
                                {project.tools.map((tool, j) => (
                                    <span key={j} className="skill-tag">
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {/* Link indicator */}
                            <div
                                style={{
                                    marginTop: 20,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    color: "#818cf8",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                }}
                            >
                                View on GitHub
                                <span
                                    style={{
                                        transition: "transform 0.3s",
                                        display: "inline-block",
                                    }}
                                >
                                    →
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
