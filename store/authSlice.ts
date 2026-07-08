import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthUser } from "./authApi";

const ACCESS_TOKEN_KEY = "cs_access_token";
const REFRESH_TOKEN_KEY = "cs_refresh_token";
const USER_KEY = "cs_user";

// ─── Helpers (safe – localStorage may not exist during SSR) ──────────────────

function loadFromStorage<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function saveToStorage(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota / security errors
  }
}

function removeFromStorage(key: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

// ─── State ────────────────────────────────────────────────────────────────────

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  /** email carried across forgot-password → verify-otp → reset-password flow */
  passwordResetEmail: string | null;
  /** otp carried from verify-otp → reset-password */
  passwordResetOtp: string | null;
}

function buildInitialState(): AuthState {
  return {
    accessToken: loadFromStorage<string>(ACCESS_TOKEN_KEY),
    refreshToken: loadFromStorage<string>(REFRESH_TOKEN_KEY),
    user: loadFromStorage<AuthUser>(USER_KEY),
    passwordResetEmail: null,
    passwordResetOtp: null,
  };
}

// ─── Slice ────────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: "auth",
  initialState: buildInitialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{
        access: string;
        refresh: string;
        user: AuthUser;
      }>
    ) {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      state.user = action.payload.user;

      saveToStorage(ACCESS_TOKEN_KEY, action.payload.access);
      saveToStorage(REFRESH_TOKEN_KEY, action.payload.refresh);
      saveToStorage(USER_KEY, action.payload.user);
    },

    /** Used after registration – we only get access/refresh, no full user object */
    setTokens(
      state,
      action: PayloadAction<{ access: string; refresh: string; email: string }>
    ) {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
      // Build a minimal user object so isAuthenticated checks pass
      state.user = {
        id: "",
        email: action.payload.email,
        role: "",
        first_name: "",
        last_name: "",
        image: null,
        address1: null,
        phone1: null,
      };

      saveToStorage(ACCESS_TOKEN_KEY, action.payload.access);
      saveToStorage(REFRESH_TOKEN_KEY, action.payload.refresh);
      saveToStorage(USER_KEY, state.user);
    },

    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.passwordResetEmail = null;
      state.passwordResetOtp = null;

      removeFromStorage(ACCESS_TOKEN_KEY);
      removeFromStorage(REFRESH_TOKEN_KEY);
      removeFromStorage(USER_KEY);
    },

    setPasswordResetEmail(state, action: PayloadAction<string>) {
      state.passwordResetEmail = action.payload;
    },

    setPasswordResetOtp(state, action: PayloadAction<string>) {
      state.passwordResetOtp = action.payload;
    },

    clearPasswordReset(state) {
      state.passwordResetEmail = null;
      state.passwordResetOtp = null;
    },
  },
});

export const {
  setCredentials,
  setTokens,
  logout,
  setPasswordResetEmail,
  setPasswordResetOtp,
  clearPasswordReset,
} = authSlice.actions;

export default authSlice.reducer;
