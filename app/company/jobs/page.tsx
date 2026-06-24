"use client";

import React from "react";
import { Plus, Users } from "lucide-react";
import Link from "next/link";

export default function JobsPage() {
  const jobs = [
    { role: "Senior Product Designer", location: "Dubai, UAE", applicants: 53, matches: 96, status: "Open" },
    { role: "Full-Stack Engineer (React / Node)", location: "Dubai, UAE • Remote", applicants: 66, matches: 92, status: "Open" },
    { role: "AI / ML Engineer", location: "Riyadh, KSA", applicants: 79, matches: 89, status: "Open" },
    { role: "Talent Acquisition Lead", location: "Abu Dhabi, UAE", applicants: 92, matches: 85, status: "Open" },
    { role: "Growth Marketing Manager", location: "Kuwait City, KW", applicants: 105, matches: 81, status: "Open" },
    { role: "Data Analyst", location: "Abu Dhabi, UAE", applicants: 118, matches: 78, status: "Open" },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header section matching the screenshot */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Manage jobs</h1>
          <p className="text-sm text-slate-400 mt-1">Post, monitor and close listings.</p>
        </div>
        <Link href="/company/jobs/create" className="inline-flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#00D07C]/10 active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          Post a job
        </Link>
      </div>

      {/* Jobs Table Container */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400 text-xs font-semibold uppercase tracking-wider bg-[#0A0F1D]/40">
                <th className="py-4 px-6 font-medium text-slate-400">Role</th>
                <th className="py-4 px-6 font-medium text-slate-400">Location</th>
                <th className="py-4 px-6 font-medium text-slate-400">Applicants</th>
                <th className="py-4 px-6 font-medium text-slate-400">AI Matches</th>
                <th className="py-4 px-6 font-medium text-slate-400">Status</th>
                <th className="py-4 px-6 font-medium text-slate-400 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/40 text-slate-200 text-sm">
              {jobs.map((job, idx) => (
                <tr key={idx} className="hover:bg-[#162032]/30 transition-colors group">
                  {/* Role name in bold white */}
                  <td className="py-5 px-6 font-bold text-white tracking-tight">{job.role}</td>
                  {/* Location in light slate */}
                  <td className="py-5 px-6 text-slate-400 font-medium">{job.location}</td>
                  {/* Applicants Count */}
                  <td className="py-5 px-6 font-extrabold text-white">{job.applicants}</td>
                  {/* AI Matches Score in Qudra Green */}
                  <td className="py-5 px-6 font-bold text-[#00D07C]">{job.matches}</td>
                  {/* Status Badge */}
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center bg-[#00D07C]/10 text-[#00D07C] border border-[#00D07C]/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {job.status}
                    </span>
                  </td>
                  {/* Action Button */}
                  <td className="py-5 px-6 text-right">
                    <Link href="/company/jobs/applicants" className="inline-flex items-center gap-1.5 border border-slate-700/80 hover:border-slate-600 bg-[#162032] hover:bg-[#1C283F] text-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-[0.98]">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      Applicants
                    </Link>
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
