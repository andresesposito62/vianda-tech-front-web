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
| URL canónica, Open Graph, Twitter Card, favicon, `theme-color` | Presentes (favicon provisional con `logo-mark.png`) |
| Datos estructurados (`ProfessionalService`: correo, teléfono, dirección y área de servicio) | Presentes |
| `robots.txt` y `sitemap.xml` | Presentes (solo la portada) |
| Enlaces con destino real (varios usan `href="#"`) | Pendiente |

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | Cada página tiene un `<title>` único de unos 60 caracteres como máximo, con la marca y la propuesta de valor. |
| RF-02 | Cada página tiene una `meta description` única, de entre 120 y 160 caracteres, redactada como invitación a hacer clic. |
| RF-03 | Cada página tiene un solo `h1`, con la palabra clave principal, y los `h2` y `h3` siguen un orden jerárquico sin saltos. El contenido visible en el HTML inicial no depende de JavaScript para indexarse. |
| RF-04 | Se declara `<link rel="canonical">` con la URL definitiva de cada página. |
| RF-05 | Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` = `es_CO`) y Twitter Card (`summary_large_image`), con una imagen de 1200 × 630 px. |
| RF-06 | Datos estructurados JSON-LD de tipo `ProfessionalService` (nombre, logotipo, URL, redes sociales) y, cuando haya contacto público, `LocalBusiness` o `ProfessionalService`. |
| RF-07 | Existen `robots.txt` (con la ruta del sitemap) y `sitemap.xml`. Se actualizan al añadir páginas. |
| RF-08 | Las imágenes con contenido llevan `alt` descriptivo; las decorativas llevan `alt=""` o `aria-hidden`. Todas declaran `width` y `height`. Las que no están en la primera pantalla usan `loading="lazy"`. |
| RF-09 | Los enlaces usan texto descriptivo (no "clic aquí") y apuntan a destinos reales. Los `href="#"` provisionales se sustituyen antes de publicar. |
| RF-10 | Las URL son cortas, en minúsculas y sin acentos, con guiones. Los anclajes de sección (`#servicios`, `#contacto`) tienen un `id` estable. |
| RF-11 | Hay favicon y `theme-color`. |
| RF-12 | Cuando el sitio crezca (blog, páginas de servicio), cada servicio tiene su propia página con su `h1`, `title` y `description`, en lugar de vivir solo como sección de la portada. |

## Palabras clave

**Dominio:** `https://viandatech.com/`

| Prioridad | Término | Dónde debe aparecer |
|---|---|---|
| Principal | desarrollo de software | `title`, `meta description`, JSON-LD |
| Principal | páginas web | `title`, `meta description`, titulares y textos de servicios |
| Principal | páginas para tu negocio | `meta description`, textos de servicios |
| Secundaria | IA (inteligencia artificial) | `title`, textos de automatización |
| Secundaria | innovación | `meta description`, textos generales |

Aplicado hoy: `title` «Vianda Tech | Desarrollo de software, páginas web e IA» y `description` «Desarrollo de software y páginas web para tu negocio. Innovación e IA para automatizar procesos y hacer crecer tu empresa.» El `h1` se mantiene como «Tecnología que impulsa tu negocio» por decisión de marca.

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

- **Dominio.** Definido: `https://viandatech.com/`. Falta confirmar si se usa con o sin `www` y que el servidor redirija HTTP a HTTPS.
- **Mercado geográfico.** Todo Colombia (`areaServed`), con sede en Cajicá, Cundinamarca. `og:locale` es `es_CO`.
- **Imagen para redes.** `assets/og-image.jpg` mide 1200 × 629 px (proporción 1,91:1) y pesa 106 KB (era PNG de 1,8 MB). Su texto describe «Desarrollamos páginas web y automatizamos procesos con IA…», distinto de la descripción nueva.
- **Datos de contacto.** Correo `contacto@viandatech.com`, teléfono `+573145314993` y dirección «Diagonal 4a #4e-20, Cajicá». Están en el JSON-LD (`ProfessionalService`). Falta confirmar si se muestran también en el pie de la página (conviene que coincidan con el JSON-LD).
- **Blog y páginas de servicio.** `#blog` hoy apunta al pie y no hay contenido. Un blog real sería la mayor palanca de SEO a medio plazo.
- **Analítica.** No hay Search Console ni analítica configuradas.
- **Pruebas.** Ninguna verificación hecha todavía: faltan Lighthouse, validación de datos estructurados y revisión de la vista previa al compartir.
