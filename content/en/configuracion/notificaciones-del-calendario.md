---
id: configuracion/notificaciones-del-calendario
title: "Calendar alerts: busy schedule, blocks and vacations"
description: "The alerts in the Calendar group of the Notification center: a barber or the barbershop with a schedule booked above a percentage, blocks and vacations."
section: configuracion
order: 200
group: "Notifications"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [calendar alerts, calendar notifications, busy schedule, occupancy, occupancy percentage, calendar block, a barber blocked their schedule, vacations, vacation request, rent barber vacations, full schedule, email, push]
related: [configuracion/centro-de-notificaciones-como-funciona, calendario/bloquear-el-calendario, calendario/vacaciones-de-un-barbero, metricas/mapa-de-capacidad]
status: review
updated: 2026-09-25
---

# Calendar alerts: busy schedule, blocks and vacations

**In short:** the **Calendar** group in the Notification center alerts you when a barber or the whole barbershop goes over a certain occupancy percentage, when a barber blocks their calendar and when one requests or creates vacation time. Each alert can be sent by **Email**, by **Push** or both.

## Where it is

**Settings › Notifications › Notification center**. The card says: “Review notifications sent to clients and barbers about appointments.” Pick the role's tab and look for the **Calendar** group.

![The Notification center with the tabs by role and the alerts with their Email and Push switches](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## The alerts

| Block | Alert, exactly as on the screen | Channels |
|---|---|---|
| **Team** | “When a barber's schedule is more than [Percentage] booked” | Email · Push |
| **Team** | “When the barbershop's occupancy for the day is more than [Percentage]” | Email · Push |
| **Block** | “When a barber creates a block on their calendar” | Email · Push |
| **Vacations** | “When a barber requests vacation” | Email · Push |
| **Rent vacations** | “When a rent barber creates a vacation period” | Email · Push |

In the two **Team** alerts, [Percentage] is a number you type: for example 80, to find out when the schedule goes over 80%.

To turn an alert on or off and save, see [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Frequently asked questions

**What's the busy schedule alert for?**
To react in time: open another chair, activate another barber at the location or raise prices when demand is high. See [Capacity Map](/ayuda/metricas/mapa-de-capacidad).

**Why are there two vacation alerts?**
One is for the commission barber, who “requests” vacation, and the other for the rent barber, who “creates” their own period. See [A barber's vacation](/ayuda/calendario/vacaciones-de-un-barbero).

**Does the block alert go to the owner or the manager?**
It depends on the role tab where you turn it on. See [Which alerts each role gets](/ayuda/configuracion/notificaciones-por-rol).
