import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import SwirlOverlay from "@/components/swirl-overlay";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merri = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300","400","700","900"], // thin→black options for titles
});

export const metadata = {
  title: "Katespace - Portfolio",
  description: "Katelyn's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-dvh bg-[#F6F2FF] text-purple-950`}
        suppressHydrationWarning
      >

        {/* Top nav (full width, comfy padding) */}
        <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/80 backdrop-blur">
          <div className="w-full px-6 md:px-12 py-4 flex items-center justify-center text-purple-900">
            <ul className="flex flex-wrap items-center gap-8 text-lg font-semibold">
              <li><Link href="/" className="hover:opacity-80">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-80">About</Link></li>
              <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
              <li><Link href="/resume" className="hover:opacity-80">Resume</Link></li>
              <li><Link href="/hobbies" className="hover:opacity-80">Hobbies</Link></li>
            </ul>
          </div>
        </nav>

        {/* Page content (full width) */}
        <main className="w-full overflow-hidden">
          <SwirlOverlay />
          {children}
        </main>
      </body>
    </html>
  );
}