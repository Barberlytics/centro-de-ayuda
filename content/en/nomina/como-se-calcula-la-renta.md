---
id: nomina/como-se-calcula-la-renta
title: "How a rent barber's pay is calculated"
description: "The pieces of a rent barber's pay: the Rent base, the three percentage deductions in their record and what they generated in the period."
section: nomina
order: 40
group: "How it works"
roles: [owner, admin]
screens: [/payroll]
keywords: [how rent is calculated, rent barber, rent base, fixed rent, chair rental, walk-in deduction, new client deduction, no-preference deduction, net pay, how much does the rent barber pay me]
related: [nomina/nomina-barberos-de-renta, equipo/ficha-de-un-barbero-de-renta-pagos, nomina/mi-pago-neto-sale-negativo, equipo/comision-o-renta]
status: draft
updated: 2026-09-25
---

# How a rent barber's pay is calculated

**In short:** a rent barber pays you a **Rent base** for their chair and, on top of that, gives up a percentage when the barbershop sends them clients: walk-ins, new clients or no-preference clients. Those four pieces are in their record, on the **Payments** tab. In **Payroll › Rent barber** they're set against what the barber generated in the period, and the result is the **Net pay**.

## The pieces, in the barber's record

In **Team**, the barber's row, **Actions › View Rent barber**, **Payments** tab, **Payment logic** block:

![A rent barber's Payments tab: Rent base and the three deductions](/assets/es/equipo/ficha-de-un-barbero-de-renta-pagos/ver.png)

| Field | What it is |
|---|---|
| **Rent base** | What they pay for the chair, in pesos. It's the **Fixed rent** in payroll |
| **Walk-in appointment deduction** | The percentage they give up when the client showed up without an appointment |
| **New client deduction** | The percentage they give up when it's the client's first visit |
| **No-preference appointment deduction** | The percentage they give up when the client didn't ask for a specific barber |

Below that is **Bank information** (**Bank name**, **Account number**) so you know where to pay them if the net comes out in their favor.

## What you see in payroll

The **Rent barber** tab shows what they generated (**Service sales**, **Product sales**), their commissions, their **Tips**, the **Fixed rent** and the **Net pay** ([Payroll for rent barbers](/ayuda/nomina/nomina-barberos-de-renta)). When the rent is higher than what they generated, the **Net pay** comes out negative: it's what the barber owes the barbershop ([My net pay is negative](/ayuda/nomina/mi-pago-neto-sale-negativo)).

> [!NOTE]
> The exact formula (what amount the three deductions are applied to, how the **Rent base** is split according to the pay cycle, and in what order tips come in) is still to be confirmed with the Barberlytics team. This article only describes the pieces you can see on screen.

## An example

Carlos has a **Rent base** of $50,000 and all three deductions at 10%. In the pay period he only served his regular clients and charged $30,000. His **Fixed rent** in payroll is $50,000 and the **Net pay** comes out negative: he owes the barbershop the difference.

## Frequently asked questions

**What's the difference from a commission barber?**
A commission barber gets a percentage of what they sell. A rent barber pays for the chair and keeps what they earn, minus the deductions. [Commission barber or rent barber: which to choose](/ayuda/equipo/comision-o-renta) compares them.

**Where do I change the rent?**
In **Team**, the barber's row, **Actions › Edit Rent barber**, **Payments** tab.

**Are the deductions required?**
No. You can leave them at 0.00% and charge only the **Rent base**.
