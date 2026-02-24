"use client";

const skillCategories = [
    {
        title: "Business & Analytics",
        icon: "📈",
        skills: [
            { name: "Power BI", level: 85 },
            { name: "SQL", level: 80 },
            { name: "Excel (Advanced/VBA)", level: 90 },
            { name: "Tableau", level: 70 },
            { name: "Business Comm.", level: 85 },
        ],
    },
    {
        title: "AI and Data Science",
        icon: "🤖",
        skills: [
            { name: "Python", level: 85 },
            { name: "Machine Learning", level: 80 },
            { name: "Deep Learning (PyTorch)", level: 75 },
            { name: "Computer Vision", level: 70 },
            { name: "Scikit-Learn", level: 75 },
            { name: "Pandas / NumPy", level: 80 },
        ],
    },
    {
        title: "Leadership & Soft Skills",
        icon: "🎯",
        skills: [
            { name: "Team Leadership", level: 90 },
            { name: "Stakeholder Mgt.", level: 85 },
            { name: "Strategic Planning", level: 80 },
            { name: "Public Speaking", level: 80 },
            { name: "Adaptability", level: 95 },
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem)",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">Skills</p>
            <h2 className="section-title reveal">Technical & Professional Toolkit</h2>

            <div
                className="skills-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 24,
                }}
            >
                {skillCategories.map((cat, i) => (
                    <div
                        key={i}
                        className={`glass-card reveal reveal-delay-${i + 1}`}
                        style={{ padding: "28px" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 24,
                            }}
                        >
                            <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                            <h3
                                style={{
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                    color: "#e8e8ed",
                                }}
                            >
                                {cat.title}
                            </h3>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 18,
                            }}
                        >
                            {cat.skills.map((skill, j) => (
                                <div key={j}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginBottom: 6,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "#9ca3af",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.75rem",
                                                color: "#6b7280",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {skill.level}%
                                        </span>
                                    </div>
                                    {/* Progress bar */}
                                    <div
                                        style={{
                                            width: "100%",
                                            height: 6,
                                            background: "rgba(99,102,241,0.1)",
                                            borderRadius: 3,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${skill.level}%`,
                                                height: "100%",
                                                background:
                                                    "linear-gradient(90deg, #6366f1, #a78bfa)",
                                                borderRadius: 3,
                                                transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <div className="reveal" style={{ marginTop: 60 }}>
                <p className="section-heading">Education</p>
                <h2 className="section-title">Academic Background</h2>

                <div
                    className="education-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 24,
                    }}
                >
                    <div className="glass-card" style={{ padding: "28px" }}>
                        <h3
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#e8e8ed",
                                marginBottom: 8,
                            }}
                        >
                            🎓 B.Sc. in Computer Science & Engineering
                        </h3>
                        <p style={{ color: "#818cf8", fontSize: "0.9rem", fontWeight: 500 }}>
                            East West University, Dhaka
                        </p>
                        <p style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: 4 }}>
                            Graduated: December 2025
                        </p>
                        <div
                            style={{
                                marginTop: 16,
                                padding: "12px 16px",
                                background: "rgba(99,102,241,0.08)",
                                borderRadius: 10,
                                borderLeft: "3px solid #6366f1",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#9ca3af",
                                }}
                            >
                                <strong style={{ color: "#e8e8ed" }}>CGPA: 3.20 / 4.00</strong>
                                <br />
                                Specialization: Intelligent Systems & Data Science
                            </p>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: "28px" }}>
                        <h3
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#e8e8ed",
                                marginBottom: 8,
                            }}
                        >
                            📜 HSC & SSC
                        </h3>
                        <p style={{ color: "#818cf8", fontSize: "0.9rem", fontWeight: 500 }}>
                            Dhaka City College (Science) / High School (Science)
                        </p>
                        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                            <div
                                style={{
                                    padding: "12px 16px",
                                    background: "rgba(99,102,241,0.08)",
                                    borderRadius: 10,
                                    borderLeft: "3px solid #6366f1",
                                }}
                            >
                                <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                                    <strong style={{ color: "#e8e8ed" }}>HSC (2020): GPA 5.00 / 5.00</strong>
                                    <br />
                                    <span style={{ color: "#34d399", fontSize: "0.8rem", fontWeight: 600 }}>🏅 Govt. Scholarship Holder</span>
                                </p>
                            </div>
                            <div
                                style={{
                                    padding: "12px 16px",
                                    background: "rgba(99,102,241,0.08)",
                                    borderRadius: 10,
                                    borderLeft: "3px solid #6366f1",
                                }}
                            >
                                <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
                                    <strong style={{ color: "#e8e8ed" }}>SSC (2018): GPA 5.00 / 5.00</strong>
                                    <br />
                                    <span style={{ color: "#34d399", fontSize: "0.8rem", fontWeight: 600 }}>🏅 Govt. Scholarship Holder</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .education-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
