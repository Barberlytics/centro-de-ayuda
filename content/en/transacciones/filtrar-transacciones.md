---
id: transacciones/filtrar-transacciones
title: "Filter by dates, bill status and appointment status"
description: "How to use FROM, TO, BILL STATUS and APPOINTMENT STATUS to see only the bills you care about, and why you need to tap Apply."
section: transacciones
order: 60
group: "Search and review"
roles: [owner, admin]
screens: [/transactions]
keywords: [filter transactions, filters, from, to, date range, bill status, appointment status, to collect, collected, refunded, scheduled, arrived, in chair, closed, completed, canceled, apply, today's bills, this month's bills]
related: [transacciones/como-leer-transacciones, transacciones/estados-de-una-cuenta, transacciones/las-cinco-tarjetas-de-transacciones, transacciones/buscar-una-transaccion, calendario/estados-de-una-cita]
status: review
updated: 2026-09-25
---

# Filter by dates, bill status and appointment status

**In short:** in **Transactions** you pick a range with **FROM** and **TO**, a **BILL STATUS** and an **APPOINTMENT STATUS**, and tap **Apply**. The cards, the header and the table all change at once.

![Transactions' filter bar: FROM, TO, BILL STATUS, APPOINTMENT STATUS and Apply](/assets/es/transacciones/filtrar-transacciones/filtros.png)

## Steps

1. Tap **Transactions** in the menu.
2. In **FROM** and **TO**, pick the dates. By default they run from the 1st of the month through today.
3. In **BILL STATUS**, pick **All**, **To collect**, **Collected** or **Refunded**.
4. In **APPOINTMENT STATUS**, pick **All**, **Scheduled**, **Arrived**, **In chair**, **Closed**, **Completed** or **Canceled**.
5. Tap **Apply**.

The header confirms what you're looking at: “Mi Barbería · 01 SEP – 25 SEP 2026 · 38 bills.”

## Two different status filters

| Filter | What it's about | Options |
|---|---|---|
| **BILL STATUS** | The money: whether it was collected or not | **All** · **To collect** · **Collected** · **Refunded** |
| **APPOINTMENT STATUS** | The appointment: what step it's on | **All** · **Scheduled** · **Arrived** · **In chair** · **Closed** · **Completed** · **Canceled** |

They're explained in [Bill statuses](/ayuda/transacciones/estados-de-una-cuenta) and [The statuses of an appointment](/ayuda/calendario/estados-de-una-cita).

## Useful combinations

- **What's left to collect today**: **FROM** and **TO** on today, **BILL STATUS › To collect**.
- **Completed appointments nobody collected**: **APPOINTMENT STATUS › Completed** and **BILL STATUS › To collect**.
- **Bills for canceled appointments**: **APPOINTMENT STATUS › Canceled**, to see whether any ended up collected and need a refund.

## Frequently asked questions

**I changed a filter and nothing happened.**
Tap **Apply**. Filters don't apply on their own.

**Can I filter by barber or by payment method?**
There's no filter for that. Sort the table by **Served by** or by **Method** by tapping the column title.

**Is the filter saved when I leave?**
It wasn't seen being saved. When you come back, the range goes back to the current month.
