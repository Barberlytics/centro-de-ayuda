---
id: calendario/vacaciones-de-un-barbero
title: "A barber's vacation"
description: "Block several days on a barber's schedule with a Vacation category block: from the Month view, Create time block, dates and times."
section: calendario
order: 250
group: "Blocks and vacations"
roles: [owner, admin, barbero]
screens: [/calendar]
keywords: [vacation, barber vacation, block schedule, block several days, days off, leave, absence, sick, sick leave, create block, time block, don't take appointments, close schedule]
related: [calendario/bloquear-el-calendario, calendario/no-puedo-agendar-a-esta-hora, calendario/filtrar-el-calendario-por-equipo, equipo/horas-de-trabajo-del-equipo, configuracion/periodos-de-cierre, configuracion/notificaciones-del-calendario]
status: draft
updated: 2026-09-25
---

# A barber's vacation

**In short:** in the **Month** view, tap the barber's name, choose **Create time block** and, in “Create block”, set **Category\*** to **Vacation**, the **Start date\*** and **End date\*** of the vacation, the times and **Create**. If the whole barbershop closes, it isn't a block: it's a closure period in **Settings**.

## Steps

1. In the **Calendar**, choose the **Month** view.
2. At the top, choose the barber who is going on vacation, for example **Carlos**.
   ![The Month view with the barber selector and the occupancy per day](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/mes.png)
3. Tap their name. A menu opens with **View barber**, **Edit barber profile** and **Create time block**.
   ![The barber's menu with the Create time block option](/assets/es/calendario/bloquear-el-calendario/menu.png)
4. Tap **Create time block**. The “Create block” panel opens.
   ![The Create block panel with category, repeat, dates, times and description](/assets/es/calendario/bloquear-el-calendario/panel.png)
5. Under **Category\***, choose **Vacation**.
6. Leave **Repeat\*** on **Does not repeat**.
7. Set the **Start date\*** (the first day off) and the **End date\*** (the last).
8. Set the **Start time\*** and the **Closing time\***. To cover the whole day, use the time the barber starts and the time their shift ends.
9. If you want, write a **Description**, for example “Carlos's vacation”.
10. Tap **Create**.

> [!NOTE]
> What happens after you tap **Create** (how the block looks on the grid, whether it warns about appointments that were already on those dates, how it's edited or deleted) hasn't been confirmed yet.

> [!IMPORTANT]
> Before creating the block, check in the **Day** view whether the barber already has appointments on those dates and move or cancel them. What the app does with appointments that end up inside a block hasn't been confirmed yet.

## The block categories

**Category\*** offers **Sick**, **Vacation**, **Holiday**, **Lunch**, **Meeting**, **Shop block** and **Personal block**. For sick leave use **Sick**; for a holiday that applies to a single barber, **Holiday**. Blocks that repeat every day, like lunch, are explained in [Block a barber's calendar](/ayuda/calendario/bloquear-el-calendario).

## If the whole barbershop closes

A block belongs to one barber. If the entire barbershop closes (a holiday, inventory, renovations), use **Settings › Business closure periods** and **Add closed period**. [Closure periods](/ayuda/configuracion/periodos-de-cierre) explains it.

## Who can do it

It depends on the **Block calendar** permission. By default, the owner, the admin, the receptionist and the rent barber have it in full; the commission barber can only **View**. It's adjusted per person in their record, **Permissions** tab.

## What the screen says

| Text | What it means |
|---|---|
| **Category\*** | The reason for the block; required |
| **Start date\*** · **End date\*** | The first and last blocked days |
| **Start time\*** · **Closing time\*** | From and until what time each day |
| **Description** | Free text, optional |

## Frequently asked questions

**Can I let the team know?**
In **Settings › Notification center**, in the **Calendar** group, there are notices for blocks and vacations by email and push. See [Calendar notifications](/ayuda/configuracion/notificaciones-del-calendario).

**What if, instead of blocking, I remove their hours on those days?**
That works too: in **Team › Working hours** the day's box can be left on “Not working”. The block has the advantage of keeping the reason.

**Can clients book online on those dates?**
Not confirmed yet. Create the block ahead of time so online booking takes it into account.
