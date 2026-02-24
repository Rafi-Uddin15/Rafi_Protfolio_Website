"use client";

import { useState } from "react";

/* ── SVG Icons ── */
const icons = {
    email: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8e8ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
        </svg>
    ),
    linkedin: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    github: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8e8ed">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    scholar: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#4285F4">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 107 7 7 7 0 00-7-7z" />
        </svg>
    ),
    phone: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8e8ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
    ),
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 18px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        color: "#e8e8ed",
        fontSize: "0.95rem",
        fontFamily: "inherit",
        outline: "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
    };

    const contactItems = [
        {
            icon: icons.email,
            label: "Email",
            value: "rafiuddinofficial@gmail.com",
            link: "mailto:rafiuddinofficial@gmail.com",
        },
        {
            icon: icons.linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/rafi-uddin1",
            link: "https://www.linkedin.com/in/rafi-uddin1",
        },
        {
            icon: icons.github,
            label: "GitHub",
            value: "github.com/Rafi-Uddin15",
            link: "https://github.com/Rafi-Uddin15",
        },
        {
            icon: icons.scholar,
            label: "Google Scholar",
            value: "Rafi Uddin",
            link: "https://scholar.google.com/citations?user=QxcDcOwAAAAJ&hl=en",
        },
        {
            icon: icons.phone,
            label: "Phone",
            value: "+88 01334752560",
            link: "tel:+8801334752560",
        },
    ];

    return (
        <section
            id="contact"
            style={{
                padding: "100px clamp(1.5rem, 5vw, 6rem) 80px",
                maxWidth: 900,
                margin: "0 auto",
            }}
        >
            <p className="section-heading reveal">Contact</p>
            <h2 className="section-title reveal">Let&apos;s Connect</h2>

            <div
                className="contact-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 32,
                }}
            >
                {/* Contact Info */}
                <div className="reveal">
                    <p
                        style={{
                            color: "#9ca3af",
                            fontSize: "0.95rem",
                            lineHeight: 1.8,
                            marginBottom: 32,
                        }}
                    >
                        I&apos;m always open to new opportunities and conversations. Whether
                        you have a question or a project idea or just want to say hello
                        feel free to reach out!
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                        }}
                    >
                        {contactItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="glass-card"
                                style={{
                                    padding: "14px 18px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    textDecoration: "none",
                                    transition: "border-color 0.3s, transform 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        background: "rgba(99,102,241,0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "#6b7280",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                        }}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.88rem",
                                            color: "#e8e8ed",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="glass-card reveal reveal-delay-2"
                    style={{ padding: "32px" }}
                >
                    <h3
                        style={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#e8e8ed",
                            marginBottom: 24,
                        }}
                    >
                        Send me a message
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div>
                            <label
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    display: "block",
                                    marginBottom: 6,
                                }}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="Your name"
                                required
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "#6366f1";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 0 3px rgba(99,102,241,0.1)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>

                        <div>
                            <label
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    display: "block",
                                    marginBottom: 6,
                                }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="your@email.com"
                                required
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "#6366f1";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 0 3px rgba(99,102,241,0.1)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>

                        <div>
                            <label
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#6b7280",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    display: "block",
                                    marginBottom: 6,
                                }}
                            >
                                Message
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Your message..."
                                required
                                rows={4}
                                style={{
                                    ...inputStyle,
                                    resize: "vertical",
                                    minHeight: 100,
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.style.borderColor = "#6366f1";
                                    e.currentTarget.style.boxShadow =
                                        "0 0 0 3px rgba(99,102,241,0.1)";
                                }}
                                onBlur={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={status === "sending"}
                            style={{
                                width: "100%",
                                justifyContent: "center",
                                marginTop: 8,
                                opacity: status === "sending" ? 0.7 : 1,
                            }}
                        >
                            <span>
                                {status === "idle" && "Send Message ✉️"}
                                {status === "sending" && "Sending..."}
                                {status === "sent" && "Message Sent! ✅"}
                                {status === "error" && "Failed. Try Again ❌"}
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div
                className="reveal"
                style={{
                    marginTop: 80,
                    textAlign: "center",
                    padding: "24px 0",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                    © {new Date().getFullYear()} Rafi Uddin · Built with Next.js &
                    deployed on Vercel
                </p>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
