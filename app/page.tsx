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
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";
import QudraHeader from "@/components/layout/QudraHeader";
import QudraFooter from "@/components/layout/QudraFooter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";


const jobs = [
  { abbr: "ENB", company: "Emirates NBD", title: "Senior Product Designer", location: "Dubai, UAE", type: "Full-time", salary: "AED 28k-35k", match: "96%", ago: "2d ago", tags: ["Figma", "Design system", "Ux research", "Fintech", "Emiratization"], visa: true },
  { abbr: "CAR", company: "Careem", title: "Backend Engineer", location: "Dubai, UAE", type: "Full-time", salary: "AED 22k-30k", match: "91%", ago: "1d ago", tags: ["Node.js", "Microservices", "AWS"], visa: true },
  { abbr: "STC", company: "STC Pay", title: "Product Manager", location: "Riyadh, KSA", type: "Full-time", salary: "SAR 30k-40k", match: "88%", ago: "3d ago", tags: ["Fintech", "Agile", "Saudization"], visa: false },
  { abbr: "ADN", company: "ADNOC", title: "Data Analyst", location: "Abu Dhabi, UAE", type: "Contract", salary: "AED 18k-24k", match: "84%", ago: "5d ago", tags: ["Python", "Power BI", "SQL"], visa: false },
  { abbr: "TAL", company: "Talabat", title: "UX Researcher", location: "Dubai, UAE", type: "Full-time", salary: "AED 15k-20k", match: "80%", ago: "4d ago", tags: ["User testing", "Figma", "GCC market"], visa: true },
];

function JobCard({ job, active }: { job: typeof jobs[0]; active: boolean }) {
  return (
    <div className={`group w-full rounded-2xl p-6 border transition-all duration-300 relative
      ${active
        ? "bg-[#0F1F14] border-[#00D07C]/30 shadow-lg shadow-[#00D07C]/5"
        : "bg-[#080C14] border-white/5 opacity-60 scale-95 hover:opacity-100 hover:scale-100 hover:bg-[#0F1F14] hover:border-[#00D07C]/30 hover:shadow-lg hover:shadow-[#00D07C]/5"
      }`}>
      {active && <div className="absolute inset-0 bg-[#00D07C]/5 rounded-2xl pointer-events-none" />}
      <div className="group-hover:[&_.green-overlay]:block hidden absolute inset-0 bg-[#00D07C]/5 rounded-2xl pointer-events-none green-overlay" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-xl bg-[#162032] flex items-center justify-center font-bold text-white border
              ${active ? "h-12 w-12 text-sm border-[#00D07C]/30" : "h-10 w-10 text-xs border-white/5 group-hover:border-[#00D07C]/30"}`}>
              {job.abbr}
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">{job.company}</p>
              <h3 className={`font-bold text-white leading-tight ${active ? "text-base" : "text-sm"}`}>{job.title}</h3>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={`text-[#00D07C] border text-[10px] font-bold px-2 py-0.5 rounded-full
              ${active ? "bg-[#00D07C]/20 border-[#00D07C]/30" : "bg-[#00D07C]/10 border-[#00D07C]/20 group-hover:bg-[#00D07C]/20 group-hover:border-[#00D07C]/30"}`}>
              {job.match} match
            </span>
            <span className="text-[10px] text-slate-500 font-medium">{job.ago}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-400 mb-4">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{job.type}</span>
          <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.salary}</span>
          {job.visa && <span className="text-[#00D07C]">✈ Visa</span>}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map(t => (
            <span key={t} className="bg-[#162032] border border-white/5 text-slate-400 text-[10px] font-medium px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function JobCarouselInner() {
  const { api } = useCarousel();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <CarouselContent className="-ml-4">
      {jobs.map((job, i) => (
        <CarouselItem key={job.abbr + i} className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[40%] lg:basis-[30%]">
          <JobCard job={job} active={i === current} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}

function JobCardsCarousel() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Top matches for you</h2>
      <p className="text-slate-400 mb-10 text-center">AI-ranked roles based on your profile.</p>
      <Carousel opts={{ loop: true, align: "center" }} className="relative">
        <JobCarouselInner />
        <CarouselPrevious className="left-0 h-10 w-10 bg-transparent border border-white/20 text-slate-400 hover:bg-white/5 hover:text-white" />
        <CarouselNext className="right-0 h-10 w-10 bg-transparent border border-[#00D07C]/40 text-[#00D07C] hover:bg-[#00D07C]/10" />
      </Carousel>
    </section>
  );
}

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

        <div className="mt-8">
          {/** Features Carousel data-driven rendering */}
          {(() => {
            const features = [
              {
                title: "CV parsing",
                description:
                  "Extracts skills, experience, and history instantly.",
                Icon: FileText,

              },
              {
                title: "Smart matching",
                description:
                  "Daily AI-ranked recommendations with explainable match scores.",


                Icon: Zap,

              },
              {
                title: "Auto-apply mode",
                description:
                  "Let QudraHire send tailored applications while you focus on prep.",
                Icon: Search,

              },
              {


                title: "Visa & nationalization",
                description:
                  "Filter for sponsorship, Emiratization, and Saudization out of the box.",
                Icon: Globe,

              },
              {
                title: "Bilingual",
                description:
                  "Full Arabic and English support across the entire UI.",
                Icon: Languages,

              },
            ] as const

            return (
              <Carousel opts={{ loop: true }} className="relative">
                <CarouselContent>
                  {features.map((f) => {
                    const Icon = f.Icon
                    return (
                      <CarouselItem
                        key={f.title}
                        className="basis-full md:basis-1/4"
                      >
                        <div className={"w-64 bg-[#0F172A] border hover:bg-green-600/30 transition-colors border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center  scale-95 shrink-0"}>
                          <div className={"h-10 w-10 rounded-full bg-[#00D07C]/10 border border-[#00D07C]/20 flex items-center justify-center mb-4 text-[#00D07C]"}>
                            <Icon className={"h-4 w-4"} />
                          </div>

                          <h4 className={"font-bold text-white mb-2"}>
                            {f.title}
                          </h4>
                          <p
                            className={
                              "text-xs text-slate-400"
                            }
                          >
                            {f.description}
                          </p>
                        </div>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>

                <CarouselPrevious
                  className="absolute touch-manipulation rounded-full hover:text-green-700 text-white top-1/2 -left-6 -translate-y-1/2 h-10 w-10 bg-transparent border border-white/20 hover:bg-white/5 transition-colors"
                  variant="outline"
                  size="icon-sm"
                />
                <CarouselNext
                  className="absolute touch-manipulation rounded-full hover:text-green-700 text-white top-1/2 -right-6 -translate-y-1/2 h-10 w-10 bg-transparent border border-[#00D07C]/40 hover:bg-[#00D07C]/10 transition-colors"
                  variant="outline"
                  size="icon-sm"
                />
              </Carousel>
            )
          })()}
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
      {/* 5. Job Cards Carousel */}
      <JobCardsCarousel />


      {/* 6. Contact Us / Quick Message */}
      < section className="max-w-6xl mx-auto px-4 sm:px-8 py-24 w-full" >
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
      </section >

      {/* 7. Bottom CTA */}
      < section className="max-w-5xl mx-auto px-4 sm:px-8 pb-24 w-full" >
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
      </section >

      <QudraFooter />
    </div >
  );
}
