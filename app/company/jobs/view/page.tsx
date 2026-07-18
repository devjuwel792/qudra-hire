"use client";

import React, { Suspense } from "react";
import { ArrowLeft, MapPin, Users, Sparkles, Briefcase, Clock, DollarSign, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const jobs = [
  { role: "Senior Product Designer", location: "Dubai, UAE", applicants: 53, matches: 96, status: "Open", type: "Full-time", salary: "28,000 — 36,000 AED / month", posted: "2 days ago", skills: "Figma, React, TypeScript, Design Systems", description: "Own end-to-end design of our flagship banking app. You will work closely with product managers and engineers to deliver pixel-perfect interfaces that delight millions of users across the GCC region.", requirements: ["6+ years product design", "Fintech experience", "Fluent English; Arabic a plus"] },
  { role: "Full-Stack Engineer (React / Node)", location: "Dubai, UAE • Remote", applicants: 66, matches: 92, status: "Open", type: "Full-time", salary: "22,000 — 30,000 AED / month", posted: "3 days ago", skills: "React, Node.js, TypeScript, PostgreSQL", description: "Build and maintain the core platform that powers AI-driven recruitment across the Middle East. You'll own features end-to-end from database to UI.", requirements: ["4+ years full-stack experience", "Strong Node.js and React skills", "Experience with PostgreSQL"] },
  { role: "AI / ML Engineer", location: "Riyadh, KSA", applicants: 79, matches: 89, status: "Open", type: "Full-time", salary: "25,000 — 35,000 SAR / month", posted: "5 days ago", skills: "Python, TensorFlow, NLP, Computer Vision", description: "Develop and deploy machine learning models that power intelligent candidate matching and AI interviews. Work on cutting-edge NLP and recommendation systems.", requirements: ["3+ years ML engineering", "Proficiency in Python and TensorFlow", "Experience with NLP models"] },
  { role: "Talent Acquisition Lead", location: "Abu Dhabi, UAE", applicants: 92, matches: 85, status: "Open", type: "Full-time", salary: "30,000 — 38,000 AED / month", posted: "1 week ago", skills: "Sourcing, Interviewing, HR Tech, Arabic", description: "Lead talent acquisition strategy for a fast-growing AI startup. Own the full recruitment lifecycle and build relationships with top talent across the region.", requirements: ["7+ years TA experience", "Experience with tech hiring", "Fluent Arabic and English"] },
  { role: "Growth Marketing Manager", location: "Kuwait City, KW", applicants: 105, matches: 81, status: "Open", type: "Full-time", salary: "1,800 — 2,400 KWD / month", posted: "1 week ago", skills: "Digital Marketing, SEO, Content Strategy, Analytics", description: "Drive user acquisition and brand awareness across the GCC. You will own the marketing roadmap, run campaigns, and optimise conversion funnels.", requirements: ["5+ years growth marketing", "Experience in B2B SaaS", "Regional market knowledge"] },
  { role: "Data Analyst", location: "Abu Dhabi, UAE", applicants: 118, matches: 78, status: "Open", type: "Full-time", salary: "18,000 — 25,000 AED / month", posted: "2 weeks ago", skills: "SQL, Python, Tableau, Excel", description: "Transform raw data into actionable insights that drive product and business decisions. Build dashboards and reports for stakeholders across the organisation.", requirements: ["3+ years data analysis", "Strong SQL and Python skills", "Experience with Tableau or similar BI tools"] },
];

export default function JobViewPage() {
  return (
    <Suspense>
      <JobViewContent />
    </Suspense>
  );
}

function JobViewContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const job = jobs[Number(id)] ?? jobs[0];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-full mx-auto">
      {/* Back */}
      <div>
        <Link
          href="/company/jobs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">{job.role}</h1>
            <span className="bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 px-3 py-0.5 rounded-full text-sm font-semibold">
              {job.status}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 shrink-0" />
              {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 shrink-0" />
              {job.salary}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0" />
              Posted {job.posted}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/company/jobs/edit?id=${id}`}
            className="border border-border hover:bg-muted text-foreground font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
          >
            Edit job
          </Link>
          <Link
            href="/company/jobs/applicants"
            className="bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-[#4BC957]/10 active:scale-[0.98] inline-flex items-center gap-1.5"
          >
            <Users className="h-4 w-4" />
            View applicants
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <div className="bg-card border border-border rounded-2xl p-5 space-y-1 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Applicants</p>
          <p className="text-3xl font-extrabold text-foreground">{job.applicants}</p>
          <p className="text-sm text-muted-foreground">Total candidates applied</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5 space-y-1 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">AI Match Score</p>
          <p className="text-3xl font-extrabold text-[#4BC957]">{job.matches}%</p>
          <p className="text-sm text-muted-foreground">Average match across applicants</p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-5 space-y-1 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</p>
          <p className="text-3xl font-extrabold text-foreground flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#4BC957] inline-block" />
            {job.status}
          </p>
          <p className="text-sm text-muted-foreground">Listing is active and visible</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Job Description</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4BC957] mt-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Skills */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-[#4BC957]" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.split(", ").map((skill, i) => (
                <span key={i} className="bg-muted text-foreground text-sm font-semibold px-2.5 py-1 rounded-lg border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verification */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-foreground">Verification</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[#4BC957]" />
              Trade-licence verified
            </div>
          </div>

          {/* Cost */}
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-foreground">Cost</h3>
            <div className="space-y-2 text-sm font-semibold">
              <div className="flex justify-between text-muted-foreground">
                <span>Listing</span>
                <span className="text-foreground">5 credits</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Top 10 shortlist</span>
                <span className="text-foreground">Free</span>
              </div>
            </div>
            <div className="border-t border-border pt-4 text-sm font-bold text-[#4BC957]">
              Balance: 1,240 credits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
