"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/shop-kits", label: "Shop Kits" },
  { href: "/search-school", label: "Find School" },
  { href: "/custom-upload", label: "Upload" },
  { href: "/about-us", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export default function MobileBottomNav() {
  const pathname = usePathname();

  if (pathname.startsWith("/company") || pathname.startsWith("/admin") || pathname.startsWith("/candidate")) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "bg-[#FDFBF7]/90 backdrop-blur-md border-t border-orange-100/60",
        "px-3 py-2"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-2">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="min-w-0">
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-12 rounded-2xl",
                  "text-[13px] font-semibold",
                  "transition-colors",
                  isActive(pathname, item.href)
                    ? "bg-[#FF5C35] text-white hover:bg-[#FF5C35]"
                    : "text-[#4A5D73] hover:bg-orange-50"
                )}
              >
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

