# Centro de ayuda de Barberlytics

El contenido del centro de ayuda de [Barberlytics](https://barberlytics.com): artículos en
Markdown puro que leen dos cosas a la vez, la pantalla de ayuda de la aplicación (`/ayuda`,
construida con el sistema de diseño Thema) y la IA que responde preguntas con esta base.

Aquí **solo vive el contenido**. La interfaz que lo muestra vive en el repo de la aplicación
(`Barberlytics-development/DesignSystem`, carpeta `src/help/`) y lee lo que este repo publica.

## Cómo está organizado

```
content/es/                 ← la fuente, en español
content/en/                 ← la traducción al inglés: mismos archivos y mismos id (ver TRANSLATING.md)
  _sections.json            ← las secciones, en orden, con título y descripción
  <seccion>/<articulo>.md   ← un artículo = un archivo con frontmatter
assets/es/<seccion>/<articulo>/<captura>.png
assets/en/…                 ← las mismas capturas con producción en inglés
screenshots.json            ← la receta de cada captura: ruta, estado, viewport, tema
screenshots.en.json         ← los textos que buscan las recetas, en español → como salen en inglés
casos/produccion.md         ← el mapa de la app en producción: rutas, pestañas, acciones, textos
STYLE.md                    ← cómo se escribe aquí
scripts/build.mjs           ← md → dist/ (index.json, search.json, artículos, llms.txt)
scripts/screenshots.mjs     ← regenera las capturas con Playwright contra la app
```

## Comandos

```bash
npm ci
npm run check      # valida frontmatter, enlaces, imágenes y relacionados; no escribe nada
npm run build      # genera dist/
npm run serve      # sirve dist/ en http://localhost:8787 con CORS, para probar la app en local
npm run shots      # regenera las capturas (necesita la app corriendo; ver abajo)
npm run groups     # aplica los subgrupos del menú de scripts/lib/groups.json (group y order de cada artículo)
npm run plan       # regenera PLAN.md desde plan/plan.json
npm run check:translation  # compara cada artículo en inglés con su original (ids, capturas, enlaces, grupos)
npm run align-links        # pone a los enlaces del inglés el título traducido de su destino
```

**Subgrupos del menú.** Las secciones grandes reparten sus artículos en subgrupos («Agendar», «Cobrar y vender»…)
para que el menú no sea una lista interminable. Se definen en `scripts/lib/groups.json` y se aplican con
`npm run groups`. Si añades un artículo a una sección con subgrupos, ponlo en ese archivo: `npm run check` falla si
un artículo queda sin grupo.

### Probar en local con la aplicación

1. En este repo: `npm run build && npm run serve`.
2. En el repo de la app: `VITE_HELP_BASE_URL=http://localhost:8787 npm run dev` y abre `/ayuda`.

### Capturas

Las capturas salen de **producción** (`source: produccion` en `screenshots.json`) con los datos
enmascarados. Sin ellas los artículos se leen igual: la app muestra «Captura pendiente» y el
check las lista como pendientes.

```bash
cp .mask.example.json .mask.local.json   # una vez; pon los nombres reales → nombres de ejemplo
npm run shots:install                    # una vez: descarga Chromium
npm run shots:login                      # inicias sesión TÚ en la ventana; guarda .auth/prod.json
npm run shots                            # todas
npm run shots -- acceso-y-cuenta         # solo una sección
npm run shots -- --locale=en             # las mismas en inglés, en assets/en
```

En inglés se usa la misma sesión: el script pone producción en inglés solo en su navegador (sin
tocar la cuenta) y traduce los textos que buscan las recetas con `screenshots.en.json`. El build
cambia en cada artículo en inglés `/assets/es/…` por `/assets/en/…` cuando esa captura existe; la
que falte se ve en español.

`.auth/` y `.mask.local.json` no se suben al repo. Sin `.mask.local.json` las capturas de
producción se niegan a salir. Correos y teléfonos se enmascaran solos; los nombres los cambia el
archivo local (`replace`) y lo que pongas en `blur` se difumina.

## Publicación

Cada push a `main` construye `dist/` y lo publica en GitHub Pages. La aplicación lee de ahí:

- `index.json` — secciones, artículos y sus metadatos, mapa pantalla → artículos
- `search.json` — el índice de búsqueda
- `articles/<seccion>/<articulo>.md` — el cuerpo de cada artículo
- `assets/es/…` y `assets/en/…` — las capturas de cada idioma
- `llms.txt` y `llms-full.txt` — la base completa para un agente de IA
- `en/…` — lo mismo en inglés (las capturas siguen en `assets/en/`). Un artículo sin traducir sale
  ahí en español, con `locale: "es"` en el índice

## Idiomas

El español es la fuente. Al escribir o cambiar un artículo en `content/es/`, tradúcelo en
`content/en/` con las reglas de `TRANSLATING.md`; hasta entonces sale en español en el índice
inglés y `npm run check` lo avisa como «sin traducir».

## Escribir un artículo

Lee `STYLE.md`. En corto: un archivo por pregunta que alguien se hace, frontmatter completo,
lenguaje de barbería y no de software, y cada botón nombrado tal cual aparece en pantalla.
