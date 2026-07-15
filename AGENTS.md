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
