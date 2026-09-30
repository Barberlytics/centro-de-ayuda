---
id: agendamiento-online/mensajes-al-reservar
title: "Mensajes que puede ver tu cliente al reservar"
description: "Qué significan los avisos de la reserva online: cuenta bloqueada, horario tomado, barbero no disponible, sin métodos de pago y sin barberos, y qué hacer con cada uno."
section: agendamiento-online
order: 300
group: "Si algo falla"
roles: [owner, admin, recepcion]
screens: [/online-booking, /customers/*]
keywords: [error al reservar, no puedo reservar, cuenta bloqueada, cliente bloqueado, horario tomado, ya no está disponible, barbero no disponible, no hay métodos de pago, no hay barberos, algo salió mal, mensaje de error reserva]
related: [agendamiento-online/no-hay-horas-disponibles, agendamiento-online/pagar-la-reserva, agendamiento-online/sin-preferencia-al-reservar, agendamiento-online/no-aparece-un-servicio-o-barbero]
status: draft
updated: 2026-09-30
---

# Mensajes que puede ver tu cliente al reservar

**En resumen:** la reserva online avisa con un mensaje cuando algo impide terminar. Casi siempre es una hora que otro cliente tomó un momento antes, o algo de la ficha del cliente o de la sucursal.

| Mensaje | Cuándo sale | Qué hacer |
|---|---|---|
| «Tu cuenta ha sido bloqueada. Por favor contacta al negocio para más información.» | Al escribir el celular, si ese cliente está bloqueado en tu barbería (**Bloquear cliente**, [Bloquear a un cliente](/ayuda/clientes/bloquear-a-un-cliente)). | Si fue un error, desbloquéalo en su ficha. Si no, el cliente tiene que llamarte. |
| «Ese horario acaba de ser tomado. Por favor elige otro.» | Al reservar, si otro cliente tomó esa hora un momento antes. Con **Sin preferencia**, si ningún barbero de tu lista quedó libre. | El cliente vuelve a **Fecha y hora** y elige otra hora. |
| «Ese horario ya no está disponible. Por favor elige otro.» | Al reservar, si la hora dejó de estar libre (un bloqueo, un cambio de horario). | Elegir otra hora. |
| «El barbero no está disponible a esa hora. Por favor elige otra.» | Al reservar, si el barbero elegido ya no atiende a esa hora. | Elegir otra hora u otro barbero. |
| «No hay métodos de pago disponibles» | En la pantalla **Pagar**, si la sucursal no tiene formas de pago para ese cliente. | Revisa las formas de pago de la sucursal. |
| «No hay servicios disponibles» | En **Servicios**, al elegir una sucursal que no tiene servicios activos para la reserva. | Activa servicios en esa sucursal ([Activar servicios en una sucursal](/ayuda/sucursales/activar-servicios-en-una-sucursal)) o dile al cliente que elija otra sede. |
| «No hay barberos disponibles para este servicio» | En **Barberos**, si ningún barbero de la sucursal hace ese servicio. Aparece un instante mientras la lista carga. | Si no se va, revisa quién hace el servicio ([Un servicio o un barbero no aparece](/ayuda/agendamiento-online/no-aparece-un-servicio-o-barbero)). |
| «Algo salió mal. Inténtalo de nuevo.» | Un fallo que no es ninguno de los anteriores. | Volver a intentar. Si sigue, que llame al teléfono de la tarjeta de la sucursal. |

![Servicios de una sucursal sin servicios activos: No hay servicios disponibles](/assets/es/agendamiento-online/mensajes-al-reservar/sin-servicios.png)

## Preguntas frecuentes

**Se reservaron algunas citas y otras no.**
Si el cliente armó varias citas y una falla al reservar, las anteriores pueden haber quedado creadas. Revisa tu calendario antes de que vuelva a intentarlo.

> [!NOTE]
> Los textos son los de la página de reserva publicada. Se vieron en vivo «No hay servicios disponibles» (sede de prueba sin servicios) y «No hay barberos disponibles para este servicio» (mientras cargaba la lista); los demás no se provocaron.
