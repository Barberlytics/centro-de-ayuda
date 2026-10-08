---
id: equipo/como-se-le-paga-a-un-barbero
title: "How each type of barber gets paid"
description: "The three ways to pay a barber in Barberlytics: commission on services and products, rent with deductions, and salary; where each is set up and where you see the result."
section: equipo
order: 40
group: "How it works"
roles: [owner, admin]
screens: [/payroll, /team/barbers/view/*]
keywords: [how to pay a barber, barber pay, commission, rent, salary, fixed salary, percentage per service, product commission, rent base, deductions, compensation type, payroll, net pay, chair rental]
related: [equipo/comision-o-renta, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-de-renta-pagos, nomina/como-funciona-la-nomina, nomina/nomina-barberos-por-salario, configuracion/comisiones-que-se-deduce]
status: draft
updated: 2026-09-25
---

# How each type of barber gets paid

**In short:** there are three ways. **Commission**: a percentage of each service depending on the type of client, plus compensation for products. **Rent**: the barber pays a base amount and the barbershop deducts a percentage for the clients it sent them. **Salary**: a compensation type with its own tab in **Payroll**. Each way is set up in the barber's record and the result for each period appears in **Payroll**.

## Commission

It's set up in the commission barber's record, **Compensation** tab, with **Compensation type\*** set to **Commission**. The **Commission logic** says “A fixed percentage of the service.” Only **Basic commission\*** is required.

| Field | When it applies |
|---|---|
| **Basic commission** | The normal commission for a service. |
| **Returning client commission** | When the client has been in before. |
| **Walk-in client commission** | When the client came in without booking. |
| **No-preference client commission** | When the client didn't ask for a particular barber. |
| **New client commission** | When the client comes in for the first time. |

Compensation for selling a **Product** is separate, in the same tab.

![The Compensation tab of a commission barber with the five percentages](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

In **Payroll**, **Commission barber** tab, you see for each person **Services**, **Service sales**, **Product sales**, **Service commission**, **Product commission**, **Total commissions**, **Taxes**, **Tips** and **Net pay**.

It's explained in [A commission barber's record: compensation](/ayuda/equipo/ficha-de-un-barbero-compensacion).

## Rent

It's set up in the rent barber's record, **Payments** tab, under **Payment logic**.

| Field | What it is |
|---|---|
| **Rent base** | What the barber pays for their spot. In **Payroll** it's the **Fixed rent**. |
| **Walk-in appointment deduction** | Percentage deducted for each client who came in without an appointment. |
| **New client deduction** | Percentage for each client who comes in for the first time. |
| **No-preference appointment deduction** | Percentage for each client who didn't ask for a barber. |

![The Payments tab of a rent barber with the Payment logic](/assets/es/equipo/ficha-de-un-barbero-de-renta-pagos/ver.png)

In **Payroll**, **Rent barber** tab, you get the same columns as for commission plus **Fixed rent**. If the rent is more than what they generated, the **Net pay** comes out negative: that's what the barber owes the barbershop.

It's explained in [A rent barber's record: payments](/ayuda/equipo/ficha-de-un-barbero-de-renta-pagos).

## Salary

In the **Compensation** tab of a commission barber, the **Compensation type\*** offers **Salary**. In **Payroll** there's a **Salary barber** tab with **Product sales**, **Product commission**, **Taxes**, **Tips**, **Salary** and **Net pay**.

> [!NOTE]
> Which fields **Salary** asks for and what **Scale commission** (the third option of **Compensation type**) is hasn't been checked yet. It will be completed with a test barber.

## What gets subtracted first

In **Settings › Commissions** there are four switches that subtract before the commission is calculated: **Deduct discounts**, **Deduct taxes**, **Deduct service cost** and **Deduct product cost**. See [Commissions: what gets deducted](/ayuda/configuracion/comisiones-que-se-deduce).

## Where you see the result

In **Payroll**, with **Filters** for location and **Date range** (the pay period by default) and one tab per type. See [How payroll works](/ayuda/nomina/como-funciona-la-nomina).

## Frequently asked questions

**Which one is best for me?**
It depends on who brings in the client. See [Commission barber or rent barber: which to choose](/ayuda/equipo/comision-o-renta).

**Can I pay commission and a fixed amount at the same time?**
The **Compensation type** is just one per barber: **Commission**, **Scale commission** or **Salary**. What each one combines isn't documented yet.

**Do tips count toward the commission?**
In **Payroll**, **Tips** are a separate column and add to the **Net pay**. How they're split is explained in [How payroll works](/ayuda/nomina/como-funciona-la-nomina).
