"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Zap, Star, ShieldCheck, Lock } from "lucide-react";

// ─── Static data ──────────────────────────────────────────────────────────────

const stats = [
  { label: "CAREER PROFILES", value: 3, icon: <ShieldCheck className="w-4 h-4 text-[#4BC957]" /> },
  { label: "ACTIVE SUBSCRIPTIONS", value: 1, icon: <ShieldCheck className="w-4 h-4 text-[#4BC957]" /> },
  { label: "INACTIVE DESIGNATIONS", value: 2, icon: <Lock className="w-4 h-4 text-slate-400" /> },
];

const careerProfiles = [
  {
    id: 1,
    title: "Senior Product Designer",
    subtitle: "Fintech • Mobile-first",
    plan: "Premium • AED 79 /mo",
    status: "active",
    startedLabel: "Started • Today",
    renewsLabel: "Renews • In 30 days",
    autoApply: true,
  },
  {
    id: 2,
    title: "UX Research Lead",
    subtitle: "Consumer & B2B research",
    plan: null,
    status: "inactive",
    message: "Activate Premium to unlock auto-apply, AI resume tailoring and priority matching for every UX Research Lead role.",
  },
  {
    id: 3,
    title: "New career path",
    subtitle: "Add focus in profile",
    plan: null,
    status: "inactive",
    message: "Activate Premium to unlock auto-apply, AI resume tailoring and priority matching for every New career path role.",
  },
];

const billingHistory = [
  { invoice: "Premium — Monthly", date: "Mar 14, 2026", method: "Apple Pay", status: "Paid", amount: "AED 79" },
  { invoice: "Premium — Monthly", date: "Feb 14, 2026", method: "Visa •• 4421", status: "Paid", amount: "AED 79" },
  { invoice: "Premium — Monthly", date: "Jan 14, 2026", method: "Visa •• 4421", status: "Paid", amount: "AED 79" },
];

const freePlan = {
  tier: "STARTER",
  name: "Free",
  tagline: "Everything you need to start your search.",
  price: 0,
  priceLabel: "forever",
  cta: "Get started free",
  active: false,
  features: [
    "Browse jobs",
    "Basic AI job matching",
    "Application tracking",
    "Standard support",
  ],
};

const premiumPlan = {
  tier: "RECOMMENDED",
  name: "Premium",
  tagline: "Your always-on AI Recruiter.",
  monthlyPrice: 79,
  yearlyPrice: 66,
  priceLabel: "/ month",
  cta: "Active",
  active: true,
  features: [
    "Everything in Free",
    "Auto Apply AI submits tailored applications daily",
    "AI Resume Tailoring per job",
    "AI Resume Improvement & ATS score",
    "Priority AI matching & shortlisting",
    "AI interview prep & practice",
    "Direct messaging inbox",
    "Priority support",
  ],
};

export default function CandidateSubscriptionPage() {
  const [yearly, setYearly] = useState(false);
  const premiumPrice = yearly ? premiumPlan.yearlyPrice : premiumPlan.monthlyPrice;

  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="max-w-full mx-2 sm:mx-auto px-12 py-8 space-y-8">

        {/* Header */}
        <div>
          <p className="text-xs text-muted-foreground mb-1">Your Plan</p>
          <h1 className="text-3xl font-bold text-foreground">Subscription</h1>
          <p className="text-sm text-muted-foreground mt-1">Unlock your AI Recruiter. Cancel anytime.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-muted/40 border border-border rounded-xl px-5 py-4">
              <div className="flex items-center gap-2 mb-2">
                {s.icon}
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{s.label}</span>
              </div>
              <p className="text-4xl font-extrabold text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Career Profiles */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">Your career profiles</h2>
          <div className="space-y-3">
            {careerProfiles.map((p) => (
              <div key={p.id} className="bg-muted/30 border border-border rounded-xl px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${p.status === "active" ? "bg-[#4BC957]/15" : "bg-muted"}`}>
                      {p.status === "active"
                        ? <Check className="w-4 h-4 text-[#4BC957]" />
                        : <Lock className="w-3.5 h-3.5 text-muted-foreground" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-sm leading-tight">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {p.status === "inactive" && (
                      <span className="text-[11px] text-muted-foreground border border-border rounded px-2 py-0.5 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Inactive
                      </span>
                    )}
                    {p.plan && (
                      <span className="text-[11px] font-semibold bg-[#4BC957]/15 text-[#4BC957] border border-[#4BC957]/30 rounded px-2 py-0.5">
                        ✓ {p.plan}
                      </span>
                    )}
                    {p.status === "active" ? (
                      <button className="text-xs font-bold bg-[#4BC957] hover:bg-[#3DAF49] text-white px-4 py-1.5 rounded-lg transition-colors">
                        Selected
                      </button>
                    ) : (
                      <button className="text-xs font-bold border border-border text-foreground hover:bg-muted px-4 py-1.5 rounded-lg transition-colors">
                        Manage
                      </button>
                    )}
                  </div>
                </div>
                {p.status === "active" && (
                  <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-[12px] text-muted-foreground">
                    <span>{p.startedLabel}</span>
                    <span>{p.renewsLabel}</span>
                    <span className="font-semibold">Auto Apply • On</span>
                  </div>
                )}
                {p.message && (
                  <p className="mt-2 text-[12px] text-muted-foreground leading-relaxed">{p.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Choose your plan */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">Choose your plan</h2>
            <div className="inline-flex items-center bg-muted border border-border rounded-xl p-1 gap-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${!yearly ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${yearly ? "bg-[#4BC957] text-white shadow" : "text-muted-foreground hover:text-foreground"}`}
              >
                Yearly, Save 16%
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {/* Free card */}
            <div className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{freePlan.tier}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-foreground mb-1">{freePlan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{freePlan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-extrabold text-foreground">AED 0</span>
                <span className="text-sm text-muted-foreground">forever</span>
              </div>
              <button className="w-full h-11 rounded-xl font-bold text-sm border border-border text-foreground hover:bg-muted transition-all mb-5">
                {freePlan.cta}
              </button>
              <div className="border-t border-border mb-4" />
              <ul className="space-y-2.5 flex-1">
                {freePlan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="h-4 w-4 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-muted-foreground" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium card */}
            <div className="relative bg-green-50 dark:bg-[#0f1f14]  border-2 border-[#4BC957]/50 rounded-2xl p-6 flex flex-col h-full shadow-xl shadow-[#4BC957]/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#4BC957] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#4BC957]" />
                <span className="text-[10px] font-bold tracking-widest text-[#4BC957] uppercase">{premiumPlan.tier}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{premiumPlan.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{premiumPlan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">AED {premiumPrice}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{premiumPlan.priceLabel}</span>
              </div>
              <button className="w-full h-11 rounded-xl font-bold text-sm bg-[#4BC957] hover:bg-[#3DAF49] text-white shadow-lg shadow-[#4BC957]/20 transition-all mb-5">
                {premiumPlan.active ? "Active" : "Upgrade to Premium"}
              </button>
              <div className="border-t border-green-200 dark:border-white/10 mb-4" />
              <ul className="space-y-2.5 flex-1">
                {premiumPlan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="h-4 w-4 rounded-full bg-[#4BC957]/15 flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-[#4BC957]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">Billing history</h2>
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  <th className="px-5 py-3 text-left">Invoice</th>
                  <th className="px-5 py-3 text-left">Date</th>
                  <th className="px-5 py-3 text-left">Method</th>
                  <th className="px-5 py-3 text-left">Status</th>
                  <th className="px-5 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 text-foreground font-medium">{row.invoice}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.date}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.method}</td>
                    <td className="px-5 py-3.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#4BC957]/15 text-[#4BC957]">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right font-semibold text-foreground">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
