---
id: calendario/el-cliente-no-se-presento
title: "The client didn't show up"
description: "Mark that the client didn't come with No-show in the Actions menu, how it differs from Cancel and where the no-show is seen afterwards."
section: calendario
order: 170
group: "Serve an appointment"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [no-show, no show, client didn't come, didn't arrive, missed appointment, client doesn't show up, mark absence, absent, didn't attend, client reliability, stood up, skipped appointment]
related: [calendario/abrir-una-cita, calendario/cancelar-una-cita, calendario/marcar-que-el-cliente-llego, calendario/estados-de-una-cita, metricas/ticket-promedio-cancelacion-y-propinas, clientes/ver-un-cliente]
status: draft
updated: 2026-09-25
---

# The client didn't show up

**In short:** if the time has passed and the client neither arrived nor called, open the appointment, tap **Actions** and choose **No-show**. That way the no-show stays in their history and in your metrics. If the client let you know, use **Cancel**.

## Steps

1. In the **Calendar**, tap the appointment's card. In **Summary**, **NEXT STEP** says “Laura hasn't arrived yet.”
2. Tap **Actions**, the ≡ button in the header.
   ![The appointment's Actions menu, with No-show between Charge and Cancel](/assets/es/calendario/abrir-una-cita/acciones.png)
3. Choose **No-show**.

> [!NOTE]
> What happens after you tap **No-show** (whether it asks you to confirm, how the card looks, whether it can be undone, whether the client is notified) hasn't been confirmed yet.

## No-show or Cancel

| Situation | Action |
|---|---|
| They didn't call and didn't show up | **No-show** |
| They let you know they aren't coming | **Cancel** ([Cancel an appointment](/ayuda/calendario/cancelar-una-cita)) |

The difference matters because each one is counted separately and because the no-show stays on the client's record.

## Where you see it afterwards

- **On the appointment, Client tab.** The **RELIABILITY** block counts the times they came against the times they booked, for example “Came 31 of 31 times”, and sums it up: “Has never missed. Reliable.” Below it, **ALERTS** shows the **Canceled** appointments.
  ![The appointment's Client tab, with Reliability and Alerts](/assets/es/calendario/abrir-una-cita/cliente.png)
- **In Metrics › Business.** The **Appointments** card separates the ones that were **no-shows**, and the **Cancellation rate** adds together canceled appointments and no-shows. See [Average ticket, cancellation and tips](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).
- **In the client's record**, in **Clients**, their indicators include the **Didn't attend** percentage. See [View a client](/ayuda/clientes/ver-un-cliente).

## What the app calls this status

The **Actions** menu says **No-show**. **Metrics** talks about appointments that “didn't show up” and “no-show”. The client's record says “Didn't attend”. They're different names for the same thing in each place.

## What the screen says

| Text | What it means |
|---|---|
| “Laura hasn't arrived yet.” | Nobody marked the arrival; you can still wait or mark the no-show |
| “Came 31 of 31 times” | How many of the appointments they booked the client kept |
| “Has never missed. Reliable.” | The reliability summary when they have no no-shows |

## Frequently asked questions

**How long do I wait before marking it?**
That's up to you. The app doesn't mark it by itself: the appointment stays at “hasn't arrived yet” until someone taps **No-show**.

**The client arrived late, after I marked it.**
How to undo it hasn't been confirmed yet. If you're going to serve them, create a new appointment for the time they arrived.

**Is there a charge for a no-show?**
No charge for not showing up appears on the screens we went through.
