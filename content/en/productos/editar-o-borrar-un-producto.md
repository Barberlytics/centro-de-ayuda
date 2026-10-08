---
id: productos/editar-o-borrar-un-producto
title: "Edit or delete a product"
description: "How to view, edit and delete a product that already exists: the View product screen, the form with the General and Advanced tabs, the Save button and Actions › Delete."
section: productos
order: 90
group: "Create and edit"
roles: [owner, admin]
screens: [/products, /products/*]
keywords: [edit product, change a product's price, raise the price, delete product, remove product, I no longer sell this product, view product, modify a product, rename, change category, brand, distributor, save changes]
related: [productos/la-lista-de-productos, productos/crear-un-producto, productos/precio-de-compra-precio-de-venta-y-sku, productos/producto-publico-o-privado, sucursales/activar-productos-en-una-sucursal]
status: draft
updated: 2026-09-25
---

# Edit or delete a product

**In short:** in the product list, tap **Actions** on the product's row: **View** shows it, **Edit** opens the form with the **General** and **Advanced** tabs so you can change it and **Save**, and **Delete** removes it from the catalog. To stop selling it without deleting it, turn off **Availability for sale** or turn it off at the location.

## View a product

Tap **Actions › View**. **View product** opens, read-only, with the **Actions** button and the **General** and **Advanced** tabs.

![The View product screen with the General tab](/assets/es/productos/editar-o-borrar-un-producto/ver.png)

| Block | What it shows |
|---|---|
| **General** | Product name, Description, Category, Taxes, Purchase price (for example 30000.00), Sale price (for example 50000.00), SKU code (“--” if empty), Private/Public, Availability for sale and Photos. |
| **Advanced** | Brand and Distributor. |

## Edit a product

1. In the side menu, open **Services & Products** and tap **Products**. Go to the **Products** tab.
2. Find the product and, on its row, tap **Actions** › **Edit**.
3. Change what you need:

| What you want to change | Tab | Field |
|---|---|---|
| The name, category, taxes, prices, SKU, whether it's public, whether it's sold, the photos | **General** | The ones in [Create a product](/ayuda/productos/crear-un-producto) |
| The brand or the distributor | **Advanced** | **Brand**, **Distributor** |

   ![The Advanced tab of a product with Brand, Distributor and the Save button](/assets/es/productos/editar-o-borrar-un-producto/avanzado.png)
4. Tap **Save**.

> [!NOTE]
> What the app shows after **Save**, and whether a price change affects sales that were already charged, hasn't been checked yet. It will be completed with a test product.

## Delete a product

1. On the product's row, tap **Actions**.
   ![The Actions menu of a row with View, Edit and Delete](/assets/es/productos/la-lista-de-productos/acciones-fila.png)
2. Tap **Delete**.

> [!WARNING]
> Deleting applies to the whole barbershop, not just the location you have selected. If another location sells it, turn it off at yours with **Activate barbershop products** instead of deleting it.

> [!NOTE]
> What happens after **Delete** (whether it asks you to confirm, and what happens to its sales history in Metrics and in clients' records) hasn't been checked yet.

## Stop selling without deleting

| You want | What to do |
|---|---|
| Your team to stop selling it, at every location | **Edit**, **General** tab, turn off **Availability for sale**, **Save**. |
| One location to stop selling it | **Actions › Activate barbershop products** and turn off its switch ([Activate products in a location](/ayuda/sucursales/activar-productos-en-una-sucursal)). |
| Clients not to see it when booking online | **Edit**, **General** tab, set the switch to **Private**, **Save**. |

## Frequently asked questions

**The product ran out. Should I delete it?**
No. Turn off **Availability for sale** until it's back in stock. That way you keep its history and its prices.

**Can I change the sale price so it applies to just one location?**
No. The product has a single price for the whole barbershop.

**I deleted a product by mistake. Can I get it back?**
Whether that's possible hasn't been checked yet. The safest thing is to create it again with the same details and turn it on at each location.
