"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const [dhakaTime, setDhakaTime] = useState<string>("");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalInfo.portfolio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setDhakaTime(timeStr);
      } catch {
        setDhakaTime("12:00 PM BST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-variant/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-surface-variant/40">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="font-headline-hero text-headline-hero tracking-tighter text-on-surface leading-none select-none">
              {personalInfo.registeredName}
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant pt-2 leading-relaxed">
              Analyst in Data Solutions &amp; AI Practitioner shaping verified data operations, explainable machine learning architectures, and executive business intelligence for global organizations.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-96">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Dispatch // Direct Contact &amp; Updates
            </span>
            {subscribed ? (
              <div className="px-4 py-2.5 rounded-full bg-emerald-500/10 text-emerald-700 font-label-code text-xs font-semibold">
                ✓ Thank you. We will be in touch!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center bg-surface rounded-full p-1.5 gap-2 shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-surface-variant/50"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent px-4 py-2 w-full font-body-sm text-body-sm text-on-surface placeholder:text-secondary focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-on-surface text-surface font-label-caps text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
          {/* Social & Web Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-label-code text-label-code text-primary font-bold hover:underline"
            >
              <span className="material-symbols-outlined text-[16px]">language</span>
              <span>rafiuddin.vercel.app</span>
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full font-label-code text-xs text-on-surface hover:bg-primary hover:text-white transition-all cursor-pointer border border-surface-variant/40"
              title="Copy portfolio website URL"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? "check" : "content_copy"}
              </span>
              <span>{copied ? "Link Copied!" : "Copy URL"}</span>
            </button>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
            >
              Google Scholar
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="font-label-code text-label-code text-on-surface-variant hover:text-primary transition-colors"
            >
              WhatsApp / Phone
            </a>
          </div>

          {/* Time & Copyright */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface font-label-code text-label-code text-on-surface-variant shadow-[0_1px_8px_rgba(0,0,0,0.04)] border border-surface-variant/40">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              <span>DHAKA — {dhakaTime || "06:00 PM BST"}</span>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant">
              © 2026 Rafi Uddin. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
