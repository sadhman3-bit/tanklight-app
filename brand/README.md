# AquaLight — Driftwood Forest

Identity v2.0 · 1 November 2026

Daylight for your underwater world.
Descriptor: Aquarium light control.

## Start here
Open index.html for the full brand guide. Download AquaLight-Driftwood-Forest-Kit.zip for the complete distribution.

## Logo system
- logos/primary-{light,dark,pink}.{svg,png}: detailed driftwood forest plus wordmark and descriptor. Transparent backgrounds. Minimum 280px wide.
- logos/horizontal-{light,dark,pink}.{svg,png}: compact vector forest plus outlined wordmark and descriptor. Minimum 180px.
- logos/wordmark-{light,dark,pink}.{svg,png}: outlined lettering only.
- logos/emblem-{light,dark,pink}.{svg,png}: one-colour, fully vector forest emblem.
- mark.svg: micro tile for app headers and small avatars.
- mark-mono.svg and mark-micro.svg: standalone companions.
- artwork/driftwood-emblem.png: detailed transparent illustration.
- artwork/compact-mark.{svg,png}: flat vector interpretation of the chosen scape.

The primary SVG embeds a raster illustration; it is not a traced vector. All lettering is outlined, and the compact companion logos are fully vector. Use the vector companion for very large print or one-colour production. Artwork preserves the selected driftwood, planting masses and open sand channel. Clear space: one sun diameter.

## App icons
icons/ contains 32, 48, 64, 128, 180, 192, 256, 512 and 1024px PNGs, plus maskable-512.png. app-icon.svg and app-icon-maskable.svg are editable masters. The maskable design keeps essential shapes within the central safe circle.

## Social
PNG and outlined-type SVG masters: post-1080x1080, story-1080x1920, link-preview-1200x630, banner-1600x600.

## Design system
tokens.json, tokens.css and palette.gpl contain reusable colour, font, spacing and motion definitions. fonts/ includes locally hosted Bricolage Grotesque 600/700 and Geist Sans 400/500/600 plus licences.

## Voice
Primary line: Daylight for your underwater world.
Short line: A little sun. A world below.
Use warm, direct, brief language. Be precise about device states and hardware limits.

## Provenance and regeneration
Detailed artwork: built-in image_gen, derived from the user-selected 02 — Driftwood Forest concept in aquascapes/. Prompts are recorded in generation-prompts.json. Compact vector artwork and layouts: native SVG. Typography: outlined from the included font families. No trademark-clearance claim is made.
From the repository root: npm ci, then npm run brand. The artwork source PNG is checked in, so regeneration does not call an image service. tools/brand-shapes.mjs is the editable compact symbol source. tools/make-brand.mjs builds the kit and tools/make-icons.mjs builds icons.
