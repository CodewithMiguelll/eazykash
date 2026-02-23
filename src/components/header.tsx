"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Added useEffect
import { Inter, Sora } from "next/font/google";
import { Menu, XIcon, User } from "lucide-react"; // Added User icon for profile
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client"; // Import your client

const inter = Inter({ subsets: ["latin"], weight: ["600"], style: "italic" });
const sora = Sora({ subsets: ["latin"], weight: ["400"], style: "normal" });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // State to store user
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    // Check current session
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    checkUser();

    // Listen for changes (Login/Logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/"; // Hard redirect to clear state
  };

  const links = [
    { href: "/about", label: "About" },
    { href: "/payments", label: "Payments" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="flex max-w-7xl mx-auto p-4 md:p-6 lg:p-8 justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`${inter.className} text-2xl font-bold text-[#0f7a5c]`}
        >
          EazyKash
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex justify-center items-center gap-9">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${sora.className} text-lg hover:border-b-2 hover:border-b-[#0f7a5c] font-medium text-gray-700 hover:text-gray-900 transition-all`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Dynamic Auth Section */}
        <div className="hidden md:flex gap-6 items-center">
          {loading ? (
            <div className="h-10 w-24 bg-gray-100 animate-pulse rounded-md" />
          ) : user ? (
            <>
              <Link href="/payments">
                <button className="bg-[#0f7a5c] text-[#f9faf9] hover:bg-[#105f49] p-2.5 rounded-md text-sm font-medium transition-colors md:hover:cursor-pointer">
                  Send Money
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium p-2.5 text-red-600 bg-red-200 md:hover:bg-red-600 md:hover:text-white transition-colors rounded-md md:hover:cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="bg-[#9fd3c7] text-[#0f7a5c] hover:bg-[#52b9a1] hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 py-8 px-6 bg-white border-t">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-gray-800"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t">
            {user ? (
              <>
                <Link href="/payments" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#0f7a5c] py-6 text-lg">
                    Send Money
                  </Button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-base font-medium p-2.5 text-red-600 bg-red-200 md:hover:bg-red-600 md:hover:text-white transition-colors rounded-md md:hover:cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full py-6">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
