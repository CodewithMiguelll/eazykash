import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Payments",
    template: "%s | Payments | EazyKash",
  },
  description: "Secure international transfers powered by Paystack.",
};

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white flex flex-col">
      {/* Main Payment Content */}
      <main className="flex-1 flex justify-center px-6 lg:px-12 py-12">
        <div className="w-full max-w-6xl">{children}</div>
      </main>

      {/* Trust Footer */}
      <footer className="py-10 text-center border-t border-gray-100 bg-white">
        <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
          Secured by Paystack · Powered by Supabase
        </p>
      </footer>
    </div>
  );
}
