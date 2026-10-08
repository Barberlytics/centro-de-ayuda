---
id: metricas/clientes-citas-por-tipo-de-cliente
title: "Appointments by client type and new vs returning"
description: "The two donut charts on the Clients tab that split your clients into new, retained, returning and recovered."
section: metricas
order: 130
group: "Clients"
roles: [owner, admin, barbero]
screens: [/]
keywords: [appointments by client type, new clients, new client retention, returning clients, recovered clients, new vs returning, how many new clients, how many come back, clients who came back, client types, clients]
related: [metricas/como-leer-metricas, metricas/clientes-tasa-de-retencion, metricas/clientes-frecuencia-de-visita, metricas/alertas-de-riesgo-de-clientes]
status: draft
updated: 2026-09-25
---

# Appointments by client type and new vs returning

**In short:** these two donut charts tell you what kind of clients you served: the ones who came for the first time, the new ones who already came back, the regulars and the ones who returned after a while. And, in short, how many are new and how many are returning.

## Where it is

In **Metrics › Clients**, in the middle of the tab. They respond to the location, **Whole team** (or one barber) and period filters. With the barber profile you only see your own clients.

## What it shows

### Appointments by client type

- **APPOINTMENTS BY CLIENT TYPE**: in the center of the donut, the total, for example **12 Clients**.
- Four parts:
  - **New clients**: came for the first time in the period.
  - **New client retention**: new clients who have already come back a second time.
  - **Returning clients**: clients who were already coming before and keep coming.
  - **Recovered clients**: clients who had gone a while without coming in and came back.

For example: **New clients 8 · New client retention 3 · Returning clients 1 · Recovered clients 0**.

![Appointments by client type donut with New clients, New client retention, Returning clients and Recovered clients](/assets/es/metricas/clientes-citas-por-tipo-de-cliente/citas-por-tipo.png)

### New vs returning

- **NEW VS RETURNING**: two parts with a number and a percentage:
  - **New clients**: for example **4 · 40%**.
  - **Returning**: for example **6 · 60%**.

![New vs returning donut with the number and percentage of each type](/assets/es/metricas/clientes-citas-por-tipo-de-cliente/nuevos-vs-recurrentes.png)

> [!NOTE]
> After how many visits a client goes from new to returning, how long without a visit makes them “recovered” when they come back, and why the totals of the two donuts may not match: still to confirm with the team.

## What it's for

- Lots of **New clients** and little **New client retention** is the classic sign: people try you once and don't come back. Look at the first visit: wait time, price, whether they were offered the next appointment.
- **Recovered clients** at zero isn't bad if you also have no lost clients. If **Risk alerts** shows many overdue clients, this is where you'd see the result of winning them back.
- If **Returning** is the majority, your barbershop lives on loyal clients. Take care of them before spending to attract new ones.

## Frequently asked questions

**Why do the two donuts show different numbers?**
Each one counts differently and covers different types. How they relate is still to be confirmed.

**Does a new client who came twice count in New clients or in New client retention?**
In **New client retention**: it's a new client who has already come back.

**Where do I see which clients are at risk of not coming back?**
In **AI Insights**, in [Client Risk Alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes).
