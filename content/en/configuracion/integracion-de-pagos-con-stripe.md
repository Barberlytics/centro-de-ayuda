---
id: configuracion/integracion-de-pagos-con-stripe
title: "Payments integration with Stripe"
description: "How to connect your barbershop to Stripe to receive online payments: you pick a location and paste in your Stripe keys."
section: configuracion
order: 160
group: "Sales"
roles: [owner, admin]
screens: [/payment-integration]
keywords: [payments integration, stripe, connect stripe, online payments, internet payments, public key, secret key, test connection, payment link, charge online, payment gateway, per location, select a location, online card payments]
related: [calendario/cobrar-una-cita, configuracion/dispositivos-de-pago, agendamiento-online/que-es, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Payments integration with Stripe

**In short:** in **Settings › Payments integration** you connect your barbershop to Stripe, the gateway you use to receive online payments. It's set up per location: first you pick the location and then you paste in the keys Stripe gives you.

## Where it is

**Settings › Sales › Payments integration**. The card says: “Connect your barbershop to Stripe to receive online payments safely and quickly.” The screen adds: “Fill in the fields to set up the Stripe integration.”

![The Payments integration screen asking you to pick a location](/assets/es/configuracion/integracion-de-pagos-con-stripe/pantalla.png)

## Steps

1. When you open it, the app asks: “Please select a location to continue.” Pick the location under **By location**.
2. Fill in the fields with the keys from your Stripe account:

| Field | Required | What it is |
|---|---|---|
| **Test public key** | Yes | The public key Stripe gives you for testing. |
| **Test secret key** | Yes | The secret test key. Don't share it. |

3. Tap **Test connection** to check that the keys work.
4. Tap **Save**.

> [!IMPORTANT]
> Stripe keys are like a password. Don't paste them into messages or give them to anyone outside your barbershop.

> [!NOTE]
> The screen after you pick the location, what **Test connection** and **Save** show, and whether there are fields for the real (non-test) keys haven't been confirmed yet.

## Frequently asked questions

**What's the point of connecting Stripe?**
To charge online, for example with **Payment link** when charging an appointment. See [Charge an appointment (check out)](/ayuda/calendario/cobrar-una-cita).

**Do I need Stripe to charge with the card reader?**
No. The card reader is registered in **Settings › Payment devices**. See [Payment devices](/ayuda/configuracion/dispositivos-de-pago).

**Where do I get the keys?**
In your Stripe account, in the API keys section. If you don't have a Stripe account, create one first on their site.
