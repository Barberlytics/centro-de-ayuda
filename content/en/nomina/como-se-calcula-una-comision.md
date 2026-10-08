---
id: nomina/como-se-calcula-una-comision
title: "How a commission is calculated"
description: "The pieces Barberlytics uses for a barber's commission: the five percentages by client type in their record, the product commission and what gets subtracted first according to Settings › Commissions."
section: nomina
order: 30
group: "How it works"
roles: [owner, admin]
screens: [/payroll, /team-commission]
keywords: [how commission is calculated, commission percentage, basic commission, returning client, walk-in client, no preference, new clients, deduct discounts, deduct taxes, service cost, product cost, product commission, how much does the barber get]
related: [nomina/nomina-barberos-por-comision, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-servicios, configuracion/comisiones-que-se-deduce, nomina/la-nomina-no-coincide-con-lo-que-espero, calendario/cliente-sin-cita-previa]
status: draft
updated: 2026-09-25
---

# How a commission is calculated

**In short:** a barber's commission comes from three things you set up: the percentage they get based on the client type (in their record, **Compensation**), the percentage on products, and what's subtracted from the price before that percentage is applied (**Settings › Commissions**). You see the result in **Payroll › Commission barber**.

## 1. The percentage based on the client

In **Team**, the barber's record, **Compensation › Service** tab, there are five percentages:

![A commission barber's Compensation tab with the five service percentages](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

| Field | When it applies |
|---|---|
| **Basic commission** | The barber's general percentage |
| **Returning client commission** | When they serve a client who has been in before |
| **Walk-in client commission** | When the client showed up without an appointment (the **Walk-in client** switch when creating it; see [A client who walks in without an appointment](/ayuda/calendario/cliente-sin-cita-previa)) |
| **No-preference client commission** | When the client didn't ask for a specific barber |
| **New client commission** | When it's the client's first visit |

The app says the **Commission logic** is “A fixed percentage of the service.” When editing, the **Compensation type** can be **Commission**, **Scale commission** or **Salary**.

In addition, each service on the record's **Services** tab can have its own **Split commission** and **Extra commission** (“--” means it uses the service's value). [A barber's record: own services and prices](/ayuda/equipo/ficha-de-un-barbero-servicios) covers it.

## 2. The percentage on products

In **Compensation › Product**. If it isn't set up, the screen says “No product sales compensation has been set up” and the **Product commission** column stays at $0.00.

## 3. What gets subtracted first

In **Settings › Commissions** there are four switches. Each one subtracts something from the price before the percentage is applied:

| Switch | What it subtracts |
|---|---|
| **Deduct discounts** | The discount applied at checkout |
| **Deduct taxes** | The tax on the sale |
| **Deduct service cost** | The **Service cost** defined on the service ([A service's cost and price](/ayuda/servicios/costo-y-precio-de-un-servicio)) |
| **Deduct product cost** | The product's **Purchase price** |

With all four off, the percentage is applied to the full price.

> [!NOTE]
> The exact formula (in what order the deductions are subtracted, how the five percentages combine when a client is both new and a walk-in, and what **Scale commission** does) is still to be confirmed with the Barberlytics team. This article only describes the pieces you can see on screen.

## A simple example

Carlos has a **Basic commission** of 20% and all four switches in **Settings › Commissions** off. He charges $50,000 for a haircut. His **Service commission** in payroll is $10,000.

## Frequently asked questions

**I set Carlos to 20% and payroll shows $0.00.**
Check that the percentage is in **Basic commission** and not only in one of the other four fields, and that the appointment is **Collected** in **Transactions**.

**Does the tip count toward the commission?**
No: the tip is separate, in its own column ([Tips in payroll](/ayuda/nomina/propinas-en-la-nomina)).

**Can I have a different percentage for each service?**
Yes, with **Split commission** and **Extra commission** on the **Services** tab of the barber's record.
