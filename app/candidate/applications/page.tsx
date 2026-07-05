"use client";

import React from "react";
import Link from "next/link";

export default function CandidateApplicationsPage() {
  const applications = [
    {
      role: "Senior Product Designer",
      company: "Emirates NBD",
      ats: "92%",
      applied: "Mar 12",
      stage: "Interview"
    },
    {
      role: "Full-Stack Engineer (React / Node)",
      company: "Careem",
      ats: "88%",
      applied: "Mar 10",
      stage: "Shortlisted"
    },
    {
      role: "AI / ML Engineer",
      company: "STC Pay",
      ats: "81%",
      applied: "Mar 8",
      stage: "Applied"
    },
    {
      role: "Growth Marketing Manager",
      company: "Talabat",
      ats: "64%",
      applied: "Feb 28",
      stage: "Rejected"
    }
  ];

  const stats = [
    { label: "Applied", count: 1 },
    { label: "Shortlisted", count: 1 },
    { label: "Interview", count: 1 },
    { label: "Offer", count: 0 },
    { label: "Rejected", count: 1 }
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-7xl mx-auto">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight">My applications</h1>
        <p className="text-sm text-on-surface-muted mt-1">Track every step from apply to offer.</p>
      </div>

      {/* Applications Table Card - Desktop */}
      <div className="bg-surface-card border border-surface rounded-2xl overflow-hidden">
        {/* Mobile card view */}
        <div className="block md:hidden divide-y divide-surface">
          {applications.map((app, idx) => (
            <div key={idx} className="p-4 space-y-2 hover:bg-surface-item/50 transition-colors">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-on-surface text-sm leading-tight">{app.role}</h3>
                <span className="text-xs font-bold border border-surface bg-surface-deep text-on-surface-muted px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  {app.stage}
                </span>
              </div>
              <p className="text-sm text-on-surface-muted">{app.company}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-on-surface-muted">ATS <strong className="text-[#4BC957]">{app.ats}</strong></span>
                <span className="text-on-surface-muted">{app.applied}</span>
              </div>
              <div className="pt-1">
                <Link
                  href="/candidate/jobs/detail?id=1&status=success"
                  className="text-sm font-bold text-on-surface-muted hover:text-on-surface transition-colors"
                >
                  View &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface text-on-surface-muted font-semibold uppercase tracking-wider bg-surface-deep">
                <th className="py-4 px-6 font-medium">Role</th>
                <th className="py-4 px-6 font-medium">Company</th>
                <th className="py-4 px-6 font-medium">Ats</th>
                <th className="py-4 px-6 font-medium">Applied</th>
                <th className="py-4 px-6 font-medium">Stage</th>
                <th className="py-4 px-6 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface text-on-surface text-sm">
              {applications.map((app, idx) => (
                <tr key={idx} className="hover:bg-surface-item/50 transition-colors group">
                  <td className="py-4 px-6 font-bold max-w-[280px] truncate">
                    {app.role}
                  </td>
                  <td className="py-4 px-6 text-on-surface-muted font-medium">{app.company}</td>
                  <td className="py-4 px-6 text-[#4BC957] font-extrabold">{app.ats}</td>
                  <td className="py-4 px-6 text-on-surface-muted font-medium">{app.applied}</td>
                  <td className="py-4 px-6">
                    <span className="text-[13px] font-bold border border-surface bg-surface-deep text-on-surface-muted px-3 py-1 rounded-full">
                      {app.stage}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href="/candidate/jobs/detail?id=1&status=success"
                      className="font-bold text-on-surface-muted hover:text-on-surface hover:underline transition-all"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-surface-card border border-surface rounded-2xl p-4 md:p-5 space-y-1 hover:border-inner transition-all"
          >
            <span className=" font-semibold text-on-surface-muted">{s.label}</span>
            <p className="text-2xl md:text-3xl font-extrabold text-on-surface">{s.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
