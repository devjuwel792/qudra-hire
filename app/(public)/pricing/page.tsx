"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Animate } from "@/components/ui/animate";

const candidatePlans = [
  { id: "candidate-starter", name: "Starter", price: "AED 99", credits: "50 credits", creditValue: "~AED 2.00 / credit", cta: "Buy Starter", popular: false, features: [] },
  { id: "candidate-momentum", name: "Momentum", price: "AED 249", credits: "150 credits", creditValue: "~AED 1.66 / credit", cta: "Buy Momentum", popular: true, features: [] },
  { id: "candidate-sprint", name: "Sprint", price: "AED 499", credits: "400 credits", creditValue: "~AED 1.25 / credit", cta: "Buy Sprint", popular: false, features: [] },
];

const companyPlans = [
  { id: "company-starter", name: "Starter", price: "AED 199", credits: "50 credits", creditValue: "~AED 3.98 / credit", cta: "Buy Starter", popular: false, features: [] },
  { id: "company-growth", name: "Growth", price: "AED 499", credits: "150 credits", creditValue: "~AED 3.33 / credit", cta: "Buy Growth", popular: true, features: [] },
  { id: "company-sprint", name: "Sprint", price: "AED 999", credits: "400 credits", creditValue: "~AED 2.50 / credit", cta: "Buy Sprint", popular: false, features: [] },
];

interface Plan { id: string; name: string; price: string; credits: string; creditValue: string; cta: string; popular: boolean; features: string[]; }

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
      plan.popular
        ? "bg-[#0F1F14] border-2 border-[#4BC957]/60 shadow-2xl shadow-[#4BC957]/10 scale-[1.02]"
        : "bg-[#0F172A] border border-white/6 hover:border-white/12"
    }`}>
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#4BC957] text-[#080C14] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Most popular</span>
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-4">{plan.name}</h3>
      <div className="mb-1">
        <span className="text-3xl font-extrabold text-white tracking-tight">{plan.price}</span>
      </div>
      <p className="text-[#4BC957] font-semibold text-sm mb-1">{plan.credits}</p>
      <p className="text-slate-600 text-xs mb-6">{plan.creditValue}</p>
      <button id={plan.id} className={`w-full h-11 rounded-xl font-bold text-sm transition-all active:scale-[0.98] mb-6 ${
        plan.popular
          ? "bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] shadow-lg shadow-[#4BC957]/20"
          : "bg-[#1E293B] hover:bg-[#2A3C58] text-white border border-white/8"
      }`}>{plan.cta}</button>
      <div className="border-t border-white/6 mb-5" />
      <ul className="space-y-2.5 flex-1">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
            <span className={`mt-0.5 flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-[#4BC957]/15 text-[#4BC957]" : "bg-slate-700/50 text-slate-400"}`}>
              <Check className="h-2.5 w-2.5" />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

const cardDelays = ["anim-delay-100", "", "anim-delay-200"];

export default function PricingPage() {
  const [tab, setTab] = useState<"candidates" | "companies">("companies");
  const plans = tab === "candidates" ? candidatePlans : companyPlans;

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="w-[700px] h-[320px] bg-[#4BC957]/5 rounded-full blur-[130px] mt-8" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight
            animate-[fadeInUp_0.7s_ease_forwards]">
            Credit bundles that reward{" "}
            <span className="text-[#4BC957]">momentum.</span>
          </h1>
          <p className="mt-5 text-[16px] sm:text-lg text-slate-400 leading-relaxed
            animate-[fadeInUp_0.7s_0.2s_ease_forwards] opacity-0">
            Pay-as-you-go in AED. No subscriptions. Credits never expire.
          </p>
          <div className="mt-10 inline-flex items-center bg-[#0F172A] border border-white/8 rounded-xl p-1 gap-1
            animate-[fadeInUp_0.7s_0.35s_ease_forwards] opacity-0">
            {(["candidates", "companies"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  tab === t ? "bg-[#4BC957] text-[#080C14] shadow-md" : "text-slate-400 hover:text-white"
                }`}>
                For {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <Animate key={plan.id} className="animate-on-scroll" delay={cardDelays[i]}>
              <PricingCard plan={plan} />
            </Animate>
          ))}
        </div>
        <Animate className="animate-on-scroll" delay="anim-delay-300">
          <p className="text-center text-xs text-slate-100 mt-10">
            All prices in AED (United Arab Emirates Dirham). Credits are non-refundable and never expire.{" "}
            <Link href="/contact" className="text-green-500 hover:text-[#4BC957] transition-colors underline underline-offset-2">Contact us</Link>{" "}
            for enterprise or volume pricing.
          </p>
        </Animate>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-[#0A0F1D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { q: "Do credits expire?", a: "No. Once purchased, credits are yours to use at your own pace — no monthly reset." },
            { q: "Can I top up anytime?", a: "Yes. Buy any bundle whenever you need more credits. There is no subscription commitment." },
            { q: "What currency?", a: "All prices are in AED (UAE Dirham). Payments processed securely via Stripe." },
          ].map(({ q, a }, i) => (
            <Animate key={q} className="animate-on-scroll" delay={["", "anim-delay-100", "anim-delay-200"][i]}>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white">{q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>
    </div>
  );
}

