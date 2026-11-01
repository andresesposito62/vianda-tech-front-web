# Especificación 006: Distribución de secciones de la home

**Estado**: Borrador | **Creada**: 2026-11-01 | **Proyecto**: vianda-tech-front-web

## Resumen

**Esta es la referencia vigente de look and feel de la home.** Define la distribución de secciones y el tipo de componentes: títulos grandes a la izquierda y texto a la derecha, mucho aire vertical, fondos alternados, listas con divisores, tarjetas de imagen y cuadrícula asimétrica. Usa las cinco líneas de negocio (spec 005), las imágenes de `assets/` y la paleta (spec 001).

Implementación: `index.html` (`main`) y `styles.css` (bloques "Secciones" a "CTA").

## Secciones, en orden

| # | Sección | Fondo | Componente (referencia) | Contenido propio |
|---|---|---|---|---|
| 1 | Hero con carrusel (spec 002) | `--hero` | Titular grande + CTA en píldora | Seis diapositivas, `hero-1` a `hero-6` |
| 2 | Introducción + cifras | blanco | Párrafo centrado + franja de cifras | «Impulsamos la transformación de tu negocio con soluciones digitales innovadoras que simplifican procesos, conectan ideas con tecnología y potencian tus resultados.» (texto del cliente); 99.9 %, mayor eficiencia, soporte experto |
| 3 | IA que trabaja por tu negocio (`#ia`) | `--dark` | Título y subtítulo a la izquierda, separados por una línea vertical de dos tarjetas de vidrio con ícono a la derecha; debajo, banner de imagen a ancho de contenedor y CTA centrado | Contenido del cliente (RF-09); `assets/ia-robot.jpg` |
| 4 | ¿Por qué elegir Vianda Tech? | blanco | Encabezado centrado + 4 columnas con divisores e ícono en círculo (RF-08) | Propuesta de valor del cliente |
| 5 | Lo que construimos para tu negocio (`#servicios`) | `--surface` | Galería bento de cinco mosaicos de imagen con el nombre de la línea sobre un degradado oscuro y una flecha: fila 1 con uno destacado de doble ancho y uno sencillo; fila 2 con tres iguales (300 px de alto) | Las cinco líneas, en este orden: 3 (`hero-2`), 1 (`hero-3`), 4 (`hero-5`), 2 (`hero-4`), 5 (`hero-6`) |
| 6 | De las ideas a los resultados | blanco | Cuadrícula asimétrica: tarjeta grande, tarjeta pequeña y bloque de cifra | `hero-1`, `hero-4`; bloque `--primary` con "+100 proyectos" |
| 7 | CTA (`#contacto`) | `--dark` | Titular a la izquierda, texto y botón a la derecha | Texto y correo existentes |

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | Secciones con 104 px de relleno vertical en escritorio y 64 px en móvil (1000 px o menos). Titulares de sección entre 34 y 56 px, peso 700. |
| RF-02 | Los acentos usan solo la paleta de la spec 001: `--primary` (bloque de cifra), `--primary-soft` (botones sobre oscuro) y `--primary-on-dark` (palabras destacadas sobre oscuro). No se introducen colores nuevos. |
| RF-03 | ~~Lista de líneas a dos columnas~~ Retirado el 2026-11-01: la sección "Nuestros servicios / Soluciones digitales para empresas" se eliminó a pedido del cliente. Las cinco líneas se presentan en la galería de la sección 5 (ancla `#servicios`), en la sección oscura de IA, en el carrusel y en el submenú. |
| RF-04 | Las imágenes usan `height: auto` con `aspect-ratio`, porque el atributo `height` del HTML las estiraría. |
| RF-05 | Sin JavaScript nuevo: solo CSS. |
| RF-06 | La sección 5 no repite los textos de la lista de la sección 4: es una galería visual con solo el nombre de la línea. Las imágenes llevan `alt` vacío porque el nombre ya está en el enlace. |
| RF-07 | Sección 5: cada mosaico completo es un enlace, con flecha en círculo (`--primary-soft`) que se desplaza al pasar el cursor, zoom suave de la imagen (desactivado con "reducir movimiento") y contorno visible al enfocar con teclado. El texto blanco va sobre un degradado de `--dark` para mantener el contraste. En 1000 px o menos son 2 columnas (el destacado ocupa las dos, 240 px de alto); en 640 px o menos, una columna de 200 px. |
| RF-08 | La sección 4 es el bloque «¿Por qué elegir Vianda Tech? / Tecnología que genera valor», centrado, con cuatro columnas divididas por líneas finas, cada una con ícono en círculo `--primary-soft`, título y texto: **Optimización de procesos** («Reduce tareas manuales y aprovecha mejor tu tiempo.», `i-zap`), **Productividad empresarial** («Herramientas que facilitan el trabajo diario.», `i-users`), **Transformación digital** («Integra tecnología en tus procesos.», `i-cloud-up`) y **Crecimiento y escalabilidad** («Soluciones que evolucionan con tu negocio.», `i-trend`). Contenido tomado de la captura del cliente (`captura-look-and-feel.JPG`); en 1000 px o menos son 2 columnas y en 640 px o menos, una. |
| RF-09 | Sección 3, contenido tomado de `IA que impulsa tu negocio.png` del cliente. Título: «IA que trabaja **por tu negocio.**» (la segunda parte en `--primary-on-dark`). Subtítulo: «Automatizamos procesos y conversaciones para que te enfoques en lo importante: **hacer crecer tu negocio.**» Tarjeta 1 (`i-chat`): **Automatización de atención al cliente** — «Creamos chatbots para tu página web y WhatsApp que responden consultas, atienden clientes y agilizan tus procesos de venta.» Tarjeta 2 (`i-megaphone`): **Automatización de publicidad** — «Optimizamos tus campañas en redes sociales para llegar a más clientes y aprovechar mejor tu inversión.» La imagen `assets/ia-robot.jpg` (1570×385) es el recorte inferior de ese diseño y se muestra completa, sin recortar más. En 1000 px o menos las dos columnas se apilan. |

## Puntos abiertos

- **Cifras.** "99.9 %" y "+100 proyectos" vienen del sitio anterior y no tienen respaldo documentado.
- **Textos nuevos.** Titulares y párrafos de las secciones 2, 3, 5 y 6 son propuestas pendientes de aprobación del cliente.
- **Hero.** Se agrandó (580 px, titular de 64 px) para acercarse a la referencia; la spec 002 aún cita las medidas anteriores.
- **Logos de clientes.** No hay clientes publicables, por eso la sección 2 usa cifras en lugar de una franja de logos.
