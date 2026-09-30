---
id: agendamiento-online/aumento-de-precios-por-ocupacion
title: "Aumento de precios cuando la agenda está llena"
description: "Cómo cobrar un extra por servicio cuando la ocupación de la barbería pasa de un nivel: el Nivel de ocupación y el valor del aumento, en porcentaje o en monto fijo."
section: agendamiento-online
order: 190
group: "Ajustes de la reserva online"
roles: [owner, admin]
screens: [/online-booking]
keywords: [aumento de precios, subir precios, precio dinámico, cargo extra, recargo, ocupación, nivel de ocupación, agenda llena, horas pico, alta demanda, porcentaje, monto fijo, aumentar el valor]
related: [configuracion/agendamiento-online-ajustes, configuracion/notificaciones-de-metricas, agendamiento-online/confirmar-la-reserva]
status: draft
updated: 2026-09-30
---

# Aumento de precios cuando la agenda está llena

**En resumen:** en **Configuración › Agendamiento online**, el bloque «Aumento de precios» te deja cobrar un extra por cada servicio cuando la barbería está muy ocupada. Pones el **Nivel de ocupación** a partir del cual empieza el cargo y cuánto sube, en porcentaje (%) o en monto fijo ($).

## Dónde está

**Configuración › Configuración de la cuenta › Agendamiento online**, bloque «Aumento de precios»: «Establece el porcentaje de ocupación a partir del cual se comenzará a aplicar un cargo extra por cada servicio.»

![El bloque Aumento de precios con el Nivel de ocupación, el valor del aumento y los botones de porcentaje y monto fijo](/assets/es/agendamiento-online/aumento-de-precios-por-ocupacion/bloque.png)

## Configurarlo

1. En **Nivel de ocupación\*** escribe el porcentaje de ocupación desde el que se cobra el extra.
2. En **Aumentar el valor** escribe cuánto sube.
3. Toca **%** si el aumento es un porcentaje del precio o **$** si es un monto fijo. La pantalla lo explica: «Edite el aumento para cambiar entre porcentaje (%) o monto fijo ($) y ajuste el valor de aumento según sea necesario.»
4. Toca **Guardar** al final de la página.

## Ejemplo

Nivel de ocupación `90` y aumento `5` con **%**: cuando la barbería pasa del 90 % de ocupación, un corte de $40.000 se cobra $42.000. Con **$** y `5000`, el mismo corte se cobra $45.000.

> [!NOTE]
> Todavía no está comprobado si la ocupación se mide por día, por barbero o por sucursal, ni cómo le aparece el extra al cliente al reservar. Los ejemplos de precio son ilustrativos.

## Preguntas frecuentes

**¿Cómo sé si me conviene subir precios?**
El **Centro de notificaciones** puede avisarte con «Sugerencia de subida de precios cuando tengas buena demanda y retención». Mira [Avisos de métricas](/ayuda/configuracion/notificaciones-de-metricas).

**¿Afecta a las citas que ya estaban agendadas?**
No está comprobado. Por lo que dice la pantalla, el cargo se aplica «por cada servicio» a partir del nivel de ocupación.
