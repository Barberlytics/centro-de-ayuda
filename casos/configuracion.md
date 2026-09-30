# Configuración en producción (`/settings`)

Fuente: lectura con `scripts/inspect.mjs`, 2026-09-25, sucursal «mugen barber 2». Solo lectura: formularios abiertos y
cerrados sin guardar; **Eliminar cuenta** no se tocó. Textos tal cual.

## Índice (`/settings`)

Cuatro grupos con una tarjeta por ajuste (título + frase):

**Configuración de la cuenta**
- **Detalles del negocio** · «Administrar configuraciones como el nombre de su empresa y la zona horaria.» (`/business-details/{id}`)
- **Detalles de facturación y facturas** · «Visualiza tu actividad de tarifas y facturas de Barbelytics y administra tu información de facturación» (`/settings/billing-details`)
- **Agendamiento online** · «Ajustar la forma en que los clientes pueden reservar y gestionar sus citas en línea» (`/online-booking`)
- **Portal del cliente** · «Pon en tu sitio la pantalla donde tus clientes ven, reagendan y cancelan sus citas» (`/client-portal`) — nueva, vista el 2026-09-30
- **Períodos de cierre del negocio** · «Establezca el período en el que su negocio estará cerrado» (`/business-closed`)
- **Dispositivos de pago** · «Conecta tu sistema a los dispositivos que te permitirán procesar los pagos» (`/devices`)
- **Sucursales** · «Administra las sucursales del negocio: crearlas, editarlas y ver su detalle.» (`/companies/locations`)
- **Empresa** · «Consulta y administra los datos de la empresa.» (`/companies`)

**Equipo**
- **Permisos** · «Gestiona las secciones y funciones que puede realizar cada usuario de tu barbería en función de su rol.» (`/team-permission`)
- **Nomina** · «Define el ciclo de pago y establece las fechas de inicio y finalización.» (`/settings/payroll`)
- **Comisiones** · «Configurar el cálculo de comisiones para los miembros del equipo» (`/team-commission`)

**Ventas**
- **Impuestos** · «Administrar las tasas de impuestos que se aplican a los artículos vendidos en el momento del pago» (`/sales-taxes`)
- **Tarifa por uso de tarjeta de crédito** · «Habilite y nombre la tarifa de uso de la tarjeta de crédito y configúrela como un porcentaje o un monto fijo.» (`/credit-card`)
- **Propinas** · «Gestionar la configuración de propinas para su negocio» (`/sales-tips`)
- **Precios** · «Define si el precio total de los productos incluye impuestos y establece la moneda para los precios en tu plataforma.» (`/sales-pricing`)
- **Integración de pagos** · «Conecta tu barbería con Stripe para recibir pagos en linea de forma segura y rápida» (`/payment-integration`)

**Notificaciones**
- **Centro de notificaciones** · «Revisar notificaciones enviadas a clientes y barberos sobre las citas» (`/notifications-center`)

**Eliminar cuenta** · «Elimina permanentemente tu cuenta y todos los datos asociados a tu negocio. Esta acción es irreversible y no se puede deshacer.»

Con el perfil de barbero por comisión, Configuración solo muestra **Formato de hora** («…estos cambios solo se reflejarán
en tu calendario, no en el calendario de la peluquería ni en el de tus clientes», **Formato de hora\*** «12 hours (e.g.
9:00pm)») y **Eliminar cuenta** (botón **Editar**).

## Detalles del negocio

«Configuración de hora y calendario» · «Elija la zona horaria y el formato que mejor se adapten a su negocio. Los cambios
de horario de verano se aplicarán automáticamente según la zona horaria seleccionada.» Campos: **Zona horaria\***
(America/Bogota), **Formato de hora\*** («12 horas (ej. 9:00pm)»), **Inicio de semana\*** (Lunes), **Hora de inicio**,
**Hora de fin**, **Festivos no laborables** («8 seleccionados»; lista con los festivos del país y su fecha: Año Nuevo
2026-01-01, Día de los Reyes Magos 2026-01-12, … Navidad 2026-12-25) «Selecciona los días festivos en los que no
abrirás.» «Esta es una configuración general, pero se puede ajustar para cada locación en sus propias configuraciones.»
«Enlaces en línea» · «Añade el sitio web de su empresa y enlaces a redes sociales. Estos enlaces serán visibles en
correos electrónicos y otras interacciones de la plataforma con sus clientes.»: **Sitio Web**, **Pagina de Instagram**,
**Pagina de Facebook**, **Mapas de Google**. **Guardar**.

## Detalles de facturación y facturas

- «Datos de facturación» · «Agregue o edite sus detalles de facturación predeterminados para mostrar en la factura de
  Barbelytics.»: nombre | plan («Anual») | importe ($50.00), dirección; botón **Editar detalles de facturación**.
- «Método de pago predeterminado» · «Agregue o edite su método de pago predeterminado para tarifas y compras de
  Barbelytics.»: «**** **** **** 0790»; botón **Administrar métodos de pago** → «Administrar métodos de pago» · «Controla
  cómo pagas tu membresía. El método de pago resaltado es el predeterminado, los demás son secundarios.» · tarjeta ·
  **Añadir método de pago**.
- «Listado de facturas y tarifas» · «2 Documentos» · «Su próxima factura estará disponible el 28 AGO 2027» · filtros
  **Tipo**, **Año**, **Mes** · tabla **Tipo** (Grow(Free), Grow) · **Total** · **Fecha** · **Acción** → **Descargar**.

## Agendamiento online («Reserva online»)

«Ajuste la forma en que los clientes pueden reservar y gestionar sus citas en línea. Estas son configuraciones
generales, pero se pueden configurar individualmente para cada ubicación.»
- «Agrega las reservas a tu sitio web» · «Dos formas de embeber el flujo de reserva. Las dos cargan el mismo script: lo
  único que cambia es data-mode. Pega el fragmento donde lo quieras y listo.» · «Para la siguiente opción, si no tienes
  experiencia técnica, podrías necesitar el apoyo de un programador para integrarla correctamente.»
- **Panel lateral** · «Agrega un botón flotante "Book now" abajo a la derecha de tu sitio. Al pulsarlo, el flujo de
  reserva se abre en un panel sobre tu página, sin salir de ella.» · «Ideal para un sitio que ya existe: el <div> puede ir
  en cualquier parte, el botón se posiciona solo.» · fragmento `<div data-bl-widget="booking" data-uuid="…" data-profile="…"
  data-timezone="America/Bogota" data-mode="floating"></div><script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>` · **Copiar**.
- **Abrir desde enlace** · «Sin botón flotante: el flujo de reserva se abre desde un enlace o botón que ya tengas, como
  el "Reservar cita" de tu menú.» · «Cambia #reservar por el id de tu enlace. Si no tiene, añádeselo: <a id="reservar"
  href="#">Reservar cita</a>.» · mismo fragmento con `data-trigger="#reservar"` · **Copiar**.
- **Reserva embebida** · «Incrusta el flujo de reserva dentro de tu página, como una sección más. Sin botón ni panel: se
  ve desde el principio.» · «Ideal para una página dedicada a reservar. El widget se dibuja dentro del <div>, así que
  ponlo donde quieras y dale el ancho que necesites.» · `data-mode="inline"` · **Copiar**. «Si usas las dos en la misma
  página, incluye el <script> una sola vez.»
- «Link de reserva online para tu sitio web» · «Comparte este enlace con tus clientes para que puedan reservar en línea
  directamente. Puedes agregar parámetros UTM para seguimiento de marketing.» · **Enlace directo de reserva**
  (`https://fd.barberlytics.com/book/…`) · **Copiar** · «Seguimiento UTM (opcional)».

### Bloques de reglas (leídos el 2026-09-30, sin guardar)

- «Enlace de Front Desk» · «Usa este enlace en una tablet o kiosco en tu local para que los clientes puedan hacer check-in al
  llegar.» · **Enlace del kiosco front desk** (`https://fd.barberlytics.com/front-desk/…`) · **Copiar**. El enlace abre
  «Recepción» · «Se requiere inicio de sesión del personal para activar el kiosco» · **Teléfono del personal** · **Ingresar con
  OTP** · (con sesión abierta en el navegador) «Ingresar con Barberlytics» · **Pantalla completa**. No se activó.
- «Disponibilidad de reserva online» · «Establezca con cuánta anticipación los clientes pueden reservar en línea y el tiempo que
  deben esperar para cancelar o reprogramar.» · «Aviso previo necesario para que un cliente haga una cita»: **Anticipación mínima
  para agendar\*** (30) + **Unidad de tiempo\*** (Minutos | Horas) · **Franjas horarias disponibles para reservar online** (vacío;
  «No mas de 1 semana en el futuro» … «No mas de 8 semanas en el futuro») · **Intervalo de franja horaria por defecto** (15 minutos |
  30 minutos | 45 minutos | 60 minutes; valor 30) · «El intervalo de franja horaria puede ser modificado por cada usuario haciendo
  zoom en el calendario.»
- «Aumento de precios» · «Establece el porcentaje de ocupación a partir del cual se comenzará a aplicar un cargo extra por cada
  servicio.» · **Nivel de ocupación\*** (90.00) · **Aumentar el valor** (5.00) con botones **%** / **$** · «Edite el aumento para
  cambiar entre porcentaje (%) o monto fijo ($) y ajuste el valor de aumento según sea necesario.»
- «Lista de espera» · **Minutos para aceptar\*** y **Minutos para llegar\*** (15/30/45 minutos, «60 minutes»; valor 15 y 15).
- «Métodos de pago aceptados» · «Configure los métodos de pago que aceptará para las reservas en línea.» · dos casillas: icono de
  billete (pago en el local) y **stripe**; ambas marcadas.
- «Cancelación y reprogramación en línea» · **Los clientes pueden cancelar o reprogramar en línea** («Hasta 24 horas de
  antelación», 12, 6, 3, 2, 1 hora, «Hasta 30 minutos de antelación»; valor 3 h) · **Cargo por cancelación tardía\*** (% 10.00) ·
  **Número máximo de cancelaciones en línea permitidas\*** (5) · «Una vez que el cliente alcance este límite, ya no podrá cancelar
  online. Para cancelar, deberán contactar directamente con la barbería.»
- «Vista previa de políticas de programación y cancelación» · etiquetas `<<time_for_cancel>>` `<<fee_cancellation>>`
  `<<max_cancellations>>` · texto por defecto en inglés · tabla de valores (3 horas · 10.00 · 5).
- **Guardar** al final (uno solo para todos los bloques de reglas).

## Portal del cliente (`/client-portal`, visto el 2026-09-30)

«El portal es la pantalla donde tu cliente entra con su teléfono, recibe un código y desde ahí ve sus próximas citas, las
reagenda o las cancela. Aquí tienes las formas de ponerlo en tu sitio.»
- «Qué puede hacer tu cliente» · «Entra con su número de teléfono y un código de verificación, sin crear contraseña. Ve sus
  citas próximas, las pasadas y las canceladas, y sobre las próximas puede reagendar —con la disponibilidad real de su barbero—
  o cancelar.» · «Reagendar y cancelar respetan los tiempos mínimos que hayas configurado en Reserva online.»
- **Dentro de una página** · `data-bl-widget="appointments"` + `data-home-url="/"` · **Copiar**.
- **Abrir desde un enlace** · `data-mode="floating"` + `data-trigger="#mis-citas"` · **Copiar** · «Si en la misma página
  tienes también el widget de reserva, incluye el <script> una sola vez.» · «Opcional: data-accent y data-primary cambian los
  colores del portal para que combine con tu sitio.»
- «Enlace directo» · **Enlace del portal** (`https://fd.barberlytics.com/portal/…`) · **Copiar**. **Fallo**: el enlace
  devolvió «404 Page not found» (dos intentos, 2026-09-30). Avisar al equipo.
- Sin **Guardar**.

## Períodos de cierre del negocio

«Periodos de cierre de empresas» · «Establece el periodo en el que tu barbería estará cerrada.» · **Añadir nuevo** · «Aquí
encontrarás el listado de todos los periodos de cierre de tu barbería» · **Añadir periodo cerrado** → panel «Añadir
periodo cerrado»: «No se pueden realizar reservas en línea cuando su negocio está cerrado.», **Fecha de inicio\***,
**Fecha de finalización\***, **Seleccione ubicaciones\***, **Breve descripción (opcional)**, **Guardar**.

## Dispositivos de pago

«Aquí encontrarás el listado de todos los dispositivos de pago que tienes disponibles» · **Agregar dispositivo** → panel:
**Nombre del dispositivo\***, **Serial del dispositivo\***, **TPN del dispositivo\***, **Clave de autenticación del
dispositivo**, **Cancelar**, **Guardar**.

## Sucursales y Empresa

- **Sucursales**: «En esta seccion podras tener todo el control de tus sucrusales» · **Crear Sucursal** · «Lista de
  sucursales · 3 Sucursals» · buscador · tabla **Nombre · Equipo · País · Estado · Ciudad · Date create · Estado ·
  Acciones** → **Ver · Editar · Borrar**.
- **Ver sucursal**: **Acciones**; cifras **Clientes** (33), **Equipo** (11), **Licencia** (28/AGO/2027); ficha **Nombre,
  Identificación, País, Estado, Ciudad, Dirección, Idioma, Teléfono, Código Postal, Descripción**.
- **Crear Sucursal** (página, **Cancelar**): **Nombre de la sucursal\***, **Nombre de la empresa\***, **Identificación\***,
  **Empresa\***, **País\***, **Estado\***, **Ciudad\***, **Dirección**, **Código Postal**, **Teléfono\***, **Moneda\***,
  **Idioma\***, **Zona horaria\***, **Descripción**, **Fotos - 0/5**, **Crear**. (Editar: mismo formulario con **Guardar**.)
- **Empresa**: «Empresas» · «En esta sección podrás tener todo el control de tus compañías.» · «Lista de empresas · 1
  Empresa» · tabla **Empresa · Identificación · Teléfono · Estado · Acción** → **Ver · Editar**.

## Permisos

«Gestiona las secciones y funciones que cada usuario de tu barbería puede realizar en función de su rol. Las
configuraciones que aquí se establezcan serán las opciones predeterminadas al crear nuevos roles, aunque se pueden
personalizar individualmente por ubicación y al crear o editar cada usuario. Las cuentas de propietarios tienen acceso
total al sistema.» Pestañas **Administrador de la locación · Barbero por comisión · Barbero por renta · Recepción -
mostrador de recepción · Dueño**. Matriz en `casos/modelo-sucursales-roles-permisos.md` §5.

## Nomina

«Nómina de sueldos» · «Defina el ciclo de pago (semanal, quincenal o mensual) y establezca las fechas de inicio y
finalización.» · **Ciclo de pago\*** (**SEMANAL · QUINCENAL · MENSUAL**) · **Día de inicio del ciclo** (1) · **Guardar**.

## Comisiones

«Configurar el cálculo de comisiones para los miembros del equipo. Esta es una configuración general, pero se puede
ajustar para cada ubicación en la sección correspondiente.» Cuatro interruptores: **Deducir descuentos** («Deducir
descuentos del precio de venta antes de calcular la comisión.»), **Deducir impuestos**, **Deducir el costo del servicio**,
**Deducir el costo del producto**. **Guardar**.

## Impuestos

«Gestiona las tasas de impuestos que se aplican a los artículos vendidos en caja. Esta es una configuración general, pero
se puede ajustar para cada ubicación en la sección correspondiente.» · **Añadir nuevo** · «Aquí encontrarás el listado de
todos los impuestos de tu barbería.» · **Añadir impuesto** → panel «Agregar un nuevo grupo de impuesto» · «Combine varios
impuestos en un grupo y cada impuesto se mostrará individualmente en los recibos de ventas y los informes.» · **Nombre del
grupo\***, **Nombre fiscal\***, **Tasa de impuestos**, **Añadir impuesto** (otra línea), **Cancelar**, **Guardar**.

## Tarifa por uso de tarjeta de crédito

«Aquí puedes habilitar la tarifa por uso de tarjeta de crédito, asignarle un nombre personalizado y establecer el monto.
La tarifa puede configurarse como un porcentaje del total o como una cantidad fija de dinero, según tus preferencias.»
Interruptor **Habilitar esta opción**, **Nombre\***, **Tasa\***, **Guardar**.

## Propinas

«Los valores de propina son opciones predeterminadas, los clientes también podrán agregar un monto personalizado. Esta
es una configuración general, pero se puede ajustar para cada ubicación en la sección correspondiente.» · varios
**Porcentaje de propina\*** · **Agregar nueva opción de propina** · **Guardar** · **Selección predeterminada** («Si agregó
una nueva sugerencia, es posible que no aparezca en la lista hasta que haga clic en el botón “Guardar opciones”.») ·
**Guardar selección predeterminada** · «Comportamiento de propinas» · «Define que opciones ve el cajero al cobrar. Si lo
dejas sin configurar, se mantiene el comportamiento actual.» · **Mostrar en el cobro** (**Sin configurar · Solo monto ·
Solo porcentaje · Monto y porcentaje**) · «Sin configurar, el cobro muestra las dos pestañas y abre la del tipo de propina
marcada por defecto.» · **Guardar comportamiento**.

## Precios

«Moneda para productos y servicios» · **Moneda\*** (COP) · «Cálculo de impuestos» · «Elija cómo aplicar los impuestos a
los precios en los cálculos de ventas e informes.» · **Los precios no incluyen impuestos** («por ejemplo: Precio: $10.
Impuesto (20%): $2. Total: $12.») · **Los precios incluyen impuestos** («por ejemplo: Total: $12 (incluye $2 de
impuestos). Precio base: $10.») · **Guardar**.

## Integración de pagos

«Conecta tu barbería con Stripe para recibir pagos en linea de forma segura y rápida» · «Diligencia los espacios
correspondientes para hacer la integración con Stripe.» · **Por ubicación**: al entrar pide «Por favor seleccione una
sucursal para poder continuar» (lista de sucursales). Campos (mapa anterior): **Clave pública de prueba\***, **Clave
secreta de prueba\***, **Probar conexión**, **Guardar**.

## Centro de notificaciones

«Vea y administre todos los mensajes automáticos enviados a su equipo y clientes. Esta configuración es general y se
aplica a todas las ubicaciones.» Pestañas por rol (**Administrador de la locación · Barbero por comisión · Barbero por
renta · Recepción - mostrador de recepción · Dueño**). Un interruptor por aviso y canal (**Correo**, **Push**):

- **Clientes**: Importación de clientes («Cuando una importación de clientes propia falla posteriormente», «Cuando termina
  el proceso de importación exitosamente»), Satisfacción del cliente («Cuando se recibe una mala reseña por parte de un
  cliente»), Estados de clientes («Cuando un cliente pasa a estado 'Churn' (perdido)», «…'Pre-Churn' (Posible pérdida)»,
  «…“Recuperado”», «…“VIP”»), Acciones con cliente («Cuando un miembro del equipo local bloquea un cliente»).
- **Productos**: Cantidades («Cuando quedan pocas unidades de un producto», «Cuando un producto se ha agotado»), Combos
  (ídem), Importación (falla / termina).
- **Calendario**: Equipo («Cuando un barbero tenga su agenda ocupada a más del [Porcentaje]», «Cuando la barbería tiene
  una ocupación del día de más del [Porcentaje]»), Bloqueo («Cuando un barbero crea un bloqueo en su calendario»),
  Vacaciones («Cuando un barbero solicita vacaciones»), Vacaciones renta («Cuando un barbero de renta crea un periodo de
  vacaciones»).
- **Métricas**: Rendimiento («Cuando el indicador de salud de alguna métrica baje a un nivel muy bajo (amarillo o
  rojo)», «…suba a un buen nivel (verdes)»), Equipo («Cada 3 meses, cuando la retención promedio de clientes de uno de
  los barberos sea superior a [Porcentaje]», «…menor a [Porcentaje]»).
- **Reportes**: «Envío de reportes del resumen diario / semanal / mensual / trimestral / anual», «Sugerencia de subida de
  precios cuando tengas buena demanda y retención».
- **Guardar**.

## No visto

**Eliminar cuenta** (no se pulsó), guardar cualquier ajuste, la pantalla de Integración de pagos tras elegir sucursal,
**Editar detalles de facturación**, **Añadir método de pago**, el ajuste «por ubicación» que mencionan varias pantallas.
