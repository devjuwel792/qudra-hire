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
  ChevronRight,
  ChevronDown,
  Plus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const router = useRouter()

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
          if (label === "My profile") {
            return (
              <DropdownMenu key={href}>
                <DropdownMenuTrigger className={cn(
                  "w-full group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 outline-none",
                  isActive
                    ? "bg-white/10 text-white border border-white/10 shadow-sm"
                    : "text-slate-400 hover:bg-white/6 hover:text-white"
                )}>
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isActive ? "text-[#4BC957]" : "text-slate-500 group-hover:text-white"
                      )}
                    />
                    <span>{label}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 p-2 shadow-xl shadow-black/5 dark:shadow-black/50" 
                  side="right" 
                  align="start"
                  sideOffset={16}
                >
                  <DropdownMenuItem onClick={() => router.push('/candidate/profile/1')} className="flex items-center justify-between text-slate-900 dark:text-white hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-white/10 dark:focus:text-white rounded-md px-3 py-2.5">
                    <span className="font-semibold text-sm">Senior Product Designer</span>
                    <ChevronRight className="h-4 w-4 text-slate-500 dark:text-white/70" />
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/candidate/profile/2')} className="flex items-center justify-between text-slate-700 dark:text-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-white/10 dark:focus:text-white rounded-md px-3 py-2.5">
                    <span className="font-semibold text-sm">UX Research Lead</span>
                    <ChevronRight className="h-4 w-4 text-slate-500 dark:text-white/70" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-white/10 dark:focus:text-white rounded-md px-3 py-2.5">
                    <span className="text-sm">Add more</span>
                    <Plus className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-slate-200 dark:bg-white/10 my-1" />
                  <DropdownMenuItem className="text-red-600 dark:text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-500/10 dark:hover:text-red-400 cursor-pointer focus:bg-red-50 focus:text-red-700 dark:focus:bg-red-500/10 dark:focus:text-red-400 rounded-md px-3 py-2.5">
                    <span className="text-sm">Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

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

