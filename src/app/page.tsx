"use client";
import { Sora, Inter } from "next/font/google";
import Image from "next/image";
import CreditCards from "@/assets/credit-cards.png"
import PersonBlob from "@/assets/person-blob.png"
import CashTransfer from "@/assets/cash-transfer.png"
import { Button } from "@/components/ui/button";

/*FONT CONFIGURATIONS

Headings: Inter [Semibold]
Subheadings: Inter [Medium]
Body Text: Sora

*/

const sora = Sora({
  weight: ["400"],
  subsets: ["latin"],
  style: "normal",
});

const interMedium = Inter({
  weight: ["600"],
  subsets: ["latin"],
  style: "normal",
});

const interSemiBold = Inter({
  weight: ["700"],
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  return (
    <>
      <main className="flex flex-col px-9 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1
                className={`${interMedium.className} text-xl md:text-3xl mb-2 leading-tight`}
              >
                Fast, Secure Payments from the UK. <br />
                Locally and Across Africa.
              </h1>
              <p className={`${sora.className} text-base md:text-xl`}>
                Send money across the UK or to Africa in minutes, with low fees
                and full transparency.
              </p>
              <Button className="bg-[#0f7a5c] text-[#f9faf9] md:hover:bg-[#105f49] md:hover:cursor-pointer mt-4 w-fit">
                Get Started
              </Button>
            </div>

            <div className="md:w-1/2">
              <Image
                src={CreditCards}
                alt="Hero Image"
                width={500}
                height={500}
                className="h-auto"
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="mt-14 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1
                className={`${interSemiBold.className} text-xl md:text-3xl mb-2 leading-tight`}
              >
                Easily Transfer Funds Within The UK
              </h1>
              <p className={`${sora.className} text-base md:text-xl`}>
                Transfer money within the UK using multiple transfer types and
                supported methods, from bank transfers to wallets. Enjoy fast
                processing, a smooth flow, and an experience that’s easy to use
                from start to finish.
              </p>
              <Button className="bg-[#0f7a5c] text-[#f9faf9] md:hover:bg-[#105f49] md:hover:cursor-pointer mt-4 w-fit">
                Learn More
              </Button>
            </div>

            <div className="md:w-1/2">
              <Image
                src={PersonBlob}
                alt="A person holding a phone with a smile on their face"
                width={450}
                height={450}
                className="h-auto"
              />
            </div>
          </div>
        </section>

        {/* Payments From UK to Africa */}
        <section className="mt-14 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src={CashTransfer}
                alt="POS Cash Transfer"
                width={450}
                height={450}
                className="h-auto"
              />
            </div>
            <div className="flex flex-col justify-center md:w-1/2">
              <h1
                className={`${interSemiBold.className} text-xl md:text-3xl mb-2 leading-tight`}
              >
                Cross-Border Payments from the UK to Africa
              </h1>
              <p className={`${sora.className} text-base md:text-xl`}>
                UK to Africa transfers made simple. Send money through supported
                African corridors with clear fees, competitive speeds, and full
                currency transparency—so you always know what’s sent and what’s
                received. No friction. No confusion. Just smooth sending and
                easy access for recipients.
              </p>
              <Button className="bg-[#0f7a5c] text-[#f9faf9] md:hover:bg-[#105f49] md:hover:cursor-pointer mt-4 w-fit">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        
      </main>
    </>
  );
}
