"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";

export default function ProfileSidebar({ soraClass }: { soraClass: string }) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 bg-white border-r border-gray-100 flex-col p-8 sticky top-0 h-screen">
      {/* Logo */}
      <div
        className={`${soraClass} text-2xl font-black text-[#0f7a5c] mb-14 tracking-tight`}
      >
        EZK.
      </div>

      <nav className="space-y-3 flex-1">
        <NavItem
          href="/profile"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active={pathname === "/profile"}
        />
        <NavItem
          href="/profile/recipients"
          icon={<Users size={20} />}
          label="Recipients"
          active={pathname.startsWith("/profile/recipients")}
        />
        <NavItem
          href="/profile/settings"
          icon={<Settings size={20} />}
          label="Settings"
          active={pathname.startsWith("/profile/settings")}
        />
      </nav>

      <button className="flex items-center gap-3 text-gray-400 font-semibold text-sm hover:text-red-500 transition-colors p-3">
        <LogOut size={20} /> Sign Out
      </button>
    </aside>
  );
}

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-4 rounded-2xl font-semibold text-sm transition-all ${
        active
          ? "bg-[#0f7a5c]/10 text-[#0f7a5c]"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
