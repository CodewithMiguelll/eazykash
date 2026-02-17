"use client";

import Link from "next/link";
import { Sora } from "next/font/google";
import { CheckCircle2, ArrowRight, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const sora = Sora({ subsets: ["latin"] });

export default function SuccessPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-12 bg-white font-inter">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
        {/* Animated Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-[#9fd3c7] blur-3xl opacity-30 animate-pulse rounded-full" />
          <div className="relative bg-[#0f7a5c] p-6 rounded-full shadow-2xl">
            <CheckCircle2 size={64} className="text-white" />
          </div>
        </div>

        <div className="space-y-3">
          <h1
            className={`${sora.className} text-4xl font-extrabold text-gray-900`}
          >
            Money Sent!
          </h1>
          <p className="text-gray-500 text-lg">
            Your transfer to Africa is being processed. It should arrive within{" "}
            <span className="text-[#0f7a5c] font-bold">30 minutes</span>.
          </p>
        </div>

        {/* Transfer ID Card */}
        <div className="bg-gray-50 border border-gray-100 p-6 rounded-3xl space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400 uppercase tracking-widest font-bold text-[10px]">
              Reference ID
            </span>
            <span className="font-mono font-bold text-gray-900">
              EZK-9921-XRT
            </span>
          </div>
          <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 hover:text-[#0f7a5c] transition-colors">
              <Download size={16} /> Receipt
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 hover:text-[#0f7a5c] transition-colors">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="/profile">
            <Button className="w-full bg-[#0f7a5c] hover:bg-[#105f49] py-7 rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-3">
              View Dashboard
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link
            href="/payments"
            className="text-sm font-bold text-gray-400 hover:text-[#0f7a5c] transition-colors"
          >
            Send another transfer
          </Link>
        </div>
      </div>
    </div>
  );
}
