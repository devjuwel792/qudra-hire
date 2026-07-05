"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find jobs" },
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact us" },
];

interface QudraHeaderProps {
  activePage?: string; // matches a navLink label, e.g. "Pricing" or "Contact us"
}

export default function QudraHeader({ activePage }: QudraHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface header-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="CareerSprint" width={180} height={60} className="block h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-on-surface-muted">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.label === activePage
                  ? "text-on-surface font-semibold"
                  : "hover:text-on-surface transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm text-on-surface-muted border border-surface px-3 py-1.5 rounded-lg hover:border-inner transition-colors">
            <Globe className="h-3.5 w-3.5" />
            English
          </button>
          <Link
            href="/login"
            className="text-sm text-on-surface-muted font-medium hover:text-on-surface transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-4 py-2 rounded-lg transition-all active:scale-[0.97]"
          >
            Get started
          </Link>
          {/* Theme Toggle — desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden text-on-surface-muted hover:text-on-surface transition-colors p-1"
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
        <div className="md:hidden bg-surface-deep border-t border-surface px-4 py-4 flex flex-col gap-4 text-[15px] font-medium text-on-surface-muted">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.label === activePage ? "text-on-surface font-semibold" : "hover:text-on-surface transition-colors"}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {/* Theme Toggle — mobile menu */}
          <div className="flex items-center gap-2 pt-2 border-t border-surface">
            <span className="text-sm text-on-surface-muted">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
