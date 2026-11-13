"use client";

import React from "react";
import { capabilities } from "@/data/portfolio";

export default function Capabilities() {
  return (
    <section id="capabilities" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl">
      <div className="flex flex-col gap-3 pb-10">
        <div className="flex items-center gap-3">
          <span className="font-label-code text-label-code text-primary uppercase font-bold">
            03 // CAPABILITIES
          </span>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          POWERFUL ANALYTICAL <span className="text-primary">SERVICES &amp; CAPABILITIES</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Comprehensive capabilities spanning large-scale data verification, explainable AI model evaluation, and executive business intelligence dashboards.
        </p>
      </div>

      {/* Capabilities Rows */}
      <div className="flex flex-col gap-4">
        {capabilities.map((item) => (
          <div
            key={item.index}
            className="group p-6 sm:p-8 rounded-xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm border border-surface-variant/30"
          >
            <div className="flex items-start sm:items-center gap-6">
              <span className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tighter">
                {item.index}
              </span>
              <div className="flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors font-bold">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 lg:justify-end">
              {item.chips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-surface font-label-code text-label-code text-on-surface shadow-xs"
                >
                  {chip}
                </span>
              ))}
              <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-label-code text-label-code font-bold">
                {item.highlightChip}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
