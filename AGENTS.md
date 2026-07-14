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
- **Build**: `npm run build` (Vite, ~2s)
- **Preview**: `npm run preview`
- **Format/Lint**: none configured in this project

### Design Decisions

- **Brand gold**: Tailwind `yellow-700` (#a16207). All gold text/borders/icons must use this exact color. No `yellow-400`, `yellow-500`, `yellow-800`.
- **Animations**: snappy (0.3-0.6s), no `filter: blur()` in scroll-in/entry anims
- **Hover/tap**: CSS transitions over framer-motion `whileHover`/`whileTap` where possible
- **Typography**: Newsreader serif for headings, Inter sans-serif for body
- **Cursor**: Custom SVG camera cursor on `<a>`/`<button>` elements
- **Scrolling**: Lenis smooth scroll (loaded dynamically), custom scroll handler for hash links
- **View transitions**: native View Transition API for page navigation

### Conversation Style

- User prefers **terse, direct** responses. No pleasantries, no explanations of what was just done.
- Ponytail mode active: keep solutions minimal, no over-engineering.
- Dev builds should succeed (check with `npm run build`) after any change batch.

### Last Session (2026-07-14)

**Worked on**: Visual audit and fixes for KB Visualz portfolio site.
- Unified all gold colors to `yellow-700` across Pricing.tsx and Home.tsx
- Removed `filter: blur()` from all scroll-in animations (FAQ.tsx, Pricing.tsx)
- Halved all animation durations across About.tsx, Pricing.tsx, GoogleReviews.tsx, FAQ.tsx
- Fixed low-contrast text in About.tsx (`stone-500` → `stone-600`) and Pricing.tsx (`yellow-700/80` → `yellow-700/90`)
- Added skip-to-content link + `<main>` landmark for accessibility in App.tsx
- Created `.agents/skills/handoff/SKILL.md` for persistent AGENTS.md updates
- Created `.agents/skills/cavecrew/` + related caveman skills
- Read all 17 installed skills and documented them here
- Committed and pushed as `6016fdb8`

**Next**: Waiting for user input.

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
- Pricing.tsx: `!text-yellow-400` → `!text-yellow-700` (2 spots), `text-yellow-800` → `text-yellow-700` (3 spots), `text-yellow-700/80` → `text-yellow-700/90`, all done. Home.tsx: `!text-yellow-500` → `!text-yellow-700`
- FAQ.tsx: removed `filter: "blur(8px)"` from scroll-in, halved duration to 0.45s
- Pricing.tsx: removed `filter: "blur(10px)"` from hero + package cards, halved all durations (0.9→0.5, 0.8→0.4, etc.)
- About.tsx: halved animation durations (1.0→0.5, 0.8→0.4)
- GoogleReviews.tsx: halved duration to 0.4s
- About.tsx: fixed low-contrast `text-stone-500` → `text-stone-600`
- App.tsx: added skip-to-content link + `<main>` landmark for accessibility
- Created `.agents/skills/handoff/SKILL.md` — persistent handoff with cross-agent context
- Read all 17 installed skills and documented in cross-agent context table
- Discovered and configured rtk (Rust Token Killer) CLI proxy

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
- `.agents/skills/handoff/SKILL.md`: Persistent handoff update instruction with cross-agent context
- `.agents/skills/cavecrew/`: Subagent delegation skills
- All `.agents/skills/*/SKILL.md`: Project-installed skills
