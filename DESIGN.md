# Design System: Kinetic Streetwear (High-End Editorial E-Commerce)

## 1. Overview & Creative North Star
**The Creative North Star: "Kinetic Fluidity"**
This design system moves away from the rigid, boxy constraints of traditional e-commerce. We are not building a "catalog"; we are curating a digital lookbook. The goal is to capture the energy of streetwear culture through a "Kinetic" approach—where elements feel like they are in motion. We achieve this through intentional asymmetry, overlapping high-quality photography, and a sophisticated use of depth that favors tonal shifts over structural lines. This is a "Modern-Youthful" aesthetic that trades "cheap" neon for "premium" electricity.

## 2. Colors & Tonal Architecture
The palette is anchored by a deep, sophisticated indigo-ink (`on_background: #2b2a51`) which provides the necessary weight to support our "Electric Blue" (`primary: #0846ed`) and "Energetic Orange" (`tertiary: #9c3f00`) accents.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layouts must be partitioned using background color shifts. 
- A product description section (`surface_container_low: #f2efff`) should sit flush against a main page background (`background: #f9f5ff`) to create a boundary through value, not lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base Level:** `surface` (#f9f5ff) for the main page canvas.
- **Interaction Level:** Use `surface_container` (#e9e5ff) for large structural areas like a "Related Products" tray.
- **Elevated Level:** Use `surface_container_lowest` (#ffffff) for product cards to create a "pop" of clean white against the slightly tinted background.

### The "Glass & Gradient" Rule
To elevate the "youthful" vibe to a "premium" level:
- **Glassmorphism:** Navigation bars and floating action buttons should use `surface` at 70% opacity with a `20px` backdrop-blur.
- **Signature Textures:** For high-impact CTAs, use a subtle linear gradient from `primary` (#0846ed) to `primary_container` (#859aff) at a 135-degree angle. This adds "soul" and dimension that prevents the design from looking flat or "templated."

## 3. Typography: The Editorial Voice
We utilize a triad of sans-serifs to establish a hierarchy that feels both functional and fashionable.

*   **Display & Headlines (Plus Jakarta Sans):** Our "shout." Large, bold, and energetic. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em) to evoke a high-fashion editorial feel.
*   **Titles & Body (Manrope):** Our "voice." Manrope’s geometric yet friendly nature handles the heavy lifting. Use `body-lg` (1rem) for product descriptions to ensure maximum legibility for a mobile-first audience.
*   **Labels (Be Vietnam Pro):** Our "utility." Used for technical specs, price tags, and micro-copy. The slightly technical feel of Be Vietnam Pro adds a "streetwear tag" aesthetic.

## 4. Elevation & Depth
We reject the standard Material Design "floating" shadow. We achieve depth through **Tonal Layering.**

*   **The Layering Principle:** Place `surface_container_lowest` (#ffffff) cards on top of a `surface_container_low` (#f2efff) background. The subtle 2% shift in brightness provides a "soft lift" that feels organic and high-end.
*   **Ambient Shadows:** If a shadow is required for a floating "Add to Cart" button, use the `on_surface` color (#2b2a51) at 6% opacity with a 32px blur and 12px Y-offset. This mimics natural light rather than a digital "drop shadow."
*   **The "Ghost Border" Fallback:** If accessibility requires a border (e.g., in a high-contrast mode or input field), use `outline_variant` (#aba9d7) at 20% opacity. Never use 100% opaque borders.

## 5. Components
Consistency is maintained through a unified `roundedness` scale, favoring `xl` (1.5rem) for large containers to keep the "youthful" softness.

*   **Buttons:**
    *   *Primary:* Gradient fill (Primary to Primary-Container), `full` rounding (9999px), `label-md` uppercase text.
    *   *Secondary:* `surface_container_high` background, no border, `primary` text color.
*   **Product Cards:** Forbid divider lines. Use `spacing.8` (2rem) of vertical white space between the product image and the title. The image should have an `lg` (1rem) corner radius.
*   **Input Fields:** Use `surface_container_low` as the fill. On focus, transition the background to `surface_container_lowest` and add a 2px `primary` ghost-border at 30% opacity.
*   **Chips:** Use `secondary_container` (#cfcdff) with `on_secondary_container` (#3c38a1) text. These should feel like small, tactile "pills."
*   **The "Lookbook" Grid:** Instead of a standard 12-column grid, use an asymmetric layout where imagery spans 7 columns and text occupies 4, leaving an empty 1-column "breathing lane" between them.
