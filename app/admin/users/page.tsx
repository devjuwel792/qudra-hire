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
} from "lucide-react";

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
  color: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_CANDIDATES: Candidate[] = [
  {
    initials: "AA", name: "Ahmed Al-Rashidi", email: "ahmed.rashidi@gmail.com",
    country: "UAE", credits: 45, subscription: "Pro", status: "Active",
    registered: "2024-06-12", color: "#6366f1",
  },
  {
    initials: "SA", name: "Sara Al-Mansouri", email: "sara.mansouri@outlook.com",
    country: "KSA", credits: 12, subscription: "Basic", status: "Active",
    registered: "2024-07-01", color: "#8b5cf6",
  },
  {
    initials: "KI", name: "Khalid Ibrahim", email: "khalid.ibrahim@yahoo.com",
    country: "Qatar", credits: 8, subscription: "Free", status: "Suspended",
    registered: "2024-05-20", color: "#10b981",
  },
  {
    initials: "NA", name: "Nora Al-Zaabi", email: "nora.zaabi@gmail.com",
    country: "UAE", credits: 78, subscription: "Enterprise", status: "Active",
    registered: "2024-06-28", color: "#f59e0b",
  },
  {
    initials: "OH", name: "Omar Hussain", email: "omar.hussain@hotmail.com",
    country: "Bahrain", credits: 23, subscription: "Pro", status: "Active",
    registered: "2024-07-05", color: "#ec4899",
  },
  {
    initials: "FA", name: "Fatima Al-Ali", email: "fatima.alali@gmail.com",
    country: "Oman", credits: 5, subscription: "Basic", status: "Active",
    registered: "2024-06-18", color: "#3b82f6",
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
  Active: "bg-[#00E5A0]/15 text-[#00E5A0]",
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
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#00E5A0]/40 transition-colors"
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
                className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                  idx === filtered.length - 1 ? "border-b-0" : ""
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
                    <button className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors">
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors">
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
            <button className="w-7 h-7 rounded-md bg-[#00E5A0]/20 text-[#00E5A0] text-xs font-semibold">
              1
            </button>
            <button className="p-1.5 rounded-md hover:bg-white/5 text-white/30 hover:text-white/60 transition-colors">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
