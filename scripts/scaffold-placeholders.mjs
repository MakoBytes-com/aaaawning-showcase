#!/usr/bin/env node
// Generates placeholder page.tsx files for every static route in the nav tree.
// Run: node scripts/scaffold-placeholders.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "app");

/** @type {Array<{route: string, title: string, eyebrow?: string, description?: string}>} */
const pages = [
  { route: "about", eyebrow: "About", title: "Over 40 Years of Texas Awning Craft", description: "Family-run fabrication, design, and installation — Houston, Dallas, Fort Worth, Austin, and San Antonio." },

  { route: "awnings-canopies", eyebrow: "Products", title: "Awnings & Canopies", description: "Custom fabric and metal awnings, canopies, carports, gazebos and more — built in Houston." },
  { route: "awnings-canopies/fabric-awnings", eyebrow: "Awnings & Canopies", title: "Fabric Awnings", description: "Custom-built fabric awnings for shade, weather protection, and curb appeal. Sunbrella partner." },
  { route: "awnings-canopies/metal-awnings", eyebrow: "Awnings & Canopies", title: "Metal Awnings", description: "Durable metal awnings in a wide range of profiles, colors, and thicknesses." },
  { route: "awnings-canopies/extruded-aluminum", eyebrow: "Awnings & Canopies", title: "Extruded Aluminum Awnings, Walkway Covers & Canopies", description: "Commercial-grade extruded aluminum systems engineered for long life." },
  { route: "awnings-canopies/retractable", eyebrow: "Awnings & Canopies", title: "Retractable Awnings", description: "Motorized and manual retractable awnings for residential and hospitality use." },
  { route: "awnings-canopies/canopies", eyebrow: "Awnings & Canopies", title: "Canopies", description: "Commercial and event canopies custom-designed for your property." },
  { route: "awnings-canopies/carports", eyebrow: "Awnings & Canopies", title: "Carports", description: "Steel and aluminum carports — protect vehicles from Texas sun and weather." },
  { route: "awnings-canopies/gazebos-cabanas", eyebrow: "Awnings & Canopies", title: "Gazebos & Cabanas", description: "Custom outdoor living structures for backyards, pools, and hospitality." },
  { route: "awnings-canopies/shapes-styles", eyebrow: "Awnings & Canopies", title: "Shapes & Styles", description: "Standard and custom awning shapes — dome, shed, waterfall, quarter-barrel and more." },
  { route: "awnings-canopies/color-charts", eyebrow: "Awnings & Canopies", title: "Color Charts", description: "Browse fabric and metal color options from Sunbrella and our partners." },

  { route: "shade-curtains", eyebrow: "Products", title: "Shade & Curtains", description: "Shade structures, sails, patio curtains, and motorized screens for outdoor comfort." },
  { route: "shade-curtains/shade-structures", eyebrow: "Shade & Curtains", title: "Shade Structures", description: "Engineered shade systems for schools, parks, pools, and commercial properties." },
  { route: "shade-curtains/shade-sails", eyebrow: "Shade & Curtains", title: "Shade Sails", description: "Tensioned fabric shade sails — modern, sculptural, effective." },
  { route: "shade-curtains/patio-curtains", eyebrow: "Shade & Curtains", title: "Patio Curtains", description: "Canvas, vinyl, and shade-cloth curtains for patios and porches." },
  { route: "shade-curtains/motorized-screens", eyebrow: "Shade & Curtains", title: "Exterior Motorized Screens", description: "Retractable motorized screens for shade, privacy, and insect protection." },

  { route: "hurricane-season", eyebrow: "Coastal", title: "Hurricane-Rated Awnings for the Texas Gulf Coast", description: "Storm-ready awning systems for Galveston, Corpus Christi, League City, and the Houston coast." },
  { route: "gallery", eyebrow: "Our Work", title: "Project Gallery", description: "Installations across Texas — residential, commercial, hospitality, and municipal." },
  { route: "careers", eyebrow: "Join Us", title: "Employment Opportunities", description: "Now hiring fabricators, installers, and sales professionals in the Houston area." },
  { route: "contact", eyebrow: "Contact", title: "Get a Free Estimate", description: "Tell us about your project — we'll come out for a free on-site measurement and quote." },

  { route: "locations", eyebrow: "Service Area", title: "Cities We Serve", description: "Houston, Dallas, Fort Worth, Austin, San Antonio, and the Texas Gulf Coast." },

  { route: "privacy", title: "Privacy Policy" },
  { route: "terms", title: "Terms of Service" },
  { route: "accessibility", title: "Accessibility Statement" },
];

function pageSource({ eyebrow, title, description }) {
  const metaDesc = description ?? `${title} — AAA Awning Co., Inc.`;
  return `import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(metaDesc)},
};

export default function Page() {
  return (
    <PlaceholderPage
      ${eyebrow ? `eyebrow=${JSON.stringify(eyebrow)}\n      ` : ""}title=${JSON.stringify(title)}
      description=${JSON.stringify(metaDesc)}
    />
  );
}
`;
}

let written = 0;
for (const page of pages) {
  const dir = path.join(ROOT, page.route);
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  await writeFile(file, pageSource(page), "utf8");
  written++;
}

console.log(`Wrote ${written} placeholder pages.`);
