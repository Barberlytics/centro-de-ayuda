---
id: agendamiento-online/mensajes-al-reservar
title: "Messages your client may see when booking"
description: "What the online booking alerts mean: blocked account, time taken, barber unavailable, no payment methods and no barbers, and what to do about each one."
section: agendamiento-online
order: 290
group: "If something goes wrong"
roles: [owner, admin, recepcion]
screens: [/online-booking, /customers/*]
keywords: [booking error, I can't book, blocked account, blocked client, time taken, no longer available, barber unavailable, no payment methods, no barbers, something went wrong, booking error message]
related: [agendamiento-online/no-hay-horas-disponibles, agendamiento-online/pagar-la-reserva, agendamiento-online/sin-preferencia-al-reservar, agendamiento-online/no-aparece-un-servicio-o-barbero]
status: draft
updated: 2026-09-30
---

# Messages your client may see when booking

**In short:** online booking shows a message when something keeps the client from finishing. Most of the time it's a time another client took a moment earlier, or something in the client's profile or the location.

| Message | When it shows up | What to do |
|---|---|---|
| “Your account has been blocked. Please contact the business for more information.” | When they enter their phone number, if that client is blocked in your barbershop (**Block client**, [Block a client](/ayuda/clientes/bloquear-a-un-cliente)). | If it was a mistake, unblock them in their profile. If not, the client has to call you. |
| “That time slot was just taken. Please choose another.” | When booking, if another client took that time a moment earlier. With **No preference**, if no barber on your list was left free. | The client goes back to **Date and time** and picks another time. |
| “That time slot is no longer available. Please choose another.” | When booking, if the time stopped being free (a block, a schedule change). | Pick another time. |
| “The barber isn't available at that time. Please choose another.” | When booking, if the chosen barber no longer works at that time. | Pick another time or another barber. |
| “No payment methods available” | On the **Pay** screen, if the location has no ways to pay for that client. | Check the location's payment methods. |
| “No services available” | On **Services**, when they pick a location that has no services turned on for booking. | Activate services at that location ([Activate services in a location](/ayuda/sucursales/activar-servicios-en-una-sucursal)) or tell the client to pick another location. |
| “No barbers available for this service” | On **Barbers**, if no barber at the location does that service. It shows for a moment while the list loads. | If it doesn't go away, check who does the service ([A service or a barber doesn't show up](/ayuda/agendamiento-online/no-aparece-un-servicio-o-barbero)). |
| “Something went wrong. Please try again.” | A failure that isn't any of the above. | Try again. If it keeps happening, they should call the phone number on the location's card. |

![Services for a location with no services turned on: No services available](/assets/es/agendamiento-online/mensajes-al-reservar/sin-servicios.png)

## Frequently asked questions

**Some appointments were booked and others weren't.**
If the client put together several appointments and one fails when booking, the earlier ones may have been created. Check your calendar before they try again.

> [!NOTE]
> The texts are the ones on the published booking page. “No services available” (a test location with no services) and “No barbers available for this service” (while the list was loading) were seen live; the others weren't triggered.
