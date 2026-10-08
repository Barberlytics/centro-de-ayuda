---
id: metricas/clientes-preferencia-de-barbero
title: "Barber preference: with and without"
description: "The Clients tab card that tells you how many appointments were requested with a specific barber and how many with the first one available."
section: metricas
order: 120
group: "Clients"
roles: [owner, admin, barbero]
screens: [/]
keywords: [barber preference, with preference, no preference, ask for a barber, favorite barber, anyone available, first available, loyalty, barber loyalty, no-preference queue, clients]
related: [metricas/como-leer-metricas, metricas/total-neto-del-equipo, metricas/clientes-tasa-de-retencion, metricas/recomendaciones-inteligentes]
status: draft
updated: 2026-09-25
---

# Barber preference: with and without

**In short:** this card tells you how many appointments were requested with a specific barber and how many with whoever was free. It measures how much each barber weighs in the client's decision.

## Where it is

In **Metrics › Clients**, below the cards at the top. It responds to the location, **Whole team** (or one barber) and period filters.

## What it shows

- **BARBER PREFERENCE**: two rows, each with the number of appointments and its percentage:
  - **No preference**: appointments where the client didn't choose a barber. For example **6 · 15%**.
  - **With preference**: appointments where the client asked for a specific barber. For example **34 · 85%**.

If **No preference** shows **0 · 0%**, every appointment in the period was requested with a chosen barber.

![Barber preference card with the No preference and With preference rows](/assets/es/metricas/clientes-preferencia-de-barbero/tarjeta.png)

> [!NOTE]
> How the preference is marked when booking (online and from the calendar) and how it's counted: still to confirm with the team.

## What it's for

- A lot of preference is a good sign: clients come back for their barber. It's also a risk: if that barber leaves, their clients may leave with them.
- Little preference lets you spread appointments better, but it usually goes with lower retention.
- If a new barber isn't getting appointments with preference, introduce them: a photo in online booking, posts showing their work.
- **No preference** appointments are the ones you can use to balance the team's workload. **Smart Recommendations** warns you when there's an imbalance.

## Frequently asked questions

**What's the difference from Barber loyalty?**
[Barber loyalty](/ayuda/metricas/total-neto-del-equipo), on the **Barbers** tab, shows the percentage of clients with a preference. This card counts appointments, with the number and the percentage on each side.

**Can I see who the most-requested barber is?**
Not here. Change **Whole team** to each barber and compare their **With preference**. On **Barbers**, **Team net total** gives you the order by money.

**Does a walk-in client count as no preference?**
How walk-in clients are counted on this card is still to be confirmed.
