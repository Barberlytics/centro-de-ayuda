---
id: configuracion/precios-moneda-y-calculo-de-impuestos
title: "Pricing: currency and whether the price includes taxes"
description: "Where you choose the currency for your services and products and whether the price you type already includes taxes or taxes are added at checkout."
section: configuracion
order: 150
group: "Sales"
roles: [owner, admin]
screens: [/sales-pricing]
keywords: [pricing, prices, currency, cop, usd, pesos, dollars, tax calculation, prices include taxes, prices don't include taxes, vat included, price with vat, price without vat, base price, total, platform currency, change currency]
related: [configuracion/impuestos, sucursales/que-es-propio-de-cada-sucursal, servicios/costo-y-precio-de-un-servicio, productos/precio-de-compra-precio-de-venta-y-sku, calendario/cobrar-una-cita]
status: draft
updated: 2026-09-25
---

# Pricing: currency and whether the price includes taxes

**In short:** in **Settings › Pricing** you choose the **Currency** for your services and products and how taxes are applied: whether the price you type is before tax and tax is added at checkout, or whether it already includes tax and the app separates it out.

## Where it is

**Settings › Sales › Pricing**. The card says: “Set whether the total price of products includes taxes and choose the currency for prices on your platform.”

![The Pricing screen with the currency and the two tax calculation options](/assets/es/configuracion/precios-moneda-y-calculo-de-impuestos/pantalla.png)

## Currency

Under “Currency for products and services,” the **Currency** field (required) sets the currency of your prices, for example COP.

## Tax calculation

The “Tax calculation” block says: “Choose how taxes are applied to prices in sales calculations and reports.” There are two options, with the example the screen itself gives:

| Option | How it's calculated | Example from the screen |
|---|---|---|
| **Prices don't include taxes** | The tax is added to the price at checkout. | “Price: $10. Tax (20%): $2. Total: $12.” |
| **Prices include taxes** | The price you type is already the total; the app separates out the tax. | “Total: $12 (includes $2 in taxes). Base price: $10.” |

## Steps

1. Pick the **Currency**.
2. Check **Prices don't include taxes** or **Prices include taxes**.
3. Tap **Save**.

> [!NOTE]
> What the app shows when you tap **Save** and what happens to prices you've already entered when you change the currency or the tax option haven't been confirmed yet.

## Frequently asked questions

**Which option do I choose?**
If at your barbershop the price on the board is what the client pays, choose **Prices include taxes**. If you add the tax to the price at the register, choose **Prices don't include taxes**. The taxes themselves are created in [Taxes](/ayuda/configuracion/impuestos).

**I have locations in different countries.**
Each location has its own **Currency** in **Settings › Locations › Edit**. See [What changes from one location to another](/ayuda/sucursales/que-es-propio-de-cada-sucursal). The one on this screen is the general one.

**Does changing the currency convert my prices?**
Nothing on the screen says it does. If you change currency, check the prices of your services and products.
