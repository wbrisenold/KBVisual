#!/usr/bin/env node
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const playlist = args[0];
const outDir = args[1] ?? "video-previews";
const duration = Number(args[2] ?? 4);

if (!playlist) {
  console.error("Usage: npm run video:previews -- <youtube-playlist-url> [out-dir] [duration-seconds]");
  process.exit(1);
}

const run = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

mkdirSync(outDir, { recursive: true });

const list = spawnSync("yt-dlp", ["--flat-playlist", "--print", "%(url)s", playlist], {
  encoding: "utf8"
});

if (list.status !== 0) {
  console.error("Could not read playlist. Make sure yt-dlp is installed and the playlist is accessible.");
  process.exit(list.status ?? 1);
}

const urls = list.stdout.split("\n").map((line) => line.trim()).filter(Boolean);

for (const [index, url] of urls.entries()) {
  const label = String(index + 1).padStart(2, "0");
  const source = join(outDir, `${label}-source.mp4`);
  const output = join(outDir, `${label}.mp4`);
  const poster = join(outDir, `${label}.jpg`);

  run("yt-dlp", [
    "-f",
    "bv*[height<=1080]+ba/b[height<=1080]",
    "--download-sections",
    `*00:00:05-00:00:${String(5 + duration).padStart(2, "0")}`,
    "--merge-output-format",
    "mp4",
    "-o",
    source,
    url
  ]);

  run("ffmpeg", [
    "-y",
    "-i",
    source,
    "-vf",
    "scale=960:-2,crop=960:1200",
    "-an",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    output
  ]);

  run("ffmpeg", ["-y", "-i", output, "-frames:v", "1", poster]);
}
