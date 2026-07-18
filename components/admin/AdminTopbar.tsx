"use client";

import { Bell } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="flex items-center justify-between px-7 py-4 bg-background border-b border-border">
      <div>
        <p className="text-muted-foreground text-sm">
          <span className="text-foreground font-semibold text-lg">Welcome</span>
          <span className="text-muted-foreground/80">, Admin Dashboard</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
          <Bell className="h-4 w-4 text-foreground/80" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-white">
          SA
        </div>
      </div>
    </header>
  );
}
