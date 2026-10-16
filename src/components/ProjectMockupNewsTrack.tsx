"use client";

import React, { useState } from "react";
import {
  Radio,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Server,
  Layers,
  MapPin,
  RefreshCw,
} from "lucide-react";

export default function ProjectMockupNewsTrack() {
  const [activeTab, setActiveTab] = useState<"stream" | "production" | "api">("stream");
  const [routes, setRoutes] = useState([
    { id: "RT-101", sector: "Central City & Downtown", driver: "Dispatched", progress: 85, status: "Delivering" },
    { id: "RT-102", sector: "North Suburb Hubs", driver: "Dispatched", progress: 100, status: "Completed" },
    { id: "RT-103", sector: "Industrial Corridor", driver: "In Transit", progress: 45, status: "Delivering" },
  ]);
  const [isUpdating, setIsUpdating] = useState(false);

  const simulateUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setRoutes((prev) =>
        prev.map((r) =>
          r.id === "RT-103"
            ? { ...r, progress: Math.min(100, r.progress + 25), status: r.progress >= 75 ? "Completed" : "Delivering" }
            : r
        )
      );
      setIsUpdating(false);
    }, 600);
  };

  return (
    <div className="w-full rounded-xl border border-[#292D35] bg-[#14171C] overflow-hidden shadow-2xl text-left">
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0E1014] border-b border-[#292D35]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]/70" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]/70" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]/70" />
          <span className="ml-2 text-xs font-mono text-[#9CA3AF]">
            newstrack // supply-chain-dispatch-engine
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-[#1E232B] text-[#8B9CFF] border border-[#8B9CFF]/30">
            <Radio className="w-3 h-3 text-[#10B981] animate-pulse" />
            WS: Connected
          </span>
          <button
            onClick={simulateUpdate}
            disabled={isUpdating}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[#8B9CFF]/15 hover:bg-[#8B9CFF]/25 text-[#8B9CFF] border border-[#8B9CFF]/30 transition"
          >
            <RefreshCw className={`w-3 h-3 ${isUpdating ? "animate-spin" : ""}`} />
            {isUpdating ? "Pinging..." : "Simulate Drop"}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-4 pt-2 border-b border-[#292D35] bg-[#111317]">
        <button
          onClick={() => setActiveTab("stream")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "stream"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <Truck className="w-3.5 h-3.5 text-[#8B9CFF]" />
          Route Telemetry (WebSockets)
        </button>
        <button
          onClick={() => setActiveTab("production")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "production"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          Production & Bundles
        </button>
        <button
          onClick={() => setActiveTab("api")}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition ${
            activeTab === "api"
              ? "border-[#8B9CFF] text-[#F5F7FA]"
              : "border-transparent text-[#9CA3AF] hover:text-[#F5F7FA]"
          }`}
        >
          <Server className="w-3.5 h-3.5" />
          FastAPI Endpoints
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {activeTab === "stream" && (
          <div className="space-y-3 font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2">
              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] text-[#9CA3AF]">DISPATCHED COPIES</div>
                <div className="text-base font-semibold text-[#F5F7FA]">42,500 units</div>
                <div className="text-[10px] text-[#10B981]">100% printed & sorted</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] text-[#9CA3AF]">ACTIVE ROUTES</div>
                <div className="text-base font-semibold text-[#8B9CFF]">14 Sectors</div>
                <div className="text-[10px] text-[#9CA3AF]">3 Complete · 11 En Route</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
                <div className="text-[11px] text-[#9CA3AF]">TELEMETRY LATENCY</div>
                <div className="text-base font-semibold text-[#10B981]">12 ms</div>
                <div className="text-[10px] text-[#9CA3AF]">WebSocket Heartbeat</div>
              </div>
            </div>

            <div className="space-y-2">
              {routes.map((route) => (
                <div
                  key={route.id}
                  className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#1A1E26] text-[#8B9CFF] font-semibold">
                      {route.id}
                    </span>
                    <div>
                      <div className="text-[#F5F7FA] font-medium">{route.sector}</div>
                      <div className="text-[11px] text-[#9CA3AF] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#8B9CFF]" />
                        <span>Milestone: Drop Node {Math.round(route.progress / 20)}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-48">
                    <div className="w-full bg-[#1C2028] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#8B9CFF] h-full transition-all duration-500 rounded-full"
                        style={{ width: `${route.progress}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-[#F5F7FA] shrink-0 font-semibold">
                      {route.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "production" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35]">
              <div className="text-xs font-semibold text-[#F5F7FA] mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#8B9CFF]" />
                Morning Edition Production Batch Logs
              </div>
              <div className="space-y-2 text-[11px] text-[#9CA3AF]">
                <div className="flex items-center justify-between p-2 rounded bg-[#161920] border border-[#292D35]">
                  <span>Batch #BATCH-2026-08A · Morning English Standard</span>
                  <span className="text-[#10B981]">Sorted & Bundled (24,000)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#161920] border border-[#292D35]">
                  <span>Batch #BATCH-2026-08B · Regional Tamil Edition</span>
                  <span className="text-[#10B981]">Sorted & Bundled (18,500)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#161920] border border-[#292D35]">
                  <span>Distribution Hub Handover · Main Depot</span>
                  <span className="text-[#8B9CFF]">Logged at 04:15 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "api" && (
          <div className="space-y-2 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#0E1014] border border-[#292D35] space-y-1.5">
              <div className="text-xs font-semibold text-[#8B9CFF] mb-2">FastAPI Core Endpoints</div>
              <div className="p-1.5 rounded bg-[#161920] text-[11px] flex items-center justify-between">
                <span className="text-[#10B981] font-bold">GET</span>
                <span className="text-[#F5F7FA]">/api/v1/dispatch/routes</span>
                <span className="text-[#9CA3AF]">Returns active route status</span>
              </div>
              <div className="p-1.5 rounded bg-[#161920] text-[11px] flex items-center justify-between">
                <span className="text-[#8B9CFF] font-bold">POST</span>
                <span className="text-[#F5F7FA]">/api/v1/dispatch/milestone</span>
                <span className="text-[#9CA3AF]">Records delivery drop-off</span>
              </div>
              <div className="p-1.5 rounded bg-[#161920] text-[11px] flex items-center justify-between">
                <span className="text-[#F59E0B] font-bold">WS</span>
                <span className="text-[#F5F7FA]">/ws/telemetry/live</span>
                <span className="text-[#9CA3AF]">Realtime broadcast channel</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
