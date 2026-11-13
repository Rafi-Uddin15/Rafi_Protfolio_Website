"use client";

import React from "react";
import Image from "next/image";
import { experiences, educationList, certifications } from "@/data/portfolio";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-space-xl">
      <div className="flex flex-col gap-3 pb-12">
        <div className="flex items-center gap-3">
          <span className="font-label-code text-label-code text-primary uppercase font-bold">
            05 // CAREER &amp; FOUNDATIONS
          </span>
          <div className="h-px bg-surface-variant flex-1"></div>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          PROFESSIONAL TRAJECTORY <span className="text-primary">&amp; ACADEMICS</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Corporate operational leadership, agency research experience, computer science scholarship, and peer-reviewed publications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Work Experience Timeline (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-surface-variant pb-3">
            <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider font-bold">
              Work Experience
            </span>
            <span className="font-label-code text-label-code text-primary font-semibold">
              Corporate &amp; Research Practice
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-surface-container-low shadow-sm border border-surface-variant/40 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-1 border border-surface-variant/50 shrink-0">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                        {exp.role}
                      </h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between gap-1">
                    <span className="px-3 py-1 bg-surface-container rounded-full font-label-code text-label-code text-on-surface font-semibold">
                      {exp.period}
                    </span>
                    <span className="font-label-code text-label-code text-secondary">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-label-caps text-[11px] uppercase text-primary font-bold tracking-wider">
                    Key Deliverables &amp; Impact
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-container">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-surface font-label-code text-[11px] text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certifications (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Education Block */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-surface-variant pb-3">
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider font-bold">
                Academic Qualifications
              </span>
              <span className="font-label-code text-label-code text-primary font-semibold">
                Computer Science
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface-container-low border border-surface-variant/40 flex flex-col gap-2 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-headline-sm text-base text-on-surface font-bold leading-tight">
                      {edu.degree}
                    </h4>
                    <span className="font-label-code text-xs text-primary font-bold shrink-0">
                      {edu.grade}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    {edu.institution} • {edu.period}
                  </span>
                  {edu.honors && (
                    <span className="inline-block mt-1 px-3 py-1 bg-tertiary-fixed/60 text-on-tertiary-fixed rounded-md font-label-code text-xs font-semibold">
                      ★ {edu.honors}
                    </span>
                  )}
                  <p className="font-body-sm text-body-sm text-secondary pt-1 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Honors */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-surface-variant pb-3">
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider font-bold">
                Publications &amp; Certifications
              </span>
              <span className="font-label-code text-label-code text-primary font-semibold">
                Verified Credentials
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-container-low border border-surface-variant/40 flex items-center justify-between gap-3 shadow-xs hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-sm text-on-surface font-bold">
                      {cert.title}
                    </span>
                    <span className="font-label-code text-xs text-on-surface-variant">
                      {cert.issuer} • {cert.year}
                    </span>
                  </div>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all shrink-0"
                      title="Verify Credential"
                    >
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </a>
                  ) : (
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                      military_tech
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Direct CV Download Action */}
            <div className="p-5 rounded-xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm text-on-surface font-bold">
                    Official Curriculum Vitae (PDF)
                  </span>
                  <span className="font-label-code text-xs text-on-surface-variant">
                    Verified ATS-Compliant 1-Page Format • Live at{" "}
                    <a
                      href="#hero"
                      className="text-primary font-bold hover:underline"
                    >
                      rafiuddin.vercel.app
                    </a>
                  </span>
                </div>
              </div>
              <a
                href="/Rafi_Uddin_Resume.pdf"
                download="Rafi_Uddin_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full font-label-caps text-label-caps uppercase hover:bg-primary-container transition-all shadow-sm shrink-0"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
