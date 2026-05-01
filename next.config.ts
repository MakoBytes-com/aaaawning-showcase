import type { NextConfig } from "next";
import path from "node:path";

const SECURITY_HEADERS = [
  {
    // Force HTTPS for 2 years + subdomains + eligible for HSTS preload list
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Stop browsers from MIME-sniffing away declared content types
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Clickjacking protection — we don't embed our site anywhere
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Trim the referrer leak to cross-origin navigations
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Disable browser features we don't use
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

// Legacy WordPress URL → new URL map for 301 redirects
const LEGACY_REDIRECTS: { source: string; destination: string }[] = [
  // Slug changes
  { source: "/awnings-canopies/fabric-vinyl", destination: "/awnings-canopies/fabric-awnings" },
  { source: "/awnings-canopies/fabric-vinyl/", destination: "/awnings-canopies/fabric-awnings" },
  {
    source: "/awnings-canopies/extruded-aluminum-awnings-walkway-covers-and-canopies",
    destination: "/awnings-canopies/extruded-aluminum",
  },
  {
    source: "/awnings-canopies/extruded-aluminum-awnings-walkway-covers-and-canopies/",
    destination: "/awnings-canopies/extruded-aluminum",
  },
  { source: "/awnings-canopies/gazebos", destination: "/awnings-canopies/gazebos-cabanas" },
  { source: "/awnings-canopies/gazebos/", destination: "/awnings-canopies/gazebos-cabanas" },
  {
    source: "/awnings-canopies/retractable-awnings",
    destination: "/awnings-canopies/retractable",
  },
  {
    source: "/awnings-canopies/retractable-awnings/",
    destination: "/awnings-canopies/retractable",
  },
  {
    source: "/shade-curtains/exterior-motorized-screens",
    destination: "/shade-curtains/motorized-screens",
  },
  {
    source: "/shade-curtains/exterior-motorized-screens/",
    destination: "/shade-curtains/motorized-screens",
  },
  // Page renames
  { source: "/about-us", destination: "/about" },
  { source: "/about-us/", destination: "/about" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/contact-us/", destination: "/contact" },
  { source: "/employment-opportunities", destination: "/careers" },
  { source: "/employment-opportunities/", destination: "/careers" },
  // WP portfolio/category paths → gallery / category hubs
  { source: "/portfolio-items/:slug*", destination: "/gallery" },
  { source: "/product-categories", destination: "/awnings-canopies" },
  { source: "/product-categories/", destination: "/awnings-canopies" },
  { source: "/product-categories/:slug*", destination: "/awnings-canopies" },
  { source: "/products", destination: "/awnings-canopies" },
  { source: "/products/", destination: "/awnings-canopies" },
  { source: "/products/fabric-awnings", destination: "/awnings-canopies/fabric-awnings" },
  { source: "/products/fabric-awnings/", destination: "/awnings-canopies/fabric-awnings" },
  { source: "/products/metal-awnings", destination: "/awnings-canopies/metal-awnings" },
  { source: "/products/metal-awnings/", destination: "/awnings-canopies/metal-awnings" },
  // Legacy Yoast/WordPress sitemap paths → current sitemap
  { source: "/sitemap_index.xml", destination: "/sitemap.xml" },
  { source: "/post-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/page-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/category-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/product-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/portfolio_page-sitemap.xml", destination: "/sitemap.xml" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
