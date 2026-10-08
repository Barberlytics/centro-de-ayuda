---
id: servicios/crear-un-servicio-avanzado
title: "Create a service: advanced options"
description: "A service's Advanced tab: restricting the days and hours it can be booked, allowing another appointment during the service (Multi-service) and adding prep time."
section: servicios
order: 80
group: "Create and edit"
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [advanced tab, time restrictions, restrict a service's hours, mornings only, only certain days, multi-service, two appointments at once, prep time, time between appointments, clean the chair, service color, service schedule]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-equipo, servicios/editar-un-servicio, calendario/no-puedo-agendar-a-esta-hora]
status: draft
updated: 2026-09-25
---

# Create a service: advanced options

**In short:** in the **Advanced** tab you can limit the days and hours when the service can be booked (**Booking time restrictions**), let the barber take another appointment while doing it (**Multi-service**) and set aside a few minutes before or after (**Prep time**). Finish with **Save**.

## Steps

1. Complete **General** and **Team** ([Create a service: general details](/ayuda/servicios/crear-un-servicio)). The **Advanced** tab becomes available.
   ![The Advanced tab with Booking time restrictions and the Service schedule details](/assets/es/servicios/crear-un-servicio-avanzado/avanzado.png)
2. If the service can only be booked on certain days or at certain hours, tap **Add a Time Restriction**, choose **Select a day**, **Start time** and **End time**, and tap **Add**. Repeat for each day.
   ![A restriction's form with the day, the start time, the end time and the Add button](/assets/es/servicios/crear-un-servicio-avanzado/restriccion.png)
3. Under **Service schedule details**, turn on **Multi-service** or **Prep time** if you need them.
4. Tap **Save**.

## Booking time restrictions

They're for services that aren't done at just any hour: a color that's only done in the morning, or a service you only offer on Saturdays.

| Field | Required | What it is |
|---|---|---|
| **Select a day** | Yes | The day of the week the restriction applies to. |
| **Start time** | Yes | From what time it can be booked that day. |
| **End time** | Yes | Until what time it can be booked that day. |

Tap **Add** to add the restriction to the list. With no restrictions, the service can be booked at any time in the barber's schedule.

## Service schedule details

| Switch | What the screen says | What it's for |
|---|---|---|
| **Multi-service** | “This option lets you schedule another appointment with another service during your service.” | For services with downtime, like a color while it sets: the barber can see another appointment in that time. |
| **Prep time** | “This option lets you have time at the start or end of the service to prepare for or wrap up the service.” | To set aside a few minutes before or after the service, for example to clean the chair, without them being bookable. |

> [!NOTE]
> This tab was read from **Edit** on a service that already existed. How **Multi-service** and **Prep time** look in the calendar once turned on, how many minutes the prep time sets aside and what happens when you tap **Save** haven't been checked yet. It will be completed with a test service.

## Frequently asked questions

**Does the restriction apply to online booking or also to my team?**
The block is called **Booking time restrictions**. Whether it also stops your team when booking from the calendar hasn't been checked yet. See [I can't book at this time](/ayuda/calendario/no-puedo-agendar-a-esta-hora).

**Can I add two time slots on the same day?**
Each restriction has one day, one start time and one end time. Add one restriction per time slot.

**When do I use Prep time instead of making the length longer?**
Make the **Service length (minutes)** longer when the time is part of the service and you charge for it. Use **Prep time** when it's your own time, before or after, that you don't want to be bookable.
