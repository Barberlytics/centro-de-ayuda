---
id: configuracion/comisiones-que-se-deduce
title: "Commissions: what gets subtracted before calculating"
description: "The four switches in Settings › Commissions: whether discounts, taxes, the cost of the service and the cost of the product are subtracted from the price before the barber's commission is calculated."
section: configuracion
order: 110
group: "Team"
roles: [owner, admin]
screens: [/team-commission]
keywords: [commissions, commission calculation, deduct discounts, deduct taxes, deduct service cost, deduct product cost, commission base, what gets subtracted, barber commission, commission on price, net commission, barber percentage, payroll]
related: [nomina/como-se-calcula-una-comision, equipo/ficha-de-un-barbero-compensacion, equipo/comision-o-renta, servicios/costo-y-precio-de-un-servicio, configuracion/impuestos, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Commissions: what gets subtracted before calculating

**In short:** each barber's percentage is set in their record. **Settings › Commissions** decides which amount that percentage is applied to: whether discounts, taxes, the cost of the service and the cost of the product are subtracted from the sale price first. There are four switches and they apply to the whole team.

## Where it is

**Settings › Team › Commissions**. The card says: “Set up how commissions are calculated for team members.” The screen adds: “This is a general setting, but it can be adjusted for each location in the corresponding section.”

![The Commissions screen with the four deduction switches](/assets/es/configuracion/comisiones-que-se-deduce/pantalla.png)

## The four switches

| Switch | What it does when it's on |
|---|---|
| **Deduct discounts** | “Deduct discounts from the sale price before calculating the commission.” The barber earns commission on what the client really paid, not on the list price. |
| **Deduct taxes** | Taxes are subtracted from the price before the commission is calculated. |
| **Deduct service cost** | The cost of the service (what it costs you to deliver it) is subtracted first. |
| **Deduct product cost** | The purchase cost of the product sold is subtracted first. |

## An example

A haircut costs $50.000, the client got a $5.000 discount and the barber has a 50% commission.

- With **Deduct discounts** off: commission on $50.000 → $25.000.
- With **Deduct discounts** on: commission on $45.000 → $22.500.

Every switch you turn on lowers the base and, with it, the commission.

## Steps

1. Turn each switch on or off.
2. Tap **Save**.

> [!NOTE]
> What the app shows when you tap **Save**, whether the change affects payrolls already calculated and where this is adjusted per location haven't been confirmed yet.

## Frequently asked questions

**Is this where I set each barber's percentage?**
No. The percentage goes in each person's record, **Compensation** tab. See [A barber's record: compensation](/ayuda/equipo/ficha-de-un-barbero-compensacion). Here you only decide which amount it's applied to.

**Where does the service cost come from?**
From each service, in **Services**. See [Cost and price of a service](/ayuda/servicios/costo-y-precio-de-un-servicio). If a service has no cost, there's nothing to subtract.

**Does this apply to rent barbers?**
Rent barbers don't earn commission: they pay a base amount and the barbershop deducts a percentage for certain appointments. See [Commission or rent](/ayuda/equipo/comision-o-renta).
