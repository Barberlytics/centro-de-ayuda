---
id: configuracion/notificaciones-de-metricas
title: "Metrics alerts: your barbershop's health"
description: "The alerts in the Metrics group of the Notification center: when the health indicator drops to yellow or red or goes up to green, and each barber's retention every 3 months."
section: configuracion
order: 210
group: "Notifications"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [metrics alerts, metrics notifications, health indicator, health score, yellow, red, green, low metric, client retention, retention by barber, every 3 months, performance, business alerts, email, push]
related: [configuracion/centro-de-notificaciones-como-funciona, metricas/puntaje-de-salud, metricas/clientes-tasa-de-retencion, metricas/como-leer-metricas]
status: review
updated: 2026-09-25
---

# Metrics alerts: your barbershop's health

**In short:** the **Metrics** group in the Notification center alerts you when the health indicator of a metric drops to yellow or red, when it goes back to green, and every 3 months when a barber's client retention is above or below a percentage you set. Each alert can be sent by **Email**, by **Push** or both.

## Where it is

**Settings › Notifications › Notification center**. The card says: “Review notifications sent to clients and barbers about appointments.” Pick the role's tab and look for the **Metrics** group.

![The Notification center with the tabs by role and the alerts with their Email and Push switches](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## The alerts

| Block | Alert, exactly as on the screen | Channels |
|---|---|---|
| **Performance** | “When the health indicator of any metric drops to a very low level (yellow or red)” | Email · Push |
| **Performance** | “When the health indicator of any metric rises to a good level (green)” | Email · Push |
| **Team** | “Every 3 months, when a barber's average client retention is above [Percentage]” | Email · Push |
| **Team** | “Every 3 months, when a barber's average client retention is below [Percentage]” | Email · Push |

In the two **Team** alerts, [Percentage] is a number you type, for example 60.

The health indicator is the color next to each metric in **Metrics**: green means things are going well, yellow and red need attention. See [Health Score](/ayuda/metricas/puntaje-de-salud). Retention measures how many clients come back. See [Retention rate](/ayuda/metricas/clientes-tasa-de-retencion).

To turn an alert on or off and save, see [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Frequently asked questions

**What retention percentage should I enter?**
First look at your team's current retention in **Metrics › Barbers** and set the alert a bit below it, so you find out when someone slips. The “above” one is useful for congratulating whoever is doing well.

**Do barbers get these alerts?**
It depends on the role tab where you turn them on. If you turn them on in **Commission barber**, each barber finds out about their own metrics. See [Which alerts each role gets](/ayuda/configuracion/notificaciones-por-rol).

**Does it also alert me about reports?**
Yes, but that's a different group: **Reports**, with the daily, weekly, monthly, quarterly and annual summary. See [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona).
