# Especificación 004: SEO

**Estado**: Borrador | **Creada**: 2026-10-31 | **Proyecto**: vianda-tech-front-web

## Resumen

El SEO es un criterio transversal de diseño: toda sección, texto o cambio de estructura nuevo debe revisarse contra esta spec antes de darse por terminado. El objetivo es que la página se indexe bien y se presente bien al compartirse, sin sacrificar rendimiento ni accesibilidad.

Implementación: `index.html` (`<head>` y estructura), archivos de raíz (`robots.txt`, `sitemap.xml`) y `assets/`.

## Estado actual

| Elemento | Estado |
|---|---|
| `lang="es"`, `<title>`, `meta description`, `viewport` | Presentes |
| Un solo `h1` (primera diapositiva del carrusel), el resto `h2` | Cumple |
| `alt` en el logotipo; íconos decorativos con `aria-hidden` | Cumple |
| URL canónica, Open Graph, Twitter Card, favicon | Faltan |
| Datos estructurados (JSON-LD) | Faltan |
| `robots.txt` y `sitemap.xml` | Faltan |
| Enlaces con destino real (varios usan `href="#"`) | Pendiente |

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | Cada página tiene un `<title>` único de unos 60 caracteres como máximo, con la marca y la propuesta de valor. |
| RF-02 | Cada página tiene una `meta description` única, de entre 120 y 160 caracteres, redactada como invitación a hacer clic. |
| RF-03 | Cada página tiene un solo `h1`, con la palabra clave principal, y los `h2` y `h3` siguen un orden jerárquico sin saltos. El contenido visible en el HTML inicial no depende de JavaScript para indexarse. |
| RF-04 | Se declara `<link rel="canonical">` con la URL definitiva de cada página. |
| RF-05 | Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` = `es_ES` o la variante del mercado) y Twitter Card (`summary_large_image`), con una imagen de 1200 × 630 px. |
| RF-06 | Datos estructurados JSON-LD de tipo `Organization` (nombre, logotipo, URL, redes sociales) y, cuando haya contacto público, `LocalBusiness` o `ProfessionalService`. |
| RF-07 | Existen `robots.txt` (con la ruta del sitemap) y `sitemap.xml`. Se actualizan al añadir páginas. |
| RF-08 | Las imágenes con contenido llevan `alt` descriptivo; las decorativas llevan `alt=""` o `aria-hidden`. Todas declaran `width` y `height`. Las que no están en la primera pantalla usan `loading="lazy"`. |
| RF-09 | Los enlaces usan texto descriptivo (no "clic aquí") y apuntan a destinos reales. Los `href="#"` provisionales se sustituyen antes de publicar. |
| RF-10 | Las URL son cortas, en minúsculas y sin acentos, con guiones. Los anclajes de sección (`#servicios`, `#proyectos`, `#contacto`) tienen un `id` estable. |
| RF-11 | Hay favicon y `theme-color`. |
| RF-12 | Cuando el sitio crezca (blog, páginas de servicio), cada servicio tiene su propia página con su `h1`, `title` y `description`, en lugar de vivir solo como sección de la portada. |

## Rendimiento (Core Web Vitals)

| Métrica | Objetivo | Nota |
|---|---|---|
| LCP | 2,5 s o menos | El titular del hero es el elemento principal. Precargar la fuente Inter y evitar imágenes pesadas en la primera diapositiva. |
| CLS | 0,1 o menos | Reservar el tamaño de imágenes y logotipo con `width` y `height`. |
| INP | 200 ms o menos | El carrusel usa transformaciones CSS y no bloquea el hilo principal. |

El rendimiento debe medirse en móvil, porque Google indexa primero la versión móvil. El diseño responsive de la spec 002 y el menú de la spec 003 deben mantener el mismo contenido y los mismos enlaces que escritorio.

## Reglas de diseño y contenido

- **Carrusel.** Solo el titular de la primera diapositiva es `h1` (spec 002). Los textos de las demás diapositivas están en el HTML y son indexables, aunque estén fuera de pantalla. No ocultarlos con `display: none`.
- **Textos.** Cada titular y descripción nuevo debe incluir de forma natural los términos que el cliente busca (por ejemplo, "páginas web", "automatización con IA", "integraciones"), sin repetirlos en exceso. La descripción de las diapositivas respeta el límite de dos renglones (spec 002, RF-14).
- **Menú.** El menú móvil (spec 003) es HTML real con enlaces `<a>`, nunca botones con JavaScript, para que los rastreadores sigan los enlaces. Los enlaces del pie no se eliminan del HTML: en móvil se ocultan solo con CSS.
- **Accesibilidad.** Contraste, teclado y etiquetas ARIA ayudan al SEO y están cubiertos en las specs 001 a 003.

## Puntos abiertos

- **Dominio y URL canónica.** No hay dominio definitivo; sin él no se pueden fijar `canonical`, `og:url` ni el sitemap.
- **Palabras clave.** No hay lista de términos objetivo ni mercado geográfico definido (país o ciudad). Condiciona los textos y `og:locale`.
- **Imagen para redes.** Falta una imagen de 1200 × 630 px para Open Graph.
- **Datos de contacto.** El correo `contacto@viandatech.com` es provisional; `LocalBusiness` necesita dirección o área de servicio reales.
- **Blog y páginas de servicio.** `#blog` hoy apunta al pie y no hay contenido. Un blog real sería la mayor palanca de SEO a medio plazo.
- **Analítica.** No hay Search Console ni analítica configuradas.
- **Pruebas.** Ninguna verificación hecha todavía: faltan Lighthouse, validación de datos estructurados y revisión de la vista previa al compartir.
