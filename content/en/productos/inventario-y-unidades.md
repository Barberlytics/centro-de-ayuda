---
id: productos/inventario-y-unidades
title: "Inventory: units and low-stock alerts"
description: "What inventory there is today in Barberlytics: the product has no stock field, but there are the units sold to each client, product sales in Metrics, and low-stock and sold-out alerts in the Notification center."
section: productos
order: 50
group: "How it works"
roles: [owner, admin]
screens: [/products]
keywords: [inventory, stock, how many units are left, units, low stock, sold out, the product ran out, inventory control, product restock, units sold, low-stock alert, product notifications, count]
related: [productos/la-lista-de-productos, productos/crear-un-producto, clientes/productos-de-un-cliente, metricas/ventas-por-servicio-y-de-productos, configuracion/centro-de-notificaciones-como-funciona, configuracion/notificaciones-de-productos]
status: draft
updated: 2026-09-25
---

# Inventory: units and low-stock alerts

**In short:** when you create or edit a product there's no field to type how many units you have, and the product list doesn't show stock. What does exist: the units you've sold to each client, **Product sales** in Metrics, and a “low stock” and “sold out” alert in the **Notification center**.

## What isn't there

In the product form ([Create a product](/ayuda/productos/crear-un-producto)) the fields are name, description, category, taxes, prices, SKU, the two switches, photos, brand and distributor. There's no stock field and no field for restocking. The list has no units column either.

![The product list, with no stock column](/assets/es/productos/la-lista-de-productos/productos.png)

## What is there

| What | Where | What it tells you |
|---|---|---|
| Units sold to each client | Client record, **Products** tab | Each product they bought and how many units, for example “Matte wax · 5 Units”. See [The products a client has bought](/ayuda/clientes/productos-de-un-cliente). |
| Total units sold | **Metrics › Business**, at the bottom: **Physical sales** and **Product sales** | How many units of each product went out in the period, for example “Matte wax 2 · Beard oil 1”. See [Sales by service, physical sales and product sales](/ayuda/metricas/ventas-por-servicio-y-de-productos). |
| Low-stock alert | **Settings › Notification center**, **Products** group | Low-stock and sold-out alerts, for products and combos, by email or push. See [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona). |

> [!NOTE]
> How the app knows how many units you have left in order to alert you about “low stock” or “sold out”, whether there's a screen where product restocks are entered, and at what number the alert goes off hasn't been checked yet. It will be completed with the team.

## In the meantime: how to keep count

- Look at **Product sales** in Metrics at the end of each week and subtract what was sold from what you bought.
- When a product runs out, turn off **Availability for sale** instead of deleting it, so your team doesn't sell it when you don't have it ([Edit or delete a product](/ayuda/productos/editar-o-borrar-un-producto)).
- Turn on the **Products** alert in the Notification center for the owner and the admin.

## Frequently asked questions

**Where do I enter how many units I bought?**
The product form doesn't have that field. Whether another screen exists for entering restocks hasn't been checked yet.

**Does the product list tell me how many are left?**
No. It shows name, category and price. See [The product list](/ayuda/productos/la-lista-de-productos).

**I ran out of a wax. What do I do so it isn't sold?**
Edit the product and turn off **Availability for sale**. When it arrives, turn it back on.
