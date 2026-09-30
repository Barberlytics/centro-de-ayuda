---
id: agendamiento-online/politicas-de-reserva
title: "Las políticas de reserva y cancelación que ve tu cliente"
description: "El texto de políticas de la reserva online, las etiquetas que se reemplazan solas con tus ajustes de cancelación y cómo adaptarlo a tu barbería."
section: agendamiento-online
order: 230
group: "Ajustes de la reserva online"
roles: [owner, admin]
screens: [/online-booking]
keywords: [políticas, política de cancelación, políticas de reserva, términos de la reserva, texto de políticas, vista previa de políticas, etiquetas, time_for_cancel, fee_cancellation, max_cancellations, no show, llegar tarde, reglas de la barbería]
related: [agendamiento-online/cancelar-o-reprogramar-en-linea, agendamiento-online/confirmar-la-reserva, configuracion/agendamiento-online-ajustes]
status: draft
updated: 2026-09-30
---

# Las políticas de reserva y cancelación que ve tu cliente

**En resumen:** al final de **Configuración › Agendamiento online** está la «Vista previa de políticas de programación y cancelación». Es el texto de reglas que ve el cliente al reservar. Tiene tres etiquetas que se llenan solas con lo que pusiste en «Cancelación y reprogramación en línea».

## Dónde está

**Configuración › Configuración de la cuenta › Agendamiento online**, último bloque: «En el siguiente texto podrás configurar las políticas de cancelación que verán los clientes al momento de reservar una cita en tu barbería.»

![La vista previa de políticas con el texto, las etiquetas y la tabla de valores](/assets/es/agendamiento-online/politicas-de-reserva/bloque.png)

## Las etiquetas

La pantalla dice: «Puedes usar las siguientes etiquetas, cuyos valores seran reemplazados por la configuración que apliques en el apartado: "Cancelación y reprogramación en línea"».

| Etiqueta | Se reemplaza por | Ejemplo |
|---|---|---|
| `<<time_for_cancel>>` | El límite para cancelar o reprogramar | 3 horas |
| `<<fee_cancellation>>` | El **Cargo por cancelación tardía** | 10.00 |
| `<<max_cancellations>>` | El **Número máximo de cancelaciones en línea permitidas** | 5 |

## Ejemplo

El texto que trae la pantalla está en inglés e incluye esta frase:

```text
Cancellations made within <<time_for_cancel>> of the scheduled appointment time will incur <<fee_cancellation>>% cancellation fee.
```

Con 3 horas y 10 %, el cliente lee: «Cancellations made within 3 horas of the scheduled appointment time will incur 10.00% cancellation fee.» Una versión en español para Mi Barbería podría ser:

```text
Si cancelas o cambias tu cita con menos de <<time_for_cancel>> de anticipación, se cobra el <<fee_cancellation>> % del servicio. Puedes cancelar en línea hasta <<max_cancellations>> veces.
```

Después de cambiar el texto, toca **Guardar** al final de la página.

> [!NOTE]
> Cómo se edita el texto en la pantalla y dónde lo ve exactamente el cliente al reservar todavía no está comprobado. Tampoco si el texto se puede tener en varios idiomas.

## Preguntas frecuentes

**¿Por qué mis políticas salen en inglés?**
Es el texto que viene de fábrica. Cámbialo por el tuyo en español.

**Cambié el límite de cancelación y el texto se actualizó solo. ¿Es normal?**
Sí, si usas las etiquetas. Por eso conviene escribir `<<time_for_cancel>>` en lugar de «3 horas».
