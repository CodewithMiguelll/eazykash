"use client";

import { Sora, Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";

/* --- FONTS --- */
const sora = Sora({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

/* --- DATA --- */
const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press & Media", href: "#" },
      { name: "Contact Support", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Send Money", href: "#" },
      { name: "Track Transfer", href: "#" },
      { name: "Exchange Rates", href: "#" },
      { name: "Business Account", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  },
];

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for children
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <footer className="bg-[#0f7a5c] text-[#f9faf9] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* TOP SECTION: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* 1. BRAND COLUMN (Spans 2 cols on LG) */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <div>
              <h1
                className={`${inter.className} italic font-extrabold text-3xl tracking-tight`}
              >
                EazyKash
              </h1>
              <p
                className={`${sora.className} mt-4 text-slate-100/80 text-sm leading-relaxed max-w-xs`}
              >
                Stop Paying to Pay. Start Sending. <br />
                The fastest way to send money across the UK and Africa with zero
                hidden fees.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                IconBrandTwitter,
                IconBrandInstagram,
                IconBrandLinkedin,
                IconBrandFacebook,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#159672] p-2 rounded-full hover:bg-white hover:text-[#0f7a5c] transition-colors duration-300"
                  aria-label="Social Link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. LINK COLUMNS (Mapped) */}
          {footerLinks.map((column) => (
            <motion.div key={column.title} variants={itemVariants}>
              <h3 className={`${inter.className} font-bold text-lg mb-6`}>
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`${sora.className} text-sm text-slate-100/70 hover:text-white transition-colors flex items-center group`}
                    >
                      {/* Subtle hover arrow effect */}
                      <span className="group-hover:translate-x-1 transition-transform duration-200 block">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION: DIVIDER & COPYRIGHT */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-200/60"
        >
          <p className={sora.className}>
            &copy; {new Date().getFullYear()} EazyKash Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
