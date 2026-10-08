---
id: productos/vender-un-producto
title: "Sell a product"
description: "The two ways to sell a product from the calendar: a quick sale for single products and Add products when charging an appointment. What the product needs in order to show up."
section: productos
order: 100
group: "Sell"
roles: [owner, admin, recepcion, barbero]
screens: [/products, /calendar]
keywords: [sell a product, product sales, quick sale, create quick sale, add products, charge for a product, sell a wax, product on the appointment, counter sale, the product doesn't show up when selling, pay order, register, product commission]
related: [calendario/crear-una-venta-rapida, calendario/cobrar-una-cita, productos/producto-publico-o-privado, sucursales/activar-productos-en-una-sucursal, clientes/productos-de-un-cliente, metricas/ventas-por-servicio-y-de-productos]
status: draft
updated: 2026-09-25
---

# Sell a product

**In short:** products are sold from the **Calendar**, not from the **Products** screen. If the client has no appointment, tap **Actions › Create quick sale**. If they do have one, add it to the payment with **Add products**. For a product to show up, it needs **Availability for sale** turned on and it has to be turned on at the location.

## Before selling: make sure the product shows up

| Requirement | Where to check |
|---|---|
| The product exists in the catalog | **Products › Actions › Create product** ([Create a product](/ayuda/productos/crear-un-producto)) |
| **Availability for sale** turned on (“lets barbers sell these products”) | **Products › Actions › Edit**, **General** tab ([Public or private product and availability for sale](/ayuda/productos/producto-publico-o-privado)) |
| Turned on at the location where you sell | **Products › Actions › Activate barbershop products** ([Activate products in a location](/ayuda/sucursales/activar-productos-en-una-sucursal)) |

## Way 1: single products, no appointment

For someone who walks in to buy a wax and leaves.

1. In the **Calendar**, tap **Actions** and choose **Create quick sale**. **New sale** opens with the phrase “Choose your product”.
   ![The New sale panel with the product categories, the products and the total](/assets/es/calendario/venta-rapida/panel.png)
2. Your product categories are at the top. Tap one and then tap each product the client is taking. The **Total** at the bottom keeps adding up.
3. Tap **Pay order**.

[Create a quick product sale](/ayuda/calendario/crear-una-venta-rapida) covers it in detail.

## Way 2: together with an appointment

For the client who gets a cut with Carlos and takes the wax home. That way everything ends up on one bill.

1. Open the appointment and tap **Pay appointment** (or **Actions › Charge**).
2. In the payment panel, tap **Add products** and choose the product. If you need the full screen, tap **Open full checkout**: **Add products** is also at the top there.
   ![The Charge screen with Add products at the top and the summary on the right](/assets/es/calendario/cobrar-una-cita/checkout.png)
3. Review **Total services and products**, **Tax** and **Order total**.
4. Choose the payment method and confirm.

[Charge an appointment (check out)](/ayuda/calendario/cobrar-una-cita) covers it in detail.

> [!NOTE]
> What comes after **Pay order** and after confirming the payment (the payment methods for quick sale, which client it's assigned to, the receipt) hasn't been checked yet. It will be completed with a test sale.

## Where the sale ends up

- In the client's record, **Products** tab: each product and how many units they've taken ([The products a client has bought](/ayuda/clientes/productos-de-un-cliente)).
- In **Metrics › Business**: **Sales › Products**, **Revenue › Products** and **Product sales** ([Sales by service, physical sales and product sales](/ayuda/metricas/ventas-por-servicio-y-de-productos)).
- In the barber's payroll: **Product sales** and **Product commission**, according to the **Product** compensation in their record.

## Frequently asked questions

**The product doesn't show up when selling.**
Check the three requirements above: that it exists, that **Availability for sale** is turned on and that it's turned on at the location.

**Can I sell from the Products screen?**
No. That screen is the catalog. You sell from the calendar.

**Does the barber get commission for selling products?**
It depends on the **Product** compensation in their record (**Team › Actions › View**, **Compensation** tab). If it isn't set up, the record says “No product sales compensation has been set up”.
