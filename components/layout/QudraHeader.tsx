"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find jobs" },
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact us", active: true },
];

export default function QudraHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#080C14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-extrabold text-white tracking-tight">
            Qudra<span className="text-[#00D07C]">Hire</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-slate-400">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.active
                  ? "text-white font-semibold"
                  : "hover:text-white transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg hover:border-white/20 transition-colors">
            <Globe className="h-3.5 w-3.5" />
            English
          </button>
          <Link
            href="/login"
            className="text-sm text-slate-300 font-medium hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2 rounded-lg transition-all active:scale-[0.97]"
          >
            Get started
          </Link>
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0F1D] border-t border-white/5 px-4 py-4 flex flex-col gap-4 text-[15px] font-medium text-slate-300">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.active ? "text-white font-semibold" : "hover:text-white transition-colors"}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
