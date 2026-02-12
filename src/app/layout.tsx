import type { Metadata } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

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


export const metadata: Metadata = {
  title: "EazyKash",
  description: "Finances made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${sora.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
