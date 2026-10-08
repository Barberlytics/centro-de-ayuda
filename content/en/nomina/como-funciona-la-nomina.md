---
id: nomina/como-funciona-la-nomina
title: "How payroll works"
description: "What the Payroll screen shows: the three tabs based on how each barber is paid, the location and date filters, the All row and the Download button."
section: nomina
order: 10
group: "How it works"
roles: [owner, admin]
screens: [/payroll]
keywords: [payroll, settling up, how much do I pay each barber, paying barbers, pay period, commission barber, rent barber, salary barber, net pay, All row, team total, download payroll, payroll filters]
related: [nomina/nomina-barberos-por-comision, nomina/nomina-barberos-de-renta, nomina/nomina-barberos-por-salario, nomina/filtrar-la-nomina-por-fechas-y-sucursal, nomina/descargar-la-nomina, nomina/ciclo-de-pago, equipo/comision-o-renta]
status: review
updated: 2026-09-25
---

# How payroll works

**In short:** **Payroll** tells you how much each barber is owed for a period. It has one tab for each way of paying (**Commission barber**, **Rent barber** and **Salary barber**), **Location** and **Date range** filters, an **All** row with the team total and one row per barber that ends in **Net pay**. With **Download** you take it with you as CSV, Excel or PDF.

The screen says: “In this section you can track and control your barbershop.”

![The Payroll screen: the three tabs, the filter bar and the table of commission barbers](/assets/es/nomina/como-funciona-la-nomina/pantalla.png)

## What you see, top to bottom

1. **Download**, at the top right, with **CSV**, **Excel** and **PDF** ([Download payroll](/ayuda/nomina/descargar-la-nomina)).
2. The three tabs. Each barber is on just one, depending on how they're paid:

| Tab | Who it's for | What closes the row |
|---|---|---|
| **Commission barber** | Barbers who earn a percentage of what they sell | **Net pay** |
| **Rent barber** | Barbers who pay you a **Fixed rent** for their chair | **Net pay** (can come out negative) |
| **Salary barber** | Barbers with a fixed **Salary** plus commission on products | **Net pay** |

3. The **Filters** bar: **Location** and **Date range**, with the period and its **‹ ›** arrows beside it and the number of days (“15 Days”) ([Filter payroll](/ayuda/nomina/filtrar-la-nomina-por-fechas-y-sucursal)).
4. The table. The first row, **All**, adds up the whole team on that tab. Below it, one row per barber with their photo or initial.

## Where the numbers come from

- Sales come from the appointments and sales **charged** in the period ([Charge an appointment](/ayuda/calendario/cobrar-una-cita)). An appointment that's still **To collect** in **Transactions** isn't counted here.
- Each barber's percentages are in their record: **Compensation** for commission barbers ([A commission barber's record: compensation](/ayuda/equipo/ficha-de-un-barbero-compensacion)) and **Payments** for rent barbers ([A rent barber's record: payments](/ayuda/equipo/ficha-de-un-barbero-de-renta-pagos)).
- What gets subtracted before the commission is calculated is decided in **Settings › Commissions** ([How a commission is calculated](/ayuda/nomina/como-se-calcula-una-comision)).
- How often you pay and which day the period starts are in **Settings › Payroll** ([The pay cycle](/ayuda/nomina/ciclo-de-pago)).

> [!TIP]
> Before you pay, open **Transactions** with **Bill status › To collect** and the same range. Anything still uncharged doesn't count in payroll.

## Frequently asked questions

**How much do I pay Carlos this pay period?**
Open the tab for his type, check the **Date range** and look at his **Net pay** column.

**Why don't I see a barber?**
They may be on another tab (they're a rent barber and you're on commission), at another location, or inactive at the selected location.

**Who sees payroll?**
The owner and the location admin. Barbers and receptionists don't have **Payroll** in their menu ([Which menu sections each role sees](/ayuda/roles-y-permisos/que-ve-cada-rol-en-el-menu)).
