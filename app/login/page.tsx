"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [accountType, setAccountType] = useState<"candidate" | "company">("candidate");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080C14] px-4 py-12">
      <div className="w-full max-w-[400px] bg-[#0F172A]/50 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="flex justify-center mb-8">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-white">Qudra</span>
            <span className="text-[#4BC957]">Hire</span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-slate-400 text-sm mb-6">Log in to continue progressing.</p>

        {/* Account type toggle */}
        <div className="flex bg-[#080C14] border border-white/5 p-1 rounded-2xl mb-6">
          <button
            onClick={() => setAccountType("candidate")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${accountType === "candidate" ? "bg-[#4BC957] text-[#080C14]" : "text-slate-400 hover:text-white"}`}
          >
            Candidate
          </button>
          <button
            onClick={() => setAccountType("company")}
            className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all ${accountType === "company" ? "bg-[#4BC957] text-[#080C14]" : "text-slate-400 hover:text-white"}`}
          >
            Company
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-[#162032] hover:bg-[#1E293B] border border-white/5 text-white text-sm font-medium py-3 rounded-xl transition-colors mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">OR</span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); router.push(accountType === "candidate" ? "/candidate" : "/company"); }}>
          <div>
            <label className="block text-xs font-medium text-white mb-1.5">Email</label>
            <input type="email" placeholder="you@work.com" className="w-full bg-[#080C14] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4BC957]/50 transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-medium text-white mb-1.5">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-[#080C14] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#4BC957]/50 transition-colors" />
          </div>
          <button type="submit" className="w-full bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl transition-all mt-2">
            Log in
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            No account? <Link href="/signup" className="text-[#4BC957] font-semibold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
