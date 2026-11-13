"use client";

import React from "react";
import { collaborationTiers } from "@/data/portfolio";

export default function CollaborationTiers() {
  return (
    <section id="tiers" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl">
      <div className="flex flex-col gap-3 pb-10 text-center items-center">
        <span className="font-label-code text-label-code text-primary uppercase font-bold">
          06 // ENGAGEMENT MODELS
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          COLLABORATION <span className="text-primary">TIERS &amp; ROLES</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Flexible engagement models for full-time corporate hiring, strategic AI research sprints, or turnkey Power BI dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {collaborationTiers.map((tier) => (
          <div
            key={tier.tier}
            className={`rounded-xl p-8 flex flex-col justify-between shadow-sm transition-all ${
              tier.featured
                ? "bg-[#141416] text-white shadow-2xl relative lg:-translate-y-3 border border-white/10"
                : "bg-surface-container hover:shadow-md border border-surface-variant/40"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 right-8 px-4 py-1 rounded-full bg-primary text-on-primary font-label-caps text-label-caps uppercase shadow-lg font-bold">
                PRIMARY FOCUS
              </div>
            )}

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span
                  className={`font-label-caps text-label-caps uppercase ${
                    tier.featured ? "text-primary-fixed" : "text-on-surface-variant"
                  }`}
                >
                  {tier.subtitle}
                </span>
                <h3
                  className={`font-headline-lg text-headline-lg font-bold ${
                    tier.featured ? "text-white" : "text-on-surface"
                  }`}
                >
                  {tier.title}
                </h3>
              </div>

              <div className="flex items-baseline gap-2 pb-4 border-b border-surface-variant/20">
                <span
                  className={`font-headline-xl text-headline-xl font-extrabold tracking-tight ${
                    tier.featured ? "text-primary-fixed" : "text-on-surface"
                  }`}
                >
                  {tier.rate}
                </span>
                <span
                  className={`font-label-code text-label-code ${
                    tier.featured ? "text-white/60" : "text-on-surface-variant"
                  }`}
                >
                  • {tier.period}
                </span>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        tier.featured ? "text-primary-fixed" : "text-primary"
                      }`}
                    >
                      check_circle
                    </span>
                    <span
                      className={`font-body-sm text-body-sm ${
                        tier.featured ? "text-white/90" : "text-on-surface"
                      }`}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className={`mt-8 w-full py-4 rounded-full font-headline-sm text-headline-sm text-center transition-all shadow-md block ${
                tier.featured
                  ? "bg-primary text-on-primary hover:bg-primary-container"
                  : "bg-surface-container-highest text-on-surface hover:bg-on-surface hover:text-surface"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
