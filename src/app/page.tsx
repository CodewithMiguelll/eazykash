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
    <main className='flex flex-col items-center justify-center p-16'>
{/* Hero Section */}
      <section className='text-center mb-20'>
        <h1 className={`${interSemiBold.className} text-5xl mb-4`}>Welcome to EazyKash</h1>
        <p className={`${sora.className} text-lg text-gray-600`}>Finances made easy.</p>
      </section>
    </main>
    </>
  );
}
