"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "0 clamp(1rem, 5vw, 4rem)",
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: scrolled
                    ? "rgba(10, 10, 15, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid transparent",
                transition: "all 0.4s ease",
            }}
        >
            {/* Logo */}
            <a
                href="#hero"
                style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.5px",
                }}
            >
                RU<span style={{ WebkitTextFillColor: "#818cf8" }}>.</span>
            </a>

            {/* Desktop Links */}
            <div
                style={{
                    display: "flex",
                    gap: 32,
                    alignItems: "center",
                }}
                className="nav-desktop"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#9ca3af",
                            transition: "color 0.3s",
                            letterSpacing: "0.5px",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#818cf8")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#9ca3af")
                        }
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="nav-mobile-toggle"
                style={{
                    display: "none",
                    flexDirection: "column",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                }}
            >
                <span
                    style={{
                        width: 24,
                        height: 2,
                        background: "#e8e8ed",
                        borderRadius: 2,
                        transition: "all 0.3s",
                        transform: mobileOpen
                            ? "rotate(45deg) translate(5px, 5px)"
                            : "none",
                    }}
                />
                <span
                    style={{
                        width: 24,
                        height: 2,
                        background: "#e8e8ed",
                        borderRadius: 2,
                        transition: "all 0.3s",
                        opacity: mobileOpen ? 0 : 1,
                    }}
                />
                <span
                    style={{
                        width: 24,
                        height: 2,
                        background: "#e8e8ed",
                        borderRadius: 2,
                        transition: "all 0.3s",
                        transform: mobileOpen
                            ? "rotate(-45deg) translate(5px, -5px)"
                            : "none",
                    }}
                />
            </button>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    className="nav-mobile-menu"
                    style={{
                        position: "fixed",
                        top: 72,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(10, 10, 15, 0.96)",
                        backdropFilter: "blur(20px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 32,
                        zIndex: 99,
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                fontSize: "1.25rem",
                                fontWeight: 600,
                                color: "#e8e8ed",
                                transition: "color 0.3s",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            {/* Responsive CSS injected via style tag */}
            <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
        </nav>
    );
}
