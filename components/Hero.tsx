"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const titles = [
            "Business Intelligence",
            "AI & Data Science",
            "Strategic Growth",
            "Digital Innovation",
        ];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            if (!titleRef.current) return;
            const current = titles[index];

            if (!isDeleting) {
                titleRef.current.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
            } else {
                titleRef.current.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % titles.length;
                }
            }
            setTimeout(type, isDeleting ? 40 : 80);
        };

        const timeout = setTimeout(type, 800);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "120px clamp(1.5rem, 5vw, 6rem) 80px",
            }}
        >
            <div
                className="hero-container"
                style={{
                    maxWidth: 1000,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 60,
                }}
            >
                {/* Left: Text content */}
                <div style={{ flex: 1, maxWidth: 600 }}>
                    {/* Greeting */}
                    <p
                        className="reveal visible"
                        style={{
                            fontSize: "1.1rem",
                            fontWeight: 500,
                            color: "#818cf8",
                            marginBottom: 16,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: 32,
                                height: 2,
                                background: "#818cf8",
                                borderRadius: 1,
                            }}
                        />
                        Hello, I&apos;m
                    </p>

                    {/* Name */}
                    <h1
                        style={{
                            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: 16,
                            letterSpacing: "-1px",
                        }}
                    >
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #e8e8ed 0%, #818cf8 50%, #a78bfa 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Rafi Uddin
                        </span>
                    </h1>

                    {/* Typing title */}
                    <h2
                        style={{
                            fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                            fontWeight: 600,
                            color: "#9ca3af",
                            marginBottom: 28,
                            minHeight: "2.5rem",
                        }}
                    >
                        I craft solutions in{" "}
                        <span
                            ref={titleRef}
                            style={{
                                color: "#818cf8",
                                borderRight: "2px solid #818cf8",
                                paddingRight: 4,
                                animation: "blink 1s step-end infinite",
                            }}
                        />
                    </h2>

                    {/* Description */}
                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "#9ca3af",
                            lineHeight: 1.8,
                            maxWidth: 600,
                            marginBottom: 40,
                        }}
                    >
                        Computer Science graduate from East West University passionate about
                        bridging{" "}
                        <strong style={{ color: "#e8e8ed" }}>technology and business</strong>.
                        I build data-driven solutions and lead cross-functional initiatives
                        that transform complex problems into strategic opportunities.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <a href="#projects" className="btn-primary">
                            <span>View Projects</span>
                            <span>→</span>
                        </a>
                        <a
                            href="/Rafi_Uddin_Resume.pdf"
                            download="Rafi_Uddin_Resume.pdf"
                            className="btn-primary"
                            style={{
                                background: "linear-gradient(135deg, #059669, #34d399)",
                            }}
                        >
                            <span>Download CV</span>
                            <span>↓</span>
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Right: Profile Picture */}
                <div
                    className="hero-image"
                    style={{
                        flexShrink: 0,
                        position: "relative",
                    }}
                >
                    {/* Glow behind image */}
                    <div
                        style={{
                            position: "absolute",
                            inset: -20,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)",
                            filter: "blur(30px)",
                            zIndex: 0,
                        }}
                    />
                    {/* Decorative ring */}
                    <div
                        style={{
                            position: "absolute",
                            inset: -8,
                            borderRadius: "50%",
                            border: "2px solid rgba(99,102,241,0.15)",
                            zIndex: 1,
                            animation: "spin 20s linear infinite",
                        }}
                    />
                    {/* Profile image */}
                    <div
                        style={{
                            width: 280,
                            height: 280,
                            borderRadius: "50%",
                            overflow: "hidden",
                            border: "3px solid rgba(99,102,241,0.3)",
                            position: "relative",
                            zIndex: 2,
                            boxShadow: "0 0 40px rgba(99,102,241,0.15)",
                        }}
                    >
                        <Image
                            src="/profile.jpeg"
                            alt="Rafi Uddin"
                            width={280}
                            height={280}
                            priority
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            border-color: #818cf8;
          }
          50% {
            border-color: transparent;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse !important;
            text-align: center;
          }
          .hero-image {
            margin-bottom: 20px;
          }
        }
      `}</style>
        </section>
    );
}
