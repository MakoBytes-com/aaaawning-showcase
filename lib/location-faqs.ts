import type { FAQ } from "./faqs";
import type { Location } from "./locations";
import { METRO_LABEL, METRO_OFFICE } from "./locations";
import { OFFICES } from "./site";

/**
 * Generates location-specific FAQs for any Texas city we serve.
 * Each FAQ names the city explicitly for local-SEO + AI retrieval.
 * The answers are substituted with the nearest office's phone.
 */
export function getLocationFaqs(location: Location): FAQ[] {
  const office = OFFICES[METRO_OFFICE[location.metro]];
  const city = location.name;
  const metro = METRO_LABEL[location.metro];

  return [
    {
      q: `Do you actually service ${city}?`,
      a: `Yes — ${city} is part of our regular service area. We dispatch our own AAA Awning install crews from the Houston fabrication shop and travel anywhere in the ${metro}. There's no travel surcharge for standard residential or commercial calls inside this service area.`,
    },
    {
      q: `How do I get a free estimate in ${city}?`,
      a: `Call our nearest office at ${office.phone}, or submit the contact form on this site. We'll schedule an on-site visit at your ${city} property, measure, photograph, discuss design and materials, and follow up with a written quote. No obligation, no high-pressure sales.`,
    },
    {
      q: `How long does a typical project take in ${city}?`,
      a: `From signed contract, most residential awning or patio projects in ${city} complete in 2–6 weeks. Commercial canopies and engineered walkway covers run longer depending on stamped drawings and permit review. We give every quote a firm timeline.`,
    },
    {
      q: `Do you handle HOA or city permit submissions in ${city}?`,
      a: `Yes. For HOA architectural review we provide drawings, materials, and color specs. For ${city} city permits or stamped structural drawings, we coordinate engineering and submit to the AHJ as part of the project scope.`,
    },
  ];
}
