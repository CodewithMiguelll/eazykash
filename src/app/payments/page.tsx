"use client"

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// This 'ssr: false' tells Next.js: "Skip this file during build time."
const PaymentForm = dynamic(() => import("@/components/payment-form"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Loader2 className="animate-spin text-[#0f7a5c]" size={40} />
      <p className="font-medium text-gray-500">
        Initializing EazyKash engine...
      </p>
    </div>
  ),
});

export default function PaymentsPage() {
  return <PaymentForm />;
}
