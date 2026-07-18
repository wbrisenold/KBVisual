# KB Visualz Redesign Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp KB Visualz photography site across all 5 pages + shared components using hallmark anti-slop rules and taste-skill polish

**Architecture:** In-place modifications to existing React/TSX components. Token cleanup in CSS. GSAP for scroll-triggered reveals, framer-motion for microinteractions. Photoswipe for lightbox.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind, GSAP, framer-motion, wouter, Photoswipe

**Global Constraints:**
- Preserve all routes, content, SEO metadata, JSON-LD structured data
- Preserve `@assets` image pipeline (vite-imagetools webp)
- No new dependencies unless specified
- hallmark slop-test gates apply to every emit
- Mobile test at 320/375/414/768px per hallmark rule
- `npm run check` and `npm run build` must pass after each task

---

### Task 1: Token System Cleanup

**Files:**
- Modify: `client/src/index.css`

- [ ] **Step 1: Consolidate CSS variables**

Replace the current variable block with clean tokens:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 20 14.3% 4.1%;
  --border: 20 5.9% 90%;
  --ring: 20 14.3% 4.1%;
  --radius: 0.5rem;

  /* Brand tokens */
  --color-gold: 35 92% 33%;
  --color-stone: 30 12% 90%;
  --color-cream: 40 23% 95%;
  --color-ink: 20 10% 8%;

  /* shadcn required */
  --muted: 60 4.8% 95.9%;
  --muted-foreground: 25 5.3% 44.7%;
  --popover: 0 0% 100%;
  --popover-foreground: 20 14.3% 4.1%;
  --card: 0 0% 100%;
  --card-foreground: 20 14.3% 4.1%;
  --input: 20 5.9% 90%;
  --primary: 35 92% 33%;
  --primary-foreground: 0 0% 100%;
  --secondary: 60 4.8% 95.9%;
  --secondary-foreground: 24 9.8% 10%;
  --accent: 60 4.8% 95.9%;
  --accent-foreground: 24 9.8% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 60 9.1% 97.8%;
}
```

Remove: `--premium-dark`, `--premium-gold`, `--premium-brown`, `--premium-accent`, `--premium-amber`, `--premium-cream`, `--luxury-dark`, `--luxury-gold`, `--luxury-brown`, `--chart-1` through `--chart-5`, `--sidebar-*` block.

Replace all `hsl(var(--premium-gold))` and `hsl(var(--luxury-gold))` references with `hsl(var(--color-gold))`. Replace `hsl(var(--premium-brown))` with `hsl(var(--color-stone))`.

Remove the camera cursor override (lines 52-59).

- [ ] **Step 2: Run check**

```bash
npm run check
```

- [ ] **Step 3: Run build**

```bash
npm run build
```

---

### Task 2: Navigation Drawer + Active Indicator

**Files:**
- Modify: `client/src/components/Navigation.tsx`

- [ ] **Step 1: Replace full-screen mobile menu with bottom-sheet drawer**

Keep the same open/close state and triggers. Replace the full-screen `fixed inset-0` wrapper with a bottom-anchored panel:

```tsx
<motion.div
  id="mobile-navigation"
  aria-hidden={!isOpen}
  initial={{ y: "100%" }}
  animate={{ y: isOpen ? "0%" : "100%" }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  className={`fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white rounded-t-2xl shadow-2xl ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
>
  <div className="flex flex-col px-6 pt-4 pb-8 max-h-[70vh] overflow-y-auto">
    <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-stone-300" />
    {navItems.map((item) => (
      <Link key={item.name} href={item.href} tabIndex={isOpen ? 0 : -1}>
        <div className="py-4 border-b border-stone-100 text-lg font-medium text-stone-900" onClick={() => setIsOpen(false)}>
          {item.name}
        </div>
      </Link>
    ))}
  </div>
</motion.div>
```

Remove the "About the Artist" excerpt block from mobile menu.

- [ ] **Step 2: Add active page indicator**

In the desktop nav, add a gold underline on the current page:

```tsx
// Inside the nav item map
<Link href={item.href}>
  <div className="group cursor-pointer relative">
    <div className={`text-sm uppercase ${navText}`}>{item.name}</div>
    {location === item.href && (
      <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[hsl(var(--color-gold))]" />
    )}
  </div>
</Link>
```

- [ ] **Step 3: Check + build**

---

### Task 3: Footer Expansion

**Files:**
- Modify: `client/src/components/Footer.tsx`

- [ ] **Step 1: Replace minimal footer**

```tsx
import { Link } from "wouter";

const Footer = () => {
  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase text-stone-950">KB Visualz</div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500 max-w-xs">
              Orlando and Central Florida portrait photography — graduation, branding, family, and creative sessions.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase text-stone-400 mb-4">Navigate</div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="text-sm text-stone-600 hover:text-stone-950 transition-colors cursor-pointer">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase text-stone-400 mb-4">Contact</div>
            <p className="text-sm text-stone-600">Orlando, FL</p>
            <p className="mt-2 text-sm text-stone-600">Inquire via the contact form or reach out through the website.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} KB Visualz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
```

- [ ] **Step 2: Check + build**

---

### Task 4: GSAP Scroll Hook

**Files:**
- Create: `client/src/hooks/useGsapReveal.ts`

- [ ] **Step 1: Create reusable hook**

```tsx
import { useEffect, useRef } from "react";

export function useGsapReveal<T extends HTMLElement>(options?: { delay?: number; y?: number }) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.from(el, {
            y: options?.y ?? 30,
            opacity: 0,
            duration: 0.7,
            delay: options?.delay ?? 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          });
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  return ref;
}
```

- [ ] **Step 2: Check + build**

---

### Task 5: Hero GSAP Reveal

**Files:**
- Modify: `client/src/components/Hero.tsx`

- [ ] **Step 1: Add GSAP text-split reveal**

Replace the current framer-motion headline animation with GSAP. Keep the `<motion.h1>` wrapper for HTML structure but animate via ref:

```tsx
import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const Hero = () => {
  const headlineRef = useGsapReveal<HTMLHeadingElement>({ delay: 0.3 });

  // ... keep everything above the h1 same

  <h1
    ref={headlineRef}
    className="editorial-headline max-w-6xl text-[18vw] leading-[0.78] text-white md:text-[11vw] lg:text-[9.2rem]"
  >
    Portraits with presence.
  </h1>
```

Collapse the 3-layer gradient overlay:

```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
```

Replace the image parallax with a simple GSAP-driven drift:

```tsx
// Add above the return:
const imgRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  let ctx: gsap.Context | undefined;
  import("gsap").then(({ default: gsap }) => {
    import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.to(imgRef.current, {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current?.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    });
  });
  return () => ctx?.revert();
}, []);
```

- [ ] **Step 2: Check + build**

---

### Task 6: Home Gallery Lightbox

**Files:**
- Modify: `client/src/pages/Home.tsx`

- [ ] **Step 1: Add Photoswipe import and lightbox**

Add Photoswipe at top:

```tsx
import { useCallback } from "react";
import type PhotoSwipeLightbox from "photoswipe/lightbox";
```

Add a lightbox setup hook before the return:

```tsx
const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

useEffect(() => {
  import("photoswipe/lightbox").then(({ default: Photoswipe }) => {
    const lb = new Photoswipe({
      gallery: "#home-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lb.init();
    lightboxRef.current = lb;
  });
  return () => { lightboxRef.current?.destroy(); };
}, []);
```

Wrap each gallery image in an `<a>` with href pointing to the full image:

```tsx
<a href={img.src} target="_blank" className="group relative block overflow-hidden aspect-[3/4] cursor-zoom-in">
  <img ... />
</a>
```

Replace "View full portfolio" text link with a button:

```tsx
<a href="/portfolio" className="site-button site-button--dark mt-12 inline-flex items-center gap-2">
  View Full Portfolio
  <ArrowRight className="h-4 w-4" />
</a>
```

Add `photoswipe/dist/photoswipe.css` import:

```tsx
import "photoswipe/dist/photoswipe.css";
```

- [ ] **Step 2: Check + build**

---

### Task 7: Process Section Scroll Markers

**Files:**
- Modify: `client/src/pages/Home.tsx`

- [ ] **Step 1: Add scroll-anchored number markers**

In the process section, add a decorative side marker per step:

```tsx
{bookingSteps.map((step, index) => (
  <motion.article
    key={step.number}
    id={`step-${step.number}`}
    ...
    className="group relative border-b border-stone-950/20 py-10 md:min-h-[310px] md:p-10 md:[&:nth-child(odd)]:border-r"
  >
    <div className="absolute top-0 left-0 -translate-x-full pr-4 hidden md:block">
      <span className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">{step.number}</span>
    </div>
    ...
  </motion.article>
))}
```

- [ ] **Step 2: Check + build**

---

### Task 8: Portfolio Filters + Masonry

**Files:**
- Modify: `client/src/pages/Portfolio.tsx`

- [ ] **Step 1: Add category filter tabs**

```tsx
const [activeFilter, setActiveFilter] = useState("All");
const filters = ["All", "Creative Portraits", "Studio Portraits", "Family Portraits", "Couples Portraits"];

// Derive filtered list
const filtered = activeFilter === "All" ? portraits : portraits.filter(p => p.category === activeFilter);
```

Add filter bar above the gallery:

```tsx
<div className="mx-auto max-w-7xl px-4 lg:px-12 mb-8 flex flex-wrap gap-2">
  {filters.map((f) => (
    <button
      key={f}
      onClick={() => setActiveFilter(f)}
      className={`text-xs uppercase px-4 py-2 border transition-colors ${
        activeFilter === f
          ? "border-[hsl(var(--color-gold))] text-[hsl(var(--color-gold))] bg-[hsl(var(--color-gold))/10]"
          : "border-stone-700 text-stone-400 hover:border-stone-500"
      }`}
    >
      {f}
    </button>
  ))}
</div>
```

Change grid to `auto-fill` with masonry-like columns:

```tsx
<div className="mx-auto max-w-7xl columns-2 gap-4 px-4 md:columns-3 md:gap-6 lg:px-12">
```
(Using CSS columns for true masonry without JS.)

Each image gets `break-inside: avoid` and `aspect-ratio` based on its dimensions.

- [ ] **Step 2: Add Photoswipe to portfolio gallery**

Same pattern as Task 6.

- [ ] **Step 3: Check + build**

---

### Task 9: About Page Narrative Merge

**Files:**
- Modify: `client/src/pages/About.tsx`

- [ ] **Step 1: Merge Approach + Philosophy into one section**

Combine both sections. Keep the parallax image background from Philosophy, interleave the Approach copy:

```tsx
<section className="relative scroll-mt-20 overflow-hidden bg-neutral-950 py-28 text-white md:py-36" id="approach">
  <img ... className="absolute inset-0 h-full w-full object-cover opacity-30" />
  <div className="absolute inset-0 bg-black/62"></div>
  <div className="editorial-grid relative">
    <div className="col-span-12 md:col-span-8 md:col-start-3">
      <div className="lookbook-page-marker mb-8 justify-center text-white/80">Approach</div>
      <h2 className="editorial-title mb-8 text-center text-5xl leading-tight text-white md:text-7xl">
        Direction that still leaves room for you.
      </h2>
      <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-white/90 md:text-lg">
        Born in Haiti and raised in Florida, I am a military veteran and UCF graduate who found photography in 2018...
      </p>
      <div className="mx-auto mt-8 max-w-2xl border-y border-white/20 py-6 text-center text-sm uppercase tracking-wide text-white/60">
        <span className="mx-4">Planning</span>
        <span className="mx-4">Posing</span>
        <span className="mx-4">Polished Edits</span>
      </div>
      <div className="mt-8 max-w-3xl mx-auto editorial-title text-center text-3xl italic leading-tight text-white/90 md:text-5xl">
        "Photography gave me a way to hold onto the moments people usually feel before they can explain them."
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/80 md:text-lg">
        The memento mori philosophy reminds me that time is limited...
      </p>
      <div className="mt-12 text-center">
        <a href="/#contact" className="lookbook-next inline-flex max-w-sm text-white/90">
          <span>
            <span className="lookbook-next__meta">Ready to make your portrait</span>
            Request a Session
          </span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</section>
```

Remove the redundant CTA section at the bottom (the one with "Let's create something that feels like you" + two buttons). Replace with a simple text CTA:

```tsx
<section className="bg-stone-100 py-16 text-center">
  <div className="editorial-grid">
    <div className="col-span-12">
      <p className="text-sm text-stone-500">
        If this resonates, reach out — we can shape the session around how you want to be seen.
      </p>
      <a href="/#contact" className="site-button site-button--dark mt-6 inline-flex">
        Get in Touch
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Check + build**

---

### Task 10: Pricing Sticky Mobile Bar

**Files:**
- Modify: `client/src/pages/Pricing.tsx`

- [ ] **Step 1: Add sticky price summary bar**

```tsx
// Mobile-only sticky bar at bottom
const [activePackage, setActivePackage] = useState(0);

// Add before the return
<div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-stone-200 px-4 py-3 flex items-center justify-between">
  <div>
    <span className="text-xs text-stone-500">From</span>
    <span className="ml-2 text-lg font-semibold text-stone-950">{portraitPackages[activePackage].price}</span>
    <span className="ml-1 text-xs text-stone-500">{portraitPackages[activePackage].duration}</span>
  </div>
  <a href="/#contact" className="site-button site-button--dark text-xs py-2 px-4">Inquire</a>
</div>
```

- [ ] **Step 2: Add padding to page bottom on mobile to account for sticky bar**

```tsx
// In the page wrapper div:
className="min-h-screen page-content pb-20 md:pb-0"
```

- [ ] **Step 3: Check + build**

---

### Task 11: Cursor Follower

**Files:**
- Create: `client/src/components/CursorFollower.tsx`
- Modify: `client/src/App.tsx`

- [ ] **Step 1: Create cursor follower**

```tsx
import { useEffect, useRef } from "react";

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMouse = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouse);
    return () => document.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-[hsl(var(--color-gold))] opacity-70 hidden md:block"
      style={{ transition: "transform 0.15s ease-out" }}
      aria-hidden="true"
    />
  );
};

export default CursorFollower;
```

- [ ] **Step 2: Add to App.tsx**

```tsx
import CursorFollower from "@/components/CursorFollower";

// Inside the return, before HelmetProvider or at the end:
<CursorFollower />
```

- [ ] **Step 3: Check + build**

---

### Task 12: Hallmark Slop-Test Audit

**Files:**
- All modified source files

- [ ] **Step 1: Run pre-emit self-critique on each artifact**

Score each modified component on P/H/E/S/R/V. Anything <3 triggers a revision pass. Stamp scores in CSS comments:

```css
/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V4 */
```

- [ ] **Step 2: Final check + build**

```bash
npm run check && npm run build
```
