---
id: roles-y-permisos/tabla-de-permisos-por-rol
title: "Permissions table: what each role can do"
description: "The factory permissions of each of the five roles, feature by feature."
section: roles-y-permisos
order: 40
group: "How it works"
roles: [owner, admin]
screens: [/team-permission]
keywords: [permissions table, permissions by role, what each role can do, administrator, reception, commission barber, rent barber, owner, grid, defaults]
related: [roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/los-cinco-roles, roles-y-permisos/cambiar-los-permisos-de-una-persona]
status: review
updated: 2026-09-25
---

# Permissions table: what each role can do

**In short:** this table copies what **Settings › Permissions** comes with by default. What you see there may be different if someone adjusted the permissions of a role or a person.

**How to read it:** **V** = View, **C** = Create, **E** = Edit, **D** = Delete, **A** = Active. “No” = the feature is not allowed for that role. “—” = the feature doesn't show for that role. A lone **A** means the row only has the **Active** switch.

| Feature | Administrator | Commission barber | Rent barber | Reception | Owner |
|---|---|---|---|---|---|
| **Bookings and clients** | | | | | |
| Calendar | A | A | A | A | A |
| Book appointments | V C E D A | V C E D A | V C E D A | V C E D A | V C E D A |
| Block calendar | V C E D A | V A | V C E D A | V C E D A | V C E D A |
| Clients | V C E D A | V C A | V C E D A | V C E A | V C E D A |
| Client information | A | no | no | A | A |
| Import clients | A | no | A | A | A |
| Client download | no | no | A | no | A |
| **Team** | | | | | |
| Team | V C E D A | V | — | no | V C E D A |
| Managers | V C E D A | no | — | no | V C E D A |
| Barber payments section | no | no | — | no | A |
| Levels | V C E D A | no | — | no | V C E D A |
| Get in line | V C E D A | no | — | no | V C E D A |
| Order barbers' calendars | no | no | — | no | V C E D A |
| **Metrics** | | | | | |
| Business key performance indicators | A | no | — | A | A |
| **Inventory** | | | | | |
| Products | V C E D A | no | — | V | V C E D A |
| Categories | V C E D A | no | — | V | V C E D A |
| **Services** | | | | | |
| Services | V C E D A | no | — | no | V C E D A |
| Categories | V C E D A | no | — | no | V C E D A |
| Get in line | V E A | no | — | no | V E A |
| **POS** | | | | | |
| Prices | A | A | A | A | A |
| **Business** | | | | | |
| Closing dates | V C E D A | no | — | no | V C E D A |
| Payroll | V C E | no | — | no | V C E |
| Permissions | V E A | no | — | no | V E A |
| Account settings | V E A | V | V | V E | V E A |
| Expenses | V C E D A | V C E D A | V C E D A | no | V C E D A |

## What you can read at a glance

- **Owner:** access to everything. The only one with the **Barber payments section** and **Order barbers' calendars**.
- **Location administrator:** almost everything the owner has, without barber payments or ordering calendars.
- **Reception:** appointments and clients; sees products and metrics; doesn't see expenses or team.
- **Commission barber:** books appointments, sees and creates clients, sees the team and records expenses. Doesn't touch catalogs, payroll or permissions.
- **Rent barber:** has only three blocks: Bookings and clients, POS, and under Business, **Account settings** and **Expenses**.

## Frequently asked questions

**Can I change this table?**
Yes, in **Settings › Permissions**, with one tab per role. You can also adjust the permissions of a single person in their record.

**A barber tells me they can't see a section.**
See [I can't see a menu section](/ayuda/roles-y-permisos/no-veo-una-seccion-del-menu).
