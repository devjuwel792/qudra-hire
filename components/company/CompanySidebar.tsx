"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  Users,
  Calendar,
  MessageSquare,
  Wallet,
  Settings,
  LogOut,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Workspace",
    href: "/company",
    icon: Briefcase,
  },
  {
    label: "Candidates",
    href: "/company/candidates",
    icon: Users,
  },
  {
    label: "Manage Jobs",
    href: "/company/jobs",
    icon: Calendar,
  },
  {
    label: "Inbox",
    href: "/company/inbox",
    icon: MessageSquare,
  },
  {
    label: "Wallet",
    href: "/company/wallet",
    icon: Wallet,
  },
];

export default function CompanySidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-[#1E293B]/40 bg-[#0B0F19] text-white">
      {/* Brand logo */}
      <div className="flex items-center gap-2 border-b border-[#1E293B]/40 px-6 py-5">
        <div className="flex items-center gap-1.5 font-sans text-xl font-bold tracking-tight">
          <span className="text-white">Qudra</span>
          <span className="text-[#00D07C]">Hire</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 px-4 py-6">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            href === "/company"
              ? pathname === "/company"
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
                  isActive ? "text-[#00D07C]" : "text-slate-400 group-hover:text-slate-200"
                )}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile / Settings */}
      <div className="border-t border-[#1E293B]/40 p-4 bg-[#080C14]">
        <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-[#111827]/50 transition-colors cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#00D07C] to-[#059669] flex items-center justify-center font-bold text-white text-sm shadow-md">
            EN
          </div>
          <div className="flex-1 min-w-0">
            <p className=" font-semibold text-slate-200 truncate">Emirates NBD</p>
            <p className="text-[13px] text-slate-500 truncate">talent@emiratesnbd.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}
