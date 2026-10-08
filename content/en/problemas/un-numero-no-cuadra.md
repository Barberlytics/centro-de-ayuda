---
id: problemas/un-numero-no-cuadra
title: "A number doesn't add up the way I expect"
description: "A checklist to run before you decide a number in Metrics, Transactions or Payroll is wrong: the location, the period, the tab, the filters, appointments still to collect and the profile you signed in with."
section: problemas
order: 40
roles: [owner, admin]
screens: [/, /payroll, /transactions]
keywords: [doesn't add up, wrong number, wrong figure, doesn't match, missing money, sales don't match, payroll doesn't match, transactions don't match, metrics wrong, compare, check figures, to be charged, wrong location, period]
related: [nomina/la-nomina-no-coincide-con-lo-que-espero, metricas/filtrar-por-sucursal-equipo-y-periodo, transacciones/filtrar-transacciones, transacciones/las-cinco-tarjetas-de-transacciones, sucursales/ver-todas-las-sucursales-a-la-vez, acceso-y-cuenta/tienes-dos-perfiles]
status: review
updated: 2026-09-25
---

# A number doesn't add up the way I expect

**In short:** almost always it's two screens looking at different things: another location, another period, another tab or a filter that was left on. Check these six things before you decide the number is wrong.

## What to check, in order

1. **The location.** At the top, the location's name decides what you see. **Metrics** and **Payroll** also have their own location filter. If you compare Metrics with **All locations** against Transactions on a single one, they won't match ([See all locations at once](/ayuda/sucursales/ver-todas-las-sucursales-a-la-vez)).
2. **The period.** Each screen has its own:
   - **Metrics**: **Today / Week / Month**, with arrows to move around ([Filter by location, team and period](/ayuda/metricas/filtrar-por-sucursal-equipo-y-periodo)).
   - **Transactions**: **FROM** and **TO**, by default from the 1st of the month to today.
   - **Payroll**: the **Date range**, by default the pay cycle (“01 SEP - 15 SEP · 15 Days”).
   ![The Metrics filters: location, team and period](/assets/es/metricas/filtrar-por-sucursal-equipo-y-periodo/filtros.png)
3. **The tab.** In **Payroll**, a rent barber isn't under **Commission barber**. In **Metrics**, sales are under **Business** and retention is under **Clients**.
4. **The filters.** In **Transactions**, **BILL STATUS** and **APPOINTMENT STATUS** may have been left on something other than **All**. Set them to **All** and tap **Apply** ([Filter Transactions](/ayuda/transacciones/filtrar-transacciones)). In **Metrics**, the **Whole team** filter may be set to a single barber.
5. **Appointments still to collect.** Anything still **TO COLLECT** in Transactions hasn't been collected: **BILLED** includes it, **COLLECTED** doesn't, and neither does Payroll ([The five cards in Transactions](/ayuda/transacciones/las-cinco-tarjetas-de-transacciones)).
   ![The Transactions screen with the five cards](/assets/es/transacciones/como-leer-transacciones/pantalla.png)
6. **The profile.** With the barber profile (**Barber comission**), Metrics shows only that person's figures: $120,000 versus the $10,260,490 for the whole team in the test account ([I have two profiles](/ayuda/acceso-y-cuenta/tienes-dos-perfiles)).

## Comparisons that do match

| Compare | With | Same location and same range |
|---|---|---|
| **Metrics › Business › Sales** | **Transactions › BILLED** | Yes |
| **Transactions › TIPS** | The **Tips** column in **Payroll** | Yes |
| **Payroll › All row › Service sales** | **Transactions**, **COLLECTED** accounts | Yes |

> [!NOTE]
> Whether these pairs match exactly (for example, whether Sales in Metrics includes what's still to collect or only what's been charged, and whether Payroll counts the appointment date or the payment date) is still to be confirmed with the team. Use them as a first check, not as final proof.

## If it's payroll

Follow the checklist in [Payroll doesn't match what I expect](/ayuda/nomina/la-nomina-no-coincide-con-lo-que-espero): range, location, tab, uncharged appointments, deductions from **Settings › Commissions**, and the barber's own percentages.

## If it still doesn't add up

Write to us with the screen, the location, the range, the figure you see and the one you expected, and an example appointment ([How to contact support](/ayuda/problemas/como-contactar-a-soporte)).

## Frequently asked questions

**Why don't a client's Completed, Canceled and Didn't attend add up to 100%?**
Because pending appointments aren't in any of the three.

**Transactions shows me fewer accounts than yesterday.**
Check the range: by default it starts on the 1st of the month. If the month changed, last month's accounts are no longer included.

**A client shows up as “Walk in.”**
It's an account for an unregistered client. It still counts in the cards ([Accounts for unregistered clients](/ayuda/transacciones/clientes-walk-in-en-transacciones)).
