---
id: servicios/precio-para-clientes-nuevos-y-de-lealtad
title: "New client price and loyalty price"
description: "What a service's New client price and Loyalty price are, where you set them (per barber, in the Team tab or in the barber's record) and how they relate to commission."
section: servicios
order: 40
group: "How it works"
roles: [owner, admin]
screens: [/services, /services/*, /team/barbers/view/*]
keywords: [new client price, new client discount, loyalty price, price by visit frequency, price by type of client, first visit promotion, regular client discount, price per barber, split commission, extra commission, commission split, new client, returning client]
related: [servicios/crear-un-servicio-equipo, servicios/costo-y-precio-de-un-servicio, equipo/ficha-de-un-barbero-servicios, equipo/ficha-de-un-barbero-perfil, equipo/ficha-de-un-barbero-compensacion, nomina/como-funciona-la-nomina, clientes/tipos-de-cliente]
status: draft
updated: 2026-09-25
---

# New client price and loyalty price

**In short:** besides the **Base price**, each barber can charge a different price for a service depending on the client: a **New client price** for the first visit and a **Loyalty price (visit frequency)** for someone who comes back often. They're set per barber, in the service's **Team** tab or in the barber's record. Empty means they charge the service's price.

## Where you set them

There are two ways and they lead to the same data.

### From the service

In **Services**, open the service with **Actions › Edit** and go to the **Team** tab. The fields are on each barber's row.

![A service's Team tab with the price fields for each barber](/assets/es/servicios/crear-un-servicio-equipo/equipo.png)

### From the barber

In **Team**, open the barber's record with **Actions › View** and go to the **Services** tab. All the services are there, one under the other, with the same fields. It's the short way when you're adjusting one person. See [A barber's record: profile](/ayuda/equipo/ficha-de-un-barbero-perfil).

## The fields, one by one

The names change a little between the two screens. They're the same data.

| In the service (Team tab) | In the barber's record (Services tab) | What it is |
|---|---|---|
| **Service price** | **Service price** | What this barber charges for the service. Empty = the **Base price**. |
| **New client price** | **New client price** | What they charge a client who comes for the first time. Useful for a first-visit promotion. |
| **Loyalty price (visit frequency)** | **Loyalty price** | What they charge a client who comes back often. Useful for rewarding a loyal client. |
| **Service length (minutes)** | **Time** | How long this barber takes with the service. |
| **Commission split** | **Split commission** | How the commission for this service is split for this barber. |
| **Extra commission** | **Extra commission** | An additional commission for this service for this barber. |

None of them is required. Whatever you leave empty uses the catalog's value.

## Example

“Classic haircut”, **Base price** 30. For Carlos you set **New client price** 25 and **Loyalty price** 27. Laura comes for the first time with Carlos: 25. She comes back every two weeks: over time, 27. A client who books with another barber with no prices of their own: 30.

> [!NOTE]
> What the app counts as a “new” client and from what frequency the loyalty price applies, and how **Split commission** and **Extra commission** figure into payroll, haven't been checked yet. It will be completed with the team. The client types the app shows (New, Retained, Frequent, VIP) are explained in [Client types](/ayuda/clientes/tipos-de-cliente).

## How it relates to commission

A commission barber's commission also changes depending on the client: in their record, **Compensation** tab, there's a **Basic commission**, a **Returning client commission**, a **Walk-in client commission**, a **No-preference client commission** and a **New client commission**. The price by type of client and the commission by type of client are two different settings: one decides what the client pays; the other, what the barber takes home. See [How payroll works](/ayuda/nomina/como-funciona-la-nomina).

## Frequently asked questions

**Can I set a new client price for the whole barbershop at once?**
The fields are per barber. For it to apply to everyone, fill it in on each barber's row (or in each one's record).

**Does the client see these prices when booking online?**
The price they see depends on the barber they choose and on their history. When booking from the calendar, the panel shows it as “$30.00 & UP”.

**Where do I change the commission, not the price?**
In the barber's record, **Compensation** tab (commission) or **Payments** (rent). See [How payroll works](/ayuda/nomina/como-funciona-la-nomina).
