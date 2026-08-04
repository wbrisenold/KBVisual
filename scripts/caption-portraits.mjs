import { readFileSync, writeFileSync } from "node:fs";

const KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-3.5-flash";
const DIR = "/tmp/kbvisualz-thumbs";
const FILES = [
  "kbv-01", "kbv-03", "kbv-06", "kbv-07", "kbv-08", "kbv-09", "kbv-10",
  "kbv-11", "kbv-12", "kbv-15", "kbv-23", "kbv-24", "kbv-25"
];

const PROMPT = `You are labeling photos for a premium portrait photography portfolio (KB Visualz, Orlando). Captions must feel editorial and aspirational so a visitor imagines booking this photographer, while staying grounded in what is actually visible.

Return JSON only, an object keyed by filename, one entry per attached image:
{
  "kbv-01": { "caption": "2-6 word editorial, aspirational caption", "setting": "factual backdrop phrase e.g. dark studio backdrop", "subjects": "brief factual subject e.g. woman in black dress" },
  ...
}

Rules for every caption: 2 to 6 words, magazine-quality, classy never cheesy. Do NOT invent names, real locations, or specific occasions unless clearly visible in the frame. "setting" is the physical set so same-shoot photos group together.`;

function extractJson(text) {
  try { return JSON.parse(text); } catch {}
  const s = text.indexOf("{");
  const e = text.lastIndexOf("}");
  if (s === -1 || e <= s) return null;
  try { return JSON.parse(text.slice(s, e + 1)); } catch { return null; }
}

const parts = [{ text: PROMPT }];
for (const f of FILES) {
  const b64 = readFileSync(`${DIR}/${f}.jpg`).toString("base64");
  parts.push({ inline_data: { mime_type: "image/jpeg", data: b64 } });
}

const body = {
  contents: [{ parts }],
  generationConfig: { temperature: 0.3, maxOutputTokens: 8192, responseMimeType: "application/json" }
};

let result = null;
for (let attempt = 0; attempt < 12; attempt++) {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    );
    const t = await res.text();
    if (res.ok) {
      const j = JSON.parse(t);
      const text = (j.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? "").join("");
      result = extractJson(text);
      if (result) break;
    }
    const wait = 30000 + attempt * 5000;
    console.log(`  attempt ${attempt + 1}: HTTP ${res.status} — retrying in ${wait / 1000}s`);
    await new Promise((r) => setTimeout(r, wait));
  } catch (e) {
    console.log(`  attempt ${attempt + 1}: fetch error — retrying`);
    await new Promise((r) => setTimeout(r, 30000 + attempt * 5000));
  }
}

if (!result) {
  console.error("no valid JSON returned");
  process.exit(1);
}
writeFileSync("scripts/captions.json", JSON.stringify(result, null, 2));
for (const f of FILES) {
  console.log(f.padEnd(7), "→", (result[f] && result[f].caption) || "MISSING");
}
console.log("done → scripts/captions.json");