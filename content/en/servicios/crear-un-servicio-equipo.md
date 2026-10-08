---
id: servicios/crear-un-servicio-equipo
title: "Create a service: who does it"
description: "A service's Team tab: choosing which barbers do it and, for each one, their price, the new client price, the loyalty price, the length and the commission."
section: servicios
order: 70
group: "Create and edit"
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [team tab, which barber does the service, assign service to a barber, price per barber, service price, new client price, loyalty price, length per barber, commission split, extra commission, select all, a barber doesn't offer this service]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-avanzado, servicios/precio-para-clientes-nuevos-y-de-lealtad, servicios/costo-y-precio-de-un-servicio, equipo/ficha-de-un-barbero-servicios, equipo/ficha-de-un-barbero-perfil]
status: draft
updated: 2026-09-25
---

# Create a service: who does it

**In short:** in the **Team** tab you check which barbers do the service and, for each one, you can change the price, the new client price, the loyalty price, the length and the commission. If you leave a field empty, the service's value applies.

## Steps

1. Complete the **General** tab and tap **Continue** ([Create a service: general details](/ayuda/servicios/crear-un-servicio)). The **Team** tab becomes available.
   ![The Team tab with the Select all checkbox and one row per barber with their fields](/assets/es/servicios/crear-un-servicio-equipo/equipo.png)
2. Check the box for each barber who does this service. To check them all, use **Select all**.
3. On each barber's row, leave the fields empty if they charge the service's price, or type what changes for them.
4. Tap **Save** (or **Continue** to go to **Advanced**).

## Each barber's fields

| Field | Required | What it is |
|---|---|---|
| Checkbox | — | If checked, the barber does this service and shows up when booking it. |
| **Base price** | — | The service's price. Here it's fixed: you change it in the **General** tab. |
| **Service price** | No | What this barber charges for the service, if it differs from the base price. For example, Carlos charges 35 for the classic haircut and the base price is 30. |
| **New client price** | No | What this barber charges a client who comes for the first time. |
| **Loyalty price (visit frequency)** | No | What they charge a client who comes back often. |
| **Service length (minutes)** | No | How long this barber takes, if it differs from the service's length. |
| **Commission split** | No | How the commission for this service is split for this barber. |
| **Extra commission** | No | An additional commission for this service for this barber. |

[New client price and loyalty price](/ayuda/servicios/precio-para-clientes-nuevos-y-de-lealtad) explains the prices by type of client.

> [!NOTE]
> This tab was read from **Edit** on a service that already existed. What happens when you tap **Save** and how the commission is calculated with **Commission split** and **Extra commission** haven't been checked yet. It will be completed with a test service and with the team.

## The same thing, seen from the barber

This same data appears in each barber's record, in the **Services** tab: for each service, **Service price**, **New client price**, **Loyalty price**, **Time**, **Split commission** and **Extra commission**. Empty means it uses the catalog's value. If you'd rather adjust all of one person's services at once, do it from there ([A barber's record: profile](/ayuda/equipo/ficha-de-un-barbero-perfil)).

## Frequently asked questions

**A barber doesn't show up when booking this service.**
Check that their box is checked in this tab and that the barber is turned on at the location ([Turn on team at a location](/ayuda/sucursales/activar-equipo-en-una-sucursal)).

**Do I have to fill in every field for each barber?**
No. Just the checkbox. Everything else left empty means “same as the service”.

**I hired someone new. Do I have to go service by service?**
You can do it from their record, **Services** tab, where you see all the services together.
