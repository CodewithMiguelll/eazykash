import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

/* --- FONT CONFIGURATION --- */
// Consolidating Inter to include the Medium weight in one variable
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"], // Added 500 for your 'Medium' needs
  display: "swap",
});

/* --- METADATA & SEO --- */
export const metadata: Metadata = {
  title: {
    default: "EazyKash | Stop Paying to Pay. Start Sending.",
    template: "%s | EazyKash",
  },
  description:
    "Fast, secure, and transparent payments from the UK to Africa with zero hidden fees.",
  keywords: [
    "Fintech",
    "Money Transfer",
    "UK to Africa",
    "EazyKash",
    "Remittance",
  ],
  authors: [{ name: "Chikaima Uwakwe" }],
  openGraph: {
    title: "EazyKash",
    description: "The easiest way to send money to Africa.",
    url: "https://eazykash.vercel.app",
    siteName: "EazyKash",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/eazykash-og-image.png",
        width: 1200,
        height: 630,
        alt: "EazyKash",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EazyKash",
    description: "Finances made easy.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff", // Match your primary brand background
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${sora.variable} ${inter.variable} font-inter antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />

          {/* Added <main> for accessibility and flex-grow to push footer down */}
          <main className="grow">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
