"use client";

import React from "react";
import { Award, Zap, Code, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ACHIEVEMENTS_DATA, PERSONAL_INFO } from "@/data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative border-t border-[#292D35]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>MILESTONES & FOCUS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            Achievements & Areas of Focus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Verifiable academic consistency, active technical participation, and specialized engineering interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Factual Achievements Cards */}
          <div className="lg:col-span-7 space-y-4">
            {ACHIEVEMENTS_DATA.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-[#14171C] border border-[#292D35] text-left hover:border-[#8B9CFF]/40 transition duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-medium text-[#F5F7FA]">
                    {item.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#1A1E26] text-[#8B9CFF] border border-[#8B9CFF]/30">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Areas of Interest */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-[#14171C] border border-[#292D35] text-left space-y-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#292D35] pb-3">
                <span className="text-xs font-mono font-semibold text-[#8B9CFF] tracking-wider uppercase">
                  AREAS OF SPECIALIZATION
                </span>
                <Compass className="w-4 h-4 text-[#8B9CFF]" />
              </div>

              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Core domain areas where I apply technical problem-solving, algorithmic thinking, and modern software architectures:
              </p>

              <div className="space-y-2.5">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35] text-xs font-mono text-[#F5F7FA] flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B9CFF]" />
                      <span>{interest}</span>
                    </span>
                    <span className="text-[10px] text-[#9CA3AF]">Active</span>
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
