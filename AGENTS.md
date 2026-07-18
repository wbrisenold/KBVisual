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

## Cross-Agent Context

This section is for any agent or coding tool (Claude Code, opencode, Cursor, Cline, etc.) that joins this project. Read this first to understand how to operate.

### Active Skills & Modes

| Skill | Status | Trigger | Purpose |
|-------|--------|---------|---------|
| ponytail | active (full) | `ponytail` / `stop ponytail` | Lazy correct solution: YAGNI, stdlib, native, reuse, minimal |
| rtk | ready | `rtk <cmd>` | Token-optimized CLI proxy for git/ls/grep/read/tree |
| cavecrew | on request | `"delegate to subagent"` | Spawn compressed subagents (investigator/builder/reviewer) to save context |
| graphify | on request | `/graphify` | Codebase knowledge graph queries |
| defuddle | on request | URL reading task | Clean web page extraction instead of WebFetch |
| caveman-commit | on request | `"write a commit"` | Terse Conventional Commits messages |
| caveman-review | on request | `"review this PR"` | One-line code review comments |
| caveman-compress | on request | `/caveman-compress <file>` | Compress .md memory files to save tokens |
| handoff | always active | auto | Update this file after every change batch |
| obsidian-* | on request | Obsidian tasks | Vault interaction, bases, flavored markdown |
| json-canvas | on request | .canvas file tasks | JSON Canvas file creation/editing |
| bergside-design | on request | design tasks | Directory of 67 design skill files |

### Tooling Preferences

- **CLI proxy**: prefix relevant commands with `rtk` (e.g. `rtk git status`, `rtk ls`, `rtk grep`)
- **Package manager**: npm
- **Dev server**: `npm run dev` → `http://localhost:5173/`
- **Build**: `npm run build` (Vite, ~1.5s)
- **Preview**: `npm run dev`
- **Check**: `npm run check` (TypeScript, ~5s)
- **Verify**: `npm run verify` (check + build + HTML validate + Playwright e2e)

### Design Decisions

- **Contact form**: No session type dropdown — just name, email, phone, message. Lower submission barrier.
- **Portfolio CTA**: Simplified to single "Inquire" button — pricing link is in nav/process section.
- **Gallery on home**: 6-image grid, 2/3-column, no captions/CTAs. Pure images with "View full portfolio" text link.
- **Privacy notice**: Small text below contact form submit button about data usage.
- **SEO titles**: Brand-first ("KB Visualz — ...") over keyword-stuffed.
- **Removed sections from home**: Session Day, Google Reviews, FAQ — only Process + Contact remain after gallery.
- **FAQ only on Pricing**: All other pages removed their FAQ sections.
- **reduced-motion**: `motion-safe:group-hover:scale-105` on all gallery scales.

### Conversation Style

- User prefers **terse, direct** responses. No pleasantries, no explanations of what was just done.
- Ponytail mode active: keep solutions minimal, no over-engineering.
- Dev builds should succeed (check with `npm run build`) after any change batch.

### Last Session (2026-07-16) — Round 8: Typecheck fix, image pipeline, deploy

**Context:** Working tree had 5 `tsc` errors blocking `npm run verify`. `vite-env.d.ts` declares image imports as `{ src, srcSet }` (Vite + imagetools → webp), but 5 call sites passed the raw object into `<img src={...}>`. Also: live GitHub Pages site showed missing images because the deploy predated the working image pipeline.

**Completed:**
- **Typecheck root-cause fix (systematic-debugging):** changed `src={X}` → `src={X.src}` at 5 sites — `Hero.tsx:10`, `About.tsx:69,144`, `Home.tsx:87`, `Pricing.tsx:132`. `npm run check` now clean (0 errors).
- **Home gallery a11y:** 6 tiles had `alt=""`; added `homeGalleryAlts[]` with descriptive text.
- **Copy fix:** Home "process" step said "one-hour, two-hour, and studio options" but only 2 packages exist; corrected to "one-hour and two-hour sessions".
- **Image de-dup:** Pricing hero used `kbv-07` (also on Home gallery); swapped to `kbv-05` (previously unused).
- **Build verified:** `npm run build` passes (2.2s), 10 webp images emitted to `dist/assets` (kbv-01..10 + profile-pic).
- **GitHub fix (the "pics missing" cause):** `static.yml` deploys `dist` to Pages on push to `main`. Committed full working-tree state (image pipeline, SEOHead refactor, new `types/`, `ErrorBoundary.tsx`, `seo.ts`, `ui.ts`, `.src` fixes) and pushed `0af208b9` → main. Next Actions run rebuilds with images, resolving missing pics on the live site.

**Image pipeline notes (critical for future agents):**
- `@assets` alias → `attached_assets/` (vite.config.ts:55). Images live in `attached_assets/kbvisualz-current/kbv-01..10.jpg` + `attached_assets/profile-pic.jpg`. They ARE git-tracked (not ignored).
- `vite-imagetools` default directive transforms every `*.jpg` import → webp `<picture>` object `{ src, srcSet }`. The `.src` is the runtime URL.
- Dev server returns SPA fallback HTML for direct `@assets/...` URL fetches (expected — images injected client-side by JS, not in initial HTML). Build output is the source of truth; `dist/assets/*.webp` confirms emission.
- NEVER change `vite-env.d.ts` image module declaration to `string` — the `{ src, srcSet }` shape is required by imagetools. Fix call sites with `.src` instead.

**MCP state:**
- `opencode.json` `mcp` block: keyless servers `playwright` (`@playwright/mcp@latest --headless`) + `flyonui` (`flyonui-mcp`). `magic-21st`/`ui-layouts` removed (required API keys).
- Playwright MCP is **non-functional**: it hard-requires system `Google Chrome.app` at `/Applications/Google Chrome.app` and ignores the ms-playwright cache. Must install system Chrome (or reconfigure the MCP to use the bundled chromium) before any live visual/responsive checks. User declined silent Chrome install.

**Pending:**
- Install system Chrome (or fix Playwright MCP launch options) to enable live visual/responsive pass.
- Privacy policy page / link (carried from Round 7).
- Analytics for form submissions (carried from Round 7).
- Verify deployed URL after the Actions run finishes (https://wbrisenold.github.io/KBVisual/).

### Last Session (2026-07-15) — Round 7: Editorial from-scratch pricing

**Completed:**
- **Pricing.tsx (from-scratch editorial redesign):**
  - **Full rewrite** — no glass, no backdrop-blur, no translucency. Pure editorial magazine layout.
  - **Hero:** Full-viewport dark scene with parallax portrait bg, pure floating text (no card), staggered 3D entrance with `rotateX`, gold scroll indicator
  - **Packages:** 3-column editorial card grid on white (`bg-white`), thin `border-stone-200` cards, featured card has gold top accent bar + gold border, `md:-mt-4` elevation, secondary CTA is a text link instead of outline button
  - **Studio callout:** Cream `bg-[#f3efe7]` pull-quote section with thick gold left border (`border-l-4 border-yellow-700`), magazine-style layout
  - **Steps:** Clean numbered editorial list on white, large `font-light` gold numbers (`text-4xl md:text-5xl`), `divide-y divide-stone-200`, staggered entrance
  - **Policies:** Editorial text grid on `bg-stone-950`, 2-column layout, no cards — just `<h3>` + `<p>` pairs with staggered entrance
  - **Motion:** Staggered entrances throughout (`0.08`/`0.04` delays), `whileHover={{ y: -4 }}` on package cards, `ease: [0.16, 1, 0.3, 1]` on all
- Build passes clean (3.29s)

**Applied skills:** ponytail, bergside-awesome-design-skills, graphify, handoff, ux-researcher, competitive-analyst, content-quality-editor, ui-designer, seo-specialist, refactoring-specialist, design-bridge, first-principles-thinking, accessibility-tester, performance-engineer, qa-expert, legal-advisor, code-reviewer, typescript-pro, frontend-developer, build-engineer, error-detective, technical-writer, data-analyst

**Pending:**
- Privacy policy page or link if user wants to expand the legal notice
- Analytics if user wants to track form submissions
- Gallery image optimization (generating smaller thumbnails) if page weight becomes a concern

### Last Session (2026-07-17) — Round 9: Full redesign with hallmark + taste-skill + GSAP

**Completed:**
- **Task 1 — Token cleanup:** Consolidated 25+ duplicate CSS vars into 4 brand tokens (`--color-gold`, `--color-stone`, `--color-cream`, `--color-ink`). Removed camera cursor override. Replaced all `premium-*`/`luxury-*` refs with clean tokens.
- **Task 2 — Navigation drawer:** Full-screen mobile overlay → bottom-sheet drawer with rounded top. Added animated gold underline on active page via `layoutId`.
- **Task 3 — Footer expansion:** From 1 link + copyright → 3-column grid: brand tagline, nav links, contact info.
- **Task 4 — GSAP hook:** Created `useGsapReveal` — reusable lazy-loaded GSAP + ScrollTrigger reveal hook.
- **Task 5 — Hero GSAP reveal:** GSAP text reveal on headline, parallax image drift on scroll, collapsed 3-layer gradient to 1 clean gradient.
- **Task 6 — Home gallery lightbox:** Added Photoswipe tap-to-expand. Replaced text "View full portfolio" link with hallmarked button.
- **Task 7 — Process section:** Added decorative scroll-anchored number markers (01–04) on desktop.
- **Task 8 — Portfolio:** Category filter tabs (All/Creative/Studio/Family/Couples). CSS columns masonry layout. Photoswipe lightbox.
- **Task 9 — About:** Merged Approach + Philosophy into one flowing editorial narrative with pull-quote interleave. Removed redundant CTA band.
- **Task 10 — Pricing:** Sticky mobile price summary bar with Inquire CTA at bottom.
- **Task 11 — Cursor follower:** Subtle gold dot follower, reduced-motion aware, desktop only.
- **Task 12 — Hallmark audit:** Pre-emit critique stamped in CSS. Slop-test passed on SEO (one note: `openingHours` may be an AI default — should verify).

**Skills applied:** hallmark, taste-skill, codegraph, brainstorming, code-reviewer, writing-plans

**Pending:**
- Verify `openingHours: "Mo-Su 09:00-20:00"` in seo.ts is accurate (vs "by appointment")
- Install system Chrome for Playwright visual checks
