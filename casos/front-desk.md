# Front Desk: kiosco de recepción (`https://fd.barberlytics.com/front-desk/{enlace}`)

Fuente: recorrido el 2026-09-30 en el navegador integrado. El usuario activó el kiosco con su OTP; se probó el
check-in con el cliente de prueba «Prueba Elkin web app» (sin cita). Con permiso del usuario se confirmó **una** entrada
en la lista de espera (Classic Haircut · Norma Barbosa, sede «High End Barbershop (test)»); no se reservó. Textos tal cual.

## Qué es (palabras del usuario, 2026-09-30)

Es para los **clientes**. La barbería abre el enlace en una tablet o computador del local y el cliente escribe su número
al llegar. **No hay reglas ni roles especiales** ni hardware que venda Barberlytics: es solo un enlace. **No caduca.**
**El enlace es por sede.** Si el cliente tiene cita, lo que hace es el **check-in**: tiene incidencia en la cita y en el
calendario, y **se notifica al barbero según las notificaciones de Configuración**.

## Dónde está el enlace (dash)

Configuración › «Enlace de Front Desk» · «Usa este enlace en una tablet o kiosco en tu local para que los clientes
puedan hacer check-in al llegar.» · **Enlace del kiosco front desk** (`https://fd.barberlytics.com/front-desk/…`) ·
**Copiar**. Es distinto del enlace de reserva (`/book/…`).

## 1. Activar el kiosco (personal)

Título de pestaña «Front Desk — Check in». Logo de la barbería · **Recepción** · «Se requiere inicio de sesión del
personal para activar el kiosco» · **Teléfono del personal** (prefijos 🇨🇴 +57, 🇺🇸 +1, 🇻🇪 +58; placeholder
«300 000 0000») · **Ingresar con OTP** · «o» · **Ingresar con Barberlytics** (logo). Abajo a la izquierda: **Pantalla
completa**.

OTP: «Ingresa el código de verificación» · «Enviamos un código de 6 dígitos a +57…» · casillas `000000` · **Activar
kiosco** · «¿No lo recibiste? Reenviar código» · **Atrás** (arriba a la derecha).

## 2. Kiosco activo (cliente)

Logo de la sede (alt = nombre de la sede) · **Bienvenido** · «Ingresa tu número de teléfono» · **Número de teléfono**
(mismos prefijos) · **Check in**. Abajo a la izquierda: **Pantalla completa** y **Bloquear** (aria «Bloquear kiosco»).
Enter en el campo también envía.

## 3. Sin cita

«No se encontró ninguna cita» · «Reserva una cita o únete a la lista de espera para atención sin cita.» · **Reservar
una cita** · **Unirse a la lista de espera** · **Atrás**.

### 3a. Unirse a la lista de espera

1. «Elige un servicio»: lista de servicios de la sede con duración y precio «$50.00 &UP» (formato USD aunque la sede
   sea de Colombia) · **Continuar**.
2. «Elige un barbero»: barberos con su nivel («Senior», «Master», «level 1», «No level») · **Continuar**. **No hay
   opción «sin preferencia»** (a diferencia de la reserva online).
3. «Confirma los datos de tu lista de espera»: nombre del cliente + servicio · «Barbero» + nombre · **Confirmar lista
   de espera**.
4. «Lista de espera confirmada» (check verde) · «Te atenderemos muy pronto» · «Ya estás en la lista de espera. Te
   llamaremos cuando un barbero esté disponible para atenderte.» · **Ir al inicio**. No vuelve solo al inicio (10 s).

**En dash**: Calendario › botón de ajustes › **Lista de espera** (de la sede del kiosco) → tarjeta con nombre del
cliente, servicio, precio «$50.00», «En cualquier momento (apertura-cierre)», etiqueta **Nuevo** y botón **Ingresar**.
La tarjeta **no muestra el barbero** elegido en el kiosco. Menú ⋮ del panel: **Añadir a la lista de espera**. Ver
`casos/calendario.md`.

**Atrás** en cualquier paso vuelve al inicio («Bienvenido»), no al paso anterior.

### 3b. Reservar una cita

Abre encima el flujo de reserva online (Sede › Servicio/Barbero › Fecha y hora › Confirmar), con **todas** las sedes
de la empresa, no solo la del kiosco. La X lo cierra y vuelve a «Bienvenido». Ver `casos/reserva-online.md`.

## Bloquear y volver a activar

**Bloquear** no pide confirmación: vuelve al instante a «Recepción». **Ingresar con Barberlytics** reactiva el kiosco sin
pedir nada si en ese navegador hay una sesión abierta de dash; si no, se usa el OTP del personal.

## Ingresar desde dash y check-in (2026-09-30, con permiso)

- **Ingresar** en la tarjeta de la lista de espera → toast «Actualizado exitosamente», la tarjeta sale de la lista y se
  crea la cita a la hora actual (10:24–10:54) en la columna del barbero elegido, etiqueta NUEVO y botón **Sentar**. En el
  detalle: estado **Ingresado**, «SIGUIENTE PASO · Prueba está esperando.», **Sentar · $50.00**, **Pagar cita**.
- Kiosco con ese mismo número después → «No se encontró ninguna cita»: el kiosco solo busca citas pendientes, no las ya
  ingresadas.

## Número desconocido (3009990011, inventado)

**Check in** → panel «Conozcámonos» · «Usaremos esta información para crear tu perfil y hacer la reserva aún más fácil.» ·
**Número de teléfono** (ya lleno) · **Nombre** · **Apellido** · **Correo electrónico** · «Nunca compartiremos tu
información.» · **Continuar** (desactivado hasta llenar). La X vuelve a «Bienvenido». No se llenó.

## Dónde está el enlace (comprobado)

`/online-booking` (Configuración › Agendamiento online), después de «Enlace directo de reserva». **El enlace es el mismo en
«mugen barber 2» y en «High End Barbershop (test)», y el código es el mismo que el de `/book/`.** El usuario dice que es por
sede; la lista de espera cayó en High End (test). Por confirmar cómo se elige la sede.

## Check-in con cita (2026-09-30, con permiso)

Cita creada en dash para 3005672915: High End (test) · Classic Haircut · Jp Garcia · 12:30 pm (tarjeta con **Ingresar**).
Kiosco: **Check in** → «¡Bienvenido de nuevo!» · «Detalle de tu cita. Haz check in y espera el llamado.» · Sede · Servicio ·
Barbero · «Fecha y hora» («SEP 30, 2026, 12:30 PM», formato inglés) · **Check in** · **Atrás** → «Check in» (check verde) ·
«Te atenderemos muy pronto» · «Ya sabemos que llegaste, ahora siéntate y espera el llamado del barbero para ser atendido.» ·
**Ir al inicio** (no vuelve solo en 10 s). En dash: tarjeta pasa de **Ingresar** a **Sentar**; detalle **Ingresado**, «Prueba
está esperando.», **Sentar · $50.00**. Igual que tocar Ingresar en dash.

## Pendiente de confirmar

- Qué sigue después de «Conozcámonos › Continuar».
- El kiosco de «High End Barbershop (test)» muestra el logo de «mugen barber 2» (¿logo de empresa o fallo?).
- Fallos para reportar: sin «sin preferencia» en la lista de espera; precios «$50.00 &UP» en formato USD; «Atrás»
  vuelve al inicio; «Reservar una cita» ofrece todas las sedes; la tarjeta de dash no muestra el barbero.
