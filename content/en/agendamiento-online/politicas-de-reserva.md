---
id: agendamiento-online/politicas-de-reserva
title: "The booking and cancellation policies your client sees"
description: "The policy text of online booking, the tags that fill in automatically from your cancellation settings, and how to adapt it to your barbershop."
section: agendamiento-online
order: 230
group: "Online booking settings"
roles: [owner, admin]
screens: [/online-booking]
keywords: [policies, cancellation policy, booking policies, booking terms, policy text, policy preview, tags, time_for_cancel, fee_cancellation, max_cancellations, no show, arriving late, barbershop rules]
related: [agendamiento-online/cancelar-o-reprogramar-en-linea, agendamiento-online/confirmar-la-reserva, configuracion/agendamiento-online-ajustes]
status: draft
updated: 2026-09-30
---

# The booking and cancellation policies your client sees

**In short:** at the bottom of **Settings › Online booking** is the “Scheduling and cancellation policy preview.” It's the text of rules the client sees when booking. It has three tags that fill in automatically with what you set under “Online cancellation and rescheduling.”

## Where it is

**Settings › Account settings › Online booking**, last block: “In the following text you can set up the cancellation policies clients will see when they book an appointment at your barbershop.”

![The policy preview with the text, the tags and the table of values](/assets/es/agendamiento-online/politicas-de-reserva/bloque.png)

## The tags

The screen says: “You can use the following tags, whose values will be replaced by the settings you apply under: ‘Online cancellation and rescheduling’.”

| Tag | Replaced by | Example |
|---|---|---|
| `<<time_for_cancel>>` | The limit to cancel or reschedule | 3 hours |
| `<<fee_cancellation>>` | The **Late cancellation fee** | 10.00 |
| `<<max_cancellations>>` | The **Maximum number of online cancellations allowed** | 5 |

## Example

The text that comes with the screen is in English and includes this sentence:

```text
Cancellations made within <<time_for_cancel>> of the scheduled appointment time will incur <<fee_cancellation>>% cancellation fee.
```

With 3 hours and 10%, the client reads: “Cancellations made within 3 horas of the scheduled appointment time will incur 10.00% cancellation fee.” A version for Spanish-speaking clients at Mi Barbería could be:

```text
Si cancelas o cambias tu cita con menos de <<time_for_cancel>> de anticipación, se cobra el <<fee_cancellation>> % del servicio. Puedes cancelar en línea hasta <<max_cancellations>> veces.
```

After changing the text, tap **Save** at the bottom of the page.

> [!NOTE]
> How the text is edited on the screen and exactly where the client sees it when booking hasn't been checked yet. Neither has whether the text can be kept in several languages.

## Frequently asked questions

**Why do my policies show up in English?**
It's the text that comes by default. Replace it with your own, in the language your clients speak.

**I changed the cancellation limit and the text updated on its own. Is that normal?**
Yes, if you use the tags. That's why it's better to write `<<time_for_cancel>>` instead of “3 hours.”
