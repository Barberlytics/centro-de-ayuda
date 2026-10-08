---
id: metricas/alertas-de-riesgo-de-clientes
title: "Risk alerts: at-risk, lost and overdue clients"
description: "The AI Insights card that lists the clients who are taking too long to come back, with how many days it's been and their usual cycle."
section: metricas
order: 180
group: "AI Insights"
roles: [owner, admin]
screens: [/]
keywords: [client risk alerts, at-risk clients, lost clients, overdue clients, clients who don't come back, clients are leaving, churn, days since last visit, cycle, win back clients, ai insights]
related: [metricas/como-leer-metricas, metricas/clientes-frecuencia-de-visita, metricas/clientes-tasa-de-retencion, metricas/recomendaciones-inteligentes, metricas/clientes-citas-por-tipo-de-cliente]
status: draft
updated: 2026-09-25
---

# Risk alerts: at-risk, lost and overdue clients

**In short:** this card tells you who you need to message today. It lists the clients who have gone longer than usual without coming in, with how many days have passed and how often they used to come.

## Where it is

In **Metrics › AI Insights**, below the **Health Score**. With the barber profile this tab doesn't appear.

## What it shows

- **Client Risk Alerts**: at the top, three counters:
  - **Lost**: clients who have gone so long without coming in that they're considered lost. For example **1**.
  - **At risk**: clients who are taking longer than normal. For example **4**.
  - **Overdue**: clients who have passed the date they were expected back. For example **2**.
- Below, the list of clients. Each row has:
  - The client's initial and name.
  - How long it's been since their last visit and their usual rhythm: for example **63 days ago · cycle: 14d** (a client who comes every two weeks and hasn't shown up in two months).
  - A label: **At risk** or **Overdue**.

![Client Risk Alerts card with the Lost, At risk and Overdue counters and the list of clients](/assets/es/metricas/alertas-de-riesgo-de-clientes/tarjeta.png)

> [!NOTE]
> How many days without a visit make a client move to **At risk**, **Overdue** or **Lost**: still to confirm with the team. The **Smart Recommendations** mention “1.5x their usual frequency” for at-risk clients.

## What it's for

- It's your list of who to message. A short note (“We haven't seen you in a while, want me to book you in this week?”) wins back more than one.
- Start with **At risk**: they haven't left yet. **Overdue** clients need something more, like an offer.
- If the list grows every week, the problem isn't one client: check those clients' last visit, who served them and whether there was a wait.
- The **cycle** comes from each client's [Visit frequency](/ayuda/metricas/clientes-frecuencia-de-visita).

## Frequently asked questions

**What does “63 days ago · cycle: 14d” mean?**
That the client last came 63 days ago, and that they normally came every 14 days. They've gone more than four cycles without showing up.

**What's the difference between At risk, Overdue and Lost?**
They're three levels of the same problem, from least to most time without a visit. The exact days for each level are still to be confirmed.

**Can I message the client from here?**
The card only shows the list. To contact them, find the client in the **Clients** section of the menu.
