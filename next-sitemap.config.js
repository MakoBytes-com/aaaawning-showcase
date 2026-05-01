/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aaaawning.net",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Homepage + top hubs get higher priority
    let priority = config.priority;
    let changefreq = config.changefreq;
    if (path === "/") priority = 1.0;
    else if (
      path === "/contact" ||
      path === "/awnings-canopies" ||
      path === "/shade-curtains" ||
      path === "/locations"
    )
      priority = 0.9;
    else if (path.startsWith("/locations/")) priority = 0.8;
    else if (
      path === "/privacy" ||
      path === "/terms" ||
      path === "/accessibility"
    ) {
      priority = 0.3;
      changefreq = "yearly";
    }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  exclude: [
    "/admin",
    "/admin/*",
    // File-route metadata images aren't crawlable HTML pages
    "/icon.svg",
    "/apple-icon",
    "/opengraph-image",
  ],
  robotsTxtOptions: {
    policies: [
      // Default policy for all crawlers — allow public pages, block
      // API + admin
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      // Explicitly welcome major AI / answer-engine crawlers. They
      // already match the * rule, but listing them by name signals
      // intent and helps some bots read more of the site.
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Claude-Web", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Perplexity-User", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "GoogleOther", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Applebot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "DuckDuckBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "MistralAI-User", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "YouBot", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "DiffBot", allow: "/", disallow: ["/api/", "/admin/"] },
    ],
  },
};
