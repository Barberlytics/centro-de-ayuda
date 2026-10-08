---
id: transacciones/devolver-un-pago
title: "Refund a payment"
description: "What's known today about refunds in Barberlytics: the Refunded status, the REFUNDED card and where refunds show up in Metrics."
section: transacciones
order: 90
group: "Search and review"
roles: [owner, admin]
screens: [/transactions]
keywords: [refund a payment, refund, return money, give money back, refunded bill, refunded card, client wants their money back, void a payment, I charged wrong]
related: [transacciones/estados-de-una-cuenta, transacciones/las-cinco-tarjetas-de-transacciones, metricas/distribucion-de-pagos-reembolsos-y-descuentos, calendario/cancelar-una-cita]
status: draft
updated: 2026-09-25
---

# Refund a payment

**In short:** Barberlytics records refunds: there's a **Refunded** status in the **BILL STATUS** filter, the **REFUNDED** card in **Transactions** and the **Refunds** indicator in **Metrics**. The button to make a refund hasn't been found in the app yet; while that's confirmed, this article covers what you can see.

## What exists today

| Where | What you see |
|---|---|
| **Transactions › BILL STATUS** | The **Refunded** option to filter refunded bills |
| **Transactions**, **REFUNDED** card | The total refunded in the range and how many bills (“$0.00 · 0 bills”) |
| **Metrics › Business** | The **Transactions, Refunds, Discounts** block ([Payment distribution, refunds and discounts](/ayuda/metricas/distribucion-de-pagos-reembolsos-y-descuentos)) |

> [!NOTE]
> During the reading session no refund button showed up: not on the **Transactions** row, nor in the appointment details, nor at checkout. There were no bills with **Refunded** status either. How a refund is made (from where, whether it asks for a reason, whether it can be partial, what happens to a payment made with a **Payment link** through Stripe) is still to be confirmed with the Barberlytics team.

## In the meantime, what to do if you charged wrong

1. Give the client their money back outside the app.
2. Note what happened on the appointment, **Notes › Add note** tab, so there's a record.
3. If the appointment shouldn't have existed, cancel it ([Cancel an appointment](/ayuda/calendario/cancelar-una-cita)). Keep in mind that the collected bill may still count in **COLLECTED**.

## Frequently asked questions

**Can I refund just part of it?**
That's not confirmed. It will be known once the flow is documented.

**The client paid with a payment link. Does the refund go through Stripe?**
That's not confirmed. If you have the Stripe **Payments integration**, check your Stripe dashboard too.

**Does a refund take the commission away from the barber?**
That's not confirmed. If you refund outside the app, payroll still counts the original payment.
