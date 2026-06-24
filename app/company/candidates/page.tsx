"use client";

import React from "react";
import { Users, Search, Filter, Sparkles, Star, ArrowUpRight } from "lucide-react";

export default function CandidatesPage() {
  const candidates = [
    { name: "Layla Al-Mansoori", role: "Senior Product Designer", location: "Dubai, UAE", match: "97%", stage: "Applied", status: "Highly Qualified" },
    { name: "Omar Haddad", role: "Full-Stack Engineer", location: "Dubai, UAE", match: "94%", stage: "Applied", status: "Highly Qualified" },
    { name: "Tariq S.", role: "DevOps Engineer", location: "Dubai, UAE", match: "93%", stage: "Hired", status: "Offer Accepted" },
    { name: "Sara Khan", role: "ML Engineer", location: "Dubai, UAE", match: "91%", stage: "Shortlisted", status: "Under Review" },
    { name: "Zainab M.", role: "UX Researcher", location: "Dubai, UAE", match: "90%", stage: "Offer", status: "Offer Sent" },
    { name: "Khalid Al-Otaibi", role: "TA Lead", location: "Abu Dhabi, UAE", match: "88%", stage: "Interview", status: "Interview Scheduled" },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Hiring Workspace</h1>
        <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">Candidates</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#0F172A] p-4 rounded-xl border border-[#1E293B]/60">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search candidates by name or role..." 
            className="w-full bg-[#080C14] border border-[#1E293B]/60 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00D07C]"
          />
        </div>
        <button className="flex items-center gap-2 border border-[#1E293B]/60 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors w-full sm:w-auto justify-center">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400 text-xs font-semibold uppercase tracking-wider bg-[#0A0F1D]/40">
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6">Match Score</th>
                <th className="py-4 px-6">Stage</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/40 text-slate-200 text-sm">
              {candidates.map((candidate, idx) => (
                <tr key={idx} className="hover:bg-[#162032]/40 transition-colors group">
                  <td className="py-4.5 px-6 font-semibold text-white">{candidate.name}</td>
                  <td className="py-4.5 px-6 text-slate-400">{candidate.role}</td>
                  <td className="py-4.5 px-6">
                    <span className="inline-flex items-center gap-1 text-[#00D07C] font-semibold text-xs bg-[#00D07C]/10 px-2 py-0.5 rounded-md">
                      <Sparkles className="h-3 w-3" />
                      {candidate.match}
                    </span>
                  </td>
                  <td className="py-4.5 px-6">
                    <span className="text-slate-300 text-xs bg-[#1E293B]/80 px-2.5 py-1 rounded-full border border-[#2E3C51]/50">
                      {candidate.stage}
                    </span>
                  </td>
                  <td className="py-4.5 px-6">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D07C]" />
                      {candidate.status}
                    </span>
                  </td>
                  <td className="py-4.5 px-6 text-right">
                    <button className="text-xs font-semibold text-[#00D07C] group-hover:underline flex items-center gap-1 ml-auto">
                      View Profile <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
