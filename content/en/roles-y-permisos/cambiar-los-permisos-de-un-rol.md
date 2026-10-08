---
id: roles-y-permisos/cambiar-los-permisos-de-un-rol
title: "Change the default permissions of a role"
description: "How to adjust, in Settings › Permissions, what each role comes with out of the box: the tab for each role, the View, Create, Edit, Delete and Active grid, and what is still to confirm about who it affects."
section: roles-y-permisos
order: 120
group: "Change permissions"
roles: [owner]
screens: [/team-permission]
keywords: [change role permissions, default permissions, permission defaults, permissions settings, permissions grid, view create edit delete active, role, administrator, receptionist, barber, remove permission, give permission, customize by location]
related: [roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/darle-a-recepcion-solo-lo-necesario, configuracion/permisos-donde-se-cambian]
status: draft
updated: 2026-09-25
---

# Change the default permissions of a role

**In short:** in **Settings › Permissions** there is one tab per role and, in each one, a grid of features with **View**, **Create**, **Edit**, **Delete** and **Active**. What you change there are the **default** values that new people in that role start with.

## How to get there

1. Tap **Settings** in the menu.
2. In the **Team** group, tap **Permissions**: “Manage the sections and features each user in your barbershop can use based on their role.”
   ![The Permissions screen with the tabs for each role and the grid](/assets/es/configuracion/permisos-donde-se-cambian/pantalla.png)

## What the screen says

> The settings you set here will be the defaults when creating new roles, although they can be customized individually by location and when creating or editing each user. Owner accounts have full access to the system.

Three things come out of that:

- It is the **starting point** for each role, not the permissions of one specific person.
- It can be **customized per person** in their record ([Change a person's permissions](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona)).
- Nothing is taken away from the **owner**: they have full access.

## Steps

1. Tap the tab for the role: **Location administrator**, **Commission barber**, **Rent barber**, **Receptionist - front desk** or **Owner**.
   ![The Reception tab with its permissions grid](/assets/es/roles-y-permisos/tabla-de-permisos-por-rol/recepcion.png)
2. Find the feature in its block: **Bookings and clients**, **Team**, **Metrics**, **Inventory**, **Services**, **POS** or **Business**.
3. Turn on or off the columns you want: **View**, **Create**, **Edit**, **Delete** or **Active**. Some rows only have **Active**; others don't have all five.
4. Save the changes.

> [!NOTE]
> This article was written by reading the screen without changing any switch. It has not been confirmed how changes are saved (whether there is a **Save** button or each switch applies as soon as you tap it) or whether changing a role's default **affects people who already have that role**. Until that is confirmed, if you want to change someone who already exists, do it in their record.

## What each column means

| Column | What it allows |
|---|---|
| **View** | Seeing the feature. Without **View**, the section stops showing in that person's menu |
| **Create** | Creating things in it |
| **Edit** | Changing what already exists |
| **Delete** | Deleting |
| **Active** | The feature exists for that role |

The factory values for the five roles are in [Permissions table: what each role can do](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

## Examples

- **Let commission barbers block their calendar.** On the **Commission barber** tab, the **Block calendar** row comes with only **View** and **Active**. Turn on **Create**.
- **Keep reception from seeing products.** On **Receptionist - front desk**, the **Products** row comes with **View**. Turn it off ([Give reception only what it needs](/ayuda/roles-y-permisos/darle-a-recepcion-solo-lo-necesario)).
- **Let the administrator see the Barber payments section.** On **Location administrator** that row is set to “no”. Turn on **Active**.

## Frequently asked questions

**Can I give one role less than another?**
Yes, each tab is independent. The only fixed thing is that owner accounts have full access.

**Where do I “customize by location”?**
The screen mentions it, but it could not be found with the owner's account. It is still to confirm ([General and per-location settings](/ayuda/sucursales/ajustes-generales-y-por-sucursal)).

**I changed the role and a person still sees the same thing.**
The role change may not affect people who already exist. Adjust that person in their record, on the **Permissions** tab.
