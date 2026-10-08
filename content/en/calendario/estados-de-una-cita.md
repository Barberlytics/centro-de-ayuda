---
id: calendario/estados-de-una-cita
title: "The statuses of an appointment: scheduled, arrived, in the chair, closed and completed"
description: "Which statuses an appointment goes through, which button changes each one and what the app calls them on the calendar, in the details and in Transactions."
section: calendario
order: 120
group: "Serve an appointment"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar, /transactions]
keywords: [appointment statuses, scheduled, arrived, in the chair, closed, completed, canceled, pending, check in, seated, charge, no-show, barber ready, check out, appointment flow, appointment status]
related: [calendario/abrir-una-cita, calendario/marcar-que-el-cliente-llego, calendario/pasar-al-cliente-a-la-silla, calendario/cobrar-una-cita, calendario/el-cliente-no-se-presento, calendario/cancelar-una-cita, transacciones/filtrar-transacciones]
status: draft
updated: 2026-09-25
---

# The statuses of an appointment: scheduled, arrived, in the chair, closed and completed

**In short:** an appointment moves along from the moment it's booked until it's charged. Each step is marked from the **Actions** button in the appointment's details or from the button on the card. If the client doesn't come or the appointment is canceled, it leaves the flow.

## The normal path

| Moment | Button that marks it | What the app calls it |
|---|---|---|
| The appointment exists | **Create** | In Agenda it shows as **Pending**; in Transactions, **Scheduled** |
| The barber is free to serve | **Actions › Barber ready** | — |
| The client has arrived at the barbershop | **Check in** (on the card or in **Actions**) | In Transactions, **Arrived** |
| The client moves to the chair | **Actions › Seated** | In Transactions, **In chair** |
| It's charged | **Charge** or **Pay appointment** | In Transactions, **Closed** and **Completed** |

![The Actions menu with Barber ready, Check in, Seated, Charge, No-show and Cancel](/assets/es/calendario/abrir-una-cita/acciones.png)

## When the appointment doesn't happen

- **No-show**: the client didn't come. It counts toward the **Cancellation rate** in Metrics (“Canceled + No-show”). See [The client didn't show up](/ayuda/calendario/el-cliente-no-se-presento).
- **Cancel**: the appointment is canceled. In Transactions it shows as **Canceled**. See [Cancel an appointment](/ayuda/calendario/cancelar-una-cita).

## Where you see the status

- On the calendar **card**: the button in the corner (“Check in”) shows the next step.
- In the **details**: next to the name (“Pending”) and in **NEXT STEP** (“Laura hasn't arrived yet.”).
- In the **Agenda** view: the label on each row.
- In **Transactions**: the **Appointment status** filter (Scheduled, Arrived, In chair, Closed, Completed, Canceled).

> [!NOTE]
> The app uses different names on each screen (for example, **Seated** on the button and **In chair** in Transactions). The exact match between each button and each status, and the difference between **Closed** and **Completed**, haven't been confirmed yet: we'll check them with a test appointment.

## Frequently asked questions

**Do I have to mark every step?**
No. You can charge an appointment that was only scheduled. Marking **Check in** and **Seated** lets the team see where each client is at.

**What's the difference between No-show and Cancel?**
**No-show** is when the client didn't come and didn't let you know; **Cancel** is when the appointment is voided. Both add to the **Cancellation rate** in Metrics.

**Can a status be taken back?**
Not documented yet.
