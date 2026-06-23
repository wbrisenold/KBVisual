import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");
const notFoundFile = join(distDir, "404.html");
const nojekyllFile = join(distDir, ".nojekyll");

if (existsSync(indexFile)) {
  copyFileSync(indexFile, notFoundFile);
}

writeFileSync(nojekyllFile, "");
