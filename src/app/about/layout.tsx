import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | EazyKash",
  description:
    "We are on a mission to democratize cross-border payments. Learn about our vision, our team, and how we are bridging the gap between the UK and Africa.",
  openGraph: {
    title: "About EazyKash | Bridging Borders, Building Futures",
    description:
      "See how EazyKash is making money transfers instant, secure, and transparent.",
    // images: ["/assets/about-og-image.jpg"], // <--- Image coming soon.
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
