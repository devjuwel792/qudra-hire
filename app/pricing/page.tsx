"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";

// ─── Data ────────────────────────────────────────────────────────────────────

const candidatePlans = [
  {
    id: "candidate-starter",
    name: "Starter",
    price: "AED 99",
    credits: "50 credits",
    creditValue: "~AED 2.00 / credit",
    cta: "Buy Starter",
    popular: false,
    features: [
      // "50 application credits",
      // "AI job matching",
      // "Basic profile visibility",
      // "Email support",
    ],
  },
  {
    id: "candidate-momentum",
    name: "Momentum",
    price: "AED 249",
    credits: "150 credits",
    creditValue: "~AED 1.66 / credit",
    cta: "Buy Momentum",
    popular: true,
    features: [
      // "150 application credits",
      // "Priority AI matching",
      // "Auto-apply mode (8/day)",
      // "CV strength analysis",
      // "WhatsApp support",
    ],
  },
  {
    id: "candidate-sprint",
    name: "Sprint",
    price: "AED 499",
    credits: "400 credits",
    creditValue: "~AED 1.25 / credit",
    cta: "Buy Sprint",
    popular: false,
    features: [
      // "400 application credits",
      // "Priority AI matching",
      // "Auto-apply mode (unlimited)",
      // "CV strength + interview prep",
      // "Dedicated account manager",
    ],
  },
];

const companyPlans = [
  {
    id: "company-starter",
    name: "Starter",
    price: "AED 199",
    credits: "50 credits",
    creditValue: "~AED 3.98 / credit",
    cta: "Buy Starter",
    popular: false,
    features: [
      // "50 candidate credits",
      // "AI candidate matching",
      // "Basic job postings",
      // "Email support",
    ],
  },
  {
    id: "company-growth",
    name: "Growth",
    price: "AED 499",
    credits: "150 credits",
    creditValue: "~AED 3.33 / credit",
    cta: "Buy Growth",
    popular: true,
    features: [
      // "150 candidate credits",
      // "Priority AI shortlisting",
      // "AI interview invites",
      // "ATS integration",
      // "WhatsApp support",
    ],
  },
  {
    id: "company-sprint",
    name: "Sprint",
    price: "AED 999",
    credits: "400 credits",
    creditValue: "~AED 2.50 / credit",
    cta: "Buy Sprint",
    popular: false,
    features: [
      // "400 candidate credits",
      // "Priority AI shortlisting",
      // "Unlimited AI interviews",
      // "Advanced analytics",
      // "Dedicated account manager",
    ],
  },
];

// ─── Pricing Card ─────────────────────────────────────────────────────────────

interface Plan {
  id: string;
  name: string;
  price: string;
  credits: string;
  creditValue: string;
  cta: string;
  popular: boolean;
  features: string[];
}

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
        plan.popular
          ? "bg-[#0F1F14] border-2 border-[#00D07C]/60 shadow-2xl shadow-[#00D07C]/10 scale-[1.02]"
          : "bg-[#0F172A] border border-white/6 hover:border-white/12"
      }`}
    >
      {/* Most popular badge */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#00D07C] text-[#080C14] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Most popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-lg font-bold text-white mb-4">{plan.name}</h3>

      {/* Price */}
      <div className="mb-1">
        <span className="text-3xl font-extrabold text-white tracking-tight">
          {plan.price}
        </span>
      </div>

      {/* Credits */}
      <p className="text-[#00D07C] font-semibold text-sm mb-1">{plan.credits}</p>
      <p className="text-slate-600 text-xs mb-6">{plan.creditValue}</p>

      {/* CTA */}
      <button
        id={plan.id}
        className={`w-full h-11 rounded-xl font-bold text-sm transition-all active:scale-[0.98] mb-6 ${
          plan.popular
            ? "bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] shadow-lg shadow-[#00D07C]/20"
            : "bg-[#1E293B] hover:bg-[#2A3C58] text-white border border-white/8"
        }`}
      >
        {plan.cta}
      </button>

      {/* Divider */}
      <div className="border-t border-white/6 mb-5" />

      {/* Features */}
      <ul className="space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
            <span
              className={`mt-0.5 flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${
                plan.popular
                  ? "bg-[#00D07C]/15 text-[#00D07C]"
                  : "bg-slate-700/50 text-slate-400"
              }`}
            >
              <Check className="h-2.5 w-2.5" />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [tab, setTab] = useState<"candidates" | "companies">("companies");

  const plans = tab === "candidates" ? candidatePlans : companyPlans;

  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <QudraHeader activePage="Pricing" />

      {/* ── Hero ── */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden">
        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="w-[700px] h-[320px] bg-[#00D07C]/5 rounded-full blur-[130px] mt-8" />
        </div>

        {/* Grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Credit bundles that reward{" "}
            <span className="text-[#00D07C]">momentum.</span>
          </h1>
          <p className="mt-5 text-[16px] sm:text-lg text-slate-400 leading-relaxed">
            Pay-as-you-go in AED. No subscriptions. Credits never expire.
          </p>

          {/* Tab Toggle */}
          <div className="mt-10 inline-flex items-center bg-[#0F172A] border border-white/8 rounded-xl p-1 gap-1">
            <button
              id="tab-candidates"
              onClick={() => setTab("candidates")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === "candidates"
                  ? "bg-[#00D07C] text-[#080C14] shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              For Candidates
            </button>
            <button
              id="tab-companies"
              onClick={() => setTab("companies")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === "companies"
                  ? "bg-[#00D07C] text-[#080C14] shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              For Companies
            </button>
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-xs text-slate-100 mt-10">
          All prices in AED (United Arab Emirates Dirham). Credits are non-refundable and never expire.{" "}
          <Link href="/contact" className="text-green-500 hover:text-[#00D07C] transition-colors underline underline-offset-2">
            Contact us
          </Link>{" "}
          for enterprise or volume pricing.
        </p>
      </section>

      {/* ── FAQ strip ── */}
      <section className="border-t border-white/5 bg-[#0A0F1D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              q: "Do credits expire?",
              a: "No. Once purchased, credits are yours to use at your own pace — no monthly reset.",
            },
            {
              q: "Can I top up anytime?",
              a: "Yes. Buy any bundle whenever you need more credits. There is no subscription commitment.",
            },
            {
              q: "What currency?",
              a: "All prices are in AED (UAE Dirham). Payments processed securely via Stripe.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="space-y-2">
              <h3 className="text-sm font-bold text-white">{q}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <QudraFooter />
    </div>
  );
}
