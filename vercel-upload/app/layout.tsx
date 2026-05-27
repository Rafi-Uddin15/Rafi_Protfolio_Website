import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rafi Uddin | Data Solutions, AI & Business Intelligence",
  description:
    "Portfolio of Rafi Uddin, a Data Solutions Analyst and AI practitioner specializing in research operations, business intelligence, data science, and machine learning systems.",
  keywords: [
    "Rafi Uddin",
    "portfolio",
    "business intelligence",
    "data science",
    "data solutions analyst",
    "AI engineer",
    "SEBPO",
    "Bangladesh",
  ],
  authors: [{ name: "Rafi Uddin" }],
  openGraph: {
    title: "Rafi Uddin | Data Solutions, AI & Business Intelligence",
    description:
      "Research operations, business intelligence, AI projects, experience, and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background-system" aria-hidden="true">
          <div className="bg-aurora bg-aurora-one" />
          <div className="bg-aurora bg-aurora-two" />
          <div className="bg-grid-plane" />
          <div className="bg-route route-one" />
          <div className="bg-route route-two" />
          <div className="bg-route route-three" />
          <div className="bg-report-stack">
            <span />
            <span />
            <span />
          </div>
          <div className="bg-command-card">
            <span>VERIFY</span>
            <i />
            <i />
            <i />
          </div>
        </div>
        <CustomCursor />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
