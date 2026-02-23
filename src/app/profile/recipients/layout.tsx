import { Sora } from "next/font/google";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const sora = Sora({ subsets: ["latin"] });

export default function RecipientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Sub-header / Breadcrumbs for Recipients */}
      <div className="border-b border-gray-50 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-gray-500 hover:text-[#0f7a5c] transition-colors text-sm font-semibold"
          >
            <ChevronLeft size={18} />
            Back to Dashboard
          </Link>

          <div
            className={`${sora.className} text-xs font-black uppercase tracking-widest text-gray-300`}
          >
            Manage Contacts
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
}
