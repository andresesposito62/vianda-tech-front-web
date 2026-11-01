# Especificación 007: Quiénes somos

**Estado**: Borrador | **Creada**: 2026-11-01 | **Proyecto**: vianda-tech-front-web

## Resumen

El enlace "Nosotros" del menú y del pie se renombra "Quiénes somos" y abre una página propia dentro del sitio, `quienes-somos.html`. Usa la misma cabecera, pie, paleta y componentes de la spec 006.

Implementación: `quienes-somos.html` y `styles.css` (bloque "Página interna").

## Contenido (texto del cliente, sin cambios)

| Bloque | Texto |
|---|---|
| Quiénes somos | En Vianda Tech somos una empresa colombiana especializada en soluciones tecnológicas integrales. Acompañamos a empresas en sus procesos de transformación digital, desarrollando e implementando herramientas tecnológicas que optimizan sus operaciones y potencian su crecimiento. |
| Nuestra misión | Impulsar el crecimiento y la transformación digital de las empresas mediante soluciones tecnológicas innovadoras, funcionales y adaptadas a sus necesidades. |
| Nuestra visión | Consolidarnos como una empresa colombiana reconocida por la calidad, innovación y confiabilidad de nuestras soluciones tecnológicas, convirtiéndonos en un aliado estratégico para las empresas y proyectando nuestro crecimiento hacia nuevos mercados. |
| Nuestros valores | Innovación · Compromiso · Calidad · Adaptabilidad · Transparencia · Orientación al cliente. |

## Requerimientos

| ID | Requerimiento |
|---|---|
| RF-01 | El texto "Nosotros" pasa a "Quiénes somos" en el menú de escritorio, el cajón móvil y el pie, en `index.html` y en la página nueva. |
| RF-02 | El enlace abre `quienes-somos.html` en la misma pestaña; el logo y los enlaces de la página llevan de vuelta a `index.html` (con sus anclas). El enlace activo se marca con `aria-current="page"`. |
| RF-03 | Estructura: cabecera con título "Quiénes somos" → texto introductorio (título a la izquierda, párrafo a la derecha) → misión y visión en dos tarjetas sobre fondo `--surface` → valores en una lista numerada de 3 columnas con divisores → CTA oscuro → pie. |
| RF-04 | Los valores pasan a 1 columna en móvil (1000 px o menos); las tarjetas de misión y visión se apilan. |
| RF-05 | La página tiene su propio `title`, `description`, `canonical` y etiquetas Open Graph, y figura en `sitemap.xml` (spec 004). |
| RF-06 | Sin JavaScript nuevo: el menú móvil reutiliza `script.js`. |

## Puntos abiertos

- **Imágenes.** La página no usa fotos; se puede sumar una de `assets/` cuando el cliente lo pida.
- **Enlaces del pie.** "Blog" y las redes siguen apuntando a anclas o a `#` (spec 004, RF-12).
