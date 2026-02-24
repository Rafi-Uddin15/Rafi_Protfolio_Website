"use client";

const experiences = [
    {
        role: "AI Intern",
        company: "Musemind",
        period: "Aug 2025 – Feb 2026",
        type: "Artificial Intelligence & Product Development",
        bullets: [
            "Worked closely with the founding team on AI-powered product features across ideation and prototyping and deployment.",
            "Developed and fine-tuned machine learning models for real-world business use cases to improve prediction accuracy.",
            "Collaborated cross-functionally with designers and engineers to integrate AI capabilities into the product suite.",
            "Conducted data analysis and model evaluation then presented findings and recommendations to senior leadership.",
        ],
    },
    {
        role: "Campus Captain",
        company: "OSTAD (EdTech Platform)",
        period: "Spring 2024",
        type: "Business Development & Strategy",
        bullets: [
            "Drove 30% engagement growth by executing go-to-market strategies for technical workshops.",
            "Acted as primary liaison between OSTAD and a 3000+ student community to build brand trust and awareness.",
            "Managed end-to-end operations for campus events including vendor coordination and participant onboarding for 200+ attendees.",
            "Led a team of 10 volunteers while delegating tasks and ensuring KPI achievement across all campaigns.",
        ],
    },
    {
        role: "Senior Associate",
        company: "East West University Sports Club",
        period: "2022 – 2023",
        type: "Operations & Stakeholder Management",
        bullets: [
            "Spearheaded logistics for EWU Cricketers Cup (300+ participants) and EWU 5K Run (500+ participants) with zero budget overruns.",
            "Conducted post-event analysis to identify bottlenecks and reduce operational costs by 15%.",
            "Built and managed relationships with 10+ external vendors and negotiated contracts to maximize value.",
            "Mentored 5 junior associates in project management and stakeholder communication.",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem)",
                maxWidth: 900,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">Experience</p>
            <h2 className="section-title reveal">Professional Journey</h2>

            <div
                style={{
                    position: "relative",
                    paddingLeft: 32,
                }}
            >
                {/* Timeline line */}
                <div
                    style={{
                        position: "absolute",
                        left: 7,
                        top: 0,
                        bottom: 0,
                        width: 2,
                        background:
                            "linear-gradient(180deg, #6366f1, rgba(99,102,241,0.1))",
                        borderRadius: 2,
                    }}
                />

                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className={`reveal reveal-delay-${i + 1}`}
                        style={{
                            position: "relative",
                            marginBottom: 48,
                        }}
                    >
                        {/* Timeline dot */}
                        <div
                            style={{
                                position: "absolute",
                                left: -32,
                                top: 8,
                                width: 16,
                                height: 16,
                                borderRadius: "50%",
                                background: i === 0 ? "#34d399" : "#6366f1",
                                border: "3px solid #0a0a0f",
                                boxShadow: i === 0
                                    ? "0 0 12px rgba(52,211,153,0.4)"
                                    : "0 0 12px rgba(99,102,241,0.4)",
                            }}
                        />

                        {/* Current badge for latest role */}
                        {i === 0 && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: -32,
                                    top: -18,
                                    fontSize: "0.6rem",
                                    fontWeight: 700,
                                    color: "#34d399",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.5px",
                                    whiteSpace: "nowrap",
                                    marginLeft: -4,
                                }}
                            >
                                Recent
                            </div>
                        )}

                        <div className="glass-card" style={{ padding: "28px 32px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    flexWrap: "wrap",
                                    gap: 8,
                                    marginBottom: 8,
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: "1.15rem",
                                            fontWeight: 700,
                                            color: "#e8e8ed",
                                        }}
                                    >
                                        {exp.role}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#818cf8",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {exp.company}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontSize: "0.8rem",
                                        color: i === 0 ? "#34d399" : "#6b7280",
                                        fontWeight: 500,
                                        padding: "4px 14px",
                                        background: i === 0
                                            ? "rgba(52,211,153,0.08)"
                                            : "rgba(99,102,241,0.08)",
                                        borderRadius: 999,
                                        border: i === 0
                                            ? "1px solid rgba(52,211,153,0.2)"
                                            : "1px solid rgba(99,102,241,0.15)",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {exp.period}
                                </span>
                            </div>

                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#6b7280",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    marginBottom: 14,
                                }}
                            >
                                {exp.type}
                            </p>

                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                }}
                            >
                                {exp.bullets.map((b, j) => (
                                    <li
                                        key={j}
                                        style={{
                                            display: "flex",
                                            gap: 10,
                                            fontSize: "0.9rem",
                                            color: "#9ca3af",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        <span style={{ color: "#6366f1", flexShrink: 0 }}>▸</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
