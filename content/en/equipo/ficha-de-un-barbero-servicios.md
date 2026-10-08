---
id: equipo/ficha-de-un-barbero-servicios
title: "A barber's record: own services and prices"
description: "What the Services tab of the record shows: for each service, the price, the new client price, the loyalty price, the time, the split commission and the extra commission for that barber."
section: equipo
order: 120
group: "A barber's record"
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [barber services, price per barber, own price, service price, new client price, loyalty price, service time, duration per barber, split commission, extra commission, which services a barber does, rate per barber]
related: [equipo/ficha-de-un-barbero-perfil, equipo/ficha-de-un-barbero-compensacion, servicios/crear-un-servicio-equipo, servicios/precio-para-clientes-nuevos-y-de-lealtad, servicios/costo-y-precio-de-un-servicio]
status: draft
updated: 2026-09-25
---

# A barber's record: own services and prices

**In short:** the record's **Services** tab lists each service with that barber's own values: **Service price**, **New client price**, **Loyalty price**, **Time**, **Split commission** and **Extra commission**. A “--” means they use the service's value from the catalog.

## How to get there

1. Tap **Team** in the menu.
2. Under **Barbers**, tap **Actions** › **View Commission barber** (or **View Rent barber**) on the person's row.
3. Tap the **Services** tab.
   ![The Services tab of a barber's record, with a service and its six values](/assets/es/equipo/ficha-de-un-barbero-servicios/ver.png)

## What's there for each service

| Field | What it is |
|---|---|
| **Service price** | What this barber charges for the service, for example “Classic haircut.” |
| **New client price** | What they charge a client coming in for the first time. |
| **Loyalty price** | What they charge a client who comes back often. |
| **Time** | How long it takes this barber to do it. |
| **Split commission** | How the commission for this service is split for this barber. |
| **Extra commission** | An additional commission for this service for this barber. |

When a value shows “--”, the barber uses what the service has in the catalog. So if Carlos does the “Classic haircut” at the normal price and in the normal time, his row shows “--” everywhere.

## Where these values are changed

The same six values are set on each service, in its **Team** tab, barber by barber. See [Create a service: the Team tab](/ayuda/servicios/crear-un-servicio-equipo). From the barber's record you see them all together for that person.

> [!NOTE]
> How these values are edited from the record (**Edit** › **Services**), and how **Split commission** and **Extra commission** enter into the payroll calculation, hasn't been checked yet. It will be completed with a test service and with the team.

## Frequently asked questions

**Can I charge differently depending on the barber?**
Yes. Each barber has their own **Service price** for each service. If it's “--”, they charge what's in the catalog.

**What's the difference between the loyalty price and the new client price?**
The new client price applies to someone coming in for the first time; the loyalty price, to someone who comes back often. See [New client price and loyalty price](/ayuda/servicios/precio-para-clientes-nuevos-y-de-lealtad).

**Do I decide here how much commission they get?**
The general commission goes in the **Compensation** tab. Here you only adjust exceptions per service with **Split commission** and **Extra commission**. See [Compensation](/ayuda/equipo/ficha-de-un-barbero-compensacion).
