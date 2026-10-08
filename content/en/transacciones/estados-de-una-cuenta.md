---
id: transacciones/estados-de-una-cuenta
title: "Bill statuses: to collect, collected and refunded"
description: "What each bill status means in Transactions, how a bill moves from one to another and how it differs from the appointment status."
section: transacciones
order: 30
group: "How to read Transactions"
roles: [owner, admin]
screens: [/transactions]
keywords: [bill status, to collect, collected, refunded, payment pending, paid, open bill, closed bill, difference from appointment status, completed but not collected]
related: [transacciones/filtrar-transacciones, transacciones/una-cuenta-quedo-por-cobrar, transacciones/devolver-un-pago, calendario/estados-de-una-cita, calendario/cobrar-una-cita]
status: draft
updated: 2026-09-25
---

# Bill statuses: to collect, collected and refunded

**In short:** a bill has three possible statuses: **To collect** (the payment is missing), **Collected** (it's been paid) and **Refunded** (the money was given back). It's different from the appointment status, which says what step the client is on: **Scheduled**, **Arrived**, **In chair**, **Closed**, **Completed** or **Canceled**.

## The three statuses

| Status | In the table | What it means |
|---|---|---|
| **To collect** | **TO COLLECT** | The bill exists but hasn't been paid. **Collected** is $0.00 and **Method** is “—” |
| **Collected** | **COLLECTED** | It was paid. **Collected** equals the **Total** and **Method** says how (“CASH”…) |
| **Refunded** | — | The money was given back. It adds to the **REFUNDED** card |

## How it changes

1. The bill starts out **To collect** when the appointment, walk-in sale or quick sale is created.
2. It becomes **Collected** when you charge it from the appointment (**Pay appointment** or checkout) ([Charge an appointment](/ayuda/calendario/cobrar-una-cita)).
3. It becomes **Refunded** if the payment is given back ([Refund a payment](/ayuda/transacciones/devolver-un-pago)).

> [!NOTE]
> No bill with **Refunded** status was seen, nor how it looks in the **Status** column. What does exist is the **Refunded** option in the filter and the **REFUNDED** card. It will be filled in once there's a test refund.

## Bill and appointment don't go hand in hand

An appointment can be **Completed** and its bill still **To collect**: the client left without paying or nobody closed the payment. And a **Canceled** appointment can have a **Collected** bill that needs to be refunded. That's why **Transactions** has both filters ([Filter Transactions](/ayuda/transacciones/filtrar-transacciones)).

## Frequently asked questions

**Can a bill be partly collected?**
The **Collected** column shows what's been paid against the **Total**. With **Split payment** at checkout it's divided between methods; whether that leaves a partial bill in the table hasn't been seen.

**I canceled the appointment. Does the bill disappear?**
It wasn't seen disappearing. Filter by **APPOINTMENT STATUS › Canceled** to check what was left.

**Where do I see only the bills still to collect?**
In **BILL STATUS › To collect** and **Apply**, or in the calendar, **Actions › Payment list › To collect** ([The payment list](/ayuda/calendario/lista-de-cobros)).
