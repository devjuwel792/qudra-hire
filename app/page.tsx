"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  Search,
  Zap,
  Globe,
  Languages,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080C14] text-white">
      <QudraHeader activePage="Home" />

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 text-center overflow-hidden">
        {/* Glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="w-[800px] h-[400px] bg-[#00D07C]/10 rounded-full blur-[150px] mt-10" />
        </div>
        {/* Grid texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        {/* Floating Icons (Decorative) */}
        <div className="absolute top-20 left-[15%] text-[#00D07C]/40 hidden md:block">
          <Briefcase className="w-12 h-12 rotate-[-15deg]" />
        </div>
        <div className="absolute top-40 right-[15%] text-[#00D07C]/40 hidden md:block">
          <FileText className="w-10 h-10 rotate-[15deg]" />
        </div>
        <div className="absolute bottom-32 left-[20%] text-[#00D07C]/40 hidden md:block">
          <FileText className="w-8 h-8 rotate-[-10deg]" />
        </div>
        <div className="absolute bottom-20 right-[20%] text-[#00D07C]/40 hidden md:block">
          <Briefcase className="w-10 h-10 rotate-[20deg]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Stop searching.<br />
            Start <span className="text-[#00D07C]">progressing.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            QudraHire matches candidates and companies with AI precision, visa sponsorship, Emiratization and Saudization filters included. Bilingual. Mobile-first. Built for momentum.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/jobs" className="w-full sm:w-auto bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-8 py-3.5 rounded-xl transition-all active:scale-[0.98]">
              Find your next role
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto bg-transparent border border-[#00D07C]/30 hover:border-[#00D07C]/50 text-white font-bold px-8 py-3.5 rounded-xl transition-all">
              Find your next candidate
            </Link>
          </div>
          
          {/* Hero Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-center pt-10">
            <div>
              <h3 className="text-3xl font-bold text-[#00D07C] mb-1">12K+</h3>
              <p className="text-sm text-slate-400 font-medium">Active roles</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#00D07C] mb-1">94%</h3>
              <p className="text-sm text-slate-400 font-medium">Match accuracy</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#00D07C] mb-1">3.2d</h3>
              <p className="text-sm text-slate-400 font-medium">Avg. time-to-shortlist</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Logo Ticker */}
      <section className="border-y border-white/5 bg-[#0A0F1D] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between opacity-50 text-[10px] sm:text-xs font-bold tracking-widest uppercase flex-wrap gap-4">
          <span className="text-slate-500 mr-4">HIRING ON QUDRAHIRE</span>
          <span>Emirates NBD</span>
          <span>Careem</span>
          <span>STC Pay</span>
          <span>ADNOC</span>
          <span>Talabat</span>
          <span>Mubadala</span>
        </div>
      </section>

      {/* 3. Features Carousel */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Built for the way the GCC hires.</h2>
        <p className="text-slate-400 mb-12">Every feature is designed around outcomes &mdash; not vanity activity.</p>
        
        <div className="flex gap-4 overflow-hidden justify-center items-stretch h-56">
          <div className="w-64 bg-[#0F172A] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center opacity-50 scale-95 shrink-0 hidden md:flex">
            <div className="h-10 w-10 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4 text-[#00D07C]">
              <FileText className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-white mb-2">CV parsing</h4>
            <p className="text-xs text-slate-400">Extracts skills, experience, and history instantly.</p>
          </div>
          
          <div className="w-64 bg-[#0F1F14] border border-[#00D07C]/40 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-[#00D07C]/10 shrink-0 relative">
            <div className="absolute inset-0 bg-[#00D07C]/5 rounded-3xl pointer-events-none" />
            <div className="h-10 w-10 rounded-full bg-[#00D07C] flex items-center justify-center mb-4 text-[#080C14]">
              <Zap className="h-4 w-4 fill-current" />
            </div>
            <h4 className="font-bold text-white mb-2 relative z-10">Smart matching</h4>
            <p className="text-xs text-[#00D07C]/80 relative z-10">Daily AI-ranked recommendations with explainable match scores.</p>
          </div>

          <div className="w-64 bg-[#0F172A] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center opacity-70 shrink-0 hidden sm:flex">
            <div className="h-10 w-10 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4 text-[#00D07C]">
              <Search className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-white mb-2">Auto-apply mode</h4>
            <p className="text-xs text-slate-400">Let QudraHire send tailored applications while you focus on prep.</p>
          </div>

          <div className="w-64 bg-[#0F172A] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center opacity-50 scale-95 shrink-0 hidden lg:flex">
            <div className="h-10 w-10 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4 text-[#00D07C]">
              <Globe className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-white mb-2">Visa & nationalization</h4>
            <p className="text-xs text-slate-400">Filter for sponsorship, Emiratization, and Saudization out of the box.</p>
          </div>
          
          <div className="w-64 bg-[#0F172A] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center opacity-30 scale-90 shrink-0 hidden xl:flex">
            <div className="h-10 w-10 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4 text-[#00D07C]">
              <Languages className="h-4 w-4" />
            </div>
            <h4 className="font-bold text-white mb-2">Bilingual</h4>
            <p className="text-xs text-slate-400">Full Arabic and English support across the entire UI.</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
            <ChevronLeft className="h-4 w-4 text-slate-400" />
          </button>
          <button className="h-10 w-10 rounded-full border border-[#00D07C]/40 flex items-center justify-center hover:bg-[#00D07C]/10 transition-colors">
            <ChevronRight className="h-4 w-4 text-[#00D07C]" />
          </button>
        </div>
      </section>

      {/* 4. Two Large Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Candidate Card */}
          <div className="relative bg-gradient-to-br from-[#0F1F14] to-[#0A0F1D] border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-[#00D07C]/20 flex items-center justify-center mb-6 border border-[#00D07C]/30 text-[#00D07C]">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Candidates</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Land roles faster with AI-tailored CVs, cover letters, and daily matches.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {["Auto-apply", "ATS tracking", "Application tracking", "Direct messaging", "Credit wallet"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#00D07C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/candidate" className="inline-flex items-center justify-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl transition-all w-max">
                Get candidate workspace <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Company Card */}
          <div className="relative bg-gradient-to-br from-[#0F1F14] to-[#0A0F1D] border border-white/10 rounded-3xl p-8 sm:p-10 overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col">
              <div className="h-12 w-12 rounded-xl bg-[#00D07C]/20 flex items-center justify-center mb-6 border border-[#00D07C]/30 text-[#00D07C]">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Companies</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Instantly shortlisted candidates, ranked by fit. Hire in days, not months.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {["AI candidate ranking", "Instant shortlists", "Top candidate Unlock by credits", "Pipeline overview", "Bilingual posts"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#00D07C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/company" className="inline-flex items-center justify-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl transition-all w-max">
                Get company workspace <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Roles */}
      <section className="py-20 bg-[#0A0F1D] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Featured roles this week</h2>
              <p className="text-slate-400 text-sm">AI-ranked</p>
            </div>
            <Link href="/jobs" className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex gap-5 justify-center">
            {/* Job Card (Partial view for left item) */}
            <div className="w-80 bg-[#080C14] border border-white/5 rounded-2xl p-6 opacity-50 scale-95 shrink-0 hidden lg:block">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#162032] border border-white/5 flex items-center justify-center text-xs font-bold text-white">
                    ENB
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight text-sm">Senior Product Designer</h3>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-[#00D07C]/10 text-[#00D07C] border border-[#00D07C]/20 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    96% match
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">2d ago</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-medium text-slate-400 mb-4">
                 <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Dubai, UAE</span>
              </div>
            </div>

            {/* Main Job Card */}
            <div className="w-80 sm:w-96 bg-[#0F1F14] border border-[#00D07C]/30 rounded-2xl p-6 shrink-0 shadow-lg shadow-[#00D07C]/5 relative">
              <div className="absolute inset-0 bg-[#00D07C]/5 rounded-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[#162032] border border-[#00D07C]/30 flex items-center justify-center text-sm font-bold text-white">
                      ENB
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Emirates NBD</p>
                      <h3 className="font-bold text-white leading-tight text-base">Senior Product Designer</h3>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="bg-[#00D07C]/20 text-[#00D07C] border border-[#00D07C]/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      96% match
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">2d ago</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-300 mb-5">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-slate-500" />Dubai, UAE</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-500" />Full-time</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-slate-500" />AED 28k-35k</span>
                  <span className="flex items-center gap-1 text-[#00D07C]">✈ Visa</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Figma", "Design system", "Ux research", "Fintech", "Emiratization"].map(t => (
                    <span key={t} className="bg-[#080C14] border border-white/5 text-slate-400 text-[10px] font-medium px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Job Card */}
            <div className="w-80 bg-[#080C14] border border-white/5 rounded-2xl p-6 opacity-50 scale-95 shrink-0 hidden md:block">
               <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#162032] border border-white/5 flex items-center justify-center text-xs font-bold text-white">
                    ENB
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Emirates NBD</p>
                    <h3 className="font-bold text-white leading-tight text-sm">Senior Product Designer</h3>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-[#00D07C]/10 text-[#00D07C] border border-[#00D07C]/20 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    96% match
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">2d ago</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-medium text-slate-400 mb-4">
                 <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Dubai, UAE</span>
                 <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />Full-time</span>
                 <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" />AED 28k-35k</span>
                 <span className="flex items-center gap-1 text-[#00D07C]">✈ Visa</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                  {["Figma", "Design system", "Ux research"].map(t => (
                    <span key={t} className="bg-[#162032] border border-white/5 text-slate-400 text-[10px] font-medium px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center gap-3">
            <button className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
              <ChevronLeft className="h-4 w-4 text-slate-400" />
            </button>
            <button className="h-10 w-10 rounded-full border border-[#00D07C]/40 flex items-center justify-center hover:bg-[#00D07C]/10 transition-colors">
              <ChevronRight className="h-4 w-4 text-[#00D07C]" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Contact Us / Quick Message */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact us</h2>
            <p className="text-slate-400 mb-10 leading-relaxed max-w-sm">
              Have a question about hiring, partnerships, or your account? Our GCC team is ready to help.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="h-8 w-8 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center text-[#00D07C]">
                  <Mail className="h-4 w-4" />
                </span>
                hello@qudrahire.com
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="h-8 w-8 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center text-[#00D07C]">
                  <Phone className="h-4 w-4" />
                </span>
                +971 4 555 0199
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="h-8 w-8 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center text-[#00D07C]">
                  <MapPin className="h-4 w-4" />
                </span>
                Business Bay, Dubai, UAE
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="h-8 w-8 rounded-lg bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center text-[#00D07C]">
                  <Clock className="h-4 w-4" />
                </span>
                Sun-Thu, 9:00 - 18:00 GST
              </li>
            </ul>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl transition-all">
              Go to contact page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Quick Message Form */}
          <div className="bg-[#0F172A] border border-white/5 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-1">Quick message</h3>
            <p className="text-xs text-slate-500 mb-6">We usually reply within a few hours.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-[#0A0F1D] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D07C]/50 transition-colors"
              />
              <textarea 
                placeholder="How can we help?" 
                rows={4}
                className="w-full bg-[#0A0F1D] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D07C]/50 transition-colors resize-none"
              />
              <button type="button" className="w-full bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-6 py-3 rounded-xl transition-all">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 w-full">
        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-[#00D07C]/5">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[300px] h-[300px] bg-[#00D07C]/10 rounded-full blur-[100px]" />
          </div>
          <h2 className="relative text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Your next move starts here.
          </h2>
          <p className="relative text-slate-400 mb-8 max-w-lg mx-auto">
            Join thousands of professionals and companies hiring smarter across the region.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup" className="w-full sm:w-auto bg-[#00D07C] hover:bg-[#00B96E] text-[#080C14] font-bold px-8 py-3 rounded-xl transition-all">
              Create free account
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3 rounded-xl transition-all">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <QudraFooter />
    </div>
  );
}
