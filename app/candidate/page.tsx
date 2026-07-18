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
  Play
} from "lucide-react";
import Link from "next/link";

export default function CandidateDashboard() {
  const stats = [
    { label: "Profile match strength", value: "92%", icon: Target, color: "text-[#4BC957]", bg: "bg-[#4BC957]/10" },
    { label: "Active applications", value: "4", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "New matches today", value: "8", icon: Bell, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Credit wallet", value: "1,240", icon: Wallet, color: "text-amber-500", bg: "bg-amber-500/10" },
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
    { role: "Senior Product Designer", company: "Emirates NBD", applied: "Applied Mar 12", ats: 92, stage: "Interview", stageColor: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { role: "Full-Stack Engineer (React / Node)", company: "Careem", applied: "Applied Mar 10", ats: 88, stage: "Shortlisted", stageColor: "bg-[#4BC957]/10 text-[#4BC957] border-[#4BC957]/20" },
    { role: "AI / ML Engineer", company: "STC Pay", applied: "Applied Mar 8", ats: 81, stage: "Applied", stageColor: "bg-surface-item text-on-surface-muted border-surface" },
    { role: "Growth Marketing Manager", company: "Tarabot", applied: "Applied Feb 28", ats: 64, stage: "Rejected", stageColor: "bg-red-500/10 text-red-500 border-red-500/20" },
  ];

  const matchColor = (m: string) => {
    const n = parseInt(m);
    if (n >= 80) return "text-[#4BC957] bg-[#4BC957]/10 border-[#4BC957]/20";
    if (n >= 65) return "text-amber-500 bg-amber-500/10 border-amber-500/20";
    return "text-on-surface-muted bg-surface-item border-surface";
  };

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-full mx-auto">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight">Majid Al-Mansoori</h1>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-surface-card border border-surface rounded-2xl p-5 flex items-center justify-between hover:border-inner transition-all duration-300 group cursor-pointer">
            <div className="space-y-1">
              <span className="text-[13px] font-semibold text-on-surface-muted uppercase tracking-wider">{s.label}</span>
              <p className="text-2xl font-extrabold text-on-surface tracking-tight">{s.value}</p>
            </div>
            <div className={`${s.bg} ${s.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* AI Interview Invite Banner */}
      <div className="bg-surface-card border border-surface rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#4BC957]/10 border border-[#4BC957]/20 rounded-xl text-[#4BC957]">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-on-surface">AI interview invites</p>
            <p className=" text-on-surface-muted mt-0.5 text-sm">Emirates company invited you to an AI interview. Complete to boost your shortlist odds.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-center flex-shrink-0">
          <span className="font-bold text-on-surface-muted border border-surface bg-surface-deep px-3 py-1.5 rounded-xl text-sm">Emirates interview</span>
          <Link href="/candidate/interview" className="flex items-center gap-1.5 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98] text-sm">
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
          <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-on-surface">Daily AI recommendations</h2>
              <button className=" text-[#4BC957] font-semibold hover:underline">View all</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendations.map((job, idx) => (
                <Link key={idx} href="/candidate/jobs/detail" className="block min-w-0">
                  <div className="bg-surface-deep border border-surface rounded-xl p-4 space-y-3 hover:border-[#4BC957]/40 transition-all cursor-pointer group h-full">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="h-8 w-8 rounded-lg bg-surface-item border border-surface flex items-center justify-center text-[13px] font-bold text-on-surface flex-shrink-0">
                          {job.initials}
                        </div>
                        <div>
                          <p className="text-[13px] text-on-surface-muted font-semibold">{job.company}</p>
                          <p className=" font-bold text-on-surface leading-tight group-hover:text-[#4BC957] transition-colors">{job.role}</p>
                        </div>
                      </div>
                      <span className={`text-[13px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 ${matchColor(job.match)}`}>
                        {job.match} match
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[13px] text-on-surface-muted font-medium">
                      <span className="flex items-center gap-0.5"><MapPin className="h-3 w-3 text-on-surface-subtle" />{job.location}</span>
                      <span className="flex items-center gap-0.5"><Clock className="h-3 w-3 text-on-surface-subtle" />{job.type}</span>
                      <span className="flex items-center gap-0.5"><DollarSign className="h-3 w-3 text-on-surface-subtle" />{job.salary}</span>
                      <span className="text-[#4BC957]">✓ Visa</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {job.tags.map((t, ti) => (
                        <span key={ti} className="bg-surface-item border border-surface text-on-surface-subtle text-[9px] font-semibold px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <p className="text-[13px] text-on-surface-subtle font-medium">{job.age}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-on-surface">Recent applications</h2>
            <div className="divide-y divide-surface">
              {applications.map((app, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-3">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-on-surface">{app.role}</h3>
                    <p className=" text-on-surface-muted text-sm font-medium">{app.company} • {app.applied}</p>
                  </div>
                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <span className="text-[13px] font-bold text-on-surface-muted">ATS <span className="text-on-surface">{app.ats}</span></span>
                    <span className={`text-[13px] font-bold border px-2.5 py-1 rounded-full ${app.stageColor}`}>{app.stage}</span>
                    <Link href="/candidate/interview" className="flex items-center gap-1 border border-surface bg-surface-deep hover:bg-surface-item text-on-surface px-3 py-1.5 rounded-lg text-[13px] font-bold transition-all">
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
          <div className="bg-surface-card border border-surface rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-2 font-bold text-[#4BC957]">
              <Sparkles className="h-4 w-4" />
              Auto-apply mode
            </div>
            <p className=" text-on-surface-muted text-sm leading-relaxed font-medium">
              CareerSprint AI submits tailored applications to your top matches every day. Daily cap 8.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center font-bold">
                <span className="text-on-surface-muted">Today</span>
                <span className="text-[#4BC957]">Enabled</span>
              </div>
              <div className="w-full bg-surface-item h-2 rounded-full overflow-hidden">
                <div className="bg-[#4BC957] h-full rounded-full" style={{ width: "62.5%" }} />
              </div>
              <p className="text-[13px] text-on-surface-subtle font-medium text-right">5/8 sent</p>
            </div>
          </div>

          {/* CV Strength */}
          <div className="bg-surface-card border border-surface rounded-2xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-on-surface">CV strength</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between font-bold">
                <span className="text-on-surface-muted">Today</span>
                <span className="text-[#4BC957]">88%</span>
              </div>
              <div className="w-full bg-surface-item h-2 rounded-full overflow-hidden">
                <div className="bg-[#4BC957] h-full rounded-full" style={{ width: "88%" }} />
              </div>
            </div>
            <div className="space-y-2 text-on-surface-muted text-sm font-medium">
              <p className="flex items-center gap-2"><span className="text-[#4BC957]">📄</span> Add a portfolio link</p>
              <p className="flex items-center gap-2"><span className="text-[#4BC957]">📊</span> Quantify 2 more results</p>
            </div>
            <Link href="/candidate/cv" className="w-full block text-center bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold py-2.5 rounded-xl transition-all active:scale-[0.98] text-sm">
              Improve CV
            </Link>
          </div>

          {/* Preferences */}
          <div className="bg-surface-card border border-surface rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-on-surface">Preferences</h3>
              <button className="text-on-surface-subtle hover:text-on-surface transition-colors">
                <Pencil className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-2 text-on-surface-muted text-sm font-medium">
              <p>Role. <span className="text-on-surface font-semibold">Senior Product Designer</span></p>
              <p>Salary. <span className="text-on-surface font-semibold">AED 25k-35k</span></p>
              <p>Location. <span className="text-on-surface font-semibold">Remote</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
