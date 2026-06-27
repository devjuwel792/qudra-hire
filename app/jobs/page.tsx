"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, Clock, DollarSign, Settings2 } from "lucide-react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";

// Data
const jobs = Array(6).fill({
  company: "Emirates NBD",
  initials: "ENB",
  role: "Senior Product Designer",
  location: "Dubai, UAE",
  type: "Full-time",
  salary: "AED 28k-35k",
  visa: true,
  match: "96% match",
  time: "2d ago",
  tags: ["Figma", "Design system", "Ux research", "Fintech", "Emiratization"],
});

export default function JobsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <QudraHeader activePage="Find jobs" />

      {/* Header Section */}
      <section className="border-b border-white/5 bg-[#0A0F1D] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
            Find your next role
          </h1>
          <p className="text-slate-400 text-lg mb-8">6 curated openings across the GCC.</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                className="w-full bg-[#080C14] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D07C]/50 transition-colors"
                placeholder="Search deals near you..."
              />
            </div>
            <button className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-8 py-3.5 rounded-xl transition-all active:scale-[0.98] whitespace-nowrap">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div className="flex items-center gap-2 font-bold text-white mb-2 text-lg">
            <Settings2 className="h-5 w-5" />
            Filters
          </div>

          {/* Requirements */}
          <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5">
            <h3 className="font-bold text-white mb-4">Requirements</h3>
            <div className="space-y-3">
              {['Visa sponsorship', 'Emiratization', 'Saudization', 'Remote'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full border border-slate-600 group-hover:border-[#00D07C] flex items-center justify-center transition-colors">
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5">
            <h3 className="font-bold text-white mb-4">Location</h3>
            <div className="space-y-3">
              {['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha', 'Kuwait City'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full border border-slate-600 group-hover:border-[#00D07C] flex items-center justify-center transition-colors">
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Job type */}
          <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5">
            <h3 className="font-bold text-white mb-4">Job type</h3>
            <div className="space-y-3">
              {['Full-time', 'Contract', 'Part-time', 'Internship'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full border border-slate-600 group-hover:border-[#00D07C] flex items-center justify-center transition-colors">
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-300">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Job Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <span className="text-slate-400 font-medium">6 results</span>
            <Link href="#" className="text-[#00D07C] font-semibold hover:underline flex items-center gap-1">
              Switch to auto-apply mode <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[#162032] border border-white/5 flex items-center justify-center text-sm font-bold text-white shrink-0">
                      {job.initials}
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium">{job.company}</p>
                      <h3 className="font-bold text-white text-lg group-hover:text-[#00D07C] transition-colors leading-tight">
                        {job.role}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="bg-[#00D07C]/10 text-[#00D07C] border border-[#00D07C]/20 text-xs font-bold px-2.5 py-1 rounded-full">
                      {job.match}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{job.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-400 mb-5">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                  <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5" />{job.salary}</span>
                  {job.visa && (
                    <span className="flex items-center gap-1.5 text-[#00D07C]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Visa
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag: string) => (
                    <span key={tag} className="bg-[#162032] border border-white/5 text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <QudraFooter />
    </div>
  );
}
