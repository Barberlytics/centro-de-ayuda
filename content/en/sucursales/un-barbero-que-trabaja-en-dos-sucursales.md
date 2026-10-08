---
id: sucursales/un-barbero-que-trabaja-en-dos-sucursales
title: "A barber who works in two locations"
description: "How to have the same person work in two locations: a single record, activated in both, with a schedule in each and their services activated in both."
section: sucursales
order: 170
group: "Activate team and catalogs"
roles: [owner]
screens: [/team/barbers, /team/activate]
keywords: [barber in two locations, works in two locations, same barber in several locations, share a barber, activate in two locations, schedule per location, don't duplicate barber, payroll per location, one barber in two shops]
related: [sucursales/equipo-compartido-entre-sucursales, sucursales/activar-equipo-en-una-sucursal, equipo/horas-de-trabajo-del-equipo, sucursales/activar-servicios-en-una-sucursal, nomina/filtrar-la-nomina-por-fechas-y-sucursal]
status: draft
updated: 2026-09-25
---

# A barber who works in two locations

**In short:** don't create them twice. Carlos is **one person** on the company's team: you activate him in both locations, set a schedule for him in each one and make sure his services are activated in both.

## Steps

1. **Create him once** (if he doesn't exist). In any location, **Team › Actions › Create team member**, choose the role and fill in the profile ([Create a commission barber](/ayuda/equipo/crear-barbero-por-comision) or [a rent barber](/ayuda/equipo/crear-barbero-de-renta)).
2. **Activate him in the first location.** Choose the location at the top, **Team › Actions › Activate team in this location**, turn on his switch and tap **Save** ([Activate the team in a location](/ayuda/sucursales/activar-equipo-en-una-sucursal)).
   ![The Activate team in this location screen with one switch per person](/assets/es/sucursales/activar-equipo-en-una-sucursal/pantalla.png)
3. **Activate him in the second.** Switch locations at the top and repeat step 2. It's the same record: it isn't duplicated.
4. **Set his schedule in each location.** In **Team › Working hours**, the **Location** filter shows each one's grid. Tap a day's box and choose **Edit this day** ([The team's working hours](/ayuda/equipo/horas-de-trabajo-del-equipo)). For example, Carlos Monday through Wednesday at Sucursal Norte and Thursday through Saturday at Sucursal Centro.
5. **Check his services in both.** Services are activated per location ([Activate services in a location](/ayuda/sucursales/activar-servicios-en-una-sucursal)). If the haircut Carlos does isn't activated at the second one, it can't be booked there.

## How it looks afterward

- In **Team**, Carlos appears in the list for both locations, with each one's **Location** column.
- In the **Calendar**, he has his column in whichever location you choose at the top, on the days he has a schedule there.
- In **Payroll**, the **Location** filter adds up only what was done at the chosen location. For Carlos's total, check both ([Filter payroll by dates and location](/ayuda/nomina/filtrar-la-nomina-por-fechas-y-sucursal)).

> [!NOTE]
> What's been checked on screen: activation per location, the **Location** filter in Working hours and in Payroll, and that Team shows only the activated people. We haven't checked, with a test barber active in two locations at once, what happens if his schedule overlaps in both on the same day, or whether his **Compensation** percentages can differ per location.

## Frequently asked questions

**Are his clients and history the same in both?**
It's the same person. The **Clients** list is viewed per location; each client appears with their **Location**.

**Can he have different prices per location?**
His record has a single **Services** tab with his own prices. Whether they change per location isn't documented.

**I activated him and I don't see him in the second location's calendar.**
Check that he has a schedule there in **Working hours**. With the **Team\*** filter set to **Working**, only those with a shift that day show up ([I can't see a barber in my location](/ayuda/sucursales/no-veo-a-un-barbero-en-mi-sucursal)).
