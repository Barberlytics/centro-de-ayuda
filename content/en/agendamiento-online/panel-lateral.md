---
id: agendamiento-online/panel-lateral
title: "Bookings on your website: floating “Book now” button"
description: "How to add the booking Side panel to your website: a floating “Book now” button that opens booking without leaving your page, by copying the code with Copy."
section: agendamiento-online
order: 150
group: "Take booking to your channels"
roles: [owner, admin]
screens: [/online-booking]
keywords: [side panel, book now, floating button, bookings on my website, online booking, widget, code for my page, copy code, embed bookings, online reservation, website, paste code, data-mode floating, script]
related: [agendamiento-online/que-es, agendamiento-online/abrir-desde-un-enlace, agendamiento-online/embebido, agendamiento-online/enlace-directo-y-utm]
status: review
updated: 2026-09-25
---

# Bookings on your website: floating “Book now” button

**In short:** the **Side panel** option adds a floating “Book now” button at the bottom right of your website. When it's pressed, booking opens in a panel over your page, without leaving it. You copy the code with **Copy** and paste it into your site.

## Where it is

**Settings › Account settings › Online booking**. The card says: “Adjust how clients can book and manage their appointments online.” On the “Online booking” screen, look for the “Add bookings to your website” block and the **Side panel** option.

## What it does

The screen explains it like this: “Adds a floating ‘Book now’ button at the bottom right of your site. When it's pressed, the booking flow opens in a panel over your page, without leaving it.” And it recommends: “Great for a site that already exists: the <div> can go anywhere, the button positions itself.”

## Steps

1. Under “Add bookings to your website,” choose **Side panel**.
2. Tap **Copy**. The snippet is copied with your barbershop's details already filled in.
   ![The Side panel option with its code snippet and the Copy button](/assets/es/agendamiento-online/panel-lateral/fragmento.png)
3. Paste the snippet into your website, anywhere on the page. The button places itself.

The snippet looks like this. Here TU-ID and TU-PERFIL are just example names: always copy your own from the screen with **Copy**.

```html
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="floating"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

> [!TIP]
> If you use two ways on the same page, the screen asks you to include the `<script>` only once.

## Frequently asked questions

**Do I need to know how to code?**
The screen gives you the code ready to use. Pasting it depends on how your site is built; the same screen warns that “if you don't have technical experience, you may need a developer's help.” If someone else manages your site, send them the snippet.

**What if I don't have a website?**
Use the **Direct booking link** on the same screen. See [The direct booking link and UTM parameters](/ayuda/agendamiento-online/enlace-directo-y-utm).

**Do all my services show up in booking?**
Only the ones set to **Public**. See [Public or private service](/ayuda/servicios/servicio-publico-o-privado).
