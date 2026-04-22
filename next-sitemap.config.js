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
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
};
