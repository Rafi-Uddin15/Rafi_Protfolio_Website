"use client";

export default function About() {
    return (
        <section
            id="about"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem)",
                maxWidth: 1100,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">About Me</p>
            <h2 className="section-title reveal">
                Where Technology Meets Business Strategy
            </h2>

            <div
                className="reveal about-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 32,
                }}
            >
                {/* Left column */}
                <div
                    className="glass-card"
                    style={{ padding: "32px" }}
                >
                    <h3
                        style={{
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            marginBottom: 16,
                            color: "#e8e8ed",
                        }}
                    >
                        🎯 My Mission
                    </h3>
                    <p
                        style={{
                            color: "#9ca3af",
                            fontSize: "0.95rem",
                            lineHeight: 1.8,
                        }}
                    >
                        I am a CSE graduate from{" "}
                        <strong style={{ color: "#e8e8ed" }}>
                            East West University
                        </strong>{" "}
                        with a deep passion for solving real-world problems through data and
                        strategy. Most recently, I completed an{" "}
                        <strong style={{ color: "#34d399" }}>AI internship at Musemind</strong>,
                        where I worked on production ML models alongside the founding team.
                        My journey spans from building AI-powered medical tools to leading
                        campus-wide business operations. I continuously seek roles where I
                        can combine analytical thinking with strategic execution.
                    </p>
                </div>

                {/* Right column */}
                <div
                    className="glass-card"
                    style={{ padding: "32px" }}
                >
                    <h3
                        style={{
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            marginBottom: 16,
                            color: "#e8e8ed",
                        }}
                    >
                        🚀 What I Bring
                    </h3>
                    <ul
                        style={{
                            color: "#9ca3af",
                            fontSize: "0.95rem",
                            lineHeight: 2,
                            listStyle: "none",
                            padding: 0,
                        }}
                    >
                        {[
                            "Published IEEE researcher in AI/ML interpretability",
                            "Hands-on experience with SQL and Power BI and Python",
                            "Proven leader of 500+ participant operations",
                            "Strong communicator across technical and non-technical teams",
                            "Adaptable fast learner open to any challenge",
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                <span style={{ color: "#6366f1", fontSize: "1rem", marginTop: 2 }}>▸</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Quick stats */}
            <div
                className="reveal stats-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 20,
                    marginTop: 40,
                }}
            >
                {[
                    { number: "3.20", label: "CGPA" },
                    { number: "500+", label: "Participants Managed" },
                    { number: "40K+", label: "Records Analyzed" },
                    { number: "1", label: "IEEE Publication" },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="glass-card"
                        style={{
                            padding: "24px",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.75rem",
                                fontWeight: 800,
                                background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                marginBottom: 4,
                            }}
                        >
                            {stat.number}
                        </p>
                        <p
                            style={{
                                fontSize: "0.8rem",
                                color: "#6b7280",
                                fontWeight: 500,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                            }}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Responsive grid fix */}
            <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
