import type { NextConfig } from "next";
import path from "node:path";

// Content Security Policy — this showcase loads Vercel Analytics/Speed
// Insights, Umami (page-view tracking script), Cloudflare Turnstile on the
// contact form, and Google Maps embeds on /contact. Most of the
// Turnstile/Umami code paths are dormant on this Vercel project (no
// NEXT_PUBLIC_TURNSTILE_SITE_KEY / NEXT_PUBLIC_UMAMI_* env vars set) but the
// CSP allows them so the demo doesn't break if those env vars are ever added.
// (No /admin dashboard on this showcase fork — it was a pure visual demo
// route removed along with the rest of the inherited admin surface, so the
// Umami iframe-embed allowance that used to live in frame-src is gone too.)
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://cloud.umami.is https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://challenges.cloudflare.com",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://cloud.umami.is https://challenges.cloudflare.com",
  "media-src 'self'",
  "frame-src 'self' https://challenges.cloudflare.com https://www.google.com",
  "form-action 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

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
  { key: "Content-Security-Policy", value: csp },
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
  // Legacy Yoast/Avada/WordPress sitemap paths → current sitemap
  { source: "/sitemap_index.xml", destination: "/sitemap.xml" },
  { source: "/post-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/page-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/category-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/product-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/portfolio_page-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/avada_portfolio-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/local-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/news-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/author-sitemap.xml", destination: "/sitemap.xml" },
  { source: "/portfolio-sitemap.xml", destination: "/sitemap.xml" },
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
