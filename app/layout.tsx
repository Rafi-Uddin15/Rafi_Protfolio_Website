import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafi Uddin | Portfolio — Business Strategy & AI",
  description:
    "Rafi Uddin — Computer Science graduate specializing in Business Intelligence, Data Science, and AI. Explore my projects, experience, and skills.",
  keywords: [
    "Rafi Uddin",
    "portfolio",
    "business intelligence",
    "data science",
    "AI engineer",
    "management trainee",
    "Bangladesh",
  ],
  authors: [{ name: "Rafi Uddin" }],
  openGraph: {
    title: "Rafi Uddin | Portfolio",
    description:
      "Business Intelligence & AI — Projects, Experience, and Skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Animated gradient background */}
        <div className="gradient-bg" aria-hidden="true">
          <div className="gradient-orb" />
          <div className="gradient-orb" />
          <div className="gradient-orb" />
        </div>

        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
