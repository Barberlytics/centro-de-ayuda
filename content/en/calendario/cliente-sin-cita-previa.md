---
id: calendario/cliente-sin-cita-previa
title: "A client who walks in without an appointment"
description: "How to serve a client who walks in without booking: the Walk-in client switch, the Walk in option and the Walk-in sale."
section: calendario
order: 80
group: "Book"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [walk-in, walk in, no appointment, walked in without booking, drop-in client, unbooked client, serve without appointment, walk-in sale, walk-in commission, walk-in rate, spontaneous client, no reservation]
related: [calendario/crear-una-cita, calendario/venta-sin-cita, calendario/crear-una-cita-para-un-cliente-nuevo, calendario/clientes-sin-preferencia-de-barbero, calendario/lista-de-espera, metricas/clientes-reservas-online-y-rate-walk-in, equipo/orden-para-clientes-sin-cita]
status: draft
updated: 2026-09-25
---

# A client who walks in without an appointment

**In short:** create the appointment as usual and turn on **Walk-in client** before you tap **Create**. That way the app applies the barber's walk-in commission and the appointment counts as **Walk-in** in your reports. If the client has no record, choose **Walk in** as the client.

## Steps

1. In the **Calendar**, tap the empty slot of the barber who will serve them, at the time they start. **Create appointment** opens with the **Barber** and the **Date & Time** already filled in. You can also tap **Actions › Create appointment**.
2. Tap **Client**. Look for the client in “Search N Clients”. If they aren't registered and don't want to leave their details, choose **Walk in**, the first option.
   ![The client list with the Walk in option first](/assets/es/calendario/crear-una-cita/cliente.png)
3. Tap **Service** and choose what is going to be done, for example “Classic haircut”.
4. Turn on **Walk-in client**. Below it says: “The client walked in without an appointment. Applies the barber's walk-in commission and shows in the booking reports.”
   ![The Walk-in client switch turned on, with its explanation](/assets/es/calendario/crear-una-cita/sin-cita-previa.png)
5. Tap **Create**.

> [!NOTE]
> How the appointment looks on the grid after you tap **Create** hasn't been confirmed yet.

## Another way: Walk-in sale

**Actions** also has **Walk-in sale**. It opens a shorter panel: **Date** (with a picker), the time, **Client**, **Service**, **Barber** and **Create**.

![The Walk-in sale panel with date, time, client, service and barber](/assets/es/calendario/venta-sin-cita/panel.png)

> [!NOTE]
> How a **Walk-in sale** differs from an appointment created with the **Walk-in client** switch (how it looks on the calendar, how it's charged, how it counts in reports) hasn't been confirmed yet. [Walk-in sale](/ayuda/calendario/venta-sin-cita) explains it.

## What changes for the barber

- A commission barber is paid with their **Walk-in client commission**, which is in their record, **Compensation** tab.
- A rent barber gets the **Walk-in appointment deduction**, in their record, **Payments** tab.
- Which barbers can take walk-in clients, and in what order, is set in **Team › Actions › Order for walk-in and no-preference booking**, **Walk-in booking** tab. [Clients with no preferred barber: who serves them](/ayuda/calendario/clientes-sin-preferencia-de-barbero) explains it.

## Where you see it afterwards

- In **Metrics › Business**, the **Booking method** donut separates **Internal**, **Online appointment** and **Walk-in**.
- In **Metrics › Clients**, the **Walk-in rate** card tells you what share of your clients walked in without an appointment. See [Online bookings and walk-in rate](/ayuda/metricas/clientes-reservas-online-y-rate-walk-in).
- In **Transactions**, clients without a record show up as “Walk in”.

## What the screen says

| Text | What it means |
|---|---|
| “The client walked in without an appointment. Applies the barber's walk-in commission and shows in the booking reports.” | What the **Walk-in client** switch does |
| **Walk in** · “000******0000” | A generic client, with no record of their own |
| **Walk-in** | What this kind of appointment is called in **Metrics** |

## Frequently asked questions

**Do I have to create the appointment if the client is already in the chair?**
Yes. The appointment is what gets charged later and what earns the barber their commission. Create it for the time they started.

**If I don't turn the switch on, what happens?**
The app doesn't apply the walk-in commission or mark the appointment as **Walk-in** in the reports. That's what the switch's text says.

**They walked in and no barber is free.**
Put them on the waitlist: [The waitlist](/ayuda/calendario/lista-de-espera) explains how.
