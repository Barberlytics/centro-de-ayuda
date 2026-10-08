---
id: metricas/clientes-frecuencia-de-visita
title: "How often your clients visit"
description: "The Clients tab card that groups your clients by how often they come in: weekly, every two weeks and more."
section: metricas
order: 140
group: "Clients"
roles: [owner, admin, barbero]
screens: [/]
keywords: [visit frequency, how often they come, weekly, biweekly, monthly, every two weeks, visit cycle, how many times a month, frequent clients, visit rhythm, clients]
related: [metricas/como-leer-metricas, metricas/clientes-tasa-de-retencion, metricas/clientes-citas-por-tipo-de-cliente, metricas/alertas-de-riesgo-de-clientes]
status: draft
updated: 2026-09-25
---

# How often your clients visit

**In short:** this card tells you how often your clients come in: how many come every week, how many every two weeks, and so on. It's the basis for knowing who is “taking too long” to come back.

## Where it is

In **Metrics › Clients**, at the bottom of the tab. It responds to the location, **Whole team** (or one barber) and period filters.

## What it shows

- **VISIT FREQUENCY**: at the top, the number of clients with a known frequency, for example **5 CLIENTS**.
- Below, one group per frequency with the number of clients:
  - **Weekly**: they come every week. For example **1**.
  - **Biweekly**: they come every two weeks. For example **4**.

Only groups that have clients appear. If nobody comes every week in the period, **Weekly** isn't shown.

![Visit frequency card with the number of clients and the Weekly and Biweekly groups](/assets/es/metricas/clientes-frecuencia-de-visita/tarjeta.png)

> [!NOTE]
> Which other groups exist besides Weekly and Biweekly, how many visits are needed to assign a frequency and how it's calculated: still to confirm with the team.

## What it's for

- A client who comes every two weeks and hasn't come in a month is slipping away. **Client Risk Alerts** uses this frequency (the “cycle”) to warn you.
- If most are biweekly, your calendar repeats every two weeks: book the next appointment before the client leaves.
- Compare by barber: the one with the most weekly clients is the one who builds the best loyalty.

## Frequently asked questions

**Why does it say 5 clients if I served 40?**
It only counts clients who can already be assigned a frequency. A client who came only once doesn't have a known rhythm yet.

**What's the “cycle” shown in Risk alerts?**
It's that client's usual frequency, in days. For example, **cycle: 14d** is a client who comes every two weeks. See [Client Risk Alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes).

**Can I see the frequency of one specific client?**
Not here; the card groups them. For one in particular, check their record in the **Clients** section of the menu.
