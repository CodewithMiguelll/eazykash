"use client";

import Image from "next/image";
import CreditCards from "@/assets/credit-cards.png";
import PersonBlob from "@/assets/person-blob.png";
import CashTransfer from "@/assets/cash-transfer.png";
import PictureMan from "@/assets/picture-man.png";
import { Button } from "@/components/ui/button";
import { IconBolt, IconBuildingBank, IconHeadphones, IconLock, IconReceipt, IconWallet } from "@tabler/icons-react";
import { IconProps } from "@tabler/icons-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Feature = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};



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
    description: "That's it! Your transfer is on the way."
  },
];


const features = [
  {
    icon: IconBolt,
    title: "Fast Transfers",
    description:
      "Move money fast, locally or across borders, without waiting around.",
  },
  {
    icon: IconBuildingBank,
    title: "Multiple Payment Methods",
    description:
      "Pay with banks, wallets, or cards flexibly so sending is never a problem.",
  },
  {
    icon:IconWallet,
    title: "Transparent Fees & Currency",
    description:
      "See fees upfront and know exactly what your recipient gets—no surprises.",
  },
  {
    icon: IconLock ,
    title: "Secure & Verified",
    description:
      "Every transaction is protected with industry-leading security and verification.",
  },
  {
    icon: IconReceipt ,
    title: "Track and Manage Transfers",
    description:
      "Follow your money every step of the way, from send to receive.",
  },

  {
    icon: IconHeadphones ,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated support team.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3, // Shows 3 cards on desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2, // Shows 2 cards on tablet
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Shows 1 card on mobile
  },
};

const testimonials =[{
  name: "Amina S.",
location: "London, UK",
quote:"EazyKash made sending money to my family in Nigeria so easy and affordable. I love the transparency and speed!"
},
{
name: "David M.",
location: "Manchester, UK",
quote:"I've been using EazyKash for months now. The fees are low and the process is so simple. Highly recommend!",
},
{
  name: "Mohammed Epsilon",
location: "Lagos, Nigeria",
quote:"As a recipient, I can confirm that EazyKash is reliable and fast. I receive my funds without any issues. Great service!"
},
{
name: "Sarah K.",
location: "Birmingham, UK",
quote:"EazyKash's customer support is fantastic. They helped me through a transfer issue quickly and professionally. I'm very impressed!"
},
{
name: "James T.",
location: "Glasgow, UK",
quote:"I needed to send money to Africa urgently, and EazyKash delivered. The transfer was completed in minutes, and the fees were very reasonable."
},
{
name: "Nzinga A.",
location: "Nairobi, Kenya",
quote:"EazyKash has made it so much easier for me to receive money from my family in the UK. The process is smooth, and I always know when the money is on its way."
},
{
name: "Emily R.",
location: "Dakar, Senegal",
quote:"I appreciate how transparent EazyKash is about fees and exchange rates. It gives me confidence that I'm getting a fair deal when I send money to Africa."
}
]



export default function Home() {
  return (
    <main className={` text-slate-800`}>
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
              <p className="text-lg md:text-xl font-sora text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
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

        {/* --- SECTION DIVIDER --- */}
        {/* ABOUT SECTION */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Text */}
            <div className="flex flex-col justify-center md:w-1/2 order-2 md:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Easily Transfer Funds Within The UK
              </h2>
              <p className="text-base font-sora md:text-lg text-slate-600 leading-relaxed">
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
              <p className="text-base font-sora md:text-lg text-slate-600 leading-relaxed">
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
            <h2 className="font-bold font-heading text-3xl md:text-5xl mb-4">
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

                <h3
                  className={` font-heading font-semibold text-white text-xl mb-3`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-slate-100/90 font-sora text-sm leading-relaxed`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* FEATURES SECTION */}
        <section className="py-16 md:py-24 mb-12">
          <div className="text-center mb-12">
            <h2 className="font-bold font-heading text-3xl md:text-5xl mb-4">
              Core Features
            </h2>
            <p className="text-slate-600 mb-10">
              All-in-one solution for cross-border payments
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const gridClass = index === 4 ? "lg:col-start-2" : "";

                return (
                  <div
                    key={feature.title}
                    className={`bg-[#0F7A5C] p-8 rounded-2xl text-center shadow-lg flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 ${gridClass}`}
                  >
                    <div className="bg-[#159672] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3
                      className={` font-heading font-semibold text-white text-xl mb-3`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`text-slate-100/90 font-sora text-sm leading-relaxed`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why EazyKash */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 w-full">
              <Image
                src={PictureMan}
                alt="Man smiling with phone"
                className="w-full max-w-75 md:max-w-112.5 mx-auto h-auto"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center md:w-1/2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Why EazyKash?
              </h2>
              <p className="text-base font-sora md:text-lg text-slate-600 leading-relaxed">
                Users choose us because we make money transfers fast, secure,
                and stress-free. With transparent fees, real-time tracking, and
                a simple, intuitive experience, sending and receiving money has
                never been easier—or more reliable. Trust and clarity aren’t
                optional here—they’re built into every transfer.
              </p>
              <Button
                variant="outline"
                className="mt-6 w-fit border-[#0f7a5c] text-[#0f7a5c] md:hover:bg-[#0f7a5c] md:hover:text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-24 mb-12">
          <div className="text-center mb-12">
            <h2 className="font-bold font-heading text-3xl md:text-5xl mb-4">
              Trusted by Users Across The UK and Africa
            </h2>
            <p className="text-slate-600 mb-10">
              Hear from our satisfied customers who rely on EazyKash for their
              cross-border payment needs. Join the growing community of EazyKash
              users who trust us to connect them with their loved ones and
              business partners across the UK and Africa.
            </p>

            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              containerClass="carousel-container"
              dotListClass="custom-dot-list"
              itemClass="carousel-item-padding-40-px"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#0F7A5C] p-10 h-full rounded-2xl text-center shadow-lg flex flex-col items-center justify-between mx-4"
                >
                  <p className="text-slate-100/90 font-sora text-sm leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <h3 className="font-heading font-semibold text-white text-lg">
      
                    {testimonial.name}
                  </h3>
                  <span className="text-slate-400 text-sm">
                    {testimonial.location}
                  </span>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </main>
  );
}
