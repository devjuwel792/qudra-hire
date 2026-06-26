"use client";

import React from "react";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function InterviewSentPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <Link
          href="/company/candidates/interview"
          className="inline-flex items-center gap-2  font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        {/* Icon */}
        <div className="h-20 w-20 rounded-full bg-[#00D07C]/15 border border-[#00D07C]/30 flex items-center justify-center shadow-[0_0_40px_-8px_rgba(0,208,124,0.4)]">
          <Send className="h-9 w-9 text-[#00D07C]" />
        </div>

        {/* Title */}
        <div className="space-y-3 max-w-md">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Interview sent</h1>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Omar Haddad will get a WhatsApp + email invite. You'll be notified when the AI scoring report is ready (usually within minutes of completion).
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Link
            href="/company/candidates"
            className="border border-slate-700/80 hover:bg-slate-800/60 text-slate-200 font-bold px-6 py-3 rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            Back to candidates
          </Link>
          <Link
            href="/company/candidates/interview/report"
            className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-[#00D07C]/10 active:scale-[0.98]"
          >
            Preview report
          </Link>
        </div>
      </div>
    </div>
  );
}
