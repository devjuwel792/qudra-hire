"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Target,
  XCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ── Types ─────────────────────────────────────────────────────────────────────
type JobType = "Full-time" | "Part-time" | "Contract" | "Hybrid" | "Remote";
type Status = "Active" | "Closed" | "Draft";

interface Job {
  id: string;
  title: string;
  type: JobType;
  salary: string;
  company: string;
  location: string;
  matches: number;
  applications: number;
  posted: string;
  status: Status;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_JOBS: Job[] = [
  {
    id: "1",
    title: "Senior React Developer",
    type: "Full-time",
    salary: "AED 25,000–32,000",
    company: "Talabat Technologies",
    location: "Dubai, UAE",
    matches: 34,
    applications: 87,
    posted: "2024-06-20",
    status: "Active",
  },
  {
    id: "2",
    title: "Data Scientist",
    type: "Full-time",
    salary: "AED 30,000–40,000",
    company: "ADNOC Group",
    location: "Abu Dhabi, UAE",
    matches: 21,
    applications: 54,
    posted: "2024-06-25",
    status: "Active",
  },
  {
    id: "3",
    title: "UX Designer",
    type: "Hybrid",
    salary: "AED 18,000–24,000",
    company: "Noon E-Commerce",
    location: "Riyadh, KSA",
    matches: 12,
    applications: 31,
    posted: "2024-06-18",
    status: "Active",
  },
];

// ── Badge helpers ──────────────────────────────────────────────────────────────
const statusStyles: Record<Status, string> = {
  Active: "bg-[#21c55e]/15 text-[#21c55e]",
  Closed: "bg-red-500/15 text-red-400",
  Draft: "bg-gray-500/15 text-gray-400",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function JobManagementPage() {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filtered = ALL_JOBS.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Job Management</h1>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#21c55e]/40 transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#111827] border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-[#111827] border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Job Title</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Company</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Location</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Matches</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Applications</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Posted</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((j, idx) => (
              <tr
                key={j.id}
                className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx === filtered.length - 1 ? "border-b-0" : ""
                  }`}
              >
                {/* Job Title */}
                <td className="px-5 py-3.5">
                  <div>
                    <span className="text-sm font-medium text-white block">{j.title}</span>
                    <span className="text-xs text-white/40 block">{j.type} · {j.salary}</span>
                  </div>
                </td>

                {/* Company */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/70">{j.company}</span>
                </td>

                {/* Location */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-white/30" />
                    <span className="text-sm text-white/60">{j.location}</span>
                  </div>
                </td>

                {/* Matches */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <Target className="h-3 w-3 text-[#b48eed]" />
                    <span className="text-sm text-[#b48eed] font-medium">{j.matches}</span>
                  </div>
                </td>

                {/* Applications */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/70">{j.applications}</span>
                </td>

                {/* Posted */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/50">{j.posted}</span>
                </td>

                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => {
                        setSelectedJob(j);
                        setIsDetailsOpen(true);
                      }}
                      className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/5">
          <span className="text-xs text-white/30">
            Showing {filtered.length} of {ALL_JOBS.length} jobs
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md hover:bg-white/5 text-white/30 hover:text-white/60 transition-colors">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button className="w-7 h-7 rounded-md bg-[#21c55e]/20 text-[#21c55e] text-xs font-semibold">
              1
            </button>
            <button className="p-1.5 rounded-md hover:bg-white/5 text-white/30 hover:text-white/60 transition-colors">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-[500px] p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">
              {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-4 border-b border-white/5">
            <div>
              <p className="text-xs text-white/40 mb-1">Company</p>
              <p className="text-sm font-medium text-white/90">{selectedJob?.company}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Location</p>
              <p className="text-sm font-medium text-white/90">{selectedJob?.location}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Type</p>
              <p className="text-sm font-medium text-white/90">{selectedJob?.type}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Salary</p>
              <p className="text-sm font-medium text-white/90 font-mono">{selectedJob?.salary}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Applications</p>
              <p className="text-sm font-medium text-white/90">{selectedJob?.applications}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">AI Matches</p>
              <p className="text-sm font-medium text-white/90">{selectedJob?.matches}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Posted</p>
              <p className="text-sm font-medium text-white/90 font-mono">{selectedJob?.posted}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Status</p>
              {selectedJob && <StatusBadge status={selectedJob.status} />}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors">
              <XCircle className="w-3.5 h-3.5" />
              Close Job
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-transparent hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors">
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
