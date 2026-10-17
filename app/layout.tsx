import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalSchemas } from "@/components/GlobalSchemas";
import { UmamiAnalytics } from "@/components/UmamiAnalytics";
import { DemoPill } from "@/components/DemoPill";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import {
  COPYRIGHT_LINE,
  COPYRIGHT_NOTICE,
  COPYRIGHT_OWNER,
  COPYRIGHT_YEAR,
  LICENSE_URL,
  SHOWCASE_URL,
} from "@/components/Copyright";

const copyrightHolder = {
  "@type": "Organization",
  "@id": `${SHOWCASE_URL}/#copyright-holder`,
  name: COPYRIGHT_OWNER,
  url: "https://makologics.com",
};

const copyrightSchema = {
  "@context": "https://schema.org",
  "@graph": [
    copyrightHolder,
    {
      "@type": "WebSite",
      "@id": `${SHOWCASE_URL}/#website`,
      url: SHOWCASE_URL,
      name: `${SITE.name} website showcase by ${COPYRIGHT_OWNER}`,
      creator: { "@id": copyrightHolder["@id"] },
      publisher: { "@id": copyrightHolder["@id"] },
      copyrightHolder: { "@id": copyrightHolder["@id"] },
      copyrightYear: COPYRIGHT_YEAR,
      copyrightNotice: COPYRIGHT_NOTICE,
      license: LICENSE_URL,
    },
    {
      "@type": "VideoObject",
      "@id": `${SHOWCASE_URL}/#hero-film`,
      name: "AAA Awning showcase hero film",
      description: "AI-generated hero footage made by Mako Logics LLC for this showcase.",
      contentUrl: `${SHOWCASE_URL}/images/hero/aaa-awning-texas-projects-hero.mp4`,
      uploadDate: "2026-04-22",
      creator: { "@id": copyrightHolder["@id"] },
      copyrightHolder: { "@id": copyrightHolder["@id"] },
      copyrightYear: COPYRIGHT_YEAR,
      copyrightNotice: COPYRIGHT_NOTICE,
      license: LICENSE_URL,
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Custom Awnings, Canopies & Shade Structures in Texas`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Custom fabric and metal awnings, canopies, and shade structures for Texas homes and businesses. Houston-based since 1984. Free estimates.",
  applicationName: SITE.name,
  // The showcase build is Mako Logics' work; the business it depicts is credited on /license.
  authors: [{ name: COPYRIGHT_OWNER, url: "https://makologics.com" }],
  creator: COPYRIGHT_OWNER,
  publisher: COPYRIGHT_OWNER,
  other: { copyright: COPYRIGHT_LINE },
  generator: "Next.js",
  keywords: [
    "awning company Houston",
    "custom awnings Texas",
    "commercial awnings",
    "residential patio awnings",
    "retractable awnings",
    "metal awnings",
    "canopies Texas",
    "Sunbrella awnings",
    "hurricane-rated awnings",
    "shade structures",
    "carports",
    "gazebos",
    "patio curtains",
    "Houston awning fabrication",
    "Dallas awnings",
    "Fort Worth awnings",
    "Austin awnings",
    "San Antonio awnings",
    "Galveston awnings",
    "Corpus Christi awnings",
  ],
  category: "Home Improvement",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  verification: {
    // Add google: / yandex: / etc. verification codes here when the
    // owner claims Google Search Console.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <DemoPill realUrl="https://www.aaaawning.net" />
        <GlobalSchemas />
        <JsonLd data={copyrightSchema} />
        <TopBar />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <UmamiAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
