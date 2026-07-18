"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  MessageSquare,
  Video,
  Star,
  MapPin,
  Briefcase,
  Clock,
  Mail,
  Phone,
  FileText,
  Download,
  Check,
  X,
  Languages,
  DollarSign,
  Globe,
  Award,
  Sparkles
} from "lucide-react";
import Link from "next/link";


export default function CandidateProfilePage() {
  const [status, setStatus] = useState("New");

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-full mx-auto">
      {/* Back button */}
      <div>
        <Link
          href="/company/candidates"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Profile Header Card */}
      <div className="bg-card border border-border rounded-2xl p-4 md:p-6 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-full bg-muted border-2 border-border flex items-center justify-center font-extrabold text-foreground text-3xl shadow-lg">
              LM
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Majid Al-Mansoori</h1>
                <span className="text-sm font-semibold text-[#4BC957] bg-[#4BC957]/10 border border-[#4BC957]/20 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  97% match
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> Senior Product Designer</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Dubai</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 7 yrs exp</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-center">
            <Link href="/company/inbox?id=1" className="flex items-center gap-1.5 border border-border hover:bg-muted text-foreground px-4 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98]">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              Message
            </Link>
            <Link href="/company/candidates/interview" className="flex items-center gap-1.5 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]">
              <Video className="h-4 w-4" />
              Set AI interview
            </Link>
          </div>
        </div>

        {/* Status Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-5 border-t border-border gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Set status:</span>
            {[
              { label: "Shortlisted", active: status === "Shortlisted" },
              { label: "Hired", active: status === "Hired" },
              { label: "Rejected", active: status === "Rejected" }
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => setStatus(btn.label)}
                className={`text-sm font-bold px-4 py-2 rounded-xl border transition-all ${btn.active
                  ? "bg-[#4BC957]/10 border-[#4BC957] text-[#4BC957]"
                  : "border-border text-muted-foreground hover:border-border/80 hover:text-foreground"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground font-semibold">
            Current: <span className="text-foreground font-bold">{status}</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Preferences Column */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 space-y-6 shadow-sm">
          <h2 className="text-lg font-bold text-foreground">Preferences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Role", value: "Senior Product Designer", icon: Briefcase },
              { title: "Salary", value: "AED 25k — 35k", icon: DollarSign },
              { title: "Job want", value: "Remote", icon: Globe },
              { title: "Visa", value: "Requires sponsorship", icon: Award },
              { title: "Notice period", value: "30 days", icon: Clock },
              { title: "Languages", value: "English, Arabic", icon: Languages }
            ].map((pref, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  <pref.icon className="h-3.5 w-3.5" />
                  {pref.title}
                </div>
                <p className="text-sm font-bold text-foreground">{pref.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Contact</h3>
            <div className="space-y-3.5 text-sm font-semibold text-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="truncate">Majid@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <span>+971 50 123 4567</span>
              </div>
            </div>
          </div>

          {/* Top Skills */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Top skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Design Systems", "Fintech"].map((skill) => (
                <span
                  key={skill}
                  className="bg-muted border border-border text-foreground text-sm font-bold px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI Interview */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">AI interview</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              View the candidate's AI interview performance and rubric breakdown.
            </p>
            <Link href="/company/candidates/interview/report?id=1" className="w-full text-sm flex justify-center border border-border hover:bg-muted text-foreground font-bold py-2.5 rounded-xl transition-colors">
              View report
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-5 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-foreground">Resume</h2>
          <button className="flex items-center gap-1.5 border border-border hover:bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-bold transition-all">
            <Download className="h-3.5 w-3.5 text-muted-foreground" />
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-between bg-background border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 rounded-xl">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Majid_Al-Mansoori_CV.pdf</p>
              <p className="text-xs text-muted-foreground mt-0.5">Uploaded Mar 12 • 248 KB • Parsed by AI</p>
            </div>
          </div>
          <button className="text-sm font-bold text-[#4BC957] hover:underline px-3 py-1.5">
            View
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-6 shadow-sm">
        <h2 className="text-lg font-bold text-foreground">Experience</h2>
        <div className="space-y-6 pl-4 border-l-2 border-border">
          {[
            { role: "Senior Product Designer", company: "Careem", period: "2022 — Present", desc: "Led design system and shipped 12 flagship features." },
            { role: "Product Designer", company: "Noon", period: "2019 — 2022", desc: "Owned checkout and onboarding flows for 4M+ users." }
          ].map((exp, idx) => (
            <div key={idx} className="relative space-y-1.5">
              <div className="absolute -left-[23px] top-1.5 h-3 w-3 rounded-full bg-[#4BC957] border-2 border-card" />
              <h3 className="text-base font-bold text-foreground tracking-tight">
                {exp.role} <span className="text-[#4BC957] font-normal">•</span> {exp.company}
              </h3>
              <p className="text-sm text-[#4BC957] font-semibold">{exp.period}</p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-1">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-foreground">Education</h2>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-foreground">BSc Computer Science</h3>
          <p className="text-sm text-muted-foreground font-semibold">American University of Sharjah • 2015 — 2019</p>
        </div>
      </div>

    </div>
  );
}
