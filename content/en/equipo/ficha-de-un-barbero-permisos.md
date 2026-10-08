---
id: equipo/ficha-de-un-barbero-permisos
title: "A barber's record: permissions"
description: "The Permissions tab of the record: how to read the View, Create, Edit, Delete and Active matrix, where a person's permissions come from and what happens if you remove View."
section: equipo
order: 160
group: "A barber's record"
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [barber permissions, a person's permissions, permissions matrix, view create edit delete, active, remove permissions, grant permissions, hide menu section, customize permissions, permissions per user, can't see a section, role and permissions]
related: [roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/no-veo-una-seccion-del-menu, equipo/ficha-de-un-barbero-perfil, equipo/editar-a-un-miembro-del-equipo]
status: review
updated: 2026-09-25
---

# A barber's record: permissions

**In short:** in the record's **Permissions** tab you see and adjust what that person can do. Their permissions are copied from their role when you create them and can be customized afterward. If you remove **View** on a function, that section disappears from their menu.

## How to get there

1. Tap **Team** in the menu.
2. Under **Barbers**, tap **Actions** › **View Commission barber** (or **View Rent barber**) on the person's row.
3. Tap the **Permissions** tab.
   ![The Permissions tab of the record, with the matrix by blocks](/assets/es/equipo/ficha-de-un-barbero-permisos/ver.png)

## How to read the matrix

- Each row is a function of the app, grouped into blocks: **Bookings and clients**, **Team**, **Metrics**, **Inventory**, **Services**, **POS** and **Business**.
- The columns are **View**, **Create**, **Edit**, **Delete** and **Active**.
- Some rows only have the **Active** switch: the function exists or not for that person. Others don't have all the columns.

It's the same matrix as **Settings › Permissions**, but here it's this person's, not the role's.

## Where a person's permissions come from

1. When you create them, their permissions are **copied from their role**. The factory values are in [Permissions table: what each role can do](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).
2. After that you can **customize** them here, with **Edit**.

That's why two commission barbers can have different permissions. For example, you can give Carlos full **Block calendar** even though the factory role only brings **View**.

## What happens if you remove “View”

If you remove **View** on a function from a person, that section stops appearing in their menu. If you remove **View** on **Team**, they no longer see **Team**. Each person's menu is built from their permissions, the profile they sign in with and the location they chose. See [I can't see a menu section](/ayuda/roles-y-permisos/no-veo-una-seccion-del-menu).

## To change the permissions

In the list, tap **Actions** › **Edit Commission barber**, open **Permissions**, change the switches and tap **Save**. See [Change a person's permissions](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona).

## Frequently asked questions

**A barber doesn't see a section.**
Open their record, **Permissions** tab, and check that they have **View** on that section's function.

**Can I give a person more permissions than their role has?**
Yes. Permissions are copied from the role when you create them and then customized here.

**If I change the role in Settings › Permissions, does this person change?**
The values in **Settings › Permissions** are the defaults for new people. Whether they affect people who already exist hasn't been checked yet.
