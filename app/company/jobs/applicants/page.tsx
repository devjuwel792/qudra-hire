"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, 
  SlidersHorizontal, 
  Sparkles, 
  MessageSquare, 
  Video, 
  Clock, 
  CheckCircle2, 
  RefreshCw 
} from "lucide-react";
import Link from "next/link";

export default function JobApplicantsPage() {
  const [filter, setFilter] = useState("All");

  const applicants = [
    {
      name: "Layla Al-Mansoori",
      initials: "LM",
      role: "Senior Product Designer",
      location: "Dubai",
      exp: "7 yrs",
      match: "97%",
      stage: "New",
      interviewStatus: "Pending",
      interviewDesc: "No interview sent yet. Send one to qualify this candidate faster."
    },
    {
      name: "Omar Haddad",
      initials: "OH",
      role: "Full-Stack Engineer",
      location: "Riyadh",
      exp: "5 yrs",
      match: "94%",
      stage: "AI Interview",
      interviewStatus: "Completed",
      score: "88/100",
      progress: 88
    },
    {
      name: "Sara Khan",
      initials: "SK",
      role: "ML Engineer",
      location: "Remote",
      exp: "4 yrs",
      match: "91%",
      stage: "Shortlisted",
      interviewStatus: "Completed",
      score: "81/100",
      progress: 81
    },
    {
      name: "Khalid Al-Otaibi",
      initials: "KO",
      role: "TA Lead",
      location: "Abu Dhabi",
      exp: "9 yrs",
      match: "88%",
      stage: "AI Interview",
      interviewStatus: "In progress",
      interviewDesc: "No interview sent yet. Send one to qualify this candidate faster."
    }
  ];

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto">
      {/* Top Navigation Back */}
      <div>
        <Link 
          href="/company/jobs" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Header section matching the screenshot */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Senior Product Designer</h1>
          <p className="text-sm text-slate-400 mt-1">5 applicants • Dubai, UAE</p>
        </div>
        <button className="flex items-center gap-2 border border-slate-700/80 bg-[#0F172A] hover:bg-[#1E293B] text-slate-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-[0.98]">
          <SlidersHorizontal className="h-4 w-4 text-slate-400" />
          Filters
        </button>
      </div>

      {/* Status Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {["All", "New", "AI Interview", "Shortlisted", "Offer"].map((tab) => {
          const isActive = filter === tab;
          return (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`text-xs font-bold px-4.5 py-2 rounded-full border transition-all ${
                isActive 
                  ? "bg-[#00D07C] border-[#00D07C] text-[#080C14]" 
                  : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Applicants List */}
      <div className="space-y-4">
        {applicants.map((candidate, idx) => (
          <div 
            key={idx} 
            className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-[#2A3C58] transition-all duration-300 relative group cursor-pointer"
          >
            {/* Top row Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#2E3C51] flex items-center justify-center font-bold text-slate-300 text-sm shadow-inner flex-shrink-0">
                  {candidate.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#00D07C] transition-colors">{candidate.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    {candidate.role} <span className="text-slate-600">•</span> {candidate.location} <span className="text-slate-600">•</span> {candidate.exp}
                  </p>
                </div>
              </div>

              {/* Match and Stage Badges */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#00D07C] bg-[#00D07C]/10 border border-[#00D07C]/20 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  {candidate.match} match
                </span>
                <span className="text-[10px] font-bold text-slate-400 bg-[#162032] border border-[#2A3C58]/60 px-2.5 py-0.5 rounded-md">
                  Stage: {candidate.stage}
                </span>
              </div>
            </div>

            {/* AI Interview Status & Progress / Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 border-t border-[#1E293B]/40 gap-4">
              {/* Interview Status details */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="text-slate-500">AI interview</span>
                  {candidate.interviewStatus === "Pending" && (
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Clock className="h-3.5 w-3.5" />
                      Pending
                    </span>
                  )}
                  {candidate.interviewStatus === "In progress" && (
                    <span className="text-amber-400 flex items-center gap-1 text-[11px]">
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                      In progress
                    </span>
                  )}
                  {candidate.interviewStatus === "Completed" && (
                    <div className="flex items-center gap-3">
                      <span className="text-[#00D07C] flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Completed
                      </span>
                      <span className="text-white font-bold text-[11px] bg-slate-800 px-2 py-0.5 rounded">
                        {candidate.score}
                      </span>
                      <button className="text-white hover:underline text-[11px] font-bold">
                        View report
                      </button>
                    </div>
                  )}
                </div>

                {/* Progress bar or description */}
                {candidate.interviewStatus === "Completed" && candidate.progress ? (
                  <div className="w-full max-w-md bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#00D07C] h-full rounded-full" style={{ width: `${candidate.progress}%` }} />
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{candidate.interviewDesc}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-[0.98]">
                  <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                  Message
                </button>
                <Link href="/company/candidates/interview" className="flex items-center gap-1.5 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]">
                  <Video className="h-3.5 w-3.5" />
                  Set AI interview
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
