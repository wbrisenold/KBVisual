## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## handoff

After every batch of tool calls that makes changes, update this file with current state.

## State

### Objective
Optimize and fix visual issues in KB Visualz photography portfolio site.

### Completed
- Fixed invalid cursor SVG (extra `<circle>` inside `<path>` removed)
- Removed duplicate `background-color` on `.site-button--light`
- Removed duplicate `overflow-x: clip` on `body`
- Throttled `useScrollPosition` with `requestAnimationFrame`
- Replaced framer-motion `whileHover`/`whileTap` with CSS transitions in Navigation (logo, nav items, mobile menu)
- Deleted 43/47 unused shadcn/ui component files (kept: card, toaster, toast, tooltip)
- Removed `@tanstack/react-query` provider + `queryClient.ts`
- Removed `use-mobile.tsx` and `shared/schema.ts`
- Deduplicated trailing-slash routes in App.tsx
- Fixed SEOHead `structuredData` default from `[]` to safe undefined handling
- Uninstalled 26 unused npm packages
- Restored `utils.ts` with `cn()` (needed by toast/card components)
- Added README section for `npm run dev` and `npm run preview`
- Replaced `"luxurylens-github-pages"` → `"kbvisualz"` in package.json name
- Speed up all framer-motion animations across Hero, Home, Portfolio, About
- Pricing.tsx: `!text-yellow-400` → `!text-yellow-500` (2 spots), `text-yellow-800` → `text-yellow-700` (3 spots), `text-yellow-700/80` → `text-yellow-700/90`, all done
- FAQ.tsx: removed `filter: "blur(8px)"` from scroll-in, halved duration to 0.45s
- Pricing.tsx: removed `filter: "blur(10px)"` from hero + package cards, halved all durations (0.9→0.5, 0.8→0.4, etc.)
- About.tsx: halved animation durations (1.0→0.5, 0.8→0.4)
- GoogleReviews.tsx: halved duration to 0.4s
- About.tsx: fixed low-contrast `text-stone-500` → `text-stone-600`
- App.tsx: added skip-to-content link + `<main>` landmark for accessibility
- Created `.agents/skills/handoff/SKILL.md` — persistent instruction to update AGENTS.md after every change batch
- Dev server running at `http://localhost:5173/` with clean Vite cache

### Pending
- (none)

### Blocked
- (none)

### Next Move
1. Wait for user input or new task

### Relevant Files
- `client/src/pages/Home.tsx`: Hero, booking steps, on-session, CTA sections
- `client/src/pages/Portfolio.tsx`: Lightbox gallery, entry/scroll animations
- `client/src/pages/About.tsx`: Hero, approach, philosophy, booking sections
- `client/src/pages/Pricing.tsx`: Hero, packages, policy sections
- `client/src/components/Hero.tsx`: Entry animation
- `client/src/components/Navigation.tsx`: CSS hover/tap, no framer-motion whileHover
- `client/src/components/FAQ.tsx`: Accordion FAQ with scroll-in
- `client/src/components/GoogleReviews.tsx`: Review CTA card
- `client/src/components/Footer.tsx`: Links with gold hover
- `client/src/components/BrandMark.tsx`: KB monogram
- `client/src/components/SEOHead.tsx`: SEO meta + JSON-LD
- `client/src/App.tsx`: Routes, nav+footer layout, scroll handling, skip-to-content
- `client/src/index.css`: All utility classes, custom cursor, CSS vars
- `tailwind.config.ts`: Theme colors
- `.agents/skills/handoff/SKILL.md`: Persistent handoff update instruction
