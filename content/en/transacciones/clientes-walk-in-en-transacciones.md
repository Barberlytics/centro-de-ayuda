---
id: transacciones/clientes-walk-in-en-transacciones
title: "Bills for unregistered clients (“Walk in”)"
description: "Why some bills say “Walk in” in the Client column, where that client comes from and how it differs from the Walk-in client switch."
section: transacciones
order: 40
group: "How to read Transactions"
roles: [owner, admin]
screens: [/transactions]
keywords: [walk in, walk-in, unregistered client, nameless client, generic client, bill with no client, walk-in client, no appointment, drop-in client, who is walk in, client column]
related: [transacciones/como-leer-transacciones, calendario/cliente-sin-cita-previa, calendario/crear-una-cita, clientes/crear-un-cliente, calendario/venta-sin-cita]
status: review
updated: 2026-09-25
---

# Bills for unregistered clients (“Walk in”)

**In short:** when a bill says “Walk in” in the **Client** column, the appointment was created with the generic **Walk in** client instead of a registered person. It's the first option in the client list when you create an appointment. It's different from the **Walk-in client** switch, which marks how the client arrived.

## Where it comes from

When you create an appointment, you tap **Client** and the “Clients” list opens. The first option is **Walk in**, with a phone number made of zeros. If you choose it, the appointment and its bill are put under the name “Walk in” ([Create an appointment](/ayuda/calendario/crear-una-cita)).

It's useful for serving someone quickly who doesn't want to leave their details. The trade-off is that this visit isn't saved in anyone's record.

## Walk in is not the same as “walk-in client”

| | **Walk in** (client) | **Walk-in client** (switch) |
|---|---|---|
| What it is | A generic client with no name or phone | A mark on the appointment: the client came in without booking |
| Where you choose it | In **Client**, when creating the appointment | On the **Create appointment** switch |
| What changes | The **Client** column says “Walk in” and the visit isn't saved in any record | Applies the barber's walk-in commission and counts in the booking reports |

You can combine them: a registered client who came in without an appointment (switch on, with their name), or a **Walk in** who did have an appointment. [A client who walks in without an appointment](/ayuda/calendario/cliente-sin-cita-previa) explains it.

> [!TIP]
> If the client comes back, create them with **Create client** from the same list and book them under their name. That way their history, their type and their visit rhythm start to count ([Create a client](/ayuda/clientes/crear-un-cliente)).

## Frequently asked questions

**Can I swap a bill's “Walk in” for the real client?**
That option wasn't there in **Transactions**. If the appointment is still open, edit it from the calendar before charging.

**Do Walk in clients count in Metrics?**
Their payments do add to sales. What doesn't exist is their record: they don't show up in the retention rate or in the client types.

**Does a Walk in pay differently?**
No. The bill is charged the same way, with any of the methods ([Payment methods you can charge](/ayuda/transacciones/metodos-de-pago-aceptados)).
