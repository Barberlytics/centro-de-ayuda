---
id: agendamiento-online/cita-confirmada
title: "The confirmed appointment: add to calendar and book another"
description: "The Confirmed screen the client sees when they finish booking: their appointments, Add to calendar, Your order and Book another appointment."
section: agendamiento-online
order: 130
group: "Payment and confirmation"
roles: [owner, admin, recepcion]
screens: [/online-booking]
keywords: [confirmed, confirmed appointment, booking done, add to calendar, phone calendar, google calendar, iphone calendar, ics file, book another appointment, your order, booking summary, after booking]
related: [agendamiento-online/pagar-la-reserva, agendamiento-online/confirmar-la-reserva, agendamiento-online/citas-que-crea-el-cliente, agendamiento-online/agregar-otra-cita]
status: review
updated: 2026-09-30
---

# The confirmed appointment: add to calendar and book another

**In short:** when they finish, the client sees **Confirmed** · “All set, now add it to your calendar.” Each appointment has its own **Add to calendar** button. Below is **Your order** with the total and the **Book another appointment** button.

![The Confirmed screen with the appointment, Add to calendar, Your order and Book another appointment](/assets/es/agendamiento-online/cita-confirmada/pantalla.png)

## What they see

| Part | What it shows |
|---|---|
| Title | A green circle with a check mark, **Confirmed** and “All set, now add it to your calendar” |
| One card per appointment | The service (or “Men's Haircut + Beard Trim” if there are several), its name, “Barber: Mateo” (or “Barber: No preference”), the date and time (“30/SEP/2026 - 10:00 AM (30 min)”) and the **Add to calendar** button |
| **Your order** | **Subtotal**, **Tips**, **Taxes**, **Fee** and **Total** |
| Buttons | **Book another appointment** and, if booking was opened in the panel on your website, **Exit** |

## Add to calendar

When they tap **Add to calendar**, the client saves the appointment to the calendar on their phone or computer:

- **On an iPhone or iPad**, it opens directly so they can add it to their calendar.
- **On Android or a computer**, an `appointment.ics` file is downloaded. When they open it, their calendar (Google Calendar, Outlook…) offers to save the appointment.

The event uses your barbershop's name and the service as the title (“Mi Barbería — Hot towel shave”), the location as the place, “Service: …” and “Barber: …” in the description, and the appointment's start and end time.

If they booked several appointments, each card has its own button: they have to add them one by one.

## Book another appointment

**Book another appointment** starts a new booking with the same client: they choose a location again (or the service, if your barbershop has only one location). They don't have to enter their phone number again.

## Frequently asked questions

**Why does it say “Barber: No preference” if they already have a barber?**
The appointment did end up with a barber in your calendar, but the screen doesn't tell the client which one. See [No preference: how the barber is assigned](/ayuda/agendamiento-online/sin-preferencia-al-reservar).

**Tips, Taxes and Fee show as zero?**
On the **Confirmed** screen they show as $0.00; the **Total** is the sum of the appointment prices.

**Does the client get a confirmation message?**
It depends on your **Notification center**: there you decide which appointment alerts are sent and through which channel. See [Notification center: how it works](/ayuda/configuracion/centro-de-notificaciones-como-funciona) and [Calendar notifications](/ayuda/configuracion/notificaciones-del-calendario).

> [!NOTE]
> Checked with a test booking on September 30, 2026, with a chosen barber and **Pay at the shop**. We still need to see how a **No preference** appointment looks on this screen.
