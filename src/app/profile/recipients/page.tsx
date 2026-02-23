"use client";

import { useState } from "react";
import { Sora } from "next/font/google";
import {
  UserPlus,
  Search,
  Building2,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

const sora = Sora({ subsets: ["latin"] });

export default function RecipientsPage() {
  const supabase = createClient();
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch recipients for the logged-in user
  const { data: recipients, isLoading } = useQuery({
    queryKey: ["recipients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("recipients")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const filteredRecipients = recipients?.filter((r) =>
    r.full_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 md:p-10 max-w-4xl animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className={`${sora.className} text-3xl font-bold text-gray-900`}>
            Recipients
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage people you send money to frequently.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#0f7a5c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#105f49] transition-all shadow-md">
          <UserPlus size={20} /> Add New
        </button>
      </header>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-gray-100 p-4 pl-12 rounded-2xl outline-none focus:ring-2 focus:ring-[#0f7a5c]/10 focus:border-[#0f7a5c] transition-all shadow-sm"
        />
      </div>

      {/* Recipients List */}
      <div className="space-y-3">
        {isLoading ? (
          <div className="flex flex-col items-center py-20 text-gray-400">
            <Loader2 className="animate-spin mb-2" size={32} />
            <p>Loading your contacts...</p>
          </div>
        ) : filteredRecipients?.length === 0 ? (
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
            <p className="text-gray-500 font-medium">No recipients found.</p>
            <button className="text-[#0f7a5c] font-bold mt-2 hover:underline">
              Add your first recipient
            </button>
          </div>
        ) : (
          filteredRecipients?.map((person) => (
            <div
              key={person.id}
              className="group bg-white border border-gray-100 p-5 rounded-2xl flex items-center justify-between hover:border-[#0f7a5c] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0f7a5c]/10 rounded-full flex items-center justify-center text-[#0f7a5c] font-bold text-lg">
                  {person.full_name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0f7a5c] transition-colors">
                    {person.full_name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mt-0.5">
                    <Building2 size={12} />
                    <span>
                      {person.bank_name} • {person.account_number}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight
                className="text-gray-300 group-hover:text-[#0f7a5c] group-hover:translate-x-1 transition-all"
                size={20}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
