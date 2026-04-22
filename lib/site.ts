export const SITE = {
  name: "AAA Awning Co., Inc.",
  shortName: "AAA Awning",
  tagline: "Over 40 Years of metal and canvas awning products and services",
  url: "https://aaaawning.net",
  email: "admin@aaaawning.net",
  legacyEmail: "main@aaaawning.net",
  copyrightStartYear: 1984,
};

export const OFFICES = {
  houston: {
    label: "Houston Main",
    phone: "(713) 694-3930",
    phoneHref: "tel:+17136943930",
    street: "8810 Madie Drive",
    city: "Houston",
    state: "TX",
    zip: "77022-2617",
  },
  dallas: {
    label: "Dallas",
    phone: "(214) 553-0733",
    phoneHref: "tel:+12145530733",
    street: "2511 Prairie Creek Dr. West",
    city: "Richardson",
    state: "TX",
    zip: "75080",
    note: "By appointment only",
  },
  austin: {
    label: "Austin",
    phone: "(512) 459-1540",
    phoneHref: "tel:+15124591540",
  },
} as const;

export const HOURS = "Monday – Friday, 8:00 AM – 4:00 PM";

export const SOCIAL = {
  facebook: "https://www.facebook.com/AAA-Awning-158120620885158",
  instagram: "https://www.instagram.com/",
  pinterest: "https://ar.pinterest.com/pin/84020349268584445/",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Awnings & Canopies",
    href: "/awnings-canopies",
    children: [
      { label: "Fabric Awnings", href: "/awnings-canopies/fabric-awnings" },
      { label: "Metal Awnings", href: "/awnings-canopies/metal-awnings" },
      { label: "Extruded Aluminum", href: "/awnings-canopies/extruded-aluminum" },
      { label: "Retractable Awnings", href: "/awnings-canopies/retractable" },
      { label: "Canopies", href: "/awnings-canopies/canopies" },
      { label: "Carports", href: "/awnings-canopies/carports" },
      { label: "Gazebos / Cabanas", href: "/awnings-canopies/gazebos-cabanas" },
      { label: "Shapes & Styles", href: "/awnings-canopies/shapes-styles" },
      { label: "Color Charts", href: "/awnings-canopies/color-charts" },
    ],
  },
  {
    label: "Shade & Curtains",
    href: "/shade-curtains",
    children: [
      { label: "Shade Structures", href: "/shade-curtains/shade-structures" },
      { label: "Shade Sails", href: "/shade-curtains/shade-sails" },
      { label: "Patio Curtains", href: "/shade-curtains/patio-curtains" },
      { label: "Motorized Screens", href: "/shade-curtains/motorized-screens" },
    ],
  },
  { label: "Hurricane Season", href: "/hurricane-season" },
  { label: "Gallery", href: "/gallery" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;
