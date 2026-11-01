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
| 6 | De las ideas a los resultados | blanco | Una fila con vista previa a la izquierda y texto a la derecha (RF-10, RF-11) | Vista previa enlazada del sitio de un cliente |
| 7 | Tu negocio, siempre conectado | `--surface` | Sección propia: título y texto a la izquierda, imagen a la derecha (RF-12) | `nube-conectividad.jpg` |
| 8 | CTA (`#contacto`) | `--dark` | Titular a la izquierda, texto y botón a la derecha | Texto y correo existentes |

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | Secciones con 104 px de relleno vertical en escritorio y 64 px en móvil (1000 px o menos). Titulares de sección entre 34 y 56 px, peso 700. |
| RF-02 | Los acentos usan solo la paleta de la spec 001: `--primary-soft` (botones y palabras destacadas sobre oscuro, como "por tu negocio." y "al siguiente nivel?"). No se introducen colores nuevos. |
| RF-03 | ~~Lista de líneas a dos columnas~~ Retirado el 2026-11-01: la sección "Nuestros servicios / Soluciones digitales para empresas" se eliminó a pedido del cliente. Las cinco líneas se presentan en la galería de la sección 5 (ancla `#servicios`), en la sección oscura de IA, en el carrusel y en el submenú. |
| RF-04 | Las imágenes usan `height: auto` con `aspect-ratio`, porque el atributo `height` del HTML las estiraría. |
| RF-05 | Sin JavaScript nuevo: solo CSS. |
| RF-06 | La sección 5 no repite los textos de la lista de la sección 4: es una galería visual con solo el nombre de la línea. Las imágenes llevan `alt` vacío porque el nombre ya está en el enlace. |
| RF-07 | Sección 5: cada mosaico completo es un enlace, con flecha en círculo (`--primary-soft`) que se desplaza al pasar el cursor, zoom suave de la imagen (desactivado con "reducir movimiento") y contorno visible al enfocar con teclado. El texto blanco va sobre un degradado de `--dark` para mantener el contraste. En 1000 px o menos son 2 columnas (el destacado ocupa las dos, 240 px de alto); en 640 px o menos, una columna de 200 px. |
| RF-08 | La sección 4 es el bloque «¿Por qué elegir Vianda Tech? / Tecnología que genera valor», centrado, con cuatro columnas divididas por líneas finas, cada una con ícono en círculo `--primary-soft`, título y texto: **Optimización de procesos** («Reduce tareas manuales y aprovecha mejor tu tiempo.», `i-zap`), **Productividad empresarial** («Herramientas que facilitan el trabajo diario.», `i-users`), **Transformación digital** («Integra tecnología en tus procesos.», `i-cloud-up`) y **Crecimiento y escalabilidad** («Soluciones que evolucionan con tu negocio.», `i-trend`). Contenido tomado de la captura del cliente (`captura-look-and-feel.JPG`); en 1000 px o menos son 2 columnas y en 640 px o menos, una. |
| RF-09 | Sección 3, contenido tomado de `IA que impulsa tu negocio.png` del cliente. Título: «IA que trabaja **por tu negocio.**» (la segunda parte en `--primary-soft`). Subtítulo: «Automatizamos procesos y conversaciones para que te enfoques en lo importante: **hacer crecer tu negocio.**» Tarjeta 1 (`i-chat`): **Automatización de atención al cliente** — «Creamos chatbots para tu página web y WhatsApp que responden consultas, atienden clientes y agilizan tus procesos de venta.» Tarjeta 2 (`i-megaphone`): **Automatización de publicidad** — «Optimizamos tus campañas en redes sociales para llegar a más clientes y aprovechar mejor tu inversión.» La imagen `assets/ia-robot.jpg` (3140×770, calidad 92) es el recorte inferior de ese diseño, ampliado al doble con interpolación bicúbica y un enfoque suave para pantallas de alta densidad y se muestra completa en escritorio. En 1000 px o menos las dos columnas se apilan y el banner se enmarca más alto y enfocado en el robot y la pantalla (`object-fit: cover`, 2,2:1 en tablet y 3:2 en 640 px o menos, `object-position` 30–32 %).  El botón «Automatiza tu negocio» abre WhatsApp al número oficial de Vianda Tech (+57 322 306 4409, ver constitución) en una pestaña nueva con el mensaje «Hola, quiero automatizar mi negocio» ya escrito. |
| RF-10 | En la primera fila de la sección 6 (sin fondo), una vista previa del sitio de una clienta: captura de `https://psicologaluisavalencia.com/` (`assets/cliente-luisa-valencia.jpg`, 1260×560, tomada el 2026-11-01) con pie «Cliente · Sitio web / Luisa Valencia, Psicóloga Clínica» y botón de flecha en círculo `--primary-soft` con la flecha en `--primary-text` (igual que los de la galería). Toda la vista previa es un enlace a ese sitio que abre en pestaña nueva (`target="_blank"`, `rel="noopener noreferrer"`) y lo anuncia a lectores de pantalla («Abrir el sitio en una pestaña nueva»). La tarjeta tiene alto relieve: sombra en tres capas con tinte `--primary-text`, que al pasar el cursor sube 6 px y se profundiza. Es una imagen estática, no un `iframe`, por rendimiento y seguridad; hay que actualizarla si el sitio de la clienta cambia. La inclusión del cliente fue indicada por Vianda Tech (clienta satisfecha); falta su autorización por escrito. |
| RF-11 | Sección 6: una sola tarjeta en fila, con la vista previa a la izquierda y el titular y texto a la derecha (1,15fr / 1fr, 56 px de separación, texto centrado verticalmente); en 1000 px o menos, el titular y texto van arriba y la vista previa debajo. Titulares de 28 px (24 px en móvil) y textos de 16 px en gris. Se retiró la tarjeta grande con `hero-1` y su texto. |
| RF-12 | Sección 7, independiente (antes tarjeta de la sección 6) sobre `--surface`: título «Tu negocio, **siempre conectado.**» como h2 de sección (34–56 px, con la segunda parte en `--accent`), texto «Tecnología en la nube para estar más cerca de tus clientes, atenderlos cuando te necesiten y ofrecerles una experiencia cercana, ágil y sin importar dónde se encuentren.» (texto del cliente) y a la derecha la imagen `assets/nube-conectividad.jpg` (1672×941, «Nube holográfica de conectividad segura», aportada por el cliente; saturación al 62 % y tonos aclarados para igualarla a la de Aplicaciones Móviles) en 16:9, con esquinas de 16 px y sombra suave. Sin enlace. En 1000 px o menos, texto arriba e imagen debajo. |

## Puntos abiertos

- **Cifras.** "99.9 %" viene del sitio anterior y no tiene respaldo documentado. La cifra "+100 proyectos" se retiró del sitio el 2026-11-01.
- **Textos nuevos.** Titulares y párrafos de las secciones 2, 3, 5 y 6 son propuestas pendientes de aprobación del cliente.
- **Hero.** Se agrandó (580 px, titular de 64 px) para acercarse a la referencia; la spec 002 aún cita las medidas anteriores.
- **Logos de clientes.** No hay clientes publicables, por eso la sección 2 usa cifras en lugar de una franja de logos.
