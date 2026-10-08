---
id: calendario/bloquear-el-calendario
title: "Block a barber's calendar"
description: "Create a time block so a barber can't be booked: lunch, a meeting, sick leave, a holiday, vacation or a shop-wide block."
section: calendario
order: 240
group: "Blocks and vacations"
roles: [owner, admin, barbero]
screens: [/calendar]
keywords: [block calendar, time block, block, lunch, meeting, sick, holiday, vacation, don't book, close schedule, personal block, shop block, create block, barber unavailable]
related: [calendario/vacaciones-de-un-barbero, calendario/ver-el-dia-la-agenda-o-el-mes, calendario/no-puedo-agendar-a-esta-hora, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Block a barber's calendar

**In short:** a **time block** marks a stretch of a barber's day as unavailable. You create it from the **Month** view, in the barber's menu, with **Create time block**.

## Steps

1. In the **Calendar**, switch the view to **Month**.
2. At the top, tap the barber's name and choose **Create time block**.
   ![The barber's menu in the Month view, with Create time block](/assets/es/calendario/bloquear-el-calendario/menu.png)
3. **Create block** opens. Fill in:
   ![The Create block form](/assets/es/calendario/bloquear-el-calendario/panel.png)

| Field | Options |
|---|---|
| **Category\*** | **Sick**, **Vacation**, **Holiday**, **Lunch**, **Meeting**, **Shop block**, **Personal block** |
| **Repeat\*** | **Does not repeat**, **Daily**, **Weekly**, **Monthly**, **Custom** |
| **Start date\*** and **End date\*** | The first and last day of the block |
| **Start time\*** and **Closing time\*** | The time window for each day |
| **Description** | Free text, for example “Doctor's appointment” |

4. Tap **Create**.

> [!TIP]
> For a lunch break every day, use **Lunch** with **Repeat: Daily** and the time window of your lunch hour.

## What happens next

The block shows up on the barber's calendar and nobody can book in that time window. Depending on what you have turned on in **Settings › Notification center**, the team gets a notice: “Schedule: A time block has been created for barber … on their calendar. Check the reason for the block.”

> [!NOTE]
> How the block looks on the grid and how to edit or delete it hasn't been confirmed yet. We'll fill it in with a test block.

## Frequently asked questions

**What if the whole barbershop closes for a day?**
Use **Settings › Business closure periods**. The block on this screen is per barber.

**How do I mark vacation?**
With the **Vacation** category and the start and end dates. See [A barber's vacation](/ayuda/calendario/vacaciones-de-un-barbero).

**Can I only create one from the Month view?**
On the screens we checked, **Create time block** only appeared in the barber's menu in the **Month** view. In **Day**, the menu has **View barber** and **Edit barber profile**.
