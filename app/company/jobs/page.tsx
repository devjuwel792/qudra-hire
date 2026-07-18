"use client";

import React from "react";
import { Plus, MoreVertical, Eye, Pencil, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function JobsPage() {
  const router = useRouter();
  const jobs = [
    { role: "Senior Product Designer", location: "Dubai, UAE", applicants: 53, matches: 96, status: "Open" },
    { role: "Full-Stack Engineer (React / Node)", location: "Dubai, UAE • Remote", applicants: 66, matches: 92, status: "Open" },
    { role: "AI / ML Engineer", location: "Riyadh, KSA", applicants: 79, matches: 89, status: "Open" },
    { role: "Talent Acquisition Lead", location: "Abu Dhabi, UAE", applicants: 92, matches: 85, status: "Open" },
    { role: "Growth Marketing Manager", location: "Kuwait City, KW", applicants: 105, matches: 81, status: "Open" },
    { role: "Data Analyst", location: "Abu Dhabi, UAE", applicants: 118, matches: 78, status: "Open" },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-full mx-auto">
      {/* Header section matching the screenshot */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Manage jobs</h1>
          <p className="text-sm text-slate-400 mt-1">Post, monitor and close listings.</p>
        </div>
        <Link href="/company/jobs/create" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4BC957] hover:bg-[#00B96E] text-white font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#4BC957]/10 active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          Post a job
        </Link>
      </div>

      {/* Jobs Table Container - Desktop */}
      <div className="bg-[#0F172A] border border-[#1E293B]/60 rounded-2xl overflow-hidden shadow-xl">
        {/* Mobile card view */}
        <div className="block md:hidden divide-y divide-[#1E293B]/40">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-4 space-y-3 hover:bg-[#162032]/30 transition-colors">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-white text-sm leading-tight">{job.role}</h3>
                <span className="inline-flex items-center bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap">
                  {job.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{job.location}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400"><strong className="text-white font-semibold">{job.applicants}</strong> applicants</span>
                <span className="font-bold text-[#4BC957]">{job.matches}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <button className="inline-flex items-center justify-center border border-slate-700/80 hover:border-slate-600 bg-[#162032] hover:bg-[#1C283F] text-slate-400 hover:text-slate-200 w-9 h-9 rounded-xl transition-all active:scale-[0.98]">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40 bg-[#0F172A] border border-[#1E293B]/60 text-slate-200">
                    <DropdownMenuItem onClick={() => router.push(`/company/jobs/view?id=${idx}`)} className="cursor-pointer gap-2 px-2.5 py-2">
                      <Eye className="h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/company/jobs/edit?id=${idx}`)} className="cursor-pointer gap-2 px-2.5 py-2">
                      <Pencil className="h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/company/jobs/applicants`)} className="cursor-pointer gap-2 px-2.5 py-2">
                      <Users className="h-3.5 w-3.5 text-slate-400" /> Applicants
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => ""} className="cursor-pointer gap-2 px-2.5 py-2 text-red-400 focus:text-red-400">
                      <Trash2 className="h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B]/60 text-slate-400  font-semibold uppercase tracking-wider bg-[#0A0F1D]/40">
                <th className="py-4 px-6 font-medium text-slate-400">Role</th>
                <th className="py-4 px-6 font-medium text-slate-400">Location</th>
                <th className="py-4 px-6 font-medium text-slate-400">Applicants</th>
                <th className="py-4 px-6 font-medium text-slate-400">AI Matches</th>
                <th className="py-4 px-6 font-medium text-slate-400">Status</th>
                <th className="py-4 px-6 font-medium text-slate-400 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]/40 text-slate-200 text-sm">
              {jobs.map((job, idx) => (
                <tr key={idx} className="hover:bg-[#162032]/30 transition-colors group">
                  {/* Role name in bold white */}
                  <td className="py-5 px-6 font-bold text-white tracking-tight">{job.role}</td>
                  {/* Location in light slate */}
                  <td className="py-5 px-6 text-slate-400 font-medium">{job.location}</td>
                  {/* Applicants Count */}
                  <td className="py-5 px-6 font-extrabold text-white">{job.applicants}</td>
                  {/* AI Matches Score in Qudra Green */}
                  <td className="py-5 px-6 font-bold text-[#4BC957]">{job.matches}</td>
                  {/* Status Badge */}
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center bg-[#4BC957]/10 text-[#4BC957] border border-[#4BC957]/20 px-2.5 py-0.5 rounded-full  font-semibold">
                      {job.status}
                    </span>
                  </td>
                  {/* Kebab Menu */}
                  <td className="py-5 px-6 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger >
                        <button className="inline-flex items-center justify-center border border-slate-700/80 hover:border-slate-600 bg-[#162032] hover:bg-[#1C283F] text-slate-400 hover:text-slate-200 w-9 h-9 rounded-xl transition-all active:scale-[0.98]">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 bg-[#0F172A] border border-[#1E293B]/60 text-slate-200">
                        <DropdownMenuItem onClick={() => router.push(`/company/jobs/view?id=${idx}`)} className="cursor-pointer gap-2 px-2.5 py-2">
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push(`/company/jobs/edit?id=${idx}`)} className="cursor-pointer gap-2 px-2.5 py-2">
                          <Pencil className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push(`/company/jobs/applicants`)} className="cursor-pointer gap-2 px-2.5 py-2">
                          <Users className="h-3.5 w-3.5 text-slate-400" />
                          Applicants
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => ""} className="cursor-pointer gap-2 px-2.5 py-2 text-red-400 focus:text-red-400">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

