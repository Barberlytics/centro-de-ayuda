---
id: sucursales/abrir-una-sucursal-nueva
title: "Opening a new location: the full checklist, step by step"
description: "The order for getting a new location ready: create it, activate the team, services and products, set schedules and check the time, currency and prices."
section: sucursales
order: 70
group: "Create and manage"
roles: [owner]
screens: [/companies/locations, /team/activate, /services/location/activate-service, /products]
keywords: [open a location, new location, second location, location checklist, what to do when opening a location, full checklist, step by step, get the location ready, expand, new shop, new branch]
related: [sucursales/crear-una-sucursal, sucursales/activar-equipo-en-una-sucursal, sucursales/activar-servicios-en-una-sucursal, sucursales/activar-productos-en-una-sucursal, equipo/horas-de-trabajo-del-equipo, empezar/primeros-pasos-del-dueno]
status: draft
updated: 2026-09-25
---

# Opening a new location: the full checklist, step by step

**In short:** a new location starts out empty. Create it, choose it at the top, and activate the team, the services and the products in it. Then set a schedule for each barber and check the time, the currency and the prices. Each step links to the article that explains it.

The rule behind it all: **you create once, for the whole company, and you activate per location**. Your team and your catalogs already exist; you only have to turn them on in the new location.

## Steps

1. **Create the location.** **Settings › Locations › Create Location**. Fill in the fields marked with an asterisk, with that shop's **Currency**, **Language** and **Time zone**, and tap **Create** ([Create a location](/ayuda/sucursales/crear-una-sucursal)).
   ![The Create Location form](/assets/es/sucursales/crear-una-sucursal/formulario.png)
2. **Choose it at the top.** Tap the location's name in the header and choose the new one. Everything that follows is done with it selected ([Switch locations](/ayuda/navegacion/cambiar-de-sucursal)).
3. **Activate the team.** **Team › Actions › Activate team in this location**. Turn on each person under **Barbers** (**Commission** or **Rent**) and **Managers**, and tap **Save** ([Activate the team in a location](/ayuda/sucursales/activar-equipo-en-una-sucursal)). If someone is new, create them first with **Create team member**.
   ![The Activate team in this location screen](/assets/es/sucursales/activar-equipo-en-una-sucursal/pantalla.png)
4. **Activate the services.** **Services › Actions › Activate services**, turn on the ones this shop offers and tap **Save** ([Activate services in a location](/ayuda/sucursales/activar-servicios-en-una-sucursal)).
   ![The Activate services screen](/assets/es/sucursales/activar-servicios-en-una-sucursal/pantalla.png)
5. **Activate the products.** **Products › Actions › Activate barbershop products**, turn on the ones it sells and tap **Save** ([Activate products in a location](/ayuda/sucursales/activar-productos-en-una-sucursal)).
   ![The Activate product screen](/assets/es/sucursales/activar-productos-en-una-sucursal/pantalla.png)
6. **Set the schedules.** **Team › Working hours**, with the **Location** filter set to the new one. Tap each day's box and choose **Edit this day** ([The team's working hours](/ayuda/equipo/horas-de-trabajo-del-equipo)). With no schedule, the calendar says “Nobody works this day.”
7. **Check the time and the calendar.** **Settings › Business details**: **Time zone**, **Time format**, **Week start**, **Start time**, **End time** and **Non-working holidays**. Tap **Save** ([Business details: time and calendar](/ayuda/configuracion/detalles-del-negocio-hora-y-calendario)).
8. **Check the currency and taxes.** **Settings › Pricing** (**Currency** and whether “Prices include taxes”) and **Settings › Taxes** ([Prices: currency and tax calculation](/ayuda/configuracion/precios-moneda-y-calculo-de-impuestos)).
9. **Book the first appointment.** **Calendar › Actions › Create appointment** ([Create an appointment](/ayuda/calendario/crear-una-cita)).

> [!TIP]
> If the new location is going to take bookings online, afterwards check **Settings › Online booking** and make sure the services you want to show are **Public**.

> [!NOTE]
> Steps 3, 4, 5 and 6 were checked on screen (step 3 with **Save** in a test location). Step 1 was written by reading the form without creating anything. Several Settings screens say “it can be adjusted for each location,” but where that per-location adjustment is made isn't documented yet ([General settings and per-location settings](/ayuda/sucursales/ajustes-generales-y-por-sucursal)).

## How to tell it's ready

| Check | Where | What you expect to see |
|---|---|---|
| The team | **Team › Barbers** | Each barber with **Active** status and their **Location** |
| The services | **Calendar › Actions › Create appointment › Service** | The shop's services, with prices |
| The products | **Calendar › Actions › Create quick sale** | The products by category |
| The schedules | **Calendar** with **Team\*** set to **Working** | One column per barber with a shift today |
| The location | **Settings › Locations › View** | **Team** with the number of people activated |

## Frequently asked questions

**Do I have to create the services again?**
No. The catalog belongs to the company. In the new location you only activate them.

**Are clients per location?**
The **Clients** list shows the **Location** column and changes with the location you've selected. Whether a client can belong to two isn't documented.

**How many locations does my plan allow?**
It isn't documented. Ask before you create one.
