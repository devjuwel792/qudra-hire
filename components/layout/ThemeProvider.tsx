"use client";

import React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  themes: string[];
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeClass(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "careersprint-theme",
  enableSystem = true,
}: {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
  themes?: string[];
  value?: Record<string, string>;
  nonce?: string;
  scriptProps?: unknown;
}) {
  const [theme, setThemeState] = React.useState<Theme>(() => defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light");
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    const initial = stored || defaultTheme;
    setThemeState(initial);
    const resolved = initial === "system" ? getSystemTheme() : (initial as "light" | "dark");
    setResolvedTheme(resolved);
    applyThemeClass(resolved);
    mountedRef.current = true;
  }, [storageKey, defaultTheme]);

  React.useEffect(() => {
    if (!mountedRef.current) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const resolved = getSystemTheme();
        setResolvedTheme(resolved);
        applyThemeClass(resolved);
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  React.useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key !== storageKey) return;
      const newTheme = (e.newValue || defaultTheme) as Theme;
      setThemeState(newTheme);
      const resolved = enableSystem && newTheme === "system" ? getSystemTheme() : (newTheme as "light" | "dark");
      setResolvedTheme(resolved);
      applyThemeClass(resolved);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [storageKey, defaultTheme, enableSystem]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {}
      const resolved = enableSystem && newTheme === "system" ? getSystemTheme() : (newTheme as "light" | "dark");
      setResolvedTheme(resolved);
      applyThemeClass(resolved);
    },
    [storageKey, enableSystem],
  );

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme, themes: ["light", "dark", "system"] }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
