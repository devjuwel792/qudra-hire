"use client";

import { Bell } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="flex items-center justify-between px-7 py-4 bg-[#0D1117] border-b border-white/5">
      <div>
        <p className="text-white/40 text-sm">
          <span className="text-white font-semibold text-lg">Welcome</span>
          <span className="text-white/60">, Admin Dashboard</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <Bell className="h-4 w-4 text-white/60" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-white">
          SA
        </div>
      </div>
    </header>
  );
}
