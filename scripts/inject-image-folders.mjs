import { readFile, writeFile } from "node:fs/promises";

const FILE = "lib/products.ts";
const MAP = {
  "fabric-awnings": "fabric-awnings",
  "metal-awnings": "metal-awnings",
  "extruded-aluminum": "extruded-aluminum",
  retractable: "retractable-awnings",
  canopies: "canopies",
  carports: "carports",
  "gazebos-cabanas": "gazebos-cabanas",
  "shapes-styles": "gallery",
  "color-charts": "brand-partners",
  "shade-structures": "shade-structures",
  "shade-sails": "shade-sails",
  "patio-curtains": "patio-curtains",
  "motorized-screens": "motorized-screens",
};

let src = await readFile(FILE, "utf8");

for (const [slug, folder] of Object.entries(MAP)) {
  const re = new RegExp(
    `(slug: "${slug}",\\s*\\n\\s*category: "[^"]+",)`,
    "g",
  );
  const before = src;
  src = src.replace(re, `$1\n    imageFolder: "${folder}",`);
  if (src === before) console.warn(`  !! no match for slug ${slug}`);
  else console.log(`  ✓ injected imageFolder for ${slug}`);
}

await writeFile(FILE, src);
console.log("done");
