---
id: agendamiento-online/cita-confirmada
title: "La cita confirmada: agregar al calendario y agendar otra"
description: "La pantalla Confirmado que ve el cliente al terminar la reserva: sus citas, Agregar al calendario, Tu orden y Agendar otra cita."
section: agendamiento-online
order: 130
group: "Pago y confirmación"
roles: [owner, admin, recepcion]
screens: [/online-booking]
keywords: [confirmado, cita confirmada, reserva lista, agregar al calendario, calendario del celular, google calendar, calendario de iphone, archivo ics, agendar otra cita, tu orden, resumen de la reserva, después de reservar]
related: [agendamiento-online/pagar-la-reserva, agendamiento-online/confirmar-la-reserva, agendamiento-online/citas-que-crea-el-cliente, agendamiento-online/agregar-otra-cita]
status: review
updated: 2026-09-30
---

# La cita confirmada: agregar al calendario y agendar otra

**En resumen:** al terminar, el cliente ve **Confirmado** · «Listo, ahora agrégala a tu calendario». Cada cita tiene su botón **Agregar al calendario**. Abajo está **Tu orden** con el total y el botón **Agendar otra cita**.

![La pantalla Confirmado con la cita, Agregar al calendario, Tu orden y Agendar otra cita](/assets/es/agendamiento-online/cita-confirmada/pantalla.png)

## Qué ve

| Parte | Qué muestra |
|---|---|
| Título | Un círculo verde con un visto, **Confirmado** y «Listo, ahora agrégala a tu calendario» |
| Una tarjeta por cita | El servicio (o «Men's Haircut + Beard Trim» si son varios), su nombre, «Barbero: Mateo» (o «Barbero: Sin preferencia»), la fecha y la hora («30/SEP/2026 - 10:00 AM (30 min)») y el botón **Agregar al calendario** |
| **Tu orden** | **Subtotal**, **Propinas**, **Impuestos**, **Cargo** y **Total** |
| Botones | **Agendar otra cita** y, si la reserva se abrió en el panel de tu sitio web, **Salir** |

## Agregar al calendario

Al tocar **Agregar al calendario**, el cliente guarda la cita en el calendario de su celular o su computador:

- **En iPhone o iPad**, se abre directamente para agregarla a su calendario.
- **En Android o en el computador**, se descarga un archivo `appointment.ics`. Al abrirlo, su calendario (Google Calendar, Outlook…) le ofrece guardar la cita.

El evento lleva el nombre de tu barbería y el servicio como título («Mi Barbería — Hot towel shave»), la sucursal como lugar, «Servicio: …» y «Barbero: …» en la descripción, y la hora de inicio y fin de la cita.

Si reservó varias citas, cada tarjeta tiene su propio botón: hay que agregarlas una por una.

## Agendar otra cita

**Agendar otra cita** empieza una reserva nueva con el mismo cliente: vuelve a elegir sede (o servicio, si tu barbería tiene una sola sucursal). No tiene que escribir su celular otra vez.

## Preguntas frecuentes

**¿Por qué dice «Barbero: Sin preferencia» si ya tiene barbero?**
La cita sí quedó con un barbero en tu calendario, pero la pantalla no le dice cuál. Mira [Sin preferencia: cómo se asigna el barbero](/ayuda/agendamiento-online/sin-preferencia-al-reservar).

**¿Propinas, Impuestos y Cargo salen en cero?**
En la pantalla **Confirmado** salen en $0.00; el **Total** es la suma de los precios de las citas.

**¿El cliente recibe un mensaje de confirmación?**
Depende de tu **Centro de notificaciones**: ahí decides qué avisos de citas se envían y por qué canal. Mira [Centro de notificaciones: cómo funciona](/ayuda/configuracion/centro-de-notificaciones-como-funciona) y [Notificaciones del calendario](/ayuda/configuracion/notificaciones-del-calendario).

> [!NOTE]
> Comprobado con una reserva de prueba el 30 de septiembre de 2026, con barbero elegido y **Pagar en tienda**. Falta ver cómo se ve una cita **Sin preferencia** en esta pantalla.
