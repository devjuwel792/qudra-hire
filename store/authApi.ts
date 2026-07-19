import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "./index";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://10.10.29.169:8020/api/v1";

// ─── Response shape ───────────────────────────────────────────────────────────

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  image: string | null;
  address1: string | null;
  phone1: string | null;
}

export interface LoginData {
  refresh: string;
  access: string;
  user: AuthUser;
}

export interface RegisterData {
  id: string;
  email: string;
  access: string;
  refresh: string;
}

interface ApiResponse<T> {
  success: boolean;
  details: string;
  code: string;
  status_code: number;
  data: T;
}

// ─── Request payload types ────────────────────────────────────────────────────

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export interface ResetPasswordPayload {
  email: string;
  otp: string;
  new_password: string;
  confirm_password: string;
}

export interface ChangePasswordPayload {
  password: string;
  new_password: string;
  confirm_password: string;
}

// ─── Admin Candidate types ────────────────────────────────────────────────────

export interface AdminCandidateListItem {
  id: number;
  full_name: string;
  email: string;
  location: string;
  credits: number;
  subscription: string;
  is_suspended: boolean;
  registered: string;
}

export interface AdminCandidateDetail {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  credits: number;
  current_plan: string | null;
  is_suspended: boolean;
  ats_score: number;
  registered: string;
}

export interface AdminCandidatePatchPayload {
  id: number;
  full_name?: string;
  email?: string;
  phone?: string;
  country?: string;
  plan_id?: string;
}

// ─── Admin Dashboard types ────────────────────────────────────────────────────

export interface DashboardCard {
  value: number | string;
  change: string;
}

export interface DashboardDataset {
  label: string;
  data: number[];
}

export interface DashboardRevenueOverview {
  title: string;
  subtitle: string;
  period: string;
  labels: string[];
  datasets: DashboardDataset[];
}

export interface DashboardPlanItem {
  name: string;
  value: number;
}

export interface DashboardPlanDistribution {
  title: string;
  subtitle: string;
  data: DashboardPlanItem[];
}

export interface DashboardUserGrowth {
  title: string;
  labels: string[];
  data: number[];
}

export interface DashboardApplicationsTrend {
  title: string;
  labels: string[];
  data: number[];
}

export interface DashboardRecentCandidate {
  name: string;
  email: string;
  designations: string;
  plan: string;
  initials: string;
}

export interface DashboardPendingVerification {
  company_name: string;
  industry: string;
  location: string;
  status: string;
}

export interface DashboardRecentPayment {
  candidate_name: string;
  designation: string;
  amount: string;
  status: string;
}

export interface DashboardData {
  cards: {
    total_users: DashboardCard;
    total_candidates: DashboardCard;
    total_companies: DashboardCard;
    active_jobs: DashboardCard;
    applications_today: DashboardCard;
    yearly_revenue: DashboardCard;
    active_subscriptions: DashboardCard;
    premium_subscriptions: DashboardCard;
  };
  revenue_overview: DashboardRevenueOverview;
  plan_distribution: DashboardPlanDistribution;
  user_growth: DashboardUserGrowth;
  applications_trend: DashboardApplicationsTrend;
  recent_candidates: DashboardRecentCandidate[];
  pending_verifications: DashboardPendingVerification[];
  recent_payments: DashboardRecentPayment[];
}

// ─── Admin Company types ──────────────────────────────────────────────────────

export interface AdminCompanyListItem {
  id: number;
  company_name: string;
  email: string;
  country: string | null;
  active_jobs: number;
  credits: number;
  approval_status: string;
  is_suspended: boolean;
  since: string;
  subscription:string;
}

export interface AdminCompanyDetail {
  id: number;
  company_name: string;
  email: string;
  contact_person: string | null;
  phone: string | null;
  country: string | null;
  active_jobs: number;
  current_plan: string | null;
  subsription: string | null;
  approval_status: string;
  is_suspended: boolean;
  is_licence_verified: boolean;
  rejection_reason: string | null;
  logo: string | null;
  about: string | null;
  licence_number: string | null;
  since: string;
}

export interface AdminCompanyPatchPayload {
  id: number;
  company_name?: string;
  email?: string;
  contact_person?: string;
  phone?: string;
  country?: string;
  plan_id?: string;
}

export interface AdminCompanyRejectPayload {
  id: number;
  reason: string;
}

// ─── RTK Query API ────────────────────────────────────────────────────────────

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // Attach Bearer token from Redux state for authenticated endpoints
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["AdminCandidates", "AdminCompanies", "AdminDashboard"],
  endpoints: (builder) => ({
    // POST /auth/login/email/
    loginWithEmail: builder.mutation<ApiResponse<LoginData>, LoginPayload>({
      query: (body) => ({
        url: "auth/login/email/",
        method: "POST",
        body,
      }),
    }),

    // POST /auth/register/candidate/  (multipart/form-data)
    registerCandidate: builder.mutation<ApiResponse<RegisterData>, FormData>({
      query: (formData) => ({
        url: "auth/register/candidate/",
        method: "POST",
        body: formData,
        // Don't set Content-Type so the browser sets it with the boundary
        formData: true,
      }),
    }),

    // POST /auth/register/company/  (multipart/form-data)
    registerCompany: builder.mutation<ApiResponse<RegisterData>, FormData>({
      query: (formData) => ({
        url: "auth/register/company/",
        method: "POST",
        body: formData,
        formData: true,
      }),
    }),

    // POST /auth/password/forgot/
    forgotPassword: builder.mutation<ApiResponse<null>, ForgotPasswordPayload>({
      query: (body) => ({
        url: "auth/password/forgot/",
        method: "POST",
        body,
      }),
    }),

    // POST /auth/password/verify/
    verifyOtp: builder.mutation<ApiResponse<null>, VerifyOtpPayload>({
      query: (body) => ({
        url: "auth/password/verify/",
        method: "POST",
        body,
      }),
    }),

    // POST /auth/password/reset/
    resetPassword: builder.mutation<ApiResponse<null>, ResetPasswordPayload>({
      query: (body) => ({
        url: "auth/password/reset/",
        method: "POST",
        body,
      }),
    }),

    // POST /auth/password/change/old/  (requires auth)
    changePassword: builder.mutation<ApiResponse<null>, ChangePasswordPayload>({
      query: (body) => ({
        url: "auth/password/change/old/",
        method: "POST",
        body,
      }),
    }),

    // ── Admin Dashboard ─────────────────────────────────────────────────────

    // GET /admin/dashboard/
    getAdminDashboard: builder.query<ApiResponse<DashboardData>, void>({
      query: () => "admin/dashboard/",
      providesTags: ["AdminDashboard"],
    }),

    // ── Admin Candidate endpoints ─────────────────────────────────────────────

    // GET /admin/candidates/
    getAdminCandidates: builder.query<ApiResponse<AdminCandidateListItem[]>, void>({
      query: () => "admin/candidates/",
      providesTags: ["AdminCandidates"],
    }),

    // GET /admin/candidates/{id}/
    getAdminCandidateById: builder.query<ApiResponse<AdminCandidateDetail>, number>({
      query: (id) => `admin/candidates/${id}/`,
      providesTags: (_result, _error, id) => [{ type: "AdminCandidates", id }],
    }),

    // PATCH /admin/candidates/{id}/
    patchAdminCandidate: builder.mutation<
      ApiResponse<AdminCandidateDetail>,
      AdminCandidatePatchPayload
    >({
      query: ({ id, ...body }) => ({
        url: `admin/candidates/${id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        "AdminCandidates",
        { type: "AdminCandidates", id },
      ],
    }),

    // DELETE /admin/candidates/{id}/
    deleteAdminCandidate: builder.mutation<ApiResponse<null>, number>({
      query: (id) => ({
        url: `admin/candidates/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminCandidates"],
    }),

    // ── Admin Company endpoints ───────────────────────────────────────────────

    // GET /admin/companies/
    getAdminCompanies: builder.query<ApiResponse<AdminCompanyListItem[]>, void>({
      query: () => "admin/companies/",
      providesTags: ["AdminCompanies"],
    }),

    // GET /admin/companies/{id}/
    getAdminCompanyById: builder.query<ApiResponse<AdminCompanyDetail>, number>({
      query: (id) => `admin/companies/${id}/`,
      providesTags: (_r, _e, id) => [{ type: "AdminCompanies", id }],
    }),

    // PATCH /admin/companies/{id}/
    patchAdminCompany: builder.mutation<ApiResponse<AdminCompanyDetail>, AdminCompanyPatchPayload>({
      query: ({ id, ...body }) => ({
        url: `admin/companies/${id}/`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_r, _e, { id }) => ["AdminCompanies", { type: "AdminCompanies", id }],
    }),

    // DELETE /admin/companies/{id}/
    deleteAdminCompany: builder.mutation<ApiResponse<null>, number>({
      query: (id) => ({ url: `admin/companies/${id}/`, method: "DELETE" }),
      invalidatesTags: ["AdminCompanies"],
    }),

    // POST /admin/companies/{id}/approve/
    approveAdminCompany: builder.mutation<ApiResponse<null>, number>({
      query: (id) => ({ url: `admin/companies/${id}/approve/`, method: "POST" }),
      invalidatesTags: (_r, _e, id) => ["AdminCompanies", { type: "AdminCompanies", id }],
    }),

    // POST /admin/companies/{id}/reject/
    rejectAdminCompany: builder.mutation<ApiResponse<null>, AdminCompanyRejectPayload>({
      query: ({ id, reason }) => ({
        url: `admin/companies/${id}/reject/`,
        method: "POST",
        body: { reason },
      }),
      invalidatesTags: (_r, _e, { id }) => ["AdminCompanies", { type: "AdminCompanies", id }],
    }),

    // POST /admin/companies/{id}/reset-password/
    resetAdminCompanyPassword: builder.mutation<ApiResponse<{ new_password: string }>, number>({
      query: (id) => ({ url: `admin/companies/${id}/reset-password/`, method: "POST" }),
    }),
  }),
});

export const {
  useLoginWithEmailMutation,
  useRegisterCandidateMutation,
  useRegisterCompanyMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  // Admin Dashboard
  useGetAdminDashboardQuery,
  // Admin Candidates
  useGetAdminCandidatesQuery,
  useGetAdminCandidateByIdQuery,
  usePatchAdminCandidateMutation,
  useDeleteAdminCandidateMutation,
  // Admin Companies
  useGetAdminCompaniesQuery,
  useGetAdminCompanyByIdQuery,
  usePatchAdminCompanyMutation,
  useDeleteAdminCompanyMutation,
  useApproveAdminCompanyMutation,
  useRejectAdminCompanyMutation,
  useResetAdminCompanyPasswordMutation,
} = authApi;
