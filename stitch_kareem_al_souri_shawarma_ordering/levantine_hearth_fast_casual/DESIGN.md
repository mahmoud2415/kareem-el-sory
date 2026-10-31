---
name: Levantine Hearth & Fast Casual
colors:
  surface: '#fff8f5'
  surface-dim: '#e0d8d5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ee'
  surface-container: '#f4ece8'
  surface-container-high: '#eee7e3'
  surface-container-highest: '#e9e1dd'
  on-surface: '#1e1b19'
  on-surface-variant: '#54433c'
  inverse-surface: '#33302d'
  inverse-on-surface: '#f7efeb'
  outline: '#87736a'
  outline-variant: '#dac1b7'
  surface-tint: '#944a23'
  primary: '#592100'
  on-primary: '#ffffff'
  primary-container: '#78350f'
  on-primary-container: '#ffa072'
  inverse-primary: '#ffb693'
  secondary: '#3e6a00'
  on-secondary: '#ffffff'
  secondary-container: '#b9f079'
  on-secondary-container: '#416e00'
  tertiary: '#4e2900'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e3c00'
  on-tertiary-container: '#f2a863'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#76330d'
  secondary-fixed: '#bbf37c'
  secondary-fixed-dim: '#a0d663'
  on-secondary-fixed: '#0f2000'
  on-secondary-fixed-variant: '#2e4f00'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb877'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#fff8f5'
  on-background: '#1e1b19'
  surface-variant: '#e9e1dd'
typography:
  display-lg:
    fontFamily: Cairo
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 48px
  display-lg-mobile:
    fontFamily: Cairo
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 38px
  headline-lg:
    fontFamily: Cairo
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Cairo
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Cairo
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  title-lg:
    fontFamily: Cairo
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Cairo
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Cairo
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Cairo
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Cairo
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Cairo
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Cairo
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system defines the digital customer touchpoint for an authentic Syrian shawarma and fast-casual dining experience in Egypt. It balances rich Levantine culinary pride—evoking toasted saj bread, wood-charred spices, and pressed olive oils—with the razor-sharp utility of high-conversion mobile commerce.

The target audience encompasses everyday Egyptian diners seeking authentic Damascus-style street food, families ordering weekend feasts, and bustling lunchtime office crowds demanding rapid delivery or counter pickup. The visual atmosphere must evoke appetizing warmth, impeccable culinary hygiene, generous hospitality, and unwavering authenticity. 

The aesthetic is **Tactile Warm Modernity**:
- Grounded, warm, and structured rather than sterile or gimmicky.
- Explicitly avoids the generic fast-food red-and-yellow tropes, opting instead for deep roast-spice ambers, pressed olive greens, and whipped-toum cream tones.
- Right-to-Left (RTL) first, treating Arabic typography as the structural anchor with full parity for bilingual counters and microcopy.
- Built for thumb-driven ergonomic velocity: tactile button depressions, grounded sheet drawers, elevated meal-customization chips, and uncompromised food photography.

## Colors
The palette evokes the textures of the Levant: roasted spices on rotating spits, Syrian olive groves, and creamy tahini/garlic sauces. Under no circumstances is red introduced into UI states, badges, or brand touchpoints; critical alerts utilize deep roasted umber or burnt saffron tones.

### Palette Breakdown
- **Primary (`#78350F` - Roasted Spice Umber)**: Anchors core actions, category banners, order buttons, and prime brand accents. Paired with deeper shade `#451A03` for interactive pressed states.
- **Secondary (`#4D7C0F` - Syrian Olive)**: Conveys freshness, pickled herbs, Syrian olive oil, and health/quality badges. Leveraged for confirmation badges, nutritional highlights, vegetarian/halal markers, and delivery time indicators. Supported by `#3F6212` (hover/active) and `#65A30D` (light accents/chips).
- **Tertiary (`#854D0E` - Golden Sumac & Cumin)**: Expresses crisp saj bread, toasted sesame, and golden fries. Applied to loyalty star counters, featured bundle cards, and promotion ribbons.
- **Neutral Surface & Canvas (`#FAF8F5` base, `#F5F0E8` container)**: Creamy, warm off-white canvas resembling fresh flatbread and parchment wrapping, removing the cold glare of pure digital white `#FFFFFF`.
- **Text & High Contrast Neutral (`#1C1917`, `#292524`)**: Deep charcoal-espresso ensuring crisp contrast ratios conforming to WCAG AAA against the off-white ground.
- **Structural Outlines (`#E7E2DA`)**: Warm, low-contrast borders framing cards, list dividers, and stepper increments without visual clutter.

## Typography
Cairo is utilized across all text roles. Its geometric yet fluid character provides natural legibility for Arabic diacritics and letters while maintaining sharp Latin numerals and English translations.

### RTL Typesetting Rules
- **Reading Hierarchy**: Arabic headlines lead from right to left. Currency markers (ج.م or EGP) strictly follow the numerical amount on the left side in RTL flow (`٥٥ ج.م` or `55 EGP`).
- **Vertical Metrics**: Cairo exhibits a taller ascender/descender envelope than typical Latin grotesque faces. Line-heights are expanded by at least 15–20% relative to standard Latin scales to prevent accent clipping on letters like خ, ج, and غ.
- **Optical Weighting**: Cairo renders bolder in Arabic glyphs than Latin counterparts. Body copy is capped at weight `400` to prevent ink trapping on dense Egyptian mobile screens.
- **Numbers**: Eastern Arabic Numerals (٠، ١، ٢) and Western Arabic Numerals (0, 1, 2) must both be supported, defaulting to localized numerical preferences based on system locale while keeping menu prices uniform.

## Layout & Spacing
The layout uses an ergonomic, fluid-grid system optimized for fast-thumb mobile interaction, adapting outward to multi-column arrangements on tablet counters and desktop displays.

### Layout Philosophy & Breakpoints
- **Mobile (<640px)**: 4-column fluid layout with `1rem` margins and `1rem` gutters. Touch targets for primary action zones (e.g., "Add to Bag", item modifier selections) must sit within a 48px to 56px height footprint.
- **Tablet (641px - 1024px)**: 8-column layout with `2rem` margins. Splits the ordering process into a side-by-side split screen (browse categories on the right, sticky order review / cart summary on the left).
- **Desktop (>1024px)**: 12-column layout capped at 1200px max width with `3rem` margins. Maintains a centralized, appetizing ordering dashboard with category stickiness.

### Spacing Rhythm
- **Micro-spacing (`space-xs`, `space-sm`)**: Reserved for badge padding, modifier chip spacing, price-to-title gaps, and icon-to-label distances.
- **Macro-spacing (`space-md`, `space-lg`, `space-xl`)**: Governs menu card internals, bottom sheet padding, sticky bottom bar floating clearances, and section dividers.
- **Bottom Safe-Zone**: On mobile, food cart summary drawers sit pinned to the viewport bottom with `calc(space-md + env(safe-area-inset-bottom))` clearance to avoid system navigation gestures.

## Elevation & Depth
Depth is constructed through tactile warmth: combining soft, spice-tinted ambient drop shadows with warm off-white surface layers rather than clinical grey elevations.

### Surface Tiers
- **Tier 0 (Canvas Base)**: `#FAF8F5` creamy base, matte and un-elevated.
- **Tier 1 (Resting Cards & Meal Tiles)**: `#FFFFFF` or `#F5F0E8` with a 1px border of `#E7E2DA` and an ambient shadow: `0 2px 8px -2px rgba(69, 26, 3, 0.05)`.
- **Tier 2 (Elevated Sticky Filters & Chips)**: Active horizontal category selectors float slightly above content: `0 4px 12px -2px rgba(69, 26, 3, 0.08)`.
- **Tier 3 (Bottom Sheets & Modals)**: Customization drawers (e.g., choosing extra toum, pickled turnips, bread style) slide from the bottom edge over a `#1C1917` scrim at 40% opacity, casting `0 -8px 24px -4px rgba(69, 26, 3, 0.12)`.
- **Tier 4 (Floating Action Drawer / Cart Bar)**: Pinned checkout pill: `0 8px 24px -2px rgba(120, 53, 15, 0.25)`, glowing with warm roasted spice energy.

## Shapes
A roundedness level of `2` provides a friendly, welcoming, and fast-casual appearance that mimics the curved folds of rolled shawarma, round saj griddles, and ceramic mezza plates.

- **Base Radius (0.5rem / 8px)**: Inputs, modifier checkboxes, quantity steppers, and inline alerts.
- **Large Radius (1rem / 16px)**: Food cards, order summary containers, bundle promo cards, and category tiles.
- **Extra-Large Radius (1.5rem / 24px)**: Top corners of mobile bottom sheets and item customization modals.
- **Pill (9999px)**: Category filter tabs, dietary/freshness badges, and floating cart interaction pills.

## Components

### Buttons
- **Primary Action (Roasted Spice Umber)**: Filled with `#78350F`, text in `#FAF8F5`, 52px height on mobile. On press: scales subtly (0.98) and transitions to `#451A03`.
- **Secondary Action (Syrian Olive)**: Filled with `#4D7C0F`, text in `#FFFFFF`. Utilized for "Add Extra Toum", "Reorder Favorite", or "Track Delivery".
- **Tertiary / Ghost**: Transparent fill, 1px border of `#E7E2DA`, text in `#78350F`. Used for item customization dismissal and secondary optionals.

### Food & Category Cards
- **Shawarma Item Card**: Horizontal layout on mobile (RTL: thumbnail image on the right, title/description/price on the left). Border `1px solid #E7E2DA`, background `#FFFFFF`, rounded `1rem`. Includes an instant "+" increment target (minimum 44x44px) positioned at the bottom left.
- **Combo Bundle Card**: Vertical card with generous top photography, tagged with a golden badge (`#854D0E` background, `#FAF8F5` text).

### Chips & Filter Tags
- **Selection Chips**: Pill-shaped (`rounded-full`), padded with `space-xs` vertical and `space-md` horizontal.
- **Inactive State**: Background `#F5F0E8`, text `#292524`, border `1px solid #E7E2DA`.
- **Active State**: Background `#78350F`, text `#FAF8F5`, subtle shadow.
- **Dietary Badges (Halal, Fresh Syrian Pickles, Extra Garlic)**: Background `#F5F0E8` with `#4D7C0F` text and an olive dot indicator.

### Input Fields & Modifiers
- **Form Inputs**: Creamy white `#FFFFFF` fill, 1px `#E7E2DA` border, 48px height, Cairo `14px`. On focus: 2px ring in `#78350F` with no harsh blue glow.
- **Radio & Checkbox (Modifier Selectors)**: Custom rounded elements with a 24px tap area. When selected, fills with `#78350F` containing a white checkmark or inner dot. Additional cost display (`+ ١٥ ج.م`) is aligned strictly to the far side of the row.

### Lists & Steppers
- **Item Customization List**: Clean separation with `#E7E2DA` dividers. Quantity stepper displays a distinct minus/plus rounded pill with clear numerical counters in Cairo bold.
- **Order Tracking Steps**: Vertical timeline in RTL with `#4D7C0F` indicating completed cooking/cutting phases, and `#854D0E` indicating delivery in-transit.

### Bottom Sheets (Menu Customization)
- Anchored to bottom screen with top-right and top-left radii of `1.5rem`.
- Features an ergonomic pill drag handle (`#E7E2DA`, 36px width, 4px height) at the top center.
- Sticky bottom footer inside the sheet hosts total calculated price and "Add to Order" action button.