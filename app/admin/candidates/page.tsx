"use client";

import { useState } from "react";
import {
  Search, Eye, Trash2,
  ChevronLeft, ChevronRight,
  Filter, ArrowUpDown
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useGetAdminCandidatesQuery,
  type AdminCandidateListItem,
} from "@/store/authApi";

// ── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function avatarColor(id: number) {
  const colors = ["#6366f1", "#8b5cf6", "#10b981", "#f59e0b", "#ec4899", "#3b82f6", "#14b8a6", "#f97316"];
  return colors[id % colors.length];
}

// ── Badges ────────────────────────────────────────────────────────────────────

function SubBadge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    Premium: "bg-[#6366f1]/20 text-[#6366f1]",
    Starter: "bg-muted text-muted-foreground",
    Pro: "bg-[#6366f1]/20 text-[#6366f1]",
    Basic: "bg-muted text-muted-foreground",
    Free: "bg-muted text-muted-foreground",
    Enterprise: "bg-[#f59e0b]/20 text-[#f59e0b]",
  };
  const cls = styles[label] ?? "bg-muted text-muted-foreground";
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${cls}`}>
      {label || "Free"}
    </span>
  );
}

function StatusBadge({ suspended }: { suspended: boolean }) {
  return suspended ? (
    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold border border-red-500/20 text-red-500 bg-red-500/10">
      Suspended
    </span>
  ) : (
    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold border border-[#21c55e]/20 text-[#21c55e] bg-[#21c55e]/10">
      Active
    </span>
  );
}

// ── Row skeleton ──────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr className="border-b border-border">
      {Array.from({ length: 7 }).map((_, i) => (
        <td key={i} className="px-5 py-4">
          <div className="h-3 rounded bg-muted animate-pulse" style={{ width: i === 0 ? 140 : i === 2 ? 180 : 80 }} />
        </td>
      ))}
    </tr>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

export default function AdminCandidatesPage() {
  const router = useRouter();
  const { data, isLoading } = useGetAdminCandidatesQuery();
  const candidates = data?.data ?? [];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = candidates.filter(
    (c) =>
      c.full_name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Candidate Management</h1>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-card border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-[#6366f1] transition-colors"
          />
        </div>
       
      </div>

      {/* Table */}
      <div className="rounded-xl bg-card border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {["CANDIDATE", "COUNTRY", "DESIGNATIONS & PLANS", "ATS", "JOBS APPLIED", "STATUS", "ACTIONS"].map((h) => (
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
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                : paginated.length === 0
                  ? (
                    <tr>
                      <td colSpan={7} className="text-center py-16 text-muted-foreground text-sm">
                        {search ? "No candidates match your search." : "No candidates found."}
                      </td>
                    </tr>
                  )
                  : paginated.map((c, idx) => (
                      <tr
                        key={c.id}
                        className={`border-b border-border hover:bg-muted/50 transition-colors ${idx === paginated.length - 1 ? "border-b-0" : ""}`}
                      >
                        {/* Name */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                              style={{ background: avatarColor(c.id) }}
                            >
                              {getInitials(c.full_name)}
                            </div>
                            <div>
                              <span className="block text-sm font-semibold text-foreground">{c.full_name}</span>
                              <span className="block text-[11px] text-muted-foreground">{c.email}</span>
                            </div>
                          </div>
                        </td>
                        {/* Location */}
                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-foreground">{c.location || "—"}</span>
                        </td>
                        {/* Designations & Plans */}
                        <td className="px-5 py-4">
                          <div className="space-y-1.5">
                            {c.designations_plans.map((d, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/50" />
                                <span className="text-xs text-foreground">{d.designation || "—"}</span>
                                <SubBadge label={d.plan} />
                              </div>
                            ))}
                          </div>
                        </td>
                        {/* ATS Score */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-[#21c55e]" style={{ width: `${c.ats_score}%` }} />
                            </div>
                            <span className="text-xs font-medium text-foreground">{c.ats_score}</span>
                          </div>
                        </td>
                        {/* Jobs Applied */}
                        <td className="px-5 py-4">
                          <span className="text-sm font-medium text-foreground">{c.jobs_applied}</span>
                        </td>
                        {/* Status */}
                        <td className="px-5 py-4">
                          <StatusBadge suspended={c.is_suspended} />
                        </td>
                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => router.push(`/admin/candidates/${c.id}`)}
                              title="View details"
                              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              title="Delete"
                              className="p-1.5 rounded-md hover:bg-red-500/10 text-red-500/60 hover:text-red-500 transition-colors border border-transparent hover:border-red-500/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
              }
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {!isLoading && filtered.length > 0 && (
          <div className="flex items-center justify-between px-5 py-3 border-t border-border">
            <span className="text-xs text-muted-foreground">
              Showing {filtered.length} users
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground mr-2">Prev</span>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-semibold transition-colors ${n === page
                      ? "bg-[#6366f1] text-white"
                      : "hover:bg-muted text-muted-foreground"
                    }`}
                >
                  {n}
                </button>
              ))}
              <span className="text-xs text-muted-foreground ml-2">Next</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
