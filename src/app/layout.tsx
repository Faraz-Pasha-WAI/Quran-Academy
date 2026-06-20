import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blessing Quran Academy | Learn Quran Online",
  description: "Learn Quran online with expert certified tutors. Blessing Quran Academy offers personalized one-on-one classes for Tajweed, Hifz, and Islamic Studies.",
  openGraph: {
    title: "Blessing Quran Academy | Learn Quran Online",
    description: "Learn Quran online with expert certified tutors. Personalized one-on-one classes.",
    type: "website",
    locale: "en_US",
    siteName: "Blessing Quran Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessing Quran Academy | Learn Quran Online",
    description: "Learn Quran online with expert certified tutors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
