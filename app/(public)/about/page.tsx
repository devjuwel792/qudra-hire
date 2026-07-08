"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Eye, MapPin, Users, Lightbulb, Zap, Heart, ArrowRight } from "lucide-react";
import { Animate } from "@/components/ui/animate";

const delays = ["", "anim-delay-100", "anim-delay-200", "anim-delay-300"];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">

      {/* Hero */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="w-[700px] h-[320px] bg-[#4BC957]/5 rounded-full blur-[130px] mt-8" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(var(--foreground) 1px,transparent 1px),linear-gradient(90deg,var(--foreground) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight
            animate-[fadeInUp_0.7s_ease_forwards] text-on-surface">
            We believe hiring should<br />
            <span className="text-[#4BC957]">feel effortless.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-on-surface-muted leading-relaxed max-w-3xl mx-auto
            animate-[fadeInUp_0.7s_0.2s_ease_forwards] opacity-0">
            CareerSprint was born from frustration with slow processes, mismatched candidates,
            and opaque recruitment. We set out to build the GCC's most trusted AI hiring platform.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Animate className="animate-from-left">
            <div className="bg-surface-card border border-surface rounded-2xl p-8 hover:border-inner transition-colors h-full">
              <div className="h-10 w-10 rounded-lg bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center mb-6">
                <Rocket className="h-5 w-5 text-[#4BC957]" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Mission</h3>
              <p className="text-on-surface-muted leading-relaxed">
                To simplify, accelerate, and modernize recruitment across the GCC through intelligent automation and AI-driven decision-making. Every candidate deserves a fair shot. Every company deserves clarity.
              </p>
            </div>
          </Animate>
          <Animate className="animate-from-right" delay="anim-delay-200">
            <div className="bg-surface-card border border-surface rounded-2xl p-8 hover:border-inner transition-colors h-full">
              <div className="h-10 w-10 rounded-lg bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center mb-6">
                <Eye className="h-5 w-5 text-[#4BC957]" />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">Vision</h3>
              <p className="text-on-surface-muted leading-relaxed">
                Become the definitive hiring layer for the Middle East where AI, local compliance, and human potential converge. By 2028, we aim to power 1 million career moves annually.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-surface bg-surface-deep">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[["800+", "Companies"], ["150K+", "Candidates"], ["12K+", "Active roles"], ["94%", "Match accuracy"]].map(([val, label], i) => (
            <Animate key={label} className="animate-on-scroll" delay={delays[i]}>
              <h4 className="text-3xl sm:text-4xl font-extrabold text-[#4BC957] mb-2">{val}</h4>
              <p className="text-sm font-medium text-on-surface-muted">{label}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full text-center">
        <Animate className="animate-on-scroll">
          <h2 className="text-3xl font-bold text-on-surface mb-3">Meet the founders</h2>
          <p className="text-on-surface-muted mb-12">Builders, believers, and GCC natives.</p>
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { initials: "KR", name: "Khalid Al-Rashid", role: "Co-Founder & CEO", location: "Dubai, UAE" },
            { initials: "NF", name: "Dr. Noor Al-Farsi", role: "Co-Founder & CTO", location: "Riyadh, KSA" },
            { initials: "YH", name: "Yasmin Haddad", role: "Co-Founder & Head of Growth", location: "Abu Dhabi, UAE" },
          ].map((f, i) => (
            <Animate key={f.initials} className="animate-on-scroll" delay={delays[i]}>
              <div className="bg-surface-card border border-surface rounded-2xl p-8 hover:border-inner transition-colors flex flex-col items-center text-center h-full">
                <div className="h-16 w-16 rounded-full bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center mb-4">
                  <span className="text-[#4BC957] font-bold text-xl">{f.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-1">{f.name}</h3>
                <p className="text-[#4BC957] text-sm font-semibold mb-4">{f.role}</p>
                <p className="text-on-surface-muted text-sm leading-relaxed mb-6">
                  Former Head of Talent at Emirates NBD. Spent 12 years watching great candidates get lost in broken ATS systems. Built CareerSprint to fix that.
                </p>
                <div className="mt-auto flex items-center justify-center gap-4 text-xs text-on-surface-subtle">
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{f.location}</span>
                  <a href="#" className="hover:text-on-surface transition-colors">LinkedIn</a>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 w-full text-center">
        <Animate className="animate-on-scroll">
          <h2 className="text-3xl font-bold text-on-surface mb-12">What we stand for</h2>
        </Animate>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: Users, title: "People first", desc: "Technology should amplify human potential, not replace it." },
            { Icon: Lightbulb, title: "Transparency", desc: "Explainable AI scores. No black boxes. No hidden fees." },
            { Icon: Zap, title: "Momentum", desc: "Speed matters. We optimize for action and outcomes." },
            { Icon: Heart, title: "Local by default", desc: "Built for GCC compliance, culture, and career norms." },
          ].map(({ Icon, title, desc }, i) => (
            <Animate key={title} className="animate-on-scroll" delay={delays[i]}>
              <div className="bg-surface-card border border-surface rounded-2xl p-6 text-center h-full">
                <div className="h-10 w-10 rounded-lg bg-[#4BC957]/10 border border-[#4BC957]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-4 w-4 text-[#4BC957]" />
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-2">{title}</h4>
                <p className="text-xs text-on-surface-muted leading-relaxed">{desc}</p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 w-full">
        <Animate className="animate-scale">
          <div className="bg-surface-card border border-surface rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#4BC957]/5">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] bg-[#4BC957]/10 rounded-full blur-[100px]" />
            </div>
            <h2 className="relative text-3xl sm:text-4xl font-extrabold text-on-surface mb-4">Join the movement.</h2>
            <p className="relative text-on-surface-muted mb-8 max-w-lg mx-auto">
              Whether you are hiring or searching, CareerSprint is built to move you forward.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="w-full sm:w-auto bg-[#4BC957] hover:bg-[#00B96E] text-[#080C14] font-bold px-8 py-3 rounded-xl transition-all active:scale-[0.98]">
                Get started
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-transparent border border-surface hover:border-inner text-on-surface font-medium px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                Contact page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Animate>
      </section>
    </div>
  );
}
