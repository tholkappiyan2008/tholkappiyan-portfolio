"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Layers,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Cpu,
  Code2,
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { GithubIcon } from "./BrandIcons";
import ProjectMockupAIBusinessOS from "./ProjectMockupAIBusinessOS";
import ProjectMockupNewsTrack from "./ProjectMockupNewsTrack";

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<string>("ai-business-os");

  return (
    <section id="projects" className="py-20 sm:py-28 relative border-t border-[#292D35]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>ENGINEERED SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            Featured Projects & Architectures
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Real applications architected with modern full-stack frameworks, autonomous AI workflows, and distributed messaging.
          </p>
        </div>

        {/* Project Selector Bar */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 border-b border-[#292D35]">
          {PROJECTS_DATA.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectTab(proj.id)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition flex items-center gap-2 shrink-0 ${
                activeProjectTab === proj.id
                  ? "bg-[#14171C] border border-[#8B9CFF]/50 text-[#F5F7FA] shadow-md"
                  : "text-[#9CA3AF] hover:text-[#F5F7FA] hover:bg-[#14171C]/50"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeProjectTab === proj.id ? "bg-[#8B9CFF]" : "bg-[#292D35]"}`} />
              <span>{proj.title}</span>
              <span className="text-[10px] font-mono text-[#9CA3AF] hidden sm:inline">
                [{proj.category}]
              </span>
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="space-y-20">
          {PROJECTS_DATA.map((project) => {
            const isSelected = activeProjectTab === project.id;
            if (!isSelected) return null;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Deep Engineering Specs */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono bg-[#1A1E26] text-[#8B9CFF] border border-[#8B9CFF]/30 mb-2">
                      <Cpu className="w-3 h-3" />
                      <span>{project.architectureType}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F7FA] tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-[#8B9CFF] mt-1">
                      {project.subtitle}
                    </div>

                    <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <div className="text-[11px] font-mono text-[#9CA3AF] mb-2 uppercase tracking-wider">
                      TECHNOLOGY STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#F5F7FA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Implementation Highlights */}
                  <div>
                    <div className="text-[11px] font-mono text-[#9CA3AF] mb-2.5 uppercase tracking-wider">
                      KEY ARCHITECTURE DETAILS
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#9CA3AF]">
                      {project.keyDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#8B9CFF] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implemented vs Planned Accordion/List */}
                  <div className="p-4 rounded-lg bg-[#0E1014] border border-[#292D35] space-y-3">
                    <div>
                      <div className="text-[11px] font-mono text-[#10B981] flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Implemented Functionality</span>
                      </div>
                      <div className="space-y-1 text-xs text-[#9CA3AF]">
                        {project.implementedFeatures.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-[#10B981]">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#292D35] pt-2.5">
                      <div className="text-[11px] font-mono text-[#8B9CFF] flex items-center gap-1.5 mb-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Planned Technical Scope</span>
                      </div>
                      <div className="space-y-1 text-xs text-[#9CA3AF]">
                        {project.plannedFeatures.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-[#8B9CFF]">○</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Action Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#14171C] hover:bg-[#1A1E26] text-[#F5F7FA] border border-[#292D35] hover:border-[#8B9CFF]/50 transition flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4 text-[#8B9CFF]" />
                      <span>View Source Code</span>
                      <ExternalLink className="w-3 h-3 text-[#9CA3AF]" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#8B9CFF] text-[#0B0D10] hover:bg-[#7A8DF8] transition flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Custom Interactive UI Mockup */}
                <div className="lg:col-span-7">
                  {project.id === "ai-business-os" ? (
                    <ProjectMockupAIBusinessOS />
                  ) : (
                    <ProjectMockupNewsTrack />
                  )}
                  <div className="mt-2 text-right">
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      * Interactive dashboard simulation rendered directly from component state.
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
