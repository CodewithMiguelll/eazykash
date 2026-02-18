import type { Metadata } from "next";
import { Sora } from "next/font/google";
import ProfileSidebar from "./profile-sidebar";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Profile | EazyKash",
    template: "%s | Profile | EazyKash",
  },
  description: "Manage your transfers, recipients, and account settings.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProfileSidebar soraClass={sora.className} />

      <main className="flex-1 overflow-y-auto p-6 lg:p-12">{children}</main>
    </div>
  );
}
