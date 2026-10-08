#!/usr/bin/env node
/**
 * Valida las traducciones de una o varias secciones contra el español.
 *
 *   node scripts/check-translation.mjs en calendario clientes
 *   node scripts/check-translation.mjs en            ← todas
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { compareTranslation, groupMaps } from "./lib/translation.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [locale = "en", ...only] = process.argv.slice(2);
const sourceDir = path.join(ROOT, "content", "es");
const targetDir = path.join(ROOT, "content", locale);
const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const maps = groupMaps(readJson(path.join(sourceDir, "_sections.json")), readJson(path.join(targetDir, "_sections.json")));

const sections = only.length ? only : fs.readdirSync(sourceDir).filter((name) => fs.statSync(path.join(sourceDir, name)).isDirectory());
let missing = 0;
let failed = 0;
let ok = 0;
for (const section of sections) {
  for (const file of fs.readdirSync(path.join(sourceDir, section)).filter((name) => name.endsWith(".md"))) {
    const rel = `${section}/${file}`;
    const target = path.join(targetDir, rel);
    if (!fs.existsSync(target)) {
      missing += 1;
      console.log(`· sin traducir: ${rel}`);
      continue;
    }
    const problems = compareTranslation(matter(fs.readFileSync(path.join(sourceDir, rel), "utf8")), matter(fs.readFileSync(target, "utf8")), { locale, groupMap: maps.get(section) });
    if (problems.length) {
      failed += 1;
      for (const problem of problems) console.log(`✖ ${rel}: ${problem}`);
    } else ok += 1;
  }
}
console.log(`\n${ok} bien, ${failed} con problemas, ${missing} sin traducir.`);
process.exit(failed ? 1 : 0);
