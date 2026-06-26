"use client";

import React, { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function WalletPage() {
  const [topUpOpen, setTopUpOpen] = useState(false);
  const transactions = [
    { desc: "Top-up • Momentum bundle", method: "Apple Pay", date: "Mar 14", amount: "+150", positive: true },
    { desc: "Auto-apply • Emirates NBD", method: "Credits", date: "Mar 13", amount: "-1", positive: false },
    { desc: "AI cover letter • Careem", method: "Credits", date: "Mar 13", amount: "-2", positive: false },
    { desc: "AI interview • STC Pay", method: "Credits", date: "Mar 12", amount: "-5", positive: false },
    { desc: "Referral reward", method: "Bonus", date: "Mar 10", amount: "+20", positive: true },
    { desc: "Auto-apply • ADNOC", method: "Credits", date: "Mar 09", amount: "-1", positive: false },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Your wallet</h1>
          <p className="text-sm text-slate-400 mt-1">Credits never expire. Use them anywhere on QudraHire.</p>
        </div>
        <Link href="/pricing" className="border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all">
          View all bundles
        </Link>
      </div>

      {/* Wallet Cards Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card (2/3 width) */}
        <div className="lg:col-span-2 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-[#00D07C]">
            <Wallet className="h-4.5 w-4.5" />
            Balance
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-white tracking-tight">1,240</span>
              <span className="text-base text-slate-400 font-semibold">credits</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              ≈ AED 1,860 value • enough for ~1,240 auto-applies or ~248 AI interviews.
            </p>
          </div>

          {/* Core Info Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-[#1E293B]/60 py-4">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Used this month</span>
              <p className="text-lg font-bold text-white mt-1">312</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Saved (Auto)</span>
              <p className="text-lg font-bold text-white mt-1">48 hrs</p>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Member since</span>
              <p className="text-lg font-bold text-white mt-1">Jan 2026</p>
            </div>
          </div>

          <Dialog open={topUpOpen} onOpenChange={setTopUpOpen}>
            <DialogTrigger render={
              <button className="flex items-center justify-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold py-3 px-5 rounded-xl w-32 transition-all duration-200 active:scale-[0.98]">
                <Plus className="h-4 w-4" />
                Top up
              </button>
            } />
            <DialogContent className="bg-[#0F172A] border border-[#1E293B]/60 text-slate-200 p-6 sm:max-w-md rounded-2xl">
              {/* <DialogClose render={<button className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>} /> */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-white">Quick top-up</h2>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#00D07C]" />
                    Secure
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Choose a bundle below to add credits instantly.</p>
                <div className="space-y-3">
                  {[
                    { credits: 50, desc: "Starter", price: "AED 99", active: false },
                    { credits: 150, desc: "Most popular", price: "AED 249", active: true },
                    { credits: 400, desc: "Sprint", price: "AED 499", active: false }
                  ].map((pkg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border flex items-center justify-between transition-all ${pkg.active
                          ? "bg-[#162032] border-[#00D07C]/50 shadow-[0_0_15px_-3px_rgba(0,208,124,0.15)]"
                          : "bg-[#0A0F1D]/60 border-[#1E293B]/60 hover:border-slate-700"
                        }`}
                    >
                      <div>
                        <p className="text-sm font-bold text-white">{pkg.credits} credits</p>
                        <p className="text-[10px] text-slate-500 font-medium mt-0.5">{pkg.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-white">{pkg.price}</span>
                        <button className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                          Buy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Top-up Card (1/3 width) */}
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-white">Quick top-up</span>
            <span className="text-[10px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-[#00D07C]" />
              Secure
            </span>
          </div>

          <div className="space-y-3">
            {[
              { credits: 50, desc: "Starter", price: "AED 99", active: false },
              { credits: 150, desc: "Most popular", price: "AED 249", active: true },
              { credits: 400, desc: "Sprint", price: "AED 499", active: false }
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all ${pkg.active
                    ? "bg-[#162032] border-[#00D07C]/50 shadow-[0_0_15px_-3px_rgba(0,208,124,0.15)]"
                    : "bg-[#0A0F1D]/60 border-[#1E293B]/60 hover:border-slate-700"
                  }`}
              >
                <div>
                  <p className="text-sm font-bold text-white">{pkg.credits} credits</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">{pkg.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-white">{pkg.price}</span>
                  <button className="bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">Recent activity</h2>
          <span className="text-[10px] text-[#00D07C] bg-[#00D07C]/10 border border-[#00D07C]/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
            <Sparkles className="h-3 w-3" />
            Auto-tracked
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400 text-xs font-semibold uppercase tracking-wider bg-[#0A0F1D]/40">
                <th className="py-4 px-6 font-medium text-slate-400">Activity</th>
                <th className="py-4 px-6 font-medium text-slate-400">Method</th>
                <th className="py-4 px-6 font-medium text-slate-400">Date</th>
                <th className="py-4 px-6 font-medium text-slate-400 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/40 text-slate-200 text-sm">
              {transactions.map((t, idx) => (
                <tr key={idx} className="hover:bg-[#162032]/30 transition-colors group">
                  <td className="py-4 px-6 flex items-center gap-3 font-semibold text-white">
                    <div className={`p-1.5 rounded-lg border ${t.positive
                        ? "bg-[#00D07C]/10 border-[#00D07C]/20 text-[#00D07C]"
                        : "bg-slate-800/40 border-slate-700/60 text-slate-400"
                      }`}>
                      {t.positive ? <ArrowDownLeft className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                    </div>
                    {t.desc}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{t.method}</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{t.date}</td>
                  <td className={`py-4 px-6 text-right font-bold ${t.positive ? "text-[#00D07C]" : "text-white"}`}>
                    {t.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
