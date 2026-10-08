---
id: agendamiento-online/portal-del-cliente-en-tu-sitio
title: "Put the client portal on your website"
description: "The two ways to put the portal on your page: Inside a page (a “My appointments” section) and Open from a link (a panel over your page), with the snippet for each."
section: agendamiento-online
order: 250
group: "Client portal"
roles: [owner, admin]
screens: [/client-portal]
keywords: [portal on my website, my appointments on my page, appointments widget, snippet, code for my website, data-home-url, data-trigger, data-accent, data-primary, portal colors, paste code, developer, appointments]
related: [configuracion/portal-del-cliente, agendamiento-online/portal-del-cliente-que-es, agendamiento-online/abrir-desde-un-enlace, agendamiento-online/embebido]
status: review
updated: 2026-09-30
---

# Put the client portal on your website

**In short:** in **Settings › Client portal** there are two snippets for your website. **Inside a page** draws the portal as a section, ideal for a “My appointments” page. **Open from a link** opens it in a panel when the client taps a link of yours, like “My appointments” in the menu. You copy the snippet with **Copy** and paste it into your site.

> [!IMPORTANT]
> If you don't have experience with your website's code, ask whoever built it for help. All it takes is pasting the snippet exactly as it is.

## Inside a page

“The portal is drawn wherever you paste the snippet, as one more section of your site. It's the natural option if you're going to have a ‘My appointments’ page.”

![The Inside a page option with its snippet and the Copy button](/assets/es/agendamiento-online/portal-del-cliente-en-tu-sitio/dentro-de-una-pagina.png)

1. Tap **Copy** below the snippet.
2. Paste it into the page of your site where you want the portal.

The snippet looks like this. Always copy it from the screen, because it carries your barbershop's details:

```html
<div data-bl-widget="appointments"
     data-uuid="TU-CÓDIGO"
     data-profile="TU-PERFIL"
     data-timezone="America/Bogota"
     data-home-url="/"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

`data-home-url` is “where the client goes back to when they leave the portal; leave it pointing to your home page.”

## Open from a link

“The portal opens in a panel over your page when the client presses a link of yours, for example ‘My appointments’ in the menu. You don't need a separate page.”

![The Open from a link option with its snippet and the Copy button](/assets/es/agendamiento-online/portal-del-cliente-en-tu-sitio/abrir-desde-un-enlace.png)

This snippet carries `data-mode="floating"` and `data-trigger="#mis-citas"`. The screen explains: “data-trigger is the CSS selector of your link: #mis-citas for an id, .mis-citas for a class.”

### Example

The menu on Mi Barbería's website has a “My appointments” link. For it to open the portal, the link needs the id `mis-citas`:

```html
<a id="mis-citas" href="#">Mis citas</a>
```

Paste the **Open from a link** snippet anywhere on the page. When the client taps “My appointments,” the portal opens in a panel without leaving your website.

## Good to know

- “If you also have the booking widget on the same page, include the <script> only once.”
- “Optional: data-accent and data-primary change the portal's colors so it matches your site.”

> [!NOTE]
> Which color format `data-accent` and `data-primary` accept hasn't been checked yet.

## Frequently asked questions

**Can I have the booking button and the portal on my website at the same time?**
Yes. Paste both snippets, but the `<script>` only once. See [Bookings on your website: open from your own button](/ayuda/agendamiento-online/abrir-desde-un-enlace).

**I don't have a website. What do I do?**
Use the direct link. See [The portal's direct link](/ayuda/agendamiento-online/portal-del-cliente-enlace-directo).
