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
  CreditCard,
  CheckCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ── Types ─────────────────────────────────────────────────────────────────────
type Subscription = "Pro" | "Basic" | "Enterprise";
type Status = "Verified" | "Pending" | "Rejected";

interface Company {
  id: string;
  initials: string;
  name: string;
  email: string;
  country: string;
  jobs: number;
  credits: number;
  subscription: Subscription;
  status: Status;
  color: string;
  contactPerson: string;
  phone: string;
  since: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const ALL_COMPANIES: Company[] = [
  {
    id: "1", initials: "TT", name: "Talabat Technologies", email: "hr@talabat.com",
    country: "UAE", jobs: 18, credits: 240, subscription: "Enterprise", status: "Verified",
    color: "#6366f1", contactPerson: "Reem Al-Kuwari", phone: "+971 4 555 0100", since: "2024-04-10",
  },
  {
    id: "2", initials: "AG", name: "ADNOC Group", email: "careers@adnoc.ae",
    country: "UAE", jobs: 42, credits: 560, subscription: "Enterprise", status: "Verified",
    color: "#8b5cf6", contactPerson: "Ahmed Sultan", phone: "+971 2 666 1234", since: "2023-11-20",
  },
  {
    id: "3", initials: "CN", name: "Careem Networks", email: "talents@careem.com",
    country: "UAE", jobs: 7, credits: 120, subscription: "Pro", status: "Pending",
    color: "#3b82f6", contactPerson: "Sarah Johnson", phone: "+971 4 444 8888", since: "2024-06-15",
  },
  {
    id: "4", initials: "NE", name: "Noon E-Commerce", email: "jobs@noon.com",
    country: "UAE", jobs: 14, credits: 80, subscription: "Pro", status: "Verified",
    color: "#10b981", contactPerson: "Omar Khaled", phone: "+971 4 222 9999", since: "2024-02-05",
  },
  {
    id: "5", initials: "SG", name: "stc Group", email: "hr@stc.com.sa",
    country: "KSA", jobs: 29, credits: 310, subscription: "Enterprise", status: "Verified",
    color: "#f59e0b", contactPerson: "Faisal Al-Dosari", phone: "+966 11 456 7890", since: "2023-09-12",
  },
  {
    id: "6", initials: "GA", name: "Gulf Air", email: "careers@gulfair.com",
    country: "Bahrain", jobs: 0, credits: 45, subscription: "Basic", status: "Rejected",
    color: "#ec4899", contactPerson: "Hassan Ali", phone: "+973 17 333 444", since: "2024-07-01",
  },
];

// ── Badge helpers ──────────────────────────────────────────────────────────────
const subscriptionStyles: Record<Subscription, string> = {
  Pro: "bg-[#6366f1]/20 text-[#818cf8]",
  Basic: "bg-[#3b82f6]/20 text-[#60a5fa]",
  Enterprise: "bg-[#f59e0b]/20 text-[#fbbf24]",
};

const statusStyles: Record<Status, string> = {
  Verified: "bg-[#00E5A0]/15 text-[#00E5A0]",
  Pending: "bg-amber-500/15 text-amber-400",
  Rejected: "bg-red-500/15 text-red-400",
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
export default function CompanyManagementPage() {
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const filtered = ALL_COMPANIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Company Management</h1>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#111827] border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#00E5A0]/40 transition-colors"
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
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Company</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Country</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Jobs</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Credits</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Subscription</th>
              <th className="text-left px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Status</th>
              <th className="text-right px-5 py-3 text-[11px] font-semibold text-white/30 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, idx) => (
              <tr
                key={c.id}
                className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                  idx === filtered.length - 1 ? "border-b-0" : ""
                }`}
              >
                {/* Company */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: c.color }}
                    >
                      {c.initials}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white block">{c.name}</span>
                      <span className="text-xs text-white/40 block">{c.email}</span>
                    </div>
                  </div>
                </td>

                {/* Country */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/60">{c.country}</span>
                </td>

                {/* Jobs */}
                <td className="px-5 py-3.5">
                  <span className="text-sm text-white/70">{c.jobs}</span>
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

                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => {
                        setSelectedCompany(c);
                        setIsDetailsOpen(true);
                      }}
                      className="p-1.5 rounded-md hover:bg-white/5 text-white/40 hover:text-white/80 transition-colors"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCompany(c);
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
            Showing {filtered.length} of {ALL_COMPANIES.length} users
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

      {/* Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-[500px] p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">
              {selectedCompany?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-4 border-b border-white/5">
            <div>
              <p className="text-xs text-white/40 mb-1">Status</p>
              {selectedCompany && <StatusBadge status={selectedCompany.status} />}
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Country</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.country}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Contact</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.contactPerson}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Phone</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.phone}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Credits</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.credits}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Active Jobs</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.jobs}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Subscription</p>
              {selectedCompany && <SubscriptionBadge type={selectedCompany.subscription} />}
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1">Since</p>
              <p className="text-sm font-medium text-white/90">{selectedCompany?.since}</p>
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
              <CreditCard className="w-3.5 h-3.5" />
              Add Credits
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors">
              <Lock className="w-3.5 h-3.5" />
              Suspend
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white/70 text-xs font-medium transition-colors">
              <Key className="w-3.5 h-3.5" />
              Reset Password
            </button>
            
            <div className="w-full mt-2 flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#00E5A0]/20 hover:bg-[#00E5A0]/10 text-[#00E5A0] text-xs font-medium transition-colors">
                <CheckCircle className="w-3.5 h-3.5" />
                Approve
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-500/10 text-red-400 text-xs font-medium transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="bg-[#111827] border-white/5 text-white max-w-md p-6 rounded-xl overflow-hidden !ring-0">
          <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
            <DialogTitle className="text-lg font-bold text-white">Edit Company</DialogTitle>
          </DialogHeader>

          <div className="py-4 space-y-4">
            <div>
              <label className="text-xs text-white/40 mb-1.5 block">Company Name</label>
              <input
                type="text"
                defaultValue={selectedCompany?.name}
                className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Email</label>
                <input
                  type="text"
                  defaultValue={selectedCompany?.email}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Contact Person</label>
                <input
                  type="text"
                  defaultValue={selectedCompany?.contactPerson}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Phone</label>
                <input
                  type="text"
                  defaultValue={selectedCompany?.phone}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Country</label>
                <select
                  defaultValue={selectedCompany?.country}
                  className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors appearance-none"
                >
                  <option value="UAE">UAE</option>
                  <option value="KSA">KSA</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Oman">Oman</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 pr-2">
              <label className="text-xs text-white/40 mb-1.5 block">Subscription</label>
              <select
                defaultValue={selectedCompany?.subscription}
                className="w-full bg-[#1A202C] border border-white/5 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#6366f1]/50 transition-colors appearance-none"
              >
                <option value="Enterprise">Enterprise</option>
                <option value="Pro">Pro</option>
                <option value="Basic">Basic</option>
              </select>
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
              Save
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
