---
id: calendario/clientes-sin-preferencia-de-barbero
title: "Clients with no preferred barber: who serves them"
description: "What a no-preference client is, where the order is set and which barbers can take them (Team › Order for walk-in and no-preference booking), and how it looks on the appointment."
section: calendario
order: 90
group: "Book"
roles: [owner, admin]
screens: [/team/barbers/lineup, /calendar]
keywords: [no preference, no-preference client, any barber, who serves, barber order, lineup, ordering, walk-in booking, barber turns, share out clients, asked for, no-preference commission, rotation, next barber]
related: [calendario/cliente-sin-cita-previa, calendario/abrir-una-cita, equipo/orden-para-clientes-sin-preferencia, equipo/orden-para-clientes-sin-cita, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-opciones, metricas/clientes-preferencia-de-barbero]
status: draft
updated: 2026-09-25
---

# Clients with no preferred barber: who serves them

**In short:** a no-preference client is one who doesn't ask for anyone: whoever is available serves them. Which barbers can take them, and in what order, is set in **Team › Actions › Order for walk-in and no-preference booking**, **No preference** tab. The same screen has the **Walk-in booking** tab for clients who show up without booking.

## Where the order is set

1. Open **Team** in the menu.
2. Tap **Actions** and choose **Order for walk-in and no-preference booking**.
3. Choose the **No preference** tab (or **Walk-in booking**, for clients who show up without booking).
4. Each barber has a switch. Turn off the switch of anyone who shouldn't get these clients. The screen warns: “Barbers you disabled on this screen won't be able to take clients who come without an appointment”.
5. Drag the rows to change the order. Barbers who are turned on have a number (1, 2, 3…); the ones who are turned off show “–”.

> [!NOTE]
> How the app uses that order when it assigns a client (whether it always goes to number 1, whether it rotates, whether it looks at who is free) hasn't been confirmed yet.

## How it looks on the appointment

When you open an appointment, in **Summary**, the **LOYALTY** block tells you about the client's relationship with the barber:

- **Asked for Mateo**: the client did choose a barber.
- **With Mateo 8 of 31 visits** and **Has seen other barbers 3**: how many times they've been served by that barber and by how many others.
- “Managed by Carlos” and “This appointment isn't with Carlos, who manages them.”: which barber looks after the client, even if someone else serves them today.

![The Loyalty block in the appointment details, with Asked for and the visits per barber](/assets/es/calendario/abrir-una-cita/resumen.png)

In the client's record, **Appointments** tab, each appointment shows **No preference: Yes** or **No**. [A client's appointments](/ayuda/clientes/citas-de-un-cliente) explains it.

## What changes in the barber's pay

- A commission barber is paid with their **No-preference client commission**, in their record, **Compensation** tab. It's different from the **Basic commission** and from the **Walk-in client commission**.
- A rent barber gets the **No-preference appointment deduction**, in their record, **Payments** tab. The idea: the barbershop brought that client, not the barber.

[A barber's compensation](/ayuda/equipo/ficha-de-un-barbero-compensacion) explains it.

## No preference is not the same as walk-in

| | No preference | Walk-in |
|---|---|---|
| What it is | Didn't ask for a barber | Didn't book; just showed up |
| Where it's ordered | **No preference** tab | **Walk-in booking** tab |
| Commission | **No-preference client commission** | **Walk-in client commission** |

A client can be both at once: they show up without an appointment and don't care who serves them.

## What the screen says

| Text | What it means |
|---|---|
| “Barbers you disabled on this screen won't be able to take clients who come without an appointment” | A barber who is turned off doesn't get these clients |
| “1, 2, 3…” · “–” | The place in the order; “–” is a barber who is turned off |
| **Asked for Carlos** | The client chose that barber |
| **Can take new clients** (record, **Options**) | Another switch: whether the barber gets new clients |

## Frequently asked questions

**A new barber isn't getting no-preference clients.**
Check that their switch is turned on in the **No preference** tab and that **Can take new clients** is turned on in their record, **Options**.

**Who can change the order?**
By default, only the owner has the **Order barbers' calendars** permission. It can be given to someone else in their record, **Permissions** tab.

**Where do I see how many clients ask for a barber and how many don't?**
In **Metrics › Clients**, the barber preference card. See [Barber preference](/ayuda/metricas/clientes-preferencia-de-barbero).
