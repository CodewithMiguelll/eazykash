"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Check your email for a secure login link!");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Logo placeholder - You can swap this for an <Image /> later */}
        <h2 className="font-sora text-3xl font-bold tracking-tight text-gray-900">
          Welcome back to <span className="text-[#0f7a5c]">EazyKash</span>
        </h2>
        <p className="mt-2 font-inter text-sm text-gray-600">
          Enter your email to receive a secure login link.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block font-inter text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0f7a5c] sm:text-sm sm:leading-6 transition-all"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-[#0f7a5c] px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600  transition-colors disabled:opacity-50"
            >
              {loading ? "Sending link..." : "Send Magic Link"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-4 p-3 rounded-md text-sm text-center ${message.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}
          >
            {message}
          </div>
        )}

        <p className="mt-10 text-center font-inter text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-[#0f7a5c] hover:text-green-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Start sending today
          </Link>
        </p>
      </div>
    </div>
  );
}
