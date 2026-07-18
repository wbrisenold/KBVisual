# Design Conventions

- **Brand gold**: `yellow-700` (#a16207) — used for all gold text, borders, icons
- **Animations**: snappy (0.3-0.6s), no `filter: blur()` in scroll-in/entry anims
- **Hover/tap**: CSS transitions over framer-motion `whileHover`/`whileTap` where possible
- **Typography**: Newsreader serif for headings, Outfit sans-serif for body
- **Cursor**: Custom SVG camera cursor on `<a>`/`<button>` elements
- **Scrolling**: Lenis smooth scroll (loaded dynamically)
- **View transitions**: native View Transition API for page navigation
- **Glassmorphism**: `bg-white/70 backdrop-blur-xl border-b border-white/20` for nav
- **Featured pricing**: `bg-white/6 backdrop-blur-xl border-white/15` for glass panel

# Architecture

- **Framework**: React 18 + Vite + TypeScript
- **Routing**: wouter (lightweight), hash-free, trailing-slash
- **Animation**: framer-motion for entry/scroll, CSS transitions for interactions
- **Lightbox**: PhotoSwipe (no UI framework)
- **Styling**: Tailwind CSS v3
- **Testing**: Playwright + axe-core
- **Hosting**: GitHub Pages (static export via vite.config.ts base path)
- **Domain**: kbvisualz.com
