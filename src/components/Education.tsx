"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { EDUCATION_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative border-t border-[#292D35]/60 bg-[#0E1014]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            Education & Academic Standing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Formal computer science education focusing on algorithmic thinking and data-driven architectures.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#14171C] border border-[#292D35] text-left relative overflow-hidden shadow-xl">
            {/* Ambient edge highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B9CFF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#292D35]">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#0E1014] border border-[#292D35]">
                    <GraduationCap className="w-5 h-5 text-[#8B9CFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7FA]">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF] mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8B9CFF]" />
                      <span>{EDUCATION_DATA.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-base sm:text-lg font-medium text-[#F5F7FA]">
                    {EDUCATION_DATA.degree}
                  </div>
                  <div className="text-sm font-mono text-[#8B9CFF]">
                    Specialization in {EDUCATION_DATA.specialization}
                  </div>
                </div>
              </div>

              {/* Score & Graduation Badge */}
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="p-3.5 rounded-xl bg-[#0E1014] border border-[#292D35] sm:text-right">
                  <div className="text-[11px] font-mono text-[#9CA3AF] uppercase">
                    SEMESTER SCORE (SGPA)
                  </div>
                  <div className="text-2xl font-bold text-[#10B981] flex items-center sm:justify-end gap-2 mt-0.5">
                    <span>{EDUCATION_DATA.academicScore}</span>
                    <span className="text-xs font-mono text-[#9CA3AF] font-normal">/ 10.0</span>
                  </div>
                  <div className="text-[10px] font-mono text-[#10B981] mt-0.5">
                    High Academic Distinction
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161920] border border-[#292D35] text-xs font-mono text-[#9CA3AF]">
                  <Calendar className="w-3.5 h-3.5 text-[#8B9CFF]" />
                  <span>Expected Graduation: {EDUCATION_DATA.expectedGraduation}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-6 space-y-3">
              <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                CORE CURRICULAR FOCUS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#0E1014] border border-[#292D35] text-xs text-[#9CA3AF] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B9CFF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
