# GitHub Pages Deployment Notes

This export has been converted from a Replit/Express app into a static Vite/React site for GitHub Pages.

## What changed

- The build now runs `vite build` only.
- The Vite output folder is `dist`.
- Replit-only Vite plugins and the Replit dev banner were removed.
- Routing uses normal page paths, and the postbuild script creates static route folders so pages work on the custom GitHub Pages domain.
- Backend-only API features were converted to static-safe fallbacks.
- A GitHub Actions workflow was added at `.github/workflows/deploy.yml`.
- `scripts/postbuild.mjs` creates `404.html` and `.nojekyll` after each build.

## Important asset folder

Keep your large asset folder named exactly:

```text
attached_assets
```

Place it in the project root next to `package.json`. The source code still uses the `@assets` alias, which points to that folder.

## Local build

```bash
npm ci
npm run build
```

The build will fail until the real `attached_assets` folder is present because the React source imports images from it.

## Deploy setup

1. Push this project to GitHub.
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`.

## Static-site limitations

GitHub Pages cannot run the old Express server, database, Drizzle migrations, Google Places API endpoint, Lightroom API endpoint, or admin API routes. Those have been removed or replaced with frontend-safe fallbacks for this static export.
