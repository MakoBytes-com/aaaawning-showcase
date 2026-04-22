import type { FAQ } from "./faqs";

/**
 * Product-specific FAQs that supplement or override those in lib/products.ts.
 * Keys are product slugs. These are surfaced on the product detail page
 * and emitted as FAQPage JSON-LD for SEO + AI retrieval.
 */
export const PRODUCT_FAQS: Record<string, FAQ[]> = {
  "fabric-awnings": [
    {
      q: "How long do fabric awnings last in Texas?",
      a: "A properly built Sunbrella awning holds color and strength for 10–15 years in Houston sun. Frames typically last much longer — we regularly re-cover aluminum frames from the 1990s with fresh fabric and new hardware.",
    },
    {
      q: "Can you match my existing storefront or property colors?",
      a: "Yes. We work from Sunbrella's full solids-and-stripes palette and can match to a paint chip, fabric swatch, or existing awning. We bring physical swatches to every site visit.",
    },
    {
      q: "Can I have my logo or custom artwork printed on the awning?",
      a: "Yes. Our in-house graphics department dye-sublimates logos, lettering, and custom artwork directly onto awning fabric. Common for restaurants, hotels, and branded retail.",
    },
  ],
  "metal-awnings": [
    {
      q: "What's the difference between standing-seam, R-panel, and corrugated metal awnings?",
      a: "Standing-seam has raised vertical ribs and reads modern or agricultural. R-panel is a broader industrial profile with regular ribs. Corrugated is the classic wavy profile. The right choice depends on your building's look, snow/hail exposure, and budget — we'll walk through options at the site visit.",
    },
    {
      q: "How long do metal awnings last?",
      a: "With Kynar 500 finish, metal awnings routinely last 30+ years with nothing more than occasional cleaning. The structural aluminum or steel under the finish will outlast most buildings.",
    },
    {
      q: "Do you engineer metal awnings for permit review?",
      a: "Yes. For projects where the AHJ requires stamped structural drawings, we coordinate engineering and provide sealed documents as part of the project scope.",
    },
  ],
  "extruded-aluminum": [
    {
      q: "What's an extruded aluminum awning and why would I use one?",
      a: "Extruded aluminum is a canopy system made of snap-together aluminum extrusions with no exposed fasteners. It's the most durable and weather-resistant canopy we build — favorite choice for school walkway covers, apartment breezeways, and commercial entries where you want a 30+ year service life.",
    },
    {
      q: "How wide can extruded aluminum walkway covers span?",
      a: "Engineered spans up to 20+ feet are common, with cantilevered designs eliminating intermediate posts for cleaner sightlines. Larger spans use intermediate supports sized to the application.",
    },
    {
      q: "Can extruded aluminum canopies handle hurricane wind?",
      a: "Yes — we engineer coastal installations to the local AHJ design wind speed (typically 130–150 mph along the Gulf). Aluminum resists corrosion in salt air better than most materials, making it ideal for coastal commercial work.",
    },
  ],
  retractable: [
    {
      q: "Motorized or manual retractable — which should I get?",
      a: "For anything wider than about 12 feet or mounted higher than a reasonable arm reach, motorized is worth it. Somfy motors with sun/wind sensors let the awning manage itself. For smaller residential units, a manual hand crank is cheaper and perfectly fine.",
    },
    {
      q: "What happens to a retractable in high wind?",
      a: "Wind sensors auto-retract the awning when gusts exceed a set threshold, protecting the fabric and frame. For storm-zone installations we pair this with physical storm bars and removable fabric so the awning system survives named storms.",
    },
    {
      q: "Can you integrate with my smart home?",
      a: "Yes — Somfy and Dooya motors integrate with Control4, Savant, Crestron, Home Assistant, and most smart-home hubs. We can also tie retractables into weather apps via IFTTT.",
    },
  ],
  canopies: [
    {
      q: "What's the difference between an awning and a canopy?",
      a: "Awnings are smaller and typically wall-mounted. Canopies are larger, often free-standing or column-supported, and usually more engineered. Both overlap — we build both and a lot of in-between work like covered walkways and drive-thru canopies.",
    },
    {
      q: "Can you build free-standing canopies without attaching to the building?",
      a: "Yes — freestanding canopies are common for drive-thru bays, outdoor dining, and valet lanes. We engineer the columns and anchorage to your site conditions and wind zone.",
    },
  ],
  carports: [
    {
      q: "How long does a carport take to install?",
      a: "From signed contract, most residential carports install within 3–5 weeks. Larger commercial multi-bay covers take 6–10 weeks depending on engineering and permit requirements.",
    },
    {
      q: "Do you need a permit for a carport?",
      a: "Depends on your city and HOA. Most Texas cities require a permit for attached carports; freestanding units vary. We handle permit submissions as part of the project scope when required.",
    },
    {
      q: "Can you build a carport that matches my house?",
      a: "Yes — we design carports to match your home's roof pitch, color, and profile. Standing-seam metal roofs coordinated to fascia and trim color are a common approach for residential.",
    },
  ],
  "gazebos-cabanas": [
    {
      q: "What's the difference between a gazebo, cabana, and pergola?",
      a: "Gazebos are typically freestanding roofed structures with full weather protection. Cabanas are similar but usually poolside, often with retractable curtains. Pergolas are open-top lattice structures, sometimes with retractable fabric canopies added. We build all three.",
    },
    {
      q: "Can I have a gazebo with integrated lighting and fans?",
      a: "Yes — we regularly coordinate with electricians to install ceiling fans, recessed lighting, speakers, and smart-controlled fixtures inside gazebos and cabanas. We can reference specific electrical layouts in the design drawings.",
    },
  ],
  "shade-structures": [
    {
      q: "How much UV do shade structures actually block?",
      a: "Commercial shade-cloth blocks up to 97% of UV depending on fabric density. We typically spec 90% or 95% UV block for Texas installations. Surface temperatures under the shade drop 15–25°F compared to full sun.",
    },
    {
      q: "Do you do shade structures for schools and parks?",
      a: "Yes — K-12, universities, municipal parks, splash pads, playgrounds, and HOA amenity areas. We design to the typical wind ratings these applications require and provide stamped drawings for design review.",
    },
    {
      q: "How long do shade structures last?",
      a: "Powder-coated steel frames last 25+ years with basic maintenance. Commercial shade fabric carries a 10-year limited warranty from the manufacturer and typically lasts the full term with minimal fade.",
    },
  ],
  "shade-sails": [
    {
      q: "Are shade sails strong enough for Texas wind?",
      a: "Yes — when properly tensioned with engineered anchor points and commercial-grade fabric. Common problem: hardware-store sails that sag and flap. Our sails use tensioned cable edges, turnbuckles for adjustment, and anchorage sized to your wind zone.",
    },
    {
      q: "Can I install shade sails over my pool?",
      a: "Absolutely. Pool-deck sails are one of our most common residential installations. We anchor to existing structure or install dedicated steel posts matched to the surrounding design.",
    },
  ],
  "patio-curtains": [
    {
      q: "What fabric should I pick for patio curtains?",
      a: "Four options: full Sunbrella canvas (soft, traditional, partial light), solid vinyl (full weather protection), clear vinyl (wind block without losing the view), or open-weave mesh (shade + airflow, no weather block). The right choice depends on what you want to block and what you want to see.",
    },
    {
      q: "Can patio curtains be motorized?",
      a: "Yes — roll-up curtains can be motorized with remote or smart-home control. Smaller residential applications often use manual straps or cranks for cost-efficiency.",
    },
  ],
  "motorized-screens": [
    {
      q: "How are motorized screens different from patio curtains?",
      a: "Screens roll up into a slim 4–6 inch housing when retracted — nearly invisible. Patio curtains use exposed straps or rollers. Screens are typically higher-spec (insect mesh, solar mesh, clear vinyl options) and more architectural. Curtains are typically fabric-forward and traditional.",
    },
    {
      q: "Can motorized screens seal against insects?",
      a: "Yes — insect-rated mesh screens with tight side channels keep mosquitoes and flying insects out. Combined with a ceiling, screens turn an open porch into a usable outdoor room year-round.",
    },
  ],
};

export function getProductFaqs(slug: string): FAQ[] {
  return PRODUCT_FAQS[slug] ?? [];
}
