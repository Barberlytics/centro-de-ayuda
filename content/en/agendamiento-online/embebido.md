---
id: agendamiento-online/embebido
title: "Bookings on your website: embed in a page"
description: "The “Embedded booking” option: booking shows up inside a page of your website, as one more section, by copying the code from Barberlytics."
section: agendamiento-online
order: 170
group: "Take booking to your channels"
roles: [owner, admin]
screens: [/online-booking]
keywords: [embedded booking, embed bookings, embed, inside my page, online booking, bookings on my website, widget, inline, copy code, online reservation, website, booking page, iframe]
related: [agendamiento-online/que-es, agendamiento-online/panel-lateral, agendamiento-online/abrir-desde-un-enlace, agendamiento-online/enlace-directo-y-utm]
status: review
updated: 2026-09-25
---

# Bookings on your website: embed in a page

**In short:** with **Embedded booking**, booking shows up inside a page of your website from the start, as one more section. No button or panel. You copy the code with **Copy** and paste it where you want it to appear.

## Where it is

**Settings › Account settings › Online booking**. The card says: “Adjust how clients can book and manage their appointments online.” On the “Online booking” screen, look for the “Add bookings to your website” block and the **Embedded booking** option.

## What it does

The screen explains it like this: “Embed the booking flow inside your page, as one more section. No button or panel: it shows from the start.” And it recommends: “Great for a page dedicated to booking. The widget is drawn inside the <div>, so put it wherever you like and give it the width you need.”

## Steps

1. Under “Add bookings to your website,” choose **Embedded booking**.
2. Tap **Copy**.
   ![The Embedded booking option with its code snippet and the Copy button](/assets/es/agendamiento-online/embebido/fragmento.png)
3. Paste the snippet in the exact spot on the page where you want booking to show. That spot decides the width.

The snippet is the same as the other two ways, with `data-mode="inline"`. Here TU-ID and TU-PERFIL are just example names: always copy your own from the screen with **Copy**.

```html
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="inline"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

## Frequently asked questions

**When is embedded booking a good fit?**
When you have a page just for booking, for example `mibarberia.com/reservar`. If you'd rather have a button that floats across the whole site, use the **Side panel**.

**Can I use two ways at the same time?**
Yes. The screen says: “If you use both on the same page, include the <script> only once.”

**Can I share booking without having a website?**
Yes, with the **Direct booking link** on the same screen. See [The direct booking link and UTM parameters](/ayuda/agendamiento-online/enlace-directo-y-utm).
