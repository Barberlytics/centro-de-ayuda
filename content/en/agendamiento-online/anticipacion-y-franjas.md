---
id: agendamiento-online/anticipacion-y-franjas
title: "How far ahead and up to what date your clients can book"
description: "Online booking availability: the minimum notice to book, how many weeks ahead the schedule is open, and the interval between time slots."
section: agendamiento-online
order: 180
group: "Online booking settings"
roles: [owner, admin]
screens: [/online-booking]
keywords: [minimum notice, minimum notice to book, advance notice, book in advance, last-minute bookings, how many weeks, book in the future, time slots, slot interval, how often times appear, 15 minutes, 30 minutes, open schedule, online booking availability]
related: [configuracion/agendamiento-online-ajustes, agendamiento-online/elegir-fecha-y-hora, agendamiento-online/no-hay-horas-disponibles, agendamiento-online/cancelar-o-reprogramar-en-linea]
status: draft
updated: 2026-09-30
---

# How far ahead and up to what date your clients can book

**In short:** in **Settings › Online booking**, the “Online booking availability” block decides three things: how far in advance a client has to book (**Minimum notice to book**), how many weeks ahead they can pick a date (**Time slots available for online booking**), and how often times are offered (**Default time slot interval**).

## Where it is

**Settings › Account settings › Online booking**, “Online booking availability” block: “Set how far in advance clients can book online and how long they must wait to cancel or reschedule.”

![The Online booking availability block with the minimum notice, the slots and the interval](/assets/es/agendamiento-online/anticipacion-y-franjas/disponibilidad.png)

## The three settings

| Setting | What you choose | Options |
|---|---|---|
| “Notice needed for a client to make an appointment”: **Minimum notice to book\*** and **Time unit\*** | The minimum time between the moment the client books and the appointment time. | A number and **Minutes** or **Hours**. |
| **Time slots available for online booking** | How far ahead the schedule opens. | From “No more than 1 week in the future” to “No more than 8 weeks in the future.” |
| **Default time slot interval** | How often times are offered. | **15 minutes**, **30 minutes**, **45 minutes**, **60 minutes**. |

About the interval, the screen adds: “The time slot interval can be changed by each user by zooming in on the calendar.”

## Example

Mi Barbería doesn't want last-minute bookings and works with half-hour haircuts:

1. In **Minimum notice to book**, type `2` and in **Time unit**, choose **Hours**.
2. In **Time slots available for online booking**, choose “No more than 4 weeks in the future.”
3. In **Default time slot interval**, choose **30 minutes**.
4. Scroll to the bottom of the page and tap **Save**.

If a client opens booking at 10:00 a.m., the first time they can take today is from 12:00 p.m., and they can't pick dates beyond four weeks.

> [!NOTE]
> The exact effect of each setting on the times the client sees (for example, whether the interval changes the times shown in online booking or only in the calendar) hasn't been checked yet with a real booking.

## Frequently asked questions

**A client says they don't see any times for today. Could this be why?**
Yes. If the minimum notice is high, the nearest times don't appear. Also see [The client can't find available times](/ayuda/agendamiento-online/no-hay-horas-disponibles).

**Why is the slots field empty?**
If you haven't chosen an option, the field looks empty. Choose one and tap **Save**.
