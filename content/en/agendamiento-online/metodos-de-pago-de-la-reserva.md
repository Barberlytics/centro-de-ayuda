---
id: agendamiento-online/metodos-de-pago-de-la-reserva
title: "How the client can pay for an appointment booked online"
description: "The accepted payment methods for online booking: payment at the shop and online payment with Stripe, and what you need to turn each one on."
section: agendamiento-online
order: 210
group: "Online booking settings"
roles: [owner, admin]
screens: [/online-booking]
keywords: [accepted payment methods, pay for the booking, online payment, pay at the shop, cash, stripe, charge in advance, pay when booking, card, online payment method]
related: [configuracion/integracion-de-pagos-con-stripe, configuracion/agendamiento-online-ajustes, agendamiento-online/confirmar-la-reserva]
status: draft
updated: 2026-09-30
---

# How the client can pay for an appointment booked online

**In short:** in **Settings › Online booking**, the “Accepted payment methods” block has two checkboxes: payment at the shop (bill icon) and **stripe** (online payment by card). Check the ones you accept and tap **Save**.

## Where it is

**Settings › Account settings › Online booking**, “Accepted payment methods” block: “Set the payment methods you'll accept for online bookings.”

![The Accepted payment methods block with the pay at the shop checkbox and the Stripe one](/assets/es/agendamiento-online/metodos-de-pago-de-la-reserva/bloque.png)

## The two options

| Checkbox | What it means for the client |
|---|---|
| Bill icon | They book and pay when they get to the barbershop. |
| **stripe** | They can pay online by card when booking. |

## Example

Mi Barbería wants new clients to leave the appointment paid, but without forcing anyone: it leaves both checkboxes checked. If it would rather charge everything at the shop, it unchecks **stripe** and taps **Save**.

> [!IMPORTANT]
> To charge with **stripe**, first connect your account in **Settings › Payments integration**. See [Payments integration with Stripe](/ayuda/configuracion/integracion-de-pagos-con-stripe).

> [!NOTE]
> What happens if you uncheck both boxes and how each option looks on the client's payment screen hasn't been checked yet.

## Frequently asked questions

**Does paying online take the appointment off the charge at the shop?**
It hasn't been checked. Review the appointment in the calendar before charging it.
