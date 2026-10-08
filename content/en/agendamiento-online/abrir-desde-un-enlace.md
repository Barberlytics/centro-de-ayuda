---
id: agendamiento-online/abrir-desde-un-enlace
title: "Bookings on your website: open from your own button"
description: "The “Open from link” option in online booking: booking opens from a button or link you already have on your website, with no floating button."
section: agendamiento-online
order: 160
group: "Take booking to your channels"
roles: [owner, admin]
screens: [/online-booking]
keywords: [open from link, my own button, book from a link, online booking, bookings on my website, widget, data-trigger, copy code, booking button, online reservation, website, link id, book appointment]
related: [agendamiento-online/que-es, agendamiento-online/panel-lateral, agendamiento-online/embebido, agendamiento-online/enlace-directo-y-utm]
status: review
updated: 2026-09-25
---

# Bookings on your website: open from your own button

**In short:** with **Open from link** there is no floating button: booking opens from a button or link you already have on your site, like the “Book appointment” in your menu. You copy the code with **Copy**, give your link the id the code expects, and paste it into your page.

## Where it is

**Settings › Account settings › Online booking**. The card says: “Adjust how clients can book and manage their appointments online.” On the “Online booking” screen, look for the “Add bookings to your website” block and the **Open from link** option.

## What it does

The screen explains it like this: “No floating button: the booking flow opens from a link or button you already have, like the ‘Book appointment’ in your menu.”

## Steps

1. Under “Add bookings to your website,” choose **Open from link**.
2. Tap **Copy**.
   ![The Open from link option with its code snippet and the Copy button](/assets/es/agendamiento-online/abrir-desde-un-enlace/fragmento.png)
3. Paste the snippet into your website.
4. Connect your button. The screen puts it like this: “Change #reservar to your link's id. If it doesn't have one, add one: `<a id="reservar" href="#">Reservar cita</a>`.”

The snippet is the same one the side panel uses, with one extra piece of data, `data-trigger`, which points to your link's id. Here TU-ID and TU-PERFIL are just example names: always copy your own from the screen with **Copy**.

```html
<a id="reservar" href="#">Reservar cita</a>
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="floating" data-trigger="#reservar"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

> [!TIP]
> If your link already has an id, for example `id="agendar"`, change `#reservar` to `#agendar` in the snippet and leave your link as it is.

## Frequently asked questions

**How is it different from the side panel?**
The **Side panel** adds its own floating “Book now” button. **Open from link** uses the button or link you already have. See [Bookings on your website: floating “Book now” button](/ayuda/agendamiento-online/panel-lateral).

**And from the embedded booking?**
The **Embedded booking** shows up inside a page from the start, with no button or panel. See [Bookings on your website: embed in a page](/ayuda/agendamiento-online/embebido).

**Do I need to know how to code?**
The screen gives you the code ready to use, but your link needs an id. If someone else manages your website, send them the snippet and this page.
