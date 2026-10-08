# Traducir el centro de ayuda (English)

El español (`content/es/`) es la fuente. Cada idioma es una carpeta hermana con **los mismos
archivos y los mismos `id`**: `content/en/calendario/crear-una-cita.md` es la traducción de
`content/es/calendario/crear-una-cita.md`. Los `id` y las carpetas no se traducen; así un enlace
`/ayuda/calendario/crear-una-cita` lleva al mismo artículo en cualquier idioma y cambiar de idioma
no te saca de donde estás.

Un artículo que aún no tiene traducción sale en español dentro del índice inglés (el build avisa
«sin traducir») y la app lo marca. `npm run check` valida cada traducción contra su original con
`scripts/lib/translation.mjs`.

## Qué se traduce y qué no

| Parte | Se traduce | Se deja igual |
|---|---|---|
| Frontmatter | `title`, `description`, `keywords`, `group` | `id`, `section`, `order`, `roles`, `screens`, `related`, `status`, `updated` |
| Cuerpo | todo el texto, encabezados, tablas, texto de enlaces, `alt` de imágenes | rutas de imágenes (`/assets/es/…`), rutas de enlaces (`/ayuda/…`), marcadores `> [!TIP]` |

- `group` usa exactamente el nombre inglés de `content/en/_sections.json` (mismo orden que el español).
- El `# Título` es idéntico a `title`.
- `keywords`: las palabras con que alguien lo buscaría **en inglés** (no traducción palabra a palabra).
  Al menos tantas como el original.
- Las capturas siguen siendo las de la app en español: no se cambia la ruta, solo el `alt`.
- Nombres de ejemplo (Carlos, Laura, «Mi Barbería», «Sucursal Norte») se quedan como están, porque
  salen así en las capturas. Montos, monedas, fechas y teléfonos de ejemplo, igual.

## Voz

Inglés de Estados Unidos, la misma voz: **you**, frases cortas, de alguien que conoce la barbería,
cero jerga de software (no *authenticate*, *OTP*, *session*, *credentials*, *module*, *sync*,
*interface*). Nada de «simply», «just», «easily», «Don't worry!».

## Bloques fijos

| Español | English |
|---|---|
| `**En resumen:**` | `**In short:**` |
| Pasos | Steps |
| Dónde está / Dónde están | Where it is / Where they are |
| Cómo llegar | How to get there |
| Qué muestra | What it shows |
| Para qué te sirve | What it's for |
| Antes de empezar | Before you start |
| Lo que dice la pantalla | What the screen says |
| Errores que puedes ver | Errors you may see |
| Preguntas frecuentes | Frequently asked questions |
| Pendiente de confirmar | Still to confirm |
| Relacionado | Related |

Las comillas latinas «texto» que citan la pantalla pasan a comillas inglesas “text”.

## Vocabulario fijo

| Español | English | Nota |
|---|---|---|
| barbería | barbershop | no *business*, no *salon* |
| sucursal | location | «empresa» = company |
| barbero | barber | |
| cita | appointment | |
| reserva online / agendamiento online | online booking | |
| cliente | client | |
| equipo | team | |
| silla | chair | |
| comisión / renta / salario | commission / rent / salary | barbero por comisión = commission barber; barbero en renta = rent barber |
| nómina | payroll | |
| dueño | owner | |
| recepción (rol) | receptionist | |
| celular | phone | «tu celular» = your phone number cuando se refiere al número |
| código | code | |
| entrar / salir | sign in / sign out | |
| ficha | profile | la ficha de un cliente o barbero |
| lista de espera | waitlist | |
| bloqueo | block | |
| cobrar / cobro | charge / payment | |
| propina | tip | |
| sin cita / walk-in | walk-in | |
| sin preferencia | no preference | |
| toca | tap | «haz clic» = click |
| Métricas, Calendario, Clientes, Equipo, Servicios, Productos, Gastos, Nómina, Transacciones, Configuración | Metrics, Calendar, Clients, Team, Services, Products, Expenses, Payroll, Transactions, Settings | nombres del menú |
| Mi perfil | My profile | |
| Acciones | Actions | |
| Guardar / Cancelar / Crear / Editar / Borrar / Eliminar | Save / Cancel / Create / Edit / Delete / Delete | |

Los botones van **en negrita** con su nombre en inglés, siempre el mismo en todos los artículos.
Nombres que en la app ya están en inglés (Front Desk, AI Insights, Check in, Barber comission)
se dejan tal cual.
