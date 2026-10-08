---
id: transacciones/metodos-de-pago-aceptados
title: "Payment methods you can charge"
description: "The four checkout methods (cash, card, payment link and split payment), what each one needs in Settings and how each payment shows up in Transactions' Method column."
section: transacciones
order: 50
group: "How to read Transactions"
roles: [owner, admin]
screens: [/transactions, /devices, /payment-integration]
keywords: [payment methods, cash, card, credit, debit, card reader, terminal, payment link, split payment, stripe, payment devices, payments integration, method column, how to charge, ways to pay]
related: [calendario/cobrar-una-cita, calendario/cobrar-con-propina, configuracion/dispositivos-de-pago, configuracion/integracion-de-pagos-con-stripe, configuracion/tarifa-por-uso-de-tarjeta, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Payment methods you can charge

**In short:** at an appointment's checkout you choose between **Cash**, **Credit/Debit**, **Payment link** and **Split payment**. Cash needs nothing; card needs a device in **Settings › Payment devices**; the payment link needs the **Payments integration** with Stripe. In **Transactions**, the **Method** column says which one was used.

![The Charge screen with the four payment methods and the summary on the right](/assets/es/calendario/cobrar-una-cita/checkout.png)

## The four methods

| Method | What it is | What it needs |
|---|---|---|
| **Cash** | The client pays at the register | Nothing |
| **Credit/Debit** | The client taps or swipes their card on your terminal | A registered device. When you choose it, the app asks “Choose a device”; if there isn't one, **Add device** |
| **Payment link** | You send them a link and they pay from their phone | The **Payments integration** with Stripe in Settings |
| **Split payment** | One part with one method and another part with another | Whatever each part needs |

With **Payment link** and **Split payment**, the app asks for the barber's tip first ([Charge with a tip](/ayuda/calendario/cobrar-con-propina)). The full steps are in [Charge an appointment](/ayuda/calendario/cobrar-una-cita).

## What to set up beforehand

- **Settings › Payment devices** (`/devices`): the list of terminals and the **Add device** button ([Payment devices](/ayuda/configuracion/dispositivos-de-pago)).
- **Settings › Payments integration** (`/payment-integration`): the connection with **Stripe**, with **Test connection** and **Save** ([Payments integration with Stripe](/ayuda/configuracion/integracion-de-pagos-con-stripe)).
- **Settings › Credit card fee**: if you want to charge a surcharge for paying by card ([Credit card fee](/ayuda/configuracion/tarifa-por-uso-de-tarjeta)).

## How it shows up in Transactions

The **Method** column shows the method the bill was charged with. “CASH” has been seen for cash, and “—” when the bill is still **TO COLLECT**.

> [!NOTE]
> What text **Method** shows for card, payment link and split payment hasn't been seen yet: in the test account there were only cash payments. A **Cash** payment also wasn't completed to see what the app confirms.

## Frequently asked questions

**Credit/Debit doesn't show up with any device.**
Register your terminal in **Settings › Payment devices** with **Add device**.

**Can I charge by bank transfer?**
There's no method by that name. Use **Cash** and note it on the appointment, or **Payment link** if you have Stripe.

**Where do I see how much came in through each method?**
In **Metrics › Business**, the **Payment distribution** block ([Payment distribution, refunds and discounts](/ayuda/metricas/distribucion-de-pagos-reembolsos-y-descuentos)). In **Transactions** you can sort the table by **Method**.
