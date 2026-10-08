---
id: calendario/cobrar-con-propina
title: "Charge with a tip"
description: "Where you add the tip when charging an appointment: the Tip line in the summary and the Add tip screen with fixed amounts, No tip and Custom."
section: calendario
order: 190
group: "Charge and sell"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [tip, charge with tip, add tip, gratuity, tip for the barber, no tip, custom tip, tip amount, checkout, pay appointment, payment link, split payment, tips]
related: [calendario/cobrar-una-cita, calendario/aplicar-un-descuento, calendario/lista-de-cobros, configuracion/propinas-opciones-y-comportamiento, metricas/ticket-promedio-cancelacion-y-propinas, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Charge with a tip

**In short:** when you charge, the tip has its own line in the summary (**Tip**) and its own screen, “Add tip”, with suggested amounts, **No tip** and **Custom**. We saw it with **Payment link** and **Split payment**. With **Cash** it hasn't been confirmed.

## Steps

1. Open the appointment and, in **Summary**, tap **Pay appointment**. The “Summary” panel opens with **Services**, **Total services and products**, **Tip**, **Tax** and **Order total**.
   ![The Pay appointment panel with the lines for services, tip, tax and order total](/assets/es/calendario/cobrar-una-cita/pagar-cita.png)
2. Tap **Open full checkout**. The “Charge” screen opens. On the right, the **Summary** repeats with the **Order total**.
   ![The Charge screen with the payment methods and the summary on the right](/assets/es/calendario/cobrar-una-cita/checkout.png)
3. Under **Payment methods** (“Choose your payment method”), tap **Payment link** or **Split payment**.
4. “Add tip” appears: “Select the tip for the barber”, “For Carlos”, “Would you like to add a tip?”.
5. Choose an option:
   - **$10.00**, **$15.00** or **$20.00**. Each button shows the total you'd end up with for that tip.
   - **No tip**.
   - **Custom**, to type a different amount.
6. Continue with the payment. [Charge an appointment](/ayuda/calendario/cobrar-una-cita) explains how.

> [!NOTE]
> What happens after you choose the tip, and whether **Cash** and **Credit/Debit** show the same “Add tip” screen, hasn't been confirmed yet. We didn't open **Cash** because it would charge the appointment; **Credit/Debit** first asks you to choose a payment device.

## Where the tip shows up afterwards

- In **Transactions**, the **Tips** card adds up the tips for the period.
- In **Metrics › Business**, the tip percentage sits next to the average ticket. See [Average ticket, cancellation and tips](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).

## What the screen says

| Text | What it means |
|---|---|
| **Tip** (summary line) | What is added for the tip; it starts at zero |
| “Select the tip for the barber” · “For Carlos” | The tip goes to the appointment's barber |
| “Would you like to add a tip?” | The question on the “Add tip” screen |
| **No tip** | Continue without adding anything |
| **Custom** | Type an amount different from the suggested ones |

## Frequently asked questions

**Can I change the suggested amounts?**
The tip options are set in **Settings › Tips**. [Tips: options and behavior](/ayuda/configuracion/propinas-opciones-y-comportamiento) explains it.

**Can the barber receive tips?**
Only if **Can receive tips** is turned on in their record, **Options** tab.

**Is the tip taxed?**
In the summary, **Tip** and **Tax** are separate lines. How the tax is calculated is set in **Settings › Taxes**.
