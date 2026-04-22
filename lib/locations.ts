export type Metro = "houston" | "dallas" | "fort-worth" | "austin" | "san-antonio";

export type Location = {
  slug: string;
  name: string;
  metro: Metro;
  state: "TX";
  headline: string;
  blurb: string;
};

export const METRO_LABEL: Record<Metro, string> = {
  houston: "Houston Metro & Texas Gulf Coast",
  dallas: "Dallas Metro",
  "fort-worth": "Fort Worth Metro",
  austin: "Austin Metro",
  "san-antonio": "San Antonio Metro",
};

export const LOCATIONS: Location[] = [
  // Houston + Gulf Coast
  { slug: "houston", name: "Houston", metro: "houston", state: "TX", headline: "Custom Awnings & Canopies in Houston, TX", blurb: "Our Houston headquarters has been fabricating and installing custom awnings for residential and commercial projects across Harris County for over 40 years." },
  { slug: "the-woodlands", name: "The Woodlands", metro: "houston", state: "TX", headline: "Awnings & Shade Structures in The Woodlands", blurb: "Custom residential and estate awning design for homes and businesses throughout The Woodlands and Montgomery County." },
  { slug: "sugar-land", name: "Sugar Land", metro: "houston", state: "TX", headline: "Custom Awnings in Sugar Land, TX", blurb: "Award-winning residential and commercial awning installations across Sugar Land, Missouri City, and Fort Bend County." },
  { slug: "katy", name: "Katy", metro: "houston", state: "TX", headline: "Awning Fabrication & Installation in Katy", blurb: "Patio awnings, shade sails, motorized retractables and custom canopies for Katy homes and businesses." },
  { slug: "pearland", name: "Pearland", metro: "houston", state: "TX", headline: "Awnings & Outdoor Shade in Pearland", blurb: "Protect your outdoor living spaces from Gulf Coast sun — Pearland's trusted awning fabricator and installer." },
  { slug: "league-city", name: "League City", metro: "houston", state: "TX", headline: "Coastal-Rated Awnings in League City", blurb: "Hurricane-zone awning design for League City, Clear Lake, and the Bay Area with coastal-grade materials and engineering." },
  { slug: "galveston", name: "Galveston", metro: "houston", state: "TX", headline: "Hurricane-Rated Awnings in Galveston", blurb: "Storm-tested, wind-rated awning systems engineered for Galveston Island residential and commercial properties." },
  { slug: "corpus-christi", name: "Corpus Christi", metro: "houston", state: "TX", headline: "Custom Awnings for Corpus Christi & the Coastal Bend", blurb: "Hurricane-rated fabric, metal, and retractable awnings for Corpus Christi homes, hotels, and commercial properties." },

  // Dallas
  { slug: "dallas", name: "Dallas", metro: "dallas", state: "TX", headline: "Custom Awnings in Dallas, TX", blurb: "Commercial canopies, restaurant awnings, and residential shade structures throughout Dallas County and the Metroplex." },
  { slug: "plano", name: "Plano", metro: "dallas", state: "TX", headline: "Awnings & Canopies in Plano", blurb: "Custom fabric and metal awnings for Plano homeowners, HOAs, and commercial corridors." },
  { slug: "frisco", name: "Frisco", metro: "dallas", state: "TX", headline: "Awning Fabrication in Frisco, TX", blurb: "Shade for new Frisco residential construction, retail, and hospitality — from patio covers to motorized screens." },
  { slug: "mckinney", name: "McKinney", metro: "dallas", state: "TX", headline: "Custom Awnings in McKinney", blurb: "Historic downtown storefront awnings and custom residential shade design across McKinney and Collin County." },
  { slug: "richardson", name: "Richardson", metro: "dallas", state: "TX", headline: "Awnings & Shade in Richardson", blurb: "Our Dallas-area satellite office serves Richardson and the Telecom Corridor for commercial and residential awning projects." },
  { slug: "highland-park", name: "Highland Park & University Park", metro: "dallas", state: "TX", headline: "Estate-Grade Awnings for the Park Cities", blurb: "Premium custom awnings and cabanas for Highland Park and University Park estates." },
  { slug: "allen", name: "Allen", metro: "dallas", state: "TX", headline: "Awnings & Canopies in Allen, TX", blurb: "Residential patio awnings, commercial storefront canopies, and custom shade design for Allen and the surrounding area." },
  { slug: "rockwall", name: "Rockwall", metro: "dallas", state: "TX", headline: "Lakefront & Estate Awnings in Rockwall", blurb: "Custom awnings, pergolas, and shade structures for Rockwall's lakefront properties and commercial corridors." },

  // Fort Worth
  { slug: "fort-worth", name: "Fort Worth", metro: "fort-worth", state: "TX", headline: "Custom Awnings in Fort Worth, TX", blurb: "Commercial and residential awnings, canopies, and carports across Tarrant County and the Mid-Cities." },
  { slug: "arlington", name: "Arlington", metro: "fort-worth", state: "TX", headline: "Awnings & Canopies in Arlington", blurb: "Custom awnings for Arlington homes, businesses, and the entertainment district." },
  { slug: "southlake", name: "Southlake", metro: "fort-worth", state: "TX", headline: "Estate Awnings & Cabanas in Southlake", blurb: "High-end residential awnings, custom cabanas, and pool-side shade structures for Southlake estates." },
  { slug: "keller", name: "Keller", metro: "fort-worth", state: "TX", headline: "Custom Awnings in Keller", blurb: "Residential patio awnings, retractables, and motorized screens for Keller homes." },
  { slug: "colleyville", name: "Colleyville", metro: "fort-worth", state: "TX", headline: "Premium Awnings in Colleyville", blurb: "Luxury residential awnings, shade sails, and cabanas crafted for Colleyville's affluent neighborhoods." },
  { slug: "grapevine", name: "Grapevine", metro: "fort-worth", state: "TX", headline: "Awnings & Shade in Grapevine", blurb: "Commercial storefront canopies, restaurant awnings, and residential shade for Grapevine and DFW airport area." },
  { slug: "westlake", name: "Westlake", metro: "fort-worth", state: "TX", headline: "Estate-Grade Awnings in Westlake, TX", blurb: "Custom-engineered awnings, cabanas, and shade structures for Westlake's estate homes and corporate campuses." },
  { slug: "mansfield", name: "Mansfield", metro: "fort-worth", state: "TX", headline: "Awnings & Canopies in Mansfield", blurb: "Residential and commercial awning design across Mansfield and southern Tarrant County." },

  // Austin
  { slug: "austin", name: "Austin", metro: "austin", state: "TX", headline: "Custom Awnings in Austin, TX", blurb: "Commercial and residential awning fabrication across Austin, Travis County, and Central Texas." },
  { slug: "round-rock", name: "Round Rock", metro: "austin", state: "TX", headline: "Awnings & Shade in Round Rock", blurb: "Patio awnings, retractables, and commercial canopies for Round Rock homes and businesses." },
  { slug: "cedar-park", name: "Cedar Park", metro: "austin", state: "TX", headline: "Custom Awnings in Cedar Park", blurb: "Residential awnings, pergolas, and shade structures for Cedar Park and Leander families." },
  { slug: "georgetown", name: "Georgetown", metro: "austin", state: "TX", headline: "Awning Fabrication in Georgetown, TX", blurb: "Historic downtown storefront awnings and custom residential shade across Georgetown and Williamson County." },
  { slug: "lakeway", name: "Lakeway, Bee Cave & West Lake Hills", metro: "austin", state: "TX", headline: "Hill Country Estate Awnings", blurb: "Luxury lake-view and hill-country awnings, cabanas, and shade structures for Lakeway, Bee Cave, and West Lake Hills." },
  { slug: "kyle", name: "Kyle", metro: "austin", state: "TX", headline: "Custom Awnings in Kyle, TX", blurb: "Residential patio awnings, shade sails, and custom canopies for Kyle, Buda, and southern Hays County." },

  // San Antonio
  { slug: "san-antonio", name: "San Antonio", metro: "san-antonio", state: "TX", headline: "Custom Awnings in San Antonio, TX", blurb: "Commercial and residential awning fabrication across San Antonio, Bexar County, and South Texas." },
  { slug: "alamo-heights", name: "Alamo Heights", metro: "san-antonio", state: "TX", headline: "Estate Awnings in Alamo Heights", blurb: "Heritage-grade custom awnings, cabanas, and shade structures for Alamo Heights estate homes." },
  { slug: "stone-oak", name: "Stone Oak", metro: "san-antonio", state: "TX", headline: "Awnings & Shade in Stone Oak", blurb: "Residential awnings, pergolas, and motorized retractables for Stone Oak and North San Antonio." },
  { slug: "new-braunfels", name: "New Braunfels", metro: "san-antonio", state: "TX", headline: "Custom Awnings in New Braunfels", blurb: "Commercial awnings, residential patios, and event canopies across New Braunfels, Seguin, and Comal County." },
  { slug: "boerne", name: "Boerne", metro: "san-antonio", state: "TX", headline: "Hill Country Awnings in Boerne", blurb: "Hand-crafted awnings, cabanas, and shade structures for Boerne hill-country estates and ranches." },
  { slug: "schertz", name: "Schertz", metro: "san-antonio", state: "TX", headline: "Awnings & Canopies in Schertz", blurb: "Residential and commercial awning design across Schertz, Cibolo, and northeast San Antonio." },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByMetro(metro: Metro): Location[] {
  return LOCATIONS.filter((l) => l.metro === metro);
}
