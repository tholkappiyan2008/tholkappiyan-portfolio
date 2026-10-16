"use client";

import React, { useState } from "react";
import {
  Bot,
  Activity,
  Layers,
  BarChart3,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Database,
  RefreshCw,
  Sparkles,
} from "lucide-react";

export default function ProjectMockupAIBusinessOS() {
  const [activeTab, setActiveTab] = useState<"kpi" | "agents" | "ledger">("kpi");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(0);
      setIsSimulating(false);
    }, 2400);
  };

  return (
    <div className="w-full rounded-xl border border-[#292D35] bg-[#14171C] overflow-hidden shadow-2xl text-left">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E1014] border-b border-[#292D35]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]/70" />
          <span className="ml-2 text-xs font-mono text-[#9CA3AF]">
            ai-business-os // enterprise-control-plane
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-[#1E232B] text-[#8B9CFF] border border-[#8B9CFF]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Supabase DB: Online
          </span>
          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#8B9CFF]/15 hover:bg-[#8B9CFF]/25 text-[#8B9CFF] border border-[#8B9CFF]/30 transition"
          >
            <RefreshCw className={`w-3 h-3 ${isSimulating ? "animate-spin" : ""}`} />
            {isSimulating ? "Dispatching..." : "Simulate Cycle"}
          </button>
        </div>
      </div>

      {/* Mockup Navigation Tabs */}
      <div className="flex items-center gap-1 px-4 pt-2 border-b border-[#292D35] bg-[#111317]">
        <button
          onClick={() => setActiveTab("kpi")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "kpi"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          System Overview
        </button>
        <button
          onClick={() => setActiveTab("agents")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "agents"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <Bot className="w-3.5 h-3.5 text-[#8B9CFF]" />
          Agent Pipeline & n8n
        </button>
        <button
          onClick={() => setActiveTab("ledger")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "ledger"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          CRM & Ledger Schema
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-5">
        {activeTab === "kpi" && (
          <div className="space-y-4">
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] font-mono text-[#9CA3AF]">ACTIVE AGENTS</div>
                <div className="mt-1 text-lg font-semibold text-[#F5F7FA] flex items-center gap-2">
                  <span>5 Active</span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>
                <div className="text-[10px] text-[#9CA3AF] font-mono">CEO · Fin · Sales · Ops</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] font-mono text-[#9CA3AF]">N8N WORKFLOWS</div>
                <div className="mt-1 text-lg font-semibold text-[#8B9CFF]">12 Synchronized</div>
                <div className="text-[10px] text-[#10B981] font-mono">100% Webhook uptime</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] font-mono text-[#9CA3AF]">POSTGRES READS</div>
                <div className="mt-1 text-lg font-semibold text-[#F5F7FA]">2.4k queries</div>
                <div className="text-[10px] text-[#9CA3AF] font-mono">Lat: ~18ms Supabase</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] font-mono text-[#9CA3AF]">AUTOMATION HEALTH</div>
                <div className="mt-1 text-lg font-semibold text-[#10B981]">Healthy</div>
                <div className="text-[10px] text-[#9CA3AF] font-mono">0 failed dispatches</div>
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            <div className="p-3.5 rounded-lg bg-[#0E1014] border border-[#292D35]">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9CA3AF]">
                <span className="flex items-center gap-1.5 text-[#F5F7FA]">
                  <Cpu className="w-3.5 h-3.5 text-[#8B9CFF]" />
                  Orchestrated Data Pipeline Flow
                </span>
                <span className="text-[11px]">SRS Architecture v1.0</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div
                  className={`p-2.5 rounded border transition ${
                    simStep === 1
                      ? "border-[#8B9CFF] bg-[#8B9CFF]/15 text-[#F5F7FA]"
                      : "border-[#292D35] bg-[#161920] text-[#9CA3AF]"
                  }`}
                >
                  <div className="font-semibold text-[#F5F7FA]">Next.js UI</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">Admin & Operator Portal</div>
                </div>

                <div
                  className={`p-2.5 rounded border transition ${
                    simStep === 2
                      ? "border-[#8B9CFF] bg-[#8B9CFF]/15 text-[#F5F7FA]"
                      : "border-[#292D35] bg-[#161920] text-[#9CA3AF]"
                  }`}
                >
                  <div className="font-semibold text-[#8B9CFF]">CEO Agent Core</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">LLM Task Decomposition</div>
                </div>

                <div
                  className={`p-2.5 rounded border transition ${
                    simStep === 3
                      ? "border-[#8B9CFF] bg-[#8B9CFF]/15 text-[#F5F7FA]"
                      : "border-[#292D35] bg-[#161920] text-[#9CA3AF]"
                  }`}
                >
                  <div className="font-semibold text-[#F5F7FA]">n8n Automation</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">Webhook Web of Triggers</div>
                </div>

                <div className="p-2.5 rounded border border-[#292D35] bg-[#161920] text-[#9CA3AF]">
                  <div className="font-semibold text-[#F5F7FA]">Supabase / PG</div>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">Ledger & CRM Tables</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "agents" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35] space-y-2">
              <div className="flex items-center justify-between text-[#8B9CFF] border-b border-[#292D35] pb-2">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Agent Delegation Feed
                </span>
                <span className="text-[11px] text-[#9CA3AF]">Autonomous Loop Active</span>
              </div>

              <div className="space-y-2 pt-1 text-[11px]">
                <div className="flex items-start gap-2 text-[#9CA3AF]">
                  <span className="text-[#8B9CFF] shrink-0">[CEO Agent]</span>
                  <span>Received monthly operational prompt: evaluating inventory vs revenue targets.</span>
                </div>
                <div className="flex items-start gap-2 text-[#9CA3AF]">
                  <span className="text-[#10B981] shrink-0">[Finance Agent]</span>
                  <span>Queried PostgreSQL `ledger_transactions`: 18.4% surplus logged for current quarter.</span>
                </div>
                <div className="flex items-start gap-2 text-[#9CA3AF]">
                  <span className="text-[#F59E0B] shrink-0">[Operations Agent]</span>
                  <span>Stock reorder trigger dispatched via n8n webhook (ID: #WF-9042).</span>
                </div>
                <div className="flex items-start gap-2 text-[#9CA3AF]">
                  <span className="text-[#8B9CFF] shrink-0">[Analytics Agent]</span>
                  <span>Predicted demand trend: +12% next cycle. Rendered in Next.js dashboard view.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ledger" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35] overflow-x-auto">
              <div className="text-xs font-semibold text-[#F5F7FA] mb-2 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#8B9CFF]" />
                PostgreSQL Schema Preview (Supabase Relational Model)
              </div>
              <table className="w-full text-left text-[11px] text-[#9CA3AF]">
                <thead className="text-[#8B9CFF] border-b border-[#292D35]">
                  <tr>
                    <th className="py-1.5 px-2">Table</th>
                    <th className="py-1.5 px-2">Primary Key</th>
                    <th className="py-1.5 px-2">Key Fields</th>
                    <th className="py-1.5 px-2">Foreign Relations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#292D35]/50">
                  <tr>
                    <td className="py-1 px-2 text-[#F5F7FA]">crm_leads</td>
                    <td className="py-1 px-2">lead_id (uuid)</td>
                    <td className="py-1 px-2">status, score, contact_meta</td>
                    <td className="py-1 px-2">assigned_agent_id</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 text-[#F5F7FA]">financial_ledger</td>
                    <td className="py-1 px-2">tx_id (uuid)</td>
                    <td className="py-1 px-2">amount, category, entry_date</td>
                    <td className="py-1 px-2">org_id, verified_by</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 text-[#F5F7FA]">inventory_items</td>
                    <td className="py-1 px-2">sku (varchar)</td>
                    <td className="py-1 px-2">stock_count, reorder_point</td>
                    <td className="py-1 px-2">supplier_id</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
