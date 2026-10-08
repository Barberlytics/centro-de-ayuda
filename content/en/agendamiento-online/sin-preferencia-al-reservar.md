---
id: agendamiento-online/sin-preferencia-al-reservar
title: "No preference: how the barber is assigned in online booking"
description: "What happens when the client chooses No preference when booking: which times they see, which barber gets the appointment and how your Team order decides it."
section: agendamiento-online
order: 80
group: "How your client books"
roles: [owner, admin, recepcion]
screens: [/online-booking, /team/barbers/lineup]
keywords: [no preference, any available barber, any barber, who serves me, assign barber, no-preference order, lineup, ordering, client distribution, assigned barber, I didn't choose a barber]
related: [equipo/orden-para-clientes-sin-preferencia, calendario/clientes-sin-preferencia-de-barbero, agendamiento-online/elegir-sede-servicio-y-barbero, agendamiento-online/elegir-fecha-y-hora, agendamiento-online/mensajes-al-reservar]
status: review
updated: 2026-09-30
---

# No preference: how the barber is assigned in online booking

**In short:** if the client chooses **No preference**, they see the times when any barber is free. The barber is decided at the end, when they tap to book: the appointment goes to the first barber on your **No preference** list (in **Team**) who is free at that time.

## Where the client chooses it

- **On Barbers**, the first option in the list is **No preference**.
  ![The list of barbers with No preference at the top](/assets/es/agendamiento-online/como-reserva-tu-cliente/barberos.png)
- **On Date and time**, below their barber's times there's a **No preference** block · “Any available barber” with how many times there are (“26 available”). Tapping it expands the times of any barber, with “+19 more” (or whatever the number is) to see the rest. If they pick one of those times, the appointment becomes a no-preference one.
  ![The No preference block expanded below the barber's times, with +19 more](/assets/es/agendamiento-online/sin-preferencia-al-reservar/bloque.png)
  ![Date and time with No preference chosen and its times by Morning and Afternoon](/assets/es/agendamiento-online/sin-preferencia-al-reservar/horas.png)
- **The barber selector** on Date and time also opens and lets them switch between **No preference** and each barber.
  ![The barber selector open, with No preference marked and the list of barbers](/assets/es/agendamiento-online/sin-preferencia-al-reservar/selector.png)

There are usually more times with **No preference** than with a specific barber. For example, 10:00 AM may be free with another barber even though their usual one doesn't have that gap.

## What the client sees before booking

On **Confirm appointment** the card says “With No preference.” The barber isn't assigned yet.

![The confirmation with With No preference](/assets/es/agendamiento-online/sin-preferencia-al-reservar/confirmar.png)

## How the barber is chosen

When booking, the page checks your list under **Team › Actions › Order for walk-in and no-preference booking**, **No preference** tab:

1. It only looks at the barbers who are **turned on** in that tab.
2. It goes through them **in the order of the list**: 1, 2, 3…
3. The first one who is free at that time for that service gets the appointment.
4. If none is free (for example, someone booked that gap a second earlier), the client sees “That time slot was just taken. Please choose another.”

How to set up that list is covered in [Order for no-preference clients](/ayuda/equipo/orden-para-clientes-sin-preferencia).

> [!IMPORTANT]
> A barber who is **turned off** in the **No preference** tab never gets a no-preference appointment from online booking. The client can still book them if they choose them by name.

## When No preference doesn't show up

- If **only one barber** does that service at the location, the page picks them automatically and doesn't offer **No preference**.
- If **no barber is turned on** in the **No preference** tab, the option doesn't show up.

## What happens afterward

- In your calendar the appointment lands in the assigned barber's column and is marked **No preference: Yes** ([Clients with no barber preference](/ayuda/calendario/clientes-sin-preferencia-de-barbero)).
- A commission barber is paid with their **No-preference client commission**; a rent barber gets the **No-preference appointment deduction**.
- On the **Confirmed** screen the client sees “Barber: No preference”: they aren't told who will serve them.

## Frequently asked questions

**I want a new barber to get more no-preference appointments.**
Move them up the list in the **No preference** tab and tap **Save**. As long as they're free, they get it before the ones below.

**Does No preference rotate among the barbers?**
No. It always starts with number 1 on the list. It only moves to the next one if the previous one is busy.

**Do appointments with several services go to the same barber?**
Yes. The barber is found using the appointment's first service and the other services are added to them, one after the other.

> [!NOTE]
> Whether the times the client sees with **No preference** include the barbers turned off in that tab is still to be confirmed.
