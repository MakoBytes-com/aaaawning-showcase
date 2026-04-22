#!/usr/bin/env node
// Scrapes category-appropriate product images from the legacy WordPress site
// and saves them per-category into public/images/<folder>/.
//
// Per Russell (2026-04-22): "If you pull the images from the old site pages
// individually they are correct for that page." So page = source of truth
// for category. Same image appearing on multiple pages gets copied into
// each target folder.
//
// Usage: node scripts/scrape-wp-images.mjs

import { mkdir, writeFile, access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

const ORIGIN = "https://www.aaaawning.net";

// Chrome/theme images to always skip (logo, icons, backgrounds, favicons, etc.)
const CHROME = [
  "aaa-awning-co-inc",
  "awning-accent-company",
  "contact_left",
  "fav-icon",
  "favicon",
  "home_contact_bg",
  "newsletter_bg",
  "phone_icon",
  "sunbrella.png",
  "assured-quality-icon",
  "handmade-products-icon",
  "best-creativity-icon",
  "product-category.jpg",
  "about_section_bg",
];

const PAGES = [
  { path: "awnings-canopies/fabric-vinyl", folder: "fabric-awnings" },
  { path: "awnings-canopies/metal-awnings", folder: "metal-awnings" },
  {
    path: "awnings-canopies/extruded-aluminum-awnings-walkway-covers-and-canopies",
    folder: "extruded-aluminum",
  },
  { path: "awnings-canopies/retractable-awnings", folder: "retractable-awnings" },
  { path: "awnings-canopies/canopies", folder: "canopies" },
  { path: "awnings-canopies/carports", folder: "carports" },
  { path: "awnings-canopies/gazebos", folder: "gazebos-cabanas" },
  { path: "shade-curtains/shade-structures", folder: "shade-structures" },
  { path: "shade-curtains/shade-sails", folder: "shade-sails" },
  { path: "shade-curtains/patio-curtains", folder: "patio-curtains" },
  { path: "shade-curtains/exterior-motorized-screens", folder: "motorized-screens" },
];

function isChrome(url) {
  return CHROME.some((c) => url.toLowerCase().includes(c.toLowerCase()));
}

function isSizeVariant(url) {
  // WP thumbnails: filename-200x150.jpg, filename-1200x900.jpg, etc.
  return /-\d+x\d+\.(jpg|jpeg|png|webp)(\?|$)/i.test(url);
}

function extractUploadUrls(html) {
  const re =
    /https:\/\/www\.aaaawning\.net\/wp-content\/uploads\/[^"'\s,<>)]+\.(?:jpg|jpeg|png|webp)/gi;
  const matches = html.match(re) ?? [];
  const cleaned = matches
    .filter((u) => !isSizeVariant(u))
    .filter((u) => !isChrome(u));
  return [...new Set(cleaned)];
}

async function fileExists(p) {
  try {
    await access(p, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; AAA migration script)" },
  });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

async function downloadTo(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

const summary = [];

for (const { path: pagePath, folder } of PAGES) {
  const pageUrl = `${ORIGIN}/${pagePath}/`;
  const targetDir = path.join("public", "images", folder);
  await mkdir(targetDir, { recursive: true });

  let html;
  try {
    html = await fetchText(pageUrl);
  } catch (e) {
    console.error(`  [ERR] fetch page ${pagePath}: ${e.message}`);
    summary.push({ folder, found: 0, downloaded: 0, skipped: 0 });
    continue;
  }

  const urls = extractUploadUrls(html);
  let downloaded = 0;
  let skipped = 0;

  for (const url of urls) {
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(targetDir, filename);
    if (await fileExists(dest)) {
      skipped++;
      continue;
    }
    try {
      await downloadTo(url, dest);
      downloaded++;
      process.stdout.write(`  + ${folder}/${filename}\n`);
    } catch (e) {
      console.error(`  [ERR] download ${url}: ${e.message}`);
    }
  }

  summary.push({ folder, found: urls.length, downloaded, skipped });
}

console.log("\n=== Summary ===");
for (const s of summary) {
  console.log(
    `  ${s.folder.padEnd(22)} found: ${String(s.found).padStart(3)}  downloaded: ${s.downloaded}  skipped (exists): ${s.skipped}`,
  );
}
