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
| 3 | IA que trabaja por tu negocio (`#ia`) | `--dark` | Título + dos ítems con divisor; marco de producto con CTA | Líneas 5 y 2; `hero-6` |
| 4 | Soluciones digitales para empresas (`#servicios`) | blanco | Lista a 2 columnas con divisores y flecha | Las cinco líneas (spec 005) |
| 5 | Lo que construimos para tu negocio | `--surface` | Tres tarjetas de imagen con título, texto y etiquetas | Líneas 3, 1 y 4; `hero-2`, `hero-3`, `hero-5` |
| 6 | De las ideas a los resultados | blanco | Cuadrícula asimétrica: tarjeta grande, tarjeta pequeña y bloque de cifra | `hero-1`, `hero-4`; bloque `--primary` con "+100 proyectos" |
| 7 | CTA (`#contacto`) | `--dark` | Titular a la izquierda, texto y botón a la derecha | Texto y correo existentes |

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | Secciones con 104 px de relleno vertical en escritorio y 64 px en móvil (1000 px o menos). Titulares de sección entre 34 y 56 px, peso 700. |
| RF-02 | Los acentos usan solo la paleta de la spec 001: `--primary` (bloque de cifra), `--primary-soft` (botones sobre oscuro) y `--primary-on-dark` (palabras destacadas sobre oscuro). No se introducen colores nuevos. |
| RF-03 | La lista de líneas (sección 4) pasa de una columna de tarjetas a dos columnas con divisores; conserva ícono, título, texto y flecha de la spec 005. En móvil vuelve a una columna. |
| RF-04 | Las imágenes usan `height: auto` con `aspect-ratio`, porque el atributo `height` del HTML las estiraría. |
| RF-05 | Sin JavaScript nuevo: solo CSS. |
| RF-06 | Las etiquetas de las tarjetas (sección 5) se derivan de los textos aprobados de cada línea; no afirman tecnologías ni clientes. |

## Puntos abiertos

- **Cifras.** "99.9 %" y "+100 proyectos" vienen del sitio anterior y no tienen respaldo documentado.
- **Textos nuevos.** Titulares y párrafos de las secciones 2, 3, 5 y 6 son propuestas pendientes de aprobación del cliente.
- **Hero.** Se agrandó (580 px, titular de 64 px) para acercarse a la referencia; la spec 002 aún cita las medidas anteriores.
- **Logos de clientes.** No hay clientes publicables, por eso la sección 2 usa cifras en lugar de una franja de logos.
