---
id: configuracion/notificaciones-de-clientes
title: "Client alerts: imports, reviews, statuses and blocks"
description: "The alerts in the Clients group of the Notification center, one by one: imports, bad reviews, changes to Churn, Pre-Churn, Recovered and VIP, and blocks."
section: configuracion
order: 180
group: "Notifications"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [client alerts, client notifications, client import, bad review, client satisfaction, churn, pre-churn, lost client, at risk, recovered, vip, block a client, block alert, client statuses, email, push]
related: [configuracion/centro-de-notificaciones-como-funciona, clientes/como-se-clasifica-un-cliente, clientes/tipos-de-cliente, clientes/bloquear-a-un-cliente, metricas/alertas-de-riesgo-de-clientes]
status: review
updated: 2026-09-25
---

# Client alerts: imports, reviews, statuses and blocks

**In short:** the **Clients** group in the Notification center alerts you when an import finishes or fails, when a bad review comes in, when a client changes status (Churn, Pre-Churn, Recovered, VIP) and when someone on the team blocks a client. Each alert can be sent by **Email**, by **Push** or both.

## Where it is

**Settings › Notifications › Notification center**. The card says: “Review notifications sent to clients and barbers about appointments.” Pick the role's tab and look for the **Clients** group.

![The Notification center with the tabs by role and the alerts with their Email and Push switches](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## The alerts

| Block | Alert, exactly as on the screen | Channels |
|---|---|---|
| **Client import** | “When one of your own client imports fails afterward” | Email · Push |
| **Client import** | “When the import process finishes successfully” | Email · Push |
| **Client satisfaction** | “When a client leaves a bad review” | Email · Push |
| **Client statuses** | “When a client moves to 'Churn' (lost) status” | Email · Push |
| **Client statuses** | “When a client moves to 'Pre-Churn' (at risk) status” | Email · Push |
| **Client statuses** | “When a client moves to “Recovered” status” | Email · Push |
| **Client statuses** | “When a client moves to “VIP” status” | Email · Push |
| **Actions on clients** | “When a local team member blocks a client” | Email · Push |

## What each status means

A client moves to **Pre-Churn** when they've gone longer than usual without coming back, to **Churn** when they're considered lost, to **Recovered** when they come back after that and to **VIP** when they're among those who visit or spend the most. How each one is calculated is in [How a client is classified](/ayuda/clientes/como-se-clasifica-un-cliente).

To turn an alert on or off and save, see [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Frequently asked questions

**I want to know about the clients I'm about to lose.**
Turn on “When a client moves to 'Pre-Churn' (at risk) status.” At that point you still have time to reach out. See [Client Risk Alerts](/ayuda/metricas/alertas-de-riesgo-de-clientes).

**Who gets the block alert?**
It depends on the role tab where you turn it on. For example, if you turn it on in **Owner**, the owner gets it. See [Which alerts each role gets](/ayuda/configuracion/notificaciones-por-rol).

**Where does the “bad review” come from?**
From the rating the client leaves after the appointment. How they leave it and what score counts as bad isn't documented yet.
