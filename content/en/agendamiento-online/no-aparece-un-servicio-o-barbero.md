---
id: agendamiento-online/no-aparece-un-servicio-o-barbero
title: "A service or a barber doesn't show up when booking"
description: "What to check when a client can't find a service or a barber on the online booking page."
section: agendamiento-online
order: 270
group: "If something goes wrong"
roles: [owner, admin]
screens: [/online-booking, /services, /team/barbers]
keywords: [service doesn't show up, barber doesn't show up, missing service in booking, hidden barber, private service, not showing in online booking, incomplete online booking]
related: [agendamiento-online/que-ve-tu-cliente, agendamiento-online/elegir-sede-servicio-y-barbero, sucursales/no-veo-un-servicio-o-producto-en-mi-sucursal]
status: review
updated: 2026-09-25
---

# A service or a barber doesn't show up when booking

**In short:** it's almost always one of these: the service is set to **Private**, it isn't turned on at that location, the barber has **Visibility for booking** turned off, or they aren't turned on at the location. Check in this order.

## If a service is missing

1. **Is it Public?** Open it in **Services › Actions › Edit** and look at the **Private / Public** switch. If it's **Private**, it doesn't show in online booking.
2. **Is it turned on at that location?** The client chooses the location first. Check **Services › Actions › Activate services** with that location selected at the top.
3. **Is its category Public?** Categories also have the **Private / Public** switch.

## If a barber is missing

1. **Did they choose the service first?** The **Barbers** tab is turned off until the client picks a service.
2. **Do they do that service?** In their public profile, **View** shows the **Services** they do.
3. **Do they have Visibility for booking turned on?** It's in their record, **Profile** tab.
4. **Are they turned on at that location?** **Team › Actions › Activate team in this location**.

> [!TIP]
> After fixing it, open your booking link on your phone and check that it now shows up.

## Frequently asked questions

**I can see them in the calendar, but not in booking.**
That's normal if they're **Private** or have visibility turned off: the calendar is for your team, and online booking only shows what's public.
