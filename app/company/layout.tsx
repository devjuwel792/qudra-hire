"use client";

import CompanySidebar from "@/components/company/CompanySidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-row overflow-hidden font-sans">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <CompanySidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full">
            <CompanySidebar />
          </div>
        </div>
      )}

      <main className="flex-1 h-screen overflow-y-auto bg-background">
        {/* Mobile header */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur-md px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="text-lg font-bold text-foreground">CareerSprint</span>
          <ThemeToggle />
          <div className="w-6" />
        </div>
        {children}
      </main>
    </div>
  );
}
