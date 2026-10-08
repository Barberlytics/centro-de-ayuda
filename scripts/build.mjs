#!/usr/bin/env node
/**
 * Convierte `content/<idioma>/**.md` en lo que consumen la app y la IA:
 *
 *   dist/index.json                     secciones, artículos, mapa pantalla → artículos
 *   dist/search.json                    índice de búsqueda (texto plano por artículo)
 *   dist/articles/<seccion>/<id>.md     el cuerpo sin frontmatter
 *   dist/assets/**                      las capturas (compartidas por todos los idiomas)
 *   dist/llms.txt · dist/llms-full.txt  la base para un agente
 *   dist/<idioma>/…                     lo mismo en cada traducción (sin assets)
 *
 * El español es la fuente y va en la raíz, como siempre. Cada traducción
 * (ver TRANSLATING.md) se valida contra su original; un artículo que aún no
 * está traducido sale en español en ese idioma, marcado con `locale: "es"`.
 *
 * `--check` valida sin escribir. Cualquier error de contenido (frontmatter
 * incompleto, imagen que no existe, `related` roto) hace fallar el comando.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { compareTranslation, groupMaps, SUMMARY_MARKER } from "./lib/translation.mjs";
import { extractH1, extractHeadings, extractImages, extractInternalLinks, extractQuestions, readingMinutes, toPlainText } from "./lib/markdown.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");
const ASSETS = path.join(ROOT, "assets");
const DIST = path.join(ROOT, "dist");
const SOURCE_LOCALE = "es";
/** Los idiomas publicados: el primero es la fuente y va en la raíz de dist/. */
const LOCALES = ["es", "en"];
const SITE_URL = process.env.HELP_SITE_URL ?? "https://barberlytics.github.io/centro-de-ayuda";
const APP_URL = process.env.HELP_APP_PUBLIC_URL ?? "https://app.barberlytics.com/ayuda";

const REQUIRED = ["id", "title", "description", "section", "order", "roles", "screens", "keywords", "status", "updated"];
const STATUSES = new Set(["draft", "review", "published"]);
const ROLES = new Set(["owner", "admin", "recepcion", "barbero", "todos"]);

const checkOnly = process.argv.includes("--check");
const errors = [];
const warnings = [];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}
function warn(file, message) {
  warnings.push(`${file}: ${message}`);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const manifestPath = path.join(ROOT, "screenshots.json");
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};

const shotKey = (src) => src.replace(/^\/assets\/[a-z]{2}\//, "").replace(/\.png$/, "");
/** Lo que cambia de un idioma a otro en los textos que genera el build. */
const COPY = {
  es: {
    llmsTitle: "# Centro de ayuda de Barberlytics",
    llmsIntro:
      "> Barberlytics es la plataforma con la que los dueños de barberías manejan citas, clientes, equipo, nómina y precios, y entienden la salud de su negocio. Esta es la ayuda para quien la usa: en español, sin lenguaje técnico.",
    fullTitle: "# Centro de ayuda de Barberlytics — texto completo",
    fullIntro: (date) => `Generado ${date}. Cada artículo lleva su sección, para quién es, en qué pantallas aplica y su URL en la app.`,
    labels: { section: "Sección", roles: "Para", screens: "Pantallas", url: "URL", status: "Estado", updated: "actualizado" },
  },
  en: {
    llmsTitle: "# Barberlytics Help Center",
    llmsIntro:
      "> Barberlytics is the platform barbershop owners use to run appointments, clients, team, payroll and prices, and to understand the health of their business. This is the help for the people who use it: in plain English, no technical jargon.",
    fullTitle: "# Barberlytics Help Center — full text",
    fullIntro: (date) => `Generated ${date}. Each article lists its section, who it is for, the screens it applies to and its URL in the app.`,
    labels: { section: "Section", roles: "For", screens: "Screens", url: "URL", status: "Status", updated: "updated" },
  },
};

const readSections = (locale) => JSON.parse(fs.readFileSync(path.join(CONTENT, locale, "_sections.json"), "utf8")).sort((a, b) => a.order - b.order);
const sourceSections = readSections(SOURCE_LOCALE);

/** Lee y valida los artículos de un idioma. Las traducciones caen al español donde falten. */
function readArticles(locale, sections) {
  const localeDir = path.join(CONTENT, locale);
  const sourceDir = path.join(CONTENT, SOURCE_LOCALE);
  const isSource = locale === SOURCE_LOCALE;
  const sectionIds = new Set(sections.map((section) => section.id));
  const maps = isSource ? null : groupMaps(sourceSections, sections);
  const prefix = isSource ? "" : `${locale}/`;
  const pendingShots = [];
  const articles = [];
  let untranslated = 0;

  for (const file of walk(sourceDir).filter((item) => item.endsWith(".md") && !path.basename(item).startsWith("_"))) {
    const rel = path.relative(sourceDir, file).replace(/\\/g, "/");
    const expectedId = rel.replace(/\.md$/, "");
    const sourceParsed = matter(fs.readFileSync(file, "utf8"));
    const translatedFile = path.join(localeDir, rel);
    const hasTranslation = !isSource && fs.existsSync(translatedFile);
    if (!isSource && !hasTranslation) untranslated += 1;
    const { data, content } = hasTranslation ? matter(fs.readFileSync(translatedFile, "utf8")) : sourceParsed;
    const articleLocale = isSource || hasTranslation ? locale : SOURCE_LOCALE;
    const where = `${prefix}${rel}`;

    if (hasTranslation) {
      for (const problem of compareTranslation(sourceParsed, { data, content }, { locale, groupMap: maps.get(String(sourceParsed.data.section)) })) fail(where, problem);
    }

    if (isSource) {
      for (const key of REQUIRED) if (data[key] === undefined || data[key] === "") fail(rel, `falta \`${key}\` en el frontmatter`);
      if (data.id && data.id !== expectedId) fail(rel, `el id «${data.id}» no coincide con la ruta «${expectedId}»`);
      if (data.section && !sectionIds.has(data.section)) fail(rel, `la sección «${data.section}» no está en _sections.json`);
      if (data.section && !expectedId.startsWith(`${data.section}/`)) fail(rel, `el archivo no está en la carpeta de su sección «${data.section}»`);
      if (data.status && !STATUSES.has(data.status)) fail(rel, `status «${data.status}» no es draft, review ni published`);
      for (const role of data.roles ?? []) if (!ROLES.has(role)) fail(rel, `rol desconocido «${role}»`);
      if (!Array.isArray(data.screens)) fail(rel, "`screens` tiene que ser una lista (puede estar vacía)");
      if (!Array.isArray(data.keywords) || data.keywords.length < 3) warn(rel, "menos de 3 keywords: costará encontrarlo");

      const h1 = extractH1(content);
      if (!h1) fail(rel, "el cuerpo no empieza con un `# Título`");
      else if (h1 !== data.title) warn(rel, `el H1 «${h1}» no coincide con title «${data.title}»`);
      if (!content.includes(SUMMARY_MARKER.es)) warn(rel, "no tiene el bloque **En resumen:**");

      for (const image of extractImages(content)) {
        if (!image.src.startsWith("/assets/")) fail(rel, `la imagen «${image.src}» tiene que empezar por /assets/`);
        else if (!fs.existsSync(path.join(ROOT, image.src))) {
          // Una captura con receta pero sin archivo está pendiente de tomar (las de
          // producción exigen que alguien inicie sesión); sin receta es un error.
          if (manifest[shotKey(image.src)]) pendingShots.push({ article: expectedId, image: image.src, source: manifest[shotKey(image.src)].source ?? "app" });
          else fail(rel, `la imagen «${image.src}» no existe y no tiene receta en screenshots.json`);
        }
        if (!image.alt.trim()) warn(rel, `la imagen «${image.src}» no tiene texto alternativo`);
      }
    }

    // Sin el título: la página ya lo pinta y el fragmento de búsqueda no debe empezar por él.
    const plain = toPlainText(content.replace(/^\s*#\s+.+\n+/, ""));
    articles.push({
      file: where,
      body: content,
      plain,
      meta: {
        id: expectedId,
        title: data.title,
        description: data.description,
        section: data.section,
        order: Number(data.order ?? 0),
        // Subgrupo del menú dentro de la sección (ver scripts/lib/groups.json); null si la sección no tiene.
        group: data.group ? String(data.group) : null,
        roles: data.roles ?? ["todos"],
        screens: data.screens ?? [],
        // YAML lee `+57` o `no` como número o booleano: en el índice todo es texto.
        keywords: (data.keywords ?? []).map(String),
        related: data.related ?? [],
        status: data.status ?? "draft",
        // YAML lee `2026-09-24` como fecha: se guarda siempre como texto ISO.
        updated: data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated ?? ""),
        // En qué idioma está de verdad: una traducción que falta sale en español.
        locale: articleLocale,
        headings: extractHeadings(content),
        readingMinutes: readingMinutes(plain),
        path: `articles/${expectedId}.md`,
      },
      links: extractInternalLinks(content),
    });
  }

  // Un artículo que aún no se traduce lleva el grupo en español: se pasa al del idioma.
  if (!isSource) {
    for (const article of articles) {
      if (article.meta.locale === SOURCE_LOCALE && article.meta.group) article.meta.group = maps.get(article.meta.section)?.get(article.meta.group) ?? article.meta.group;
    }
    for (const rel of walk(localeDir).filter((item) => item.endsWith(".md")).map((item) => path.relative(localeDir, item).replace(/\\/g, "/"))) {
      if (!fs.existsSync(path.join(sourceDir, rel))) fail(`${prefix}${rel}`, "no tiene original en español");
    }
    if (untranslated) warn(`${locale}/`, `${untranslated} artículo(s) sin traducir: salen en español`);
  }

  // Si una sección declara subgrupos, cada artículo suyo tiene que estar en uno de ellos.
  for (const article of articles) {
    const declared = sections.find((section) => section.id === article.meta.section)?.groups;
    if (!declared?.length) continue;
    if (!article.meta.group) fail(article.file, `la sección «${article.meta.section}» tiene subgrupos: añádelo a scripts/lib/groups.json y corre npm run groups`);
    else if (!declared.includes(article.meta.group)) fail(article.file, `el grupo «${article.meta.group}» no está en los subgrupos de «${article.meta.section}»`);
  }

  return { articles, pendingShots };
}

const planPath = path.join(ROOT, "plan", "plan.json");
const planned = new Set(fs.existsSync(planPath) ? JSON.parse(fs.readFileSync(planPath, "utf8")).articulos.map((item) => item.id) : []);

/** Arma lo que se publica de un idioma: índice, búsqueda y textos para agentes. */
function buildLocale(locale) {
  const sections = readSections(locale);
  if (locale !== SOURCE_LOCALE) {
    const ids = sections.map((section) => section.id).join();
    if (ids !== sourceSections.map((section) => section.id).join()) fail(`${locale}/_sections.json`, "tiene que tener las mismas secciones, en el mismo orden, que el español");
  }
  const { articles, pendingShots } = readArticles(locale, sections);
  const ids = new Set(articles.map((article) => article.meta.id));

  // Los enlaces se validan una vez, en el español: las traducciones copian los mismos.
  if (locale === SOURCE_LOCALE) {
    // Un enlace a un artículo que está en el plan pero aún no se escribe es un aviso, no un error:
    // así los artículos pueden enlazarse entre sí antes de que todos existan.
    const missing = (article, kind, target) => {
      if (ids.has(target)) return;
      if (planned.has(target)) warn(article.file, `${kind} «${target}» está en el plan pero aún no se escribe`);
      else fail(article.file, `${kind} «${target}» no existe`);
    };
    for (const article of articles) {
      for (const related of article.meta.related) missing(article, "related", related);
      for (const link of article.links) missing(article, "enlace interno a", link);
    }
    for (const shot of pendingShots) warn(shot.article, `captura pendiente: ${shot.image} (${shot.source})`);
  }

  // En el índice solo van los relacionados que ya existen (los planeados salen como aviso arriba).
  for (const article of articles) article.meta.related = article.meta.related.filter((id) => ids.has(id));

  articles.sort((a, b) => a.meta.section.localeCompare(b.meta.section) || a.meta.order - b.meta.order || a.meta.title.localeCompare(b.meta.title, locale));

  const screens = {};
  for (const article of articles) {
    for (const screen of article.meta.screens) (screens[screen] ??= []).push(article.meta.id);
  }

  const base = locale === SOURCE_LOCALE ? SITE_URL : `${SITE_URL}/${locale}`;
  const index = {
    locale,
    locales: LOCALES,
    generatedAt: new Date().toISOString(),
    siteUrl: base,
    sections: sections.map((section) => ({
      ...section,
      articles: articles.filter((article) => article.meta.section === section.id).map((article) => article.meta.id),
    })),
    articles: Object.fromEntries(articles.map((article) => [article.meta.id, article.meta])),
    screens,
  };

  const sectionTitle = (id) => sections.find((section) => section.id === id)?.title ?? id;

  const search = articles.map((article) => ({
    id: article.meta.id,
    title: article.meta.title,
    description: article.meta.description,
    section: article.meta.section,
    sectionTitle: sectionTitle(article.meta.section),
    keywords: article.meta.keywords,
    headings: article.meta.headings.map((heading) => heading.text),
    questions: extractQuestions(article.body),
    roles: article.meta.roles,
    status: article.meta.status,
    text: article.plain.slice(0, 6000),
  }));

  const copy = COPY[locale];
  const llms = [
    copy.llmsTitle,
    "",
    copy.llmsIntro,
    "",
    ...sections
      .filter((section) => index.sections.find((item) => item.id === section.id).articles.length)
      .flatMap((section) => [
        `## ${section.title}`,
        "",
        ...articles
          .filter((article) => article.meta.section === section.id)
          .map((article) => `- [${article.meta.title}](${base}/articles/${article.meta.id}.md): ${article.meta.description}`),
        "",
      ]),
  ].join("\n");

  const llmsFull = [
    copy.fullTitle,
    "",
    copy.fullIntro(index.generatedAt),
    "",
    ...articles.flatMap((article) => [
      "---",
      "",
      `# ${article.meta.title}`,
      "",
      `- ${copy.labels.section}: ${sectionTitle(article.meta.section)}`,
      `- ${copy.labels.roles}: ${article.meta.roles.join(", ")}`,
      `- ${copy.labels.screens}: ${article.meta.screens.join(", ") || "—"}`,
      `- ${copy.labels.url}: ${APP_URL}/${article.meta.id}`,
      `- ${copy.labels.status}: ${article.meta.status} · ${copy.labels.updated} ${article.meta.updated}`,
      "",
      article.plain,
      "",
    ]),
  ].join("\n");

  return { locale, articles, index, search, llms, llmsFull, pendingShots, screens };
}

const builds = LOCALES.map(buildLocale);

for (const message of warnings) console.warn(`⚠ ${message}`);
for (const message of errors) console.error(`✖ ${message}`);
if (errors.length) {
  console.error(`\n${errors.length} error(es) de contenido.`);
  process.exit(1);
}

const summary = (build) => {
  const translated = build.articles.filter((article) => article.meta.locale === build.locale).length;
  return `${build.locale}: ${translated}/${build.articles.length} artículos`;
};
const source = builds[0];

if (checkOnly) {
  console.log(`✓ ${source.index.sections.filter((section) => section.articles.length).length} secciones · ${builds.map(summary).join(" · ")}. Sin errores, ${source.pendingShots.length} capturas pendientes.`);
  process.exit(0);
}

fs.rmSync(DIST, { recursive: true, force: true });
for (const build of builds) {
  const out = build.locale === SOURCE_LOCALE ? DIST : path.join(DIST, build.locale);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, "index.json"), JSON.stringify(build.index, null, 2));
  fs.writeFileSync(path.join(out, "search.json"), JSON.stringify(build.search));
  fs.writeFileSync(path.join(out, "llms.txt"), build.llms);
  fs.writeFileSync(path.join(out, "llms-full.txt"), build.llmsFull);
  for (const article of build.articles) {
    const target = path.join(out, article.meta.path);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, article.body.trimStart());
  }
}
fs.writeFileSync(path.join(DIST, "pending-shots.json"), JSON.stringify(source.pendingShots, null, 2));
fs.writeFileSync(path.join(DIST, ".nojekyll"), "");
if (fs.existsSync(ASSETS)) fs.cpSync(ASSETS, path.join(DIST, "assets"), { recursive: true });

console.log(`✓ dist/ · ${builds.map(summary).join(" · ")} · ${Object.keys(source.screens).length} pantallas con ayuda contextual, ${source.pendingShots.length} capturas pendientes.`);
