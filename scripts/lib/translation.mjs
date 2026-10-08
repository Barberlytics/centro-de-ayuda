/**
 * Compara una traducción con su original en español: lo que no se traduce
 * (ids, roles, pantallas, relacionados, capturas, enlaces) tiene que ser
 * idéntico, y lo que sí se traduce tiene que existir. Lo usan `build.mjs`
 * y `check-translation.mjs`.
 */
import { extractH1, extractImages, extractInternalLinks } from "./markdown.mjs";

/** Lo que una traducción copia tal cual del original. */
const KEPT = ["id", "section", "order", "roles", "screens", "related", "status"];

/** El bloque «En resumen» en cada idioma. */
export const SUMMARY_MARKER = { es: "**En resumen:**", en: "**In short:**" };

const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
const asText = (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? ""));
const sorted = (list) => [...new Set(list)].sort();

/**
 * @param source   { data, content } del original (gray-matter)
 * @param target   { data, content } de la traducción
 * @param groupMap Map grupo español → grupo traducido de esa sección
 * @returns lista de problemas (vacía si está bien)
 */
export function compareTranslation(source, target, { locale, groupMap }) {
  const problems = [];
  for (const key of KEPT) {
    if (!same(source.data[key], target.data[key])) problems.push(`\`${key}\` tiene que ser igual al original (${JSON.stringify(source.data[key])})`);
  }
  if (asText(source.data.updated) !== asText(target.data.updated)) problems.push("`updated` tiene que ser igual al original");
  for (const key of ["title", "description"]) {
    if (!target.data[key]) problems.push(`falta \`${key}\``);
  }
  if (target.data.title && target.data.title === source.data.title) problems.push("`title` sigue en español");
  if (!Array.isArray(target.data.keywords) || target.data.keywords.length < Math.min(3, source.data.keywords?.length ?? 0)) problems.push("faltan `keywords`");

  if (source.data.group) {
    const expected = groupMap?.get(String(source.data.group));
    if (target.data.group !== expected) problems.push(`\`group\` tiene que ser «${expected}»`);
  }

  const h1 = extractH1(target.content);
  if (h1 !== target.data.title) problems.push(`el H1 «${h1}» no coincide con title «${target.data.title}»`);
  if (source.content.includes(SUMMARY_MARKER.es) && !target.content.includes(SUMMARY_MARKER[locale])) problems.push(`falta ${SUMMARY_MARKER[locale]}`);

  const sourceImages = sorted(extractImages(source.content).map((image) => image.src));
  const targetImages = sorted(extractImages(target.content).map((image) => image.src));
  if (!same(sourceImages, targetImages)) problems.push(`las capturas no coinciden con el original (${sourceImages.length} vs ${targetImages.length})`);
  for (const image of extractImages(target.content)) if (!image.alt.trim()) problems.push(`la captura ${image.src} no tiene alt`);

  const sourceLinks = sorted(extractInternalLinks(source.content));
  const targetLinks = sorted(extractInternalLinks(target.content));
  if (!same(sourceLinks, targetLinks)) problems.push(`los enlaces internos no coinciden con el original: faltan [${sourceLinks.filter((link) => !targetLinks.includes(link)).join(", ")}], sobran [${targetLinks.filter((link) => !sourceLinks.includes(link)).join(", ")}]`);

  return problems;
}

/** Mapa sección → (grupo español → grupo traducido), por posición en `_sections.json`. */
export function groupMaps(sourceSections, targetSections) {
  return new Map(
    sourceSections.map((section) => {
      const translated = targetSections.find((item) => item.id === section.id)?.groups ?? [];
      return [section.id, new Map((section.groups ?? []).map((group, index) => [group, translated[index]]))];
    })
  );
}
