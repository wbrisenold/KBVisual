import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");
const nojekyllFile = join(distDir, ".nojekyll");

const routeMeta = {
  portfolio: {
    title: "Orlando Portrait Photography Portfolio | KB Visualz",
    description:
      "View KB Visualz portrait photography in Orlando and Central Florida, including studio, family, creative, engagement, couples, and editorial portrait work.",
    keywords:
      "Orlando portrait portfolio, portrait photography portfolio Orlando, Central Florida portraits, studio portraits Orlando, family portraits Orlando, engagement portraits Orlando",
    url: "https://kbvisualz.com/portfolio/"
  },
  about: {
    title: "About Ken Brisenold, Orlando Portrait Photographer | KB Visualz",
    description:
      "Meet Ken Brisenold of KB Visualz, an Orlando portrait photographer creating polished graduation, family, branding, fashion, and creative portraits across Central Florida.",
    keywords:
      "Ken Brisenold, KB Visualz, Orlando portrait photographer, Central Florida photographer, UCF photographer, Florida portrait photography",
    url: "https://kbvisualz.com/about/"
  },
  pricing: {
    title: "Orlando Portrait Photography Pricing | KB Visualz",
    description:
      "Review KB Visualz portrait photography pricing in Orlando, FL. Signature and Legacy sessions include edited photos, planning, posing direction, and optional studio booking guidance.",
    keywords:
      "Orlando portrait photography pricing, Orlando photographer prices, portrait session pricing Orlando, graduation photos Orlando pricing, branding portraits Orlando pricing",
    url: "https://kbvisualz.com/pricing/"
  }
};

const notFoundMeta = {
  title: "Page Not Found | KB Visualz",
  description:
    "This KB Visualz page could not be found. Use the site navigation to return to Orlando portrait photography work, pricing, or booking information.",
  keywords:
    "KB Visualz, Orlando portrait photographer, Central Florida portrait photography",
  url: "https://kbvisualz.com/404.html",
  robots: "noindex, follow"
};

const setMeta = (html, meta) =>
  html
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(
      /<meta name="keywords" content=".*?" \/>/,
      `<meta name="keywords" content="${meta.keywords}" />`
    )
    .replace(
      /<meta name="robots" content=".*?" \/>/,
      `<meta name="robots" content="${meta.robots ?? "index, follow, max-image-preview:large"}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${meta.url}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${meta.url}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${meta.title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(
      /<meta name="twitter:url" content=".*?" \/>/,
      `<meta name="twitter:url" content="${meta.url}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${meta.title}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${meta.description}" />`
    );

if (existsSync(indexFile)) {
  const indexHtml = readFileSync(indexFile, "utf8");

  writeFileSync(notFoundFile, setMeta(indexHtml, notFoundMeta));

  for (const [route, meta] of Object.entries(routeMeta)) {
    const routeDir = join(distDir, route);
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(join(routeDir, "index.html"), setMeta(indexHtml, meta));
  }
}

writeFileSync(nojekyllFile, "");
