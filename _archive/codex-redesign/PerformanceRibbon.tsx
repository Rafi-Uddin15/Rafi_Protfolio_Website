"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";

export default function PerformanceRibbon() {
  return (
    <section className="w-full bg-[#141416] text-white py-20 relative overflow-hidden">
      {/* Radiant Ambient Highlight */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-12">
        {/* Section Tag */}
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase text-primary-fixed">
            BY THE NUMBERS // VERIFIED PERFORMANCE AUDIT
          </span>
          <span className="font-label-code text-label-code text-surface-variant">
            OPERATIONAL BENCHMARKS
          </span>
        </div>

        {/* 4-Stat Editorial Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-xl border border-white/5">
            <span className="font-headline-xl text-headline-xl text-white font-bold">40K+</span>
            <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">
              Records Audited
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant">
              Healthcare claims, drug entities, and business profiles reconciled without SLA breaches.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-xl border border-white/5">
            <span className="font-headline-xl text-headline-xl text-primary font-bold">99.8%</span>
            <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">
              Daily SLA Compliance
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant">
              High-accuracy data verification and due diligence deliverables for international accounts.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-xl border border-white/5">
            <span className="font-headline-xl text-headline-xl text-white font-bold">3,000+</span>
            <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">
              Community Footprint
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant">
              Students and workshop attendees mentored across technical cohorts and flagship events.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-xl border border-white/5">
            <span className="font-headline-xl text-headline-xl text-white font-bold">IEEE</span>
            <span className="font-label-code text-label-code text-primary-fixed uppercase tracking-wider">
              Published Author
            </span>
            <p className="font-body-sm text-body-sm text-surface-variant">
              Co-authored peer-reviewed research in IEEE Xplore with 99.52% model classification accuracy.
            </p>
          </div>
        </div>

        {/* Action Anchor Banner */}
        <div className="p-8 lg:p-12 bg-primary text-on-primary rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
            <span className="font-label-caps text-label-caps uppercase text-primary-fixed">
              Ready to redefine your benchmark?
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-tight text-white leading-none">
              COLLABORATE WITH RAFI UDDIN
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed pt-1">
              Currently evaluating full-time Data Solutions Analyst, Business Intelligence, and AI opportunities globally.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#141416] text-white rounded-full font-headline-sm text-label-code uppercase tracking-wider hover:bg-black transition-all shadow-md"
            >
              Get in Touch
            </a>
            <a
              href={personalInfo.resumePdf}
              download="Rafi_Uddin_Resume.pdf"
              className="px-8 py-4 bg-transparent border border-white/40 text-white rounded-full font-headline-sm text-label-code uppercase tracking-wider hover:bg-white hover:text-on-surface transition-all"
            >
              Download PDF Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
