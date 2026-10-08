---
id: equipo/horas-de-trabajo-del-equipo
title: "The team's working hours: view and change the week"
description: "The Working hours tab in Team: the barber-by-day grid, how to move between weeks and how to edit or delete a day's shift."
section: equipo
order: 240
group: "Schedules, levels and order"
roles: [owner, admin]
screens: [/team/barbers]
keywords: [working hours, team schedule, shifts, week, this week, edit this day, delete this shift, not working, change a shift, day off, schedule by location, who is working today, grid]
related: [equipo/ficha-de-un-barbero-calendario, equipo/conoce-la-seccion-equipo, calendario/un-barbero-no-aparece-en-el-calendario, calendario/vacaciones-de-un-barbero, calendario/bloquear-el-calendario]
status: draft
updated: 2026-09-25
---

# The team's working hours: view and change the week

**In short:** the **Working hours** tab shows, week by week, each barber's shift every day (“6am - 11pm”) or “Not working.” When you tap a shift you can **Edit this day** or **Delete this shift**. It's the place for changes to a specific week; the fixed schedule lives in each barber's record.

## How to get there

1. Tap **Team** in the menu.
2. Tap the **Working hours** tab.
   ![The Working hours grid with one barber per row and one day per column](/assets/es/equipo/horas-de-trabajo-del-equipo/semana.png)

## What you see

- At the top, the **Location** filter and the **This week** selector with the **‹** and **›** arrows around the range, for example **21 SEP - 27 SEP**.
- **Team Members** and how many barbers there are, for example “11 barbers.”
- One row per barber and one column per day (Mon, Tue, ... Sun, with the date). In each cell, the shift (“6am - 11pm”) or “Not working.”

## Move between weeks

Tap **‹** for the previous week or **›** for the next one. **This week** takes you back to the current one.

## Change a day's shift

1. Tap the cell of the shift you want to change.
   ![A shift's menu with Edit this day and Delete this shift](/assets/es/equipo/horas-de-trabajo-del-equipo/menu-turno.png)
2. Choose **Edit this day**.
   ![The Edit this day panel with Start date, End date and Save](/assets/es/equipo/horas-de-trabajo-del-equipo/editar-dia.png)
3. The panel shows the day (“Date: Mon, 21 SEP”), the person (“Barber: Carlos”) and two times to choose.

   | Field | Required | What it is |
   |---|---|---|
   | **Start date\*** | Yes | What time the shift starts that day, for example 6:00am. |
   | **End date\*** | Yes | What time it ends, for example 11:00pm. |

4. Tap **Save**.

To remove the shift for that day, choose **Delete this shift**.

> [!NOTE]
> What happens when you tap **Save** and **Delete this shift** hasn't been checked yet: whether the change affects only that day or every week, whether it asks you to confirm, and how it looks afterward in the **Calendar**. It will be completed with a test barber.

## Fixed schedule and one-week changes

- The schedule for every week is set in each barber's record, **Calendar** tab. See [Their weekly schedule](/ayuda/equipo/ficha-de-un-barbero-calendario).
- To keep a barber from getting appointments for a few days without touching their shift, use a block. See [A barber's vacation](/ayuda/calendario/vacaciones-de-un-barbero).

## Frequently asked questions

**How do I know who's working today?**
Open **Working hours** and look at today's column. Anyone who isn't working says “Not working.”

**A barber shows as “Not working” every day.**
They have no schedule. Set one in their record, **Calendar** tab. See [A barber doesn't show up on the calendar](/ayuda/calendario/un-barbero-no-aparece-en-el-calendario).

**Can I see another location?**
Yes, with the **Location** filter above the grid.
