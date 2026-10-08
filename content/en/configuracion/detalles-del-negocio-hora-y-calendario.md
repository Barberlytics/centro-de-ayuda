---
id: configuracion/detalles-del-negocio-hora-y-calendario
title: "Business details: time zone, time format, week and holidays"
description: "Where you choose the time zone, the 12- or 24-hour format, the day the week starts, opening hours and the holidays when you're closed."
section: configuracion
order: 20
group: "Account settings"
roles: [owner, admin]
screens: [/business-details/*]
keywords: [business details, time zone, time format, 12 hour, 24 hour, start of week, opening time, closing time, barbershop hours, holidays, days off, public holidays, closed on a holiday, daylight saving time, time and calendar settings]
related: [configuracion/detalles-del-negocio-enlaces-en-linea, configuracion/periodos-de-cierre, sucursales/que-es-propio-de-cada-sucursal, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Business details: time zone, time format, week and holidays

**In short:** in **Settings › Business details**, the “Time and calendar settings” block defines how time looks across the whole app: the time zone, whether times use a 12- or 24-hour format, which day the week starts on, what time you open and close and which holidays you don't work.

## Where it is

**Settings › Account settings › Business details**. The card says: “Manage settings such as your company name and time zone.”

## The fields

The “Time and calendar settings” block explains: “Choose the time zone and format that best fit your business. Daylight saving time changes will be applied automatically based on the selected time zone.”

![The Time and calendar settings form with the time zone, time format, start of week, hours and holidays](/assets/es/configuracion/detalles-del-negocio-hora-y-calendario/formulario.png)

| Field | Required | What it is |
|---|---|---|
| **Time zone** | Yes | The zone your barbershop works in, for example America/Bogota. It's used to work out appointment times and daylight saving changes. |
| **Time format** | Yes | How times are written: “12 hours (e.g. 9:00pm)” or 24 hours. |
| **Week start** | Yes | The day the week starts on in the calendar, for example Monday. |
| **Start time** | No | The time your barbershop opens. |
| **End time** | No | The time it closes. |
| **Non-working holidays** | No | The holidays when you're closed. |

## Choose the holidays

1. Tap **Non-working holidays**. The field shows how many you have, for example “8 selected”.
2. In the list, check the national holidays when you won't be open. Each one comes with its date: New Year's Day, Epiphany… all the way to Christmas.
   ![The list of the country's holidays with their dates, to check the ones you don't work](/assets/es/configuracion/detalles-del-negocio-hora-y-calendario/festivos.png)
3. Tap **Save**, at the bottom of the page.

The screen explains it like this: “Select the holidays when you won't be open.” And it warns: “This is a general setting, but it can be adjusted for each location in its own settings.”

> [!NOTE]
> What the app shows when you tap **Save** and where this setting is adjusted for a single location haven't been confirmed yet.

## Frequently asked questions

**My locations are in different countries. Which time zone do I use?**
Each location has its own **Time zone**, **Currency** and **Language** in **Settings › Locations › Edit**. See [What changes from one location to another](/ayuda/sucursales/que-es-propio-de-cada-sucursal). The one on this screen is the general one.

**Does a holiday checked here block appointments on that day?**
The screen only says these are the days when you won't be open. How that day looks in the calendar and whether appointments can be booked haven't been confirmed yet. If you're closing for several days in a row, use [Business closure periods](/ayuda/configuracion/periodos-de-cierre).

**I'm a barber and I want to see times in 24-hour format.**
With the barber profile, **Settings** has its own **Time format**. It only changes your calendar, not the barbershop's or your clients'.
