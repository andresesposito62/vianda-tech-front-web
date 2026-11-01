# Especificación 008: Página «Desarrollo de software a la medida»

**Estado**: Borrador | **Creada**: 2026-11-01 | **Proyecto**: vianda-tech-front-web

## Resumen

Página interna dedicada a la línea de negocio «Software a Medida» (spec 005, línea 1), con el mismo marco que «Quiénes somos» (spec 007): cabecera con menú, hero de página, secciones, CTA y pie. Implementación: `software-a-medida.html` y el bloque «Página interna "Software a la medida"» de `styles.css`.

## Contenido (texto del cliente)

- **h1:** Desarrollo de software *a la medida*.
- **Introducción:** «Diseñamos y desarrollamos soluciones de software personalizadas, alineadas con las necesidades y objetivos de cada empresa. Creamos herramientas que facilitan la gestión, optimizan operaciones y responden a retos específicos del negocio.»
- **Lista (numerada por CSS):** Sistemas de gestión empresarial y administrativa · Plataformas y sistemas de información personalizados · Herramientas internas para apoyar procesos específicos · Desarrollo de funcionalidades según los requerimientos del proyecto.

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | Secciones: hero de página; introducción con imagen `hero-3.jpg` a la derecha (sobre blanco); «Lo que desarrollamos» con los cuatro puntos en dos columnas (sobre `--surface`); CTA oscuro. En 1000 px o menos, una columna. |
| RF-02 | Los títulos de sección «Software pensado para tu empresa.» y «Lo que desarrollamos» son propuestas de Vianda Tech (no del texto del cliente) y están pendientes de aprobación. |
| RF-03 | Enlaces de entrada: tarjeta «Software a Medida» de la galería y submenú «Servicios» (escritorio e `index.html`/`quienes-somos.html`). |
| RF-04 | SEO propio: `title`, `description`, canonical, Open Graph y entrada en `sitemap.xml` (spec 004). |
| RF-05 | Sin JavaScript nuevo; mismos tokens de paleta (spec 001). |

## Puntos abiertos

- Las otras cuatro líneas siguen apuntando a `#`/`#servicios`; falta su contenido.
- La imagen `hero-3.jpg` es la de la galería; se puede cambiar por una propia de la página.
