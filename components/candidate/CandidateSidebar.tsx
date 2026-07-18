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
    <aside className="flex h-screen w-64 flex-shrink-0 flex-col border-r border-border bg-card text-foreground">
      {/* Brand */}
      <div className="flex items-center gap-1.5 border-b border-border px-6 py-5 font-sans text-xl font-bold tracking-tight">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <div className="hidden dark:block">
            <Image src='/logo.png' height={700} width={700} className="w-48 h-auto" alt="logo" />
          </div>
          <div className="block dark:hidden">
            <Image src='/light-logo.png' height={700} width={700} className="w-48 h-auto" alt="logo" />
          </div>
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
                    ? "bg-muted text-foreground border border-border shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}>
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-colors",
                        isActive ? "text-[#4BC957]" : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                    <span>{label}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-card border border-border p-2 shadow-xl"
                  side="right"
                  align="start"
                  sideOffset={16}
                >
                  <DropdownMenuItem onClick={() => router.push('/candidate/profile/1')} className="flex items-center justify-between text-foreground hover:bg-muted hover:text-foreground cursor-pointer focus:bg-muted focus:text-foreground rounded-md px-3 py-2.5">
                    <span className="font-semibold text-sm">Senior Product Designer</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/candidate/profile/2')} className="flex items-center justify-between text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer focus:bg-muted focus:text-foreground rounded-md px-3 py-2.5">
                    <span className="font-semibold text-sm">UX Research Lead</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center justify-between text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer focus:bg-muted focus:text-foreground rounded-md px-3 py-2.5">
                    <span className="text-sm">Add more</span>
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border my-1" />
                  <DropdownMenuItem className="text-red-600 hover:bg-red-500/10 hover:text-red-500 cursor-pointer focus:bg-red-500/10 focus:text-red-500 rounded-md px-3 py-2.5">
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
                  ? "bg-muted text-foreground border border-border shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-[#4BC957]" : "text-muted-foreground group-hover:text-foreground"
                )}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted transition-colors cursor-pointer">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#4BC957] to-emerald-400 flex items-center justify-center font-bold text-white text-sm shadow-md">
            LM
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">Majid Al-Mansoori</p>
            <p className="text-[13px] text-muted-foreground truncate">Majid@example.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </aside>
  );
}

