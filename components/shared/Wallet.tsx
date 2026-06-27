"use client";

import React, { useState } from "react";
import {
  Wallet as WalletIcon,
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

interface Bundle {
  credits: number;
  desc: string;
  price: string;
  active: boolean;
}

interface Transaction {
  desc: string;
  method: string;
  date: string;
  amount: string;
  positive: boolean;
}

interface InfoRow {
  label: string;
  value: string;
}

interface WalletProps {
  title?: string;
  subtitle: string;
  balance: string;
  balanceLabel?: string;
  balanceValue: string;
  infoRows: InfoRow[];
  bundles: Bundle[];
  activityTitle: string;
  transactions: Transaction[];
  bundlesLink?: React.ReactNode;
}

export default function Wallet({
  title = "Your wallet",
  subtitle,
  balance,
  balanceLabel = "credits",
  balanceValue,
  infoRows,
  bundles,
  activityTitle,
  transactions,
  bundlesLink,
}: WalletProps) {
  const [topUpOpen, setTopUpOpen] = useState(false);

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">{title}</h1>
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
        </div>
        {bundlesLink ?? (
          <button className="border border-slate-700/80 hover:bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all">
            View all bundles
          </button>
        )}
      </div>

      {/* Wallet Cards Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Balance Card (2/3 width) */}
        <div className="lg:col-span-2 bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-6 flex flex-col justify-between space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold text-[#4BC957]">
            <WalletIcon className="h-4.5 w-4.5" />
            Balance
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-white tracking-tight">{balance}</span>
              <span className="text-base text-slate-400 font-semibold">{balanceLabel}</span>
            </div>
            <p className=" text-slate-500 font-medium">{balanceValue}</p>
          </div>

          {/* Core Info Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-[#1E293B]/60 py-4">
            {infoRows.map((row, idx) => (
              <div key={idx}>
                <span className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">{row.label}</span>
                <p className="text-lg font-bold text-white mt-1">{row.value}</p>
              </div>
            ))}
          </div>

          <Dialog open={topUpOpen} onOpenChange={setTopUpOpen}>
            <DialogTrigger
              render={
                <button className="flex items-center justify-center gap-2 bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold py-3 px-5 rounded-xl w-32 transition-all duration-200 active:scale-[0.98]">
                  <Plus className="h-4 w-4" />
                  Top up
                </button>
              }
            />
            <DialogContent className="bg-[#0F172A] border border-[#1E293B]/60 text-slate-200 p-6 sm:max-w-md rounded-2xl">

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold text-white">Quick top-up</h2>
                  <span className="text-[13px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-wider">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#4BC957]" />
                    Secure
                  </span>
                </div>
                <p className=" text-slate-500 font-medium">
                  Choose a bundle below to add credits instantly.
                </p>
                <div className="space-y-3">
                  {bundles.map((pkg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border flex items-center justify-between transition-all ${pkg.active
                        ? "bg-[#162032] border-[#4BC957]/50 shadow-[0_0_15px_-3px_rgba(0,208,124,0.15)]"
                        : "bg-[#0A0F1D]/60 border-[#1E293B]/60 hover:border-slate-700"
                        }`}
                    >
                      <div>
                        <p className="text-sm font-bold text-white">{pkg.credits} credits</p>
                        <p className="text-[13px] text-slate-500 font-medium mt-0.5">{pkg.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className=" font-bold text-white">{pkg.price}</span>
                        <button className="bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14]  font-bold px-3 py-1.5 rounded-lg transition-colors">
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
            <span className="text-[13px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-[#4BC957]" />
              Secure
            </span>
          </div>

          <div className="space-y-3">
            {bundles.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all ${pkg.active
                  ? "bg-[#162032] border-[#4BC957]/50 shadow-[0_0_15px_-3px_rgba(0,208,124,0.15)]"
                  : "bg-[#0A0F1D]/60 border-[#1E293B]/60 hover:border-slate-700"
                  }`}
              >
                <div>
                  <p className="text-sm font-bold text-white">{pkg.credits} credits</p>
                  <p className="text-[13px] text-slate-500 font-medium mt-0.5">{pkg.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className=" font-bold text-white">{pkg.price}</span>
                  <button className="bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14]  font-bold px-3 py-1.5 rounded-lg transition-colors">
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
          <h2 className="text-lg font-bold text-white">{activityTitle}</h2>
          <span className="text-[13px] text-[#4BC957] bg-[#4BC957]/10 border border-[#4BC957]/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-semibold">
            <Sparkles className="h-3 w-3" />
            Auto-tracked
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400  font-semibold uppercase tracking-wider bg-[#0A0F1D]/40">
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
                    <div
                      className={`p-1.5 rounded-lg border ${t.positive
                        ? "bg-[#4BC957]/10 border-[#4BC957]/20 text-[#4BC957]"
                        : "bg-slate-800/40 border-slate-700/60 text-slate-400"
                        }`}
                    >
                      {t.positive ? (
                        <ArrowDownLeft className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      )}
                    </div>
                    {t.desc}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{t.method}</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{t.date}</td>
                  <td
                    className={`py-4 px-6 text-right font-bold ${t.positive ? "text-[#4BC957]" : "text-white"}`}
                  >
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
