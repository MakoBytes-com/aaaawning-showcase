#!/usr/bin/env node
// Rename the worst-offender image filenames (cryptic camera names, WP
// thumbnail-size suffixes, unnamed.jpg, etc.) to SEO-friendly descriptive
// names. Leave already-good names alone.
//
// Run once to rename, then re-run build-image-manifest.mjs.

import { readdir, rename, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("public/images");

// Map of current name → SEO-friendly name, per category folder
const RENAMES = {
  "metal-awnings": {
    "m1.jpg": "metal-awning-panel-01.jpg",
    "m3.jpg": "metal-awning-panel-03.jpg",
    "m4.jpg": "metal-awning-panel-04.jpg",
    "m5.jpg": "metal-awning-panel-05.jpg",
  },
  canopies: {
    "CIMG3544-768x576-1.jpg": "outdoor-dining-canopy-houston-01.jpg",
    "DSCN1091-768x576-1.jpg": "outdoor-dining-canopy-houston-02.jpg",
    "gz1.jpg": "commercial-canopy-01.jpg",
    "gz2.jpg": "commercial-canopy-02.jpg",
  },
  "gazebos-cabanas": {
    "gz1.jpg": "gazebo-cabana-backyard-01.jpg",
    "gz2.jpg": "gazebo-cabana-backyard-02.jpg",
    "gz3.jpg": "gazebo-cabana-backyard-03.jpg",
    "cc1-300x225-1.jpg": "gazebo-cabana-poolside-04.jpg",
    "blue-canopies.jpg": "gazebo-cabana-blue-dining-shelter.jpg",
    "CIMG3544-768x576-1.jpg": "gazebo-cabana-outdoor-dining-05.jpg",
    "DSCN1091-768x576-1.jpg": "gazebo-cabana-outdoor-dining-06.jpg",
  },
  "extruded-aluminum": {
    "1-1-scaled.jpg": "extruded-aluminum-walkway-cover-01.jpg",
    "2-1-scaled.jpg": "extruded-aluminum-walkway-cover-02.jpg",
    "3-1-scaled.jpg": "extruded-aluminum-canopy-03.jpg",
    "4-1-scaled.jpg": "extruded-aluminum-canopy-04.jpg",
    "5-scaled.jpg": "extruded-aluminum-canopy-05.jpg",
    "6-1-scaled.jpg": "extruded-aluminum-canopy-06.jpg",
    "Roll-Form-canopyy.jpg": "roll-form-canopy-commercial.jpg",
    "Extruded-canopy..jpg": "extruded-aluminum-canopy-07.jpg",
    "Extruded-canopy-and-louvers.jpg": "extruded-aluminum-canopy-with-louvers.jpg",
  },
  "fabric-awnings": {
    "unnamed.jpg": "fabric-awning-residential-11.jpg",
  },
  "patio-curtains": {
    "Patio-Shade-2.jpg": "patio-curtain-shade-02.jpg",
    "Patio-Shade-3.jpg": "patio-curtain-shade-03.jpg",
    "z-dolce-vida.jpg": "patio-curtain-residential-dolce-vida.jpg",
    "Patio-Curtains-270x270-1.jpg": "patio-curtain-installation.jpg",
  },
  "shade-sails": {
    "outdoor-canopies.jpg": "shade-sail-residential-01.jpg",
  },
  "retractable-awnings": {
    "12100-Retractable-Patio-Awnings-Elite.jpg":
      "retractable-patio-awning-elite.jpg",
  },
  hero: {
    "Prompting_Runway_for_Subtle_Animation.mp4":
      "aaa-awning-texas-projects-hero.mp4",
  },
};

async function main() {
  let renamed = 0;
  let skipped = 0;

  for (const [folder, mapping] of Object.entries(RENAMES)) {
    const dir = path.join(ROOT, folder);
    try {
      await stat(dir);
    } catch {
      console.warn(`  [skip] folder not found: ${folder}`);
      continue;
    }
    for (const [oldName, newName] of Object.entries(mapping)) {
      const oldPath = path.join(dir, oldName);
      const newPath = path.join(dir, newName);
      try {
        await stat(oldPath);
      } catch {
        skipped++;
        continue;
      }
      try {
        await stat(newPath);
        console.log(`  [skip] ${folder}/${newName} already exists`);
        skipped++;
        continue;
      } catch {
        // target doesn't exist — safe to rename
      }
      await rename(oldPath, newPath);
      console.log(`  ${folder}/${oldName}  →  ${newName}`);
      renamed++;
    }
  }

  console.log(`\nrenamed: ${renamed}`);
  console.log(`skipped: ${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
