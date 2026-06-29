"use client";

import CandidateSidebar from "@/components/candidate/CandidateSidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark min-h-screen w-full bg-[#080C14] text-slate-100 flex flex-row overflow-hidden font-sans">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <CandidateSidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full">
            <CandidateSidebar />
          </div>
        </div>
      )}

      <main className="flex-1 h-screen flex flex-col bg-[#080C14] overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 border-b border-[#1E293B]/40 flex items-center px-4 md:px-8 flex-shrink-0 gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold text-white">Welcome</h1>
        </header>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
