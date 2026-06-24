"use client";

import { cn } from "@/lib/utils";
import {
  Bell,
  Box,
  LayoutDashboard,
  LogOut,
  Package,
  School,
  Settings,
  ShoppingCart,
  Upload,
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Overview",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    label: "Schools",
    href: "/admin/schools",
    icon: School,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    label: "Uploads",
    href: "/admin/uploads",
    icon: Upload,
  }, {
    label: "Spacial Box",
    href: "/admin/special-package",
    icon: Box
  },
  {
    label: "Inventory Alerts",
    href: "/admin/inventory-alerts",
    icon: Bell
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[130px] flex-shrink-0 flex-col bg-[#0B2545] text-white">
      {/* Logo / Brand */}
      <div className="flex flex-col items-center justify-center border-b border-white/10 py-6 px-3">
        <Image src="/logo.png" alt="PrepED Logo" width={120} height={40} className="h-8 w-auto object-contain  " />
        <span className="text-[10px] font-normal text-white/60 tracking-widest uppercase mt-2">
          Admin
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto py-4 px-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive =
            pathname === href || (href !== "/admin/dashboard" && pathname.startsWith(href));

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-center transition-all duration-200",
                isActive
                  ? "bg-[#FF5C35] text-white shadow-lg shadow-orange-500/30"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "h-[18px] w-[18px] flex-shrink-0 transition-colors",
                  isActive ? "text-white" : "text-white/60 group-hover:text-white"
                )}
              />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 p-3">
        <Link
          href="/admin/logout"
          className="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-center text-[#FF5C35] transition-all duration-200 hover:bg-[#FF5C35]/10"
        >
          <LogOut className="h-[18px] w-[18px] flex-shrink-0" />
          <span className="text-[10px] font-medium">Log Out</span>
        </Link>
      </div>
    </aside>
  );
}
