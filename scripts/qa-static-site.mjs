#!/usr/bin/env node
/**
 * Post-build static QA for Marketing export (out/).
 * Run from Marketing after: npm run build
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "out");
const srcRoot = join(process.cwd(), "src");
let failed = false;

function fail(msg) {
  console.error(`QA FAIL: ${msg}`);
  failed = true;
}

function warn(msg) {
  console.warn(`QA WARN: ${msg}`);
}

function mustExist(rel) {
  const p = join(root, rel);
  if (!existsSync(p)) fail(`missing ${rel}`);
}

function walkHtml(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walkHtml(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function scanSrc(pattern, label) {
  if (!existsSync(srcRoot)) return;
  const rg = new RegExp(pattern, "i");
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      if (name === "node_modules") continue;
      const p = join(dir, name);
      const st = statSync(p);
      if (st.isDirectory()) walk(p);
      else if (/\.(tsx|ts|md)$/.test(name)) {
        const t = readFileSync(p, "utf8");
        if (rg.test(t)) fail(`${label} in ${p}`);
      }
    }
  };
  walk(srcRoot);
}

console.log("Marketing static QA…");

mustExist("index.html");
mustExist("sitemap.xml");
mustExist("robots.txt");
["og/reddirt-os-og.svg", "og/reddirt-os-lanes.svg", "og/reddirt-os-feature.svg"].forEach((f) => mustExist(f));

const htmlFiles = walkHtml(root);
if (htmlFiles.length < 90) warn(`expected many html files, found ${htmlFiles.length}`);

scanSrc("Lorem ipsum|lorem ipsum|\\bTODO\\b|coming soon", "placeholder/TODO/Lorem");
scanSrc("googletagmanager|gtag\\(|facebook\\.com/tr|hotjar|segment\\.", "analytics");
scanSrc("unsplash|pexels|pixabay|shutterstock|gettyimages", "stock image vendor");

console.log(failed ? "QA completed with failures." : "QA OK.");
process.exit(failed ? 1 : 0);
