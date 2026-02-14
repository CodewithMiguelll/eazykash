"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  IconHeartHandshake,
  IconGlobe,
  IconShieldCheck,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";

import CountUp from "@/components/CountUp";
import Founder from "@/assets/miguel-rotr.jpg"; 

/* --- DATA: CORE VALUES --- */
const values = [
  {
    icon: IconHeartHandshake,
    title: "Empathy First",
    description:
      "We understand that every transfer is more than just money—it's tuition, medical bills, and support for loved ones. We build with heart.",
  },
  {
    icon: IconShieldCheck,
    title: "Uncompromising Security",
    description:
      "Trust is our currency. We use bank-grade encryption and rigorous compliance to ensure your funds are safe every step of the way.",
  },
  {
    icon: IconGlobe,
    title: "Borderless Thinking",
    description:
      "We believe geography shouldn't dictate financial opportunity. We bridge the gap between the UK and Africa with technology.",
  },
];

/* --- DATA: STATS (Social Proof) --- */
const stats = [
  {
    label: "Active Users",
    value: 50000,
    prefix: "",
    suffix: "+",
  },
  {
    label: "Transaction Volume",
    value: 10,
    prefix: "£",
    suffix: "M+",
  },
  {
    label: "Countries Supported",
    value: 12,
    prefix: "",
    suffix: "",
  },
  {
    label: "Team Members",
    value: 25,
    prefix: "",
    suffix: "",
  },
];

export default function About() {
  return (
    <main className="font-sans text-slate-800">
      {/* 1. HERO SECTION: Brand Story */}
      <section className="relative bg-[#0F7A5C] text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern (Optional visual flair) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#159672] rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Bridging Borders, <br />
            <span className="text-[#a8e6cf]">Building Futures.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100/90 max-w-2xl mx-auto leading-relaxed">
            We are EazyKash. We’re on a mission to make sending money home as
            simple, affordable, and instant as sending a text message.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[#0a5c45] py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Number Container */}
                <div className="font-heading font-bold text-3xl md:text-5xl text-white mb-2 flex items-center justify-center">
                  {/* Prefix (e.g., £) */}
                  {stat.prefix && <span className="mr-1">{stat.prefix}</span>}

                  {/* React Bits CountUp */}
                  <CountUp
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={2.5} // Smooth, slow ease
                    delay={0.2} // Slight delay before starting
                    className="tabular-nums" // Keeps width stable during animation
                  />

                  {/* Suffix (e.g., M+) */}
                  {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
                </div>

                <span className="font-sans text-sm font-medium text-[#a8e6cf] uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & MISSION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-4/3">
                <Image
                  src={Founder}
                  alt="EazyKash Founder, Chikaima Uwakwe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-slate-900">
                It started with a hidden fee.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-sans leading-relaxed">
                <p>
                  In 2023, our founder tried to send money to his family in
                  Lagos for a medical emergency. The transfer took 3 days, and
                  by the time it arrived, hidden fees had eaten away 15% of the
                  value.
                </p>
                <p>
                  He realized that for the diaspora, money isn't just
                  currency—it's care, it's support, and it's connection. When
                  the system fails, it hurts real people.
                </p>
                <p className="font-semibold text-[#0F7A5C]">
                  That’s why we built EazyKash.
                </p>
              </div>

              {/* Mission & Vision Box */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#f0fdf9] p-6 rounded-xl border border-[#0F7A5C]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <IconRocket className="text-[#0F7A5C]" size={24} />
                    <h3 className="font-heading font-bold text-lg">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    To democratize cross-border payments, making them instant,
                    fair, and accessible to everyone.
                  </p>
                </div>
                <div className="bg-[#f0fdf9] p-6 rounded-xl border border-[#0F7A5C]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <IconGlobe className="text-[#0F7A5C]" size={24} />
                    <h3 className="font-heading font-bold text-lg">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    A world where financial borders do not exist, and supporting
                    family abroad is effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our values aren't just words on a wall. They are the principles
              that guide every line of code we write and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#e6f4f1] rounded-full flex items-center justify-center mb-6 text-[#0F7A5C]">
                    <Icon size={32} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4 text-slate-900">
                    {value.title}
                  </h3>
                  <p className="font-sans text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TEAM CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-[#0F7A5C] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative Icon */}
            <IconUsers
              size={300}
              className="absolute -right-20 -bottom-20 text-white opacity-5 pointer-events-none"
            />

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 relative z-10">
              Join us on our journey.
            </h2>
            <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Whether you are a customer looking for a better way to send money,
              or a talent looking to build the future of fintech, we want you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button className="bg-white text-[#0F7A5C] hover:bg-slate-100 h-12 px-8 text-lg rounded-full">
                Create Account
              </Button>
              <Button
                variant="outline"
                className="border-white text-white bg-[#1b755c] hover:bg-white/10 h-12 px-8 text-lg rounded-full"
              >
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
