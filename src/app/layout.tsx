import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/header";
import Header from "@/components/header";


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
      <body suppressHydrationWarning={true} className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
