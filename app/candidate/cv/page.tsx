"use client";

import React from "react";
import { Upload, FileText, Check, Sparkles, Download } from "lucide-react";

export default function CandidateCVPage() {
  const parsedSkills = [
    "Figma",
    "Design Systems",
    "User Research",
    "Prototyping",
    "Fintech",
    "Accessibility",
    "Arabic",
    "English"
  ];

  const suggestions = [
    "Add keywords: design systems, fintech, accessibility",
    "Quantify 2 more outcomes (e.g. retention %, NPS)",
    "Add a portfolio link in the header"
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">CV & ATS optimization</h1>
        <p className="text-sm text-slate-400 mt-1">Upload once. Tailor for every role with AI.</p>
      </div>

      {/* Upload Dropzone */}
      <div className="border-2 border-dashed border-[#00D07C]/40 bg-[#0F172A]/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#00D07C]/70 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-full bg-[#00D07C]/10 flex items-center justify-center text-[#00D07C]">
          <Upload className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white">Drop your CV here</h3>
          <p className=" text-slate-400">PDF or DOCX, max 10MB. We'll parse skills, projects and experience.</p>
        </div>
        <button className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-5 py-2.5 rounded-xl  transition-all active:scale-[0.98]">
          Upload CV
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (File Info & AI Suggestions) */}
        <div className="lg:col-span-2 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            {/* File info header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#00D07C]/10 border border-[#00D07C]/20 rounded-xl text-[#00D07C]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Layla_AlMansoori_CV.pdf</h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">Updated 2d ago</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between  font-bold">
                <span className="text-slate-400">ATS readiness</span>
                <span className="text-[#00D07C]">88%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#00D07C] h-full rounded-full" style={{ width: "88%" }} />
              </div>
            </div>

            {/* AI Suggestions list */}
            <div className="space-y-3">
              <h4 className=" font-bold text-white uppercase tracking-wider">AI suggestions</h4>
              <ul className="space-y-2.5">
                {suggestions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5  text-slate-300 font-medium">
                    <span className="h-4.5 w-4.5 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 text-[#00D07C] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#1E293B]/40">
            <button className="flex items-center gap-1.5 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] px-4 py-2.5 rounded-xl  font-bold transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]">
              <Sparkles className="h-3.5 w-3.5" />
              Auto suggest
            </button>
            <button className="flex items-center gap-1.5 border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl  font-bold transition-all">
              <Download className="h-3.5 w-3.5" />
              Download
            </button>
          </div>
        </div>

        {/* Right Column (Parsed Skills) */}
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-4">
          <h3 className=" font-bold text-white uppercase tracking-wider">Parsed skills</h3>

          <div className="flex flex-wrap gap-2">
            {parsedSkills.map((skill) => (
              <span
                key={skill}
                className="bg-[#1E293B]/50 border border-slate-700/50 text-slate-300  px-3 py-1.5 rounded-xl font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
