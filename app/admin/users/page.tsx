"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Eye,
  Pencil,
  Trash2,
  Globe,
  ChevronLeft,
  ChevronRight,
  X,
  Lock,
  Key,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

// ── Types ─────────────────────────────────────────────────────────────────────
type Subscription = "Pro" | "Basic" | "Free" | "Enterprise";
type Status = "Active" | "Suspended";

interface Candidate {
  initials: string;
  name: string;
  email: string;
  country: string;
  credits: number;
  subscription: Subscription;
  status: Status;
  registered: string;
  phone?: string;
  atsScore?: number;
  color: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_CANDIDATES: Candidate[] = [
  {
    initials: "AA", name: "Ahmed Al-Rashidi", email: "ahmed.rashidi@gmail.com",
    country: "UAE", credits: 45, subscription: "Pro", status: "Active",
    registered: "2024-06-12", phone: "+971 50 234 5678", atsScore: 88, color: "#6366f1",
  },
  {
    initials: "SA", name: "Sara Al-Mansouri", email: "sara.mansouri@outlook.com",
    country: "KSA", credits: 12, subscription: "Basic", status: "Active",
    registered: "2024-07-01", phone: "+966 50 123 4567", atsScore: 72, color: "#8b5cf6",
  },
  {
    initials: "KI", name: "Khalid Ibrahim", email: "khalid.ibrahim@yahoo.com",
    country: "Qatar", credits: 8, subscription: "Free", status: "Suspended",
    registered: "2024-05-20", phone: "+974 33 456 789", atsScore: 65, color: "#10b981",
  },
  {
    initials: "NA", name: "Nora Al-Zaabi", email: "nora.zaabi@gmail.com",
    country: "UAE", credits: 78, subscription: "Enterprise", status: "Active",
    registered: "2024-06-28", phone: "+971 55 987 6543", atsScore: 94, color: "#f59e0b",
  },
  {
    initials: "OH", name: "Omar Hussain", email: "omar.hussain@hotmail.com",
    country: "Bahrain", credits: 23, subscription: "Pro", status: "Active",
    registered: "2024-07-05", phone: "+973 39 123 456", atsScore: 81, color: "#ec4899",
  },
  {
    initials: "FA", name: "Fatima Al-Ali", email: "fatima.alali@gmail.com",
    country: "Oman", credits: 5, subscription: "Basic", status: "Active",
    registered: "2024-06-18", phone: "+968 99 876 543", atsScore: 75, color: "#3b82f6",
  },
];

// ── Badge helpers ──────────────────────────────────────────────────────────────
const subscriptionStyles: Record<Subscription, string> = {
  Pro: "bg-[#6366f1]/20 text-[#818cf8]",
  Basic: "bg-[#3b82f6]/20 text-[#60a5fa]",
  Free: "bg-white/10 text-white/50",
  Enterprise: "bg-[#f59e0b]/20 text-[#fbbf24]",
};

const statusStyles: Record<Status, string> = {
  Active: "bg-[#21c55e]/15 text-[#21c55e]",
  Suspended: "bg-red-500/15 text-red-400",
};

function SubscriptionBadge({ type }: { type: Subscription }) {
  return (
    <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${subscriptionStyles[type]}`}>
      {type}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CandidateManagementPage() {
  const [search, setSearch] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const filtered = ALL_CANDIDATES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Candidate Management</h1>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#21c55e]/40 transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#111827] border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </button>
        <button className="flex items-center gap-2 bg-[#111827] border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm px-4 py-2 rounded-lg transition-colors">
          <ArrowUpDown className="h-3.5 w-3.5" />
          Sort
        </button>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-[#111827] border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Name</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Email</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Country</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Credits</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Subscription</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Status</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Registered</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, idx) => (
              <tr
                key={c.email}
                className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx === filtered.length - 1 ? "border-b-0" : ""
                  }`}
              >
                {/* Name */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: c.color }}
                    >
                      {c.initials}
                    </div>
                    <span className="text-sm font-medium text-white">{c.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/60">{c.email}</span>
                </td>

                {/* Country */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <Globe className="h-3 w-3 text-white/30" />
                    <span className="text-sm text-white/60">{c.country}</span>
                  </div>
                </td>

                {/* Credits */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/70">{c.credits}</span>
                </td>

                {/* Subscription */}
                <td className="px-5 py-3.5">
                  <SubscriptionBadge type={c.subscription} />
                </td>

                {/* Status */}
                <td className="px-5 py-3.5">
                  <StatusBadge status={c.status} />
                </td>

                {/* Registered */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/50">{c.registered}</span>
                </td>

                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => {
                        setSelectedCandidate(c);
                        setIsDetailsOpen(true);
                      }}
                      className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCandidate(c);
                        setIsEditOpen(true);
                      }}
                      className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
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
            Showing {filtered.length} of {ALL_CANDIDATES.length} users
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
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-md p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">
              {selectedCandidate?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-4 border-b border-white/5">
            <div>
              <p className="text-xs text-white/40 mb-1">Email</p>
              <p className="text-sm font-medium text-white/90">{selectedCandidate?.email}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Phone</p>
              <p className="text-sm font-medium text-white/90">{selectedCandidate?.phone}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Country</p>
              <p className="text-sm font-medium text-white/90">{selectedCandidate?.country}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Credits</p>
              <p className="text-sm font-medium text-white/90">{selectedCandidate?.credits}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Subscription</p>
              {selectedCandidate && <SubscriptionBadge type={selectedCandidate.subscription} />}
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Status</p>
              {selectedCandidate && <StatusBadge status={selectedCandidate.status} />}
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">ATS Score</p>
              <p className="text-sm font-medium text-[#21c55e]">{selectedCandidate?.atsScore}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Registered</p>
              <p className="text-sm font-medium text-white/90">{selectedCandidate?.registered}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4 flex-wrap">
            <button
              onClick={() => {
                setIsDetailsOpen(false);
                setIsEditOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors">
              <Lock className="w-3.5 h-3.5" />
              Suspend
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors">
              <Key className="w-3.5 h-3.5" />
              Reset Password
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors ml-auto">
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-md p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">Edit User</DialogTitle>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <div>
              <label className="text-xs text-white/40 mb-1.5 block">Full Name</label>
              <input
                type="text"
                defaultValue={selectedCandidate?.name}
                className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Email</label>
                <input
                  type="text"
                  defaultValue={selectedCandidate?.email}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Phone</label>
                <input
                  type="text"
                  defaultValue={selectedCandidate?.phone}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Country</label>
                <select
                  defaultValue={selectedCandidate?.country}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors appearance-none"
                >
                  <option value="UAE">UAE</option>
                  <option value="KSA">KSA</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Subscription</label>
                <select
                  defaultValue={selectedCandidate?.subscription}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors appearance-none"
                >
                  <option value="Pro">Pro</option>
                  <option value="Basic">Basic</option>
                  <option value="Free">Free</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
            <button
              onClick={() => setIsEditOpen(false)}
              className="px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEditOpen(false)}
              className="px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#6366f1]/90 text-white text-sm font-medium transition-colors"
            >
              Save Changes
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
