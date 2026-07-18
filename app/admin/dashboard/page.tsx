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
  Sparkles,
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

const planDistributionData = [
  { name: "Premium", value: 5, color: "#6366f1" },
  { name: "Starter (Free)", value: 4, color: "#00E5A0" },
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
  { initials: "AA", name: "Ahmed Al-Rashidi", designations: "2 designations", plan: "Premium", color: "#6366f1" },
  { initials: "SA", name: "Sara Al-Mansouri", designations: "1 designation", plan: "Premium", color: "#8b5cf6" },
  { initials: "KI", name: "Khalid Ibrahim", designations: "2 designations", plan: "Starter", color: "#10b981" },
  { initials: "NA", name: "Nora Al-Zaabi", designations: "2 designations", plan: "Premium", color: "#f59e0b" },
];

const pendingVerification = [
  { initials: "CN", name: "Careem Networks", location: "UAE", status: "Pending", color: "#f59e0b" },
];

const recentPayments = [
  { name: "Ahmed Al-Rashidi", role: "Software Engineer", amount: "AED 79", status: "Successful" },
  { name: "Nora Al-Zaabi", role: "Data Scientist", amount: "AED 791", status: "Successful" },
  { name: "Sara Al-Mansouri", role: "Marketing Manager", amount: "AED 791", status: "Successful" },
  { name: "Omar Hussain", role: "Civil Engineer", amount: "AED 79", status: "Failed" },
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
    <div className="rounded-xl bg-card border border-border p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#6366f1]" />
        </div>
        <span className="text-xs font-medium text-[#00E5A0]">↑ {change}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Successful: "bg-[#00E5A0]/10 text-[#00E5A0]",
    Failed: "bg-red-500/10 text-red-500",
    Pending: "bg-amber-500/10 text-amber-500",
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${map[status] ?? "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
}

function PlanBadge({ plan }: { plan: string }) {
  return (
    <span className="px-2.5 py-1 rounded bg-[#6366f1]/10 text-[#6366f1] text-[10px] font-semibold">
      {plan}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Users" value="12,847" change="+8.2%" />
        <StatCard icon={UserCheck} label="Total Candidates" value="11,203" change="+9.1%" />
        <StatCard icon={Building2} label="Total Companies" value="1,644" change="+5.4%" />
        <StatCard icon={Briefcase} label="Active Jobs" value="2,318" change="+4.7%" />
        <StatCard icon={FileText} label="Applications Today" value="289" change="+23.5%" />
        <StatCard icon={DollarSign} label="Yearly Revenue" value="AED 88,400" change="+10.7%" />
        <StatCard icon={Star} label="Active Subscriptions" value="1,355" change="+3.2%" />
        <StatCard icon={Sparkles} label="Premium Subscriptions" value="5" change="+11.3%" />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Overview */}
        <div className="col-span-2 rounded-xl bg-card border border-border p-5 shadow-sm">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-sm font-semibold text-foreground">Revenue Overview</p>
              <p className="text-xs text-muted-foreground">Subscription + Credits breakdown</p>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-md">Last 7 months</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00E5A0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00E5A0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
              <XAxis dataKey="month" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false}
                tickFormatter={(v: number) => `${v / 1000}k`} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--foreground))" }}
                itemStyle={{ color: "#00E5A0" }}
              />
              <Area type="monotone" dataKey="value" stroke="#00E5A0" strokeWidth={2} fill="url(#revGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Plan Distribution */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-0.5">Plan Distribution</p>
          <p className="text-xs text-muted-foreground mb-3">Active designation plans</p>
          <div className="flex-1 flex justify-center items-center">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={planDistributionData} cx="50%" cy="50%" innerRadius={50} outerRadius={70}
                  dataKey="value" stroke="none">
                  {planDistributionData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {planDistributionData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span className="text-[11px] text-muted-foreground">{item.name}</span>
                </div>
                <span className="text-[11px] text-foreground font-semibold">{item.value} plans</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Growth */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-4">User Growth</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
              <XAxis dataKey="month" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--foreground))" }}
                itemStyle={{ color: "#00E5A0" }}
              />
              <Bar dataKey="users" fill="#00E5A0" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications Trend */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-4">Applications Trend (Weekly)</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={appsTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
              <XAxis dataKey="day" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--foreground))" }}
                itemStyle={{ color: "#6366f1" }}
              />
              <Line type="monotone" dataKey="apps" stroke="#6366f1" strokeWidth={2}
                dot={{ fill: "#6366f1", r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Candidates */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">Recent Candidates</p>
            <button className="text-xs text-muted-foreground hover:text-foreground">View All</button>
          </div>
          <div className="space-y-4">
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
                    <p className="text-xs font-medium text-foreground">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.designations}</p>
                  </div>
                </div>
                <PlanBadge plan={c.plan} />
              </div>
            ))}
          </div>
        </div>

        {/* Pending Verification */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">Pending Verification</p>
            <button className="text-xs text-muted-foreground hover:text-foreground">Review</button>
          </div>
          <div className="space-y-4">
            {pendingVerification.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-[#f59e0b]/10 text-[#f59e0b]"
                  >
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">{p.location}</p>
                  </div>
                </div>
                <StatusBadge status={p.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Payments */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-foreground">Recent Payments</p>
            <button className="text-xs text-muted-foreground hover:text-foreground">View All</button>
          </div>
          <div className="space-y-4">
            {recentPayments.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-foreground">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground">{p.role}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-semibold text-foreground">{p.amount}</span>
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
