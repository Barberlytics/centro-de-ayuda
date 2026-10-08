---
id: configuracion/notificaciones-de-productos
title: "Product and combo alerts"
description: "The alerts in the Products group of the Notification center: low stock, sold-out products, the same for combos, and product imports."
section: configuracion
order: 190
group: "Notifications"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [product alerts, product notifications, low stock, sold out, low inventory, ran out of a product, combos, product import, restock products, inventory alert, email, push, stock alert]
related: [configuracion/centro-de-notificaciones-como-funciona, productos/inventario-y-unidades, servicios/crear-un-combo, productos/la-lista-de-productos]
status: review
updated: 2026-09-25
---

# Product and combo alerts

**In short:** the **Products** group in the Notification center alerts you when a product or a combo is running low or sells out, and when a product import finishes or fails. Each alert can be sent by **Email**, by **Push** or both.

## Where it is

**Settings › Notifications › Notification center**. The card says: “Review notifications sent to clients and barbers about appointments.” Pick the role's tab and look for the **Products** group.

![The Notification center with the tabs by role and the alerts with their Email and Push switches](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## The alerts

| Block | Alert, exactly as on the screen | Channels |
|---|---|---|
| **Quantities** | “When a product is running low” | Email · Push |
| **Quantities** | “When a product has sold out” | Email · Push |
| **Combos** | “When a product is running low” | Email · Push |
| **Combos** | “When a product has sold out” | Email · Push |
| **Import** | “When one of your own client imports fails afterward” | Email · Push |
| **Import** | “When the import process finishes successfully” | Email · Push |

The units you have of each product are kept in its record. See [Inventory and units](/ayuda/productos/inventario-y-unidades).

To turn an alert on or off and save, see [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Frequently asked questions

**How few units counts as “low”?**
The screen doesn't say. Whether that limit can be changed isn't documented yet.

**Who should get these alerts?**
Whoever restocks the inventory. Turn them on in that role's tab, for example **Location administrator**. See [Which alerts each role gets](/ayuda/configuracion/notificaciones-por-rol).

**Does a combo have units?**
A combo bundles products or services. The combo alert goes off when something it includes is running out. See [Create a combo](/ayuda/servicios/crear-un-combo).
