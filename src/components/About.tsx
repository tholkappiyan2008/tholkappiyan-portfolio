"use client";

import React from "react";
import {
  GraduationCap,
  Cpu,
  Layers,
  Code2,
  Workflow,
  Sparkles,
  BookOpen,
  Languages,
  CheckCircle,
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION_DATA } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-[#292D35]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            A little about how I build.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Engineering mindset, academic rigor, and a focus on practical software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            <p>
              I am an undergraduate student pursuing my{" "}
              <strong className="text-[#F5F7FA] font-medium">
                B.Tech in Computer Science and Engineering (Data Science)
              </strong>{" "}
              at Takshashila University, Tamil Nadu. My interest lies at the intersection of
              modern web architecture, relational databases, and autonomous AI-driven systems.
            </p>

            <p>
              Rather than building isolated toy projects, I focus on understanding how software operates
              as an integrated whole: connecting responsive{" "}
              <span className="text-[#F5F7FA]">React/Next.js frontend interfaces</span> to scalable{" "}
              <span className="text-[#F5F7FA]">PostgreSQL schemas</span>, resilient backend APIs,
              and agentic workflow engines like <span className="text-[#8B9CFF]">n8n</span> and LLM orchestration layers.
            </p>

            <p>
              Through designing and contributing to projects like{" "}
              <strong className="text-[#F5F7FA] font-medium">AI Business OS</strong> (a unified
              platform for CRM, financial ledgers, and automated business operations) and{" "}
              <strong className="text-[#F5F7FA] font-medium">NewsTrack</strong> (a production and route
              dispatch tracking system with FastAPI and WebSockets), I have gained hands-on experience
              translating ambiguous requirements into clean, maintainable code.
            </p>

            <p>
              I approach software engineering with humility and deep curiosity. I maintain a strong
              academic standing with a <strong className="text-[#10B981] font-semibold">9.39 / 10.0 semester score</strong>,
              and I dedicate my time to reading documentation, refining architecture patterns, and
              building tools that provide tangible utility.
            </p>

            {/* Core Values / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-lg bg-[#14171C] border border-[#292D35] flex items-start gap-3">
                <Code2 className="w-4 h-4 text-[#8B9CFF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#F5F7FA]">Clean Code & Typing</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">
                    TypeScript & strict contracts across client and server boundaries.
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#14171C] border border-[#292D35] flex items-start gap-3">
                <Workflow className="w-4 h-4 text-[#8B9CFF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#F5F7FA]">Workflow Orchestration</div>
                  <div className="text-xs text-[#9CA3AF] mt-0.5">
                    Designing multi-agent task delegation and event-driven pipelines.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Information Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 sm:p-6 rounded-xl bg-[#14171C] border border-[#292D35] space-y-5 text-left shadow-xl">
              <div className="flex items-center justify-between border-b border-[#292D35] pb-3">
                <span className="text-xs font-mono font-semibold text-[#8B9CFF] tracking-wider">
                  STUDENT PROFILE & ACADEMICS
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1E232B] text-[#10B981] border border-[#10B981]/30">
                  Active Enrollment
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF]">INSTITUTION</div>
                  <div className="text-[#F5F7FA] font-medium mt-0.5">{EDUCATION_DATA.institution}</div>
                  <div className="text-[11px] text-[#9CA3AF]">{EDUCATION_DATA.location}</div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF]">DEGREE & SPECIALIZATION</div>
                  <div className="text-[#F5F7FA] font-medium mt-0.5">{EDUCATION_DATA.degree}</div>
                  <div className="text-[11px] text-[#8B9CFF]">{EDUCATION_DATA.specialization}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="text-[11px] font-mono text-[#9CA3AF]">EXPECTED GRADUATION</div>
                    <div className="text-[#F5F7FA] font-medium mt-0.5">{EDUCATION_DATA.expectedGraduation}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#9CA3AF]">SEMESTER SCORE</div>
                    <div className="text-[#10B981] font-bold mt-0.5">{EDUCATION_DATA.academicScore} SGPA</div>
                  </div>
                </div>

                <div className="border-t border-[#292D35] pt-3">
                  <div className="text-[11px] font-mono text-[#9CA3AF] mb-2">TECHNICAL INTERESTS</div>
                  <div className="flex flex-wrap gap-1.5">
                    {PERSONAL_INFO.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 py-1 rounded bg-[#0E1014] text-[#F5F7FA] border border-[#292D35] text-[11px] font-mono"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#292D35] pt-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#9CA3AF]">SPOKEN LANGUAGES</span>
                  <div className="flex items-center gap-2">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 rounded bg-[#161920] text-[#8B9CFF] border border-[#292D35] text-[11px] font-mono"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
