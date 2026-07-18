# KB Visualz — Design Revamp

## Scope
In-place redesign of all 5 pages (Home, Portfolio, About, Pricing, 404) + shared components (Navigation, Footer, Hero, ContactForm). Preserve routes, content, brand, SEO structure, and info architecture. Replace visual/interaction layer only.

## Tools Applied
- **hallmark** — anti-slop design skill: 57 slop-test gates, pre-emit self-critique, 20-theme catalog, structural variety enforcement, 4-viewport mobile check
- **taste-skill** — design variance/motion/density dials, GSAP canon, anti-repetition rules

## Token System Cleanup
- Consolidate `--premium-gold`, `--luxury-gold`, `--premium-amber`, `--chart-1` → single `--color-gold`
- Consolidate `--premium-brown`, `--luxury-brown`, `--chart-3` → `--color-stone`
- Consolidate `--premium-cream`, `--premium-dark` → `--color-cream`
- Remove unused shadcn sidebar variables
- Remove camera cursor override (novelty, interferes with UX)

## Per-Page Changes

### Navigation
- Transparent-to-solid scroll transition stays (working well)
- Full-screen mobile menu → bottom-sheet drawer (less jarring)
- Remove "About the Artist" bio from mobile nav
- Add subtle gold underline on active page

### Hero (Home)
- Collapse 3-layer gradient (radial + linear + black) → single clean gradient
- GSAP text-split reveal on headline instead of single framer-motion fade
- Subtle parallax drift on hero image (~5px)
- Pre-emit critique stamp on CSS artifact

### Home Gallery
- Add Photoswipe lightbox (tap-to-expand fullscreen)
- "View full portfolio" text link → hallmarked CTA button matching site-button style
- Stagger entrance animation stays, GSAP instead of framer-motion

### Process Section
- Keep editorial grid + 4-step layout (strong as-is)
- Add decorative scroll-anchored number markers (01–04) that track on scroll

### Contact Section
- Keep minimal form (no dropdown, just name/email/phone/message)
- Add subtle gold focus ring matching site accent

### Pricing
- Already strongest page after editorial rewrite. Sticky price summary bar on mobile scroll is the main addition
- Minor: tighten card spacing on tablet

### About
- Combine Approach + Philosophy into one flowing narrative with pull-quote interleaves
- Kill redundant CTA band at bottom (already a CTA in philosophy section)
- Lead with parallax portrait wall earlier in the layout

### Portfolio
- Add category filter tabs (Creative, Studio, Family, Couples)
- Masonry-ish grid (respects 3:4 and 16:9 aspect ratios)
- Full-screen slideshow on image click (Photoswipe)
- Hover metadata overlay (category stays, remove forced overlay gradient)

### Footer
- Expand from 1 link → nav links + social/contact + tagline + copyright
- Current: `Get in Touch` + `© 2026 KB Visualz`
- New: short tagline, nav links row, contact hint, copyright

### Motion Standardization
- GSAP for scroll-triggered entries (hallmark's canon)
- framer-motion only for microinteractions (hover, tap, layout animations)
- Cursor follower: tiny gold dot on desktop (subtle, 0.3s lag)
- Standard easing: `cubic-bezier(0.16, 1, 0.3, 1)` throughout

## Slop-Test Gates (hallmark)
Every emit must pass:
- Pre-emit self-critique (P/H/E/S/R/V scores, <3 triggers revision)
- No invented metrics or testimonials
- Locked CSS tokens only, no inline colors
- No fake browser/phone chrome
- Mobile: 320/375/414/768px — no horizontal scroll, no two-line buttons, `minmax(0, 1fr)` grids, `overflow-wrap: anywhere` headers
- No italic headers (roman only, emphasis via weight/accent)
- Structural variety: two pages must not share same section rhythm

## Files to Modify
- `client/src/index.css` — token cleanup, new utilities
- `client/src/components/Navigation.tsx` — drawer menu, active indicator
- `client/src/components/Hero.tsx` — GSAP reveal, gradient cleanup
- `client/src/components/Footer.tsx` — full expansion
- `client/src/components/ContactForm.tsx` — focus ring
- `client/src/pages/Home.tsx` — gallery lightbox, process markers, CTA
- `client/src/pages/Portfolio.tsx` — filters, masonry, slideshow
- `client/src/pages/About.tsx` — narrative merge, CTA removal
- `client/src/pages/Pricing.tsx` — sticky price bar

## Files to Create
- `client/src/hooks/useGsapReveal.ts` — reusable GSAP scroll-trigger hook
- `client/src/components/CursorFollower.tsx` — gold dot follower
- `client/public/photoswipe.css` — if needed (check if using CDN)

## What's Not Changing
- Route structure (/, /portfolio, /about, /pricing, 404)
- SEO metadata and JSON-LD structured data
- Content/copy on every page
- Image assets and `@assets` import pipeline
- Lenis smooth scroll + View Transitions API
- Build tooling (Vite, Tailwind, postbuild script)
- Deploy workflow (GitHub Actions → Pages)
