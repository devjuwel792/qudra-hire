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
  AlertCircle,
} from "lucide-react";
import { useGetAdminDashboardQuery } from "@/store/authApi";
import { Skeleton } from "@/components/ui/skeleton";

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
        <span className="text-xs font-medium text-[#21c55e]">↑ {change}</span>
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function StatCardSkeleton() {
  return (
    <div className="rounded-xl bg-card border border-border p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-start justify-between">
        <Skeleton className="w-9 h-9 rounded-lg" />
        <Skeleton className="w-12 h-4" />
      </div>
      <div>
        <Skeleton className="w-20 h-7 mb-1" />
        <Skeleton className="w-24 h-3" />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Successful: "bg-[#21c55e]/10 text-[#21c55e]",
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

const PLAN_COLORS = ["#6366f1", "#21c55e", "#f59e0b", "#8b5cf6", "#ef4444"];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AdminDashboardPage() {
  const { data, isLoading, isError, error } = useGetAdminDashboardQuery();

  if (isError) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <div className="rounded-xl bg-card border border-border p-10 flex flex-col items-center justify-center gap-3 shadow-sm">
          <AlertCircle className="w-10 h-10 text-red-500" />
          <p className="text-sm font-medium text-foreground">Failed to load dashboard data</p>
          <p className="text-xs text-muted-foreground">
            {(error as { data?: { details?: string } })?.data?.details ?? "Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  const d = data?.data;

  // Transform revenue overview into chart-ready format
  const revenueData = d
    ? d.revenue_overview.labels.map((label, i) => {
        const entry: Record<string, string | number> = { month: label };
        d.revenue_overview.datasets.forEach((ds) => {
          entry[ds.label] = ds.data[i];
        });
        return entry;
      })
    : [];

  const userGrowthData = d
    ? d.user_growth.labels.map((label, i) => ({
        month: label,
        users: d.user_growth.data[i],
      }))
    : [];

  const appsTrendData = d
    ? d.applications_trend.labels.map((label, i) => ({
        day: label,
        apps: d.applications_trend.data[i],
      }))
    : [];

  const planDistributionData = d
    ? d.plan_distribution.data.map((item, i) => ({
        ...item,
        color: PLAN_COLORS[i % PLAN_COLORS.length],
      }))
    : [];

  // Find the revenue dataset for the area chart (Total Revenue)
  const revenueDataset = d?.revenue_overview.datasets.find((ds) =>
    ds.label.toLowerCase().includes("revenue")
  );
  const revenueKey = revenueDataset?.label ?? d?.revenue_overview.datasets[1]?.label ?? "";

  const tooltipStyle = {
    background: "hsl(var(--card))",
    border: "1px solid hsl(var(--border))",
    borderRadius: 8,
    color: "hsl(var(--foreground))",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => <StatCardSkeleton key={i} />)
        ) : d ? (
          <>
            <StatCard icon={Users} label="Total Users" value={String(d.cards.total_users.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.total_users.change} />
            <StatCard icon={UserCheck} label="Total Candidates" value={String(d.cards.total_candidates.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.total_candidates.change} />
            <StatCard icon={Building2} label="Total Companies" value={String(d.cards.total_companies.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.total_companies.change} />
            <StatCard icon={Briefcase} label="Active Jobs" value={String(d.cards.active_jobs.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.active_jobs.change} />
            <StatCard icon={FileText} label="Applications Today" value={String(d.cards.applications_today.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.applications_today.change} />
            <StatCard icon={DollarSign} label="Yearly Revenue" value={String(d.cards.yearly_revenue.value)} change={d.cards.yearly_revenue.change} />
            <StatCard icon={Star} label="Active Subscriptions" value={String(d.cards.active_subscriptions.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} change={d.cards.active_subscriptions.change} />
            <StatCard icon={Sparkles} label="Premium Subscriptions" value={String(d.cards.premium_subscriptions.value)} change={d.cards.premium_subscriptions.change} />
          </>
        ) : null}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Overview */}
        <div className="col-span-2 rounded-xl bg-card border border-border p-5 shadow-sm">
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-sm font-semibold text-foreground">{d?.revenue_overview.title ?? "Revenue Overview"}</p>
              <p className="text-xs text-muted-foreground">{d?.revenue_overview.subtitle ?? ""}</p>
            </div>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-md">{d?.revenue_overview.period ?? ""}</span>
          </div>
          {isLoading ? (
            <Skeleton className="w-full h-[200px] mt-2" />
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#21c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#21c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
                <XAxis dataKey="month" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false}
                  tickFormatter={(v: number) => `${v / 1000}k`} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: "#21c55e" }}
                />
                <Area type="monotone" dataKey={revenueKey} stroke="#21c55e" strokeWidth={2} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Plan Distribution */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-0.5">{d?.plan_distribution.title ?? "Plan Distribution"}</p>
          <p className="text-xs text-muted-foreground mb-3">{d?.plan_distribution.subtitle ?? ""}</p>
          {isLoading ? (
            <Skeleton className="w-full h-[160px]" />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Growth */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-4">{d?.user_growth.title ?? "User Growth"}</p>
          {isLoading ? (
            <Skeleton className="w-full h-[160px]" />
          ) : (
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={userGrowthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
                <XAxis dataKey="month" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: "#21c55e" }}
                />
                <Bar dataKey="users" fill="#21c55e" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Applications Trend */}
        <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
          <p className="text-sm font-semibold text-foreground mb-4">{d?.applications_trend.title ?? "Applications Trend"}</p>
          {isLoading ? (
            <Skeleton className="w-full h-[160px]" />
          ) : (
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={appsTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.05} />
                <XAxis dataKey="day" tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "currentColor", opacity: 0.5, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={tooltipStyle}
                  itemStyle={{ color: "#6366f1" }}
                />
                <Line type="monotone" dataKey="apps" stroke="#6366f1" strokeWidth={2}
                  dot={{ fill: "#6366f1", r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          )}
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
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-8 h-8 rounded-full" />
                      <div>
                        <Skeleton className="w-24 h-3 mb-1" />
                        <Skeleton className="w-16 h-2" />
                      </div>
                    </div>
                    <Skeleton className="w-14 h-5 rounded" />
                  </div>
                ))
              : d?.recent_candidates.map((c) => (
                  <div key={c.email} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-[#6366f1]">
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
            {isLoading
              ? Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-8 h-8 rounded-lg" />
                      <div>
                        <Skeleton className="w-28 h-3 mb-1" />
                        <Skeleton className="w-12 h-2" />
                      </div>
                    </div>
                    <Skeleton className="w-14 h-5 rounded" />
                  </div>
                ))
              : d?.pending_verifications.map((p) => (
                  <div key={p.company_name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-[#f59e0b]/10 text-[#f59e0b]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">{p.company_name}</p>
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
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <Skeleton className="w-24 h-3 mb-1" />
                      <Skeleton className="w-20 h-2" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Skeleton className="w-14 h-3" />
                      <Skeleton className="w-14 h-4" />
                    </div>
                  </div>
                ))
              : d?.recent_payments.map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-foreground">{p.candidate_name}</p>
                      <p className="text-[10px] text-muted-foreground">{p.designation}</p>
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
