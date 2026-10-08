---
id: configuracion/dispositivos-de-pago
title: "Payment devices"
description: "How to register the card readers you charge with: name, serial number, TPN and key, so you can pick them when charging with Credit/Debit."
section: configuracion
order: 80
group: "Account settings"
roles: [owner, admin]
screens: [/devices]
keywords: [payment devices, card reader, terminal, payment terminal, add device, device serial number, tpn, authentication key, charge by card, credit debit, choose a device, pos, card machine, connect card reader]
related: [calendario/cobrar-una-cita, configuracion/integracion-de-pagos-con-stripe, configuracion/tarifa-por-uso-de-tarjeta, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Payment devices

**In short:** in **Settings › Payment devices** you register the card readers you use to charge by card. When you charge an appointment with **Credit/Debit**, the app asks you to pick one of these devices.

## Where it is

**Settings › Account settings › Payment devices**. The card says: “Connect your system to the devices that let you process payments.” The screen explains: “Here you'll find the list of all the payment devices you have available.”

![The list of payment devices with the Add device button](/assets/es/configuracion/dispositivos-de-pago/pantalla.png)

## Add a device

1. Tap **Add device**.
   ![The panel for adding a device with the name, serial number, TPN and key](/assets/es/configuracion/dispositivos-de-pago/formulario.png)
2. Fill in the fields. The serial number, TPN and key come with the card reader or from whoever set it up for you.

| Field | Required | What it is |
|---|---|---|
| **Device name** | Yes | What you'll call it when charging, for example “Front desk reader”. |
| **Device serial number** | Yes | The machine's serial number. |
| **Device TPN** | Yes | The terminal number that identifies the card reader to the payment processor. |
| **Device authentication key** | No | The key the processor gives you to connect the card reader. |

3. Tap **Save**. To leave without registering anything, tap **Cancel**.

> [!NOTE]
> What the app shows when you tap **Save**, how a device is edited or deleted and which payment processors it accepts haven't been confirmed yet.

## Frequently asked questions

**Where is the device used?**
When you charge an appointment with **Open full checkout › Credit/Debit**, the app shows “Choose a device.” **Add device** is there too. See [Charge an appointment (check out)](/ayuda/calendario/cobrar-una-cita).

**Is this the same as the Stripe integration?**
No. The device is the barbershop's physical card reader. Stripe is for receiving online payments. See [Payments integration with Stripe](/ayuda/configuracion/integracion-de-pagos-con-stripe).

**I can't find my card reader's TPN.**
Ask whoever installed it or sold you the machine. It's a payment processor detail, not a Barberlytics one.
