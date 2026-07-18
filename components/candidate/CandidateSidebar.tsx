"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  FileText,
  ClipboardList,
  MessageSquare,
  Wallet,
  Star,
  User,
  LogOut,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Browse jobs", href: "/candidate", icon: Briefcase },
  { label: "My CV", href: "/candidate/cv", icon: FileText },
  { label: "Applications", href: "/candidate/applications", icon: ClipboardList },
  { label: "Inbox", href: "/candidate/inbox", icon: MessageSquare },
  { label: "Subscription", href: "/candidate/subscription", icon: Star },
  { label: "My profile", href: "/candidate/profile", icon: User },
];

export default function CandidateSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-white/5 bg-[#0f172a] text-white">
      {/* Brand */}
      <div className="flex items-center gap-1.5 border-b border-white/5 px-6 py-5 font-sans text-xl font-bold tracking-tight">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="" width={180} height={60} className="block h-12 w-auto object-contain" />
        </Link>
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
                  ? "bg-white/10 text-white border border-white/10 shadow-sm"
                  : "text-slate-400 hover:bg-white/6 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-[#4BC957]" : "text-slate-500 group-hover:text-white"
                )}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="border-t border-white/5 p-4">
        <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/6 transition-colors cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#4BC957] to-emerald-400 flex items-center justify-center font-bold text-white text-sm shadow-md">
            LM
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate">Majid Al-Mansoori</p>
            <p className="text-[13px] text-slate-400 truncate">Majid@example.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </aside>
  );
}

