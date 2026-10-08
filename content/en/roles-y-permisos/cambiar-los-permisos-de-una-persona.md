---
id: roles-y-permisos/cambiar-los-permisos-de-una-persona
title: "Change a person's permissions without changing their role"
description: "How to give or take away permissions for a single team member from their record, on the Permissions tab, without touching their role's defaults."
section: roles-y-permisos
order: 130
group: "Change permissions"
roles: [owner, admin]
screens: [/team/barbers, /team/barbers/view/*]
keywords: [person permissions, barber permissions, change permissions, give permission, remove permission, profile permissions tab, without changing the role, customize permissions, a barber can't see, edit barber, permissions per user]
related: [equipo/ficha-de-un-barbero-permisos, roles-y-permisos/cambiar-los-permisos-de-un-rol, roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/no-veo-una-seccion-del-menu, equipo/editar-a-un-miembro-del-equipo]
status: draft
updated: 2026-09-25
---

# Change a person's permissions without changing their role

**In short:** open the person's record in **Team**, go to the **Permissions** tab and change their switches. Their permissions were copied from their role when you created them; what you change here applies only to them.

## Steps

1. Tap **Team** in the menu and, under **Barbers**, find the person. Managers are on the **Managers** tab.
2. On their row, tap **Actions**.
   ![The Actions menu of a barber with View, Edit, Deactivate and Delete](/assets/es/equipo/la-lista-de-barberos/acciones-fila.png)
3. Choose **Edit Commission barber** (or **Edit Rent barber**, **Edit Owner**…).
4. Tap the **Permissions** tab.
   ![The Permissions tab of the record, with the grid by blocks](/assets/es/equipo/ficha-de-un-barbero-permisos/ver.png)
5. Turn **View**, **Create**, **Edit**, **Delete** or **Active** on or off for the feature you want.
6. Save.

> [!NOTE]
> The **Permissions** tab was seen in **View** and the **Edit** form with its tabs. No switch was changed and **Save** was not tapped, so the exact button and the confirmation message still need to be checked with a test person.

## What changes and what doesn't

- **Yes:** what that person sees and can do. Confirmed by the owner: if you take away **View** on **Team**, the Team section disappears from their menu.
- **No:** their role. They are still a commission barber, rent barber, receptionist or administrator, and that is how they appear in the list.
- **No:** anyone else. Other barbers with the same role don't change.
- **No:** the role's defaults. Those are changed in **Settings › Permissions** ([Change the default permissions of a role](/ayuda/roles-y-permisos/cambiar-los-permisos-de-un-rol)).

## Examples

| You want | In their record, Permissions tab |
|---|---|
| Carlos, a commission barber, to be able to create blocks on his calendar | **Bookings and clients › Block calendar**: turn on **Create** (by default it only has **View**) |
| Laura, at reception, to not see Metrics | **Metrics › Business key performance indicators**: turn off **Active** |
| A barber to not see the rest of the team | **Team › Team**: turn off **View** |

A test barber on the account had **Block calendar** in full, compared with the **View**-only of their role: that is the proof that permissions can be customized per person.

## Frequently asked questions

**Can I give someone more permissions than their role has?**
Yes. The record accepts any combination.

**And take permissions away from the owner?**
The Permissions screen says owner accounts have full access to the system.

**I changed their permissions and they still see the same thing.**
Ask them to sign out and sign back in. If it's still the same, check which profile they signed in with ([I can't see a menu section](/ayuda/roles-y-permisos/no-veo-una-seccion-del-menu)).
