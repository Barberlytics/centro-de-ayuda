---
id: calendario/cobrar-una-cita
title: "Charge an appointment (check out)"
description: "Charge from the appointment's details with Pay appointment or with the full checkout: payment methods (cash, card, payment link and split payment), tip and summary."
section: calendario
order: 180
group: "Charge and sell"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [charge, pay appointment, check out, checkout, payment, cash, card, credit, debit, payment link, split payment, tip, terminal, card reader, payment device, add product to the payment]
related: [calendario/abrir-una-cita, calendario/cobrar-con-propina, calendario/lista-de-cobros, calendario/estados-de-una-cita, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Charge an appointment (check out)

**In short:** open the appointment, tap **Pay appointment**, review the summary and charge. If you need to choose the payment method, add products or combine appointments, tap **Open full checkout**.

## Quick payment: Pay appointment

1. Tap the appointment's card on the calendar.
2. Under **NEXT STEP**, tap **Pay appointment** (it's also in **Actions › Charge**).
3. Review the **Summary**: the service, the client, the barber and the price.
   ![The payment panel: services, totals and the Pay appointment and Open full checkout buttons](/assets/es/calendario/cobrar-una-cita/pagar-cita.png)
4. If the client is taking something else, use **Add service** or **Add products**.
5. Review **Total services and products**, **Tip**, **Tax** and **Order total**.
6. Tap **Pay appointment**.

## Full payment: choose how they pay

1. In the payment panel, tap **Open full checkout**. The **Charge** screen opens.
   ![The Charge screen: actions at the top, payment methods and the summary on the right](/assets/es/calendario/cobrar-una-cita/checkout.png)
2. At the top you can **Add products**, **Add service**, **Combine appointments** (charge several appointments on one bill) and **Add client**.
3. Under **Payment methods**, choose one:

| Method | What it asks for next |
|---|---|
| **Cash** | Confirm the payment |
| **Credit/Debit** | “Choose a device”: the terminal that processes the payment. If you don't have one, **Add device** (also in **Settings › Payment devices**) |
| **Payment link** | The tip for the barber (**$10.00**, **$15.00**, **$20.00**, **No tip** or **Custom**) and then the link for the client |
| **Split payment** | The tip and then how it's split between methods |

4. On the right, the **Summary** and the **Order total** update with whatever you add.
5. Confirm the payment.

> [!NOTE]
> This article goes as far as you can read without actually charging. What the app shows when you confirm (receipt, status change, how it ends up in **Payment list › Paid**) and the details of **Cash**, **Combine appointments** and **Split payment** will be filled in with a test appointment.

## After charging

- The appointment moves to **Payment list › Paid** ([The payment list](/ayuda/calendario/lista-de-cobros)).
- The bill shows up in **Transactions** with the status **COLLECTED** and its payment method.
- The sale adds to **Metrics** (sales, revenue, payment breakdown).

## Frequently asked questions

**Can I charge without the client having gone through Check in and Seated?**
Yes. **Pay appointment** is available from the moment the appointment exists.

**How do I add a tip?**
At checkout, with **Payment link** or **Split payment** the app asks for it. See [Charge with a tip](/ayuda/calendario/cobrar-con-propina). The tip options are set in **Settings › Tips**.

**Where do I see what I charged today?**
In **Actions › Payment list**, **Paid** tab, or in **Transactions**.
