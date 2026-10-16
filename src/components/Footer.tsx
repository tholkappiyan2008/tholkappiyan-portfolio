"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#292D35] bg-[#0A0C0F] py-12 text-xs font-mono text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#292D35]/60">
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded bg-[#14171C] border border-[#292D35] flex items-center justify-center font-bold text-[#8B9CFF]">
              TS
            </div>
            <div>
              <span className="text-[#F5F7FA] font-medium font-sans">
                Tholkappiyan S.
              </span>{" "}
              — B.Tech CSE (Data Science), Takshashila University
            </div>
          </div>

          {/* Socials & Top Link */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FA] transition flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F7FA] transition flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F5F7FA] transition flex items-center gap-1.5"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#8B9CFF] hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Build Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6B7280]">
          <div>
            © 2026 Tholkappiyan S. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 16 (App Router) · TypeScript · Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
