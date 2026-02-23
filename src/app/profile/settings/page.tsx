"use client";

import { Sora } from "next/font/google";
import { Mail, User, Phone, Save } from "lucide-react";

const sora = Sora({ subsets: ["latin"] });

export default function GeneralSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className={`${sora.className} text-xl font-bold text-gray-900`}>
          Personal Information
        </h2>
        <p className="text-gray-400 text-sm">
          Update your basic account details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
            Full Name
          </label>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-[#0f7a5c] transition-all">
            <User size={18} className="text-gray-400" />
            <input
              type="text"
              defaultValue="Chikaima Uwakwe" // This will eventually come from your Auth user
              className="bg-transparent w-full outline-none font-bold text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
            Email Address
          </label>
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl border border-gray-100 opacity-60 cursor-not-allowed">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              disabled
              defaultValue="chikaimauwakwe@gmail.com"
              className="bg-transparent w-full outline-none font-bold text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
            Phone Number
          </label>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-[#0f7a5c] transition-all">
            <Phone size={18} className="text-gray-400" />
            <input
              type="tel"
              placeholder="+44 ..."
              className="bg-transparent w-full outline-none font-bold text-gray-900"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-50 flex justify-end">
        <button className="flex items-center gap-2 bg-[#0f7a5c] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#105f49] transition-all shadow-lg hover:-translate-y-0.5">
          <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
}
