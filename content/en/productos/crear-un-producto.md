---
id: productos/crear-un-producto
title: "Create a product"
description: "Create a product step by step: the General tab (name, category, taxes, purchase price, sale price, SKU, public or private, availability for sale and photos) and the Advanced tab (brand and distributor)."
section: productos
order: 70
group: "Create and edit"
roles: [owner, admin]
screens: [/products, /products/create]
keywords: [create product, new product, add product, register a product, sale price, purchase price, sku code, category, taxes, product photos, brand, distributor, availability for sale, public product, continue]
related: [productos/crear-una-categoria-de-productos, productos/precio-de-compra-precio-de-venta-y-sku, productos/producto-publico-o-privado, productos/fotos-de-un-producto, productos/editar-o-borrar-un-producto, sucursales/activar-productos-en-una-sucursal]
status: draft
updated: 2026-09-25
---

# Create a product

**In short:** tap **Actions** › **Create product**, fill in the **General** tab (at least **Product name**, **Category** and **Sale price**), tap **Continue** and, in **Advanced**, add the **Brand** and the **Distributor** if you want. Finish with **Save**.

## Before you start

- Have the category the product goes in already created ([Create a product category](/ayuda/productos/crear-una-categoria-de-productos)).
- Have on hand the price you sell it for and, if you want to record it, the price you buy it for.

## Steps

1. In the side menu, open **Services & Products** and tap **Products**.
2. Tap **Actions** and choose **Create product**. The form opens with two tabs: **General** and **Advanced**.
   ![The General tab of Create product with all its fields, the two switches, Photos and the Continue button](/assets/es/productos/crear-un-producto/general.png)
3. If you want, upload a photo of the product.
4. Type the **Product name**, for example “Matte wax”.
5. Type a **Description** if you want.
6. Choose the **Category**.
7. Choose the **Taxes** that apply, if you have any set up.
8. Type the **Purchase price** (what it costs you) and the **Sale price** (what you charge). [Purchase price, sale price and SKU code](/ayuda/productos/precio-de-compra-precio-de-venta-y-sku) explains them.
9. If the product has a code, type the **SKU code**.
10. Decide whether it's **Private** or **Public**: “This option makes your product visible in the booking flow.”
11. Turn on **Availability for sale** if your team sells it: “This feature lets barbers sell these products.” [Public or private product and availability for sale](/ayuda/productos/producto-publico-o-privado) explains both switches.
12. Under **Photos - 0/5**, add up to five photos ([Photos of a product](/ayuda/productos/fotos-de-un-producto)).
13. Tap **Continue**.
14. In **Advanced**, type the **Brand** and the **Distributor** if you want, and tap **Save**.

## The General fields

| Field | Required | What it is |
|---|---|---|
| Photo | No | The main image of the product. |
| **Product name** | Yes | What it's called in the list and when selling. |
| **Description** | No | Free text. |
| **Category** | Yes | A selector with your product categories. |
| **Taxes** | No | A selector with the taxes set up in **Settings › Taxes**. |
| **Purchase price** | No | What the product costs you. The client doesn't see it. |
| **Sale price** | Yes | What you charge. It's the price in the list and in the sale. |
| **SKU code** | No | The product's code, to identify it. |
| **Private / Public** | — | Whether the product shows in the online booking flow. |
| **Availability for sale** | — | Whether barbers can sell the product. |
| **Photos - 0/5** | No | Up to five photos. |

## The Advanced fields

| Field | Required | What it is |
|---|---|---|
| **Brand** | No | The product's brand. |
| **Distributor** | No | Who you buy it from. |

> [!NOTE]
> The **Advanced** tab was read from **Edit** on a product that already existed. What the app shows after **Continue** and after **Save** hasn't been checked yet. It will be completed when a test product is created.

> [!IMPORTANT]
> Creating the product doesn't turn it on at every location. After creating it, turn it on at each location that sells it with **Actions › Activate barbershop products** ([Activate products in a location](/ayuda/sucursales/activar-productos-en-una-sucursal)). To show up in quick sale it also needs **Availability for sale** turned on.

## Frequently asked questions

**Where do I enter how many units I have?**
The form has no stock field. See [Inventory: units and low-stock alerts](/ayuda/productos/inventario-y-unidades).

**Can the client see the purchase price?**
No. Only the **Sale price** appears in the list and when selling.

**I created the product and Carlos doesn't see it when selling.**
Check that **Availability for sale** is turned on and that the product is turned on at the location.
