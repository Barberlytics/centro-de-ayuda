---
id: equipo/ficha-de-un-barbero-calendario
title: "A barber's record: their weekly schedule"
description: "The Calendar tab of the record: each day's schedule with Start time and Closing time, how to edit it and how it relates to Working hours."
section: equipo
order: 150
group: "A barber's record"
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [barber schedule, weekly schedule, barber calendar, start time, closing time, work days, change schedule, day off, break, availability, shift, barber profile]
related: [equipo/ficha-de-un-barbero-perfil, equipo/horas-de-trabajo-del-equipo, equipo/editar-a-un-miembro-del-equipo, calendario/un-barbero-no-aparece-en-el-calendario, calendario/vacaciones-de-un-barbero]
status: draft
updated: 2026-09-25
---

# A barber's record: their weekly schedule

**In short:** the **Calendar** tab of the record shows the fixed schedule for the week: for each day, from **Sunday** to **Saturday**, their **Start time** and their **Closing time**. When you edit, a checkbox per day decides whether they work or not. It's the same for the commission barber and the rent barber.

## How to get there

1. Tap **Team** in the menu.
2. Under **Barbers**, tap **Actions** › **View Commission barber** (or **View Rent barber**) on the person's row.
3. Tap the **Calendar** tab.
   ![The Calendar tab of the record with the seven days and their hours](/assets/es/equipo/ficha-de-un-barbero-calendario/ver.png)

## What you see

One row per day, from **Sunday** to **Saturday**, with **Start time** and **Closing time**. For example, Monday 06:00 AM – 11:00 PM. A day with no hours is a day they don't work.

## How to change the schedule

1. In the list, tap **Actions** › **Edit Commission barber** and open **Calendar**.
   ![The Calendar tab in edit mode, with a checkbox per day and the hours](/assets/es/equipo/ficha-de-un-barbero-calendario/editar.png)
2. Check the box for each day they work. Active days have an asterisk on their hours.
3. Set the **Start time** and the **Closing time** for each checked day.
4. Tap **Save**.

| Field | Required | What it is |
|---|---|---|
| Day checkbox | No | Whether the barber works that day. |
| **Start time\*** | Yes, on checked days | What time they start. |
| **Closing time\*** | Yes, on checked days | What time they finish. |

> [!NOTE]
> What happens when you tap **Save** and how the change shows up in the **Calendar** and in **Working hours** hasn't been checked yet. It will be completed with a test barber.

## Fixed schedule and one week's schedule

- This tab is the barber's **fixed** schedule, the one for every week.
- The **Working hours** tab in **Team** shows the whole team week by week and lets you edit a specific day. See [The team's working hours](/ayuda/equipo/horas-de-trabajo-del-equipo).
- For a few days of vacation, don't change the schedule: use a block. See [A barber's vacation](/ayuda/calendario/vacaciones-de-un-barbero).

## Frequently asked questions

**A barber doesn't show up in the calendar one day.**
Check that the day has its checkbox checked and hours here. If they don't work that day, the calendar doesn't show them. See [A barber doesn't show up on the calendar](/ayuda/calendario/un-barbero-no-aparece-en-el-calendario).

**How do I give them a day off just this week?**
In **Team** › **Working hours**, tap their shift for that day and choose **Edit this day** or **Delete this shift**.

**Is it different for a rent barber?**
No. The tab is the same for both types.
