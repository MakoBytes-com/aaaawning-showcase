// JSON-LD schema builders for structured data across the site.
// Each function returns a plain object ready to be embedded in a
// <script type="application/ld+json"> tag.

import { SITE, OFFICES, SOCIAL } from "./site";

/**
 * Verified social/profile URLs for `sameAs` in Organization + LocalBusiness
 * schema. These are E-E-A-T signals to Google and AI crawlers — only include
 * profiles that are confirmed to belong to this business; never include
 * generic social-network homepages, since that signals to Google that the
 * business has no real presence and erodes trust.
 */
const SAMEAS_PROFILES = [SOCIAL.facebook, SOCIAL.pinterest].filter(
  (u): u is string => Boolean(u),
);

const SERVICE_AREA_CITIES = [
  "Houston",
  "Dallas",
  "Fort Worth",
  "Austin",
  "San Antonio",
  "Galveston",
  "Corpus Christi",
];

export const SERVICES = [
  "Fabric Awnings",
  "Metal Awnings",
  "Extruded Aluminum Awnings",
  "Retractable Awnings",
  "Canopies",
  "Carports",
  "Gazebos and Cabanas",
  "Walkway Covers",
  "Shade Structures",
  "Shade Sails",
  "Patio Curtains",
  "Motorized Screens",
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo/aaa-awning-co-inc.png`,
    email: SITE.email,
    telephone: OFFICES.houston.phone,
    foundingDate: "1984",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICES.houston.street,
      addressLocality: OFFICES.houston.city,
      addressRegion: OFFICES.houston.state,
      postalCode: OFFICES.houston.zip,
      addressCountry: "US",
    },
    sameAs: SAMEAS_PROFILES,
  };
}

/** LocalBusiness schema for the main Houston HQ */
export function localBusinessSchema(opts?: {
  aggregateRating?: { ratingValue: number; reviewCount: number } | null;
}) {
  const rating = opts?.aggregateRating;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/images/logo/aaa-awning-co-inc.png`,
    url: SITE.url,
    telephone: OFFICES.houston.phone,
    email: SITE.email,
    priceRange: "$$",
    foundingDate: "1984",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICES.houston.street,
      addressLocality: OFFICES.houston.city,
      addressRegion: OFFICES.houston.state,
      postalCode: OFFICES.houston.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.875,
      longitude: -95.386,
    },
    areaServed: SERVICE_AREA_CITIES.map((c) => ({
      "@type": "City",
      name: c,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Awning & Shade Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.ratingValue,
        reviewCount: rating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    sameAs: SAMEAS_PROFILES,
  };
}

/** LocalBusiness schema for the Dallas/Richardson satellite office */
export function dallasOfficeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/contact#dallas-office`,
    name: `${SITE.name} — Dallas / Richardson Office`,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    image: `${SITE.url}/images/logo/aaa-awning-co-inc.png`,
    url: `${SITE.url}/contact`,
    telephone: OFFICES.dallas.phone,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICES.dallas.street,
      addressLocality: OFFICES.dallas.city,
      addressRegion: OFFICES.dallas.state,
      postalCode: OFFICES.dallas.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9748,
      longitude: -96.7259,
    },
    description:
      "Dallas-area satellite office (by appointment only) coordinating North Texas awning installations from our Houston fabrication shop.",
    areaServed: [
      "Dallas",
      "Plano",
      "Frisco",
      "McKinney",
      "Richardson",
      "Highland Park",
      "University Park",
      "Allen",
      "Rockwall",
      "Fort Worth",
      "Arlington",
      "Southlake",
      "Keller",
      "Colleyville",
      "Grapevine",
      "Westlake",
      "Mansfield",
    ].map((c) => ({ "@type": "City", name: c })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SERVICE_AREA_CITIES.map((c) => ({
      "@type": "City",
      name: c,
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function cityLocalBusinessSchema(opts: {
  cityName: string;
  url: string;
  description: string;
  geo?: { lat: number; lng: number };
  servicingOfficePhone: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${SITE.name} — ${opts.cityName}`,
    image: `${SITE.url}/images/logo/aaa-awning-co-inc.png`,
    url: opts.url,
    description: opts.description,
    telephone: opts.servicingOfficePhone,
    priceRange: "$$",
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: opts.cityName,
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.cityName,
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    ...(opts.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: opts.geo.lat,
        longitude: opts.geo.lng,
      },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Awning & Shade Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
