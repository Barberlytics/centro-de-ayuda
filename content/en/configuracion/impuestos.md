---
id: configuracion/impuestos
title: "Taxes: how to add them and how they apply"
description: "How to create a tax group with one or more taxes (for example VAT) so they are charged at the register and show up on receipts and reports."
section: configuracion
order: 120
group: "Sales"
roles: [owner, admin]
screens: [/sales-taxes]
keywords: [taxes, vat, sales tax, tax rate, tax group, add tax, tax name, tax at checkout, tax at the register, tax on the receipt, tax percentage, charge vat, taxes by location, tax, consumption tax]
related: [configuracion/precios-moneda-y-calculo-de-impuestos, configuracion/comisiones-que-se-deduce, calendario/cobrar-una-cita, transacciones/ver-el-detalle-de-una-cuenta, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Taxes: how to add them and how they apply

**In short:** in **Settings › Taxes** you create the taxes that are charged at the register, for example VAT. They're grouped: a group can have one or several taxes, and each one shows separately on the receipt and in reports. Whether the price already includes the tax is decided in **Settings › Pricing**.

## Where it is

**Settings › Sales › Taxes**. The card says: “Manage the tax rates applied to items sold at checkout.” The screen explains: “Manage the tax rates applied to items sold at the register. This is a general setting, but it can be adjusted for each location in the corresponding section.”

![The barbershop's list of taxes with the Add new button](/assets/es/configuracion/impuestos/pantalla.png)

Below is the list: “Here you'll find the list of all the taxes in your barbershop.”

## Add a tax

1. Tap **Add new** or **Add tax**.
2. The “Add a new tax group” panel opens. It says: “Combine several taxes into a group and each tax will be shown individually on sales receipts and reports.”
   ![The Add a new tax group panel with the group name, tax name and rate](/assets/es/configuracion/impuestos/formulario.png)
3. Fill in the fields:

| Field | Required | What it is |
|---|---|---|
| **Group name** | Yes | What the set is called, for example “Colombia taxes.” |
| **Tax name** | Yes | The name of the tax as it should appear on the receipt, for example “VAT.” |
| **Tax rate** | No | The percentage, for example 19. |

4. If the group has more than one tax, tap **Add tax** to add another line.
5. Tap **Save**. To leave without creating anything, tap **Cancel**.

> [!NOTE]
> What the app shows when you tap **Save**, how a tax is edited or deleted, how a group is assigned to a service or product and where this is adjusted per location haven't been confirmed yet.

## Where the tax shows up

When you charge an appointment, the summary shows the **Tax** line before the **Order total**. See [Charge an appointment (check out)](/ayuda/calendario/cobrar-una-cita). The sale is saved in **Transactions** with its details.

## Frequently asked questions

**My prices already include VAT.**
Then in **Settings › Pricing** choose **Prices include taxes**. That way the tax is separated out of the price instead of being added on top. See [Pricing: currency and whether the price includes taxes](/ayuda/configuracion/precios-moneda-y-calculo-de-impuestos).

**What's the point of grouping taxes?**
To charge two at once, for example a national tax and a local one, and have each one appear on its own line on the receipt.

**Does the tax affect the barber's commission?**
Only if **Deduct taxes** is turned on in **Settings › Commissions**. See [Commissions: what gets subtracted before calculating](/ayuda/configuracion/comisiones-que-se-deduce).
