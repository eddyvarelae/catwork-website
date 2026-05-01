# Plan de Implementación: Catwork Website

## Resumen

Implementación del sitio web de Catwork, un espacio de coworking y cafetería cat-friendly en Hermosillo, México. El sitio se construye con React 18 + Vite + TypeScript, Supabase como BaaS, Stripe para pagos, Framer Motion para animaciones, Tailwind CSS para estilos, Zustand para estado global y despliegue en Netlify. La implementación sigue un enfoque incremental: primero la estructura base y sistema de diseño, luego las páginas públicas con animaciones, después los módulos de negocio (menú, gatos, reservaciones, tienda) y finalmente el panel de administración e integraciones.

## Tareas

- [x] 1. Configurar estructura del proyecto e infraestructura base
  - [x] 1.1 Inicializar proyecto React + Vite + TypeScript y configurar dependencias
    - Crear proyecto con `npm create vite@latest` usando template `react-ts`
    - Instalar dependencias: `framer-motion`, `tailwindcss`, `@supabase/supabase-js`, `react-router-dom`, `zustand`, `@stripe/react-stripe-js`, `@stripe/stripe-js`, `zod`, `react-hook-form`
    - Instalar dependencias de desarrollo: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `fast-check`, `msw`, `vitest-axe`, `jsdom`
    - Configurar Tailwind CSS con la paleta de colores de Catwork (tonos beige, colores de acento cálidos)
    - Configurar Vitest en `vite.config.ts` con entorno jsdom
    - _Requisitos: 1.1, 1.2, 1.4, 1.5, 10.1_

  - [x] 1.2 Definir tipos de dominio e interfaces principales
    - Crear archivo `src/types/index.ts` con todas las interfaces: `Cat`, `MenuItem`, `DailyMenu`, `Space`, `Reservation`, `Product`, `CartItem`, `Order`, `ShippingAddress`, `MembershipPlan`
    - Crear archivo `src/types/components.ts` con interfaces de props: `HeroSectionProps`, `AnimatedSectionProps`, `CatCardProps`, `ProductCardProps`
    - Crear archivo `src/types/store.ts` con la interfaz `CartStore`
    - _Requisitos: 3.1, 4.2, 5.1, 7.1_

  - [x] 1.3 Configurar cliente de Supabase y estructura de rutas
    - Crear `src/lib/supabase.ts` con la inicialización del cliente Supabase
    - Crear `src/router.tsx` con todas las rutas definidas en el diseño usando `React.lazy()` para carga diferida
    - Implementar componente `ProtectedRoute` para rutas de admin y reservaciones
    - Configurar `React.Suspense` con componente de carga felina
    - _Requisitos: 8.1, 8.7, 10.3_

  - [x] 1.4 Crear sistema de diseño base y componentes de layout
    - Configurar fuentes tipográficas (encabezados y cuerpo) en Tailwind
    - Crear componente `MinimalNav`: logo a la izquierda, menú hamburguesa a la derecha, overlay a pantalla completa, transparente sobre hero con fondo sólido al scroll
    - Crear componente `Footer` con enlaces a redes sociales (Instagram, TikTok) y aviso de política de mascotas
    - Crear componente `PageTransition` usando `AnimatePresence` de Framer Motion para transiciones fade-in/fade-out entre rutas
    - Crear estilos de componentes reutilizables (botones, tarjetas, formularios) en Tailwind
    - _Requisitos: 1.1, 1.2, 1.4, 1.5, 2.3, 2.6, 9.2, 9.4, 12.1_

- [x] 2. Implementar componentes de animación y Homepage
  - [x] 2.1 Crear componentes de animación reutilizables
    - Implementar `HeroSection`: imagen a pantalla completa (100vh), overlay de gradiente, texto centrado con tipografía grande, efecto parallax sutil al scroll
    - Implementar `AnimatedSection`: usa `useInView` de Framer Motion, soporta animaciones `fadeIn`, `slideUp`, `slideLeft`, `parallax` con delay configurable
    - Implementar detección y respeto de `prefers-reduced-motion` en ambos componentes: desactivar o reducir animaciones cuando el usuario lo configure
    - Implementar `LoadingCat`: animación de carga con silueta de gato animada
    - Asegurar que todas las duraciones de transición estén entre 300ms y 800ms
    - _Requisitos: 2.1, 2.2, 2.4, 2.7, 11.4_

  - [ ]* 2.2 Escribir test de propiedad para animaciones y reduced-motion
    - **Propiedad 12: Las animaciones respetan prefers-reduced-motion**
    - **Valida: Requisito 11.4**

  - [x] 2.3 Implementar HomePage con todas las secciones
    - Crear sección hero a pantalla completa con imágenes de tonos cálidos y efecto bokeh
    - Crear sección de vista previa de gatos residentes (galería compacta con nombres)
    - Crear sección de vista previa del menú del día
    - Crear sección de vista previa de espacios disponibles
    - Crear sección de vista previa de merchandising
    - Incluir aviso visible de política de no-perros
    - Incluir enlaces a Instagram y TikTok
    - Aplicar animaciones de scroll-driven storytelling entre secciones
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.8, 9.2, 12.1_

  - [ ]* 2.4 Escribir tests unitarios para HomePage y componentes de animación
    - Verificar que las secciones de preview (gatos, menú, espacios, merch) se renderizan
    - Verificar que los enlaces sociales abren en nueva pestaña con `target="_blank"`
    - Verificar que las duraciones de animación están entre 300ms y 800ms
    - Verificar que `LoadingCat` se muestra durante la carga
    - _Requisitos: 2.1, 2.2, 2.5, 2.7, 9.3_

- [x] 3. Checkpoint — Verificar estructura base y homepage
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [x] 4. Implementar módulo de gatos (galería y perfiles)
  - [x] 4.1 Crear servicio de datos y componentes de gatos
    - Crear `src/services/cats.ts` con funciones para obtener lista de gatos y gato por slug desde Supabase
    - Implementar componente `CatCard`: foto, nombre, badge de adopción, animación hover
    - Implementar `CatGalleryPage`: grid de tarjetas de los 10 gatos con animaciones de entrada
    - Implementar `CatProfilePage`: nombre, galería de fotos (mínimo 3), personalidad, edad, estado de adopción
    - Implementar `AdoptionBadge`: indicador visible de disponibilidad para adopción con enlace de contacto, visible solo si `adoptionStatus === 'available'`
    - Aplicar transiciones animadas al navegar entre galería y perfil individual
    - Asegurar que todas las imágenes de gatos tengan atributo `alt` descriptivo
    - _Requisitos: 3.1, 3.2, 3.3, 3.4, 3.6, 3.7, 11.2_

  - [ ]* 4.2 Escribir test de propiedad para galería de gatos
    - **Propiedad 1: La galería renderiza todos los gatos con foto y nombre**
    - **Valida: Requisito 3.1**

  - [ ]* 4.3 Escribir test de propiedad para perfil de gato
    - **Propiedad 2: El perfil de gato muestra todos los campos requeridos**
    - **Valida: Requisito 3.3**

  - [ ]* 4.4 Escribir test de propiedad para indicador de adopción
    - **Propiedad 3: El indicador de adopción es condicional al estado**
    - **Valida: Requisito 3.4**

  - [ ]* 4.5 Escribir test de propiedad para alt text en imágenes de gatos
    - **Propiedad 11: Todas las imágenes tienen texto alternativo**
    - Verificar con componentes de gatos (`CatCard`, `CatProfilePage`)
    - **Valida: Requisito 11.2**

- [x] 5. Implementar módulo de menú diario
  - [x] 5.1 Crear servicio de datos y página de menú
    - Crear `src/services/menu.ts` con funciones para obtener menú del día y catálogo de items desde Supabase
    - Implementar componente `MenuItemCard`: nombre, descripción, precio formateado en MXN, imagen opcional
    - Implementar `MenuPage`: listado del menú del día agrupado por categoría (café, galletas)
    - Implementar mensaje fallback "El menú del día estará disponible próximamente" cuando no hay menú publicado
    - Aplicar animaciones de entrada a las tarjetas del menú
    - _Requisitos: 4.1, 4.2, 4.4, 4.5_

  - [ ]* 5.2 Escribir test de propiedad para items del menú
    - **Propiedad 4: Los items del menú muestran nombre, descripción y precio**
    - **Valida: Requisito 4.2**

  - [ ]* 5.3 Escribir tests unitarios para menú
    - Verificar mensaje fallback cuando no hay menú del día publicado
    - Verificar formato de precio en MXN
    - _Requisitos: 4.2, 4.5_

- [x] 6. Implementar módulo de espacios, membresías y reservaciones
  - [~] 6.1 Crear páginas de espacios y membresías
    - Crear `src/services/spaces.ts` con funciones para obtener espacios y disponibilidad desde Supabase
    - Implementar componente `SpaceCard`: foto, nombre, descripción, capacidad, amenidades
    - Implementar `SpacesPage`: información del Bullpen (20 lugares), 2 Cabinas Insonorizadas y Sala de Juntas con fotos y descripciones
    - Incluir aviso visible de política de no-perros en la página de espacios
    - Implementar componente `PriceCard` para tarjetas de membresía
    - Implementar `MembershipsPage`: tres modalidades (Walk-In $50, General $500/mes, Premium $800/mes) con comparación de beneficios y destaque visual de Premium
    - Incluir flujo de registro/contacto al seleccionar una membresía
    - _Requisitos: 5.1, 5.2, 5.8, 6.1, 6.2, 6.3, 6.4, 6.5, 12.1, 12.2_

  - [~] 6.2 Implementar sistema de autenticación y reservaciones
    - Configurar Supabase Auth con email/contraseña
    - Crear `src/services/reservations.ts` con funciones para crear, obtener y verificar disponibilidad de reservaciones
    - Implementar `ReservationsPage`: selector de espacio, fecha y horario con verificación de disponibilidad en tiempo real
    - Implementar validación de membresía premium: solo usuarios con `membership_type === 'premium'` pueden reservar
    - Implementar detección de conflictos de horario: rechazar reservaciones que se solapen y sugerir horarios alternativos
    - Implementar confirmación de reservación exitosa
    - Mostrar mensaje informativo para usuarios sin membresía premium indicando que se requiere upgrade
    - _Requisitos: 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 8.1_

  - [ ]* 6.3 Escribir test de propiedad para autorización de reservaciones
    - **Propiedad 5: La autorización de reservaciones depende del tipo de membresía**
    - **Valida: Requisitos 5.3, 5.4**

  - [ ]* 6.4 Escribir test de propiedad para conflictos de horario
    - **Propiedad 6: Las reservaciones con conflicto de horario son rechazadas**
    - **Valida: Requisito 5.5**

- [ ] 7. Checkpoint — Verificar módulos de gatos, menú y reservaciones
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [ ] 8. Implementar tienda de merchandising y carrito de compras
  - [ ] 8.1 Crear Zustand store para el carrito y componentes de tienda
    - Implementar `src/store/cartStore.ts` con Zustand: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `toggleCart`, `getTotal`, `getItemCount`
    - Validar que no se puedan agregar productos con stock 0 para la talla seleccionada
    - Crear `src/services/products.ts` con funciones para obtener catálogo y producto por slug desde Supabase
    - Implementar componente `ProductCard`: foto, nombre, descripción, precio en MXN, selector de talla, botón agregar al carrito
    - Mostrar producto como "agotado" cuando `stock[size] === 0` e impedir adición al carrito
    - Implementar `CartDrawer`: panel lateral deslizable desde la derecha con productos, cantidades editables, total y botón de checkout
    - Asegurar que todas las imágenes de productos tengan atributo `alt` descriptivo
    - _Requisitos: 7.1, 7.2, 7.7, 11.2_

  - [ ]* 8.2 Escribir test de propiedad para tarjetas de producto
    - **Propiedad 7: Las tarjetas de producto muestran todos los campos requeridos**
    - **Valida: Requisito 7.1**

  - [ ]* 8.3 Escribir test de propiedad para actualización del carrito
    - **Propiedad 8: El carrito se actualiza correctamente al agregar productos**
    - **Valida: Requisito 7.2**

  - [ ]* 8.4 Escribir test de propiedad para productos agotados
    - **Propiedad 9: Los productos sin inventario no pueden agregarse al carrito**
    - **Valida: Requisito 7.7**

  - [ ] 8.5 Implementar páginas de tienda, checkout y confirmación
    - Implementar `ShopPage`: catálogo de productos con grid responsivo y filtros por categoría
    - Implementar `ProductDetailPage`: galería de fotos, descripción completa, selector de talla, stock disponible, botón agregar al carrito
    - Implementar `CheckoutPage`: formulario de datos de envío (validado con Zod + react-hook-form) e integración con Stripe Checkout
    - Crear Netlify Function `create-checkout-session` para crear sesión de Stripe de forma segura (sin exponer claves en el cliente)
    - Verificar stock antes de crear sesión de Stripe
    - Implementar `OrderConfirmPage`: número de orden, resumen de compra, estado del pedido
    - Crear Netlify Function `stripe-webhook` para recibir confirmaciones de pago y actualizar estado de orden en Supabase
    - _Requisitos: 7.1, 7.2, 7.3, 7.4, 7.5, 7.7_

  - [ ]* 8.6 Escribir tests unitarios para checkout y confirmación
    - Verificar que el formulario de envío y método de pago están presentes
    - Verificar que se muestra número de orden y resumen en confirmación
    - _Requisitos: 7.3, 7.5_

- [ ] 9. Checkpoint — Verificar tienda y carrito de compras
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [ ] 10. Implementar panel de administración
  - [ ] 10.1 Crear layout de admin y protección de rutas
    - Implementar `AdminLayout`: sidebar con navegación entre secciones (menú, gatos, reservaciones, productos)
    - Implementar autenticación de admin con Supabase Auth: login con email/contraseña, verificación de rol `admin`
    - Implementar redirect a login o homepage para usuarios no-admin que intenten acceder a rutas `/admin/*`
    - Mostrar mensaje de error en credenciales incorrectas
    - _Requisitos: 8.1, 8.2, 8.7_

  - [ ]* 10.2 Escribir test de propiedad para acceso al panel admin
    - **Propiedad 10: El panel de administración es inaccesible para usuarios no-admin**
    - **Valida: Requisito 8.7**

  - [ ] 10.3 Implementar gestión de gatos en admin
    - Implementar `AdminCatsPage`: listado de gatos con opciones de crear, editar y eliminar
    - Implementar formulario de creación/edición de gato: nombre, slug, edad, personalidad, estado de adopción
    - Implementar subida de fotografías a Supabase Storage (bucket `cat-photos`), validar tamaño máximo 5MB y formatos JPG/PNG/WebP
    - Los cambios deben reflejarse en las páginas públicas sin redespliegue (usando Supabase real-time o refetch)
    - _Requisitos: 3.5, 3.6, 8.4, 8.8_

  - [ ] 10.4 Implementar gestión de menú diario en admin
    - Implementar `AdminMenuPage`: gestión del catálogo de productos de café y galletas (crear, editar, eliminar)
    - Implementar selector de items para el menú del día con opción de publicar
    - Subida de imágenes a Supabase Storage (bucket `menu-photos`)
    - Los cambios deben reflejarse en la página pública del menú sin redespliegue
    - _Requisitos: 4.3, 4.4, 4.6, 8.3, 8.8_

  - [ ] 10.5 Implementar gestión de reservaciones en admin
    - Implementar `AdminReservationsPage`: listado de todas las reservaciones con filtros por fecha y estado
    - Implementar acciones de visualizar, aprobar y cancelar reservaciones
    - _Requisitos: 5.7, 8.5, 8.8_

  - [ ] 10.6 Implementar gestión de merchandising en admin
    - Implementar `AdminProductsPage`: listado de productos con opciones de crear, editar y eliminar
    - Implementar formulario de producto: nombre, slug, descripción, precio, tallas, categoría, stock por talla
    - Subida de fotos a Supabase Storage (bucket `product-photos`)
    - Gestión de inventario por talla
    - _Requisitos: 7.6, 8.6, 8.8_

- [ ] 11. Checkpoint — Verificar panel de administración
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

- [ ] 12. Implementar integraciones y páginas restantes
  - [ ] 12.1 Implementar integración con Instagram y componente SocialFeed
    - Crear `src/services/instagram.ts` para obtener publicaciones recientes via Instagram Basic Display API
    - Implementar componente `SocialFeed`: galería de publicaciones recientes de Instagram
    - Integrar `SocialFeed` en la Homepage
    - Manejar gracefully el caso donde la API de Instagram no está disponible (ocultar sección sin afectar el resto)
    - _Requisitos: 9.1, 9.2, 9.3, 9.4_

  - [ ] 12.2 Implementar página de política de mascotas
    - Crear `PetPolicyPage` con información clara sobre la política de no-perros
    - Comunicar que los únicos animales son los 10 gatos residentes
    - Asegurar que el aviso sea visible y accesible
    - _Requisitos: 12.1, 12.2_

  - [ ]* 12.3 Escribir tests unitarios para política de mascotas e integración social
    - Verificar que el aviso de no-perros es visible en la página de política
    - Verificar que los enlaces sociales abren en nueva pestaña
    - Verificar que el feed de Instagram se oculta gracefully cuando la API falla
    - _Requisitos: 9.3, 12.1, 12.2_

- [ ] 13. Optimización de rendimiento y accesibilidad
  - [ ] 13.1 Implementar optimizaciones de rendimiento
    - Verificar que todas las imágenes usan `loading="lazy"`
    - Verificar que todas las rutas usan `React.lazy()` con `Suspense`
    - Optimizar bundle size: verificar tree-shaking de Tailwind CSS y code splitting de Vite
    - Verificar que el contenido above-the-fold carga en ≤ 3 segundos en 4G
    - Configurar headers de cache en Netlify (`netlify.toml`)
    - _Requisitos: 2.8, 10.3, 10.4_

  - [ ] 13.2 Verificar accesibilidad y navegación por teclado
    - Auditar todas las páginas con `vitest-axe` para cumplimiento WCAG 2.1 AA
    - Verificar navegación completa por teclado en todos los componentes interactivos
    - Verificar contraste de color mínimo 4.5:1 en todo el contenido textual
    - Verificar que todas las imágenes del sitio tienen `alt` descriptivo no vacío
    - Verificar diseño responsivo desde 320px hasta 2560px
    - _Requisitos: 1.5, 10.6, 11.1, 11.2, 11.3, 11.5_

- [ ] 14. Configurar base de datos Supabase y despliegue
  - [ ] 14.1 Crear migraciones SQL para Supabase
    - Crear scripts SQL para todas las tablas: `users`, `cats`, `menu_items`, `daily_menus`, `daily_menu_items`, `spaces`, `reservations`, `products`, `orders`, `order_items`
    - Implementar políticas de Row Level Security (RLS) según la tabla de seguridad del diseño
    - Crear buckets de Supabase Storage: `cat-photos`, `product-photos`, `menu-photos`, `space-photos`, `brand-assets` con políticas de acceso
    - Crear datos seed iniciales: espacios (bullpen, 2 cabinas, sala de juntas), planes de membresía, usuario admin
    - _Requisitos: 5.1, 8.1, 8.7_

  - [ ] 14.2 Configurar despliegue en Netlify
    - Crear `netlify.toml` con configuración de build, redirects para SPA y headers de cache
    - Configurar variables de entorno: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
    - Configurar Netlify Functions para endpoints serverless (Stripe checkout, webhooks)
    - _Requisitos: 10.2_

- [ ] 15. Checkpoint final — Verificación completa
  - Asegurar que todos los tests pasan, preguntar al usuario si surgen dudas.

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia requisitos específicos para trazabilidad.
- Los checkpoints aseguran validación incremental del progreso.
- Los tests de propiedades validan las 12 propiedades de correctitud universales definidas en el diseño.
- Los tests unitarios validan ejemplos específicos y casos borde.
- Todas las imágenes deben incluir texto alternativo descriptivo (Requisito 11.2).
- Todas las animaciones deben respetar `prefers-reduced-motion` (Requisito 11.4).
- Los precios siempre se muestran en MXN.
