"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <section id="projects" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-space-3xl flex flex-col gap-16">
      {/* Top Editorial Header & Category Filters */}
      <div className="flex flex-col gap-8">
        {/* Monograph Index Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-label-caps uppercase text-primary tracking-widest">
              ARCHIVE // 02
            </span>
            <span className="font-label-code text-label-code text-on-surface-variant">
              FOLIO VOL. IV • 2022—2026
            </span>
          </div>
          <div className="flex items-center gap-2 font-label-code text-label-code text-on-surface-variant">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>CURATED SELECTION [06 VERIFIED ENTERPRISE &amp; RESEARCH PROJECTS]</span>
          </div>
        </div>

        {/* Main Headline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tighter">
              SELECTED WORKS <br />
              <span className="text-primary font-headline-xl italic tracking-tight">
                &amp; CASE STUDIES
              </span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated selection of verified data operations, explainable biomedical AI architectures, and high-velocity business intelligence systems engineered for corporate and research impact.
            </p>
          </div>

          {/* Metric Highlight Badge */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="p-6 bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-2 w-full max-w-sm border border-surface-variant/40">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Cumulative Records
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  trending_up
                </span>
              </div>
              <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
                40,000+
              </span>
              <span className="font-body-sm text-body-sm text-secondary">
                Claims and enterprise records verified with zero critical SLA deviations.
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-full font-label-code text-label-code transition-all shadow-sm ${
              activeFilter === "all"
                ? "bg-on-surface text-surface"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            All (06)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("data-ops")}
            className={`px-5 py-2 rounded-full font-label-code text-label-code transition-all shadow-sm ${
              activeFilter === "data-ops"
                ? "bg-on-surface text-surface"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Data Operations &amp; Due Diligence
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("ai")}
            className={`px-5 py-2 rounded-full font-label-code text-label-code transition-all shadow-sm ${
              activeFilter === "ai"
                ? "bg-on-surface text-surface"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            AI &amp; Neural Systems
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("bi")}
            className={`px-5 py-2 rounded-full font-label-code text-label-code transition-all shadow-sm ${
              activeFilter === "bi"
                ? "bg-on-surface text-surface"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Business Intelligence
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("leadership")}
            className={`px-5 py-2 rounded-full font-label-code text-label-code transition-all shadow-sm ${
              activeFilter === "leadership"
                ? "bg-on-surface text-surface"
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            Leadership &amp; Operations
          </button>
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="flex flex-col gap-16">
        {/* PROJECT 01: SEBPO DATA SOLUTIONS (Flagship Hero Card) */}
        {(activeFilter === "all" || activeFilter === "data-ops") && (
          <article className="project-item group w-full bg-surface-container-low rounded-xl shadow-sm p-6 lg:p-10 flex flex-col gap-8 transition-all hover:shadow-md border border-surface-variant/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  01 // B2B DATA VERIFICATION &amp; OPERATIONS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  2026 — ACTIVE CLIENT DELIVERY
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full font-label-caps text-label-caps text-on-surface uppercase">
                  +99.8% SLA Compliance
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed font-label-caps text-label-caps text-on-tertiary-fixed uppercase">
                  International Accounts
                </span>
              </div>
            </div>

            {/* Asymmetric Visual Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Frame */}
              <div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-sm bg-surface-variant h-[380px] lg:h-[480px]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-inverse-surface/85 backdrop-blur-md rounded-lg p-4 flex flex-wrap items-center justify-between gap-4 text-inverse-on-surface">
                  <div className="flex items-center gap-4">
                    <span className="font-label-caps text-label-caps uppercase text-primary-fixed">
                      Scope
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-variant">
                      {projects[0].scope}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-label-code text-label-code text-primary-fixed">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>{projects[0].compliance}</span>
                  </div>
                </div>
              </div>

              {/* Narrative & Actions */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-none font-bold">
                    {projects[0].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {projects[0].description}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    {projects[0].metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-surface-container"
                      >
                        <span className="font-label-code text-label-code text-secondary">
                          {m.label}
                        </span>
                        <span className="font-label-code text-label-code font-semibold text-on-surface">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between px-6 py-4 rounded-full bg-primary text-on-primary font-headline-sm text-label-code uppercase tracking-wider hover:bg-primary-container transition-all group-hover:shadow-[0_8px_24px_-4px_rgba(172,46,0,0.35)]"
                >
                  <span>Inquire About Operations Role</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* TWO-COLUMN MOSAIC (Projects 02 & 03) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PROJECT 02: PHARMA MARKET INTELLIGENCE (Dark Tonal Accent Card) */}
          {(activeFilter === "all" || activeFilter === "ai") && (
            <article className="project-item group bg-inverse-surface text-inverse-on-surface rounded-xl p-8 lg:p-10 flex flex-col justify-between gap-8 shadow-sm transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
                    02 // EXPLAINABLE AI &amp; BIOMEDICAL RESEARCH
                  </span>
                  <span className="px-2.5 py-1 bg-surface/10 rounded-full font-label-caps text-label-caps text-surface">
                    IEEE QPAIN 2025
                  </span>
                </div>

                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-black/40 flex items-center justify-center p-4">
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    unoptimized
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-white font-bold">
                    {projects[1].title}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant">
                    {projects[1].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-2 font-label-code text-label-code text-surface-variant">
                  <span>Python</span>
                  <span>•</span>
                  <span>XGBoost</span>
                  <span>•</span>
                  <span>SHAP Interpretability</span>
                </div>
                <a
                  href={projects[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all"
                  title="View Paper on Google Scholar"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </article>
          )}

          {/* PROJECT 03: MUSEMIND AI & RESEARCH CANVAS */}
          {(activeFilter === "all" || activeFilter === "ai") && (
            <article className="project-item group bg-surface-container-low rounded-xl p-8 lg:p-10 flex flex-col justify-between gap-8 shadow-sm transition-all hover:shadow-md border border-surface-variant/40">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                    03 // AI BENCHMARKING &amp; PRODUCT INTELLIGENCE
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-caps text-label-caps text-on-surface-variant">
                    Executive Briefings
                  </span>
                </div>

                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-surface-variant">
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded font-label-code text-label-code text-white">
                    AI SYNTHESIS TEMPLATES
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-on-surface font-bold">
                    {projects[2].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {projects[2].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-2 font-label-code text-label-code text-secondary">
                  <span>Market Intelligence</span>
                  <span>•</span>
                  <span>UX Benchmarking</span>
                  <span>•</span>
                  <span>Prompt Testing</span>
                </div>
                <a
                  href={projects[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
                  title="Visit Musemind Agency"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </article>
          )}
        </div>

        {/* PROJECT 04: HEALTHCARE CLAIMS (Full-Width Monolith Architectural Card) */}
        {(activeFilter === "all" || activeFilter === "bi") && (
          <article className="project-item group w-full bg-surface-container-high rounded-xl p-6 lg:p-10 flex flex-col gap-8 shadow-sm transition-all hover:shadow-md border border-surface-variant/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  04 // HEALTHCARE CLAIMS &amp; RISK ANALYTICS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  40,000+ CLAIMS RECONCILED
                </span>
              </div>
              <span className="font-label-code text-label-code text-secondary">
                POWER BI &amp; SQL PIPELINE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-sm relative bg-surface-container h-[360px]">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-[1.01] transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded font-label-code text-label-code text-on-surface">
                  Automated SQL ETL • Power BI DAX KPIs
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight font-bold">
                    {projects[3].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {projects[3].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-4 bg-surface rounded-lg">
                    <span className="font-label-caps text-label-caps uppercase text-secondary">
                      Audit Cycle Time
                    </span>
                    <p className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                      -40% Reduction
                    </p>
                  </div>
                  <div className="p-4 bg-surface rounded-lg">
                    <span className="font-label-caps text-label-caps uppercase text-secondary">
                      Accuracy
                    </span>
                    <p className="font-headline-sm text-headline-sm text-on-surface mt-1 font-bold">
                      100% Reconciled
                    </p>
                  </div>
                </div>

                <a
                  href={projects[3].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-headline-sm text-label-code uppercase text-on-surface hover:text-primary transition-colors"
                >
                  <span>Review Code Repository &amp; Architecture</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* TWO-COLUMN SECOND ROW (Projects 05 & 06) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PROJECT 05: RETINET AI DIAGNOSTIC SUITE */}
          {(activeFilter === "all" || activeFilter === "ai") && (
            <article className="project-item group bg-surface-container-low rounded-xl p-8 lg:p-10 flex flex-col justify-between gap-8 shadow-sm transition-all hover:shadow-md border border-surface-variant/40">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                    05 // MEDICAL DEEP LEARNING &amp; VISION
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-caps text-label-caps text-on-surface-variant">
                    92% Diagnostic Accuracy
                  </span>
                </div>

                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-surface-variant">
                  <Image
                    src={projects[4].image}
                    alt={projects[4].title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-on-surface font-bold">
                    {projects[4].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {projects[4].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-2 font-label-code text-label-code text-secondary">
                  <span>PyTorch</span>
                  <span>•</span>
                  <span>Swin Transformers</span>
                  <span>•</span>
                  <span>Grad-CAM</span>
                </div>
                <a
                  href={projects[4].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
                  title="View on GitHub"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </article>
          )}

          {/* PROJECT 06: OSTAD & EWU SPORTS LOGISTICS */}
          {(activeFilter === "all" || activeFilter === "leadership") && (
            <article className="project-item group bg-surface-container-low rounded-xl p-8 lg:p-10 flex flex-col justify-between gap-8 shadow-sm transition-all hover:shadow-md border border-surface-variant/40">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                    06 // COMMUNITY EXPANSION &amp; LOGISTICS
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container rounded-full font-label-caps text-label-caps text-on-surface-variant">
                    3,000+ Footprint
                  </span>
                </div>

                <div className="relative w-full h-72 rounded-lg overflow-hidden bg-surface-variant">
                  <Image
                    src={projects[5].image}
                    alt={projects[5].title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md uppercase tracking-tight text-on-surface font-bold">
                    {projects[5].title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {projects[5].description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                <div className="flex items-center gap-2 font-label-code text-label-code text-secondary">
                  <span>Community Strategy</span>
                  <span>•</span>
                  <span>Vendor Contracts</span>
                  <span>•</span>
                  <span>Cost Optimization</span>
                </div>
                <a
                  href={projects[5].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all"
                  title="View Platform"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
