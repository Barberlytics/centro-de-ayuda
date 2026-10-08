#!/usr/bin/env node
/**
 * En el español, un enlace interno suele llevar como texto el título del
 * artículo al que apunta. En la traducción ese texto lo escribió quien
 * tradujo, y puede no coincidir con el título traducido del destino. Este
 * guion lo alinea: donde el original usa el título exacto del destino, la
 * traducción pasa a usar el título traducido del destino.
 *
 *   node scripts/align-link-titles.mjs en
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const locale = process.argv[2] ?? "en";
const dirs = { es: path.join(ROOT, "content", "es"), target: path.join(ROOT, "content", locale) };
const LINK = /\[([^\]]+)\]\(\/ayuda\/([^)#\s]+)(#[^)]*)?\)/g;

const list = (dir) => fs.readdirSync(dir, { recursive: true }).filter((file) => String(file).endsWith(".md")).map(String);
const titles = (dir) => Object.fromEntries(list(dir).map((file) => [file.replace(/\.md$/, ""), matter(fs.readFileSync(path.join(dir, file), "utf8")).data.title]));
const esTitles = titles(dirs.es);
const targetTitles = titles(dirs.target);

let changed = 0;
for (const file of list(dirs.target)) {
  const sourceFile = path.join(dirs.es, file);
  if (!fs.existsSync(sourceFile)) continue;
  const sourceLinks = [...fs.readFileSync(sourceFile, "utf8").matchAll(LINK)];
  const targetPath = path.join(dirs.target, file);
  const text = fs.readFileSync(targetPath, "utf8");
  let index = 0;
  const next = text.replace(LINK, (whole, label, id, hash = "") => {
    const source = sourceLinks[index++];
    const target = id.replace(/\/$/, "");
    // Solo si el original enlaza al mismo sitio con el título exacto del destino.
    if (!source || source[2].replace(/\/$/, "") !== target || source[1] !== esTitles[target] || !targetTitles[target]) return whole;
    if (label === targetTitles[target]) return whole;
    changed += 1;
    return `[${targetTitles[target]}](/ayuda/${id}${hash})`;
  });
  if (next !== text) fs.writeFileSync(targetPath, next);
}
console.log(`${changed} enlace(s) alineados con el título del destino.`);
