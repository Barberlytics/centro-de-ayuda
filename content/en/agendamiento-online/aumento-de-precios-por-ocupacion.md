---
id: agendamiento-online/aumento-de-precios-por-ocupacion
title: "Price increase when the schedule is full"
description: "How to charge an extra per service when your barbershop's occupancy goes above a level: the Occupancy level and the increase amount, as a percentage or a fixed amount."
section: agendamiento-online
order: 190
group: "Online booking settings"
roles: [owner, admin]
screens: [/online-booking]
keywords: [price increase, raise prices, dynamic pricing, extra charge, surcharge, occupancy, occupancy level, full schedule, peak hours, high demand, percentage, fixed amount, increase the amount]
related: [configuracion/agendamiento-online-ajustes, configuracion/notificaciones-de-metricas, agendamiento-online/confirmar-la-reserva]
status: draft
updated: 2026-09-30
---

# Price increase when the schedule is full

**In short:** in **Settings › Online booking**, the “Price increase” block lets you charge an extra on each service when the barbershop is very busy. You set the **Occupancy level** where the charge starts and how much it goes up, as a percentage (%) or a fixed amount ($).

## Where it is

**Settings › Account settings › Online booking**, “Price increase” block: “Set the occupancy percentage from which an extra charge will start to apply to each service.”

![The Price increase block with the Occupancy level, the increase amount and the percentage and fixed amount buttons](/assets/es/agendamiento-online/aumento-de-precios-por-ocupacion/bloque.png)

## Set it up

1. In **Occupancy level\***, type the occupancy percentage from which the extra is charged.
2. In **Increase amount**, type how much it goes up.
3. Tap **%** if the increase is a percentage of the price or **$** if it's a fixed amount. The screen explains it: “Edit the increase to switch between percentage (%) or fixed amount ($) and adjust the increase amount as needed.”
4. Tap **Save** at the bottom of the page.

## Example

Occupancy level `90` and increase `5` with **%**: when the barbershop goes above 90% occupancy, a $40.000 haircut is charged at $42.000. With **$** and `5000`, the same haircut is charged at $45.000.

> [!NOTE]
> It hasn't been checked yet whether occupancy is measured per day, per barber or per location, or how the extra shows up for the client when booking. The price examples are illustrative.

## Frequently asked questions

**How do I know if raising prices is a good idea?**
The **Notification center** can alert you with “Price increase suggestion when you have good demand and retention.” See [Metrics alerts](/ayuda/configuracion/notificaciones-de-metricas).

**Does it affect appointments that were already booked?**
It hasn't been checked. From what the screen says, the charge applies “to each service” from the occupancy level on.
