---
id: roles-y-permisos/como-funcionan-los-permisos
title: "How permissions work: View, Create, Edit, Delete and Active"
description: "What each column on the Permissions screen means and how permissions are split between the role and each person."
section: roles-y-permisos
order: 30
group: "How it works"
roles: [owner, admin]
screens: [/team-permission, /team/barbers]
keywords: [permissions, view, create, edit, delete, active, permissions grid, roles, customize permissions, what can they do, full access, owner]
related: [roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/de-que-depende-lo-que-ves]
status: draft
updated: 2026-09-25
---

# How permissions work: View, Create, Edit, Delete and Active

**In short:** permissions decide which sections a person sees and what they can do in them. They are stored as a table with the columns **View**, **Create**, **Edit**, **Delete** and **Active**.

## Where they are

In **Settings › Permissions**, in the **Team** group. There is one tab per role. The screen says:

> The settings you set here will be the defaults when creating new roles, although they can be customized individually by location and when creating or editing each user. Owner accounts have full access to the system.

## How to read the table

Each row is a feature of the app. Each column is something that can be allowed:

| Column | What it allows |
|---|---|
| **View** | Seeing the feature |
| **Create** | Creating things in it |
| **Edit** | Changing what already exists |
| **Delete** | Deleting |
| **Active** | The feature exists for that role |

Some rows only have the **Active** switch. Others don't have all five columns.

The features are grouped into: **Bookings and clients**, **Team**, **Metrics**, **Inventory**, **Services**, **POS** and **Business**.

## From the role to each person

- Each role comes with factory permissions. See them in [Permissions table](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).
- When you create a person, they get a copy of their role's permissions.
- After that you can adjust them **for that person**: in their record, on the **Permissions** tab ([A barber's record: permissions](/ayuda/equipo/ficha-de-un-barbero-permisos)).

That is why two barbers with the same role can have different permissions.

## What happens when you take a permission away

If you take **View** away from a person on a feature, that section stops showing for them. For example, if you take away **View** on **Team**, they don't see the Team section.

## Frequently asked questions

**If I change a role's permissions, do they change for the people who already have it?**
This isn't documented yet.

**Can I take permissions away from the owner?**
The screen says owner accounts have full access to the system.
