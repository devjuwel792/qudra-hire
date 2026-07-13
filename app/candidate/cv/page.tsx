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
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto text-slate-900 dark:text-white">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">CV & ATS optimization</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Upload once. Tailor for every role with AI.</p>
      </div>

      {/* Upload Dropzone */}
      <div className="border-2 border-dashed border-green-300 dark:border-[#4BC957]/40 bg-slate-50 dark:bg-[#0F172A]/30 rounded-2xl p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-green-500 dark:hover:border-[#4BC957]/70 transition-all cursor-pointer">
        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-[#4BC957]/10 flex items-center justify-center text-green-600 dark:text-[#4BC957]">
          <Upload className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Drop your CV here</h3>
          <p className="text-slate-600 dark:text-slate-400">PDF or DOCX, max 10MB. We'll parse skills, projects and experience.</p>
        </div>
        <button className="bg-green-600 hover:bg-green-500 dark:bg-[#4BC957] dark:hover:bg-[#00B96E] text-white dark:text-white font-bold px-5 py-2.5 rounded-xl transition-all active:scale-[0.98]">
          Upload CV
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (File Info & AI Suggestions) */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-none">
          <div className="space-y-6">
            {/* File info header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-green-50 dark:bg-[#4BC957]/10 border border-green-200 dark:border-[#4BC957]/20 rounded-xl text-green-600 dark:text-[#4BC957]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Majid_AlMansoori_CV.pdf</h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">Updated 2d ago</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-slate-600 dark:text-slate-400">ATS readiness</span>
                <span className="text-green-600 dark:text-[#4BC957]">88%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-green-500 dark:bg-[#4BC957] h-full rounded-full" style={{ width: "88%" }} />
              </div>
            </div>

            {/* AI Suggestions list */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">AI suggestions</h4>
              <ul className="space-y-2.5">
                {suggestions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 font-medium">
                    <span className="h-4.5 w-4.5 rounded-full bg-green-50 dark:bg-[#4BC957]/10 border border-green-200 dark:border-[#4BC957]/20 text-green-600 dark:text-[#4BC957] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-[#1E293B]/40">
            <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 dark:bg-[#4BC957] dark:hover:bg-[#00B96E] text-white dark:text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-green-500/10 dark:shadow-[#4BC957]/10 active:scale-[0.98]">
              <Sparkles className="h-3.5 w-3.5" />
              Auto suggest
            </button>
            <button className="flex items-center gap-1.5 border border-slate-300 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-xl font-bold transition-all">
              <Download className="h-3.5 w-3.5" />
              Download
            </button>
          </div>
        </div>

        {/* Right Column (Parsed Skills) */}
        <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#1E293B]/60 rounded-2xl p-6 space-y-4 shadow-sm dark:shadow-none">
          <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">Parsed skills</h3>

          <div className="flex flex-wrap gap-2">
            {parsedSkills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-100 dark:bg-[#1E293B]/50 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl font-medium"
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
