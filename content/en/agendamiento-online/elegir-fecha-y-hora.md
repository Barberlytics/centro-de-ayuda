---
id: agendamiento-online/elegir-fecha-y-hora
title: "Choose date and time"
description: "The Date and time step of online booking: the days of the month, the barber's free times in Afternoon and Evening, and the option to accept any barber to get more times."
section: agendamiento-online
order: 90
group: "How your client books"
roles: [owner, admin, recepcion]
screens: [/online-booking]
keywords: [choose time, choose date, available times, free times, afternoon, evening, any available barber, no preference, any barber, availability]
related: [agendamiento-online/sin-preferencia-al-reservar, agendamiento-online/elegir-sede-servicio-y-barbero, agendamiento-online/confirmar-la-reserva, agendamiento-online/no-hay-horas-disponibles, equipo/horas-de-trabajo-del-equipo]
status: review
updated: 2026-09-30
---

# Choose date and time

**In short:** the client sees the days of the month and, for the day they pick, their barber's free times, grouped as **Morning**, **Afternoon** and **Evening**. Below, they can accept any barber to see more times. They tap one and then **Next**.

![The calendar of days and the barber's available times](/assets/es/agendamiento-online/como-reserva-tu-cliente/fecha-y-hora.png)

## What they see

| Part | What it shows |
|---|---|
| Month | “September 2026” |
| Days | A strip of days (“Fri 25,” “Sat 26”… “Wed 30”) |
| **Available times** | The chosen barber with their level and their free times, every half hour, under **Morning**, **Afternoon** and **Evening**. The barber is a selector: it opens to switch to another one or to **No preference**. |
| **No preference** | “Any available barber” with how many times there are if they accept anyone (“26 available”). Tapping it shows those times and “+19 more.” It's covered in [No preference: how the barber is assigned](/ayuda/agendamiento-online/sin-preferencia-al-reservar). |
| **Next** | Goes to **Confirm** |

![The No preference block expanded with more times](/assets/es/agendamiento-online/sin-preferencia-al-reservar/bloque.png)

## Where the times come from

The free times depend on what you set up in the app:

- The barber's schedule in **Team › Working hours** ([The team's working hours](/ayuda/equipo/horas-de-trabajo-del-equipo)).
- Their blocks (lunch, vacation…) ([Block a barber's calendar](/ayuda/calendario/bloquear-el-calendario)).
- The appointments they already have and the length of the service.
- The **Business closure periods**: “Online bookings can't be made while your business is closed.”

## Frequently asked questions

**Why do the days show up in English?**
The page shows some texts in English (“Fri,” “Sep 25,” “Any available barber”). That's how it is in production.

**My client says there are no times.**
See [The client can't find available times](/ayuda/agendamiento-online/no-hay-horas-disponibles).
