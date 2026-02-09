"use client";
import { Sora, Inter } from "next/font/google";
import Image from "next/image";
import CreditCards from "@/assets/credit-cards.png";
import PersonBlob from "@/assets/person-blob.png";
import CashTransfer from "@/assets/cash-transfer.png";
import { Button } from "@/components/ui/button";

/* --- FONT CONFIGURATION --- */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interMedium = Inter({
  subsets: ["latin"],
  variable: "--font-inter-medium",
  weight: "500",
});

const steps = [
  {
    idx: 1,
    title: "Create an Account",
    description: "Sign up and get started in just a few steps.",
  },
  {
    idx: 2,
    title: "Set Your Transfer",
    description: "Pick your destination, amount, and payment method.",
  },
  {
    idx: 3,
    title: "Confirm Details",
    description: "Fees, speed and currency, clearly shown before you proceed.",
  },
  {
    idx: 4,
    title: "Send & Track",
    description: "That's it, your transfer is on the way.",
  },
];

export default function Home() {
  return (
    <main
      className={`${sora.variable} ${inter.variable} font-sans text-slate-800`}
    >
      {/* WRAPPER: 
         Added overflow-hidden to prevent horizontal scrollbars on mobile 
         if animations pull things off-screen.
      */}
      <div className="flex flex-col px-6 max-w-7xl mx-auto overflow-hidden">
        {/* HERO SECTION */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
              <h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-pretty">
                Fast, Secure Payments from the UK.{" "}
                <br className="hidden md:block" />
                <span className="text-[#0f7a5c]">
                  Locally and Across Africa.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                Send money across the UK or to Africa in minutes, with low fees
                and full transparency.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button className="bg-[#0f7a5c] text-white hover:bg-[#105f49] h-12 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 w-full">
              <div className="relative w-full max-w-87.5 md:max-w-125 mx-auto">
                {/* Priority loading for Hero image helps LCP score */}
                <Image
                  src={CreditCards}
                  alt="Credit cards visualization"
                  priority
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION DIVIDER (Optional visual break) --- */}

        {/* ABOUT SECTION */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Text */}
            <div className="flex flex-col justify-center md:w-1/2 order-2 md:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Easily Transfer Funds Within The UK
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Transfer money within the UK using multiple transfer types and
                supported methods, from bank transfers to wallets. Enjoy fast
                processing, a smooth flow, and an experience that’s easy to use
                from start to finish.
              </p>
              <Button
                variant="outline"
                className="mt-6 w-fit border-[#0f7a5c] text-[#0f7a5c] hover:bg-[#0f7a5c] hover:text-white"
              >
                Learn More
              </Button>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full order-1 md:order-2">
              <Image
                src={PersonBlob}
                alt="Happy user holding phone"
                className="w-full max-w-75 md:max-w-112.5 mx-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* PAYMENTS FROM UK TO AFRICA */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 w-full">
              <Image
                src={CashTransfer}
                alt="POS Cash Transfer"
                className="w-full max-w-75 md:max-w-112.5 mx-auto h-auto"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Cross-Border Payments from the UK to Africa
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                UK to Africa transfers made simple. Send money through supported
                African corridors with clear fees, competitive speeds, and full
                currency transparency—so you always know what’s sent and what’s
                received.
              </p>
              <Button
                variant="outline"
                className="mt-6 w-fit border-[#0f7a5c] text-[#0f7a5c] md:hover:bg-[#0f7a5c] md:hover:text-white"
              >
                View Corridors
              </Button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24 mb-12">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              How It Works
            </h2>
            <p className="text-slate-600">Start sending money in minutes</p>
          </div>

          {/* GRID LAYOUT: 1 col mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.idx}
                className="bg-[#0F7A5C] p-8 rounded-2xl text-center shadow-lg flex flex-col items-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="bg-[#159672] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <span className="font-heading font-bold text-white text-2xl">
                    {step.idx}
                  </span>
                </div>

                <h3 className={`${interMedium.className} font-heading font-semibold text-white text-xl mb-3`}>
                  {step.title}
                </h3>
                <p className={`${sora.className} text-slate-100/90 text-sm leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
