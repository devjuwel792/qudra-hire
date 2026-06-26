"use client";

import React, { useState } from "react";
import { 
  ClipboardList, 
  MapPin, 
  Clock, 
  DollarSign, 
  Bot, 
  Play, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CandidateApplicationsPage() {
  const [filter, setFilter] = useState("All");

  const applications = [
    { 
      role: "Senior Product Designer", 
      company: "Emirates NBD", 
      location: "Dubai, UAE",
      type: "Full-time", 
      salary: "AED 28k–35k",
      applied: "Mar 12, 2026", 
      ats: 92, 
      stage: "Interview", 
      stageColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      canInterview: true
    },
    { 
      role: "Full-Stack Engineer (React / Node)", 
      company: "Careem", 
      location: "Dubai, UAE (Hybrid)",
      type: "Full-time", 
      salary: "AED 25k–30k",
      applied: "Mar 10, 2026", 
      ats: 88, 
      stage: "Shortlisted", 
      stageColor: "bg-[#00D07C]/10 text-[#00D07C] border-[#00D07C]/20",
      canInterview: false
    },
    { 
      role: "AI / ML Engineer", 
      company: "STC Pay", 
      location: "Riyadh, Saudi Arabia (Remote)",
      type: "Full-time", 
      salary: "SAR 30k–38k",
      applied: "Mar 08, 2026", 
      ats: 81, 
      stage: "Applied", 
      stageColor: "bg-slate-700/40 text-slate-300 border-slate-600/30",
      canInterview: false
    },
    { 
      role: "Growth Marketing Manager", 
      company: "Tarabot", 
      location: "Riyadh, Saudi Arabia",
      type: "Full-time", 
      salary: "SAR 18k–22k",
      applied: "Feb 28, 2026", 
      ats: 64, 
      stage: "Rejected", 
      stageColor: "bg-red-900/20 text-red-400 border-red-800/30",
      canInterview: false
    },
  ];

  const filteredApps = filter === "All" 
    ? applications 
    : applications.filter(app => app.stage === filter);

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Applications</h1>
          <p className="text-sm text-slate-400 mt-1">Track the live progress of all your submitted roles and complete pending AI interviews.</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold bg-[#0F172A] border border-[#1E293B]/60 px-4 py-2.5 rounded-xl">
          <span className="text-slate-400">Total submitted:</span>
          <span className="text-[#00D07C] text-sm">{applications.length}</span>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E293B]/40 pb-1">
        <div className="flex gap-1">
          {["All", "Applied", "Shortlisted", "Interview", "Rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                filter === tab 
                  ? "bg-[#162032] text-white border border-[#2A3C58]" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search applications..." 
            className="w-full bg-[#0F172A] border border-[#1E293B]/60 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
          />
        </div>
      </div>

      {/* Main Apps Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Applications List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredApps.length === 0 ? (
            <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-12 text-center text-slate-400 text-sm font-medium">
              No applications found in this stage.
            </div>
          ) : (
            filteredApps.map((app, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 hover:border-[#2A3C58] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white leading-tight">{app.role}</h3>
                    <p className="text-xs text-[#00D07C] font-semibold">{app.company}</p>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 text-[11px] font-medium pt-2">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{app.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{app.type}</span>
                      <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" />{app.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col items-end gap-2 flex-shrink-0 self-start sm:self-auto">
                    <span className={`text-[10px] font-bold border px-3 py-1 rounded-full ${app.stageColor}`}>
                      {app.stage}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold mt-1">Applied {app.applied}</span>
                  </div>
                </div>

                <div className="border-t border-[#1E293B]/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="text-slate-400">ATS Match Score:</span>
                    <span className="text-[#00D07C] flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {app.ats}%
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {app.canInterview ? (
                      <Link 
                        href="/candidate/interview" 
                        className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]"
                      >
                        <Bot className="h-4 w-4" />
                        Start AI Interview
                      </Link>
                    ) : (
                      <button className="w-full sm:w-auto border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl font-bold transition-all text-center">
                        View details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Info Widgets */}
        <div className="space-y-6">
          {/* AI Prep Help Widget */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bot className="h-4 w-4 text-[#00D07C]" />
              AI Interview Preparation
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              We recommend practicing with our AI trainer before taking your first live interview for Emirates NBD. 
            </p>
            
            <div className="border-t border-[#1E293B]/40 pt-4 space-y-2 text-xs font-semibold text-slate-300">
              <p className="flex items-center gap-2">✓ 5 sample technical questions</p>
              <p className="flex items-center gap-2">✓ Real-time response analysis</p>
              <p className="flex items-center gap-2">✓ Dynamic feedback dashboard</p>
            </div>

            <button className="w-full bg-[#162032] border border-[#2A3C58] hover:bg-[#1E293B] text-[#00D07C] font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5">
              Practice now
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Hiring Timeline Widget */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white">Application Tips</h3>
            
            <div className="space-y-3.5 text-xs text-slate-400 font-medium">
              <div className="space-y-1">
                <p className="text-white font-bold">1. Keep CV up-to-date</p>
                <p className="leading-relaxed">Verify matching skills for new active application positions so ATS scores stay optimized.</p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold">2. Complete invite prompts</p>
                <p className="leading-relaxed">Complete requested AI interview calls within 72 hours of receiving invitations.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
