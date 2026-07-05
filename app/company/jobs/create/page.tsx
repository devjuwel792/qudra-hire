"use client";

import React, { useState } from "react";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

export default function PostJobPage() {
  const [visaSp, setVisaSp] = useState(true);
  const [emiratization, setEmiratization] = useState(true);
  const [saudization, setSaudization] = useState(false);
  const [remote, setRemote] = useState(false);

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Top Navigation Back / Title */}
      <div className="space-y-3">
        <Link
          href="/company/jobs"
          className="inline-flex items-center gap-2 font-semibold text-on-surface-muted hover:text-on-surface transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Post a new job</h1>
            <p className="text-sm text-on-surface-muted mt-1">AI will shortlist your top 10 matches within minutes.</p>
          </div>
          <span className="bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 px-3 py-1.5 rounded-full font-semibold flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" />
            Trade-licence verified
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Form (2/3 width) */}
        <div className="lg:col-span-2 bg-surface-card border border-surface rounded-2xl p-6 space-y-6">

          {/* Job Title */}
          <div className="space-y-2">
            <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Job title</label>
            <input
              type="text"
              defaultValue="Senior Product Designer"
              placeholder="e.g. Lead Developer"
              className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
            />
          </div>

          {/* Skills Tag input */}
          <div className="space-y-2">
            <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Skills</label>
            <input
              type="text"
              placeholder="Enter Skills"
              className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
            />
          </div>

          {/* Location & Employment Type (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Location</label>
              <input
                type="text"
                defaultValue="Dubai, UAE"
                placeholder="e.g. Riyadh, KSA"
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Employment type</label>
              <input
                type="text"
                defaultValue="Full-time"
                placeholder="e.g. Contract, Part-time"
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Currency & Salary Range (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Currency</label>
              <input
                type="text"
                defaultValue="AED"
                placeholder="e.g. SAR, USD"
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Salary range</label>
              <input
                type="text"
                defaultValue="28,000 — 36,000 / month"
                placeholder="e.g. 15,000 - 20,000"
                className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Job Description */}
          <div className="space-y-2">
            <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Job description</label>
            <textarea
              rows={4}
              defaultValue="Own end-to-end design of our flagship banking app..."
              className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl p-4 text-sm focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <label className=" font-bold text-on-surface-muted uppercase tracking-wider">Requirements (one per line)</label>
            <textarea
              rows={4}
              defaultValue={"6+ years product design\nFintech experience\nFluent English; Arabic a plus"}
              className="w-full bg-surface-deep border border-surface focus:border-[#4BC957] text-on-surface placeholder:text-on-surface-subtle rounded-xl p-4 text-sm focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* GCC Flags Switches Group */}
          <div className="border border-surface rounded-xl p-5 space-y-4">
            <h3 className=" font-bold text-on-surface-muted uppercase tracking-wider mb-2">GCC flags</h3>

            {/* Visa */}
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface">Visa sponsorship offered</span>
              <Switch
                checked={visaSp}
                onCheckedChange={setVisaSp}
                className="data-checked:bg-[#4BC957]!"
              />
            </div>

            {/* Emiratization */}
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface">Emiratization (UAE national priority)</span>
              <Switch
                checked={emiratization}
                onCheckedChange={setEmiratization}
                className="data-checked:bg-[#4BC957]!"
              />
            </div>

            {/* Saudization */}
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface">Saudization (Nitaqat-aligned)</span>
              <Switch
                checked={saudization}
                onCheckedChange={setSaudization}
                className="data-checked:bg-[#4BC957]!"
              />
            </div>

            {/* Remote */}
            <div className="flex items-center justify-between">
              <span className=" font-semibold text-on-surface">Open to remote</span>
              <Switch
                checked={remote}
                onCheckedChange={setRemote}
                className="data-checked:bg-[#4BC957]!"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-start gap-3 border-t border-surface pt-6">
            <Link
              href="/company/jobs"
              className="border border-surface hover:bg-surface-item text-on-surface font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors text-center"
            >
              Cancel
            </Link>
            <button className="bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98]">
              Publish & get approved
            </button>
          </div>

        </div>

        {/* Sidebar Info Columns (1/3 width) */}
        <div className="space-y-6">

          {/* What happens next */}
          <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-on-surface flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-[#4BC957]" />
              What happens next
            </h3>
            <ol className="space-y-3.5 text-on-surface-muted list-decimal pl-4 leading-relaxed font-medium">
              <li>AI scans 50,000+ candidate profiles</li>
              <li>Top 10 ranked shortlist within minutes</li>
              <li>Candidates appear anonymised — unlock with credits</li>
              <li>Message directly inside the platform</li>
            </ol>
          </div>

          {/* Cost breakdown */}
          <div className="bg-surface-card border border-surface rounded-2xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-on-surface">Cost</h3>

            <div className="space-y-3.5 font-semibold">
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Job post</span>
                <span className="text-on-surface">5 credits</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Top 10 shortlist</span>
                <span className="text-on-surface">Free</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-muted">
                <span>Per unlock</span>
                <span className="text-on-surface">2 credits</span>
              </div>
            </div>

            <div className="border-t border-surface pt-4 font-bold text-[#4BC957]">
              Balance: 1,240 credits
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
