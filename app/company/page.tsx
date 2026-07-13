"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Users,
  MessageSquare,
  Wallet,
  Plus,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanyDashboard() {
  const [activeJobs, setActiveJobs] = useState(12);
  const [shortlistedCount, setShortlistedCount] = useState(20);

  const pipelineStages = [
    {
      title: "Applied",
      count: 28,
      candidates: [
        { id: 1, name: "Majid Al-M.", role: "Senior Product Designer", match: "97%" },
        { id: 2, name: "Omar H.", role: "Full-Stack Engineer", match: "94%" },
        { id: 3, name: "Yousef A.", role: "AI / ML Engineer", match: "85%" },
      ]
    },
    {
      title: "Shortlisted",
      count: 14,
      candidates: [
        { id: 4, name: "Sara Khan", role: "ML Engineer", match: "91%" },
        { id: 5, name: "Mariam J.", role: "Product Manager", match: "87%" },
      ]
    },
    {
      title: "Interview",
      count: 7,
      candidates: [
        { id: 6, name: "Khalid Al-O.", role: "Talent Acquisition Lead", match: "88%" },
      ]
    },
    {
      title: "Offer",
      count: 3,
      candidates: [
        { id: 7, name: "Zainab M.", role: "UX Researcher", match: "90%" },
      ]
    },
    {
      title: "Hired",
      count: 2,
      candidates: [
        { id: 8, name: "Tariq S.", role: "DevOps Engineer", match: "93%" },
      ]
    }
  ];

  const aiMatches = [
    { name: "Majid Al-Mansoori", role: "Senior Product Designer", score: "97%", initials: "LM", id: 1 },
    { name: "Omar Haddad", role: "Full-Stack Engineer", score: "94%", initials: "OH", id: 2 },
    { name: "Sara Khan", role: "ML Engineer", score: "91%", initials: "SK", id: 3 },
    { name: "Khalid Al-Otaibi", role: "TA Lead", score: "88%", initials: "KO", id: 4 },
  ];

  const openRoles = [
    { title: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", applicants: 51 },
    { title: "Full-Stack Engineer (React / Node)", location: "Dubai, UAE", type: "Remote • Full-time", applicants: 62 },
    { title: "AI / ML Engineer", location: "Riyadh, KSA", type: "Full-time", applicants: 73 },
    { title: "Talent Acquisition Lead", location: "Abu Dhabi, UAE", type: "Full-time", applicants: 84 },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Top Welcome / Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-sm font-medium text-on-surface-muted uppercase tracking-widest">Hiring workspace</h1>
          <p className="text-3xl font-extrabold text-on-surface mt-1 tracking-tight">
            Emirates NBD <span className="text-[#4BC957] font-normal">•</span> Talent
          </p>
        </div>
        <Link href="/company/jobs/create" className="flex items-center gap-2 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#4BC957]/10 active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          Post a job
        </Link>
      </div>

      {/* Stats Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Active jobs", value: activeJobs, icon: Briefcase, color: "text-[#4BC957]", bg: "bg-[#4BC957]/10", href: "/company/jobs" },
          { label: "Shortlisted", value: shortlistedCount, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", href: "/company/candidates" },
          { label: "Messaged", value: 12, icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10", href: "/company/inbox" },
          { label: "Credits", value: "1,240", icon: Wallet, color: "text-amber-500", bg: "bg-amber-500/10", href: "/company/wallet" },
        ].map((stat, idx) => (
          <Link
            key={idx}
            href={stat.href}
            className="bg-surface-card border border-surface rounded-2xl p-5 flex items-center justify-between hover:border-inner transition-all duration-300 group cursor-pointer"
          >
            <div className="space-y-1">
              <span className=" font-medium text-on-surface-muted uppercase tracking-wider">{stat.label}</span>
              <p className="text-3xl font-bold text-on-surface tracking-tight">{stat.value}</p>
            </div>
            <div className={`${stat.bg} ${stat.color} p-3.5 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="h-5 w-5" />
            </div>
          </Link>
        ))}
      </div>

      {/* Pipeline & AI Matches Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recruitment Pipeline Column (2/3 width) */}
        <div className="lg:col-span-2 bg-surface-card border border-surface rounded-2xl p-6 flex flex-col space-y-5">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
              Recruitment pipeline
            </h2>
            <Link href={"/company/candidates"} className=" text-[#4BC957] font-semibold hover:underline flex items-center gap-1.5">
              Open board <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Pipeline stages container */}
          <div className="flex md:grid md:grid-cols-5 gap-3 h-full min-h-[220px] overflow-x-auto pb-2 md:pb-0">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="bg-surface-deep rounded-xl p-3 flex flex-col space-y-3 min-w-[160px] md:min-w-0">
                <div className="flex items-center justify-between border-b border-surface pb-2">
                  <span className=" font-semibold text-on-surface-muted">{stage.title}</span>
                  <span className="text-[13px] font-bold text-on-surface-subtle bg-surface-card px-2 py-0.5 rounded-full border border-surface">{stage.count}</span>
                </div>

                <div className="flex-1 space-y-2 overflow-y-auto">
                  {stage.candidates.map((candidate) => (
                    <div
                      key={candidate.id}
                      className="bg-surface-item border border-surface rounded-lg p-2.5 hover:border-[#4BC957]/50 transition-all duration-200 cursor-pointer group"
                    >
                      <Link href={`/company/candidates/profile?id=${candidate.id}`} >
                        <p className=" font-semibold text-on-surface truncate group-hover:text-[#4BC957] transition-colors">{candidate.name}</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-[9px] text-on-surface-subtle truncate max-w-[50px]">{candidate.role.split(" ")[0]}</span>
                          <span className="text-[9px] font-semibold text-[#4BC957] flex items-center gap-0.5">
                            <Sparkles className="h-2 w-2" />
                            {candidate.match}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top AI Matches Column (1/3 width) */}
        <div className="bg-surface-card border border-surface rounded-2xl p-6 flex flex-col space-y-5">
          <div>
            <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-[#4BC957]" />
              Top AI matches
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-4">
            {aiMatches.map((match, idx) => (
              <Link key={idx} href={`/company/candidates/profile?id=${match?.id}`}>
                <div
                  className="flex items-center justify-between p-3.5 rounded-xl bg-surface-deep border border-surface hover:border-[#4BC957]/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-surface-item border border-surface flex items-center justify-center font-bold text-on-surface text-sm">
                      {match.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface group-hover:text-[#4BC957] transition-colors">{match.name}</p>
                      <p className=" text-on-surface-muted text-xs">{match.role}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#4BC957] bg-[#4BC957]/10 px-2.5 py-1 rounded-lg">
                    {match.score}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles Table / List */}
      <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
            Open roles
          </h2>
          <Link href={"/company/jobs"} className=" text-on-surface-muted hover:text-on-surface font-semibold flex items-center gap-1 transition-colors">
            Manage
          </Link>
        </div>

        <div className="divide-y divide-surface">
          {openRoles.map((role, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4.5 first:pt-0 last:pb-0 gap-4 group">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-on-surface group-hover:text-[#4BC957] transition-colors">{role.title}</h3>
                <div className="flex items-center gap-4 text-on-surface-muted text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-on-surface-subtle" />
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-on-surface-subtle" />
                    {role.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-medium text-on-surface-muted text-sm">
                  <strong className="text-on-surface font-semibold">{role.applicants}</strong> applicants
                </span>
                <Link href={"/company/jobs/applicants"} className="border border-[#4BC957]/40 text-[#4BC957] hover:bg-[#4BC957] hover:text-white px-4 py-1.5 rounded-lg font-semibold transition-all duration-200">
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
