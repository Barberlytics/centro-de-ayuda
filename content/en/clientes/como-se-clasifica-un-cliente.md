---
id: clientes/como-se-clasifica-un-cliente
title: "How a client's type changes over time"
description: "A client's path through the types, with examples: from New to Retained and Frequent by number of appointments, to VIP by consistency, and to Nearly lost, Lost and Recovered depending on the cycles they go without coming in."
section: clientes
order: 70
group: "Client types"
roles: [owner, admin]
screens: [/customers]
keywords: [how a client is classified, type change, frequency cycle, cycle, how often they come, when they become VIP, when a client is lost, at-risk client, nearly lost, lost, recovered, retention, loyalty, why is my client new, why did their type change, client classification]
related: [clientes/tipos-de-cliente, clientes/indicadores-de-un-cliente, metricas/clientes-citas-por-tipo-de-cliente, metricas/alertas-de-riesgo-de-clientes, metricas/clientes-frecuencia-de-visita]
status: draft
updated: 2026-09-25
---

# How a client's type changes over time

**In short:** the first three types are earned by number of appointments: **New** (none or one), **Retained** (two) and **Frequent** (three or more). The rest depend on their visit rhythm, what the app calls “frequency cycles”: **VIP** if they've been coming for more than 3 cycles, **Nearly lost** if they've gone 3 cycles without coming, **Lost** at 4, and **Recovered** if they were lost and came back. None of this is changed by hand.

The exact definitions, as the app shows them, are in [Client types](/ayuda/clientes/tipos-de-cliente).

## First, by appointments

| Appointments | Type |
|---|---|
| 0 or 1 | **New** |
| 2 | **Retained** |
| 3 or more | **Frequent** |

Carlos books online and comes in on Saturday: he's **New**. He comes back three weeks later: **Retained**. By the third appointment he's **Frequent**.

## Then, by cycles

The cycle is how often that client usually comes in. Laura comes every 2 weeks: her cycle is 2 weeks. Carlos comes once a month: his cycle is a month. With that cycle, the app looks at two things: how long they've been coming consistently and how long they've gone without showing up.

| What happens | Type |
|---|---|
| They've been coming for more than 3 cycles | **VIP** |
| They've gone 3 cycles without coming | **Nearly lost** |
| They've gone 4 cycles without coming | **Lost** |
| They were lost and came back | **Recovered** |

With Laura (2-week cycle):

- If she keeps up the rhythm for more than 3 cycles, more than 6 weeks of coming every two weeks, she becomes **VIP**.
- If she stops coming for 3 cycles, about 6 weeks, she becomes **Nearly lost**. This is the moment to message her.
- After 4 cycles without coming, about 8 weeks, she becomes **Lost**.
- If she comes back after that, she becomes **Recovered**.

With Carlos (one-month cycle) the same steps take longer: **Nearly lost** after three months without coming and **Lost** after four. That's why two clients who've been away for the same amount of time can have different types.

## Where to see their rhythm

- In the record, the **FOV** card shows their rhythm in weeks: see [A client's indicators](/ayuda/clientes/indicadores-de-un-cliente).
- In the details of an appointment, the **Client** tab says “Every 7 days” under **CLIENT RHYTHM**.
- In Metrics, [Risk alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes) lists the ones who are running late, with “cycle: 14d,” and [Appointments by client type](/ayuda/metricas/clientes-citas-por-tipo-de-cliente) groups them by period.

> [!NOTE]
> Still to confirm with the team: how the app calculates each client's cycle (whether it's the average between visits or the last interval), how often it recalculates the type, which cycle it uses for a client who has only come once, whether a **Recovered** client becomes **Frequent** or **VIP** again later, and whether types are calculated per location or for the whole barbershop.

## Frequently asked questions

**My client has been coming for a year. Why aren't they VIP?**
For **VIP**, consistency counts, not how long they've been a client: they have to have come for more than 3 cycles in a row. If they come every two months and once skipped four, they may have gone through **Nearly lost** and restarted the path.

**Can a VIP drop to Nearly lost?**
Yes. If they go 3 cycles without coming, their type changes no matter what they were before.

**Is Recovered forever?**
The definition says they're the ones who “came back” and need looking after. Whether the type changes again with their following appointments is still to be confirmed.

**Can I set the type myself?**
No. The only thing you decide by hand is the block: see [Block a client](/ayuda/clientes/bloquear-a-un-cliente).
