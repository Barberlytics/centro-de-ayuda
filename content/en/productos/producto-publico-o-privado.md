---
id: productos/producto-publico-o-privado
title: "Public or private product and availability for sale"
description: "What a product's two switches do: Private / Public decides whether the client sees it when booking online; Availability for sale decides whether your team can sell it."
section: productos
order: 40
group: "How it works"
roles: [owner, admin]
screens: [/products, /products/create, /products/*]
keywords: [public product, private product, private or public, availability for sale, barbers can't sell, visible in the booking flow, hide a product, online booking, product doesn't show in quick sale, internal-use product, supplies]
related: [productos/crear-un-producto, productos/vender-un-producto, productos/editar-o-borrar-un-producto, sucursales/activar-productos-en-una-sucursal, calendario/crear-una-venta-rapida]
status: review
updated: 2026-09-25
---

# Public or private product and availability for sale

**In short:** a product has two switches. **Private / Public** decides whether the client sees it in the online booking flow. **Availability for sale** decides whether your team can sell it. They're independent: a product can be private and still be sold at the chair, or public and not be sold.

## Where they are

In the product's **General** tab, after the **SKU code**.

![The General tab of Create product with the Private / Public and Availability for sale switches](/assets/es/productos/crear-un-producto/general.png)

| Switch | What the screen says | What it does |
|---|---|---|
| **Private / Public** | “This option makes your product visible in the booking flow.” | When **Public**, the client sees the product when booking online. When **Private**, they don't. |
| **Availability for sale** | “This feature lets barbers sell these products.” | When on, the product shows up when selling: in **Create quick sale** and in **Add products** when charging. When off, it doesn't. |

In **View product** you can see both with their status.

## Four combinations

| Private / Public | Availability for sale | What it's for |
|---|---|---|
| Public | On | The usual: the client sees it when booking and your team sells it. |
| Private | On | It's sold at the barbershop, but not advertised online. |
| Public | Off | It's shown, but your team doesn't sell it from the app. |
| Private | Off | A product you record but don't sell, for example a supply. |

## What else is needed to sell

Turning on **Availability for sale** isn't enough. The product has to be turned on at the location ([Activate products in a location](/ayuda/sucursales/activar-productos-en-una-sucursal)). See [Sell a product](/ayuda/productos/vender-un-producto).

## Frequently asked questions

**Carlos doesn't see a product when making a quick sale.**
Check two things: that **Availability for sale** is turned on and that the product is turned on at that location.

**Does private mean it can't be sold?**
No. Private only removes it from online booking. If **Availability for sale** is on, your team still sells it.

**Can I change it later?**
Yes. In the list, go to **Actions › Edit**, **General** tab, and **Save**. See [Edit or delete a product](/ayuda/productos/editar-o-borrar-un-producto).
