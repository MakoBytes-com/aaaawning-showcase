import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

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
    "Custom fabric and metal awnings, canopies, shade structures, gazebos and carports for commercial and residential projects across Houston, Dallas, Fort Worth, Austin, San Antonio and the Texas Gulf Coast. 40+ years, Sunbrella partner.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
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
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Custom Awnings, Canopies & Shade Structures in Texas`,
    description:
      "Custom fabric and metal awnings, canopies, shade structures, gazebos and carports for commercial and residential projects across Texas. 40+ years, Sunbrella partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Custom Awnings & Canopies in Texas`,
    description:
      "40+ years of custom metal and canvas awning fabrication. Houston, Dallas, Fort Worth, Austin, San Antonio, Texas Gulf Coast.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
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
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <TopBar />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
