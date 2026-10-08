---
id: glosario/que-es-la-ocupacion
title: "Occupancy: how full the schedule is"
description: "Where the app shows occupancy: the Occ. percentage for each day in the calendar's Month view and the busy-schedule alerts in the Notification center."
section: glosario
order: 60
roles: [owner, admin]
screens: [/, /calendar, /notifications-center]
keywords: [occupancy, occ, occupancy percentage, full schedule, how full is the schedule, month view, busy schedule, daily occupancy, capacity, free hours, capacity map, occupancy alert]
related: [glosario/glosario-de-barberlytics, calendario/ver-el-dia-la-agenda-o-el-mes, metricas/mapa-de-capacidad, metricas/horas-de-solicitud-de-citas, navegacion/notificaciones-que-recibes]
status: draft
updated: 2026-09-25
---

# Occupancy: how full the schedule is

**In short:** occupancy is how much of a barber's time, or the barbershop's time, is taken by appointments. The app shows it as a percentage in the calendar's **Month** view (“Occ. 0.79 %”) and uses it in two alerts in the Notification center.

## Where it shows

### On the calendar, Month view

1. Open **Calendar** and switch the view to **Month**.
2. Pick a barber at the top.
3. Each day shows its occupancy: **Occ. 0.79 %**. Days with more appointments have a higher percentage.
   ![The Month view with occupancy by day](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/mes.png)

### In the alerts

In **Settings › Notification center**, group **Calendar › Team**:

- “When a barber's schedule is more than [Percentage] booked”
- “When the barbershop's occupancy for the day is more than [Percentage]”

You set the percentage. For example, an alert at 80 % tells you Carlos has almost no openings left that day.

### Capacity Map

In **Metrics › AI Insights**, the **Capacity Map** crosses the days of the week with the hours and shows how many appointments are in each cell: it's occupancy seen by the hour ([Capacity Map](/ayuda/metricas/mapa-de-capacidad)).

![The Capacity Map table](/assets/es/metricas/mapa-de-capacidad/tarjeta.png)

> [!NOTE]
> The exact formula is still to be confirmed with the team: which hours the percentage is calculated over (the barber's shift, the **Start time** and **End time** in Business details, or the 06:00 to 23:30 of the grid) and whether it counts canceled appointments.

## What it's for

- A barber with high occupancy every day is the candidate for a price increase, or for another barber to take their no-preference clients.
- Days with repeatedly low occupancy are the days for a promotion; the **Smart Recommendations** often point them out.

## Frequently asked questions

**Why does it say 0.79 % and not 79 %?**
That's what the screen shows. Whether the number is a fraction or a percentage of the whole month is still to be confirmed.

**Can I see the occupancy for the whole location?**
In **Month** you pick one barber. For the whole picture, use the “occupancy for the day” alert and the **Capacity Map**.
