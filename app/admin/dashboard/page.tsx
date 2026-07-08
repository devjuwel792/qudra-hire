"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  UserCheck,
  Building2,
  Briefcase,
  FileText,
  DollarSign,
  Star,
  CreditCard,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────
const revenueData = [
  { month: "Jan", value: 28000 },
  { month: "Feb", value: 30000 },
  { month: "Mar", value: 32000 },
  { month: "Apr", value: 35000 },
  { month: "May", value: 38000 },
  { month: "Jun", value: 44000 },
  { month: "Jul", value: 50000 },
];

const creditUsageData = [
  { name: "Job Posting", value: 34, color: "#00E5A0" },
  { name: "Candidate Reveal", value: 28, color: "#6366f1" },
  { name: "AI Matching", value: 18, color: "#f59e0b" },
  { name: "ATS Analysis", value: 12, color: "#ec4899" },
  { name: "Resume Opt.", value: 8, color: "#3b82f6" },
];

const userGrowthData = [
  { month: "Jan", users: 800 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1800 },
  { month: "Apr", users: 2400 },
  { month: "May", users: 3200 },
  { month: "Jun", users: 4800 },
  { month: "Jul", users: 5600 },
];

const appsTrendData = [
  { day: "Mon", apps: 160 },
  { day: "Tue", apps: 190 },
  { day: "Wed", apps: 210 },
  { day: "Thu", apps: 280 },
  { day: "Fri", apps: 260 },
  { day: "Sat", apps: 120 },
  { day: "Sun", apps: 80 },
];

const recentCandidates = [
  { initials: "AA", name: "Ahmed Al-Rashidi", location: "UAE", plan: "Pro", status: "Active", color: "#6366f1" },
  { initials: "SA", name: "Sara Al-Mansouri", location: "KSA", plan: "Basic", status: "Active", color: "#8b5cf6" },
  { initials: "KI", name: "Khalid Ibrahim", location: "Qatar", plan: "Free", status: "Suspended", color: "#10b981" },
  { initials: "NA", name: "Nora Al-Zaabi", location: "UAE", plan: "Enterprise", status: "Active", color: "#f59e0b" },
];

const pendingVerification = [
  { initials: "CN", name: "Careem Networks", location: "UAE", status: "Pending", color: "#6366f1" },
];

const recentPayments = [
  { name: "Ahmed Al-Rashidi", id: "PAY-7811", plan: "Str/pc", amount: "AED 299", status: "Successful" },
  { name: "ADNOC Group", id: "PAY-7810", plan: "Free", amount: "AED 1,200", status: "Successful" },
  { name: "Nora Al-Zaabi", id: "PAY-7816", plan: "Tashy", amount: "AED 3,595", status: "Pending" },
  { name: "Careem Networks", id: "PAY-7818", plan: "Str/pc", amount: "AED 580", status: "Failed" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl bg-[#111827] border border-white/5 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
          <Icon className="h-4 w-4 text-white/50" />
        </div>
        <span className="text-xs font-medium text-[#00E5A0]">↑ {change}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-white/40 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-[#00E5A0]/10 text-[#00E5A0]",
    Suspended: "bg-red-500/10 text-red-400",
    Pending: "bg-amber-500/10 text-amber-400",
    Successful: "bg-[#00E5A0]/10 text-[#00E5A0]",
    Failed: "bg-red-500/10 text-red-400",
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${map[status] ?? "bg-white/10 text-white/50"}`}>
      {status}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Users" value="12,847" change="+8.2%" />
        <StatCard icon={UserCheck} label="Total Candidates" value="11,203" change="+9.1%" />
        <StatCard icon={Building2} label="Total Companies" value="1,644" change="+5.4%" />
        <StatCard icon={Briefcase} label="Active Jobs" value="2,318" change="+4.7%" />
        <StatCard icon={FileText} label="Applications Today" value="289" change="+23.5%" />
        <StatCard icon={DollarSign} label="Yearly Revenue" value="AED 88,400" change="+10.7%" />
        <StatCard icon={Star} label="Active Subscriptions" value="1,355" change="+3.2%" />
        <StatCard icon={CreditCard} label="Credits Sold" value="38,420" change="+11.3%" />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-3 gap-4">
        {/* Revenue Overview */}
        <div className="col-span-2 rounded-xl bg-[#111827] border border-white/5 p-5">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-sm font-semibold text-white">Revenue Overview</p>
              <p className="text-xs text-white/40">Subscription + Credits breakdown</p>
            </div>
            <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-md">Last 7 months</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00E5A0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00E5A0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis dataKey="month" tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={(v: number) => `${v / 1000}k`} />
              <Tooltip
                contentStyle={{ background: "#1f2937", border: "1px solid #ffffff10", borderRadius: 8 }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#00E5A0" }}
              />
              <Area type="monotone" dataKey="value" stroke="#00E5A0" strokeWidth={2} fill="url(#revGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Credit Usage */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <p className="text-sm font-semibold text-white mb-0.5">Credit Usage</p>
          <p className="text-xs text-white/40 mb-3">By action type</p>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie data={creditUsageData} cx="50%" cy="50%" innerRadius={40} outerRadius={65}
                  dataKey="value" stroke="none">
                  {creditUsageData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 mt-2">
            {creditUsageData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="text-[11px] text-white/60">{item.name}</span>
                </div>
                <span className="text-[11px] text-white/60">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-2 gap-4">
        {/* User Growth */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <p className="text-sm font-semibold text-white mb-4">User Growth</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis dataKey="month" tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#1f2937", border: "1px solid #ffffff10", borderRadius: 8 }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#00E5A0" }}
              />
              <Bar dataKey="users" fill="#00E5A0" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications Trend */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <p className="text-sm font-semibold text-white mb-4">Applications Trend (Weekly)</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={appsTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
              <XAxis dataKey="day" tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#ffffff40", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#1f2937", border: "1px solid #ffffff10", borderRadius: 8 }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#6366f1" }}
              />
              <Line type="monotone" dataKey="apps" stroke="#6366f1" strokeWidth={2}
                dot={{ fill: "#6366f1", r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Recent Candidates */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-white">Recent Candidates</p>
            <button className="text-xs text-[#00E5A0] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentCandidates.map((c) => (
              <div key={c.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: c.color }}
                  >
                    {c.initials}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{c.name}</p>
                    <p className="text-[10px] text-white/40">{c.location} · {c.plan}</p>
                  </div>
                </div>
                <StatusBadge status={c.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Pending Verification */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-white">Pending Verification</p>
            <button className="text-xs text-[#00E5A0] hover:underline">Review</button>
          </div>
          <div className="space-y-3">
            {pendingVerification.map((p) => (
              <div key={p.name} className="rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: p.color }}
                  >
                    {p.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">{p.name}</p>
                    <p className="text-[10px] text-white/40">{p.location}</p>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-[#00E5A0]/10 hover:bg-[#00E5A0]/20 text-[#00E5A0] text-xs font-semibold py-1.5 rounded-md transition-colors">
                  ✓ Approve
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Payments */}
        <div className="rounded-xl bg-[#111827] border border-white/5 p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-white">Recent Payments</p>
            <button className="text-xs text-[#00E5A0] hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {recentPayments.map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-white">{p.name}</p>
                  <p className="text-[10px] text-white/40">{p.id} · {p.plan}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-semibold text-white">{p.amount}</span>
                  <StatusBadge status={p.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
