"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Check, Copy, Play, ArrowRight, ShieldCheck, Database, Cpu } from "lucide-react";

export default function InteractiveSystem() {
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture">("terminal");
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const [isRunningCommand, setIsRunningCommand] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Initial boot sequence log
    setCommandOutput([
      "node v24.14.0 // takshashila-cluster-01",
      "Initializing environment: Data Science & AI Agent Engine...",
      "Mounted systems: AI Business OS, NewsTrack Distribution",
      "Academic index verified: 9.39 / 10.0 SGPA",
      "Status: Ready for engineering evaluation & internship queries.",
    ]);
  }, []);

  const runCommand = (cmd: string) => {
    setIsRunningCommand(true);
    let outputLines: string[] = [];

    if (cmd === "whoami") {
      outputLines = [
        "$ whoami",
        "Tholkappiyan S. — B.Tech Computer Science & Engineering (Data Science)",
        "Takshashila University, Tamil Nadu, India [Expected: 2029]",
        "Focus: AI Agents, Enterprise Automation, Full-Stack Systems",
      ];
    } else if (cmd === "stack") {
      outputLines = [
        "$ cat ./tech_stack.json",
        "Languages: Python, C++, JavaScript, SQL, HTML5, CSS3",
        "Frontend:  React.js, Next.js, Tailwind CSS",
        "Backend:   FastAPI, RESTful Microservices, Supabase",
        "AI/Auto:   LLMs, AI Agents, Agentic Workflows, n8n",
      ];
    } else if (cmd === "healthcheck") {
      outputLines = [
        "$ npm run test:systems",
        "✓ AI Business OS [Next.js + Supabase]: PASS (Schemas validated)",
        "✓ NewsTrack [FastAPI + WebSockets]:   PASS (Latency 12ms)",
        "✓ Academic Performance:              PASS (9.39 SGPA maintained)",
        "All systems operational. Zero critical failures.",
      ];
    }

    setTimeout(() => {
      setCommandOutput((prev) => [...prev.slice(-4), ...outputLines]);
      setIsRunningCommand(false);
    }, 300);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sambathjayanthi3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-[#292D35] bg-[#14171C] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E1014] border-b border-[#292D35]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          <span className="ml-2 text-xs text-[#9CA3AF]">
            tholkappiyan@takshashila: ~
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              activeTab === "terminal"
                ? "bg-[#8B9CFF]/20 text-[#8B9CFF] font-semibold"
                : "text-[#9CA3AF] hover:text-[#F5F7FA]"
            }`}
          >
            CLI
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2 py-0.5 rounded text-[11px] transition ${
              activeTab === "architecture"
                ? "bg-[#8B9CFF]/20 text-[#8B9CFF] font-semibold"
                : "text-[#9CA3AF] hover:text-[#F5F7FA]"
            }`}
          >
            System Graph
          </button>
        </div>
      </div>

      {activeTab === "terminal" ? (
        <div className="p-4 bg-[#0B0D10]/95 space-y-3 min-h-[260px] flex flex-col justify-between">
          <div className="space-y-1 text-[#9CA3AF] overflow-y-auto max-h-[190px]">
            {commandOutput.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.startsWith("$")
                    ? "text-[#8B9CFF] font-semibold pt-1"
                    : line.includes("PASS") || line.includes("verified")
                    ? "text-[#10B981]"
                    : "text-[#9CA3AF]"
                }
              >
                {line}
              </div>
            ))}
            <div className="flex items-center gap-1.5 text-[#8B9CFF] pt-1">
              <span>$</span>
              <span className="w-2 h-4 bg-[#8B9CFF] animate-pulse inline-block" />
            </div>
          </div>

          {/* Quick interactive command triggers */}
          <div className="pt-2 border-t border-[#292D35]/60 flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-[#6B7280]">Try command:</span>
            <button
              onClick={() => runCommand("whoami")}
              disabled={isRunningCommand}
              className="px-2 py-1 rounded bg-[#161920] hover:bg-[#1E232B] text-[#8B9CFF] border border-[#292D35] transition text-[11px]"
            >
              whoami
            </button>
            <button
              onClick={() => runCommand("stack")}
              disabled={isRunningCommand}
              className="px-2 py-1 rounded bg-[#161920] hover:bg-[#1E232B] text-[#8B9CFF] border border-[#292D35] transition text-[11px]"
            >
              cat stack
            </button>
            <button
              onClick={() => runCommand("healthcheck")}
              disabled={isRunningCommand}
              className="px-2 py-1 rounded bg-[#161920] hover:bg-[#1E232B] text-[#10B981] border border-[#292D35] transition text-[11px]"
            >
              run test:systems
            </button>
            <button
              onClick={copyEmail}
              className="ml-auto px-2 py-1 rounded bg-[#1E222A] hover:bg-[#252A34] text-[#F5F7FA] border border-[#292D35] transition flex items-center gap-1 text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied Email" : "Copy Email"}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-[#0B0D10]/95 space-y-3 min-h-[260px] flex flex-col justify-center">
          <div className="p-3 rounded-lg bg-[#14171C] border border-[#292D35] text-[11px] text-[#9CA3AF] space-y-2.5">
            <div className="flex items-center justify-between text-[#F5F7FA] border-b border-[#292D35] pb-1.5">
              <span className="flex items-center gap-1.5 font-semibold text-[#8B9CFF]">
                <Cpu className="w-3.5 h-3.5" />
                Engineering Architecture Topology
              </span>
              <span className="text-[10px] text-[#10B981]">Synchronized</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded bg-[#0E1014] border border-[#292D35]">
                <div className="text-[#8B9CFF] font-semibold">User Layer</div>
                <div className="text-[#9CA3AF] mt-0.5">Next.js 16 / React</div>
              </div>
              <div className="p-2 rounded bg-[#0E1014] border border-[#8B9CFF]/40 bg-[#8B9CFF]/5">
                <div className="text-[#8B9CFF] font-semibold">Agents Core</div>
                <div className="text-[#9CA3AF] mt-0.5">Autonomous Tasks</div>
              </div>
              <div className="p-2 rounded bg-[#0E1014] border border-[#292D35]">
                <div className="text-[#10B981] font-semibold">Database</div>
                <div className="text-[#9CA3AF] mt-0.5">PostgreSQL / Supabase</div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#0E1014] border border-[#292D35] text-[11px] text-center">
              <span className="text-[#8B9CFF]">Event Bus & n8n:</span> Fast bidirectional synchronization across microservices logic and real-world endpoints.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
