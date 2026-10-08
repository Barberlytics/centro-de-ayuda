---
id: transacciones/las-cinco-tarjetas-de-transacciones
title: "Billed, collected, to collect, tips and refunded"
description: "What each of Transactions' five cards adds up and how to use them to close out the register for the day or the month."
section: transacciones
order: 20
group: "How to read Transactions"
roles: [owner, admin]
screens: [/transactions]
keywords: [billed, collected, to collect, tips, refunded, transactions cards, totals, cash register close, how much did I sell, how much came in, pending to collect, open bills, refunds]
related: [transacciones/como-leer-transacciones, transacciones/filtrar-transacciones, transacciones/estados-de-una-cuenta, transacciones/una-cuenta-quedo-por-cobrar, metricas/ventas-e-ingresos]
status: review
updated: 2026-09-25
---

# Billed, collected, to collect, tips and refunded

**In short:** the five **Transactions** cards summarize the range you have in the filters. **BILLED** is everything that was generated, **COLLECTED** is what's already come in, **TO COLLECT** is what's missing, **TIPS** is what barbers received and **REFUNDED** is what was given back.

![Transactions' five cards with their amounts and the number of bills](/assets/es/transacciones/las-cinco-tarjetas-de-transacciones/tarjetas.png)

## The five cards

| Card | What it shows |
|---|---|
| **BILLED** | The total of all the bills in the range and how many there are (“38 bills”) |
| **COLLECTED** | What's already been paid and how many bills are collected (“15 bills”) |
| **TO COLLECT** | What's still unpaid and how many bills are still open (“23 open bills”) |
| **TIPS** | The tips recorded in the range's payments |
| **REFUNDED** | What was given back and how many bills ended up **Refunded** |

On screen, **COLLECTED** plus **TO COLLECT** equals **BILLED**, both in money and in number of bills.

## For closing out the register

1. Set **FROM** and **TO** to the day you're closing and tap **Apply**.
2. **COLLECTED** is what should be there between cash, card and payment links.
3. If **TO COLLECT** isn't at $0.00, there are open bills: filter by **BILL STATUS › To collect** and close them ([A bill ended up uncollected](/ayuda/transacciones/una-cuenta-quedo-por-cobrar)).

> [!TIP]
> The cards follow the filters. If a number looks odd, check the header first: that's where the range you're viewing is.

## Frequently asked questions

**Is BILLED what I sold?**
It's what was generated in bills, whether collected or not. What actually came in is **COLLECTED**.

**Are tips included in COLLECTED?**
The **TIPS** card shows them separately. How they enter each barber's payroll is covered in [Tips in payroll](/ayuda/nomina/propinas-en-la-nomina).

**Where do I see these totals by month or by barber?**
In **Metrics**, **Business** tab, with its own filters ([Sales and revenue](/ayuda/metricas/ventas-e-ingresos)).
