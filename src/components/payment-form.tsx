"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Sora } from "next/font/google";
import {
  ArrowRightLeft,
  Info,
  Loader2,
  User,
  Building2,
  Hash,
  ArrowLeft,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { usePaystackPayment } from "react-paystack";

const sora = Sora({ subsets: ["latin"] });

/* --- 1. API FETCHERS (Defined outside the component) --- */

const fetchRate = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API_KEY;
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/GBP/NGN`,
  );
  if (!response.ok) throw new Error("Rate fetch failed");
  const data = await response.json();
  return data.conversion_rate as number;
};

const fetchBanks = async () => {
  // Paystack Bank API allows Public Key for listing banks
  const response = await fetch("https://api.paystack.co/bank?currency=NGN", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY}`,
    },
  });
  if (!response.ok) throw new Error("Bank fetch failed");
  const data = await response.json();
  return data.data; // Returns array of { name, code, etc. }
};

export default function PaymentsPage() {
  const supabase = createClient();
  const router = useRouter();
  const [step, setStep] = useState<"calculator" | "recipient" | "review">(
    "calculator",
  );
  const [amount, setAmount] = useState("100");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  const [recipient, setRecipient] = useState({
    fullName: "",
    bankName: "",
    bankCode: "", // Store the code for the Transfer API
    accountNumber: "",
    phone: "",
  });

  useEffect(() => {
    const resolveAccount = async () => {
      // Only trigger when we have 10 digits and a bank code
      if (recipient.accountNumber.length === 10 && recipient.bankCode) {
        setIsVerifying(true);
        setVerificationError("");

        try {
          const res = await fetch(
            `/api/resolve-account?accountNumber=${recipient.accountNumber}&bankCode=${recipient.bankCode}`,
          );
          const data = await res.json();

          if (res.status === 400) {
            setVerificationError(
              "Account could not be found. Please check the number and bank.",
            );
            return;
          }

          if (data.error) {
            setVerificationError(
              "Could not verify account. Please check the details.",
            );
            setRecipient((prev) => ({ ...prev, fullName: "" }));
          } else {
            // Success! Update the recipient's name automatically
            setRecipient((prev) => ({ ...prev, fullName: data.account_name }));
          }
        } catch (err) {
          setVerificationError(
            "Verification service is currently unavailable.",
          );
        } finally {
          setIsVerifying(false);
        }
      }
    };

    resolveAccount();
  }, [recipient.accountNumber, recipient.bankCode]);

  /* --- 2. HOOKS --- */

  // Exchange Rate Query
  const { data: rate, isLoading: isLoadingRate } = useQuery({
    queryKey: ["gbp-to-ngn"],
    queryFn: fetchRate,
    staleTime: 1000 * 60 * 5,
  });

  // Banks List Query (This creates the 'banks' variable)
  const { data: banks, isLoading: isLoadingBanks } = useQuery({
    queryKey: ["banks-list"],
    queryFn: fetchBanks,
    staleTime: 1000 * 60 * 60, // Banks rarely change, cache for 1 hour
  });

  const fee = 2.5;
  const numericAmount = parseFloat(amount) || 0;
  const totalToReceive = rate ? (numericAmount - fee) * rate : 0;

  /* --- 3. HANDLERS --- */

  const onSuccess = async (reference: any) => {
    setIsProcessing(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase.from("transactions").insert({
        user_id: user.id,
        recipient_name: recipient.fullName,
        recipient_bank: recipient.bankName,
        account_number: recipient.accountNumber,
        amount_gbp: numericAmount,
        amount_ngn: totalToReceive,
        exchange_rate: rate,
        paystack_ref: reference.reference,
        status: "pending",
      });

      if (error) throw error;
      router.push(`/payments/success?ref=${reference.reference}`);
    } catch (err) {
      console.error("Error saving transaction:", err);
      alert("Payment successful but logging failed. Contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  const onClose = () => {
    setIsProcessing(false);
  };

  const config = {
    reference: `EZK-${Date.now()}`,
    email: "chikaimauwakwe@gmail.com",
    amount: Math.round(numericAmount * 100),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    currency: "NGN",
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayNow = () => {
    setIsProcessing(true);
    initializePayment({ onSuccess, onClose });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 font-inter">
      {/* 1. Step Indicator */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`h-2 w-16 rounded-full ${step === "calculator" || step === "recipient" || step === "review" ? "bg-[#0f7a5c]" : "bg-gray-200"}`}
        />
        <div
          className={`h-2 w-16 rounded-full ${step === "recipient" || step === "review" ? "bg-[#0f7a5c]" : "bg-gray-200"}`}
        />
        <div
          className={`h-2 w-16 rounded-full ${step === "review" ? "bg-[#0f7a5c]" : "bg-gray-200"}`}
        />
      </div>

      <header className="mb-10 flex items-center justify-between">
        <h1 className={`${sora.className} text-3xl font-bold text-gray-900`}>
          {step === "calculator" && "Send Money"}
          {step === "recipient" && "Recipient Details"}
          {step === "review" && "Review Transfer"}
        </h1>
        {step !== "calculator" && (
          <button
            onClick={() =>
              setStep(step === "review" ? "recipient" : "calculator")
            }
            className="flex items-center gap-2 text-gray-500 hover:text-[#0f7a5c]"
          >
            <ArrowLeft size={20} /> Back
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* STEP 1: CALCULATOR */}
          {step === "calculator" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  You Send
                </label>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border focus-within:ring-2 focus-within:ring-[#0f7a5c]">
                  <span className="text-2xl font-bold text-gray-400">£</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent text-2xl font-bold w-full outline-none"
                  />
                  <div className="bg-white px-4 py-2 rounded-lg border font-semibold">
                    GBP
                  </div>
                </div>
                <div className="flex justify-center my-6">
                  <div className="bg-[#9fd3c7] p-2 rounded-full text-[#0f7a5c]">
                    <ArrowRightLeft size={20} />
                  </div>
                </div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Recipient Receives
                </label>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border">
                  <span className="text-2xl font-bold text-gray-400">₦</span>
                  <div className="w-full">
                    {isLoadingRate ? (
                      <Loader2 className="animate-spin text-[#0f7a5c]" />
                    ) : (
                      <input
                        type="text"
                        readOnly
                        value={totalToReceive.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}
                        className="bg-transparent text-2xl font-bold w-full outline-none text-gray-600"
                      />
                    )}
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg border font-semibold">
                    NGN
                  </div>
                </div>
              </div>
              <button
                onClick={() => setStep("recipient")}
                className="w-full py-4 bg-[#0f7a5c] text-white rounded-xl font-bold text-lg"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2: RECIPIENT */}
          {step === "recipient" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Recipient's Name
                  </label>

                  {/* The Input Container */}
                  <div
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      isVerifying
                        ? "bg-[#0f7a5c]/5 border-[#0f7a5c] ring-2 ring-[#0f7a5c]/10"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <User
                      size={18}
                      className={
                        isVerifying ? "text-[#0f7a5c]" : "text-gray-400"
                      }
                    />

                    <input
                      type="text"
                      placeholder={
                        isVerifying ? "Verifying account..." : "John Doe"
                      }
                      value={recipient.fullName}
                      readOnly // Prevents manual editing of the verified name
                      className="bg-transparent w-full outline-none text-gray-900 font-bold placeholder:font-normal"
                    />

                    {/* Show loader only while the API is working */}
                    {isVerifying && (
                      <Loader2
                        size={18}
                        className="animate-spin text-[#0f7a5c]"
                      />
                    )}
                  </div>

                  {/* 2. CONDITIONAL ERROR MESSAGE (Still inside the parent div) */}
                  {verificationError && (
                    <p className="text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">
                      {verificationError}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Bank
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border">
                      <Building2 size={18} className="text-gray-400" />
                      <select
                        value={recipient.bankCode}
                        onChange={(e) => {
                          const selectedBank = banks?.find(
                            (b: any) => b.code === e.target.value,
                          );
                          setRecipient({
                            ...recipient,
                            bankCode: e.target.value,
                            bankName: selectedBank?.name || "",
                          });
                        }}
                        className="bg-transparent w-full outline-none text-gray-900 appearance-none"
                      >
                        <option value="">
                          {isLoadingBanks ? "Loading banks..." : "Select Bank"}
                        </option>
                        {banks?.map((bank: any) => (
                          <option
                            className="px-2.5"
                            key={bank.id}
                            value={bank.code}
                          >
                            {bank.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Account Number
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border">
                      <Hash size={18} className="text-gray-400" />
                      <input
                        type="text"
                        maxLength={10}
                        placeholder="10 digits"
                        value={recipient.accountNumber}
                        onChange={(e) =>
                          setRecipient({
                            ...recipient,
                            accountNumber: e.target.value,
                          })
                        }
                        className="bg-transparent w-full outline-none text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setStep("review")}
                className="w-full py-4 bg-[#0f7a5c] text-white rounded-xl font-bold text-lg"
              >
                Confirm Transfer Details
              </button>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === "review" && (
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                <div className="flex items-center justify-between border-b pb-6">
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-400 mb-1">
                      Transferring
                    </p>
                    <p
                      className={`${sora.className} text-2xl font-bold text-gray-900`}
                    >
                      £{numericAmount.toFixed(2)}
                    </p>
                  </div>
                  <ArrowRightLeft className="text-[#0f7a5c]" />
                  <div className="text-right">
                    <p className="text-xs uppercase font-bold text-gray-400 mb-1">
                      Recipient Gets
                    </p>
                    <p
                      className={`${sora.className} text-2xl font-bold text-gray-900`}
                    >
                      ₦{totalToReceive.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 flex items-center gap-2">
                    <User size={18} className="text-[#0f7a5c]" />
                    Recipient Details
                  </h4>
                  <div className="grid grid-cols-2 gap-y-4 text-sm p-5 bg-gray-50 rounded-2xl">
                    <div>
                      <p className="text-gray-400">Name</p>
                      <p className="font-semibold text-gray-900">
                        {recipient.fullName || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Bank</p>
                      <p className="font-semibold text-gray-900">
                        {recipient.bankName}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Account Number</p>
                      <p className="font-semibold text-gray-900 tracking-widest">
                        {recipient.accountNumber || "----------"}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Delivery</p>
                      <p className="font-semibold text-gray-900">
                        Direct Deposit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handlePayNow}
                disabled={isProcessing}
                className="w-full py-5 bg-[#0f7a5c] text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isProcessing ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  `Pay £${numericAmount.toFixed(2)} Now`
                )}
                <ArrowRightLeft size={20} />
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl sticky top-24">
            <h3
              className={`${sora.className} text-xl font-bold mb-6 flex items-center gap-2`}
            >
              <Info size={20} className="text-[#9fd3c7]" />
              Summary
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Rate</span>
                <span>1 GBP = {rate?.toFixed(2)} NGN</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fee</span>
                <span>£{fee.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-4 mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">Total to Pay</span>
                <span
                  className={`${sora.className} text-2xl font-bold text-[#9fd3c7]`}
                >
                  £{numericAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
