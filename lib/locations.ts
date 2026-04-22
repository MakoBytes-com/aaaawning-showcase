import { OFFICES } from "./site";

export type Metro = "houston" | "dallas" | "fort-worth" | "austin" | "san-antonio";

export type Location = {
  slug: string;
  name: string;
  metro: Metro;
  state: "TX";
  headline: string;
  blurb: string;
  geo?: { lat: number; lng: number };
  longBody: string[];
  highlights: string[];
};

export const METRO_LABEL: Record<Metro, string> = {
  houston: "Houston Metro & Texas Gulf Coast",
  dallas: "Dallas Metro",
  "fort-worth": "Fort Worth Metro",
  austin: "Austin Metro",
  "san-antonio": "San Antonio Metro",
};

/** Office whose phone number is featured on each metro's city pages */
export const METRO_OFFICE: Record<Metro, keyof typeof OFFICES> = {
  houston: "houston",
  dallas: "dallas",
  "fort-worth": "dallas",
  austin: "austin",
  "san-antonio": "austin",
};

const COMMON_HIGHLIGHTS = [
  "Custom fabric and metal awning fabrication in our Houston shop",
  "Sunbrella Preferred Partner — premium awning fabric options",
  "Installed by AAA employees — no subcontracting",
  "Free on-site measurement and quote",
  "Residential and commercial — any size project",
];

export const LOCATIONS: Location[] = [
  // Houston + Gulf Coast
  {
    slug: "houston",
    name: "Houston",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.7604, lng: -95.3698 },
    headline: "Custom Awnings & Canopies in Houston, TX",
    blurb:
      "Our Houston headquarters has been fabricating and installing custom awnings for residential and commercial projects across Harris County for over 40 years.",
    longBody: [
      "AAA Awning has been Houston-based since 1984. Our 8810 Madie Drive fabrication shop serves every corner of the metro — the Heights and Montrose restaurants, Galleria retail storefronts, West University residential patios, downtown corporate entries, East End industrial walkway covers, and everything in between.",
      "Houston's climate is the reason we build the way we do: year-round UV, Gulf humidity, occasional hurricanes. We spec materials that handle all three — Sunbrella fabric, heavy-gauge aluminum framing, marine-grade fasteners — and engineer anchorage for Texas Building Code wind loads.",
    ],
    highlights: [
      "Our main fabrication and installation office — fastest response in the metro",
      "Restaurant, hospitality, and retail storefront awnings in all major districts",
      "Residential patio covers, retractables, and cabanas across Bellaire, West U, Memorial, The Heights, and River Oaks",
      "Commercial canopies and walkway covers for office parks and industrial clients",
      "Hurricane-rated installations for coastal-zone properties",
    ],
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    metro: "houston",
    state: "TX",
    geo: { lat: 30.1658, lng: -95.4613 },
    headline: "Awnings & Shade Structures in The Woodlands",
    blurb:
      "Custom residential and estate awning design for homes and businesses throughout The Woodlands and Montgomery County.",
    longBody: [
      "The Woodlands brings a particular kind of awning work: large residential properties with pools, cabanas, and outdoor kitchens; Town Center commercial storefronts; and HOA-reviewed exterior changes that need to look like they belong.",
      "We've done poolside cabanas with drop-down curtains in Grogan's Forest, motorized retractables on Lake Woodlands patios, custom fabric awnings on Market Street storefronts, and estate-grade gazebos throughout Creekside Park and Indian Springs.",
    ],
    highlights: [
      "Residential patio awnings, cabanas, and gazebos for The Woodlands estates",
      "HOA-compatible designs with drawings for architectural review",
      "Town Center storefront awnings and commercial canopies",
      "Motorized retractables and exterior screens for poolside and outdoor kitchens",
    ],
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.5994, lng: -95.6145 },
    headline: "Custom Awnings in Sugar Land, TX",
    blurb:
      "Award-winning residential and commercial awning installations across Sugar Land, Missouri City, and Fort Bend County.",
    longBody: [
      "Sugar Land and Fort Bend County have some of our most rewarding residential work — the master-planned communities of Telfair, Riverstone, Greatwood, and Sweetwater have the property sizes that support serious outdoor living projects.",
      "We do pool cabanas with privacy curtains, long retractable awning spans over back patios, architectural metal awnings on Sugar Land Town Square storefronts, and commercial canopies for medical buildings and corporate campuses around US-59.",
    ],
    highlights: [
      "Estate-grade residential awnings, cabanas, and pool pavilions",
      "Sugar Land Town Square retail and restaurant awnings",
      "Commercial canopies and walkway covers for corporate campuses and medical buildings",
      "HOA-ready designs with drawings for architectural review",
    ],
  },
  {
    slug: "katy",
    name: "Katy",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.7858, lng: -95.8245 },
    headline: "Awning Fabrication & Installation in Katy",
    blurb:
      "Patio awnings, shade sails, motorized retractables and custom canopies for Katy homes and businesses.",
    longBody: [
      "Katy's residential growth keeps us busy — Cinco Ranch, Cross Creek Ranch, Firethorne, and the newer Cane Island communities all have the kind of properties where a custom patio awning or pool cabana makes a real difference in outdoor usability.",
      "We also serve Katy's commercial corridor along I-10 and Grand Parkway — storefront awnings at LaCenterra, canopies for corporate offices, and medical walkway covers around the Memorial Hermann Katy medical district.",
    ],
    highlights: [
      "Residential patio awnings and retractables across Cinco Ranch and Cross Creek Ranch",
      "Cabanas, pergolas, and shade sails for pool decks",
      "LaCenterra and Katy Mills retail awnings",
      "Commercial canopies and medical walkway covers near Grand Parkway",
    ],
  },
  {
    slug: "pearland",
    name: "Pearland",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.5636, lng: -95.2861 },
    headline: "Awnings & Outdoor Shade in Pearland",
    blurb:
      "Protect your outdoor living spaces from Gulf Coast sun — Pearland's trusted awning fabricator and installer.",
    longBody: [
      "Pearland homes get serious Texas sun, and we build the awning systems that make back patios usable year-round. Silverlake, Shadow Creek Ranch, and the older central Pearland neighborhoods all have good awning and shade-sail opportunities.",
      "On the commercial side, we serve Pearland Town Center, medical campuses near Pearland Parkway, and the growing retail corridor along SH-288. Metal awnings and extruded-aluminum walkway covers are common calls here.",
    ],
    highlights: [
      "Residential patio awnings, shade sails, and motorized retractables",
      "Pool cabanas and outdoor kitchen pavilions",
      "Pearland Town Center and SH-288 commercial corridor awnings",
      "Medical walkway covers and drive-thru canopies",
    ],
  },
  {
    slug: "league-city",
    name: "League City",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.5075, lng: -95.0949 },
    headline: "Coastal-Rated Awnings in League City",
    blurb:
      "Hurricane-zone awning design for League City, Clear Lake, and the Bay Area with coastal-grade materials and engineering.",
    longBody: [
      "League City and Clear Lake are coastal-zone properties — salt air, high humidity, and serious hurricane exposure. We build awnings here differently: stainless-steel fasteners, marine-grade aluminum, and engineered anchorage for the local AHJ wind zone (typically 130 mph design speed).",
      "Most of our work here is residential — waterfront properties on Clear Lake and Clear Creek with serious outdoor living investment — along with commercial projects in Victory Lakes and around the NASA Road 1 corridor.",
    ],
    highlights: [
      "Hurricane-rated residential and commercial awning systems",
      "Marine-grade hardware and coastal corrosion resistance",
      "Engineered anchorage and stamped drawings for AHJ review",
      "Waterfront property cabanas, shade sails, and retractable awnings",
    ],
  },
  {
    slug: "galveston",
    name: "Galveston",
    metro: "houston",
    state: "TX",
    geo: { lat: 29.3013, lng: -94.7977 },
    headline: "Hurricane-Rated Awnings in Galveston",
    blurb:
      "Storm-tested, wind-rated awning systems engineered for Galveston Island residential and commercial properties.",
    longBody: [
      "Galveston Island properties face the toughest awning conditions in our service area — direct salt exposure, hurricane-zone wind loads, and intense year-round UV. We spec everything here to coastal grade: marine aluminum, stainless fasteners, removable fabric panels where it makes sense, and Kynar-finished metal systems that hold up.",
      "Our Galveston work spans The Strand storefronts and restaurants, historic East End homes, beachfront and bayside residences, hotels and condos along Seawall Boulevard, and tourism-facing retail throughout the island.",
    ],
    highlights: [
      "Hurricane-rated awning fabrication for Galveston's coastal exposure",
      "Historic district storefront awnings with period-appropriate profiles",
      "Beachfront residential cabanas, shade sails, and coastal retractables",
      "Hotel and condo poolside awnings and motorized screens",
      "Post-storm damage assessment and repair for existing installations",
    ],
  },
  {
    slug: "corpus-christi",
    name: "Corpus Christi",
    metro: "houston",
    state: "TX",
    geo: { lat: 27.8006, lng: -97.3964 },
    headline: "Custom Awnings for Corpus Christi & the Coastal Bend",
    blurb:
      "Hurricane-rated fabric, metal, and retractable awnings for Corpus Christi homes, hotels, and commercial properties.",
    longBody: [
      "Corpus Christi is our southernmost service area and one of our highest-exposure coastal markets. Padre Island properties, bayfront residential in Flour Bluff, hotels and condos along Ocean Drive, and commercial along Staples Street and SPID — all of it needs coastal-grade spec.",
      "We travel in crews and install directly; no local subcontractors. Most projects here pair metal or extruded-aluminum systems for durability with fabric elements we can remove before named storms.",
    ],
    highlights: [
      "Padre Island and Mustang Island coastal-residential installations",
      "Hurricane-rated metal and extruded aluminum systems",
      "Hotel, condo, and restaurant awnings along Ocean Drive and SPID",
      "Bayfront residential cabanas and poolside shade",
    ],
  },

  // Dallas
  {
    slug: "dallas",
    name: "Dallas",
    metro: "dallas",
    state: "TX",
    geo: { lat: 32.7767, lng: -96.797 },
    headline: "Custom Awnings in Dallas, TX",
    blurb:
      "Commercial canopies, restaurant awnings, and residential shade structures throughout Dallas County and the Metroplex.",
    longBody: [
      "Dallas is our second-largest service area, with a satellite office in Richardson. We cover everything from Deep Ellum restaurant awnings to Preston Hollow estate cabanas, Knox-Henderson storefronts, downtown building entries, and the medical district around UT Southwestern.",
      "North Texas weather is different from Houston — less humidity, bigger temperature swings, occasional hail. We spec metal awnings with standing-seam or R-panel profiles more often here, and design for hail resistance where exposure calls for it.",
    ],
    highlights: [
      "Deep Ellum, Lower Greenville, and Knox-Henderson restaurant awnings",
      "Preston Hollow and Lakewood residential estate awnings and cabanas",
      "Downtown building entry canopies and valet awnings",
      "Medical District walkway covers and institutional shade",
      "Hail-resistant metal awning systems",
    ],
  },
  {
    slug: "plano",
    name: "Plano",
    metro: "dallas",
    state: "TX",
    geo: { lat: 33.0198, lng: -96.6989 },
    headline: "Awnings & Canopies in Plano",
    blurb:
      "Custom fabric and metal awnings for Plano homeowners, HOAs, and commercial corridors.",
    longBody: [
      "Plano's mix of established neighborhoods (West Plano, Willow Bend, Hunters Glen) and corporate campuses along Legacy Drive means we see both residential and commercial work here constantly.",
      "Legacy West and Shops at Legacy are regular for storefront awnings. Residential calls run toward motorized retractables and patio awnings on west-facing backyards — that afternoon sun is brutal.",
    ],
    highlights: [
      "Residential retractable awnings for west-facing patios",
      "Legacy West and Shops at Legacy storefront awnings",
      "Corporate campus entries and walkway covers",
      "HOA-approved design for Willow Bend and Hunters Glen",
    ],
  },
  {
    slug: "frisco",
    name: "Frisco",
    metro: "dallas",
    state: "TX",
    geo: { lat: 33.1507, lng: -96.8236 },
    headline: "Awning Fabrication in Frisco, TX",
    blurb:
      "Shade for new Frisco residential construction, retail, and hospitality — from patio covers to motorized screens.",
    longBody: [
      "Frisco's construction boom keeps us in new-home patio awning work — Phillips Creek Ranch, Starwood, Newman Village, and the PGA of America district. Most new builds skip the patio cover to save on the initial price, then call us once they realize the backyard is unusable without shade.",
      "Commercial work includes The Star storefronts, Frisco Square, and the Stonebriar Mall corridor. Hospitality work around the Dallas Cowboys World Headquarters and the many Frisco hotels is steady.",
    ],
    highlights: [
      "New-construction residential patio awnings and retractables",
      "The Star and Frisco Square retail awnings",
      "Hospitality awnings for hotels along Dallas North Tollway",
      "Commercial canopies and walkway covers",
    ],
  },
  {
    slug: "mckinney",
    name: "McKinney",
    metro: "dallas",
    state: "TX",
    geo: { lat: 33.1972, lng: -96.6397 },
    headline: "Custom Awnings in McKinney",
    blurb:
      "Historic downtown storefront awnings and custom residential shade design across McKinney and Collin County.",
    longBody: [
      "Historic Downtown McKinney's storefronts need period-appropriate awning profiles — shed and dome shapes in traditional colors, often with hand-painted or embroidered signage. We've done dozens of these on the Square.",
      "Newer McKinney — Craig Ranch, Stonebridge Ranch, Tucker Hill — runs toward estate-grade residential work: large patios, pool cabanas, pergolas with retractable roofs.",
    ],
    highlights: [
      "Historic Downtown McKinney Square storefront awnings",
      "Hand-painted or embroidered signage on awning fabric",
      "Craig Ranch and Stonebridge Ranch residential awnings",
      "HOA-approved designs for established neighborhoods",
    ],
  },
  {
    slug: "richardson",
    name: "Richardson",
    metro: "dallas",
    state: "TX",
    geo: { lat: 32.9483, lng: -96.7298 },
    headline: "Awnings & Shade in Richardson",
    blurb:
      "Our Dallas-area satellite office serves Richardson and the Telecom Corridor for commercial and residential awning projects.",
    longBody: [
      "Richardson is home to our Dallas-area satellite office at 2511 Prairie Creek Dr. West. It's the coordination point for North Texas projects — by-appointment visits, quick estimate pickups, and local crew staging.",
      "Residential work runs across Canyon Creek and Richardson Heights — patio awnings, retractables, and pergolas. Commercial is heavy in the Telecom Corridor — office campus entries, walkway covers, and outdoor employee areas.",
    ],
    highlights: [
      "Our local Dallas-area satellite office (by appointment)",
      "Telecom Corridor office-campus awnings and canopies",
      "Residential awnings across Canyon Creek and Richardson Heights",
      "University and institutional shade at UTD",
    ],
  },
  {
    slug: "highland-park",
    name: "Highland Park & University Park",
    metro: "dallas",
    state: "TX",
    geo: { lat: 32.8332, lng: -96.7969 },
    headline: "Estate-Grade Awnings for the Park Cities",
    blurb:
      "Premium custom awnings and cabanas for Highland Park and University Park estates.",
    longBody: [
      "Park Cities work is almost entirely estate-grade residential — custom-designed fabric awnings for traditional homes, pool cabanas with serious architectural detailing, and motorized retractable systems with smart-home integration.",
      "We draw to match existing architecture (often traditional, often historic-register-adjacent), use the highest-grade hardware we spec on any project, and coordinate carefully with the exterior designers and landscape architects the Park Cities clients typically work with.",
    ],
    highlights: [
      "Estate-grade residential awnings matched to traditional architecture",
      "Premium pool cabanas with architectural detailing",
      "Smart-home-integrated motorized retractables and screens",
      "Coordination with exterior designers and landscape architects",
    ],
  },
  {
    slug: "allen",
    name: "Allen",
    metro: "dallas",
    state: "TX",
    geo: { lat: 33.1032, lng: -96.6706 },
    headline: "Awnings & Canopies in Allen, TX",
    blurb:
      "Residential patio awnings, commercial storefront canopies, and custom shade design for Allen and the surrounding area.",
    longBody: [
      "Allen is one of the fastest-growing cities in North Texas and our residential volume here has kept pace — Twin Creeks, Watters Creek, Starcreek, and the newer neighborhoods around Ridgeview all call for patio awning and retractable work.",
      "Watters Creek and The Village at Allen commercial corridors keep us in restaurant awning and retail canopy projects regularly.",
    ],
    highlights: [
      "Residential patio awnings, retractables, and pergolas",
      "Watters Creek restaurant and retail awnings",
      "The Village at Allen commercial canopies",
      "HOA-ready designs for new neighborhoods",
    ],
  },
  {
    slug: "rockwall",
    name: "Rockwall",
    metro: "dallas",
    state: "TX",
    geo: { lat: 32.9312, lng: -96.4597 },
    headline: "Lakefront & Estate Awnings in Rockwall",
    blurb:
      "Custom awnings, pergolas, and shade structures for Rockwall's lakefront properties and commercial corridors.",
    longBody: [
      "Lake Ray Hubbard properties in Rockwall are some of the most fun residential work we do — waterfront patios, boat-dock shade, and outdoor kitchens with serious sun exposure. The Shores, Chandler's Landing, and The Harbor area all get regular AAA installations.",
      "Downtown Rockwall's Historic Square storefronts also call us for period-appropriate fabric awnings with painted or embroidered signage.",
    ],
    highlights: [
      "Lakefront residential awnings, pergolas, and retractables on Lake Ray Hubbard",
      "Boat-dock shade structures and waterside cabanas",
      "Historic Downtown Rockwall storefront awnings",
      "The Harbor hospitality and retail awnings",
    ],
  },

  // Fort Worth
  {
    slug: "fort-worth",
    name: "Fort Worth",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.7555, lng: -97.3308 },
    headline: "Custom Awnings in Fort Worth, TX",
    blurb:
      "Commercial and residential awnings, canopies, and carports across Tarrant County and the Mid-Cities.",
    longBody: [
      "Fort Worth has its own character and we love the work here. Downtown and Sundance Square keep us in restaurant and historic-storefront awnings. The Cultural District — Montgomery Plaza, West 7th — runs toward modern commercial and multi-family.",
      "Residential work covers Arlington Heights, TCU-area bungalows, the Ridglea neighborhoods, and the growing Tanglewood district. Fort Worth's blend of traditional and modern residential gives us a wide range of awning styles to build.",
    ],
    highlights: [
      "Sundance Square and downtown storefront awnings",
      "Cultural District and West 7th modern commercial canopies",
      "Residential awnings across Arlington Heights, Tanglewood, and Ridglea",
      "TCU-area restaurant and retail awnings",
      "Historic district period-appropriate profiles",
    ],
  },
  {
    slug: "arlington",
    name: "Arlington",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.7357, lng: -97.1081 },
    headline: "Awnings & Canopies in Arlington",
    blurb:
      "Custom awnings for Arlington homes, businesses, and the entertainment district.",
    longBody: [
      "Arlington's Entertainment District — AT&T Stadium, Globe Life Field, Six Flags, Texas Live — drives a lot of hospitality awning work: restaurant patios, hotel canopies, and bar outdoor seating.",
      "Residential work spans from established neighborhoods like Park Row and Westover Hills to the newer far-south communities. Commercial runs along I-30 and Collins Street retail corridors.",
    ],
    highlights: [
      "Entertainment District restaurant and hotel awnings",
      "Residential patio awnings and retractables",
      "I-30 and Collins Street commercial corridor storefronts",
      "UT Arlington institutional shade structures",
    ],
  },
  {
    slug: "southlake",
    name: "Southlake",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.9412, lng: -97.1342 },
    headline: "Estate Awnings & Cabanas in Southlake",
    blurb:
      "High-end residential awnings, custom cabanas, and pool-side shade structures for Southlake estates.",
    longBody: [
      "Southlake is one of our premium residential markets. Estate-grade homes in Timarron, Stonebury, Carillon, and Clariden Ranch routinely call for serious outdoor-living projects: pool cabanas, custom pergolas with retractable roofs, motorized screens, and high-end fabric awning systems.",
      "We also handle Southlake Town Square commercial awning work — restaurants, retail, and hospitality along Grand Avenue.",
    ],
    highlights: [
      "Estate-grade pool cabanas and pergolas for Timarron, Stonebury, and Clariden Ranch",
      "Smart-home motorized retractables and screens",
      "Southlake Town Square retail and restaurant awnings",
      "Architectural coordination with existing estate design",
    ],
  },
  {
    slug: "keller",
    name: "Keller",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.9346, lng: -97.2515 },
    headline: "Custom Awnings in Keller",
    blurb:
      "Residential patio awnings, retractables, and motorized screens for Keller homes.",
    longBody: [
      "Keller is predominantly residential and that's where our volume here is — patio awnings, retractable systems, motorized screens, and pool cabanas for the Highland Oaks, Marshall Ridge, and Hidden Lakes neighborhoods.",
      "We also do occasional historic Old Town Keller storefront work and Keller Town Center commercial awnings.",
    ],
    highlights: [
      "Residential patio awnings and retractables",
      "Motorized exterior screens for outdoor living",
      "Pool cabanas and pergolas",
      "Old Town Keller period-appropriate storefront awnings",
    ],
  },
  {
    slug: "colleyville",
    name: "Colleyville",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.8803, lng: -97.155 },
    headline: "Premium Awnings in Colleyville",
    blurb:
      "Luxury residential awnings, shade sails, and cabanas crafted for Colleyville's affluent neighborhoods.",
    longBody: [
      "Colleyville is almost pure luxury residential from our perspective — large lots, big budgets, and serious outdoor-living investment. We routinely build pool cabanas, pergolas with integrated motorized screens, custom shade sails, and fabric awning systems for estates in Caldwell Creek, Cross Timbers, and Willow Creek.",
      "HOA processes here are rigorous — we include drawings and material specs with every quote for architectural review.",
    ],
    highlights: [
      "Luxury pool cabanas and pergolas",
      "Custom shade sails in residential backyards",
      "Motorized retractables and exterior screens with smart-home integration",
      "HOA-ready drawings and material specs",
    ],
  },
  {
    slug: "grapevine",
    name: "Grapevine",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.9343, lng: -97.0781 },
    headline: "Awnings & Shade in Grapevine",
    blurb:
      "Commercial storefront canopies, restaurant awnings, and residential shade for Grapevine and DFW airport area.",
    longBody: [
      "Historic Main Street Grapevine is classic awning territory — period fabric profiles, painted signage, and traditional colors. We've done many of the Main Street storefronts over the years.",
      "Commercial work extends to Grapevine Mills, the Glade Parks retail corridor, and the hotel properties around DFW Airport's north side. Residential work around Grapevine Lake and the Peninsula adds lakefront patio and cabana projects.",
    ],
    highlights: [
      "Historic Main Street Grapevine storefront awnings",
      "Grapevine Mills and Glade Parks commercial canopies",
      "DFW Airport-area hotel hospitality awnings",
      "Grapevine Lake residential waterfront shade structures",
    ],
  },
  {
    slug: "westlake",
    name: "Westlake",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.9912, lng: -97.1964 },
    headline: "Estate-Grade Awnings in Westlake, TX",
    blurb:
      "Custom-engineered awnings, cabanas, and shade structures for Westlake's estate homes and corporate campuses.",
    longBody: [
      "Westlake is ultra-low population and ultra-high spend — estate homes in Vaquero, Terra Bella, and Glenwyck Farms routinely call for the most premium outdoor-living work we do. Custom pool pavilions, Italianate pergolas, and smart-integrated motorized systems are common.",
      "The Charles Schwab, Fidelity, and Deloitte corporate campuses in Westlake also call us for outdoor employee area canopies and entry awnings.",
    ],
    highlights: [
      "Ultra-premium residential cabanas, pergolas, and pool pavilions",
      "Smart-home integrated motorized retractables and screens",
      "Corporate campus outdoor employee areas and entry canopies",
      "Architectural coordination with estate-level design teams",
    ],
  },
  {
    slug: "mansfield",
    name: "Mansfield",
    metro: "fort-worth",
    state: "TX",
    geo: { lat: 32.5632, lng: -97.1417 },
    headline: "Awnings & Canopies in Mansfield",
    blurb:
      "Residential and commercial awning design across Mansfield and southern Tarrant County.",
    longBody: [
      "Mansfield's growth in the last decade has brought steady new-residential awning work — Walnut Creek, South Pointe, and the newer neighborhoods around US-287 frequently call for patio covers and retractable awnings once the homes are a year or two old.",
      "Historic Downtown Mansfield storefronts and the growing commercial corridor along Debbie Lane round out the mix.",
    ],
    highlights: [
      "New-construction residential patio awnings",
      "Retractable awnings for west-facing backyards",
      "Historic Downtown Mansfield storefront awnings",
      "Debbie Lane commercial corridor canopies",
    ],
  },

  // Austin
  {
    slug: "austin",
    name: "Austin",
    metro: "austin",
    state: "TX",
    geo: { lat: 30.2672, lng: -97.7431 },
    headline: "Custom Awnings in Austin, TX",
    blurb:
      "Commercial and residential awning fabrication across Austin, Travis County, and Central Texas.",
    longBody: [
      "Austin's mix of historic East Side storefronts, South Congress retail, Downtown hotel and restaurant work, and West Austin estate residential keeps our Austin crew busy. The aesthetic here runs more modern and minimal than Houston or Dallas — more metal, fewer traditional stripes.",
      "Our Austin office operates by phone ((512) 459-1540) with install crews dispatched from Houston. We travel for larger projects and meet at your property for estimates.",
    ],
    highlights: [
      "South Congress and East Side storefront and restaurant awnings",
      "Downtown hotel entry canopies and outdoor hospitality",
      "West Austin estate residential awnings and cabanas",
      "Modern minimalist metal profiles for contemporary architecture",
      "UT Austin and institutional walkway covers",
    ],
  },
  {
    slug: "round-rock",
    name: "Round Rock",
    metro: "austin",
    state: "TX",
    geo: { lat: 30.5083, lng: -97.6789 },
    headline: "Awnings & Shade in Round Rock",
    blurb:
      "Patio awnings, retractables, and commercial canopies for Round Rock homes and businesses.",
    longBody: [
      "Round Rock is our volume city north of Austin — residential neighborhoods like Teravista, Forest Creek, and the Sonoma communities all call regularly for patio awnings and retractables.",
      "Commercial work runs along I-35, the Dell headquarters area, and Round Rock Premium Outlets corridor.",
    ],
    highlights: [
      "Residential patio awnings and retractables",
      "Dell campus and Round Rock office-park awnings",
      "Round Rock Premium Outlets retail canopies",
      "HOA-friendly designs",
    ],
  },
  {
    slug: "cedar-park",
    name: "Cedar Park",
    metro: "austin",
    state: "TX",
    geo: { lat: 30.5052, lng: -97.8203 },
    headline: "Custom Awnings in Cedar Park",
    blurb:
      "Residential awnings, pergolas, and shade structures for Cedar Park and Leander families.",
    longBody: [
      "Cedar Park and neighboring Leander are residential-heavy and west-facing in lots of cases — which means afternoon sun is brutal and retractable awnings earn their keep. Twin Creeks, Buttercup Creek, and Ranch at Brushy Creek all get regular awning work.",
      "Commercial work includes 1890 Ranch and Cedar Park Town Center retail corridors.",
    ],
    highlights: [
      "Residential retractable awnings for west-facing patios",
      "Pergolas and shade sails for backyard outdoor-living projects",
      "1890 Ranch and Cedar Park Town Center retail awnings",
      "Pool cabanas and outdoor kitchen pavilions",
    ],
  },
  {
    slug: "georgetown",
    name: "Georgetown",
    metro: "austin",
    state: "TX",
    geo: { lat: 30.6333, lng: -97.678 },
    headline: "Awning Fabrication in Georgetown, TX",
    blurb:
      "Historic downtown storefront awnings and custom residential shade across Georgetown and Williamson County.",
    longBody: [
      "Historic Downtown Georgetown Square is one of the best-preserved courthouse squares in Texas, and its storefronts call for traditional awning profiles with hand-painted or embroidered signage. We've done many of these over the years.",
      "Residential work covers Sun City Texas, Wolf Ranch, and the newer neighborhoods around SH-130 — patio awnings, retractables, and pergolas are constant calls.",
    ],
    highlights: [
      "Historic Georgetown Square period-appropriate storefront awnings",
      "Sun City Texas 55+ community residential awnings",
      "Wolf Ranch and newer neighborhood patio awnings",
      "Hand-painted and embroidered signage on awning fabric",
    ],
  },
  {
    slug: "lakeway",
    name: "Lakeway, Bee Cave & West Lake Hills",
    metro: "austin",
    state: "TX",
    geo: { lat: 30.3621, lng: -97.9823 },
    headline: "Hill Country Estate Awnings",
    blurb:
      "Luxury lake-view and hill-country awnings, cabanas, and shade structures for Lakeway, Bee Cave, and West Lake Hills.",
    longBody: [
      "Lake Travis, Lake Austin, and the Hill Country terrain make Lakeway, Bee Cave, and West Lake Hills some of our best estate-grade residential markets. Property-wide outdoor-living projects — pool pavilions, wine patios, lakeview cabanas, pergolas with retractable roofs — are regular work here.",
      "The stone-and-cedar Hill Country aesthetic pairs particularly well with structural metal awnings in warm bronzes and earth tones.",
    ],
    highlights: [
      "Lake Travis and Lake Austin waterfront cabanas and pergolas",
      "Hill Country estate residential awnings and shade sails",
      "Warm bronze Kynar finishes to match stone-and-cedar architecture",
      "Custom wine patio and outdoor-kitchen pavilions",
    ],
  },
  {
    slug: "kyle",
    name: "Kyle",
    metro: "austin",
    state: "TX",
    geo: { lat: 29.9893, lng: -97.8772 },
    headline: "Custom Awnings in Kyle, TX",
    blurb:
      "Residential patio awnings, shade sails, and custom canopies for Kyle, Buda, and southern Hays County.",
    longBody: [
      "Kyle and Buda are fast-growing communities south of Austin along I-35, with neighborhoods like Plum Creek, Six Creeks, and the newer 4S Ranch calling for steady patio awning and retractable work as homes age out of the builder-basic state.",
      "Commercial work includes the I-35 corridor and downtown Kyle's growing main street.",
    ],
    highlights: [
      "Residential patio awnings and retractables for new construction",
      "Shade sails and pergolas for backyard outdoor living",
      "Downtown Kyle and I-35 commercial canopies",
      "HOA-compatible designs for Plum Creek and 4S Ranch",
    ],
  },

  // San Antonio
  {
    slug: "san-antonio",
    name: "San Antonio",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.4241, lng: -98.4936 },
    headline: "Custom Awnings in San Antonio, TX",
    blurb:
      "Commercial and residential awning fabrication across San Antonio, Bexar County, and South Texas.",
    longBody: [
      "San Antonio is our southernmost metro service area and a rich mix of historic and modern work. The Pearl and River Walk restaurant awnings, Southtown's artist-district storefronts, Alamo Heights estate residential, and Medical Center commercial walkway covers all see regular AAA installations.",
      "The city's combination of Spanish Colonial architecture, Tex-Mex commercial character, and serious summer heat means we get to work across a wide aesthetic and material range.",
    ],
    highlights: [
      "The Pearl and River Walk hospitality awnings",
      "Historic Southtown and King William storefront awnings",
      "Medical Center and SoMed walkway covers and commercial shade",
      "Alamo Heights and Olmos Park estate residential",
      "Spanish Colonial and Mission-style period-appropriate profiles",
    ],
  },
  {
    slug: "alamo-heights",
    name: "Alamo Heights",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.4762, lng: -98.4651 },
    headline: "Estate Awnings in Alamo Heights",
    blurb:
      "Heritage-grade custom awnings, cabanas, and shade structures for Alamo Heights estate homes.",
    longBody: [
      "Alamo Heights is one of San Antonio's most architecturally rich enclaves and one of our favorite residential markets. The work here is almost entirely estate-grade: fabric awning systems for traditional homes, custom pool cabanas matched to Spanish Colonial or Mediterranean architecture, and motorized retractables integrated into existing pergolas.",
      "We routinely coordinate with the landscape architects and exterior designers the Alamo Heights / Olmos Park / Terrell Hills clients typically work with.",
    ],
    highlights: [
      "Estate-grade residential fabric and metal awnings",
      "Spanish Colonial and Mediterranean-style custom cabanas",
      "Motorized retractable awnings integrated with existing pergolas",
      "Coordination with landscape architects and exterior designers",
    ],
  },
  {
    slug: "stone-oak",
    name: "Stone Oak",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.6243, lng: -98.4675 },
    headline: "Awnings & Shade in Stone Oak",
    blurb:
      "Residential awnings, pergolas, and motorized retractables for Stone Oak and North San Antonio.",
    longBody: [
      "Stone Oak's hilly North San Antonio terrain gives a lot of properties good exposure — and a lot of need for afternoon shade. We build patio awnings, pergolas with retractable canopies, pool cabanas, and motorized screens throughout the community.",
      "The adjacent Sonterra, Inverness, and Rogers Ranch neighborhoods see similar work from us.",
    ],
    highlights: [
      "Residential patio awnings and retractables across Stone Oak",
      "Pergolas with retractable fabric canopies",
      "Pool cabanas and outdoor kitchen pavilions",
      "Motorized exterior screens for covered outdoor living",
    ],
  },
  {
    slug: "new-braunfels",
    name: "New Braunfels",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.703, lng: -98.1245 },
    headline: "Custom Awnings in New Braunfels",
    blurb:
      "Commercial awnings, residential patios, and event canopies across New Braunfels, Seguin, and Comal County.",
    longBody: [
      "New Braunfels sits between Austin and San Antonio and has its own strong character — German-heritage downtown with traditional storefronts, Schlitterbahn and the Comal River tourism economy, and rapidly growing residential to the north and south.",
      "We build period-appropriate historic downtown storefront awnings, hospitality canopies for the tourism corridor, and patio awnings across the Kestrel Airpark, River Chase, and Rockwall Ranch neighborhoods.",
    ],
    highlights: [
      "Historic Downtown New Braunfels German-heritage storefront awnings",
      "Schlitterbahn-adjacent hospitality and tourism awnings",
      "Residential patio awnings for Kestrel Airpark and River Chase",
      "Commercial canopies along I-35 corridor",
    ],
  },
  {
    slug: "boerne",
    name: "Boerne",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.7947, lng: -98.732 },
    headline: "Hill Country Awnings in Boerne",
    blurb:
      "Hand-crafted awnings, cabanas, and shade structures for Boerne hill-country estates and ranches.",
    longBody: [
      "Boerne and the surrounding Hill Country have some of our most architecturally rewarding residential work — ranches, estates, and vineyards that support property-scale outdoor-living projects. Stone and cedar architecture, big porches, and serious Texas sun make awnings essential.",
      "We build pool cabanas, wine patios, pergolas with retractable fabric canopies, and custom shade sails throughout Boerne, Fair Oaks Ranch, and the neighboring Kendall County properties.",
    ],
    highlights: [
      "Hill Country ranch and estate residential awnings",
      "Wine-patio and outdoor-kitchen pavilions",
      "Pool cabanas and pergolas with retractable canopies",
      "Warm bronze Kynar finishes matched to stone-and-cedar architecture",
    ],
  },
  {
    slug: "schertz",
    name: "Schertz",
    metro: "san-antonio",
    state: "TX",
    geo: { lat: 29.5511, lng: -98.2695 },
    headline: "Awnings & Canopies in Schertz",
    blurb:
      "Residential and commercial awning design across Schertz, Cibolo, and northeast San Antonio.",
    longBody: [
      "Schertz, Cibolo, Universal City, and Live Oak form a cluster of fast-growing bedroom communities in Northeast San Antonio, and we see steady residential patio awning and retractable work across the newer neighborhoods.",
      "Commercial work includes the I-35 and FM-3009 corridors along with the Randolph AFB-adjacent hotel and hospitality properties.",
    ],
    highlights: [
      "Residential patio awnings and retractables",
      "Pool cabanas and pergolas for new-construction neighborhoods",
      "I-35 and FM-3009 commercial corridor awnings",
      "Randolph AFB-area hospitality canopies",
    ],
  },
];

export const LOCATION_SLUGS = LOCATIONS.map((l) => l.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByMetro(metro: Metro): Location[] {
  return LOCATIONS.filter((l) => l.metro === metro);
}

export function getNearbyLocations(
  slug: string,
  limit = 5,
): Location[] {
  const current = getLocationBySlug(slug);
  if (!current) return [];
  return LOCATIONS.filter((l) => l.metro === current.metro && l.slug !== slug).slice(
    0,
    limit,
  );
}
