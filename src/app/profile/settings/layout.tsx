import { Sora } from "next/font/google";
import Link from "next/link";
import { User, Shield, Bell, CreditCard } from "lucide-react";

const sora = Sora({ subsets: ["latin"] });

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 md:p-10 max-w-5xl animate-in fade-in duration-500">
      <header className="mb-10">
        <h1 className={`${sora.className} text-3xl font-bold text-gray-900`}>
          Settings
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your account and app preferences.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Settings Sidebar Navigation */}
        <aside className="w-full lg:w-64 space-y-1">
          <SettingsLink
            href="/profile/settings"
            icon={<User size={18} />}
            label="Personal Info"
            active
          />
          <SettingsLink
            href="/profile/settings/security"
            icon={<Shield size={18} />}
            label="Security"
          />
          <SettingsLink
            href="/profile/settings/billing"
            icon={<CreditCard size={18} />}
            label="Limits & Billing"
          />
          <SettingsLink
            href="/profile/settings/notifications"
            icon={<Bell size={18} />}
            label="Notifications"
          />
        </aside>

        {/* Settings Content Area */}
        <main className="flex-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
}

function SettingsLink({ href, icon, label, active = false }: any) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 p-3 rounded-xl font-bold text-sm transition-all ${
        active
          ? "bg-[#0f7a5c]/10 text-[#0f7a5c]"
          : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
      }`}
    >
      {icon} {label}
    </Link>
  );
}
