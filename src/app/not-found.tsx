"use client";

import Link from "next/link";
import { Sora } from "next/font/google";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const sora = Sora({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white font-inter">
      {/* Text Content */}
      <h1
        className={`${sora.className} text-7xl font-extrabold text-[#0f7a5c] mb-4`}
      >
        404
      </h1>

      <h2 className={`${sora.className} text-2xl font-bold text-gray-900 mb-4`}>
        Oops! This page is out of circulation.
      </h2>

      <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
        It looks like the link you followed doesn't exist. Don't worry, your
        funds are safe—we just can't find this specific corner of EazyKash.
      </p>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md items-center justify-center">
        <Link href="/">
          <button className="w-full sm:w-auto bg-[#0f7a5c] hover:bg-[#105f49] text-white p-4 rounded-xl flex items-center gap-2 transition-all shadow-md">
            <Home size={18} />
            Back to Home
          </button>
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 p-4 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>
      </div>
    </div>
  );
}
