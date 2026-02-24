"use client";

import Image from "next/image";

const achievements = [
    {
        title: "IEEE QPAIN 2025 Research Paper",
        description:
            "Presented research on Interpretable Illness-Category Classification from Drug Attributes Using XGBoost with SHAP Explanations at the IEEE International Conference on Quantum Photonics AI and Networking",
        type: "Research Publication",
        image: "/cert-ieee.jpeg",
        link: "https://scholar.google.com/citations?user=QxcDcOwAAAAJ&hl=en",
        color: "#6366f1",
    },
    {
        title: "National RoboFest 2024 Hackathon",
        description:
            "Participated in the Hackathon segment of Prime Bank Presents EWU National RoboFest 2024 showcasing skills in robotics and technology",
        type: "Hackathon",
        image: "/cert-hackathon.jpeg",
        link: null,
        color: "#3b82f6",
    },
    {
        title: "IBM Agentic AI with LangGraph and CrewAI",
        description:
            "Completed IBM certification covering agentic AI systems design with LangGraph and CrewAI and AutoGen and BeeAI. Learned to build structured multi-agent workflows and conversation-driven AI applications",
        type: "Coursera Certification",
        image: null,
        link: "https://www.coursera.org/account/accomplishments/verify/ISQCLEB9RMWF",
        color: "#059669",
    },
    {
        title: "Complete Data Science Training",
        description:
            "Earned Udemy certification covering the full data science pipeline: Mathematics and Statistics and Python programming and Machine Learning and Deep Learning with TensorFlow and data visualization with Tableau",
        type: "Udemy Certification",
        image: null,
        link: "https://www.udemy.com/certificate/UC-f438059f-cc76-4e44-a938-f83dd641715b/",
        color: "#a855f7",
    },
];

export default function Achievements() {
    return (
        <section
            id="achievements"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem)",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">Achievements</p>
            <h2 className="section-title reveal">Recognition and Certifications</h2>

            <div
                className="achievements-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 24,
                }}
            >
                {achievements.map((item, i) => (
                    <div
                        key={i}
                        className={`glass-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
                        style={{
                            padding: 0,
                            overflow: "hidden",
                        }}
                    >
                        {/* Certificate image */}
                        {item.image && (
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: 200,
                                    overflow: "hidden",
                                    borderBottom: `2px solid ${item.color}33`,
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                        opacity: 0.9,
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.8))",
                                    }}
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div style={{ padding: "24px 28px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 12,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        color: item.color,
                                        textTransform: "uppercase",
                                        letterSpacing: "1.5px",
                                        padding: "4px 12px",
                                        background: `${item.color}15`,
                                        borderRadius: 999,
                                        border: `1px solid ${item.color}30`,
                                    }}
                                >
                                    {item.type}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                    color: "#e8e8ed",
                                    marginBottom: 8,
                                    lineHeight: 1.4,
                                }}
                            >
                                {item.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#9ca3af",
                                    lineHeight: 1.7,
                                }}
                            >
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 6,
                                        marginTop: 14,
                                        fontSize: "0.85rem",
                                        color: "#818cf8",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                    }}
                                >
                                    {item.link.includes("scholar") ? "View on Google Scholar →" : "View Certificate →"}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
