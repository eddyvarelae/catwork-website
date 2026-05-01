# Documento de Requisitos — Catwork

## Introducción

Catwork es un espacio de coworking y cafetería cat-friendly ubicado en Hermosillo, México. El concepto combina un ambiente de trabajo productivo con la compañía de 10 gatos residentes disponibles para adopción. El sitio web debe reflejar una identidad visual cálida, juguetona y moderna, con una estética editorial inspirada en [thecoffee.jp](https://thecoffee.jp/) — imágenes a pantalla completa, tipografía grande, fotografía artística y transiciones suaves. El sitio debe romper con las convenciones web tradicionales para crear una experiencia única y memorable.

El stack técnico es React + Vite con despliegue en Netlify. El sitio incluye un panel de administración para gestión de menú diario, perfiles de gatos y reservaciones, así como una tienda de merchandising con temática felina.

## Glosario

- **Sitio_Web**: La aplicación web completa de Catwork, construida con React + Vite y desplegada en Netlify.
- **Visitante**: Persona que navega el sitio web sin haber iniciado sesión.
- **Miembro**: Usuario registrado con una membresía activa (General o Premium).
- **Administrador**: Usuario con acceso al Panel_Admin para gestionar contenido y operaciones.
- **Panel_Admin**: Interfaz administrativa protegida para gestionar menú, gatos, reservaciones y merchandising.
- **Homepage**: Página principal del sitio con animaciones cautivadoras y visuales a pantalla completa.
- **Perfil_Gato**: Página individual dedicada a cada uno de los 10 gatos residentes de Catwork.
- **Menú_Diario**: Listado de café y galletas disponibles que cambia diariamente, gestionado desde el Panel_Admin.
- **Sistema_Reservaciones**: Módulo que permite reservar espacios (bullpen, cabinas insonorizadas, sala de juntas).
- **Tienda_Merch**: Sección de comercio electrónico para venta de merchandising con temática de gatos.
- **Bullpen**: Área abierta de coworking con 20 lugares para laptop (sin escritorios fijos).
- **Cabina_Insonorizada**: Espacio cerrado y aislado acústicamente para videollamadas (2 disponibles).
- **Sala_Juntas**: Espacio privado para reuniones (1 disponible).
- **Membresía_General**: Plan mensual de $500 MXN que otorga acceso general al espacio.
- **Membresía_Premium**: Plan mensual de $800 MXN que incluye acceso general más reservaciones de sala de juntas y cabinas insonorizadas.
- **Walk_In**: Modalidad de acceso sin membresía con consumo mínimo de $50 MXN.
- **Sistema_Branding**: Conjunto de elementos visuales de identidad de marca (logo, paleta de colores, tipografía).
- **Motor_Animaciones**: Sistema de animaciones y transiciones del sitio web que crea una experiencia visual cautivadora.

## Requisitos

### Requisito 1: Identidad Visual y Sistema de Branding

**Historia de Usuario:** Como dueño de Catwork, quiero un sistema de branding cohesivo y moderno, para que el sitio web transmita la personalidad cálida, juguetona y profesional del espacio.

#### Criterios de Aceptación

1. THE Sistema_Branding SHALL definir una paleta de colores primaria basada en tonos beige con colores complementarios de acento.
2. THE Sistema_Branding SHALL incluir una selección tipográfica con al menos una fuente para encabezados y una fuente para cuerpo de texto que transmitan un estilo moderno y juguetón.
3. THE Sistema_Branding SHALL proveer un logotipo de Catwork en formatos SVG y PNG con variantes para fondo claro y fondo oscuro.
4. THE Sistema_Branding SHALL definir estilos de componentes reutilizables (botones, tarjetas, formularios) consistentes con la identidad visual.
5. THE Sistema_Branding SHALL implementar un sistema de diseño responsivo que se adapte a dispositivos móviles, tabletas y escritorio.

---

### Requisito 2: Homepage con Animaciones Cautivadoras

**Historia de Usuario:** Como visitante, quiero una página principal visualmente impactante con animaciones fluidas, para que mi primera impresión de Catwork sea memorable y me invite a explorar el sitio.

#### Criterios de Aceptación

1. THE Homepage SHALL mostrar imágenes hero a pantalla completa con tonos cálidos y efecto bokeh suave al cargar la página.
2. THE Motor_Animaciones SHALL ejecutar transiciones suaves entre secciones de la Homepage al hacer scroll, con una duración de entre 300ms y 800ms por transición.
3. THE Homepage SHALL presentar una navegación mínima que no obstruya las imágenes y el contenido visual.
4. THE Motor_Animaciones SHALL implementar animaciones de entrada para elementos de texto y contenido conforme el Visitante hace scroll por la página.
5. THE Homepage SHALL incluir secciones de vista previa para gatos residentes, menú del día, espacios disponibles y merchandising.
6. THE Homepage SHALL incluir enlaces visibles a los perfiles de Instagram y TikTok de Catwork.
7. WHILE la Homepage está cargando, THE Sitio_Web SHALL mostrar una animación de carga con temática felina que mantenga la identidad visual de la marca.
8. THE Homepage SHALL cargar su contenido visible inicial (above the fold) en un tiempo igual o menor a 3 segundos en una conexión 4G estándar.

---

### Requisito 3: Perfiles Individuales de Gatos

**Historia de Usuario:** Como visitante, quiero conocer a cada uno de los gatos residentes a través de páginas individuales, para que pueda familiarizarme con ellos antes de visitar Catwork y considerar su adopción.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar una galería de los 10 gatos residentes con foto y nombre de cada gato.
2. WHEN un Visitante selecciona un gato de la galería, THE Sitio_Web SHALL navegar a la página de Perfil_Gato correspondiente.
3. THE Perfil_Gato SHALL mostrar el nombre, fotografías (mínimo 3), descripción de personalidad, edad y estado de adopción del gato.
4. WHEN un gato está disponible para adopción, THE Perfil_Gato SHALL mostrar un indicador visible de disponibilidad y un formulario o enlace de contacto para iniciar el proceso de adopción.
5. THE Administrador SHALL gestionar los perfiles de gatos (crear, editar, eliminar, cambiar estado de adopción) desde el Panel_Admin.
6. WHEN el Administrador actualiza un Perfil_Gato desde el Panel_Admin, THE Sitio_Web SHALL reflejar los cambios en la página pública del gato sin requerir un redespliegue.
7. THE Motor_Animaciones SHALL aplicar transiciones animadas al navegar entre la galería de gatos y cada Perfil_Gato individual.

---

### Requisito 4: Menú Diario de Cafetería

**Historia de Usuario:** Como visitante, quiero ver el menú de café y galletas del día, para que pueda saber qué opciones están disponibles antes de visitar Catwork.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar una página de Menú_Diario con los productos de café y galletas disponibles para el día actual.
2. THE Menú_Diario SHALL mostrar para cada producto su nombre, descripción breve y precio en MXN.
3. THE Administrador SHALL actualizar el Menú_Diario desde el Panel_Admin, seleccionando los productos disponibles para cada día.
4. WHEN el Administrador publica un nuevo Menú_Diario, THE Sitio_Web SHALL mostrar el menú actualizado a los Visitantes sin requerir un redespliegue.
5. IF el Administrador no ha publicado un menú para el día actual, THEN THE Sitio_Web SHALL mostrar un mensaje indicando que el menú del día estará disponible próximamente.
6. THE Administrador SHALL gestionar el catálogo de productos (crear, editar, eliminar productos de café y galletas) desde el Panel_Admin.

---

### Requisito 5: Información de Espacios y Sistema de Reservaciones

**Historia de Usuario:** Como visitante o miembro, quiero ver los espacios disponibles y reservar cabinas o sala de juntas, para que pueda planificar mi visita a Catwork.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar una página de espacios con información detallada del Bullpen (20 lugares, sin escritorios fijos), las 2 Cabinas_Insonorizadas y la Sala_Juntas.
2. THE Sitio_Web SHALL mostrar fotografías y descripción de cada tipo de espacio.
3. WHEN un Miembro con Membresía_Premium solicita una reservación, THE Sistema_Reservaciones SHALL permitir reservar Cabinas_Insonorizadas y Sala_Juntas seleccionando fecha y horario.
4. WHEN un Visitante o Miembro con Membresía_General intenta reservar una Cabina_Insonorizada o Sala_Juntas, THE Sistema_Reservaciones SHALL informar que las reservaciones requieren Membresía_Premium.
5. IF un Miembro intenta reservar un espacio que ya está ocupado en el horario seleccionado, THEN THE Sistema_Reservaciones SHALL mostrar un mensaje de no disponibilidad y sugerir horarios alternativos disponibles.
6. THE Sistema_Reservaciones SHALL enviar una confirmación al Miembro después de completar una reservación exitosa.
7. THE Administrador SHALL visualizar, gestionar y cancelar reservaciones desde el Panel_Admin.
8. THE Sitio_Web SHALL mostrar la disponibilidad en tiempo real de las Cabinas_Insonorizadas y la Sala_Juntas.

---

### Requisito 6: Página de Membresías y Precios

**Historia de Usuario:** Como visitante, quiero ver claramente las opciones de membresía y precios, para que pueda elegir el plan que mejor se adapte a mis necesidades.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar una página de membresías con las tres modalidades de acceso: Walk_In ($50 MXN consumo mínimo), Membresía_General ($500 MXN/mes) y Membresía_Premium ($800 MXN/mes).
2. THE Sitio_Web SHALL presentar una comparación clara de los beneficios incluidos en cada modalidad de acceso.
3. THE Sitio_Web SHALL destacar visualmente la Membresía_Premium como la opción con más beneficios.
4. WHEN un Visitante selecciona una opción de membresía, THE Sitio_Web SHALL dirigir al Visitante a un flujo de registro o contacto para adquirir la membresía.
5. THE Sitio_Web SHALL indicar que la modalidad Walk_In no requiere membresía y solo exige un consumo mínimo de $50 MXN.

---

### Requisito 7: Tienda de Merchandising

**Historia de Usuario:** Como visitante, quiero comprar merchandising con temática de gatos (gorras, sudaderas), para que pueda llevarme un recuerdo de Catwork.

#### Criterios de Aceptación

1. THE Tienda_Merch SHALL mostrar un catálogo de productos de merchandising con foto, nombre, descripción, precio en MXN y tallas disponibles.
2. WHEN un Visitante agrega un producto al carrito de compras, THE Tienda_Merch SHALL actualizar el carrito mostrando los productos seleccionados, cantidades y total.
3. WHEN un Visitante procede al pago, THE Tienda_Merch SHALL ofrecer un proceso de checkout con captura de datos de envío y método de pago.
4. THE Tienda_Merch SHALL procesar pagos de forma segura mediante un proveedor de pagos externo.
5. WHEN una compra se completa exitosamente, THE Tienda_Merch SHALL mostrar una confirmación de pedido con número de orden y resumen de la compra.
6. THE Administrador SHALL gestionar el catálogo de merchandising (crear, editar, eliminar productos, actualizar inventario) desde el Panel_Admin.
7. IF un producto no tiene inventario disponible, THEN THE Tienda_Merch SHALL mostrar el producto como agotado e impedir su compra.

---

### Requisito 8: Panel de Administración

**Historia de Usuario:** Como administrador de Catwork, quiero un panel centralizado para gestionar el contenido del sitio, para que pueda mantener actualizada la información sin necesidad de conocimientos técnicos.

#### Criterios de Aceptación

1. THE Panel_Admin SHALL requerir autenticación con correo electrónico y contraseña para acceder.
2. IF un usuario ingresa credenciales incorrectas al intentar acceder al Panel_Admin, THEN THE Panel_Admin SHALL mostrar un mensaje de error y denegar el acceso.
3. THE Panel_Admin SHALL proveer una sección de gestión de Menú_Diario donde el Administrador pueda crear, editar y publicar el menú del día.
4. THE Panel_Admin SHALL proveer una sección de gestión de Perfiles_Gato donde el Administrador pueda crear, editar y eliminar perfiles de gatos, incluyendo subida de fotografías.
5. THE Panel_Admin SHALL proveer una sección de gestión de reservaciones donde el Administrador pueda visualizar, aprobar y cancelar reservaciones.
6. THE Panel_Admin SHALL proveer una sección de gestión de merchandising donde el Administrador pueda administrar productos, precios e inventario.
7. THE Panel_Admin SHALL ser accesible únicamente para usuarios con rol de Administrador.
8. WHEN el Administrador realiza cambios en el Panel_Admin, THE Sitio_Web SHALL reflejar los cambios en las páginas públicas correspondientes sin requerir un redespliegue.

---

### Requisito 9: Integración con Redes Sociales

**Historia de Usuario:** Como visitante, quiero ver contenido de las redes sociales de Catwork directamente en el sitio web, para que pueda conectar con la comunidad y seguir las cuentas oficiales.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar un feed o galería con publicaciones recientes del perfil de Instagram de Catwork.
2. THE Sitio_Web SHALL incluir enlaces directos a los perfiles de Instagram y TikTok de Catwork en el footer y en la Homepage.
3. WHEN un Visitante hace clic en un enlace de red social, THE Sitio_Web SHALL abrir el perfil correspondiente en una nueva pestaña del navegador.
4. THE Sitio_Web SHALL mostrar íconos de redes sociales consistentes con el Sistema_Branding.

---

### Requisito 10: Rendimiento y Despliegue

**Historia de Usuario:** Como dueño de Catwork, quiero que el sitio web sea rápido, confiable y fácil de mantener, para que los visitantes tengan una experiencia fluida y el sitio esté siempre disponible.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL estar construido con React y Vite como herramientas de desarrollo.
2. THE Sitio_Web SHALL estar desplegado en Netlify con despliegue continuo desde el repositorio de código.
3. THE Sitio_Web SHALL implementar carga diferida (lazy loading) para imágenes y secciones que no son visibles en la vista inicial.
4. THE Sitio_Web SHALL obtener una puntuación mínima de 90 en la categoría de rendimiento de Google Lighthouse en modo móvil.
5. THE Sitio_Web SHALL ser completamente funcional y visualmente correcto en las últimas dos versiones de Chrome, Firefox, Safari y Edge.
6. THE Sitio_Web SHALL implementar diseño responsivo que se adapte correctamente a resoluciones desde 320px hasta 2560px de ancho.

---

### Requisito 11: Accesibilidad

**Historia de Usuario:** Como visitante con discapacidad, quiero que el sitio web sea accesible, para que pueda navegar y utilizar todas las funcionalidades sin barreras.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL cumplir con las pautas WCAG 2.1 nivel AA en todas las páginas públicas.
2. THE Sitio_Web SHALL proveer texto alternativo descriptivo para todas las imágenes, incluyendo fotografías de gatos y productos.
3. THE Sitio_Web SHALL ser completamente navegable mediante teclado sin depender exclusivamente del ratón.
4. THE Motor_Animaciones SHALL respetar la preferencia del sistema operativo `prefers-reduced-motion` y reducir o desactivar animaciones cuando el Visitante lo haya configurado.
5. THE Sitio_Web SHALL mantener un contraste de color mínimo de 4.5:1 entre texto y fondo en todo el contenido textual.

---

### Requisito 12: Política de Mascotas

**Historia de Usuario:** Como visitante, quiero saber claramente las reglas sobre mascotas en Catwork, para que entienda que solo los gatos residentes están permitidos en el espacio.

#### Criterios de Aceptación

1. THE Sitio_Web SHALL mostrar de forma visible en la Homepage y en la página de espacios que no se permite el ingreso de perros al establecimiento.
2. THE Sitio_Web SHALL comunicar que los únicos animales en el espacio son los 10 gatos residentes de Catwork.
