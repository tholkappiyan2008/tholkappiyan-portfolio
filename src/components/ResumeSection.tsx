"use client";

import React, { useState } from "react";
import { FileText, Download, Eye, CheckCircle2, ArrowRight, ShieldCheck, ExternalLink, X } from "lucide-react";
import { PERSONAL_INFO, EDUCATION_DATA } from "@/data/portfolioData";

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-20 sm:py-28 relative border-t border-[#292D35]/60 bg-[#0E1014]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#14171C] border border-[#292D35] p-8 sm:p-12 text-left relative overflow-hidden shadow-2xl">
          {/* Subtle accent gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B9CFF]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E1014] border border-[#292D35] text-xs font-mono text-[#8B9CFF]">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
                Want the full picture?
              </h2>

              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-xl">
                Explore my technical background, projects, education, and skills in my resume.
                Prepared specifically for software engineering internships and academic reviews.
              </p>

              {/* Factual highlights checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-mono text-[#9CA3AF]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>9.39 SGPA verified coursework</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>AI Business OS & NewsTrack systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Next.js, Python, PostgreSQL, n8n</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Smart India Hackathon 2026 participant</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Tholkappiyan_S_Resume.pdf"
                className="w-full py-3.5 px-5 rounded-xl text-sm font-mono font-semibold bg-[#8B9CFF] hover:bg-[#7A8DF8] text-[#0B0D10] transition flex items-center justify-center gap-2.5 shadow-lg shadow-[#8B9CFF]/15 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full py-3 px-5 rounded-xl text-xs font-mono font-medium bg-[#0E1014] hover:bg-[#1A1E26] text-[#F5F7FA] border border-[#292D35] hover:border-[#8B9CFF]/50 transition flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#8B9CFF]" />
                <span>Preview Resume In-Browser</span>
              </button>

              <div className="text-center">
                <span className="text-[10px] font-mono text-[#9CA3AF]">
                  Format: PDF · Verified 1-Page Resume
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Resume Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#14171C] border border-[#292D35] rounded-xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0E1014] border-b border-[#292D35]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#8B9CFF]" />
                <span className="text-xs font-mono text-[#F5F7FA]">
                  Tholkappiyan_S_Resume.pdf (Preview)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Tholkappiyan_S_Resume.pdf"
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#8B9CFF] text-[#0B0D10] hover:bg-[#7A8DF8] transition flex items-center gap-1 font-semibold"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-lg bg-[#1E232B] hover:bg-[#292D35] text-[#9CA3AF] hover:text-white transition"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-1 w-full bg-[#0B0D10]">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title="Tholkappiyan S. Resume"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
