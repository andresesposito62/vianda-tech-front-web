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
| RF-06 | En escritorio hay un indicador de puntos, uno por diapositiva, que marca la activa. Al pulsar un punto se salta a esa diapositiva y se reinicia el temporizador. En móvil los puntos están ocultos (RF-10). |
| RF-07 | En escritorio hay un botón de pausa junto a los puntos. Alterna entre pausar y reanudar el avance automático, y su ícono refleja el estado actual. En móvil está oculto (RF-10). |
| RF-08 | El avance automático se detiene mientras el cursor está sobre el hero o hay foco de teclado dentro de él, y también cuando la pestaña no está visible. Al salir se reanuda, salvo que el usuario haya pausado con el botón. |
| RF-09 | Con la preferencia del sistema "reducir movimiento", el carrusel arranca pausado, sin animación de desplazamiento, y el botón de pausa muestra "reanudar". |
| RF-10 | En móvil y tablet (1000 px o menos) no hay botones para mover el carrusel. Solo se mueve de dos formas: automáticamente, o cuando el usuario desliza el dedo (swipe) sobre la animación. |
| RF-11 | El swipe es horizontal: la diapositiva sigue al dedo y, al soltar, avanza a la siguiente (deslizar a la izquierda) o vuelve a la anterior (a la derecha) si el arrastre supera el 15 % del ancho. Si es menor, regresa a su sitio. El swipe también funciona en el bucle: hacia atrás desde la primera se llega a la última. |
| RF-12 | Un swipe vertical sigue desplazando la página con normalidad, y un arrastre no activa los botones ni enlaces que haya debajo del dedo. Mientras el dedo está sobre el carrusel, el avance automático se detiene. |
| RF-13 | Tras el primer swipe, el avance automático se detiene y no se reanuda solo (en escritorio táctil, el botón de pausa pasa a "reanudar"). Un simple toque sin arrastre no cuenta como swipe. |

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
| Pausa (WCAG 2.2.2) | El contenido que se mueve solo y dura más de 5 segundos tiene un control de pausa visible (RF-07). En móvil no hay botón (RF-10), pero RF-13 detiene el avance automático tras el primer swipe. Hasta que el usuario hace swipe, el carrusel se mueve sin poder pausarlo. |
| Teclado | Los puntos y el botón de pausa son `button`, con foco visible. |
| Lectores de pantalla | Contenedor con `role="region"` y `aria-roledescription="carrusel"`. Cada punto y el botón de pausa tienen `aria-label`. El punto activo lleva `aria-current`. |
| Foco | Las diapositivas inactivas y el clon del bucle usan `inert`, así que sus enlaces no reciben foco ni se leen. |
| Encabezados | Solo la primera diapositiva es `h1`. Las demás son `h2` con el mismo estilo. |
| Contraste | Titular y descripción mantienen los contrastes de la spec 001. |

## Comportamiento responsive

- **Escritorio (más de 1000 px):** la diapositiva ocupa el hero de 385 px de alto. El portátil queda a la derecha del texto y los puntos debajo.
- **Móvil y tablet (1000 px o menos):** el portátil va debajo del texto, a ancho completo y con 300 px de alto. Los puntos y el botón de pausa no se muestran (RF-10). Se navega con swipe o esperando el avance automático. La barra superior (logotipo y "Hablemos") es una banda propia con fondo blanco translúcido, desenfoque, borde fino y sombra suave, para separarla visualmente del carrusel. En escritorio no tiene fondo.

## Puntos abiertos

- **Textos.** Los titulares y descripciones de las diapositivas 2 a 4 son propuestos y no están aprobados.
- **Imágenes.** Las pantallas del portátil usan íconos genéricos, a la espera de capturas o piezas reales de cada servicio.
- **Pausa en móvil.** Sin botón de pausa, el usuario que no hace swipe no puede detener el avance automático, lo que cumple WCAG 2.2.2 solo en parte. Se aceptó por decisión de diseño y se mitiga con RF-13. En móvil, una vez detenido, no hay forma de reanudarlo salvo recargar la página.
- **Navegación.** No hay flechas. En escritorio no se arrastra con el ratón, solo hay puntos y pausa.
- **Enlaces.** Los cuatro botones "Descubrir más" apuntan a `#servicios`. Podrían enlazar a la sección de cada servicio.
- **Pruebas.** Se verificó con capturas el avance de la diapositiva 1 a la 2, la presencia del botón de pausa y que los controles no aparecen a 900 px. El swipe se probó en Chrome de escritorio con eventos táctiles simulados: avanzar, saltar de la última a la primera, retroceder desde la primera y descartar un arrastre corto. Falta probarlo en un dispositivo real, y probar el clic en pausa y los puntos. No hay pruebas automatizadas.
