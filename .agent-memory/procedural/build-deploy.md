# Build & Deploy

```bash
# TypeScript check
npm run check

# Production build
npm run build

# Preview (dev server)
npm run dev

# Full verify (check + build + validate HTML + e2e)
npm run verify
```

## GitHub Pages

Site auto-deploys from `dist/` on push to `main`. The `vite.config.ts` sets `base: "/KBVisual/"` for the `source` branch deployment (repo name: `KBVisual`).

## CI

`.github/workflows/ci.yml` runs on push/PR to `main`:
1. Matrix: Node 18.x, 20.x
2. `npm ci`
3. `npm run check`
4. `npm run build`
5. Playwright e2e
