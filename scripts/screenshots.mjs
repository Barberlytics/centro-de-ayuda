#!/usr/bin/env node
/**
 * Regenera las capturas de `screenshots.json`.
 *
 *   source: "produccion"  → https://dash.barberlytics.com. Con `"public": true`
 *                            son pantallas de antes de entrar (login, recuperar
 *                            número, contacto): no piden sesión ni enmascarado.
 *                            Sin `public`, usan la sesión de `npm run shots:login`
 *                            y salen con los datos enmascarados.
 *   source: "app"         → la app de Thema en local (HELP_APP_URL).
 *
 *   npm run shots:login                 (una vez: inicias sesión tú)
 *   npm run shots                       todas
 *   npm run shots -- acceso-y-cuenta    solo las claves que empiecen así
 *   npm run shots -- --locale=en        las mismas, con producción en inglés,
 *                                       en assets/en (textos: screenshots.en.json)
 *
 * Las capturas de producción se niegan a salir si falta `.mask.local.json`
 * (ver `.mask.example.json`): en producción hay personas reales.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import { chooseBranch } from "./lib/prod.mjs";
import { applyMask, loadMaskConfig } from "./lib/mask.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_URL = (process.env.HELP_APP_URL ?? "http://localhost:5197").replace(/\/+$/, "");
const PROD_URL = (process.env.HELP_PROD_URL ?? "https://dash.barberlytics.com").replace(/\/+$/, "");
const AUTH_FILE = path.join(ROOT, ".auth", "prod.json");
const args = process.argv.slice(2);
const LOCALE = args.find((arg) => arg.startsWith("--locale="))?.slice("--locale=".length) ?? "es";
const noMask = args.includes("--no-mask");
const filter = args.filter((arg) => !arg.startsWith("-"));

/**
 * Las recetas buscan la pantalla por sus textos en español. En otro idioma se
 * traducen con `screenshots.<idioma>.json`; lo que no está ahí (nombres, datos,
 * lo que producción no traduce) se busca tal cual. Una lista son variantes.
 */
const { texts: TEXTS = {}, clickTexts: CLICK_TEXTS = {}, selectors: SELECTORS = {} } = LOCALE === "es" ? {} : JSON.parse(fs.readFileSync(path.join(ROOT, `screenshots.${LOCALE}.json`), "utf8"));
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
const variants = (text) => [TEXTS[text] ?? text].flat();
/** Una pseudoclase o atributo por variante; con varias, `:is(…)` acepta cualquiera. */
const anyOf = (options) => (options.length === 1 ? options[0] : `:is(${options.join(", ")})`);

/** Para `getByText(…, { exact: true })`: el texto, o una expresión con sus variantes. */
function exactText(text) {
  const options = variants(text);
  return options.length === 1 && options[0] === text ? text : new RegExp(`^\\s*(?:${options.map(escapeRegex).join("|")})\\s*$`, "i");
}

/**
 * Traduce los textos de un selector de Playwright: `text=…`, `:has-text("…")`,
 * `:text-is("…")`, `:text-matches("^\\s*…")` y `[aria-label|title(^)='…']`.
 * Lo que no se deja traducir así va entero en `selectors`.
 */
function localize(selector) {
  if (LOCALE === "es" || !selector) return selector;
  if (SELECTORS[selector]) return SELECTORS[selector];
  return selector
    .replace(/text=(?!\/)(.+?)(?= >> |$)/g, (_, text) => {
      const options = variants(text);
      return options.length === 1 ? `text=${options[0]}` : `text=/${options.map(escapeRegex).join("|")}/i`;
    })
    .replace(/:(has-text|text-is)\((['"])(.+?)\2\)/g, (_, pseudo, quote, text) => anyOf(variants(text).map((option) => `:${pseudo}(${JSON.stringify(option)})`)))
    .replace(/:text-matches\("\^\\\\s\*([^"]+)"/g, (_, text) => `:text-matches("^\\\\s*(?:${variants(text).map(escapeRegex).join("|")})"`)
    .replace(/\[(aria-label|title)(\^?=)'([^']+)'\]/g, (_, attr, op, text) => anyOf(variants(text).map((option) => `[${attr}${op}${JSON.stringify(option)}]`)));
}

// `tall` es para páginas largas: la app hace scroll dentro de un contenedor y fullPage no las alcanza.
const VIEWPORTS = { desktop: { width: 1280, height: 800 }, tall: { width: 1280, height: 2400 }, medium: { width: 1280, height: 1300 }, mobile: { width: 390, height: 844 } };
const CLIP_PADDING = 16;

/** Los tres botones desplegables de la cabecera de producción, en orden. */
const headerToggle = (page, index) => page.locator(".actions-dashboard > div.dropdown").nth(index).locator("button.dropdown-toggle");

async function prodPage(page, recipe) {
  await page.goto(`${PROD_URL}${recipe.route}`);
  // Métricas pinta más de una barra de acciones: basta con la primera.
  await page.locator(".actions-dashboard").first().waitFor();
  // El calendario consulta sin parar: si la red no se calma en 8 s, seguimos.
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  await page.waitForTimeout(1200);
  // La sesión guardada arranca sin sucursal elegida; la receta puede pedir otra.
  const branchPrompt = new RegExp(variants("Por favor seleccione una sucursal").map(escapeRegex).join("|"), "i");
  if (!recipe.keepBranchChooser && (await chooseBranch(page, recipe.branch, branchPrompt))) {
    await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  }
  await runSteps(page, recipe.steps);
}

/**
 * Pantalla pública de producción con pasos opcionales (`steps` en la receta):
 *   { "click": "selector" } · { "clickText": "Texto del botón" }
 *   { "fill": ["selector", "valor"] } · { "select": ["selector", "valor"] } · { "wait": 500 }
 * Solo se escribe texto de ejemplo que falla la validación del navegador;
 * nunca un celular, un código ni un correo reales.
 */
async function runSteps(page, steps = []) {
  for (const step of steps) {
    // `force: true` salta la comprobación de que nada tape el elemento (capas decorativas).
    if (step.click) await page.locator(localize(step.click)).first().click({ force: Boolean(step.force) });
    else if (step.clickText) await page.getByText(exactText(CLICK_TEXTS[step.clickText] ?? step.clickText), { exact: true }).locator("visible=true").first().click();
    // Un valor `$NOMBRE` se lee de una variable de entorno: así un celular real nunca queda en el repo.
    else if (step.fill) await page.locator(localize(step.fill[0])).first().fill(step.fill[1].replace(/^\$(\w+)$/, (_, name) => process.env[name] ?? ""));
    else if (step.select) await page.locator(localize(step.select[0])).first().selectOption(step.select[1], { force: Boolean(step.force) });
    else if (step.hover) await page.locator(localize(step.hover)).first().hover();
    else if (step.scrollTo) await page.locator(localize(step.scrollTo)).first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(step.wait ?? 500);
  }
}

async function publicPage(page, recipe) {
  await page.goto(`${PROD_URL}${recipe.route}`, { waitUntil: "networkidle" });
  await page.locator(".section-login").waitFor();
  await page.waitForTimeout(900);
  await runSteps(page, recipe.steps);
}

/** Cada estado deja la pantalla lista para la captura. */
const STATES = {
  "pub-page": publicPage,
  // Una página pública por URL completa (la reserva online del cliente), sin sesión.
  "pub-url": async (page, recipe) => {
    await page.goto(recipe.route, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    await runSteps(page, recipe.steps);
  },
  "app-page": async (page, recipe) => {
    await page.goto(`${APP_URL}${recipe.route}`);
    await page.getByRole("main").waitFor();
  },
  "prod-page": prodPage,
  // El kiosco Front Desk (URL completa) activado con «Ingresar con Barberlytics»: usa la sesión guardada de dash,
  // así que no pide el código del personal. Los pasos solo miran; nunca se confirma una lista de espera ni una cita.
  "prod-kiosk": async (page, recipe) => {
    await page.goto(recipe.route, { waitUntil: "networkidle" });
    await page.getByText("Ingresar con").last().click();
    await page.getByText("Bienvenido", { exact: true }).waitFor();
    await page.waitForTimeout(800);
    await runSteps(page, recipe.steps);
  },
  "prod-branch-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 0).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-language-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 1).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-account-menu": async (page, recipe) => {
    await prodPage(page, recipe);
    await headerToggle(page, 2).click();
    await page.locator(".dropdown-menu.show").waitFor();
  },
  "prod-notifications": async (page, recipe) => {
    await prodPage(page, recipe);
    await page.locator(".actions-dashboard > .MuiBadge-root").nth(1).click();
    await page.getByText(exactText("Notificaciones"), { exact: true }).first().waitFor();
    await page.waitForTimeout(800);
  },
};

async function highlight(page, selector) {
  await page.addStyleTag({
    content: `[data-help-highlight]{outline:3px solid #0C5BEF !important;outline-offset:3px;border-radius:8px;box-shadow:0 0 0 6px rgba(12,91,239,.18)!important}`,
  });
  const locator = page.locator(selector);
  if ((await locator.count()) === 0) throw new Error(`no encontré nada que resaltar con «${selector}»`);
  await locator.first().evaluate((el) => el.setAttribute("data-help-highlight", ""));
}

async function shoot(browser, key, recipe, theme, mask) {
  const isProd = recipe.source === "produccion" && !recipe.public;
  const viewport = VIEWPORTS[recipe.viewport ?? "desktop"];
  const context = await browser.newContext({
    viewport,
    locale: LOCALE === "es" ? "es-CO" : LOCALE === "en" ? "en-US" : LOCALE,
    colorScheme: theme,
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
    ...(isProd ? { storageState: AUTH_FILE } : {}),
  });
  const page = await context.newPage();
  try {
    // Producción guarda el idioma en el navegador (`language`): se cambia aquí, sin tocar la cuenta.
    await page.addInitScript((language) => window.localStorage.setItem("language", language), LOCALE);
    if (!isProd) {
      await page.addInitScript((mode) => window.localStorage.setItem("thema-theme", JSON.stringify({ mode })), theme);
    }
    const state = STATES[recipe.state];
    if (!state) throw new Error(`estado desconocido «${recipe.state}»`);
    await state(page, recipe);
    // También en páginas públicas: la reserva online muestra el nombre y el teléfono de la sucursal.
    if (mask) await applyMask(page, mask, recipe.blur);
    if (recipe.highlight) await highlight(page, localize(recipe.highlight));
    const suffix = recipe.theme === "both" && theme === "dark" ? "-oscuro" : "";
    const target = path.join(ROOT, "assets", LOCALE, `${key}${suffix}.png`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    if (recipe.clip) {
      // La app hace scroll en un contenedor interno: se trae el elemento a la vista antes de medirlo.
      const element = page.locator(localize(recipe.clip)).first();
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      const box = await element.boundingBox();
      if (!box) throw new Error(`no encontré «${recipe.clip}» para recortar`);
      // `clipExtra` alarga el recorte hacia abajo: para un desplegable abierto bajo el elemento.
      const clip = {
        x: Math.max(0, box.x - CLIP_PADDING),
        y: Math.max(0, box.y - CLIP_PADDING),
        width: Math.min(viewport.width, box.width + CLIP_PADDING * 2),
        height: box.height + CLIP_PADDING * 2 + (recipe.clipExtra ?? 0),
      };
      await page.screenshot({ path: target, clip });
    } else if (viewport.height > 900 && recipe.trim !== false) {
      // En viewports altos se mide dónde empieza y termina el contenido real (texto, campos, botones, imágenes;
      // sin la barra lateral ni pies fijos). Si la página lo pega abajo, se encoge la ventana a su altura y se
      // vuelve a medir; luego se recorta por debajo del último elemento.
      const measure = () =>
        page.evaluate((limit) => {
          const pinned = (el) => {
            for (let node = el; node && node !== document.body; node = node.parentElement) {
              const position = getComputedStyle(node).position;
              if (position === "fixed" || position === "sticky") return true;
            }
            return false;
          };
          const VISUAL = new Set(["IMG", "INPUT", "BUTTON", "SVG", "TEXTAREA", "SELECT", "HR", "CANVAS", "TABLE"]);
          const hasOwnText = (el) => [...el.childNodes].some((node) => node.nodeType === 3 && node.textContent.trim());
          let top = Infinity;
          let bottom = 0;
          for (const el of document.body.querySelectorAll("*")) {
            if (!VISUAL.has(el.tagName) && !hasOwnText(el)) continue;
            const style = getComputedStyle(el);
            if (style.display === "none" || style.visibility === "hidden" || pinned(el)) continue;
            const box = el.getBoundingClientRect();
            if (box.height === 0 || box.height >= limit * 0.9 || box.bottom > limit) continue;
            if (box.top < top) top = box.top;
            if (box.bottom > bottom) bottom = box.bottom;
          }
          return { top: top === Infinity ? 0 : top, bottom };
        }, page.viewportSize().height);
      let { top, bottom } = await measure();
      if (top > 160) {
        await page.setViewportSize({ width: viewport.width, height: Math.max(600, Math.min(viewport.height, Math.ceil(bottom - top) + 160)) });
        await page.waitForTimeout(500);
        ({ bottom } = await measure());
      }
      const height = Math.min(page.viewportSize().height, Math.max(400, Math.ceil(bottom) + 32));
      await page.screenshot({ path: target, clip: { x: 0, y: 0, width: viewport.width, height } });
    } else {
      // `fullPage` captura la página entera, no solo lo que cabe en el viewport.
      await page.screenshot({ path: target, fullPage: recipe.fullPage ?? false });
    }
    console.log(`✓ ${path.relative(ROOT, target)}`);
  } finally {
    await context.close();
  }
}

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "screenshots.json"), "utf8"));
const entries = Object.entries(manifest).filter(([key]) => key !== "$comment" && (!filter.length || filter.some((prefix) => key.startsWith(prefix))));
if (!entries.length) {
  console.error("Ninguna receta coincide.");
  process.exit(1);
}

const needsProd = entries.some(([, recipe]) => recipe.source === "produccion" && !recipe.public);
let mask = needsProd ? null : loadMaskConfig();
if (needsProd) {
  if (!fs.existsSync(AUTH_FILE)) {
    console.error("Falta la sesión de producción. Corre primero: npm run shots:login");
    process.exit(1);
  }
  mask = noMask ? null : loadMaskConfig();
  if (!mask && !noMask) {
    console.error("Falta .mask.local.json (ver .mask.example.json). En producción hay datos de personas reales: sin enmascarado no se toman capturas. Para saltarlo a propósito: --no-mask");
    process.exit(1);
  }
}

const browser = await chromium.launch();
let failures = 0;
for (const [key, recipe] of entries) {
  const themes = recipe.theme === "both" ? ["light", "dark"] : [recipe.theme ?? "light"];
  for (const theme of themes) {
    try {
      await shoot(browser, key, recipe, theme, mask);
    } catch (error) {
      failures += 1;
      console.error(`✖ ${key} (${theme}): ${error.message.split("\n")[0]}`);
    }
  }
}
await browser.close();
if (failures) {
  console.error(`\n${failures} captura(s) fallaron.`);
  process.exit(1);
}
