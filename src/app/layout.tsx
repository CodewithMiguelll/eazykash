import type { Metadata } from "next";
import "./globals.css";


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
      <body suppressHydrationWarning={true}
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
