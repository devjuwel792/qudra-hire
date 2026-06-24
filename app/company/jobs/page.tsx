"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, Sparkles, Plus, Eye, Trash2 } from "lucide-react";

export default function JobsPage() {
  const jobs = [
    { title: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", applicants: 51, posted: "2 days ago", active: true },
    { title: "Full-Stack Engineer (React / Node)", location: "Dubai, UAE", type: "Remote • Full-time", applicants: 62, posted: "5 days ago", active: true },
    { title: "AI / ML Engineer", location: "Riyadh, KSA", type: "Full-time", applicants: 73, posted: "1 week ago", active: true },
    { title: "Talent Acquisition Lead", location: "Abu Dhabi, UAE", type: "Full-time", applicants: 84, posted: "2 weeks ago", active: true },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Hiring Workspace</h1>
          <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">Manage Jobs</p>
        </div>
        <button className="flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#00D07C]/10 active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          Create New Job
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job, idx) => (
          <div 
            key={idx} 
            className="bg-[#0F172A] border border-[#1E293B]/60 hover:border-[#334155] rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white group-hover:text-[#00D07C] transition-colors">{job.title}</h2>
                <span className="text-[10px] font-semibold text-[#00D07C] bg-[#00D07C]/10 px-2.5 py-0.5 rounded-full border border-[#00D07C]/20">Active</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-slate-500" />{job.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-slate-500" />{job.type}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-slate-500" />Posted {job.posted}</span>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[#1E293B]/60 pt-4 md:pt-0">
              <div className="text-right">
                <p className="text-lg font-bold text-white">{job.applicants}</p>
                <p className="text-xs text-slate-500">Total Applicants</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-[#162032] border border-[#2A3C58]/60 text-slate-300 hover:text-white rounded-lg hover:border-[#00D07C]/40 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 bg-red-950/20 border border-red-900/30 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-950/40 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
