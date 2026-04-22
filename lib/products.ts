export type ProductCategory = "awnings-canopies" | "shade-curtains";

export type Product = {
  slug: string;
  category: ProductCategory;
  /** Matches a folder under public/images/ — source of gallery + hero imagery */
  imageFolder: string;
  title: string;
  breadcrumb: string;
  shortBlurb: string;
  intro: string[];
  features: { title: string; body: string }[];
  useCases: string[];
  materials?: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
};

export const CATEGORIES: Record<
  ProductCategory,
  { slug: ProductCategory; title: string; intro: string; breadcrumb: string }
> = {
  "awnings-canopies": {
    slug: "awnings-canopies",
    title: "Awnings & Canopies",
    breadcrumb: "Products · Awnings & Canopies",
    intro:
      "Custom fabric, metal, and extruded-aluminum awning systems — designed, fabricated, and installed in Houston. Commercial, residential, hospitality, and municipal projects across Texas.",
  },
  "shade-curtains": {
    slug: "shade-curtains",
    title: "Shade & Curtains",
    breadcrumb: "Products · Shade & Curtains",
    intro:
      "Shade structures, shade sails, patio curtains, and motorized screens — the outdoor-comfort half of our business. Texas sun, Gulf wind, bug protection, privacy.",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "fabric-awnings",
    category: "awnings-canopies",
    imageFolder: "fabric-awnings",
    title: "Fabric Awnings",
    breadcrumb: "Awnings & Canopies · Fabric Awnings",
    shortBlurb:
      "Custom canvas and Sunbrella awnings — storefronts, patios, windows, entryways.",
    intro: [
      "Fabric awnings are the most flexible awning system we build. Almost any shape, almost any size, almost any color — we've been sewing them in our Houston shop since 1984.",
      "We build to the geometry and use of your property. Storefronts along San Felipe. Restaurant patios in The Heights. Poolside shade in The Woodlands. Window valances on Alamo Heights estates. Each fabric awning is measured on-site, drawn to scale, welded from aluminum tube, and stitched from heavy-duty canvas or Sunbrella.",
    ],
    features: [
      {
        title: "Any shape, any style",
        body: "Dome, shed, waterfall, quarter-barrel, concave, convex, gable — standard or custom. Bring us a sketch, we'll draw it up.",
      },
      {
        title: "In-house graphics",
        body: "Our graphics department prints logos, names, and custom art directly onto awning fabric. No third-party sign shops.",
      },
      {
        title: "Texas-rated fabric",
        body: "We default to Sunbrella for fade resistance, mold resistance, and 10-year fabric warranty. Vinyl and shade cloth available where they make sense.",
      },
      {
        title: "Built to last outside",
        body: "Aluminum tube frames, stainless fasteners, marine-grade thread. Built to handle Texas sun, Gulf humidity, and hurricane-zone wind.",
      },
    ],
    useCases: [
      "Restaurant and retail storefronts",
      "Residential patio covers",
      "Window and door awnings",
      "Building entryways and valet awnings",
      "Hotel poolside and rooftop shade",
      "HOA and multi-family clubhouse shade",
    ],
    materials: [
      {
        title: "Sunbrella acrylic canvas",
        body: "Our default. 10-year limited fabric warranty. Fade-resistant. Mold-resistant. Hundreds of solids and stripes.",
      },
      {
        title: "Vinyl-coated polyester",
        body: "Heavy-duty option where you need waterproofness and easy cleaning — common for restaurant and food-service applications.",
      },
      {
        title: "Shade cloth / mesh",
        body: "Open-weave fabric for pool decks, carports, and playgrounds where you want shade but airflow.",
      },
    ],
    faqs: [
      {
        q: "How long do fabric awnings last in Texas?",
        a: "A properly built Sunbrella awning will typically hold its color and strength for 10–15 years in Houston sun. Frames last much longer — we often recover frames from the 1990s with new fabric and fresh hardware.",
      },
      {
        q: "Can you match my existing storefront or property colors?",
        a: "Yes. We work from Sunbrella's full solids-and-stripes palette plus custom prints when needed. Bring a fabric swatch or paint chip.",
      },
    ],
  },

  {
    slug: "metal-awnings",
    category: "awnings-canopies",
    imageFolder: "metal-awnings",
    title: "Metal Awnings",
    breadcrumb: "Awnings & Canopies · Metal Awnings",
    shortBlurb:
      "Standing-seam, corrugated, and panel-profile metal awnings in a full range of finishes.",
    intro: [
      "Metal awnings have come a long way. What used to be a single plain profile is now a catalog of options — standing-seam, R-panel, corrugated, mansard, V-rib, flat-lock — in powder-coated and Kynar finishes that hold color for decades.",
      "We fabricate metal awnings in our Houston shop using commercial-grade steel and aluminum systems. They're ideal when you want a more permanent, architectural look than fabric — or when your exposure calls for a roof-grade material.",
    ],
    features: [
      {
        title: "Wide profile selection",
        body: "Standing-seam, R-panel, corrugated, flat-lock, mansard, shed — we match existing architecture or define new character.",
      },
      {
        title: "Long-life finishes",
        body: "Powder-coat or Kynar 500 paint systems with 20–30 year color warranties from the coater.",
      },
      {
        title: "Structural integration",
        body: "We engineer anchorage for your facade — brick, stucco, CMU, metal stud, historic masonry. Stamped drawings available when your AHJ requires them.",
      },
      {
        title: "Color coordination",
        body: "Custom color matches to existing trim, fascia, or corporate branding.",
      },
    ],
    useCases: [
      "Restaurant and retail facades",
      "Strip-center storefronts",
      "School and institutional walkway covers",
      "Apartment and condo breezeways",
      "Drive-thru awnings",
      "Loading-dock and service-bay covers",
    ],
  },

  {
    slug: "extruded-aluminum",
    category: "awnings-canopies",
    imageFolder: "extruded-aluminum",
    title: "Extruded Aluminum Awnings, Walkway Covers & Canopies",
    breadcrumb: "Awnings & Canopies · Extruded Aluminum",
    shortBlurb:
      "Commercial-grade extruded aluminum systems engineered for long service life.",
    intro: [
      "Extruded aluminum is the go-to system for commercial, institutional, and multi-family projects where you need a 30-year service life, minimal maintenance, and engineered anchorage. The extrusions snap together with concealed fasteners — no exposed screw heads, no water intrusion.",
      "We use extruded aluminum for school walkway covers, apartment breezeways, hospital entries, and large commercial canopies. It's the most durable system in our lineup.",
    ],
    features: [
      {
        title: "30+ year service life",
        body: "Aluminum doesn't rust. Kynar coatings don't fade. With basic cleaning, these systems outlast almost every other building component.",
      },
      {
        title: "Engineered spans",
        body: "Clear spans up to 20+ feet with proper support. Cantilevered extensions for covered walkways without intermediate posts.",
      },
      {
        title: "Concealed fasteners",
        body: "Panels snap together with no exposed hardware — cleaner look and no water penetration points.",
      },
      {
        title: "Code-ready",
        body: "We provide stamped structural drawings for AHJ review where required.",
      },
    ],
    useCases: [
      "K-12 and university walkway covers",
      "Apartment-complex breezeways",
      "Medical office entries and drop-offs",
      "Large commercial storefront canopies",
      "Municipal and government building entries",
    ],
  },

  {
    slug: "retractable",
    category: "awnings-canopies",
    imageFolder: "retractable-awnings",
    title: "Retractable Awnings",
    breadcrumb: "Awnings & Canopies · Retractable Awnings",
    shortBlurb:
      "Motorized and manual retractables — shade on demand, out of sight when you want sun.",
    intro: [
      "Retractable awnings give you shade when you want it and open sky when you don't. We install motorized lateral-arm retractables with sun/wind sensors, remote controls, and smart-home integration, as well as simpler hand-crank versions.",
      "Common use cases: covered patios, backyard dining, pool decks, restaurant outdoor seating areas, and rooftop lounges. Arm projection up to 14 feet; widths to 40+ feet in multi-unit installations.",
    ],
    features: [
      {
        title: "Motorized or manual",
        body: "Somfy and Dooya motors with remote control, wall switch, or app control. Manual crank versions for smaller applications.",
      },
      {
        title: "Sun & wind sensors",
        body: "Automatically extends in sun, retracts in high wind — protects the awning and your furniture.",
      },
      {
        title: "Smart-home ready",
        body: "Integrates with Control4, Savant, Crestron, and common hub platforms.",
      },
      {
        title: "Sunbrella fabric",
        body: "Same fade-resistant fabric as our stationary awnings — plenty of solids, stripes, and custom patterns.",
      },
    ],
    useCases: [
      "Residential patios and decks",
      "Outdoor dining at restaurants",
      "Poolside shade without permanent roof",
      "Hotel cabana and rooftop bars",
      "Commercial outdoor work areas",
    ],
  },

  {
    slug: "canopies",
    category: "awnings-canopies",
    imageFolder: "canopies",
    title: "Canopies",
    breadcrumb: "Awnings & Canopies · Canopies",
    shortBlurb:
      "Commercial and event canopies custom-designed for your property.",
    intro: [
      "Canopies are the larger cousins of awnings — often free-standing, often engineered for heavier loads, often a bigger architectural statement. We build entry canopies, drive-thru canopies, event canopies, valet canopies, and large covered outdoor work areas.",
      "Fabric, metal, or extruded aluminum depending on use and exposure. Engineered anchorage and stamped drawings as required.",
    ],
    features: [
      {
        title: "Free-standing or wall-mounted",
        body: "We design for your site — columns, building attachment, or cantilever.",
      },
      {
        title: "Engineered loads",
        body: "Wind, snow, and hurricane-rated systems engineered to AHJ requirements.",
      },
      {
        title: "Any size",
        body: "From a 10×10 entry canopy to a 60-foot dining canopy — we fabricate in-house.",
      },
    ],
    useCases: [
      "Hotel and building entries",
      "Drive-thru and bank teller canopies",
      "Restaurant outdoor dining",
      "Event and wedding venues",
      "Valet and loading areas",
    ],
  },

  {
    slug: "carports",
    category: "awnings-canopies",
    imageFolder: "carports",
    title: "Carports",
    breadcrumb: "Awnings & Canopies · Carports",
    shortBlurb:
      "Steel and aluminum carports — protect vehicles from Texas sun and weather.",
    intro: [
      "A well-built carport keeps your vehicle 30+ degrees cooler than open parking in July, protects paint from UV fade, and shields from hail. We build residential single-car carports all the way up to multi-bay commercial parking covers.",
      "Options range from simple powder-coated steel posts with corrugated metal roofing to architectural extruded-aluminum systems with integrated drainage.",
    ],
    features: [
      {
        title: "Steel or aluminum frame",
        body: "Heavy-gauge steel for strength, aluminum for coastal corrosion resistance.",
      },
      {
        title: "Standing-seam or corrugated roof",
        body: "Choose the profile that matches your home or commercial facade.",
      },
      {
        title: "Engineered anchorage",
        body: "Concrete footers or through-slab anchors depending on your soil and wind zone.",
      },
      {
        title: "HOA-friendly designs",
        body: "We design to match your home and can provide drawings for HOA review.",
      },
    ],
    useCases: [
      "Single- and double-car residential carports",
      "Apartment-complex covered parking",
      "Dealership lot protection",
      "Equipment and trailer storage",
      "RV and boat covers",
    ],
  },

  {
    slug: "gazebos-cabanas",
    category: "awnings-canopies",
    imageFolder: "gazebos-cabanas",
    title: "Gazebos & Cabanas",
    breadcrumb: "Awnings & Canopies · Gazebos / Cabanas",
    shortBlurb:
      "Outdoor living structures — poolside cabanas, garden gazebos, patio pavilions.",
    intro: [
      "Gazebos and cabanas turn backyards into outdoor rooms. Whether it's a poolside cabana with drop-down curtains for privacy, a freestanding gazebo for the garden, or a pavilion covering an outdoor kitchen, we build them custom to your property.",
      "Structures are designed with Texas climate in mind: proper ventilation, shade orientation, drainage, and materials that handle sun, humidity, and the occasional hurricane.",
    ],
    features: [
      {
        title: "Custom dimensions",
        body: "Sized to your deck, patio, or yard — not a kit.",
      },
      {
        title: "Fabric or metal roofs",
        body: "Sunbrella canopies for a softer look, standing-seam metal for permanence.",
      },
      {
        title: "Integrated curtains and screens",
        body: "Optional side curtains or motorized screens for wind, rain, and insect protection.",
      },
      {
        title: "Hospitality finishes",
        body: "We regularly build for hotels, country clubs, and luxury resorts — high-end hardware, custom embroidery, brand colors.",
      },
    ],
    useCases: [
      "Backyard garden gazebos",
      "Poolside cabanas (residential and hotel)",
      "Outdoor kitchen and BBQ pavilions",
      "Country club and resort amenity structures",
      "Event-center lawn pavilions",
    ],
  },

  {
    slug: "shapes-styles",
    category: "awnings-canopies",
    imageFolder: "gallery",
    title: "Awning Shapes & Styles",
    breadcrumb: "Awnings & Canopies · Shapes & Styles",
    shortBlurb:
      "Standard and custom awning shapes — dome, shed, waterfall, quarter-barrel, and more.",
    intro: [
      "Awnings have a surprisingly rich vocabulary of shapes. Each profile throws shade differently, reads differently from the street, and fits different kinds of facades. Here's a quick tour of what we build.",
    ],
    features: [
      {
        title: "Shed / slope",
        body: "The classic rectangular awning, angled down. Workhorse profile for storefronts and windows.",
      },
      {
        title: "Dome",
        body: "Rounded front, most common over residential doors and retail entryways. Warm, inviting look.",
      },
      {
        title: "Waterfall",
        body: "Curved front face with straight sides — elegant and modern, common in hospitality.",
      },
      {
        title: "Quarter-barrel",
        body: "Cylindrical half-section — sculptural, bold, used on high-end restaurants and custom residential.",
      },
      {
        title: "Concave / convex",
        body: "Curved inward or outward — custom architectural profiles matched to building lines.",
      },
      {
        title: "Gable",
        body: "Triangular front, reads like a small roof. Great for traditional facades.",
      },
      {
        title: "Mansard",
        body: "French-style four-sided angled profile. Distinctive and historical.",
      },
      {
        title: "Custom",
        body: "Anything you can draw, we can probably build. Bring us a sketch.",
      },
    ],
    useCases: [],
  },

  // Color Charts is a static page at app/awnings-canopies/color-charts/page.tsx
  // — not in PRODUCTS so it doesn't collide with the dynamic [slug] route.

  // Shade & Curtains
  {
    slug: "shade-structures",
    category: "shade-curtains",
    imageFolder: "shade-structures",
    title: "Shade Structures",
    breadcrumb: "Shade & Curtains · Shade Structures",
    shortBlurb:
      "Engineered shade systems for schools, parks, pools, and commercial properties.",
    intro: [
      "Shade structures are the big engineered covers you see at school playgrounds, community pools, splash pads, parks, and commercial outdoor dining. They block up to 97% of UV and drop surface temperatures dramatically — critical in Texas summers.",
      "Structures use heavy-gauge steel posts, powder-coated finishes, and commercial shade-cloth fabric rated for long-term UV and wind exposure.",
    ],
    features: [
      {
        title: "Up to 97% UV block",
        body: "Commercial shade-cloth rated for maximum UV protection. 10-year fabric warranty typical.",
      },
      {
        title: "Engineered wind resistance",
        body: "Posts and anchorage engineered for 90–150 mph wind depending on your zone.",
      },
      {
        title: "Clear spans",
        body: "Open designs without intermediate posts — important for playgrounds, pools, and multi-bay applications.",
      },
      {
        title: "HOA and municipal design review",
        body: "Stamped drawings and color matching available for design-review submissions.",
      },
    ],
    useCases: [
      "School playgrounds and bus drop-offs",
      "Community and HOA pool decks",
      "Municipal parks and splash pads",
      "Outdoor restaurant dining",
      "Car-wash drying bays",
      "Dog parks and recreation areas",
    ],
  },

  {
    slug: "shade-sails",
    category: "shade-curtains",
    imageFolder: "shade-sails",
    title: "Shade Sails",
    breadcrumb: "Shade & Curtains · Shade Sails",
    shortBlurb:
      "Tensioned fabric shade sails — modern, sculptural, effective.",
    intro: [
      "Shade sails are tensioned triangular or rectangular fabric panels anchored at three or more points. Done right, they look architectural and sculptural — done wrong, they sag and flap. We do them right: engineered anchors, commercial-grade fabric, and proper tensioning.",
      "Sails are a great look for modern residential patios, HOA amenity areas, and commercial outdoor spaces where you want shade without the visual weight of a full structure.",
    ],
    features: [
      {
        title: "Engineered tensioning",
        body: "Proper cable tensioning from day one — no sag, no flap. Turnbuckles for seasonal adjustment.",
      },
      {
        title: "Any geometry",
        body: "Triangles, squares, hypars (twisted 3D shapes) — we design to your site.",
      },
      {
        title: "Building or post anchors",
        body: "We anchor to existing building structure or install engineered steel posts.",
      },
      {
        title: "Commercial shade fabric",
        body: "UV-rated, color-stable, 10-year fabric warranty. Takes Gulf wind.",
      },
    ],
    useCases: [
      "Modern residential patios",
      "HOA pool and amenity decks",
      "Outdoor restaurant seating",
      "Office courtyards and employee break areas",
      "Daycare and school play zones",
    ],
  },

  {
    slug: "patio-curtains",
    category: "shade-curtains",
    imageFolder: "patio-curtains",
    title: "Patio Curtains",
    breadcrumb: "Shade & Curtains · Patio Curtains",
    shortBlurb:
      "Canvas, vinyl, and shade-cloth curtains for patios and porches.",
    intro: [
      "Patio curtains turn an exposed porch or cabana into an enclosed room on demand. Roll them down for sun, wind, or privacy. Roll them up when you want the view.",
      "Available in full canvas, clear vinyl (for wind without blocking the view), solid vinyl (for full weather protection), or open-weave shade cloth.",
    ],
    features: [
      {
        title: "Roll-up operation",
        body: "Manual straps for smaller units, motorized rolls for larger applications.",
      },
      {
        title: "Four fabric options",
        body: "Canvas, solid vinyl, clear vinyl, or mesh — depending on what you want to block and what you want to see.",
      },
      {
        title: "Custom-measured",
        body: "Each panel is measured to fit between your existing columns, beams, or walls.",
      },
      {
        title: "Zipper or snap edges",
        body: "Seal edges against wind with zipper-join or snap-tab systems.",
      },
    ],
    useCases: [
      "Residential covered patios and porches",
      "Outdoor restaurant dining",
      "Poolside cabanas and pavilions",
      "Event-tent sidewalls",
      "Second-story balconies and sleeping porches",
    ],
  },

  {
    slug: "motorized-screens",
    category: "shade-curtains",
    imageFolder: "motorized-screens",
    title: "Exterior Motorized Screens",
    breadcrumb: "Shade & Curtains · Motorized Screens",
    shortBlurb:
      "Retractable motorized screens for shade, privacy, and insect protection.",
    intro: [
      "Motorized screens disappear into a slim housing at the top of your porch or opening, then roll down on demand to give you shade, insect protection, privacy, or full weather protection. They're the most flexible of the shade-and-curtain family.",
      "We install Phantom, Progressive, and equivalent commercial-grade systems with sun and wind sensors, remote control, and smart-home integration.",
    ],
    features: [
      {
        title: "Smooth motorized operation",
        body: "Somfy and equivalent motors with remote, wall switch, or app control.",
      },
      {
        title: "Multiple screen types",
        body: "Insect mesh, shade mesh (10–90% opacity), solid vinyl, or clear vinyl.",
      },
      {
        title: "Wind and sun sensors",
        body: "Auto-retract in high wind to protect the screen. Auto-deploy in direct sun.",
      },
      {
        title: "Near-invisible when retracted",
        body: "Screens roll up into a slim 4–6 inch housing that matches your trim.",
      },
    ],
    useCases: [
      "Covered patios and lanais",
      "Garage-door openings used as outdoor rooms",
      "Commercial dining patios",
      "Second-story balconies",
      "Cabanas and pool pavilions",
    ],
  },
];

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
