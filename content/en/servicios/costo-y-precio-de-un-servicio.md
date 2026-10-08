---
id: servicios/costo-y-precio-de-un-servicio
title: "Service cost and base price"
description: "The difference between the Service cost and the Base price, where you see them, which one the client pays and how the cost can be deducted before commission."
section: servicios
order: 30
group: "How it works"
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [service cost, base price, service price, how much to charge, margin, profit per service, supplies, service value, deduct service cost, commission, list price, price per barber, how much does a haircut cost me]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-equipo, servicios/precio-para-clientes-nuevos-y-de-lealtad, configuracion/comisiones-que-se-deduce, nomina/como-funciona-la-nomina, equipo/ficha-de-un-barbero-perfil]
status: draft
updated: 2026-09-25
---

# Service cost and base price

**In short:** the **Base price** is what you charge the client. The **Service cost** is what it costs you to do it. The client only sees the price; the cost is your own figure, and it can be deducted before the barber's commission is calculated.

## Where they are

Both fields are in a service's **General** tab, when you create or edit it. **Base price** is required; **Service cost** is optional.

![The General tab of Create Service with the Service cost and Base price fields](/assets/es/servicios/crear-un-servicio/general.png)

| Field | Required | What it is |
|---|---|---|
| **Service cost** | No | What it costs you to do the service: the wax, the dye, the blade. The client doesn't see it. |
| **Base price** | Yes | What you charge. It's the price shown in the service list, in the calendar and in online booking. |

## The base price is the starting point

The **Base price** is the list price. From there you can fine-tune:

- **By barber:** in the **Team** tab, each barber can have their own **Service price**. If it's empty, they charge the base price. See [Create a service: who does it](/ayuda/servicios/crear-un-servicio-equipo).
- **By type of client:** also per barber, a **New client price** and a **Loyalty price (visit frequency)**. See [New client price and loyalty price](/ayuda/servicios/precio-para-clientes-nuevos-y-de-lealtad).

That's why, when booking, the panel shows the price with “& UP”: the final price depends on the barber and the client.

In **View service**, the **Data** block shows the **Amount** (the base price, for example $30.00) and the **Service length (minutes)**.

## What the cost is for

The cost doesn't change what you charge. It's useful for your books and for commission: in **Settings › Commissions** there's a **Deduct service cost** switch, which subtracts the cost before the barber's commission is calculated. With it on, the commission is calculated on what's left after subtracting the cost; with it off, on the price. See [Commissions: what gets deducted](/ayuda/configuracion/comisiones-que-se-deduce) and [How payroll works](/ayuda/nomina/como-funciona-la-nomina).

> [!NOTE]
> The help text that goes with the **Service cost** field and the exact commission formula with **Deduct service cost** haven't been checked yet. They will be completed with the team.

## Example

“Classic haircut”: **Base price** 30, **Service cost** 2 (supplies). Carlos has a **Service price** of 35 in the Team tab. A client who books with Carlos pays 35; one who books with a barber with no price of their own pays 30. The cost of 2 only shows up in your books.

## Frequently asked questions

**Does the client see the cost?**
No. The client sees the price. The cost is your own figure.

**What happens if I leave the cost empty?**
Nothing changes for the client. If you have **Deduct service cost** turned on, there will be nothing to subtract.

**Where do I change the price of a service that already exists?**
In the list, go to **Actions › Edit**, **General** tab. See [Edit a service](/ayuda/servicios/editar-un-servicio).
