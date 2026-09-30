# Reserva online que ve el cliente (`https://fd.barberlytics.com/book/{enlace}`)

Fuente: recorrido el 2026-09-25 con `scripts/booking-browser.mjs` + `scripts/booking-step.mjs`. El usuario escribió su
celular (cliente ya conocido de la barbería); no se pulsó **¡Reservar ahora!**. Textos tal cual. Página pública, sin
sesión de la app. Idioma mezclado: títulos en español, días de la semana y algunos textos en inglés («Fri», «Sep 25»,
«Any available barber»).

## 1. Celular

«Reserva tu cita» · «Ingresa tu número de teléfono para empezar. Lo usaremos para encontrar tu perfil y enviarte
novedades de tu cita.» · **Número de teléfono** con país (**🇨🇴 +57 · 🇺🇸 +1 · 🇻🇪 +58**) · «Solo para novedades de tu
cita.» · tarjeta de la sucursal (logo, nombre, «Abierto hoy: 08:00 AM a 11:50 PM», «¿Necesitas ayuda? Llama +57…») ·
**Continuar** (deshabilitado hasta escribir el número; muestra «Cargando...» al buscar) · «Reserva segura · Toma menos
de 1 minuto · Nuestros clientes confían».

## 2. Cliente conocido: «Bienvenido de nuevo»

«Bienvenido de nuevo, Carlos.» · «Recordamos tu última visita para reservar más rápido. Elige tu fecha y hora para
continuar.» · botón **Elegir algo diferente** · «PRESELECCIONAMOS TU ÚLTIMA VISITA»: **Sede** (nombre, **Cambiar**), **Tu
último servicio** («Hot towel shave · 30 min • $50.00», **Cambiar**), **Tu último barbero** (nombre y nivel, **Cambiar**) ·
«Elige la hora de tu cita» · «Selecciona un día y una hora disponible que te convenga.» · tres días (Fri Sep 25, Sat Sep
26, Sun Sep 27) y **Más** · «Horarios disponibles para Fri, Sep 25» con horas (02:00 PM, 02:30 PM…) · **← Atrás** ·
**Continuar**.

Un cliente nuevo (sin visitas) no se vio: pendiente.

## 3. Flujo completo (**Elegir algo diferente**)

Barra de pasos: **Sede › Servicio/Barbero › Fecha y hora › Confirmar**.

- **Sede**: una tarjeta por sucursal con nombre, dirección, horario («08:00 a 23:50») y **Detalles de la sede**. Tocar la
  tarjeta elige la sede y pasa al siguiente paso.
- **Servicio/Barbero**: pestañas **Servicios** y **Barberos** (Barberos está deshabilitada con la ayuda «Selecciona un
  servicio» hasta elegir uno). Filtro por categoría (**Todos**, Barber Services…). Cada servicio: nombre, duración («0 h 30
  min»), precio «$50.00 &UP» (desde). Pie: «Selecciona un servicio».
- Al elegir servicio, pestaña **Barberos**: opción **Sin preferencia** y una tarjeta por barbero (foto/inicial, nombre,
  nivel, el precio de ese barbero para el servicio —cambia por barbero: $60.00, $65.00, $50.00— y **Ver**). **Ver** abre la
  ficha del barbero: **Descripción**, **Nivel**, **Servicios** que hace, **Galería**, botón **Seleccionar este
  barbero**. Pie: «Selecciona un barbero» → al elegir, botón **Siguiente**.
- **Fecha y hora**: mes («September 2026»), tira de días (Fri 25 … Wed 30), «Horarios disponibles», el barbero elegido con
  su nivel y las horas agrupadas en **Tarde** (02:00 PM–04:30 PM) y **Noche** (05:00 PM, 05:30 PM); debajo **Sin
  preferencia · Any available barber · 12 disponibles** (más horas si acepta cualquier barbero). **Siguiente**.
- **Confirmar**: «Confirmar cita» · «Verifica que la información de tu cita sea correcta» · tarjeta: servicio, nombre del
  cliente, «Sep 25, 2026 at 04:00 PM (30 min)», «Con <barbero>», **Editar**, **Eliminar**, precio ($60.00) · **Agregar
  cita** (vuelve a Servicio/Barbero para sumar otro servicio; ofrece **Descartar y volver al resumen**) · **¡Reservar
  ahora!** (no se pulsó).

## 4. Recorrido del 2026-09-30 (celular del usuario, sin reservar) y lectura de la página publicada

Se recorrió en vivo hasta la pantalla **Pagar** sin tocar **Pagar $…**. Lo que solo aparece tras reservar se tomó del
código público de la página (`fd.barberlytics.com/assets/index-*.js`): textos y reglas, no una reserva real.

- **Cliente nuevo** (visto con +1 201 555 0123, número de ficción, sin tocar **Continuar**): «Conozcámonos» · «Usaremos
  esta información para crear tu perfil y hacer la reserva aún más fácil.» · celular (país deshabilitado) · **Nombre**,
  **Apellido**, **Correo electrónico** · «Nunca compartiremos tu información.» · **Continuar** activo con los tres llenos.
  Al continuar crea el cliente (`customer_origin_create: BOOKING`) y va a Sede (o Servicio si hay una sola sede).
- **Cliente bloqueado** (`customer_blocked`): «Tu cuenta ha sido bloqueada. Por favor contacta al negocio para más
  información.» al escribir el celular.
- **Bienvenida › Más**: abre Fecha y hora completo. Horas en **Mañana**, **Tarde**, **Noche**. El barbero es un selector
  desplegable (Sin preferencia + barberos). Bloque «Sin preferencia · Any available barber · N disponibles» que se
  despliega con «+20 más».
- **Sin preferencia**: la opción sale si hay más de un barbero para el servicio y al menos uno encendido en
  `/team/barbers/lineup` › Sin preferencia (`userlocation_no_preference_restriction`). Con un solo barbero lo elige solo.
  Al reservar recorre los encendidos por `userlocation_order_no_preference` y asigna el primero libre a esa hora; si
  ninguno, «Ese horario acaba de ser tomado. Por favor elige otro.» Varios servicios de una cita van al mismo barbero,
  seguidos. Confirmar dice «Con Sin preferencia»; Confirmado dice «Barbero: Sin preferencia». La cita se crea con
  `booking_no_preference: 1`, `booking_type/origin: ONLINE` y los UTM.
- **Agregar cita**: cada cita es una tarjeta con **Editar** (reabre Servicio/Barbero con la selección) y **Eliminar**
  (sin confirmar). Sin citas: «Aún no hay citas» · «Inicia una nueva cita para continuar.» · **Empezar de nuevo**.
  «No hay barberos disponibles para este servicio» aparece un instante mientras carga la lista.
- **Pago**: `GET /settings/online-payment-methods` por sucursal. «mugen barber 2» tiene Efectivo (CASH) y Stripe. CASH y
  CARD se muestran como una sola opción **Pagar en tienda**. Si el cliente tiene **Reserva y pago solo online**
  (`customer_payment_only_online`) se quita Pagar en tienda. Si todo lo que queda es en tienda, el botón es **Reservar
  ahora y pagar en tienda** y reserva directo. Si no, **¡Reservar ahora!** abre **Pagar** · «Elige el método de pago con
  el que deseas pagar» · **Otros** · opciones · botón «Selecciona método de pago» → **Pagar $X** (total) → «Reservando...».
  Sin métodos: «No hay métodos de pago disponibles».
  **Discrepancia**: el código publicado no abre ninguna pasarela de Stripe; **Pagar $X** llama a la misma reserva sea
  cual sea el método y ni siquiera envía el método elegido. El usuario esperaba que con solo Stripe pasara a la
  pasarela: pendiente de confirmar con el equipo.
- **Confirmado** (del código): visto verde, «Confirmado», «Listo, ahora agrégala a tu calendario», tarjeta por cita
  (servicios unidos con «+», nombre, «Barbero: X», «30/SEP/2026 - 10:00 AM (30 min)», **Agregar al calendario**: iPhone
  abre el .ics directo; otros descargan `appointment.ics`, título «<barbería> — <servicio>», lugar = sucursal). **Tu
  orden**: Subtotal, Propinas, Impuestos, Cargo ($0.00) y Total. **Agendar otra cita** (misma persona, vuelve a Sede o
  Servicio) y **Salir** solo en el panel del sitio.
- **Reserva de prueba (autorizada, 2026-09-30 10:01 Bogotá)**: cliente del usuario, «Hot towel shave», 30/SEP/2026
  11:00 AM, gilbert carpeta, «mugen barber 2», **Pagar en tienda** → **Pagar $50.00** → **Confirmado**, tal cual el
  código: «Barbero: gilbert carpeta», «30/SEP/2026 - 11:00 AM (30 min)», Tu orden $50.00. **Agregar al calendario**
  descargó `appointment.ics` con SUMMARY «mugen barber 2 — Hot towel shave», LOCATION la sucursal, DESCRIPTION
  «Servicio: … \n Barbero: …», DTSTART/DTEND con la duración. Hay que cancelarla en el calendario.
- **Sedes (2026-09-30)**: el enlace ofrece tres: «High End Barbershop (test)» (solo CASH → **Reservar ahora y pagar en
  tienda**, visto en vivo; 19 servicios, 11 barberos con Sin preferencia), «mugen barber 2» (CASH + Stripe → **¡Reservar
  ahora!** › **Pagar**) y «Prueba Elkin» (Calle 76a #87a-40; «No hay servicios disponibles», pestaña Barberos con candado).
- **Decisiones del usuario (2026-09-30)**: no documentar Stripe ni el pago en línea todavía (el artículo de pago solo
  cuenta pagar en tienda); el mensaje al cliente depende del **Centro de notificaciones**.
- **Errores al reservar**: «Ese horario ya no está disponible. Por favor elige otro.», «El barbero no está disponible a
  esa hora. Por favor elige otra.», «Algo salió mal. Inténtalo de nuevo.»
- El mismo paquete trae piezas que no son de `/book` (kiosco de check in, lista de espera, «Mis citas» con reagendar y
  cancelar): no se documentaron.

## No visto

Qué pasa tras **¡Reservar ahora!** (confirmación, mensaje al cliente, pago), el flujo de un cliente nuevo (si pide nombre
y correo), **Más** días, el widget incrustado en un sitio, el idioma inglés, cancelar desde el enlace del cliente.
