# Especificación 012: Página «Automatización con inteligencia artificial»

**Estado**: Borrador | **Creada**: 2026-11-01 | **Proyecto**: vianda-tech-front-web

## Resumen

Página interna de la línea «Automatización con IA» (spec 005, línea 5), con la misma estructura que las specs 008 a 011. Con esta página las cinco líneas de negocio tienen la suya. Implementación: `automatizacion-ia.html`.

## Contenido (texto del cliente)

- **h1:** Automatización con *inteligencia artificial*.
- **Introducción:** «Implementamos soluciones de automatización e inteligencia artificial que ayudan a reducir tareas repetitivas, optimizar tiempos y apoyar la eficiencia de los procesos empresariales.»
- **Lista (cinco puntos):** Automatización de tareas y flujos de trabajo · Integración de herramientas de inteligencia artificial · Asistentes virtuales y chatbots, según las necesidades del proyecto · Integración entre plataformas y sistemas · Soluciones para apoyar procesos administrativos y de atención.

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | Mismas secciones que la spec 008, con imagen `hero-6.jpg` a la derecha de la introducción y lista de cinco puntos en dos columnas. |
| RF-02 | Los títulos «Menos tareas repetitivas, más eficiencia.» y «Lo que automatizamos» son propuestas de Vianda Tech, pendientes de aprobación. |
| RF-03 | Enlaces de entrada: tarjeta «Automatización con IA» de la galería y submenú «Servicios» en todas las páginas. |
| RF-05 | Entre la lista y el CTA, la página incluye la sección oscura «IA que trabaja *por tu negocio.*» de la home (spec 006, RF-09): título, subtítulo, las dos tarjetas (atención al cliente y publicidad) y el banner `ia-robot.jpg`. No lleva el botón «Automatiza tu negocio» de la home, por redundante con el CTA de la página; por eso la sección usa la clase `ai--compact` (relleno inferior de 56 px, 32 px en 1000 px o menos) para no dejar un vacío oscuro antes del CTA. Se reutilizan los estilos `.ai*`; el contenido está duplicado en `index.html`, así que cualquier cambio de texto debe hacerse en ambos. |
| RF-04 | SEO propio y entrada en `sitemap.xml` (spec 004). |

## Puntos abiertos

- La imagen `hero-6.jpg` es la de la galería; se puede cambiar por una propia.