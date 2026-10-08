---
id: productos/precio-de-compra-precio-de-venta-y-sku
title: "Purchase price, sale price and SKU code"
description: "What each of a product's three price and code fields is, which one the client sees, what the purchase price is for and how it can be deducted before commission."
section: productos
order: 30
group: "How it works"
roles: [owner, admin]
screens: [/products, /products/create, /products/*]
keywords: [purchase price, sale price, sku code, sku, barcode, product reference, margin, profit per product, how much do I make per product, product cost, deduct product cost, product commission, product price, how much to charge for a wax]
related: [productos/crear-un-producto, productos/la-lista-de-productos, productos/vender-un-producto, configuracion/comisiones-que-se-deduce, nomina/como-funciona-la-nomina, configuracion/impuestos]
status: draft
updated: 2026-09-25
---

# Purchase price, sale price and SKU code

**In short:** the **Sale price** is what you charge the client and it's required. The **Purchase price** is what it costs you and only you see it. The **SKU code** is the code you use to identify the product. All three are in the product's **General** tab.

## Where they are

When you create or edit a product, in the **General** tab, after **Taxes**.

![The General tab of Create product with Purchase price, Sale price and SKU code](/assets/es/productos/crear-un-producto/general.png)

| Field | Required | What it is |
|---|---|---|
| **Purchase price** | No | What you pay for each unit when you buy it. For example, 30000. The client doesn't see it and it doesn't show in the list. |
| **Sale price** | Yes | What you charge for each unit. For example, 50000. It's the **Price** in the list and the one that adds up in the sale. |
| **SKU code** | No | The product's code: the barcode, your distributor's or one of your own. It keeps you from mixing up two waxes from the same brand. If you leave it empty, **View product** shows “--”. |

## What the purchase price is for

It doesn't change what you charge. It's useful for two things:

- **Knowing how much you make.** With “Matte wax” sold at 50000 and bought at 30000, you keep 20000 per unit before taxes and commission.
- **The barber's commission.** In **Settings › Commissions** there's a **Deduct product cost** switch. With it on, the cost is subtracted before the commission on product sales is calculated; with it off, the commission is calculated on the price. See [Commissions: what gets deducted](/ayuda/configuracion/comisiones-que-se-deduce).

Each barber's product commission is set in their record, **Compensation › Product** tab, and it shows in payroll as **Product sales** and **Product commission** ([How payroll works](/ayuda/nomina/como-funciona-la-nomina)).

> [!NOTE]
> Whether the **Deduct product cost** switch uses exactly the **Purchase price** field, and the formula for the product commission, haven't been checked yet. They will be completed with the team.

## Taxes

The **Sale price** is the product's price. If the product has **Taxes** selected, they're added on the **Tax** line of the summary when you charge. See [Taxes](/ayuda/configuracion/impuestos).

## Frequently asked questions

**Can I sell the same product at different prices at two locations?**
The product has a single **Sale price** for the whole barbershop. If you need two prices, create two products.

**Do I have to enter the SKU?**
No. It's optional. It helps when you have several similar products or want to match your distributor's invoices.

**Where do I change the price of a product that already exists?**
In the list, go to **Actions › Edit**, **General** tab, and **Save**. See [Edit or delete a product](/ayuda/productos/editar-o-borrar-un-producto).
