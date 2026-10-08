---
id: metricas/clientes-tasa-de-retencion
title: "Retention rate and returning clients"
description: "The first card on the Clients tab: what share of your clients come back to the barbershop."
section: metricas
order: 90
group: "Clients"
roles: [owner, admin, barbero]
screens: [/]
keywords: [retention rate, retention, returning clients, clients who come back, how many clients return, loyalty, churn, lost clients, repeat clients, clients]
related: [metricas/como-leer-metricas, metricas/clientes-citas-por-tipo-de-cliente, metricas/clientes-frecuencia-de-visita, metricas/alertas-de-riesgo-de-clientes, metricas/puntaje-de-salud]
status: draft
updated: 2026-09-25
---

# Retention rate and returning clients

**In short:** the retention rate tells you what share of your clients come back. It's the card that answers “am I keeping my people, or am I just getting new clients?”.

## Where it is

In **Metrics › Clients**, the first card. It responds to the location, **Whole team** (or one barber) and period filters. With the barber profile you see the retention of your own clients.

## What it shows

- **RETENTION RATE**: a percentage, for example **62.0%**.
- **Returning clients**: the label below. It counts the clients who had already come before and came back.

With **0.0%**, none of the clients you served in that period had come before: they were all new.

![Retention rate card with the percentage and the Returning clients label](/assets/es/metricas/clientes-tasa-de-retencion/tarjeta.png)

> [!NOTE]
> Exactly how it's calculated, and after how many visits a client counts as returning: still to confirm with the team.

## What it's for

- It's the cheapest number to improve: a client who comes back costs no advertising.
- If it drops, look at **Client Risk Alerts** in **AI Insights**: that's the list of who has gone longest without coming in.
- Compare it by barber. If one barber retains far fewer clients than the rest, there's something in their service to look at.
- Look at it by **Month**, not by **Today**: in a single day almost nobody repeats.

## Frequently asked questions

**Why is my retention 0.0% if I have clients of many years?**
The card looks at the period you chose. If only new clients came in that period, it shows 0.0%. Switch to **Month** or move with the arrows and compare.

**Are retention and “returning clients” the same thing?**
The card uses **Returning clients** as the label for the rate. How many they are in number is in [Appointments by client type and new vs returning](/ayuda/metricas/clientes-citas-por-tipo-de-cliente).

**Does AI Insights show another retention rate?**
Yes, the **Health Score** also shows a **Retention rate**. It may not match, because the score is calculated over a different period. How they relate is still to be confirmed.
