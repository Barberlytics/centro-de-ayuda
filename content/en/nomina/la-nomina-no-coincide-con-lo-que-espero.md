---
id: nomina/la-nomina-no-coincide-con-lo-que-espero
title: "Payroll doesn't match what I expect"
description: "A list of things to check when a barber's net pay doesn't add up: range, location, tab, appointments still to collect, deductions and the barber's own prices."
section: nomina
order: 120
group: "If something doesn't add up"
roles: [owner, admin]
screens: [/payroll]
keywords: [payroll doesn't add up, commission calculated wrong, appointment missing from payroll, wrong net pay, doesn't match, missing money, barber complains, to collect, deductions, barber's own prices, check payroll]
related: [nomina/como-funciona-la-nomina, nomina/como-se-calcula-una-comision, nomina/mi-pago-neto-sale-negativo, transacciones/una-cuenta-quedo-por-cobrar, equipo/ficha-de-un-barbero-servicios]
status: review
updated: 2026-09-25
---

# Payroll doesn't match what I expect

**In short:** it's almost always one of six things: the date range, the location, the tab, an appointment still to collect, a deduction turned on in **Settings › Commissions** or a barber's own price. Check them in that order.

## What to check first

1. **The date range.** In **Filters**, look at the text in the middle (“01 SEP - 15 SEP · 15 Days”). If the period is cut short or is the previous one, the numbers won't be what you expect.
2. **The location.** Each row only adds up what was done at the selected location. If Carlos works at two, check both.
3. **The tab.** A rent barber isn't under **Commission barber**, and one with **Compensation type › Salary** only shows up under **Salary barber**.
4. **Appointments still to collect.** Open **Transactions**, set the same range and **Bill status › To collect**. Anything still there doesn't count in payroll ([A bill ended up uncollected](/ayuda/transacciones/una-cuenta-quedo-por-cobrar)).
5. **The deductions.** In **Settings › Commissions**, see whether **Deduct discounts**, **Deduct taxes**, **Deduct service cost** or **Deduct product cost** are on. Each one lowers the base the percentage is applied to.
6. **The barber's percentages and prices.** In their record, **Compensation** has five percentages by client type, and **Services** can have a different **Split commission** and **Extra commission** for each service ([A barber's record: own services and prices](/ayuda/equipo/ficha-de-un-barbero-servicios)).

> [!TIP]
> Compare a single appointment: find it in **Transactions**, look at its **Total** and its **Method**, and check which of the five percentages applied to that client (new, returning, walk-in, no preference).

## If a rent barber comes out negative

That's not a calculation error. [My net pay is negative](/ayuda/nomina/mi-pago-neto-sale-negativo) explains it.

## Frequently asked questions

**I charged an appointment from the last pay period today and I don't know where it lands.**
Whether the date that counts is the appointment's or the payment's isn't confirmed. Check both pay periods with the **‹ ›** arrows before you raise it.

**I'm going to change Carlos's percentage. Does it affect what's already settled?**
That's not confirmed. To be safe, download the closed period's payroll before changing his record ([Download payroll](/ayuda/nomina/descargar-la-nomina)).

**It still doesn't add up.**
Download the payroll in Excel and write to support with the barber's name, the range and the appointment that doesn't match.
