"use client";

import CompanySidebar from "@/components/company/CompanySidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark min-h-screen w-full bg-[#080C14] text-slate-100 flex flex-row overflow-hidden font-sans">
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

      <main className="flex-1 h-screen overflow-y-auto bg-[#080C14]">
        {/* Mobile header */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[#1E293B]/40 bg-[#080C14]/90 backdrop-blur-md px-4 py-3 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="text-lg font-bold text-white">CareerSprint</span>
          <div className="w-6" />
        </div>
        {children}
      </main>
    </div>
  );
}
