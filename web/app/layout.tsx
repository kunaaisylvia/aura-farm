import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sylvia Kunaai | Software Engineer · AI Engineer · Blockchain Developer",
  description:
    "Portfolio of Sylvia Kunaai — software engineer building intelligent systems, resilient software, and emerging technology products.",
  keywords: [
    "Sylvia Kunaai",
    "Software Engineer",
    "AI Engineer",
    "Blockchain Developer",
    "Python",
    "Machine Learning",
    "Web3",
  ],
  authors: [{ name: "Sylvia Kunaai" }],
  creator: "Sylvia Kunaai",
  metadataBase: new URL("https://aurafarm.earth"),
  openGraph: {
    title: "Sylvia Kunaai | Engineering the Future",
    description:
      "Software engineering, AI, blockchain, and intelligent systems by Sylvia Kunaai.",
    type: "website",
    siteName: "Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvia Kunaai | Software Engineer · AI Engineer",
    description:
      "Building intelligent systems and production-minded software for real-world impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-white">{children}</body>
    </html>
  );
}
