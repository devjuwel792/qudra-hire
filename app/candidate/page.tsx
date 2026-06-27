"use client";

import React from "react";
import {
  Sparkles,
  Bell,
  Briefcase,
  Target,
  Wallet,
  Bot,
  Pencil,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Play
} from "lucide-react";
import Link from "next/link";

export default function CandidateDashboard() {
  const stats = [
    { label: "Profile match strength", value: "92%", icon: Target, color: "text-[#4BC957]", bg: "bg-[#4BC957]/10" },
    { label: "Active applications", value: "4", icon: Briefcase, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "New matches today", value: "8", icon: Bell, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Credit wallet", value: "1,240", icon: Wallet, color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  const recommendations = [
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "79%", age: "2d ago" },
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "80%", age: "2d ago" },
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "56%", age: "2d ago" },
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "88%", age: "2d ago" },
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "78%", age: "2d ago" },
    { company: "Emirates NBD", initials: "ENB", role: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k–35k", tags: ["Figma", "Design system", "UX research", "Fintech", "Emiratization"], match: "71%", age: "2d ago" },
  ];

  const applications = [
    { role: "Senior Product Designer", company: "Emirates NBD", applied: "Applied Mar 12", ats: 92, stage: "Interview", stageColor: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
    { role: "Full-Stack Engineer (React / Node)", company: "Careem", applied: "Applied Mar 10", ats: 88, stage: "Shortlisted", stageColor: "bg-[#4BC957]/10 text-[#4BC957] border-[#4BC957]/20" },
    { role: "AI / ML Engineer", company: "STC Pay", applied: "Applied Mar 8", ats: 81, stage: "Applied", stageColor: "bg-slate-700/40 text-slate-300 border-slate-600/30" },
    { role: "Growth Marketing Manager", company: "Tarabot", applied: "Applied Feb 28", ats: 64, stage: "Rejected", stageColor: "bg-red-900/20 text-red-400 border-red-800/30" },
  ];

  const matchColor = (m: string) => {
    const n = parseInt(m);
    if (n >= 80) return "text-[#4BC957] bg-[#4BC957]/10 border-[#4BC957]/20";
    if (n >= 65) return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    return "text-slate-400 bg-slate-700/30 border-slate-600/30";
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Layla Al-Mansoori</h1>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 flex items-center justify-between hover:border-[#334155] transition-all duration-300 group cursor-pointer">
            <div className="space-y-1">
              <span className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider">{s.label}</span>
              <p className="text-2xl font-extrabold text-white tracking-tight">{s.value}</p>
            </div>
            <div className={`${s.bg} ${s.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* AI Interview Invite Banner */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#4BC957]/10 border border-[#4BC957]/20 rounded-xl text-[#4BC957]">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">AI interview invites</p>
            <p className=" text-slate-400 mt-0.5">Emirates company invited you to an AI interview. Complete to boost your shortlist odds.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-center flex-shrink-0">
          <span className=" font-bold text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl">Emirates interview</span>
          <Link href="/candidate/interview" className="flex items-center gap-1.5 bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2 rounded-xl  transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]">
            <Play className="h-3.5 w-3.5" />
            Start
          </Link>
        </div>
      </div>

      {/* Main 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — recommendations + applications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily AI Recommendations */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-white">Daily AI recommendations</h2>
              <button className=" text-[#4BC957] font-semibold hover:underline">View all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendations.map((job, idx) => (
                <Link key={idx} href="/candidate/jobs/detail" className="block min-w-0">
                  <div className="bg-[#0A0F1D]/60 border border-[#1E293B]/40 rounded-xl p-4 space-y-3 hover:border-[#2A3C58] transition-all cursor-pointer group h-full">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center text-[13px] font-bold text-slate-300 flex-shrink-0">
                          {job.initials}
                        </div>
                        <div>
                          <p className="text-[13px] text-slate-500 font-semibold">{job.company}</p>
                          <p className=" font-bold text-white leading-tight group-hover:text-[#4BC957] transition-colors">{job.role}</p>
                        </div>
                      </div>
                      <span className={`text-[13px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 ${matchColor(job.match)}`}>
                        {job.match} match
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[13px] text-slate-500 font-medium">
                      <span className="flex items-center gap-0.5"><MapPin className="h-3 w-3" />{job.location}</span>
                      <span className="flex items-center gap-0.5"><Clock className="h-3 w-3" />{job.type}</span>
                      <span className="flex items-center gap-0.5"><DollarSign className="h-3 w-3" />{job.salary}</span>
                      <span className="text-[#4BC957]">✓ Visa</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {job.tags.map((t, ti) => (
                        <span key={ti} className="bg-[#162032] border border-[#2A3C58]/60 text-slate-400 text-[9px] font-semibold px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <p className="text-[13px] text-slate-600 font-medium">{job.age}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-white">Recent applications</h2>
            <div className="divide-y divide-[#1E293B]/50">
              {applications.map((app, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-3">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white">{app.role}</h3>
                    <p className=" text-slate-500 font-medium">{app.company} • {app.applied}</p>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="text-[13px] font-bold text-slate-400">ATS <span className="text-white">{app.ats}</span></span>
                    <span className={`text-[13px] font-bold border px-2.5 py-1 rounded-full ${app.stageColor}`}>{app.stage}</span>
                    <Link href="/candidate/interview" className="flex items-center gap-1 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-[13px] font-bold transition-all">
                      <Bot className="h-3 w-3 text-[#4BC957]" />
                      AI Interview
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar — Auto-apply + CV strength + Preferences */}
        <div className="space-y-4">
          {/* Auto-apply Mode */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2  font-bold text-[#4BC957]">
              <Sparkles className="h-4 w-4" />
              Auto-apply mode
            </div>
            <p className=" text-slate-400 leading-relaxed font-medium">
              QudraHire AI submits tailored applications to your top matches every day. Daily cap 8.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center  font-bold">
                <span className="text-slate-400">Today</span>
                <span className="text-[#4BC957]">Enabled</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#4BC957] h-full rounded-full" style={{ width: "62.5%" }} />
              </div>
              <p className="text-[13px] text-slate-500 font-medium text-right">5/8 sent</p>
            </div>
          </div>

          {/* CV Strength */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-white">CV strength</h3>
            <div className="space-y-2">
              <div className="flex justify-between  font-bold">
                <span className="text-slate-400">Today</span>
                <span className="text-[#4BC957]">88%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#4BC957] h-full rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
            <div className="space-y-2  text-slate-400 font-medium">
              <p className="flex items-center gap-2"><span className="text-[#4BC957]">📄</span> Add a portfolio link</p>
              <p className="flex items-center gap-2"><span className="text-[#4BC957]">📊</span> Quantify 2 more results</p>
            </div>
            <Link href="/candidate/cv" className="w-full block text-center bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold py-2.5 rounded-xl  transition-all active:scale-[0.98]">
              Improve CV
            </Link>
          </div>

          {/* Preferences */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-white">Preferences</h3>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Pencil className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-2  text-slate-400 font-medium">
              <p>Role. <span className="text-slate-200 font-semibold">Senior Product Designer</span></p>
              <p>Salary. <span className="text-slate-200 font-semibold">AED 25k-35k</span></p>
              <p>Location. <span className="text-slate-200 font-semibold">Remote</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
