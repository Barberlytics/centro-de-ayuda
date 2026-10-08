---
id: navegacion/notificaciones-que-recibes
title: "Which alerts you get and where they come from"
description: "The alerts that reach the bell, with real Calendar examples, and the full list of alerts the owner can turn on in the Notification center, by channel and by role."
section: navegacion
order: 70
roles: [todos]
screens: [/*, /notifications-center]
keywords: [alerts, notifications, bell, which alerts do I get, calendar, client booked an appointment, time block, notification center, email, push, churn, pre-churn, product out of stock, busy schedule, health indicator, reports]
related: [navegacion/notificaciones, configuracion/centro-de-notificaciones-como-funciona, configuracion/notificaciones-por-rol, clientes/tipos-de-cliente, glosario/que-es-el-churn]
status: draft
updated: 2026-09-25
---

# Which alerts you get and where they come from

**In short:** alerts arrive at the bell at the top, in the **Notifications** panel (**All** and **Unread** tabs). Which ones are sent, by **Email** or **Push** and to which role, is decided by the owner in **Settings › Notification center**.

## The ones that reach the bell

![The Notifications panel with the All and Unread tabs](/assets/es/navegacion/notificaciones/panel.png)

Each alert starts with its module in bold, then the text, and ends with the date. Unread ones have a red dot. Two alerts seen in the test account:

| Alert | When it arrives |
|---|---|
| **Agenda:** “Client Carlos booked an appointment” | A client booked online |
| **Agenda:** “A time block has been created…” | Someone created a block in the calendar |

How to use the panel is in [See your notifications](/ayuda/navegacion/notificaciones).

## The ones the owner can turn on

In **Settings › Notification center** (“View and manage all the automatic messages sent to your team and clients. This setting is general and applies to all locations.”) there is one switch per alert and per channel, with a tab for each role.

![The Notification center with its groups and switches](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

| Group | Alert, as the screen says it |
|---|---|
| **Clients** · Client import | “When one of your own client imports fails later” · “When the import process finishes successfully” |
| **Clients** · Client satisfaction | “When a client leaves a bad review” |
| **Clients** · Client statuses | “When a client becomes 'Churn' (lost)” · “…'Pre-Churn' (Possible loss)” · “…“Recovered”” · “…“VIP”” |
| **Clients** · Actions on clients | “When a member of the local team blocks a client” |
| **Products** · Quantities | “When a product is running low” · “When a product is out of stock” |
| **Products** · Combos and Import | The same alerts for combos, and when an import fails or finishes |
| **Calendar** · Team | “When a barber's schedule is more than [Percentage] booked” · “When the barbershop's occupancy for the day is more than [Percentage]” |
| **Calendar** · Block | “When a barber creates a block in their calendar” |
| **Calendar** · Vacations | “When a barber requests vacation” · “When a rent barber creates a vacation period” |
| **Metrics** · Performance | “When the health indicator of any metric drops to a very low level (yellow or red)” · “…rises to a good level (green)” |
| **Metrics** · Team | “Every 3 months, when the average client retention of one of the barbers is above [Percentage]” · “…below [Percentage]” |
| **Reports** | “Sending of the daily / weekly / monthly / quarterly / annual summary reports” · “Suggestion to raise prices when you have good demand and retention” |

Each role has its own tab: **Location administrator**, **Commission barber**, **Rent barber**, **Receptionist - front desk** and **Owner**.

![The Notification center's tabs by role](/assets/es/configuracion/notificaciones-por-rol/pestanas.png)

> [!NOTE]
> What's confirmed: the bell panel with two **Calendar** alerts and the list of switches in the Notification center. We haven't confirmed which of these alerts reach the bell as well as by email or push, or the exact text of each one when it arrives.

## Frequently asked questions

**What are “Churn” and “Pre-Churn”?**
They're the **Lost** and **Nearly lost** statuses in the client list ([Churn: when a client is lost](/ayuda/glosario/que-es-el-churn)).

**I'm not getting any alerts.**
Ask the owner to check the tab for your role in **Settings › Notification center** and make sure the alert has **Email** or **Push** turned on.

**Do my clients get alerts?**
The Settings card says “Review notifications sent to clients and barbers about appointments.” What the client receives and when isn't documented yet.
