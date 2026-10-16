"use client";

import React, { useState } from "react";
import {
  Code,
  Layout,
  Server,
  Database,
  Bot,
  Wrench,
  Check,
  Terminal,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return <Code className="w-4 h-4 text-[#8B9CFF]" />;
      case "Frontend Development":
        return <Layout className="w-4 h-4 text-[#8B9CFF]" />;
      case "Backend & APIs":
        return <Server className="w-4 h-4 text-[#8B9CFF]" />;
      case "Databases":
        return <Database className="w-4 h-4 text-[#8B9CFF]" />;
      case "AI & Automation":
        return <Bot className="w-4 h-4 text-[#8B9CFF]" />;
      case "Tools & Platforms":
        return <Wrench className="w-4 h-4 text-[#8B9CFF]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#8B9CFF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-[#292D35]/60 bg-[#0E1014]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            Tools & technologies I build with.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Categorized by practical application in modern software engineering, web architectures, and automation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.title;
            return (
              <div
                key={category.title}
                onClick={() => setSelectedCategory(isSelected ? null : category.title)}
                className={`p-5 rounded-xl bg-[#14171C] border transition duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? "border-[#8B9CFF] shadow-lg shadow-[#8B9CFF]/5 bg-[#171A21]"
                    : "border-[#292D35] hover:border-[#8B9CFF]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#0E1014] border border-[#292D35]">
                        {getCategoryIcon(category.title)}
                      </div>
                      <h3 className="text-base font-medium text-[#F5F7FA]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      {category.skills.length} tools
                    </span>
                  </div>

                  <p className="text-xs text-[#9CA3AF] mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#292D35]/60">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0E1014] border border-[#292D35] text-xs font-mono text-[#F5F7FA] hover:border-[#8B9CFF]/50 transition"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-[#8B9CFF]/70 font-sans">
                          · {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Proficiency */}
        <div className="mt-8 p-4 rounded-lg bg-[#14171C]/50 border border-[#292D35]/80 flex items-center justify-between flex-wrap gap-3 text-xs text-[#9CA3AF]">
          <span className="font-mono text-[#8B9CFF]">
            ENGINEERING PRINCIPLE:
          </span>
          <span>
            Clean categorization over arbitrary percentage bars. Focused on pragmatic implementation, reading RFCs, and building real systems.
          </span>
        </div>
      </div>
    </section>
  );
}
