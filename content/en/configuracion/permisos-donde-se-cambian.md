---
id: configuracion/permisos-donde-se-cambian
title: "Permissions: where they're changed and how they're saved"
description: "The two places where permissions are adjusted: the Permissions screen, with each role's defaults, and each person's record."
section: configuracion
order: 100
group: "Team"
roles: [owner, admin]
screens: [/team-permission, /team/barbers]
keywords: [permissions, where do I change permissions, permissions by role, a person's permissions, permissions matrix, role tabs, location manager, commission barber, rent barber, receptionist, owner, view create edit delete active, defaults, remove access, give access]
related: [roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/tabla-de-permisos-por-rol, equipo/ficha-de-un-barbero-permisos, roles-y-permisos/los-cinco-roles, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Permissions: where they're changed and how they're saved

**In short:** permissions are changed in two places. In **Settings › Permissions** are the defaults for each role: what a new person gets when you create them. In each person's record, **Permissions** tab, is their own copy, which you can adjust for that person only.

## Where it is

**Settings › Team › Permissions**. The card says: “Manage the sections and functions each user in your barbershop can use, based on their role.”

The screen explains: “Manage the sections and functions each user in your barbershop can use, based on their role. The settings you set here will be the defaults when creating new roles, although they can be customized individually by location and when creating or editing each user. Owner accounts have full access to the system.”

![The Permissions screen with the role tabs and the matrix of functions](/assets/es/configuracion/permisos-donde-se-cambian/pantalla.png)

## Each role's permissions

1. Pick the role's tab: **Location administrator**, **Commission barber**, **Rent barber**, **Receptionist - front desk** or **Owner**.
2. Each row is a function of the app, grouped into **Bookings and clients**, **Team**, **Metrics**, **Inventory**, **Services**, **POS** and **Business**. The columns are **View**, **Create**, **Edit**, **Delete** and **Active**. What each one means is in [How permissions work](/ayuda/roles-y-permisos/como-funcionan-los-permisos).
3. Turn on or off whatever you want to change. The factory values are in [Permissions table: what each role can do](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

What you change here is what each new person with that role will get.

## A person's permissions

When you create someone, they get a copy of their role's permissions. After that you can adjust it for that person only:

1. Go to **Team** and open the person's record with **Actions › View**.
2. Tap the **Permissions** tab. It's the same matrix, but just for that person.

See [A barber's record: permissions](/ayuda/equipo/ficha-de-un-barbero-permisos). That's why two barbers with the same role can have different permissions.

## What happens when you remove a permission

If you remove **View** on a function for someone, that section disappears from their menu. For example, without **View** on **Team**, they no longer see the Team section.

> [!NOTE]
> How changes are saved on this screen, whether changing a role's default affects people who already have it and where “per location” customization happens haven't been confirmed yet.

## Frequently asked questions

**I want only one barber to be able to see Metrics. Do I change the role?**
No. Change only their record: **Team › Actions › View › Permissions**. The role stays the same for everyone else.

**Can I take permissions away from the owner?**
The screen says owner accounts have full access to the system.

**I changed a role permission and nothing changed for a barber.**
Their permissions may already have been customized in their record. Whether the role's default reaches people who already exist hasn't been confirmed yet; check that person's record.
