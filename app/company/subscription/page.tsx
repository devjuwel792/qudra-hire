"use client";

import React, { useState } from "react";
import { Check, Star, Zap, ShieldCheck, Building2, Users, Briefcase, BarChart3 } from "lucide-react";

// ─── Plan Data ───────────────────────────────────────
const freePlan = {
  tier: "STARTER",
  name: "Free",
  tagline: "Everything you need to get started.",
  monthlyPrice: 0,
  yearlyPrice: 0,
  features: [
    "Post up to 3 active jobs",
    "Basic candidate search",
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
  features: [
    "Everything in Free",
    "Unlimited job postings",
    "AI candidate matching & ranking",
    "Auto-shortlist top candidates",
    "Resume screening & ATS score",
    "AI interview invites",
    "Direct messaging inbox",
    "Priority support",
  ],
};

const billingHistory = [
  { id: "INV-0043", name: "Premium — Monthly", date: "Mar 14, 2026", method: "Apple Pay", status: "Paid", amount: "AED 79" },
  { id: "INV-0042", name: "Premium — Monthly", date: "Feb 14, 2026", method: "Visa •• 4421", status: "Paid", amount: "AED 79" },
  { id: "INV-0041", name: "Premium — Monthly", date: "Jan 14, 2026", method: "Visa •• 4421", status: "Paid", amount: "AED 79" },
];

const usageStats = [
  { label: "Active Job Posts", value: "8", icon: Briefcase },
  { label: "Active Subscriptions", value: "1", icon: Star },
  { label: "Candidates Shortlisted", value: "24", icon: Users },
  { label: "AI Matches This Month", value: "142", icon: BarChart3 },
];

export default function CompanySubscriptionPage() {
  const [yearly, setYearly] = useState(true);
  const premiumPrice = yearly ? premiumPlan.yearlyPrice : premiumPlan.monthlyPrice;

  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="max-w-full mx-2 sm:mx-auto px-6 py-8 space-y-8">

        {/* Header */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Your Plan</p>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Subscription</h1>
          <p className="text-muted-foreground mt-1">Unlock your AI Recruiter. Cancel anytime.</p>
        </div>

        {/* Current Plan Banner */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-5 mb-6">
            <div className="h-12 w-12 rounded-xl bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6 text-[#4BC957]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Current Plan</p>
              <h2 className="text-2xl font-extrabold text-foreground mt-0.5">Premium</h2>
              <p className="text-xs text-muted-foreground mt-1">Renews Apr 14, 2026 • AED 79 / month</p>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {usageStats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-background border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-3.5 w-3.5 text-[#4BC957]" />
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
                </div>
                <p className="text-2xl font-extrabold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Toggle + Cards */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-extrabold text-foreground">Choose your plan</h2>
            <div className="flex items-center gap-1 bg-muted border border-border rounded-full p-1">
              <button
                onClick={() => setYearly(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  !yearly ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  yearly ? "bg-[#4BC957] text-white shadow-sm" : "text-muted-foreground"
                }`}
              >
                Yearly, Save 16%
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Card */}
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{freePlan.tier}</span>
              </div>
              <h3 className="text-3xl font-extrabold text-foreground mb-1">{freePlan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{freePlan.tagline}</p>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-4xl font-extrabold text-foreground">AED 0</span>
                <span className="text-sm text-muted-foreground ml-1">forever</span>
              </div>
              <button className="w-full py-2.5 rounded-xl border border-border bg-background hover:bg-muted text-foreground text-sm font-bold transition-all mb-6">
                Get started free
              </button>
              <div className="border-t border-border pt-5 space-y-3 flex-1">
                {freePlan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#4BC957] shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Card */}
            <div className="relative bg-green-50 dark:bg-[#0f1f14] border-2 border-[#4BC957]/50 rounded-2xl p-6 flex flex-col h-full shadow-xl shadow-[#4BC957]/10">
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
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">AED {premiumPrice}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">/ month</span>
                {yearly && (
                  <span className="ml-2 text-[11px] font-bold bg-[#4BC957]/20 text-[#4BC957] px-2 py-0.5 rounded-full">Billed yearly</span>
                )}
              </div>
              <button className="w-full py-2.5 rounded-xl bg-[#4BC957] hover:bg-[#3DAF49] text-white text-sm font-bold transition-all mb-6 shadow-md shadow-[#4BC957]/30">
                Active
              </button>
              <div className="border-t border-green-200 dark:border-white/10 pt-5 space-y-3 flex-1">
                {premiumPlan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#4BC957] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h2 className="text-xl font-extrabold text-foreground mb-4">Billing history</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-semibold text-muted-foreground px-6 py-4 uppercase tracking-wider">Invoice</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-6 py-4 uppercase tracking-wider">Date</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-6 py-4 uppercase tracking-wider">Method</th>
                  <th className="text-left text-xs font-semibold text-muted-foreground px-6 py-4 uppercase tracking-wider">Status</th>
                  <th className="text-right text-xs font-semibold text-muted-foreground px-6 py-4 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((row, i) => (
                  <tr key={row.id} className={i < billingHistory.length - 1 ? "border-b border-border" : ""}>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.date}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{row.method}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#4BC957]/10 text-[#4BC957] px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4BC957]" />
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-foreground text-right">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Note */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground border border-border rounded-xl px-5 py-4 bg-card">
          <ShieldCheck className="h-4 w-4 text-[#4BC957] shrink-0" />
          <span>Payments are secured by Stripe. Your billing details are never stored on our servers.</span>
        </div>
      </div>
    </div>
  );
}
