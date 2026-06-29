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
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div>
        <Link
          href="/company/candidates"
          className="inline-flex items-center gap-2  font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Profile Header Card */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#1E293B] to-[#0F172A] border-2 border-[#2E3C51] flex items-center justify-center font-extrabold text-white text-3xl shadow-lg">
              LM
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-extrabold text-white tracking-tight">Majid Al-Mansoori</h1>
                <span className=" font-semibold text-[#4BC957] bg-[#4BC957]/10 border border-[#4BC957]/20 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  97% match
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5  font-semibold text-slate-400">
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-slate-500" /> Senior Product Designer</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-slate-500" /> Dubai</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-slate-500" /> 7 yrs exp</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-center">
            <Link href="/company/inbox?id=1" className="flex items-center gap-1.5 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl  font-bold transition-all active:scale-[0.98]">
              <MessageSquare className="h-4 w-4 text-slate-400" />
              Message
            </Link>
            <Link href="/company/candidates/interview" className="flex items-center gap-1.5 bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2.5 rounded-xl  transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]">
              <Video className="h-4 w-4" />
              Set AI interview
            </Link>
          </div>
        </div>

        {/* Set Status Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-5 border-t border-[#1E293B]/60 gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className=" font-bold text-slate-500 uppercase tracking-wider">Set status:</span>
            {[
              { label: "Shortlisted", active: status === "Shortlisted" },
              { label: "Hired", active: status === "Hired" },
              { label: "Rejected", active: status === "Rejected" }
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => setStatus(btn.label)}
                className={` font-bold px-4 py-2 rounded-xl border transition-all ${btn.active
                    ? "bg-[#162032] border-[#4BC957] text-[#4BC957]"
                    : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className=" text-slate-400 font-semibold">
            Current: <span className="text-white font-bold">{status}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Preferences (2/3 width) & Contacts/Skills sidebar (1/3 width) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Preferences Column (2/3 width) */}
        <div className="lg:col-span-2 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-white">Preferences</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Role", value: "Senior Product Designer", icon: Briefcase },
              { title: "Salary", value: "AED 25k — 35k", icon: DollarSign },
              { title: "Job want", value: "Remote", icon: Globe },
              { title: "Visa", value: "Requires sponsorship", icon: Award },
              { title: "Notice period", value: "30 days", icon: Clock },
              { title: "Languages", value: "English, Arabic", icon: Languages }
            ].map((pref, idx) => (
              <div key={idx} className="bg-[#0A0F1D]/60 border border-[#1E293B]/30 rounded-xl p-4.5 space-y-2">
                <div className="flex items-center gap-2  font-bold text-slate-500 uppercase tracking-wider">
                  <pref.icon className="h-3.5 w-3.5 text-slate-600" />
                  {pref.title}
                </div>
                <p className="text-sm font-bold text-slate-200">{pref.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info (1/3 width) */}
        <div className="space-y-6">
          {/* Contact details */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
            <h3 className=" font-bold text-slate-500 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3.5 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-slate-500" />
                <span className="truncate">Majid@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-slate-500" />
                <span>+971 50 123 4567</span>
              </div>
            </div>
          </div>

          {/* Top Skills */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
            <h3 className=" font-bold text-slate-500 uppercase tracking-wider">Top skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Design Systems", "Fintech"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#162032] border border-[#2A3C58]/60 text-slate-300  font-bold px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI Interview */}
          <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
            <h3 className=" font-bold text-slate-500 uppercase tracking-wider">AI interview</h3>
            <p className=" text-slate-400 leading-relaxed font-medium">
              View the candidate's AI interview performance and rubric breakdown.
            </p>
            <Link href={'/company/candidates/interview/report?id=1'} className="w-full  flex justify-center border border-slate-700/80 hover:bg-slate-800 text-slate-300 font-bold py-2.5 rounded-xl  transition-colors">
              View report
            </Link>
          </div>
        </div>

      </div>

      {/* Resume Section */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Resume</h2>
          <button className="flex items-center gap-1.5 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl  font-bold transition-all">
            <Download className="h-3.5 w-3.5 text-slate-400" />
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-between bg-[#0A0F1D]/60 border border-[#1E293B]/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 rounded-xl">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-200">Majid_Al-Mansoori_CV.pdf</p>
              <p className=" text-slate-500 mt-0.5">Uploaded Mar 12 • 248 KB • Parsed by AI</p>
            </div>
          </div>
          <button className=" font-bold text-[#4BC957] hover:underline px-3 py-1.5">
            View
          </button>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-6">
        <h2 className="text-lg font-bold text-white">Experience</h2>

        <div className="space-y-6 pl-4 border-l-2 border-[#1E293B]/60">
          {[
            { role: "Senior Product Designer", company: "Careem", period: "2022 — Present", desc: "Led design system and shipped 12 flagship features." },
            { role: "Product Designer", company: "Noon", period: "2019 — 2022", desc: "Owned checkout and onboarding flows for 4M+ users." }
          ].map((exp, idx) => (
            <div key={idx} className="relative space-y-1.5">
              <div className="absolute -left-[23px] top-1.5 h-3 w-3 rounded-full bg-[#4BC957] border-2 border-[#0F172A]" />
              <h3 className="text-base font-bold text-white tracking-tight">
                {exp.role} <span className="text-[#4BC957] font-normal">•</span> {exp.company}
              </h3>
              <p className=" text-[#4BC957] font-semibold">{exp.period}</p>
              <p className=" text-slate-400 font-medium leading-relaxed mt-1">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-white">Education</h2>

        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-200">BSc Computer Science</h3>
          <p className=" text-slate-400 font-semibold">American University of Sharjah • 2015 — 2019</p>
        </div>
      </div>

    </div>
  );
}
