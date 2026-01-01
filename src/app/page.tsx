"use client"
import {Sora, Inter} from 'next/font/google'

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
    <h1 className={`${interSemiBold.className} text-2xl font-medium`}>Welcome To EazyKash</h1>
    </>
  );
}
