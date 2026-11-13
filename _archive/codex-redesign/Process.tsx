"use client";

import React from "react";
import { processSteps } from "@/data/portfolio";

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#141416] text-white py-space-2xl my-space-lg relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase text-primary-fixed tracking-widest font-bold">
              04 // EXECUTION PIPELINE
            </span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-white tracking-tight">
            DISCIPLINED PROCESS <span className="text-primary-fixed">THAT GUARANTEES</span> ACCURACY
          </h2>
          <p className="font-body-lg text-body-lg text-white/70 max-w-xl">
            A battle-tested 4-stage operational framework calibrated to eliminate discrepancies, enforce regulatory compliance, and deliver actionable insights.
          </p>
        </div>

        {/* Roadmap Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 flex flex-col justify-between h-full group hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code px-3 py-1 rounded-full bg-primary text-on-primary font-bold">
                    {step.step}
                  </span>
                  <span className="material-symbols-outlined text-[22px] text-white/40 group-hover:text-primary-fixed transition-colors">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white font-semibold">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-6 font-label-code text-label-code text-primary-fixed font-semibold">
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
