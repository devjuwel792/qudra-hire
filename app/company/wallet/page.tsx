"use client";

import React from "react";
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw, Plus, CreditCard } from "lucide-react";

export default function WalletPage() {
  const transactions = [
    { type: "Purchase", desc: "Added 1,000 Credits", amount: "+1,000", date: "Jun 24, 2026", status: "Completed", positive: true },
    { type: "Usage", desc: "Unlocked Candidate Profile (Omar Haddad)", amount: "-10", date: "Jun 23, 2026", status: "Completed", positive: false },
    { type: "Usage", desc: "Posted Job: Senior Product Designer", amount: "-50", date: "Jun 22, 2026", status: "Completed", positive: false },
    { type: "Purchase", desc: "Added 500 Credits", amount: "+500", date: "Jun 18, 2026", status: "Completed", positive: true },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Hiring Workspace</h1>
          <p className="text-3xl font-extrabold text-white mt-1 tracking-tight">Wallet & Credits</p>
        </div>
        <button className="flex items-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#00D07C]/10 active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          Buy Credits
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Credits Balance Card */}
        <div className="md:col-span-1 bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#2E3C51]/60 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[180px]">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10">
            <Wallet className="h-40 w-40 text-white" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Available Credits</span>
            <p className="text-4xl font-extrabold text-white mt-1.5">1,240</p>
          </div>
          <div className="flex gap-2.5 mt-6">
            <button className="flex-1 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Top Up
            </button>
            <button className="flex-1 bg-[#162032] hover:bg-[#162032]/80 border border-[#2A3C58]/60 text-slate-300 text-xs font-bold py-2.5 px-3 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5" /> Manage Cards
            </button>
          </div>
        </div>

        {/* Info card 1 */}
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Usage This Month</span>
            <p className="text-3xl font-extrabold text-white mt-1.5">260 Credits</p>
            <p className="text-xs text-slate-500 mt-1">Across 4 job postings & 6 profile unlocks</p>
          </div>
          <div className="text-xs text-[#00D07C] font-semibold flex items-center gap-1 mt-4">
            <RefreshCw className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} /> Renews on July 1st, 2026
          </div>
        </div>

        {/* Info card 2 */}
        <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Payment Method</span>
            <p className="text-lg font-bold text-white mt-1.5">Visa ending in 8839</p>
            <p className="text-xs text-slate-500 mt-1">Primary corporate account method</p>
          </div>
          <button className="text-xs font-semibold text-slate-400 hover:text-white mt-4 text-left self-start">
            View Billing Details
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-white">Transaction History</h2>
          <p className="text-xs text-slate-500 mt-0.5">Recent account charges and credits</p>
        </div>

        <div className="divide-y divide-[#1E293B]/60">
          {transactions.map((t, idx) => (
            <div key={idx} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${t.positive ? "bg-[#00D07C]/10 text-[#00D07C]" : "bg-slate-800 text-slate-400"}`}>
                  {t.positive ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">{t.desc}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{t.date} • {t.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${t.positive ? "text-[#00D07C]" : "text-white"}`}>
                  {t.amount}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">{t.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
