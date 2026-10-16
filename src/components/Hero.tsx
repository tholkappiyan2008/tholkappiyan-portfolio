"use client";

import React from "react";
import { ArrowDown, FileText, Mail, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import InteractiveSystem from "./InteractiveSystem";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#8B9CFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Identity Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14171C] border border-[#292D35] text-[11px] font-mono text-[#8B9CFF] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#8B9CFF] animate-pulse" />
              <span>{PERSONAL_INFO.identityLabel}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-[#F5F7FA] leading-[1.12]">
              Building intelligent systems that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B9CFF] via-[#B8C2FF] to-[#F5F7FA]">
                solve real problems.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.supportingParagraph}
            </p>

            {/* Compact Information Row */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#14171C]/90 border border-[#292D35] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <span className="text-[#8B9CFF] font-semibold">Degree:</span>
                <span className="text-[#F5F7FA]">B.Tech CSE (Data Science)</span>
              </div>
              <div className="hidden sm:block text-[#292D35]">|</div>
              <div className="flex items-center gap-2">
                <span className="text-[#8B9CFF] font-semibold">University:</span>
                <span className="text-[#F5F7FA]">Takshashila University</span>
              </div>
              <div className="hidden sm:block text-[#292D35]">|</div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981] font-semibold">Semester Score:</span>
                <span className="text-[#F5F7FA] font-bold">9.39 / 10.0</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg text-sm font-semibold bg-[#8B9CFF] hover:bg-[#7A8DF8] text-[#0B0D10] transition flex items-center gap-2 shadow-lg shadow-[#8B9CFF]/15 group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Tholkappiyan_S_Resume.pdf"
                className="px-5 py-3 rounded-lg text-sm font-medium bg-[#14171C] hover:bg-[#1A1E26] text-[#F5F7FA] border border-[#292D35] hover:border-[#8B9CFF]/50 transition flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#8B9CFF]" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-lg bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Visual Component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveSystem />
          </div>
        </div>
      </div>
    </section>
  );
}
