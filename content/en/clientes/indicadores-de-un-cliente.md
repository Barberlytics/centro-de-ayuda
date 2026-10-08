---
id: clientes/indicadores-de-un-cliente
title: "A client's indicators: FOV, AVF, LTV, view index and rebooks"
description: "What each of the twelve cards in a client's record means, in barbershop terms: how much they spend, how often they come, how many appointments they keep, and which ones are still to be confirmed."
section: clientes
order: 90
group: "A client's record"
roles: [owner, admin]
screens: [/customers/*]
keywords: [client indicators, FOV, AVF, LTV, view index, rebooks, books again, average sale, client's average ticket, number of transactions, completed, canceled, no-show, booking time, total appointments, what FOV means, what LTV means, how much a client spends, how often a client comes]
related: [clientes/ver-un-cliente, clientes/tipos-de-cliente, clientes/como-se-clasifica-un-cliente, metricas/clientes-frecuencia-de-visita, metricas/clientes-ingreso-promedio-por-cliente]
status: draft
updated: 2026-09-25
---

# A client's indicators: FOV, AVF, LTV, view index and rebooks

**In short:** the **General information** tab of the record starts with twelve cards. The most useful ones: **LTV** (how much they've spent in total), **Average sale** (how much they spend per visit), **Total appointments** and the **Completed**, **Canceled** and **Didn't attend** percentages. **FOV** and **AVF** are about their visit rhythm.

![The twelve indicator cards in a client's record](/assets/es/clientes/ver-un-cliente/indicadores.png)

## Where they are

Tap **Clients**, then **Actions** › **View** in the client's row. The cards are right at the top of **General information**.

## What each card says

Using Laura Gómez as an example, a client who has been coming for two years.

| Card | What it is | Example |
|---|---|---|
| **Total appointments** | How many appointments they have on record, all of them added up. | 24 |
| **View index** | A percentage. The screen shows it in “%.” | 0.00 % |
| **FOV** | Their visit rhythm, in weeks. The screen shows it with the unit **Week**. | 2 Week |
| **LTV** | How much money they've left at your barbershop since their first appointment. It's the same figure as the **LTV** column in the list. | $1,250,000.00 |
| **Average sale** | How much they spend, on average, each time they're charged. | $52,000.00 |
| **Number of transactions** | How many times they've been charged. | 24 |
| **Completed** | Of their appointments, what percentage made it all the way to payment. | 87.50 % |
| **Canceled** | What percentage of their appointments were canceled. | 8.33 % |
| **Didn't attend** | What percentage of their appointments they missed without notice. | 4.17 % |
| **Rebooks** | A percentage of their bookings. The screen shows it in “%.” | 45.00 % |
| **Booking time** | A figure in weeks. The screen shows it with the unit **Week**. | 1 Week |
| **AVF** | A figure in days. The screen shows it with the unit **Days**. | 14 Days |

> [!NOTE]
> How the app calculates **View index**, **Rebooks**, **Booking time**, **FOV** and **AVF** hasn't been confirmed yet. Here we only describe what the screen shows and its unit. It's also not confirmed whether **Total appointments** counts canceled ones or whether **LTV** includes products and tips.

## How to read them at the barbershop

- **High LTV and low Average sale**: they come often and spend little each time. This is the client to offer an extra service or a product.
- **Low LTV and high Average sale**: they spend well but come rarely. Book their next appointment before they leave.
- **Canceled** or **Didn't attend** above the rest of your clients: ask them to confirm the day before.
- **FOV** tells you how many weeks apart they usually come. It's what the app uses to know if they're “running late” and change their type: see [How a client's type changes over time](/ayuda/clientes/como-se-clasifica-un-cliente).

## Frequently asked questions

**What is LTV?**
What the client has paid at your barbershop in total, in their currency. The higher it is, the more that client is worth to you.

**Why don't Completed, Canceled and Didn't attend add up to 100%?**
Because some appointments are still pending (booked and not yet charged) and fall into none of the three.

**Is FOV the same as the “cycle” in Risk alerts?**
The record shows **FOV** in weeks and [Risk alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes) shows the cycle in days. Whether they're the same figure is still to be confirmed.

**Are these numbers for one location or for the whole barbershop?**
Still to confirm. The client list is shown per location.
