---
id: metricas/mapa-de-capacidad
title: "Capacity Map: which hours fill up"
description: "The AI Insights table that crosses the days of the week with the hours and shows you how many appointments there are in each one."
section: metricas
order: 190
group: "AI Insights"
roles: [owner, admin]
screens: [/]
keywords: [capacity map, which hours fill up, day and hour, appointment table, peak hours, empty hours, Monday to Sunday, capacity, occupancy, when is it busiest, heatmap, ai insights]
related: [metricas/como-leer-metricas, metricas/horas-de-solicitud-de-citas, metricas/recomendaciones-inteligentes]
status: draft
updated: 2026-09-25
---

# Capacity Map: which hours fill up

**In short:** the **Capacity Map** is a table of days by hours. In each cell you see how many appointments there were that day at that hour. At a glance you know which hours fill up and which stay empty.

## Where it is

In **Metrics › AI Insights**, below **Client Risk Alerts**. With the barber profile this tab doesn't appear.

## What it shows

- **Capacity Map**: a table with the days of the week (**Mon** to **Sun**) on one axis and the hours (from **7:00** to **19:00**) on the other.
- In each cell, the number of appointments for that day at that hour. For example, **Sat · 10:00 → 6** and **Tue · 15:00 → 0**.

![Capacity Map table from Monday to Sunday by hours with the number of appointments in each cell](/assets/es/metricas/mapa-de-capacidad/tarjeta.png)

> [!NOTE]
> What period the table covers (whether it's the last 3 months, like the recommendations, or another one) and whether it follows the filters at the top: still to confirm with the team.

## What it's for

- The cells with the most appointments are your strong hours. Don't give time off or schedule breaks then.
- Cells that are repeatedly at zero are hours you can fill with a promotion or close so you don't pay for an empty chair.
- If a whole day is almost empty, the **Smart Recommendations** usually point it out (“Sat has 92% fewer bookings than Mon”) and suggest a campaign for that day.
- To see the same thing by hour only, without days, look at [Appointment request hours](/ayuda/metricas/horas-de-solicitud-de-citas) in **Business**.

## Frequently asked questions

**Does the table show the current week?**
It doesn't seem to be a single week: it adds up appointments by day and hour. The exact period is still to be confirmed.

**Why does it only go from 7:00 to 19:00?**
That's the range the table shows. If you have appointments outside those hours, check them in **Appointment request hours**, which runs from 3 in the morning to 11 at night.

**Can I see it by barber?**
Whether this table responds to the **Whole team** filter is still to be confirmed.
