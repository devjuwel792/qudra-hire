"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Eye, MapPin, Users, Lightbulb, Zap, Heart, ArrowRight } from "lucide-react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <QudraHeader activePage="About us" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden">
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

        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            We believe hiring should
            <br />
            <span className="text-[#00D07C]">feel effortless.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            QudraHire was born from frustration with slow processes, mismatched candidates,
            and opaque recruitment. We set out to build the GCC's most trusted AI hiring
            platform.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-6">
              <Rocket className="h-5 w-5 text-[#00D07C]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To simplify, accelerate, and modernize recruitment across the GCC through intelligent automation and AI-driven decision-making. Every candidate deserves a fair shot. Every company deserves clarity.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-6">
              <Eye className="h-5 w-5 text-[#00D07C]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              Become the definitive hiring layer for the Middle East where AI, local compliance, and human potential converge. By 2028, we aim to power 1 million career moves annually.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-[#0A0F1D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-[#00D07C] mb-2">800+</h4>
            <p className="text-sm font-medium text-slate-400">Companies</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-[#00D07C] mb-2">150K+</h4>
            <p className="text-sm font-medium text-slate-400">Candidates</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-[#00D07C] mb-2">12K+</h4>
            <p className="text-sm font-medium text-slate-400">Active roles</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl font-extrabold text-[#00D07C] mb-2">94%</h4>
            <p className="text-sm font-medium text-slate-400">Match accuracy</p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Meet the founders</h2>
        <p className="text-slate-400 mb-12">Builders, believers, and GCC natives.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Founder 1 */}
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4">
              <span className="text-[#00D07C] font-bold text-xl">KR</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Khalid Al-Rashid</h3>
            <p className="text-[#00D07C] text-sm font-semibold mb-4">Co-Founder & CEO</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Former Head of Talent at Emirates NBD. Khalid spent 12 years watching great candidates get lost in broken ATS systems. He built QudraHire to fix that.
            </p>
            <div className="mt-auto flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Dubai, UAE</span>
              <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors"> LinkedIn</a>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4">
              <span className="text-[#00D07C] font-bold text-xl">NF</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Dr. Noor Al-Farsi</h3>
            <p className="text-[#00D07C] text-sm font-semibold mb-4">Co-Founder & CTO</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Former Head of Talent at Emirates NBD. Khalid spent 12 years watching great candidates get lost in broken ATS systems. He built QudraHire to fix that.
            </p>
            <div className="mt-auto flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Riyadh, KSA</span>
              <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Founder 3 */}
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4">
              <span className="text-[#00D07C] font-bold text-xl">YH</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Yasmin Haddad</h3>
            <p className="text-[#00D07C] text-sm font-semibold mb-4">Co-Founder & Head of Growth</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Former Head of Talent at Emirates NBD. Khalid spent 12 years watching great candidates get lost in broken ATS systems. He built QudraHire to fix that.
            </p>
            <div className="mt-auto flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Abu Dhabi, UAE</span>
              <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors"> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-12">What we stand for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 text-center">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-4 w-4 text-[#00D07C]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">People first</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Technology should amplify human potential, not replace it.</p>
          </div>
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 text-center">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-4 w-4 text-[#00D07C]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Transparency</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Explainable AI scores. No black boxes. No hidden fees.</p>
          </div>
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 text-center">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-4 w-4 text-[#00D07C]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Momentum</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Speed matters. We optimize for action and outcomes.</p>
          </div>
          <div className="bg-[#0F172A] border border-white/5 rounded-2xl p-6 text-center">
            <div className="h-10 w-10 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-4 w-4 text-[#00D07C]" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Local by default</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Built for GCC compliance, culture, and career norms.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 w-full">
        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#00D07C]/5">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] bg-[#00D07C]/10 rounded-full blur-[100px]" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Join the movement.
          </h2>
          <p className="relative text-slate-400 mb-8 max-w-lg mx-auto">
            Whether you are hiring or searching, QudraHire is built to move you forward.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-8 py-3 rounded-xl transition-all active:scale-[0.98]">
              Get started
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2">
              Contact page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <QudraFooter />
    </div>
  );
}
