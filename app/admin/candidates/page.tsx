"use client";

import { useState } from "react";
import {
  Search, Eye, Pencil, Trash2, Globe,
  ChevronLeft, ChevronRight, Loader2,
  ShieldOff, ShieldCheck, AlertTriangle,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  useGetAdminCandidatesQuery,
  useGetAdminCandidateByIdQuery,
  usePatchAdminCandidateMutation,
  useDeleteAdminCandidateMutation,
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

// ── Badges ────────────────────────────────────────────────────────────────────

function SubBadge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    Pro:        "bg-[#6366f1]/20 text-[#818cf8]",
    Basic:      "bg-[#3b82f6]/20 text-[#60a5fa]",
    Free:       "bg-white/10 text-white/50",
    Enterprise: "bg-[#f59e0b]/20 text-[#fbbf24]",
  };
  const cls = styles[label] ?? "bg-white/10 text-white/50";
  return (
    <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${cls}`}>
      {label || "Free"}
    </span>
  );
}

function StatusBadge({ suspended }: { suspended: boolean }) {
  return suspended ? (
    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-red-500/15 text-red-400">
      Suspended
    </span>
  ) : (
    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#00E5A0]/15 text-[#00E5A0]">
      Active
    </span>
  );
}

// ── Row skeleton ──────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr className="border-b border-white/5">
      {Array.from({ length: 8 }).map((_, i) => (
        <td key={i} className="px-5 py-4">
          <div className="h-3 rounded bg-white/5 animate-pulse" style={{ width: i === 0 ? 140 : i === 1 ? 180 : 80 }} />
        </td>
      ))}
    </tr>
  );
}

// ── Detail panel (fetches single candidate) ───────────────────────────────────

function CandidateDetailPanel({
  id,
  onEdit,
  onDelete,
  onClose,
}: {
  id: number;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}) {
  const { data, isLoading, isError } = useGetAdminCandidateByIdQuery(id);
  const c = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-white/30" />
      </div>
    );
  }
  if (isError || !c) {
    return <p className="text-sm text-red-400 py-8 text-center">Failed to load candidate.</p>;
  }

  return (
    <>
      {/* Avatar + name */}
      <div className="flex items-center gap-4 pb-5 border-b border-white/5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: avatarColor(c.id) }}
        >
          {getInitials(c.full_name)}
        </div>
        <div>
          <p className="text-base font-bold text-white">{c.full_name}</p>
          <p className="text-xs text-white/40">{c.email}</p>
        </div>
        <StatusBadge suspended={c.is_suspended} />
      </div>

      {/* Detail grid */}
      <div className="grid grid-cols-2 gap-y-5 gap-x-4 py-5 border-b border-white/5">
        {[
          ["Phone",       c.phone || "—"],
          ["Country",     c.country || "—"],
          ["Credits",     String(c.credits)],
          ["Plan",        c.current_plan || "Free"],
          ["ATS Score",   String(c.ats_score)],
          ["Registered",  formatDate(c.registered)],
        ].map(([label, val]) => (
          <div key={label}>
            <p className="text-[11px] text-white/40 mb-1">{label}</p>
            <p className="text-sm font-medium text-white/90">{val}</p>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 pt-4 flex-wrap">
        <button
          onClick={onEdit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors"
        >
          <Pencil className="w-3.5 h-3.5" /> Edit
        </button>
        <button
          onClick={() => onDelete()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors ml-auto"
        >
          <Trash2 className="w-3.5 h-3.5" /> Delete
        </button>
      </div>
    </>
  );
}

// ── Edit form ─────────────────────────────────────────────────────────────────

function EditForm({
  candidate,
  onClose,
}: {
  candidate: AdminCandidateListItem;
  onClose: () => void;
}) {
  const [patchCandidate, { isLoading }] = usePatchAdminCandidateMutation();
  const [form, setForm] = useState({
    full_name: candidate.full_name,
    email:     candidate.email,
    phone:     "",
    country:   candidate.location ?? "",
    plan_id:   "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setError("");
    try {
      await patchCandidate({
        id: candidate.id,
        full_name: form.full_name || undefined,
        email:     form.email     || undefined,
        phone:     form.phone     || undefined,
        country:   form.country   || undefined,
        plan_id:   form.plan_id   || undefined,
      }).unwrap();
      setSuccess(true);
      setTimeout(onClose, 900);
    } catch (err: unknown) {
      setError(
        (err as { data?: { details?: string } })?.data?.details ??
        "Save failed. Please try again."
      );
    }
  }

  const inputCls =
    "w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors placeholder:text-white/20";

  return (
    <div className="py-4 space-y-4">
      {error && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}
      {success && (
        <p className="text-xs text-[#00E5A0] bg-[#00E5A0]/10 border border-[#00E5A0]/20 px-3 py-2 rounded-lg">
          Saved successfully!
        </p>
      )}

      <div>
        <label className="text-xs text-white/40 mb-1.5 block">Full Name</label>
        <input className={inputCls} value={form.full_name} onChange={(e) => set("full_name", e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/40 mb-1.5 block">Email</label>
          <input type="email" className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
        </div>
        <div>
          <label className="text-xs text-white/40 mb-1.5 block">Phone</label>
          <input className={inputCls} placeholder="+971 50 000 0000" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/40 mb-1.5 block">Country / Location</label>
          <input className={inputCls} value={form.country} onChange={(e) => set("country", e.target.value)} />
        </div>
        <div>
          <label className="text-xs text-white/40 mb-1.5 block">Plan ID</label>
          <input className={inputCls} placeholder="UUID" value={form.plan_id} onChange={(e) => set("plan_id", e.target.value)} />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 text-sm font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isLoading || success}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#6366f1]/90 disabled:opacity-60 text-white text-sm font-medium transition-colors"
        >
          {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {isLoading ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

// ── Delete confirm ────────────────────────────────────────────────────────────

function DeleteConfirm({
  candidate,
  onClose,
}: {
  candidate: AdminCandidateListItem;
  onClose: () => void;
}) {
  const [deleteCandidate, { isLoading }] = useDeleteAdminCandidateMutation();
  const [error, setError] = useState("");

  async function handleDelete() {
    setError("");
    try {
      await deleteCandidate(candidate.id).unwrap();
      onClose();
    } catch (err: unknown) {
      setError(
        (err as { data?: { details?: string } })?.data?.details ??
        "Delete failed. Please try again."
      );
    }
  }

  return (
    <div className="py-4 space-y-4">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
        <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-red-300">Delete candidate</p>
          <p className="text-xs text-red-400/80 mt-1">
            This will permanently delete <span className="font-bold">{candidate.full_name}</span> and all their data. This action cannot be undone.
          </p>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <div className="flex justify-end gap-3 pt-2 border-t border-white/5">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 text-sm font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white text-sm font-medium transition-colors"
        >
          {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {isLoading ? "Deleting…" : "Yes, Delete"}
        </button>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

type ModalMode = "view" | "edit" | "delete" | null;

export default function AdminCandidatesPage() {
  const { data, isLoading, isError } = useGetAdminCandidatesQuery();
  const candidates = data?.data ?? [];

  const [search, setSearch]       = useState("");
  const [page, setPage]           = useState(1);
  const [modal, setModal]         = useState<ModalMode>(null);
  const [selected, setSelected]   = useState<AdminCandidateListItem | null>(null);

  function open(mode: ModalMode, c: AdminCandidateListItem) {
    setSelected(c);
    setModal(mode);
  }
  function close() {
    setModal(null);
    setSelected(null);
  }

  const filtered = candidates.filter(
    (c) =>
      c.full_name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Modal title
  const modalTitle =
    modal === "view"   ? "Candidate Details" :
    modal === "edit"   ? "Edit Candidate"    :
    modal === "delete" ? "Confirm Delete"    : "";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Candidate Management</h1>
          <p className="text-sm text-white/40 mt-0.5">
            {isLoading ? "Loading…" : `${candidates.length} total candidates`}
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#00E5A0]/40 transition-colors"
          />
        </div>
      </div>

      {/* Error banner */}
      {isError && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          Failed to load candidates. Check your connection and try again.
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl bg-[#111827] border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px]">
            <thead>
              <tr className="border-b border-white/5">
                {["Name", "Email", "Location", "Credits", "Subscription", "Status", "Registered", "Actions"].map((h) => (
                  <th
                    key={h}
                    className={`px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider ${h === "Actions" ? "text-right" : "text-left"}`}
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
                    <td colSpan={8} className="text-center py-16 text-white/30 text-sm">
                      {search ? "No candidates match your search." : "No candidates found."}
                    </td>
                  </tr>
                )
                : paginated.map((c, idx) => (
                  <tr
                    key={c.id}
                    className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx === paginated.length - 1 ? "border-b-0" : ""}`}
                  >
                    {/* Name */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                          style={{ background: avatarColor(c.id) }}
                        >
                          {getInitials(c.full_name)}
                        </div>
                        <span className="text-sm font-medium text-white">{c.full_name}</span>
                      </div>
                    </td>
                    {/* Email */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-white/60">{c.email}</span>
                    </td>
                    {/* Location */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <Globe className="h-3 w-3 text-white/30 shrink-0" />
                        <span className="text-sm text-white/60">{c.location || "—"}</span>
                      </div>
                    </td>
                    {/* Credits */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-white/70">{c.credits}</span>
                    </td>
                    {/* Subscription */}
                    <td className="px-5 py-3.5">
                      <SubBadge label={c.subscription} />
                    </td>
                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <StatusBadge suspended={c.is_suspended} />
                    </td>
                    {/* Registered */}
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-white/50">{formatDate(c.registered)}</span>
                    </td>
                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => open("view", c)}
                          title="View details"
                          className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => open("edit", c)}
                          title="Edit"
                          className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => open("delete", c)}
                          title="Delete"
                          className="p-1.5 rounded-md hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
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
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/5">
            <span className="text-xs text-white/30">
              Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-md hover:bg-white/5 text-white/30 hover:text-white/60 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-7 h-7 rounded-md text-xs font-semibold transition-colors ${
                    n === page
                      ? "bg-[#00E5A0]/20 text-[#00E5A0]"
                      : "hover:bg-white/5 text-white/40"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-md hover:bg-white/5 text-white/30 hover:text-white/60 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Single Dialog for all modals */}
      <Dialog open={modal !== null} onOpenChange={(o) => { if (!o) close(); }}>
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-md p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">{modalTitle}</DialogTitle>
          </DialogHeader>

          {selected && modal === "view" && (
            <CandidateDetailPanel
              id={selected.id}
              onEdit={() => setModal("edit")}
              onDelete={() => setModal("delete")}
              onClose={close}
            />
          )}
          {selected && modal === "edit" && (
            <EditForm candidate={selected} onClose={close} />
          )}
          {selected && modal === "delete" && (
            <DeleteConfirm candidate={selected} onClose={close} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
