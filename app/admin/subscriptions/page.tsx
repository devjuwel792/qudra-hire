"use client";

import { useState } from "react";
import {
  Sparkles, Star, DollarSign, TrendingUp,
  Pencil, Check, Plus, X, Briefcase
} from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";

// ── Data ──────────────────────────────────────────────────────────────────────

const statsData = [
  { icon: Sparkles, label: "Premium Plans Active", value: "5", change: "+14.2%" },
  { icon: Star, label: "Starter Plans Active", value: "4", change: "+8.1%" },
  { icon: DollarSign, label: "Monthly Revenue", value: "AED 88,400", change: "+10.7%" },
  { icon: TrendingUp, label: "Conversion Rate", value: "62%", change: "+3.2%" },
];

const freePlanFeatures = [
  "Browse & apply to unlimited jobs",
  "Basic AI job matching",
  "Resume upload & profile",
  "Application tracking",
  "Standard support",
];

const premiumPlanFeatures = [
  "Everything in Free",
  "Auto Apply — AI submits tailored applications daily",
  "AI Resume Tailoring per job",
  "AI Resume Improvement & ATS score",
  "Priority AI matching & shortlisting",
  "AI interview prep & practice",
  "Direct messaging inbox",
  "WhatsApp daily match digest",
  "Priority support",
];

const activePremiumPlans = [
  { name: "Ahmed Al-Rashidi", designation: "Software Engineer", billing: "Monthly", start: "2024-06-12", expires: "2024-07-12", jobs: 8 },
  { name: "Sara Al-Mansouri", designation: "Marketing Manager", billing: "Yearly", start: "2024-01-01", expires: "2025-01-01", jobs: 12 },
  { name: "Nora Al-Zaabi", designation: "Data Scientist", billing: "Yearly", start: "2024-03-01", expires: "2025-03-01", jobs: 15 },
  { name: "Omar Hussain", designation: "Civil Engineer", billing: "Monthly", start: "2024-07-05", expires: "2024-08-05", jobs: 4 },
  { name: "Fatima Al-Ali", designation: "Marketing Manager", billing: "Monthly", start: "2024-06-18", expires: "2024-07-18", jobs: 2 },
];

// ── Types ─────────────────────────────────────────────────────────────────────

interface PlanForm {
  name: string;
  type: string;
  title: string;
  price: string;
  renewal: string;
  discount: string;
  feature: string;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, label, value, change }: {
  icon: React.ElementType; label: string; value: string; change: string;
}) {
  return (
    <div className="rounded-xl bg-card border border-border p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium text-[#21c55e]">↑ {change}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function PlanModal({
  open,
  onClose,
  mode,
}: {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit";
}) {
  const [form, setForm] = useState<PlanForm>({
    name: mode === "edit" ? "Starter" : "",
    type: mode === "edit" ? "Free" : "",
    title: mode === "edit" ? "Your always-on AI Recruiter." : "",
    price: mode === "edit" ? "0" : "",
    renewal: mode === "edit" ? "month" : "",
    discount: mode === "edit" ? "• Save 16%" : "",
    feature: mode === "edit" ? "Everything in Free" : "",
  });

  function set(field: keyof PlanForm, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  const inputCls =
    "w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:border-[#6366f1] transition-colors placeholder:text-muted-foreground";

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="bg-card border border-border text-foreground max-w-md p-0 rounded-xl overflow-hidden">
        <DialogHeader className="px-6 py-5 border-b border-border">
          <DialogTitle className="text-lg font-bold text-foreground">
            {mode === "add" ? "Add plans" : "Edit Plan"}
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Plan Name</label>
            <input className={inputCls} value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. Starter" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Plan Type</label>
            <input className={inputCls} value={form.type} onChange={e => set("type", e.target.value)} placeholder="e.g. Free / Premium" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Plan title</label>
            <input className={inputCls} value={form.title} onChange={e => set("title", e.target.value)} placeholder="Short description" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Price (AED)</label>
            <input className={inputCls} type="number" value={form.price} onChange={e => set("price", e.target.value)} placeholder="0" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Renewal</label>
            <input className={inputCls} value={form.renewal} onChange={e => set("renewal", e.target.value)} placeholder="month / year" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Discount</label>
            <input className={inputCls} value={form.discount} onChange={e => set("discount", e.target.value)} placeholder="e.g. • Save 16%" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Feature</label>
            <div className="flex gap-2">
              <input className={inputCls} value={form.feature} onChange={e => set("feature", e.target.value)} placeholder="Add a feature" />
              <button className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#6366f1] transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded-lg bg-[#6366f1] hover:bg-[#6366f1]/90 text-white text-sm font-medium transition-colors"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function SubscriptionsPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [modalMode, setModalMode] = useState<"add" | "edit" | null>(null);

  const monthlyPrice = 79;
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.84);

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Subscription Plans</h1>
        <button
          onClick={() => setModalMode("add")}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#6366f1]/90 text-white text-sm font-semibold transition-colors shadow"
        >
          <Plus className="h-4 w-4" /> Add plans
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Billing toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${billing === "monthly"
              ? "bg-[#21c55e] text-[#0f172a]"
              : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${billing === "yearly"
              ? "bg-[#21c55e] text-[#0f172a]"
              : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
        >
          Yearly
          <span className="text-[11px] font-medium text-[#21c55e] bg-[#21c55e]/10 px-1.5 py-0.5 rounded-full">
            • Save 16%
          </span>
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Free Plan */}
        <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-1">⚡ STARTER</p>
              <h2 className="text-4xl font-black text-foreground">Free</h2>
              <p className="text-sm text-muted-foreground mt-1">Everything you need to start your search.</p>
            </div>
            <button
              onClick={() => setModalMode("edit")}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pencil className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-5">
            <span className="text-3xl font-black text-foreground">AED 0 </span>
            <span className="text-muted-foreground text-sm">forever</span>
          </div>
          <button className="w-full py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors mb-5">
            Get started free
          </button>
          <ul className="space-y-2.5">
            {freePlanFeatures.map(f => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="h-4 w-4 text-[#21c55e] flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="rounded-xl bg-card border border-[#6366f1]/40 p-6 shadow-md relative overflow-hidden">
          {/* Most popular badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <span className="inline-block bg-[#21c55e] text-[#0f172a] text-[10px] font-black px-4 py-1 rounded-b-full tracking-wide">
              Most popular
            </span>
          </div>
          <div className="flex items-start justify-between mb-4 mt-3">
            <div>
              <p className="text-[11px] font-bold text-[#6366f1] uppercase tracking-widest mb-1">⭐ RECOMMENDED</p>
              <h2 className="text-4xl font-black text-foreground">Premium</h2>
              <p className="text-sm text-muted-foreground mt-1">Your always-on AI Recruiter.</p>
            </div>
            <button
              onClick={() => setModalMode("edit")}
              className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pencil className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-5">
            <span className="text-3xl font-black text-foreground">
              AED {billing === "monthly" ? monthlyPrice : yearlyPrice}{" "}
            </span>
            <span className="text-muted-foreground text-sm">
              / {billing === "monthly" ? "month" : "year"}
            </span>
          </div>
          <button className="w-full py-2.5 rounded-lg bg-[#21c55e] hover:bg-[#21c55e]/90 text-[#0f172a] text-sm font-bold transition-colors mb-5">
            Upgrade to Premium
          </button>
          <ul className="space-y-2.5">
            {premiumPlanFeatures.map(f => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="h-4 w-4 text-[#21c55e] flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Active Premium Plans Table */}
      <div>
        <h2 className="text-base font-bold text-foreground mb-3">Active Premium Plans</h2>
        <div className="rounded-xl bg-card border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  {["CANDIDATE", "DESIGNATION", "BILLING", "START", "EXPIRES", "JOBS APPLIED"].map(h => (
                    <th key={h} className="px-5 py-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activePremiumPlans.map((row, idx) => (
                  <tr
                    key={row.name}
                    className={`border-b border-border hover:bg-muted/40 transition-colors ${idx === activePremiumPlans.length - 1 ? "border-b-0" : ""}`}
                  >
                    <td className="px-5 py-3.5 text-sm font-semibold text-foreground">{row.name}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5" />
                        {row.designation}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-semibold border ${row.billing === "Monthly"
                          ? "bg-muted border-border text-foreground"
                          : "bg-[#6366f1]/10 border-[#6366f1]/20 text-[#6366f1]"
                        }`}>
                        {row.billing}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{row.start}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{row.expires}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-foreground">{row.jobs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals */}
      {(modalMode === "add" || modalMode === "edit") && (
        <PlanModal
          open={true}
          onClose={() => setModalMode(null)}
          mode={modalMode}
        />
      )}
    </div>
  );
}
