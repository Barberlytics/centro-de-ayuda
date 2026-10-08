---
id: calendario/cancelar-una-cita
title: "Cancel an appointment"
description: "Cancel an appointment from the appointment's Actions menu, how it differs from No-show, and where canceled appointments end up."
section: calendario
order: 160
group: "Serve an appointment"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [cancel appointment, cancellation, void appointment, client canceled, delete appointment, remove appointment, canceled appointment, canceled, cancellation rate, client isn't coming, undo appointment, cancel booking]
related: [calendario/abrir-una-cita, calendario/el-cliente-no-se-presento, calendario/mover-o-reprogramar-una-cita, calendario/estados-de-una-cita, metricas/ticket-promedio-cancelacion-y-propinas, transacciones/filtrar-transacciones]
status: draft
updated: 2026-09-25
---

# Cancel an appointment

**In short:** open the appointment, tap **Actions** and choose **Cancel**. Use it when the client lets you know they aren't coming. If they didn't call and didn't show up, the option is **No-show**.

## Steps

1. In the **Calendar**, tap the appointment's card. Its details open.
2. Tap **Actions**, the ≡ button in the header.
   ![The appointment's Actions menu, with Cancel at the bottom](/assets/es/calendario/abrir-una-cita/acciones.png)
3. Choose **Cancel**. It's the last option in the menu.

> [!IMPORTANT]
> What happens after you tap **Cancel** (whether it asks you to confirm or give a reason, whether it can be undone, whether it notifies the client) hasn't been confirmed yet. Before canceling, make sure it's the right appointment: check the name, the service and the time in the header.

## Cancel or No-show

| Situation | Action |
|---|---|
| The client let you know they aren't coming, or you have to void the appointment | **Cancel** |
| The client didn't call and didn't show up | **No-show** ([The client didn't show up](/ayuda/calendario/el-cliente-no-se-presento)) |
| The client wants a different time or day | Better to move the appointment: [Move or reschedule an appointment](/ayuda/calendario/mover-o-reprogramar-una-cita) |

## Where canceled appointments end up

- In **Transactions**, the **Appointment status** filter has the **Canceled** option. See [Filter transactions](/ayuda/transacciones/filtrar-transacciones).
- In **Metrics › Business**, the **Cancellation rate** adds together canceled appointments and no-shows. See [Average ticket, cancellation and tips](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).
- In the client's record, inside the appointment, the **Client** tab shows **ALERTS** with the number of **Canceled** appointments, for example “Canceled 8”.

## The client can cancel too

In each barber's record, **Options** tab, there is **Clients can cancel appointments**, with the **Email**, **SMS** and **Push** channels and a time limit in **Hours** and **Minutes**. If it's turned on, the client can cancel on their own only up to that long before the appointment.

## What the screen says

| Text | What it means |
|---|---|
| **Cancel** (**Actions** menu) | Voids the appointment |
| **Canceled** (**Transactions** filter) | The status the appointment ends up with |
| “Canceled 8” (**Client** tab, **ALERTS**) | How many appointments that client has canceled |

## Frequently asked questions

**Does canceling delete the appointment from the calendar?**
We haven't confirmed yet how a canceled appointment looks on the grid. In **Transactions** it still exists with the **Canceled** status.

**Can I cancel just one appointment in a repeating series?**
Not confirmed yet. See [Create a repeating appointment](/ayuda/calendario/cita-que-se-repite).

**Is there a charge for canceling?**
No cancellation fee appears on the screens we went through.
