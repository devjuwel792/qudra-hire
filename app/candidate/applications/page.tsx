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
    <div className="p-8 space-y-8 max-w-7xl mx-auto text-white">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">My applications</h1>
        <p className="text-sm text-slate-400 mt-1">Track every step from apply to offer.</p>
      </div>

      {/* Applications Table Card */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400  font-semibold uppercase tracking-wider bg-[#0A0F1D]/25">
                <th className="py-4 px-6 font-medium text-slate-400">Role</th>
                <th className="py-4 px-6 font-medium text-slate-400">Company</th>
                <th className="py-4 px-6 font-medium text-slate-400">Ats</th>
                <th className="py-4 px-6 font-medium text-slate-400">Applied</th>
                <th className="py-4 px-6 font-medium text-slate-400">Stage</th>
                <th className="py-4 px-6 font-medium text-slate-400 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/40 text-slate-200 text-sm">
              {applications.map((app, idx) => (
                <tr key={idx} className="hover:bg-[#162032]/35 transition-colors group">
                  <td className="py-4 px-6 font-bold text-white max-w-[280px] truncate">
                    {app.role}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{app.company}</td>
                  <td className="py-4 px-6 text-[#4BC957] font-extrabold">{app.ats}</td>
                  <td className="py-4 px-6 text-slate-400 font-medium">{app.applied}</td>
                  <td className="py-4 px-6">
                    <span className="text-[13px] font-bold border border-slate-700/60 bg-[#1E293B]/40 text-slate-300 px-3 py-1 rounded-full">
                      {app.stage}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href="/candidate/jobs/detail?id=1&status=success"
                      className=" font-bold text-slate-300 hover:text-white hover:underline transition-all"
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl p-5 space-y-1 hover:border-[#2A3C58] transition-all"
          >
            <span className=" font-semibold text-slate-500">{s.label}</span>
            <p className="text-3xl font-extrabold text-white">{s.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
