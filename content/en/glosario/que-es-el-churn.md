---
id: glosario/que-es-el-churn
title: "Churn: when a client is lost"
description: "What Churn and Pre-Churn mean in the Notification center, how they match the Lost and Nearly lost types in Clients, with the app's exact definitions."
section: glosario
order: 50
roles: [owner, admin]
screens: [/customers, /notifications-center, /]
keywords: [churn, pre-churn, what is churn, lost client, client who leaves, nearly lost, lost, lost clients, at risk, overdue, recovered, frequency cycles, churn alert, churn acronym]
related: [glosario/glosario-de-barberlytics, clientes/tipos-de-cliente, clientes/como-se-clasifica-un-cliente, metricas/alertas-de-riesgo-de-clientes, navegacion/notificaciones-que-recibes, metricas/clientes-tasa-de-retencion]
status: draft
updated: 2026-09-25
---

# Churn: when a client is lost

**In short:** “Churn” is the word the **Notification center** uses for a **Lost** client, and “Pre-Churn” for a **Nearly lost** client. In the **Clients** section you see them under those names, each with its definition.

## Where the word shows up

In **Settings › Notification center**, group **Clients › Client statuses**, there are two alerts:

- “When a client moves to 'Churn' (lost) status”
- “When a client moves to 'Pre-Churn' (Possible loss) status”

The screen itself translates it: Churn = lost, Pre-Churn = possible loss.

## What they mean, with the app's definitions

In **Clients**, tapping each tab shows its definition:

| Alert | Client type | Definition the app shows |
|---|---|---|
| Pre-Churn | **Nearly lost** | “These are clients who have stopped coming to the barbershop for 3 frequency cycles, meaning they are at risk of being lost.” |
| Churn | **Lost** | “These are clients who have stopped coming to the barbershop for 4 visit frequency cycles and have already been lost.” |
| (Recovered) | **Recovered** | “These are clients who were already lost but came back to the barbershop, and whom we need to take care of so they come back often.” |

![The Lost tab with its definition](/assets/es/clientes/tipos-de-cliente/perdido.png)

The “frequency cycle” is how often that client usually comes in. Laura comes every 2 weeks: after 6 weeks without coming she's **Nearly lost** and after 8, **Lost**. Carlos comes every month: it takes him three and four months to go through the same thing ([How a client's type changes over time](/ayuda/clientes/como-se-clasifica-un-cliente)).

## Where to see them

- **Clients**, tabs **Nearly lost**, **Lost** and **Recovered**.
- **Metrics › AI Insights › Client Risk Alerts**, with the counters **Lost**, **At risk** and **Overdue** and the list of clients with “63 days ago · cycle: 14d” ([Risk alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes)).
  ![The Client Risk Alerts card](/assets/es/metricas/alertas-de-riesgo-de-clientes/tarjeta.png)
- The bell, if the owner turned on those alerts by **Email** or **Push** ([Which alerts you get](/ayuda/navegacion/notificaciones-que-recibes)).

> [!NOTE]
> The exact formula is still to be confirmed with the team: how each client's cycle is calculated, how often the type is recalculated, and how **At risk** and **Overdue** in the alerts match **Nearly lost** and **Lost** in the list.

## Frequently asked questions

**Can I mark a client as lost by hand?**
No. The app calculates it from their appointments.

**How do I get the alert when someone moves to Churn?**
In **Settings › Notification center**, on the tab for your role, turn on **Email** or **Push** for “When a client moves to 'Churn' (lost) status”.

**What do I do with a Nearly lost client?**
Message them before they move to Lost. It's the list to call today.
