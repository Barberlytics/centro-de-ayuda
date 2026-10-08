---
id: equipo/ficha-de-un-barbero-opciones
title: "A barber's record: options"
description: "The Options tab of the record: tips, several appointments at once, new clients, client cancellations, the booking interval and reminders for the barber."
section: equipo
order: 170
group: "A barber's record"
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [barber options, can receive tips, can schedule multiple appointments, can take new clients, clients can cancel appointments, booking interval, barber reminder, social media, link, minutes, tips, cancellation]
related: [equipo/ficha-de-un-barbero-perfil, equipo/editar-a-un-miembro-del-equipo, equipo/visibilidad-para-agendamiento, calendario/cancelar-una-cita, calendario/cobrar-con-propina]
status: draft
updated: 2026-09-25
---

# A barber's record: options

**In short:** the **Options** tab gathers switches that change how that barber works in the calendar: whether they receive tips, whether they can have several appointments at once, whether they take new clients and whether their clients can cancel. When you edit, you also set how many minutes apart they can be booked and which reminders they get.

## How to get there

1. Tap **Team** in the menu.
2. Under **Barbers**, tap **Actions** › **View Commission barber** (or **View Rent barber**) on the person's row.
3. Tap the **Options** tab.
   ![The Options tab of the record in view mode](/assets/es/equipo/ficha-de-un-barbero-opciones/ver.png)

## What you see

| Option | What it means |
|---|---|
| **Can receive tips** | **Enabled**: when you take payment for their appointments you can add a tip. |
| **Can schedule multiple appointments** | Whether they can have more than one appointment at the same time. |
| **Can take new clients** | Whether clients coming in for the first time can be booked with them. |
| **Clients can cancel appointments** | Whether their clients can cancel on their own. It shows the **Email**, **SMS** and **Push** channels, and a time in **Hours** and **Minutes**. |
| **Personal information** | **Minutes**, **Social media** and **Link**. |

## How to edit it

1. In the list, tap **Actions** › **Edit Commission barber** and open **Options**.
   ![The Options tab in edit mode, with the switches, the interval and the reminders](/assets/es/equipo/ficha-de-un-barbero-opciones/editar.png)
2. Turn **Can receive tips**, **Can do multiple services**, **Can take new clients** and **Clients can cancel appointments** on or off.
3. Under **Barber booking interval** enter the **Minutes\***: how far apart they can be booked, for example every 30 minutes.
4. Under **Reminder for barber** choose the channel (**Email**, **SMS** or **Push**) and how far in advance, in **Hours\*** and **Minutes\***. With **Add more** you add another reminder.
5. Tap **Save**.

| Field | Required | What it is |
|---|---|---|
| **Can receive tips** | No | Switch. |
| **Can do multiple services** | No | Switch. In view mode it appears as **Can schedule multiple appointments**. |
| **Can take new clients** | No | Switch. |
| **Clients can cancel appointments** | No | Switch. |
| **Minutes\*** (Barber booking interval) | Yes | How many minutes apart appointments are booked with this barber. |
| **Hours\*** and **Minutes\*** (Reminder for barber) | Yes | How far in advance the reminder reaches them. |

> [!NOTE]
> What happens when you tap **Save**, what exactly the time in **Clients can cancel appointments** does, and what **Social media** and **Link** are for hasn't been checked yet. It will be completed with a test barber.

## Frequently asked questions

**A barber doesn't want new clients, only their own.**
Turn off **Can take new clients** in their **Options** tab. To make it so they can't even be booked, see [Visibility for booking](/ayuda/equipo/visibilidad-para-agendamiento).

**Can I stop clients from canceling at the last minute?**
With **Clients can cancel appointments** and its time in **Hours** and **Minutes**. How that time is applied isn't documented yet.

**Why won't it let me book at quarter past?**
Because of the **Barber booking interval**. If it's set to 30 minutes, appointments start every half hour.
