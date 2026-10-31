# Especificación 002: Carrusel del hero

**Estado**: Borrador | **Creada**: 2026-10-30 | **Proyecto**: vianda-tech-front-web

## Resumen

La zona principal de la página (titular, descripción, botones y portátil) funciona como un carrusel. Cada cierto tiempo, el bloque completo se desplaza hacia la izquierda y da paso a la visualización del siguiente servicio.

Implementación: `index.html` (`.hero__carousel`), `styles.css` (sección "Carrusel") y `script.js`.

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | El hero muestra una diapositiva a la vez. Cada una contiene titular, descripción, botones "Descubrir más" y "Ver proyectos", y un portátil con su pantalla. |
| RF-02 | El texto y el portátil de una diapositiva se desplazan juntos hacia la izquierda. La siguiente diapositiva entra desde la derecha. |
| RF-03 | El fondo del hero (escena, escritorio y planta) permanece fijo durante el desplazamiento. |
| RF-04 | El carrusel avanza solo cada **6 segundos**. La animación de desplazamiento dura **700 ms**. |
| RF-05 | El carrusel es un bucle continuo. Tras la última diapositiva se vuelve a la primera avanzando en el mismo sentido, sin rebobinar. |
| RF-06 | Hay un indicador de puntos, uno por diapositiva, que marca la activa. Al pulsar un punto se salta a esa diapositiva y se reinicia el temporizador. |
| RF-07 | Hay un botón de pausa junto a los puntos. Alterna entre pausar y reanudar el avance automático, y su ícono refleja el estado actual. |
| RF-08 | El avance automático se detiene mientras el cursor está sobre el hero o hay foco de teclado dentro de él, y también cuando la pestaña no está visible. Al salir se reanuda, salvo que el usuario haya pausado con el botón. |
| RF-09 | Con la preferencia del sistema "reducir movimiento", el carrusel arranca pausado, sin animación de desplazamiento, y el botón de pausa muestra "reanudar". |

## Contenido de las diapositivas

| # | Titular | Pantalla del portátil |
|---|---|---|
| 1 | Tecnología que impulsa tu **negocio** | Logotipo (`logo-mark.png`) |
| 2 | Páginas web que trabajan por **ti** | Ícono de código |
| 3 | Procesos que se automatizan con **IA** | Ícono de chip |
| 4 | Tus herramientas, todas **conectadas** | Ícono de puzzle |

La palabra en negrita de cada titular usa `--accent`. Las diapositivas 2 a 4 corresponden a los tres servicios de la sección "Nuestros servicios". Los textos son provisionales, pendientes de validar con el cliente. El resto de textos está en `index.html`.

## Accesibilidad

| Requisito | Detalle |
|---|---|
| Pausa (WCAG 2.2.2) | El contenido que se mueve solo y dura más de 5 segundos tiene un control de pausa visible (RF-07). |
| Teclado | Los puntos y el botón de pausa son `button`, con foco visible. |
| Lectores de pantalla | Contenedor con `role="region"` y `aria-roledescription="carrusel"`. Cada punto y el botón de pausa tienen `aria-label`. El punto activo lleva `aria-current`. |
| Foco | Las diapositivas inactivas y el clon del bucle usan `inert`, así que sus enlaces no reciben foco ni se leen. |
| Encabezados | Solo la primera diapositiva es `h1`. Las demás son `h2` con el mismo estilo. |
| Contraste | Titular y descripción mantienen los contrastes de la spec 001. |

## Comportamiento responsive

- **Escritorio (más de 1000 px):** la diapositiva ocupa el hero de 385 px de alto. El portátil queda a la derecha del texto y los puntos debajo.
- **Móvil y tablet (1000 px o menos):** el portátil va debajo del texto, a ancho completo y con 300 px de alto. Los puntos y el botón de pausa quedan arriba del titular.

## Puntos abiertos

- **Textos.** Los titulares y descripciones de las diapositivas 2 a 4 son propuestos y no están aprobados.
- **Imágenes.** Las pantallas del portátil usan íconos genéricos, a la espera de capturas o piezas reales de cada servicio.
- **Gestos.** No hay deslizamiento táctil (swipe) ni flechas de navegación. Solo puntos y pausa.
- **Enlaces.** Los cuatro botones "Descubrir más" apuntan a `#servicios`. Podrían enlazar a la sección de cada servicio.
- **Pruebas.** Solo se verificó con capturas el avance de la diapositiva 1 a la 2 y la presencia del botón de pausa. Falta probar el salto de la última a la primera, el clic en pausa y los puntos. No hay pruebas automatizadas.
