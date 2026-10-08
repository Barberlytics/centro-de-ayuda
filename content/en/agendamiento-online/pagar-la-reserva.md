---
id: agendamiento-online/pagar-la-reserva
title: "Book and pay at the barbershop"
description: "How booking ends for a client who pays when they arrive: the Book now and pay at the shop button, or the Pay screen with the Pay at the shop option."
section: agendamiento-online
order: 120
group: "Payment and confirmation"
roles: [owner, admin, recepcion]
screens: [/online-booking]
keywords: [pay at the shop, pay at the barbershop, pay on arrival, book now and pay at the shop, payment method, pay for the booking, cash, card, pay screen]
related: [agendamiento-online/metodos-de-pago-de-la-reserva, agendamiento-online/confirmar-la-reserva, agendamiento-online/cita-confirmada, agendamiento-online/agregar-otra-cita]
status: review
updated: 2026-09-30
---

# Book and pay at the barbershop

**In short:** the last button of the booking depends on the location's payment methods. If payment is only at the barbershop, it says **Book now and pay at the shop** and the appointment is confirmed when they tap it. If the location has other ways to pay, it says **Book now!**, opens the **Pay** screen, and there the client chooses **Pay at the shop**.

## If the location only charges at the barbershop

On **Confirm appointment** the button says **Book now and pay at the shop**. When they tap it, the appointment is booked and goes straight to **Confirmed**. There's no payment screen: the client pays when they arrive.

![Confirm appointment with the Book now and pay at the shop button](/assets/es/agendamiento-online/pagar-la-reserva/pagar-en-tienda.png)

## If the location has other ways to pay

1. On **Confirm appointment**, tap **Book now!**. Nothing is booked yet.
2. **Pay** opens · “Choose the payment method you want to pay with,” with the **Other** list.
3. Tap **Pay at the shop**. The button below, which said “Select payment method,” changes to **Pay $50.00**, with the total for all their appointments.
   ![The Pay screen with Pay at the shop chosen and the Pay $50.00 button](/assets/es/agendamiento-online/pagar-la-reserva/tienda-elegida.png)
4. Tap **Pay $…**. While it books, it says “Booking...”. Then it goes to **Confirmed** ([The confirmed appointment](/ayuda/agendamiento-online/cita-confirmada)).

Even though the button says **Pay $…**, with **Pay at the shop** nothing is charged at that moment: the client pays when they arrive.

The arrow at the top left goes back to **Confirm appointment** without booking.

## Frequently asked questions

**Is “Pay at the shop” cash or card?**
Both. If your location accepts cash and card, booking shows them together as a single option: **Pay at the shop**.

**Does the client see the total if they booked several appointments?**
Yes. **Pay $…** and **Your order**, on **Confirmed**, add up all the appointments in the booking.

**Where do I choose whether my clients can pay at the barbershop?**
In **Settings › Online booking**, “Accepted payment methods” block: the checkbox with the bill icon is payment at the shop. See [How the client can pay for an appointment booked online](/ayuda/agendamiento-online/metodos-de-pago-de-la-reserva).

**Each location shows a different button.**
That's normal: payment methods belong to each location. One that only charges at the barbershop shows **Book now and pay at the shop**; another with more ways to pay shows **Book now!**.

> [!NOTE]
> Checked with a test booking on September 30, 2026 (**Pay at the shop** › **Pay $50.00** › **Confirmed**). Online payment isn't documented in this help center yet.
