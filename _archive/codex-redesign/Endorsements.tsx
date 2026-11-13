"use client";

import React from "react";
import { references } from "@/data/portfolio";

export default function Endorsements() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl">
      <div className="flex flex-col gap-3 pb-10">
        <div className="flex items-center gap-3">
          <span className="font-label-code text-label-code text-primary uppercase font-bold">
            05 // PROFESSIONAL REFERENCES
          </span>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          LEADERSHIP <span className="text-primary">ENDORSEMENTS</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Direct references and testimonials from agency leadership and university academic faculty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((ref, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-xl bg-surface-container flex flex-col justify-between gap-6 shadow-sm border border-surface-variant/40"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                “{ref.endorsement}”
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-surface-variant/40">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {ref.name[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {ref.name}
                </span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  {ref.role}, {ref.organization}
                </span>
                <span className="font-label-code text-xs text-secondary">{ref.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
