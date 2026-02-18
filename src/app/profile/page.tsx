"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Sora } from "next/font/google";
import { Wallet, Clock, CheckCircle2, ArrowUpRight, Plus, Loader2 } from "lucide-react";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

export default function ProfilePage() {
  const supabase = createClient();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      // 1. Fetch real data from Supabase  table
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching:", error);
      else setTransactions(data || []);

      setLoading(false);
    };

    fetchHistory();
  }, []);

  // Calculate real totals
  const totalSent = transactions.reduce(
    (acc, curr) => acc + Number(curr.amount_gbp),
    0,
  );

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 font-inter bg-gray-50/30 min-h-screen">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h1 className={`${sora.className} text-4xl font-bold text-gray-900`}>
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Real-time status of your transfers.
          </p>
        </div>
        <Link href="/payments">
          <button className="bg-[#0f7a5c] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#105f49] transition-all">
            <Plus size={20} /> New Transfer
          </button>
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Total Sent
          </p>
          <p
            className={`${sora.className} text-4xl font-bold text-gray-900 mt-4`}
          >
            £{totalSent.toFixed(2)}
          </p>
        </div>

        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-20 text-center">
              <Loader2 className="animate-spin mx-auto text-[#0f7a5c]" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 text-[10px] uppercase font-bold text-gray-400">
                  <tr>
                    <th className="px-8 py-4">Recipient</th>
                    <th className="px-8 py-4">Amount</th>
                    <th className="px-8 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50/30">
                      <td className="px-8 py-6">
                        <p className="font-bold text-gray-900">
                          {tx.recipient_name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {tx.recipient_bank}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="font-bold text-gray-900">
                          £{tx.amount_gbp}
                        </p>
                        <p className="text-xs text-[#0f7a5c]">
                          ₦{tx.amount_ngn.toLocaleString()}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            tx.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
