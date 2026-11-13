"use client";

import React from "react";
import { valueProps } from "@/data/portfolio";

export default function ValueProposition() {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl">
      <div className="flex flex-col gap-3 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-label-code text-label-code text-primary uppercase font-bold">
            01 // VALUE PROPOSITION
          </span>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          MEASURABLE IMPACT THROUGH <span className="text-primary">DATA &amp; AI RIGOUR</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Bridging the divide between raw multi-source datasets and hardened operational intelligence. Every workflow is engineered to enforce data integrity, regulatory compliance, and client trust.
        </p>
      </div>

      {/* Bento Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bento 1: SLA Compliance Card */}
        <div className="md:col-span-4 rounded-xl bg-surface-container p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
              {valueProps.slaRate}
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {valueProps.slaLabel}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">
              {valueProps.slaDesc}
            </p>
          </div>
          <div className="pt-6">
            <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[99.8%] rounded-full"></div>
            </div>
            <div className="flex justify-between font-label-code text-label-code text-on-surface-variant pt-2">
              <span>Client Baseline (95%)</span>
              <span className="font-bold text-primary">SLA Target Exceeded (99.8%)</span>
            </div>
          </div>
        </div>

        {/* Bento 2: Full-Stack Data & AI Systems Card with Radial Glow */}
        <div className="md:col-span-8 rounded-xl bg-[#141416] text-white p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest">
                Operational Framework
              </span>
              <h3 className="font-headline-lg text-headline-lg tracking-tight text-white">
                {valueProps.fullstackTitle}
              </h3>
              <p className="font-body-md text-body-md text-white/75 max-w-md">
                {valueProps.fullstackDesc}
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 font-label-code text-label-code text-white/90 self-start border border-white/10">
              SQL + Power BI + Python + SHAP
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {valueProps.metrics.map((item, idx) => (
              <div key={idx} className="rounded-lg bg-white/5 p-4 backdrop-blur-sm border border-white/5">
                <span className="font-headline-md text-headline-md text-primary-fixed font-bold">
                  {item.value}
                </span>
                <p className="font-body-sm text-body-sm text-white/70 pt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bento 3: Three Disciplines Strip */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface-container flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {pillar.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
