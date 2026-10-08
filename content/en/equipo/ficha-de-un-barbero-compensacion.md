---
id: equipo/ficha-de-un-barbero-compensacion
title: "A commission barber's record: compensation"
description: "The Compensation tab of a commission barber: the five percentages by type of client, product compensation and how they're edited with the Compensation type."
section: equipo
order: 130
group: "A barber's record"
roles: [owner, admin]
screens: [/team/barbers/view/commission/*]
keywords: [compensation, barber commission, commission percentage, basic commission, returning client commission, walk-in client commission, no-preference commission, new client commission, product commission, compensation type, scale commission, salary, change commission]
related: [equipo/como-se-le-paga-a-un-barbero, equipo/comision-o-renta, equipo/ficha-de-un-barbero-servicios, equipo/editar-a-un-miembro-del-equipo, nomina/como-funciona-la-nomina, configuracion/comisiones-que-se-deduce]
status: draft
updated: 2026-09-25
---

# A commission barber's record: compensation

**In short:** the **Compensation** tab says how a commission barber gets paid. It has two parts, **Service** and **Product**. In **Service** there are five percentages, one per type of client. When you edit, you choose the **Compensation type\***: **Commission**, **Scale commission** or **Salary**.

## How to get there

1. Tap **Team** in the menu.
2. Under **Barbers**, **Commission barber** view, tap **Actions** › **View Commission barber** on the person's row.
3. Tap the **Compensation** tab.
   ![The Compensation tab in view mode, with the five service percentages](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

## What you see

Two buttons: **Service** and **Product**.

**Service**, as a percentage:

| Field | When it applies |
|---|---|
| **Basic commission** | The normal commission for a service. |
| **Returning client commission** | When the client has been in before. |
| **Walk-in client commission** | When the client came in without booking. |
| **No-preference client commission** | When the client didn't ask for a particular barber. |
| **New client commission** | When the client comes in for the first time. |

**Product**: if you haven't set anything up, it says “No product sales compensation has been set up.”

## How to edit it

1. In the list, tap **Actions** › **Edit Commission barber** and open **Compensation**.
   ![The Compensation tab in edit mode, with the Compensation type and the five fields](/assets/es/equipo/ficha-de-un-barbero-compensacion/editar.png)
2. The screen says: “Select and activate one form of compensation for services and another for products to continue.”
3. Choose the **Compensation type\***: **Commission**, **Scale commission** or **Salary**.
4. With **Commission**, the **Commission logic** says “A fixed percentage of the service.” and you fill in the five fields, in %.

   | Field | Required | What it is |
   |---|---|---|
   | **Compensation type\*** | Yes | **Commission**, **Scale commission** or **Salary**. |
   | **Basic commission\*** | Yes | Normal percentage per service. |
   | **Returning client commission** | No | Percentage when the client comes back. |
   | **Walk-in client commission** | No | Percentage when they come in without booking. |
   | **No-preference client commission** | No | Percentage when they didn't ask for a barber. |
   | **New client commission** | No | Percentage on the first visit. |

5. Do the same under **Product**.
6. Tap **Save**.

> [!NOTE]
> Which fields **Scale commission** and **Salary** have, how **Product** compensation is set up, and what happens when you tap **Save** hasn't been checked yet. It will be completed with a test barber.

## How it fits with everything else

- Before applying the percentage, the app can subtract discounts, taxes and costs according to **Settings › Commissions**. See [Commissions: what gets deducted](/ayuda/configuracion/comisiones-que-se-deduce).
- For individual services you can make exceptions with **Split commission** and **Extra commission**, in the **Services** tab.
- You see the result for each period in **Payroll**, **Commission barber** tab. See [How payroll works](/ayuda/nomina/como-funciona-la-nomina).

## Frequently asked questions

**Why are there five percentages and not one?**
So you can pay differently depending on who brought in the client. You can put the same number in all of them if you don't want to make a difference.

**Can I pay them a fixed salary?**
The **Compensation type** offers **Salary**, and **Payroll** has a **Salary barber** tab. Its fields aren't documented yet.

**What about commission on products?**
It goes under the **Product** button in this same tab. If you don't set it up, the app says it isn't configured.
