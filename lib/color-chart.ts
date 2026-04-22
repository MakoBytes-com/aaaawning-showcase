// Curated Sunbrella awning/marine palette + common metal finishes.
// Hex values are visual approximations — Sunbrella's real fabric colors
// depend on weave, lighting, and dye-lot. Always confirm with a physical
// swatch before specifying.

export type Swatch = {
  name: string;
  sku?: string;
  hex: string; // background color for the swatch tile
};

export type StripeSwatch = {
  name: string;
  sku?: string;
  /** CSS linear-gradient definition for multi-stripe patterns */
  stripe: string;
};

export type ColorFamily = {
  label: string;
  description: string;
  swatches: Swatch[];
};

export const SUNBRELLA_SOLIDS: ColorFamily[] = [
  {
    label: "Blues",
    description: "Navy-heavy palette — the most popular awning family.",
    swatches: [
      { name: "Captain Navy", sku: "4636-0000", hex: "#1a2b4a" },
      { name: "Marine Blue", sku: "4678-0000", hex: "#073250" },
      { name: "Sapphire Blue", sku: "4641-0000", hex: "#0f3d6e" },
      { name: "Mediterranean Blue", sku: "4652-0000", hex: "#1e4a73" },
      { name: "Pacific Blue", sku: "4601-0000", hex: "#185a8b" },
      { name: "True Blue", sku: "4605-0000", hex: "#1770a4" },
      { name: "Persian Green", sku: "4639-0000", hex: "#0f6d7f" },
    ],
  },
  {
    label: "Greens",
    description: "Traditional awning greens — classic storefront and residential.",
    swatches: [
      { name: "Forest Green", sku: "4637-0000", hex: "#2c4a2a" },
      { name: "Hunter Green", sku: "4643-0000", hex: "#14432a" },
      { name: "Erin Green", sku: "4623-0000", hex: "#2d6b3f" },
      { name: "Meadow", sku: "4640-0000", hex: "#5e763e" },
    ],
  },
  {
    label: "Reds & Warm Tones",
    description: "From deep burgundy to vibrant jockey red — restaurant and retail favorites.",
    swatches: [
      { name: "Burgundy", sku: "4631-0000", hex: "#6b1f2a" },
      { name: "Paris Red", sku: "4604-0000", hex: "#a32633" },
      { name: "Logo Red", sku: "4666-0000", hex: "#b3272f" },
      { name: "Jockey Red", sku: "4603-0000", hex: "#9e2935" },
      { name: "Terracotta", sku: "4607-0000", hex: "#a14a32" },
      { name: "Brass", sku: "4674-0000", hex: "#9b7a37" },
      { name: "Sunflower Yellow", sku: "4602-0000", hex: "#d19d2e" },
    ],
  },
  {
    label: "Neutrals",
    description: "The work-horses — read as warm on sunny days, cool in shade.",
    swatches: [
      { name: "Natural", sku: "4604-0000", hex: "#e4d9b8" },
      { name: "Parchment", sku: "4611-0000", hex: "#d6c5a3" },
      { name: "Linen", sku: "4633-0000", hex: "#ddd1b5" },
      { name: "Beige", sku: "4620-0000", hex: "#c4b492" },
      { name: "Sand", sku: "4671-0000", hex: "#b89a72" },
      { name: "Wheat", sku: "4657-0000", hex: "#a9875b" },
      { name: "Toast", sku: "4665-0000", hex: "#786149" },
      { name: "Taupe", sku: "4648-0000", hex: "#7a6f5e" },
    ],
  },
  {
    label: "Blacks, Whites & Greys",
    description: "Architectural classics — strong against brick, stucco, or metal facades.",
    swatches: [
      { name: "White", sku: "4674-0000", hex: "#f5f0e6" },
      { name: "Silver", sku: "4651-0000", hex: "#a6a8ab" },
      { name: "Cadet Grey", sku: "4635-0000", hex: "#5e6a6f" },
      { name: "Charcoal Grey", sku: "4644-0000", hex: "#3a3e42" },
      { name: "Black", sku: "4608-0000", hex: "#1a1a1a" },
    ],
  },
];

/** Common Sunbrella stripe patterns, rendered as CSS gradients */
export const SUNBRELLA_STRIPES: StripeSwatch[] = [
  {
    name: "Classic Natural Stripe",
    sku: "4924-0000",
    stripe:
      "repeating-linear-gradient(90deg, #e4d9b8 0 22px, #c4b492 22px 28px, #e4d9b8 28px 44px)",
  },
  {
    name: "Captain Navy / White Stripe",
    sku: "4742-0000",
    stripe:
      "repeating-linear-gradient(90deg, #1a2b4a 0 20px, #f5f0e6 20px 30px, #1a2b4a 30px 50px)",
  },
  {
    name: "Burgundy / Natural Stripe",
    sku: "4786-0000",
    stripe:
      "repeating-linear-gradient(90deg, #6b1f2a 0 22px, #e4d9b8 22px 30px, #6b1f2a 30px 52px)",
  },
  {
    name: "Forest Green / Natural Stripe",
    sku: "4794-0000",
    stripe:
      "repeating-linear-gradient(90deg, #2c4a2a 0 22px, #e4d9b8 22px 30px, #2c4a2a 30px 52px)",
  },
  {
    name: "Black / White Stripe",
    sku: "4906-0000",
    stripe:
      "repeating-linear-gradient(90deg, #1a1a1a 0 20px, #f5f0e6 20px 28px, #1a1a1a 28px 48px)",
  },
  {
    name: "Harwood Crimson Block",
    sku: "4690-0000",
    stripe:
      "repeating-linear-gradient(90deg, #6b1f2a 0 30px, #e4d9b8 30px 34px, #1a2b4a 34px 64px, #e4d9b8 64px 68px)",
  },
  {
    name: "Beaufort Stripe",
    sku: "4797-0000",
    stripe:
      "repeating-linear-gradient(90deg, #f5f0e6 0 22px, #9e2935 22px 30px, #f5f0e6 30px 52px, #1a1a1a 52px 60px)",
  },
  {
    name: "Awning Gold Stripe",
    sku: "4918-0000",
    stripe:
      "repeating-linear-gradient(90deg, #d19d2e 0 22px, #e4d9b8 22px 30px, #d19d2e 30px 52px)",
  },
];

/** Common metal finishes — Kynar 500 paint systems and powder coat */
export const METAL_FINISHES: ColorFamily[] = [
  {
    label: "Whites & Neutrals",
    description: "Clean, architectural — the most-specified metal colors.",
    swatches: [
      { name: "Bone White", hex: "#f0eadc" },
      { name: "Regal White", hex: "#faf8f3" },
      { name: "Almond", hex: "#d8ccae" },
      { name: "Sand Tan", hex: "#c6a977" },
      { name: "Ash Gray", hex: "#a2a3a0" },
      { name: "Stone White", hex: "#ebe6da" },
    ],
  },
  {
    label: "Bronzes & Earth Tones",
    description: "Warm metallics — common on residential and hospitality projects.",
    swatches: [
      { name: "Medium Bronze", hex: "#5d4431" },
      { name: "Dark Bronze", hex: "#3a2c20" },
      { name: "Terra Cotta", hex: "#a14a32" },
      { name: "Cocoa Brown", hex: "#4a3426" },
      { name: "Burnished Slate", hex: "#4b4438" },
      { name: "Colonial Red", hex: "#7c2e25" },
    ],
  },
  {
    label: "Blues, Greens & Burgundy",
    description: "Saturated Kynar 500 colors — match classic awning fabric tones.",
    swatches: [
      { name: "Regal Blue", hex: "#1f3763" },
      { name: "Forest Green", hex: "#234c30" },
      { name: "Hemlock Green", hex: "#2d4a3a" },
      { name: "Hartford Green", hex: "#1a3b2a" },
      { name: "Burgundy", hex: "#6b1f2a" },
      { name: "Patriot Red", hex: "#a3262f" },
    ],
  },
  {
    label: "Blacks, Silvers & Custom",
    description: "Architectural neutrals plus custom color-match available.",
    swatches: [
      { name: "Matte Black", hex: "#1a1a1a" },
      { name: "Charcoal Grey", hex: "#3a3e42" },
      { name: "Bright Silver Metallic", hex: "#c0c2c5" },
      { name: "Champagne Metallic", hex: "#c9b89a" },
      { name: "Zinc Grey", hex: "#808285" },
      { name: "Custom Color-Match", hex: "#b22951" },
    ],
  },
];
