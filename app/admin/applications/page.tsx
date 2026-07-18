"use client";

import { useState } from "react";
import { Eye, Download, FileText, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// ── Types ─────────────────────────────────────────────────────────────────────

type AppStatus = "Applied" | "Shortlisted" | "Interview" | "Offer" | "Hired";

interface Application {
  id: number;
  candidate: string;
  initials: string;
  color: string;
  company: string;
  job: string;
  match: number;
  ats: number;
  applied: string;
  status: AppStatus;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const applications: Application[] = [
  { id: 1, candidate: "Ahmed Al-Rashidi", initials: "AA", color: "#6366f1", company: "Talabat Technologies", job: "Senior React Developer",    match: 94, ats: 88, applied: "2024-07-06", status: "Interview"  },
  { id: 2, candidate: "Nora Al-Zaabi",    initials: "NA", color: "#f59e0b", company: "ADNOC Group",          job: "Data Scientist",             match: 91, ats: 92, applied: "2024-07-05", status: "Shortlisted" },
  { id: 3, candidate: "Omar Hussain",     initials: "OH", color: "#10b981", company: "Noon E-Commerce",      job: "UX Designer",                match: 76, ats: 81, applied: "2024-07-04", status: "Applied"     },
  { id: 4, candidate: "Sara Al-Mansouri", initials: "SA", color: "#8b5cf6", company: "Talabat Technologies", job: "Senior React Developer",    match: 68, ats: 74, applied: "2024-07-03", status: "Offer"       },
  { id: 5, candidate: "Fatima Al-Ali",    initials: "FA", color: "#ec4899", company: "stc Group",            job: "HR Specialist",              match: 85, ats: 69, applied: "2024-07-02", status: "Hired"       },
  { id: 6, candidate: "Khalid Ibrahim",   initials: "KI", color: "#3b82f6", company: "Gulf Air",             job: "Financial Analyst",          match: 52, ats: 61, applied: "2024-07-01", status: "Applied"     },
];

const statusOrder: AppStatus[] = ["Applied", "Shortlisted", "Interview", "Offer", "Hired"];

const statusColors: Record<AppStatus, string> = {
  Applied:     "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Shortlisted: "bg-[#00E5A0]/10 text-[#00E5A0] border border-[#00E5A0]/20",
  Interview:   "bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20",
  Offer:       "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  Hired:       "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

// ── Application Details Modal ─────────────────────────────────────────────────

function AppDetailModal({
  app,
  onClose,
  onStatusChange,
}: {
  app: Application;
  onClose: () => void;
  onStatusChange: (id: number, status: AppStatus) => void;
}) {
  return (
    <Dialog open onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="bg-card border border-border text-foreground max-w-md p-0 rounded-xl overflow-hidden">
        <DialogHeader className="px-6 py-5 border-b border-border">
          <DialogTitle className="text-lg font-bold text-foreground">Application Details</DialogTitle>
        </DialogHeader>

        <div className="px-6 py-5 space-y-5">
          {/* Grid details */}
          <div className="grid grid-cols-2 gap-y-5 gap-x-4">
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Candidate</p>
              <p className="text-sm font-semibold text-foreground">{app.candidate}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Company</p>
              <p className="text-sm font-semibold text-foreground">{app.company}</p>
            </div>
            <div className="col-span-2">
              <p className="text-[10px] text-muted-foreground mb-1">Job</p>
              <p className="text-sm font-semibold text-foreground">{app.job}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Match Score</p>
              <p className="text-sm font-bold text-[#00E5A0]">{app.match}%</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">ATS Score</p>
              <p className="text-sm font-semibold text-foreground">{app.ats}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Applied</p>
              <p className="text-sm text-foreground">{app.applied}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Status</p>
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${statusColors[app.status]}`}>
                {app.status}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Status changer */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Current Status</p>
            <div className="flex items-center gap-2 flex-wrap">
              {statusOrder.map((s) => (
                <button
                  key={s}
                  onClick={() => onStatusChange(app.id, s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    app.status === s
                      ? "bg-[#6366f1] text-white"
                      : "bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-[#6366f1]/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ApplicationManagementPage() {
  const [data, setData] = useState<Application[]>(applications);
  const [filter, setFilter] = useState<AppStatus | "All">("All");
  const [selected, setSelected] = useState<Application | null>(null);

  const counts = statusOrder.reduce(
    (acc, s) => ({ ...acc, [s]: data.filter(a => a.status === s).length }),
    {} as Record<AppStatus, number>
  );

  const filtered = filter === "All" ? data : data.filter(a => a.status === filter);

  function handleStatusChange(id: number, status: AppStatus) {
    setData(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    setSelected(prev => prev ? { ...prev, status } : prev);
  }

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <h1 className="text-2xl font-bold text-foreground">Application Management</h1>

      {/* Pipeline filter bar */}
      <div className="flex items-center gap-1 flex-wrap">
        {statusOrder.map((s, idx) => (
          <div key={s} className="flex items-center gap-1">
            <button
              onClick={() => setFilter(s)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                filter === s
                  ? "bg-[#6366f1]/10 border-[#6366f1]/40 text-[#6366f1]"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span className="text-foreground font-bold">{counts[s]}</span>
              {s}
            </button>
            {idx < statusOrder.length - 1 && (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40" />
            )}
          </div>
        ))}
        <button
          onClick={() => setFilter("All")}
          className={`ml-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
            filter === "All"
              ? "bg-[#6366f1] text-white border-[#6366f1]"
              : "bg-card border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          All ({data.length})
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-card border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {["CANDIDATE", "COMPANY", "JOB", "MATCH", "ATS", "APPLIED", "STATUS", "ACTIONS"].map(h => (
                  <th
                    key={h}
                    className={`px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider ${h === "ACTIONS" ? "text-right" : "text-left"}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-16 text-center text-sm text-muted-foreground">
                    No applications found.
                  </td>
                </tr>
              ) : (
                filtered.map((app, idx) => (
                  <tr
                    key={app.id}
                    className={`border-b border-border hover:bg-muted/40 transition-colors ${idx === filtered.length - 1 ? "border-b-0" : ""}`}
                  >
                    {/* Candidate */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                          style={{ background: app.color }}
                        >
                          {app.initials}
                        </div>
                        <span className="text-sm font-semibold text-foreground">{app.candidate}</span>
                      </div>
                    </td>
                    {/* Company */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-muted-foreground">{app.company}</span>
                    </td>
                    {/* Job */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-foreground">{app.job}</span>
                    </td>
                    {/* Match */}
                    <td className="px-5 py-3.5">
                      <span className={`text-sm font-bold ${app.match >= 80 ? "text-[#00E5A0]" : app.match >= 60 ? "text-[#f59e0b]" : "text-red-400"}`}>
                        {app.match}%
                      </span>
                    </td>
                    {/* ATS */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm font-medium text-foreground">{app.ats}</span>
                    </td>
                    {/* Applied */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-muted-foreground">{app.applied}</span>
                    </td>
                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${statusColors[app.status]}`}>
                        {app.status}
                      </span>
                    </td>
                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelected(app)}
                          title="View details"
                          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button
                          title="View resume"
                          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <FileText className="h-3.5 w-3.5" />
                        </button>
                        <button
                          title="Download"
                          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <AppDetailModal
          app={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
