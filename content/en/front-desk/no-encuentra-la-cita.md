---
id: front-desk/no-encuentra-la-cita
title: "The kiosk can't find the client's appointment"
description: "Why the kiosk says “No appointment found” to a client who does have an appointment, and what to check."
section: front-desk
order: 90
roles: [owner, admin, recepcion]
screens: [/calendar]
keywords: [no appointment found, can't find my appointment, I have an appointment, check in not working, kiosk can't find, different number, already checked in, another location]
related: [front-desk/check-in-con-cita, calendario/marcar-que-el-cliente-llego, clientes/perfil-de-un-cliente]
status: draft
updated: 2026-09-30
---

# The kiosk can't find the client's appointment

**In short:** the kiosk looks for a **pending** appointment today under that phone number. If it doesn't find one, it shows “No appointment found.” Check these things in order.

When the kiosk doesn't find a pending appointment for that phone number, the client sees this:

![The No appointment found screen with Book an appointment and Join the waitlist](/assets/es/front-desk/no-encuentra-la-cita/sin-cita.png)

## What to check first

1. **The phone number.** Is it the same one in their client record, with the right country (+57, +1, +58)? If they booked with a different number, the kiosk won't recognize them.
2. **Whether they're already checked in.** If someone already tapped **Check in** in the calendar (or the client already checked in), the appointment doesn't show up again at the kiosk. There's no need to repeat anything.
3. **The date.** The appointment has to be for today.
4. **The location.** The kiosk works with one location; if the appointment is at another, it won't find it.

If everything checks out and it still can't find it, mark it yourself from the calendar with **Check in**: [Mark that the client has arrived](/ayuda/calendario/marcar-que-el-cliente-llego).

> [!NOTE]
> Verified: an appointment that's already **Checked in** gives “No appointment found.” The rest is still to be confirmed.

## Related

- [Check-in for a client with an appointment](/ayuda/front-desk/check-in-con-cita)
