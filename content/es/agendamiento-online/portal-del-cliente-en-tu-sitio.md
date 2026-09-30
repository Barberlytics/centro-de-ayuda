---
id: agendamiento-online/portal-del-cliente-en-tu-sitio
title: "Poner el portal del cliente en tu sitio web"
description: "Las dos formas de poner el portal en tu página: Dentro de una página (una sección «Mis citas») y Abrir desde un enlace (un panel sobre tu página), con el fragmento de cada una."
section: agendamiento-online
order: 210
group: "Portal del cliente"
roles: [owner, admin]
screens: [/client-portal]
keywords: [portal en mi web, mis citas en mi página, widget de citas, fragmento, código para mi web, data-home-url, data-trigger, data-accent, data-primary, colores del portal, pegar código, programador, appointments]
related: [configuracion/portal-del-cliente, agendamiento-online/portal-del-cliente-que-es, agendamiento-online/abrir-desde-un-enlace, agendamiento-online/embebido]
status: review
updated: 2026-09-30
---

# Poner el portal del cliente en tu sitio web

**En resumen:** en **Configuración › Portal del cliente** hay dos fragmentos para tu web. **Dentro de una página** dibuja el portal como una sección, ideal para una página «Mis citas». **Abrir desde un enlace** lo abre en un panel cuando el cliente toca un enlace tuyo, como «Mis citas» en el menú. Copias el fragmento con **Copiar** y lo pegas en tu sitio.

> [!IMPORTANT]
> Si no tienes experiencia con el código de tu sitio web, pide ayuda a quien te lo hizo. Solo hay que pegar el fragmento tal cual.

## Dentro de una página

«El portal se dibuja donde pegues el fragmento, como una sección más de tu sitio. Es la opción natural si vas a tener una página "Mis citas".»

![La opción Dentro de una página con su fragmento y el botón Copiar](/assets/es/agendamiento-online/portal-del-cliente-en-tu-sitio/dentro-de-una-pagina.png)

1. Toca **Copiar** debajo del fragmento.
2. Pégalo en la página de tu sitio donde quieras el portal.

El fragmento tiene esta forma. Cópialo siempre desde la pantalla, porque lleva los datos de tu barbería:

```html
<div data-bl-widget="appointments"
     data-uuid="TU-CÓDIGO"
     data-profile="TU-PERFIL"
     data-timezone="America/Bogota"
     data-home-url="/"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

`data-home-url` es «a dónde vuelve el cliente al salir del portal; déjalo apuntando a tu página de inicio».

## Abrir desde un enlace

«El portal se abre en un panel sobre tu página cuando el cliente pulsa un enlace tuyo, por ejemplo "Mis citas" en el menú. No necesitas una página aparte.»

![La opción Abrir desde un enlace con su fragmento y el botón Copiar](/assets/es/agendamiento-online/portal-del-cliente-en-tu-sitio/abrir-desde-un-enlace.png)

Este fragmento lleva `data-mode="floating"` y `data-trigger="#mis-citas"`. La pantalla explica: «data-trigger es el selector CSS de tu enlace: #mis-citas para un id, .mis-citas para una clase.»

### Ejemplo

El menú de la web de Mi Barbería tiene un enlace «Mis citas». Para que abra el portal, el enlace necesita el id `mis-citas`:

```html
<a id="mis-citas" href="#">Mis citas</a>
```

Pega el fragmento de **Abrir desde un enlace** en cualquier parte de la página. Cuando el cliente toca «Mis citas», el portal se abre en un panel sin salir de tu web.

## Detalles que conviene saber

- «Si en la misma página tienes también el widget de reserva, incluye el <script> una sola vez.»
- «Opcional: data-accent y data-primary cambian los colores del portal para que combine con tu sitio.»

> [!NOTE]
> Qué formato de color aceptan `data-accent` y `data-primary` todavía no está comprobado.

## Preguntas frecuentes

**¿Puedo tener en mi web el botón de reservar y el portal a la vez?**
Sí. Pega los dos fragmentos, pero el `<script>` una sola vez. Mira [Reservas en tu sitio web: abrir desde tu propio botón](/ayuda/agendamiento-online/abrir-desde-un-enlace).

**No tengo sitio web. ¿Qué hago?**
Usa el enlace directo. Mira [El enlace directo del portal](/ayuda/agendamiento-online/portal-del-cliente-enlace-directo).
