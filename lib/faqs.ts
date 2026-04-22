export type FAQ = { q: string; a: string };

export type FAQGroup = {
  label: string;
  faqs: FAQ[];
};

export const FAQ_GROUPS: FAQGroup[] = [
  {
    label: "Getting Started",
    faqs: [
      {
        q: "Do you offer free estimates?",
        a: "Yes. For any residential or commercial project in our Texas service area, we come out to your property for free, measure, photograph, and deliver a written quote. No obligation. No high-pressure sales.",
      },
      {
        q: "What areas do you serve?",
        a: "We're headquartered in Houston and regularly install across the greater Houston metro, Dallas–Fort Worth, Austin, San Antonio, and the Texas Gulf Coast (including Galveston and Corpus Christi). Our Dallas office is by appointment. See our Locations page for a full city list.",
      },
      {
        q: "How long has AAA Awning been in business?",
        a: "We've been fabricating and installing custom awnings out of Houston since 1984 — over forty years. Family-run, still in the original Madie Drive location.",
      },
      {
        q: "Do you do both residential and commercial projects?",
        a: "Both, every week. Residential: patio awnings, pool cabanas, retractable systems, pergolas. Commercial: restaurant and retail storefronts, drive-thru canopies, walkway covers for schools and apartments, hospital entries, and more.",
      },
    ],
  },
  {
    label: "Materials & Options",
    faqs: [
      {
        q: "What fabrics do you use?",
        a: "We default to Sunbrella for awning fabric — it's the industry-standard acrylic canvas, with a 10-year limited fabric warranty and excellent fade/mold resistance in Texas sun. For some applications we also use vinyl-coated polyester (heavy-duty, waterproof) or open-weave shade cloth (pool decks, playgrounds).",
      },
      {
        q: "What colors do you offer?",
        a: "Sunbrella publishes hundreds of solids and stripe patterns. We bring physical swatches to every site visit so you can hold the real fabric against your building. Metal awnings use Kynar 500 paint systems — standard palette plus custom color matches on request. See our Color Charts page for popular starting points.",
      },
      {
        q: "Can you match my existing trim or brand colors?",
        a: "Yes. For fabric, we custom-select from Sunbrella's full palette. For metal, we can specify custom Kynar matches to any paint code, fabric swatch, or photo. Custom color matches typically add a small cost and lead time.",
      },
      {
        q: "Can you put my logo or custom graphics on the awning?",
        a: "Yes. Our in-house graphics department dye-sublimates custom artwork, logos, lettering, and patterns directly onto awning fabric. Popular for restaurants, retail, and branded hospitality installations.",
      },
      {
        q: "Do you build metal awnings too, or only fabric?",
        a: "Both. Metal awnings and extruded-aluminum canopy systems are a big part of our work — particularly for commercial projects, walkway covers, and installations where you want a 30+ year service life with minimal maintenance.",
      },
    ],
  },
  {
    label: "Timing & Process",
    faqs: [
      {
        q: "How long does a project take?",
        a: "Most projects complete in 2–6 weeks from signed contract. Timeline depends on product type, size, fabric availability, and whether stamped engineering drawings are required. We'll give you a firm timeline with the quote.",
      },
      {
        q: "What does the process look like from start to finish?",
        a: "Four steps. (1) Free on-site measurement and design conversation. (2) Written quote with drawings, materials, and timeline. (3) Fabrication in our Houston shop. (4) Installation by our own AAA crews (not subcontractors). We walk the finished job with you before we leave.",
      },
      {
        q: "Do you handle HOA or city permit approvals?",
        a: "We provide drawings, specifications, and color information for HOA architectural review. For projects requiring city permits or stamped structural drawings, we coordinate with engineers and can submit to the AHJ as part of the project scope.",
      },
      {
        q: "What's the payment process?",
        a: "Typically a deposit at contract, balance due on completion. Specifics are in every written quote. We accept check, ACH, or credit card.",
      },
    ],
  },
  {
    label: "Warranty & Service",
    faqs: [
      {
        q: "What warranty do you offer?",
        a: "Sunbrella fabric comes with a 10-year limited manufacturer warranty. Kynar 500 metal finishes carry 20–30 year warranties from the coater. Workmanship warranty is covered in every written AAA Awning contract — ask us for specifics on your project type.",
      },
      {
        q: "Can you re-cover an old awning frame?",
        a: "Often yes. Aluminum frames frequently outlast the fabric by decades. If your frame is structurally sound, we can measure it, fabricate new Sunbrella covers, and reinstall. Ask about a re-cover when you call.",
      },
      {
        q: "Do you repair storm or accident damage?",
        a: "Yes — we handle post-storm repair and re-covering for both our own installations and awnings installed by others. Existing AAA customers get prioritized callbacks after named storms. See our Hurricane Season page.",
      },
    ],
  },
  {
    label: "Hurricane & Coastal",
    faqs: [
      {
        q: "Do you install on the Gulf Coast?",
        a: "Yes — Galveston, League City, Surfside, Corpus Christi, Port Aransas, and everywhere in between. Coastal installations use stainless-steel fasteners, marine-grade aluminum, and anchorage engineered to the local AHJ wind zone.",
      },
      {
        q: "Are your awnings hurricane-rated?",
        a: "Coastal-zone installations are engineered to local design wind speeds (typically 130–150 mph along the Gulf). For fabric awnings in hurricane zones, we can design removable panels so covers come down before named storms. Metal and extruded-aluminum systems stay up year-round.",
      },
      {
        q: "What should I do with my awning when a storm is coming?",
        a: "Retract all motorized retractables before winds exceed 30 mph. For stationary fabric awnings designed with removable panels, take them down following our install instructions. Walk the property and photograph for insurance. We have a full pre-storm checklist on our Hurricane Season page.",
      },
    ],
  },
];

/** Flatten for use in schema.org FAQPage JSON-LD */
export function flattenedFaqs(): FAQ[] {
  return FAQ_GROUPS.flatMap((g) => g.faqs);
}
