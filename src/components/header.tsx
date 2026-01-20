"use client";

import Link from "next/link";
import { useState } from "react";
import { Inter, Sora } from "next/font/google";
import { Menu, XIcon } from "lucide-react";
import { Button } from "./ui/button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  style: "italic",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/about", label: "About" },
    { href: "/payments", label: "Payments" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <>
      <header className="shadow">
        <div className="flex max-w-7xl mx-auto p-4 md:p-6 lg:p-8 justify-between items-center">
          {/* Logo */}
          <Link href="/" className={`${inter.className} text-2xl font-bold`}>
            EazyKash
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex justify-center items-center gap-9">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={`${sora.className} text-lg hover:border-b-2 hover:border-b-[#0f7a5c] font-medium text-gray-700 hover:text-gray-900`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Authentication Buttons */}
          <div className=" hidden md:flex gap-6">
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="lg"
                className="bg-[#9fd3c7] text-[#0f7a5c] transition-all hover:bg-[#52b9a1] hover:text-[#f9faf9] hover:cursor-pointer"
              >
                Log In
              </Button>
            </Link>

            <Link href={"/auth/signup"}>
              <Button
                variant="default"
                size="lg"
                className="bg-[#0f7a5c] text-[#f9faf9] hover:bg-[#105f49] hover:cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex justify-end-safe p-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div className="flex flex-col gap-8 py-5 px-3">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`${sora.className} text-lg font-medium text-gray-700`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col w-full gap-3 mt-2">
                <Link href="/auth/login" className="w-full">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-[#52b9a1] text-[#f9faf9]"
                  >
                    Log In
                  </Button>
                </Link>

                <Link href={"/auth/signup"} className="w-full">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full bg-[#0f7a5c] text-[#f9faf9] hover:bg-[#105f49] hover:cursor-pointer"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
