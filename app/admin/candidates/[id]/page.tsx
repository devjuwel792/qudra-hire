"use client";

import { use } from "react";
import { ChevronLeft, MapPin, Phone, Mail, Calendar, CheckCircle2, ShieldOff, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetAdminCandidateByIdQuery, useDeleteAdminCandidateMutation } from "@/store/authApi";

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
  return new Date(iso).toLocaleDateString("en-CA");
}

export default function CandidateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const id = parseInt(resolvedParams.id, 10);

  const { data, isLoading, isError } = useGetAdminCandidateByIdQuery(id);
  const [deleteCandidate] = useDeleteAdminCandidateMutation();

  const c = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#6366f1] border-t-transparent" />
      </div>
    );
  }

  if (isError || !c) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-400">Failed to load candidate details.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-sm text-[#6366f1] hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  const atsScore = (c as any).ats_score ?? 88;
  const designations = (c as any).designations ?? 2;
  const activePlans = (c as any).active_plans ?? 2;
  const jobsApplied = (c as any).jobs_applied ?? 11;

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this candidate?")) {
      await deleteCandidate(id);
      router.push("/admin/candidates");
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </button>
        <h1 className="text-2xl font-bold text-foreground">{c.full_name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-4">
          {/* Profile Card */}
          <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center pb-6 border-b border-border">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-3"
                style={{ background: avatarColor(c.id) }}
              >
                {getInitials(c.full_name)}
              </div>
              <h2 className="text-lg font-bold text-foreground">{c.full_name}</h2>
              <p className="text-xs text-muted-foreground mb-3">{c.email}</p>
              <div className="flex gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#21c55e]/10 border border-[#21c55e]/20 text-[#21c55e]">
                  {c.is_suspended ? "Suspended" : "Active"}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#6366f1]">
                  {c.current_plan || "Premium"}
                </span>
              </div>
            </div>
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{c.phone || "+971 50 234 5678"}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{c.country || "UAE"}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{c.email}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined {formatDate(c.registered)}</span>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
            <h3 className="text-xs font-bold text-foreground mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python", "Communication", "Teamwork"].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-[10px] font-medium border border-border/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Summary */}
          <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
            <h3 className="text-xs font-bold text-foreground mb-3">Profile Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">ATS Score</span>
                <span className="font-bold text-[#21c55e]">{atsScore}/100</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Designations</span>
                <span className="font-semibold text-foreground">{designations}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Active Plans</span>
                <span className="font-semibold text-foreground">{activePlans}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Jobs Applied</span>
                <span className="font-semibold text-foreground">{jobsApplied}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-4">

          {/* Designation Plans */}
          <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-foreground">Designation Plans</h3>
              <p className="text-[11px] text-muted-foreground">Each designation requires its own subscription. Changing designation = new plan required.</p>
            </div>

            <div className="space-y-3">
              {/* Plan 1 */}
              <div className="rounded-lg border border-border bg-muted/20 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1]">
                      <ShieldOff className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">Software Engineer</span>
                        <span className="text-[10px] text-muted-foreground">Technology</span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#21c55e]/10 text-[#21c55e]">Active</span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#6366f1]/10 text-[#6366f1]">Premium</span>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Started 2024-06-12</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Expires 2024-07-12</span>
                        <span>$ AED 79/mo</span>
                        <span>{jobsApplied} jobs applied</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Auto Apply", "AI Resume Tailoring", "ATS Score", "Priority Matching", "Interview Prep"].map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-[9px] font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md border border-border/50">
                      <CheckCircle2 className="w-3 h-3 text-[#6366f1]" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plan 2 */}
              <div className="rounded-lg border border-border bg-muted/20 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <ShieldOff className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground">DevOps Engineer</span>
                        <span className="text-[10px] text-muted-foreground">Technology</span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#21c55e]/10 text-[#21c55e]">Active</span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-muted text-muted-foreground">Free</span>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Started 2024-06-20</span>
                        <span className="text-[#21c55e]">No expiry (Free)</span>
                        <span>3 jobs applied</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Browse Jobs", "Basic AI Match", "Apply Manually", "Application Tracking"].map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-[9px] font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md border border-border/50">
                      <CheckCircle2 className="w-3 h-3 text-muted-foreground" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application History */}
          <div className="rounded-xl bg-card border border-border p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-foreground">Application History</h3>
              <p className="text-[11px] text-muted-foreground">Jobs applied under each designation</p>
            </div>

            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldOff className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-foreground">Software Engineer</span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#6366f1]/10 text-[#6366f1]">Premium</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">8 applications</span>
                </div>

                <div className="flex items-center justify-between pl-6">
                  <div>
                    <span className="block text-xs font-semibold text-foreground">Senior React Developer</span>
                    <span className="text-[10px] text-muted-foreground">Talabat Technologies - 2024-07-06</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-[#21c55e]">94%</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">Interview</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldOff className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-foreground">DevOps Engineer</span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-muted text-muted-foreground border border-border">Starter</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">3 applications</span>
                </div>
                <div className="pl-6">
                  <p className="text-[10px] text-muted-foreground">No recorded applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <button className="py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-sm font-semibold text-foreground transition-colors shadow-sm">
          Reset Password
        </button>
        <button className="py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-sm font-semibold text-foreground transition-colors shadow-sm">
          Suspend
        </button>
        <button
          onClick={handleDelete}
          className="py-2.5 rounded-lg border border-red-500/20 bg-card hover:bg-red-500/10 text-sm font-semibold text-red-500 transition-colors shadow-sm"
        >
          Delete
        </button>
      </div>

    </div>
  );
}
