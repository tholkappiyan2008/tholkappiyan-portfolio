"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0D10]/85 backdrop-blur-md border-b border-[#292D35]/80 py-3.5 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#14171C] border border-[#292D35] group-hover:border-[#8B9CFF]/60 flex items-center justify-center font-mono font-bold text-sm text-[#8B9CFF] transition shadow-inner">
              TS
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm sm:text-base tracking-tight text-[#F5F7FA] group-hover:text-white transition">
                Tholkappiyan S.
              </span>
              <span className="text-[10px] font-mono text-[#9CA3AF] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                CSE (Data Science)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition ${
                    isActive
                      ? "text-[#F5F7FA] bg-[#14171C] border border-[#292D35]"
                      : "text-[#9CA3AF] hover:text-[#F5F7FA] hover:bg-[#14171C]/50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Tholkappiyan_S_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-[#F5F7FA] bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 hover:bg-[#1A1E26] transition shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B9CFF]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Tholkappiyan_S_Resume.pdf"
              className="px-2.5 py-1 rounded text-xs font-mono bg-[#14171C] border border-[#292D35] text-[#8B9CFF]"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#14171C] border border-[#292D35] text-[#9CA3AF] hover:text-white transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#292D35] bg-[#0E1014] px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-[#9CA3AF] hover:text-[#F5F7FA] hover:bg-[#14171C]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Tholkappiyan_S_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#8B9CFF] text-[#0B0D10]"
            >
              <FileText className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
