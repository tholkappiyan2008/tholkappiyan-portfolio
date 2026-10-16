"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-[#292D35]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171C] border border-[#292D35] text-xs font-mono text-[#8B9CFF] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#F5F7FA]">
            Let’s connect and build together.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#9CA3AF]">
            Open for summer internships, AI/data engineering discussions, and collaborative software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#14171C] border border-[#292D35] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0E1014] border border-[#292D35]">
                  <Mail className="w-5 h-5 text-[#8B9CFF]" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF]">DIRECT EMAIL</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-[#F5F7FA] hover:text-[#8B9CFF] transition break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                className="p-2 rounded-lg bg-[#0E1014] border border-[#292D35] hover:border-[#8B9CFF]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition shrink-0"
                aria-label="Copy Email"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-[#10B981]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#14171C] border border-[#292D35] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0E1014] border border-[#292D35]">
                  <Phone className="w-5 h-5 text-[#8B9CFF]" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#9CA3AF]">PHONE NUMBER</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="text-xs sm:text-sm font-medium text-[#F5F7FA] hover:text-[#8B9CFF] transition font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                className="p-2 rounded-lg bg-[#0E1014] border border-[#292D35] hover:border-[#8B9CFF]/50 text-[#9CA3AF] hover:text-[#F5F7FA] transition shrink-0"
                aria-label="Copy Phone"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-[#10B981]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Timezone */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#14171C] border border-[#292D35] flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <MapPin className="w-5 h-5 text-[#8B9CFF]" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#9CA3AF]">LOCATION</div>
                <div className="text-xs sm:text-sm font-medium text-[#F5F7FA]">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[10px] text-[#9CA3AF] font-mono">IST (UTC +5:30)</div>
              </div>
            </div>

            {/* Profiles Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#8B9CFF]" />
                  <span className="text-xs font-mono font-medium text-[#F5F7FA]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#8B9CFF] transition" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#14171C] border border-[#292D35] hover:border-[#8B9CFF]/50 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#8B9CFF]" />
                  <span className="text-xs font-mono font-medium text-[#F5F7FA]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#8B9CFF] transition" />
              </a>
            </div>
          </div>

          {/* Quick Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#14171C] border border-[#292D35] text-left shadow-xl">
              <div className="flex items-center justify-between border-b border-[#292D35] pb-4 mb-5">
                <span className="text-xs font-mono font-semibold text-[#8B9CFF] tracking-wider uppercase">
                  DIRECT MESSAGE DISPATCH
                </span>
                <span className="text-[11px] font-mono text-[#9CA3AF]">
                  Direct to Inbox
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E1014] border border-[#292D35] text-sm text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#8B9CFF] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E1014] border border-[#292D35] text-sm text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#8B9CFF] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Internship opportunity / Technical project inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E1014] border border-[#292D35] text-sm text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#8B9CFF] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Tholkappiyan, I reviewed your AI Business OS and NewsTrack work and would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E1014] border border-[#292D35] text-sm text-[#F5F7FA] placeholder-[#6B7280] focus:outline-none focus:border-[#8B9CFF] font-sans resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-[11px] font-mono text-[#9CA3AF]">
                    {formSubmitted ? (
                      <span className="text-[#10B981] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Opening mail client...
                      </span>
                    ) : (
                      <span>Opens standard email client with your message drafted.</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#8B9CFF] hover:bg-[#7A8DF8] text-[#0B0D10] transition flex items-center gap-2 shadow-md shadow-[#8B9CFF]/15"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
