"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "projects", "capabilities", "process", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Work", href: "#projects", id: "projects" },
    { label: "Services", href: "#capabilities", id: "capabilities" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Pricing", href: "#tiers", id: "tiers" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "bg-[#fbf9f6]/90 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          : "bg-[#fbf9f6]/70 shadow-none"
      }`}
    >
      <div className="h-20 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-4">
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-headline-sm font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase font-bold leading-none">
                {personalInfo.brandName}
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase">
                Data &amp; AI
              </span>
            </div>
          </Link>
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              {personalInfo.status}
            </span>
          </div>
        </div>

        {/* Center Pill Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-surface-container-low rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 font-label-code text-label-code transition-all rounded-full ${
                  isActive
                    ? "bg-primary text-on-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Profile Avatar */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumePdf}
            download="Rafi_Uddin_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-headline-sm text-label-code rounded-full hover:bg-primary-container transition-all shadow-[0_4px_16px_rgba(172,46,0,0.25)] hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[18px]">description</span>
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>

          <a
            href="#hero"
            className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/40 hover:ring-primary transition-all shrink-0"
            title="Rafi Uddin"
          >
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
              priority
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-surface-variant px-6 py-6 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 rounded-xl font-label-code text-label-code text-on-surface hover:bg-surface-container-low transition-colors uppercase font-semibold"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center bg-primary text-on-primary font-label-code rounded-full uppercase font-bold"
            >
              Contact Rafi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
