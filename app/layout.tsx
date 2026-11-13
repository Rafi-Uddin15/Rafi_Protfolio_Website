import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { person } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", weight: ["400", "500"] });

const description =
  "Rafi Uddin is a data and AI analyst in Dhaka: cross-source data verification at SEBPO, explainable machine learning published in IEEE Xplore, and SQL-to-Power BI pipelines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Rafi Uddin, Data & AI Analyst", template: "%s | Rafi Uddin" },
  description,
  authors: [{ name: person.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Rafi Uddin",
    title: "Rafi Uddin, Data & AI Analyst",
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: "Rafi Uddin, Data & AI Analyst", description },
};

export const viewport: Viewport = { themeColor: "#f3f4f6" };

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.role,
  url: SITE_URL,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "East West University" },
  worksFor: { "@type": "Organization", name: "SEBPO" },
  sameAs: [person.linkedin, person.github, person.scholar],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
