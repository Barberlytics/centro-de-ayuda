---
id: calendario/no-puedo-agendar-a-esta-hora
title: "I can't book at this time"
description: "What to check when a slot on the calendar is shaded or the barber doesn't show up: their schedule, a block, the Team* filter and whether they're activated at the location."
section: calendario
order: 260
group: "If something goes wrong"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [can't book, shaded slot, time not available, gray, outside hours, barber doesn't work, working hours, block, won't let me create appointment, time doesn't show up, time taken, it won't let me, schedule]
related: [calendario/filtrar-el-calendario-por-equipo, calendario/un-barbero-no-aparece-en-el-calendario, calendario/bloquear-el-calendario, calendario/crear-una-cita, calendario/lista-de-espera, equipo/horas-de-trabajo-del-equipo]
status: draft
updated: 2026-09-25
---

# I can't book at this time

**In short:** it's almost always one of four things: the barber has no hours at that time (the slot is shaded), there's a block, the **Team\*** filter is on **Working** and doesn't show the barber, or the barber isn't activated at that location. Check them in that order.

## 1. The slot is shaded: the barber has no hours

In the **Day** view, the hours outside the barber's schedule are shaded. Their schedule is set in **Team › Working hours**: a barber-by-day grid with their hours (“6am - 6pm”) or “Not working”, and each box can be edited.

1. In the **Calendar** bar, tap the settings button (the sliders icon).
   ![The calendar's settings menu, with Working hours and Waitlist](/assets/es/calendario/las-acciones-del-calendario/menu-ajustes.png)
2. Choose **Working hours**. It takes you to **Team › Working hours**.
3. Find the barber and the day, and give them hours for that time.

[Team working hours](/ayuda/equipo/horas-de-trabajo-del-equipo) explains it.

> [!NOTE]
> Whether the app lets you create an appointment in a shaded slot, or rejects it, hasn't been confirmed yet. Keep in mind that the **Date & Time** picker in the **Create appointment** panel offers times from 8:00 AM (**Morning**) to 11:30 PM (**Evening**), in half-hour steps.

## 2. There's a block

A block (**Sick**, **Vacation**, **Lunch**, **Meeting**…) covers those hours for the barber. It's created from the **Month** view, by tapping the barber's name and **Create time block**. If the barber is available again, the block has to be removed. [Block a barber's calendar](/ayuda/calendario/bloquear-el-calendario) explains it.

## 3. The Team* filter doesn't show the barber

The calendar opens with **Team\*** on **Working**: only barbers with hours that day show up. If the barber has no hours, you don't see their column and you can't tap their slot.

1. Tap **Team\*** in the top bar.
   ![The Team filter open, with Whole team, Working and the barbers](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/equipo-filtro.png)
2. Choose **Whole team** or the barber's name.

If the day is empty, the calendar says so: “Nobody works this day”, with the **View whole team** and **Set up schedules** buttons. [Filter by team](/ayuda/calendario/filtrar-el-calendario-por-equipo) explains it.

## 4. The barber isn't activated at the location

If they don't show up with **Whole team** either, the barber isn't activated at the location you've chosen. They're activated in **Team › Actions › Activate team in this location**. [A barber doesn't show up on the calendar](/ayuda/calendario/un-barbero-no-aparece-en-el-calendario) explains it.

## What the screen says

| What you see | What it means | What to do |
|---|---|---|
| Shaded slot in the column | The barber has no hours at that time | Change their schedule in **Team › Working hours** |
| “Not working” (in **Working hours**) | The barber doesn't work that day | Edit that day's box |
| “Nobody works this day” | With **Working**, nobody has hours on that date | **View whole team** or **Set up schedules** |
| No barber column even with **Whole team** | They aren't activated at this location | **Activate team in this location** |

## Frequently asked questions

**The client wants to come at 7:00 AM and that time doesn't show up.**
The **Date & Time** picker starts at 8:00 AM. Try tapping the 7:00 AM slot on the grid, which starts at 06:00 AM; if the barber has hours at that time, **Create appointment** opens with the time filled in.

**The time is free but the barber is busy with something else.**
Create a block with the matching category (**Meeting**, **Lunch**…) so it shows on the calendar.

**There's no opening at the time the client wants.**
Put them on the waitlist: [The waitlist](/ayuda/calendario/lista-de-espera) explains how.
