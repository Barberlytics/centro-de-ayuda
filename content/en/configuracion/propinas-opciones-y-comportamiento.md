---
id: configuracion/propinas-opciones-y-comportamiento
title: "Tips: options, default value and what the cashier sees"
description: "The tip percentages suggested at checkout, which one is selected by default and whether the cashier sees amounts, percentages or both."
section: configuracion
order: 140
group: "Sales"
roles: [owner, admin]
screens: [/sales-tips]
keywords: [tips, tip percentage, tip options, suggested tip, default tip, default selection, tip behavior, show at checkout, amount only, percentage only, amount and percentage, custom tip, gratuity, tip when charging]
related: [calendario/cobrar-con-propina, calendario/cobrar-una-cita, nomina/propinas-en-la-nomina, equipo/ficha-de-un-barbero-opciones, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Tips: options, default value and what the cashier sees

**In short:** in **Settings › Tips** you set three things: the tip percentages suggested at checkout, which one is selected by default and whether the person charging sees amounts, percentages or both tabs. The client can always type their own amount.

## Where it is

**Settings › Sales › Tips**. The card says: “Manage the tip settings for your business.” The screen explains: “The tip values are default options; clients can also enter a custom amount. This is a general setting, but it can be adjusted for each location in the corresponding section.”

![The Tips screen with the percentages, the default selection and the behavior](/assets/es/configuracion/propinas-opciones-y-comportamiento/pantalla.png)

## 1. The tip options

1. In each **Tip percentage**, type a percentage, for example 10, 15 and 20.
2. To add another, tap **Add new tip option**.
3. Tap **Save**.

## 2. The option selected by default

1. Under **Default selection**, pick the percentage that will come selected at checkout.
2. Tap **Save default selection**.

The screen warns: “If you added a new suggestion, it may not appear in the list until you click the “Save options” button.” In other words: save the options first and then pick the default.

## 3. What the cashier sees at checkout

The “Tip behavior” block says: “Sets which options the cashier sees at checkout. If you leave it unset, the current behavior stays.”

1. Under **Show at checkout**, pick an option:
   ![The Show at checkout dropdown with Not set, Amount only, Percentage only and Amount and percentage](/assets/es/configuracion/propinas-opciones-y-comportamiento/mostrar-en-el-cobro.png)

| Option | What the person charging sees |
|---|---|
| **Not set** | “When not set, checkout shows both tabs and opens the one for the tip type marked as default.” |
| **Amount only** | Only money amounts. |
| **Percentage only** | Only percentages. |
| **Amount and percentage** | Both tabs. |

2. Tap **Save behavior**.

> [!NOTE]
> What the app shows when you tap each save button, how a tip option is deleted and where this is adjusted per location haven't been confirmed yet.

## Frequently asked questions

**Where does the tip appear when charging?**
At checkout, with **Payment link** or **Split payment** the app asks for it. See [Charge with a tip](/ayuda/calendario/cobrar-con-propina).

**A barber doesn't want to receive tips.**
Turn it off in their record, **Options** tab, with **Can receive tips**. See [A barber's record: options](/ayuda/equipo/ficha-de-un-barbero-opciones).

**Do tips go into payroll?**
Yes, they show up in each barber's payroll. See [Tips in payroll](/ayuda/nomina/propinas-en-la-nomina).
