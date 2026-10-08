---
id: glosario/que-es-el-avf
title: "AVF: each client's visit rhythm"
description: "What the AVF card on a client's record shows, the unit it comes in, where to find it and what is still to confirm about how it's calculated."
section: glosario
order: 20
roles: [owner, admin]
screens: [/customers/*]
keywords: [AVF, what is AVF, AVF days, visit rhythm, how often they come, client indicator, client profile, frequency, days between visits, AVF acronym]
related: [glosario/glosario-de-barberlytics, glosario/que-es-el-fov, clientes/indicadores-de-un-cliente, clientes/como-se-clasifica-un-cliente, metricas/alertas-de-riesgo-de-clientes]
status: draft
updated: 2026-09-25
---

# AVF: each client's visit rhythm

**In short:** **AVF** is one of the twelve cards on a client's record. The app shows it in days (“3 Days”) and it describes the rhythm at which that client comes back.

## Where it shows

1. Tap **Clients** and, on the client's row, **Actions › View**.
2. In **General information**, at the top, are the twelve cards. **AVF** is the last one.
   ![The twelve indicator cards on a client's record](/assets/es/clientes/ver-un-cliente/indicadores.png)

## What the screen shows

| Card | Unit | Example |
|---|---|---|
| **AVF** | **Days** | Laura: 14 Days |

Other cards in the same row talk about the same thing from another angle: **FOV** shows in **Week** ([FOV](/ayuda/glosario/que-es-el-fov)) and **Booking time** also in **Week**. In an appointment's details, the **Client** tab says “Every 7 days” under **CLIENT RHYTHM**, and in **Metrics › AI Insights** the risk alerts show “cycle: 14d”.

> [!NOTE]
> The exact AVF formula is still to be confirmed with the team: whether it's the average of days between visits, the last interval or the “cycle” used by the client types and the alerts. Here we only describe what the screen shows and its unit.

## What it's for

- If Laura's AVF is 14 days and it's been 30 since she last came, she's running late: check whether she shows up under **Nearly lost** or in the **Client Risk Alerts**.
- Book her next appointment at that distance: the **Client** tab in an appointment's details suggests it under **BOOK THEM FOR**.

## Frequently asked questions

**Are AVF and FOV the same?**
They come in different units (days and weeks) and on different cards. Whether they're the same data in two units is still to be confirmed.

**Does a client with just one appointment have an AVF?**
Still to confirm. With one visit there aren't two dates to compare.
