"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  FileText,
  ClipboardList,
  MessageSquare,
  Wallet,
  LogOut,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Browse jobs", href: "/candidate", icon: Briefcase },
  { label: "My CV", href: "/candidate/cv", icon: FileText },
  { label: "Applications", href: "/candidate/applications", icon: ClipboardList },
  { label: "Inbox", href: "/candidate/inbox", icon: MessageSquare },
  { label: "Wallet", href: "/candidate/wallet", icon: Wallet },
];

export default function CandidateSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-[#1E293B]/40 bg-[#0B0F19] text-white">
      {/* Brand */}
      <div className="flex items-center gap-1.5 border-b border-[#1E293B]/40 px-6 py-5 font-sans text-xl font-bold tracking-tight">
        <Link href="/"><span className="text-white">Career</span><span className="text-[#4BC957]">Sprint</span></Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1.5 px-4 py-6">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/candidate"
              ? pathname === "/candidate"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-[#162032] text-white border border-[#2A3C58] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)]"
                  : "text-slate-400 hover:bg-[#111827]/50 hover:text-slate-200"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-[#4BC957]" : "text-slate-400 group-hover:text-slate-200"
                )}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="border-t border-[#1E293B]/40 p-4 bg-[#080C14]">
        <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#111827]/50 transition-colors cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#4BC957] to-[#059669] flex items-center justify-center font-bold text-white text-sm shadow-md">
            LM
          </div>
          <div className="flex-1 min-w-0">
            <p className=" font-semibold text-slate-200 truncate">Majid Al-Mansoori</p>
            <p className="text-[13px] text-slate-500 truncate">Majid@example.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}

