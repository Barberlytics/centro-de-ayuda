---
id: roles-y-permisos/darle-a-recepcion-solo-lo-necesario
title: "Give reception only what it needs"
description: "What the Receptionist role comes with out of the box, what is worth turning off or on depending on how your front desk works, and where to do it."
section: roles-y-permisos
order: 140
group: "Change permissions"
roles: [owner]
screens: [/team-permission, /team/barbers/view/*]
keywords: [reception, receptionist, reception permissions, limit reception, front desk, secretary, so they can't see, only what they need, remove permissions, give permissions, view products, view metrics, delete clients]
related: [roles-y-permisos/permisos-recepcion, roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-un-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, empezar/guia-de-recepcion]
status: draft
updated: 2026-09-25
---

# Give reception only what it needs

**In short:** by default, reception handles appointments and clients, sees products and metrics, and doesn't see team, services, expenses or payroll. Start from that row and turn things off or on to fit your front desk. Each change is made in **Settings › Permissions** (for all new receptionists) or in the person's record (for them only).

## What it comes with out of the box

In **Settings › Permissions**, on the **Receptionist - front desk** tab:

![The Reception tab with its permissions grid](/assets/es/roles-y-permisos/tabla-de-permisos-por-rol/recepcion.png)

| Block | Feature | Default |
|---|---|---|
| Bookings and clients | Calendar | **Active** |
| | Book appointments | View, Create, Edit, Delete, Active |
| | Block calendar | View, Create, Edit, Delete, Active |
| | Clients | View, Create, Edit, Active (no Delete) |
| | Client information | **Active** |
| | Import clients | **Active** |
| | Client download | no |
| Team | the whole block | no |
| Metrics | Business key performance indicators | **Active** |
| Inventory | Products, Categories | **View** only |
| Services | the whole block | no |
| POS | Prices | **Active** |
| Business | Account settings | View, Edit |
| | Closing dates, Payroll, Permissions, Expenses | no |

The full row is in [Permissions table](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

## What to turn off

Only if your barbershop doesn't need it:

- **Metrics.** If you don't want the front desk to see sales and income, turn off **Active** on **Business key performance indicators**. Without that permission, the section stops showing in their menu.
- **Products and Categories.** If reception doesn't sell or look up products, turn off **View** on both **Inventory** rows.
- **Import clients.** If you don't want them to upload client lists, turn off its **Active**.
- **Block calendar.** If the owner decides on blocks, leave **View** and turn off **Create**, **Edit** and **Delete**.
- **Delete** on **Book appointments.** If you prefer appointments to be canceled but not deleted, turn off **Delete**.

## What to turn on

Only if your front desk does it:

- **Delete** on **Clients**, if reception cleans up duplicate clients.
- **Client download**, if they need to download the list.
- **Expenses** (View and Create), if they record the day's expenses. By default they don't have Expenses.

## Where to do it

| To change | Where |
|---|---|
| All the receptionists you create **from now on** | **Settings › Permissions › Receptionist - front desk** ([Change the default permissions of a role](/ayuda/roles-y-permisos/cambiar-los-permisos-de-un-rol)) |
| One specific receptionist, for example Laura | Their record in **Team**, **Actions › Edit** › **Permissions** tab ([Change a person's permissions](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona)) |

> [!NOTE]
> Confirmed by the owner: taking away **View** on a feature hides that section from the person's menu. What each switch does inside a screen (for example, whether turning off **Delete** on **Book appointments** removes the **Cancel** button or just a delete button) has not been checked with a reception account. It also isn't confirmed whether changing the role affects people who already have it.

## Frequently asked questions

**Can reception charge?**
By default it has **Book appointments** in full and **Pricing** active. Which payment buttons it sees with its account has not been checked on screen.

**I want them to see the team but not the pay.**
Turn on **View** on **Team › Team** and leave the **Barber payments section** off. In each barber's record there are **Compensation** or **Payments** tabs; what exactly that permission hides is still to confirm.

**Where do I find a receptionist's record in Team?**
The **Barbers** tab only lists barbers. The **Managers** tab (“Member list”) lists everyone else; in the test account only owners showed up there, so whether a receptionist appears under **Managers** is still to check.
