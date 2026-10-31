# Especificación 005: Líneas de negocio

**Estado**: Borrador | **Creada**: 2026-10-31 | **Proyecto**: vianda-tech-front-web

## Resumen

Vianda Tech organiza su oferta en seis líneas de negocio. Se presentan como tarjetas en la sección "Soluciones digitales para empresas" (`#servicios`, bajo el rótulo "Nuestros servicios"), en dos filas de tres en escritorio y apiladas en móvil. Esta spec es la fuente de verdad de los nombres y textos de las líneas: cualquier otra sección (carrusel, SEO, menú) debe ser coherente con ella.

Implementación: `index.html` (`ul.services`) y `styles.css` (`.services`, `.card`).

## Líneas de negocio

| # | Línea | Texto de la tarjeta | Ícono |
|---|---|---|---|
| 1 | Software a Medida | Creamos soluciones digitales para hacer más fácil cada tarea de tu negocio. | `i-terminal` |
| 2 | Asesoría Tecnológica | Te ayudamos a tomar mejores decisiones tecnológicas para aprovechar al máximo tu inversión. | `i-chat` |
| 3 | Sitios Web Profesionales | Diseñamos páginas web que resaltan lo mejor de tu negocio y te ayudan a atraer nuevos clientes. | `i-code` |
| 4 | Aplicaciones Móviles | Creamos experiencias digitales para que tus clientes puedan acceder a tu negocio desde cualquier lugar. | `i-phone` |
| 5 | Automatización con IA | Hacemos que la inteligencia artificial trabaje para tu negocio, simplificando tareas y mejorando la atención al cliente. | `i-cpu` |
| 6 | Renovación de Sistemas | Hacemos más eficiente el software de tu negocio, sin complicaciones. | `i-refresh` |

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | La sección muestra las seis líneas, en el orden de la tabla, con ícono, título, texto y flecha. |
| RF-02 | En escritorio las tarjetas forman dos filas de tres. Su alto no es fijo: mínimo 138 px, crece con el texto y las de una misma fila se igualan. |
| RF-03 | En móvil y tablet (1000 px o menos) las tarjetas se apilan, con el ícono a la izquierda y el texto a la derecha. |
| RF-04 | Los textos de las tarjetas pueden ocupar hasta cuatro renglones en escritorio. No se aplica el límite de dos renglones de la spec 002 (RF-14), que es solo para el carrusel. |
| RF-05 | Cada línea tiene un ícono propio, de trazo de 2 px y sin rellenos, para que se vea nítido a 26 px (spec 001). |
| RF-06 | Los nombres de las líneas se usan tal cual en el menú, el SEO y el carrusel cuando se haga referencia a ellas. |

## Relación con otras secciones

- **Carrusel (spec 002).** Siete diapositivas: la 1 es el mensaje de marca (sin línea asociada) y las 2 a 7 siguen el orden de la tabla, con Sitios Web Profesionales primero. Cada una usa el ícono de su tarjeta.
- **SEO (spec 004).** Las palabras clave "desarrollo de software" y "páginas web" corresponden a las líneas 1 y 3. "Páginas para tu negocio" y "innovación" no aparecen en las tarjetas, pero sí en la descripción de la página.
- **Enlaces.** Las seis tarjetas apuntan a `#`, pendientes de tener una página o sección por línea (spec 004, RF-12).

## Puntos abiertos

- **Integraciones.** ✅ Resuelto: no es una línea de negocio y no se ofrece como servicio independiente. Consecuencias pendientes: la diapositiva 4 del carrusel ("Tus herramientas, todas conectadas"), el submenú "Servicios" del menú de escritorio (lista "Integraciones") y el ícono `i-puzzle`, que ya no corresponde a ningún servicio.
- **Carrusel.** ✅ Resuelto: las diapositivas coinciden con las líneas de negocio.
- **Páginas por línea.** Cada línea merece su propia página con `h1`, `title` y `description` para SEO.
- **Íconos del carrusel.** ✅ Resuelto: usan los mismos que las tarjetas. `i-puzzle` ya no se usa en ningún lado y se puede eliminar.
- **Textos.** Aprobados por el cliente el 2026-10-31 en la conversación de diseño; no hay versión validada con terceros.
