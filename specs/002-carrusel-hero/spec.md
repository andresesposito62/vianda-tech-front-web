# Especificación 002: Carrusel del hero

**Estado**: Borrador | **Creada**: 2026-10-30 | **Proyecto**: vianda-tech-front-web

## Resumen

La zona principal de la página (titular, descripción, botones y portátil) funciona como un carrusel. Cada cierto tiempo, el bloque completo se desplaza hacia la izquierda y da paso a la visualización del siguiente servicio.

Implementación: `index.html` (`.hero__carousel`), `styles.css` (sección "Carrusel") y `script.js`.

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | El hero muestra una diapositiva a la vez. Cada una contiene titular, descripción, un único botón "Descubrir más" (a `#servicios`) y un portátil con su pantalla. |
| RF-02 | El texto y el portátil de una diapositiva se desplazan juntos hacia la izquierda. La siguiente diapositiva entra desde la derecha. |
| RF-03 | El fondo del hero (escena y escritorio) permanece fijo durante el desplazamiento. |
| RF-04 | El carrusel avanza solo cada **6 segundos**. La animación de desplazamiento dura **700 ms**. |
| RF-05 | El carrusel es un bucle continuo. Tras la última diapositiva se vuelve a la primera avanzando en el mismo sentido, sin rebobinar. |
| RF-06 | En escritorio hay un indicador de puntos, uno por diapositiva, que marca la activa. Al pulsar un punto se salta a esa diapositiva y se reinicia el temporizador. En móvil los puntos son solo un indicador de posición y no se pueden tocar (RF-10). |
| RF-07 | En escritorio hay un botón de pausa junto a los puntos. Alterna entre pausar y reanudar el avance automático, y su ícono refleja el estado actual. En móvil está oculto (RF-10). |
| RF-08 | El avance automático se detiene mientras el cursor está sobre el hero o hay foco de teclado dentro de él, y también cuando la pestaña no está visible. Al salir se reanuda, salvo que el usuario haya pausado con el botón. |
| RF-09 | Con la preferencia del sistema "reducir movimiento", el carrusel arranca pausado, sin animación de desplazamiento, y el botón de pausa muestra "reanudar". |
| RF-10 | En móvil y tablet (1000 px o menos) no hay botones para mover el carrusel (los puntos son solo un indicador). Solo se mueve de dos formas: automáticamente, o cuando el usuario desliza el dedo (swipe) sobre la animación. |
| RF-11 | El swipe es horizontal: la diapositiva sigue al dedo y, al soltar, avanza a la siguiente (deslizar a la izquierda) o vuelve a la anterior (a la derecha) si el arrastre supera el 15 % del ancho. Si es menor, regresa a su sitio. El swipe también funciona en el bucle: hacia atrás desde la primera se llega a la última. |
| RF-12 | Un swipe vertical sigue desplazando la página con normalidad, y un arrastre no activa los botones ni enlaces que haya debajo del dedo. Mientras el dedo está sobre el carrusel, el avance automático se detiene. |
| RF-13 | Tras el primer swipe, el avance automático se detiene y no se reanuda solo (en escritorio táctil, el botón de pausa pasa a "reanudar"). Un simple toque sin arrastre no cuenta como swipe. |
| RF-14 | La descripción de cada diapositiva (el texto bajo el titular) no debe superar **dos renglones** en ninguna pantalla. Si se cambia el texto, hay que comprobar que siga cumpliéndolo, sobre todo en móvil. |
| RF-15 | Jerarquía y legibilidad: el CTA principal ("Descubrir más") es un botón relleno y único (no hay botón secundario). La barra superior lleva un degradado suave de fondo en escritorio para que el menú se lea sobre la foto. |
| RF-16 | Entre 1001 y 1280 px la ilustración ocupa el 50 % del ancho (no el 56 %) para no solaparse con el titular. |
| RF-17 | En escritorio las imágenes de las diapositivas 1 a 6 no llegan al borde superior: arranca bajo la barra de navegación (76 px) con un borde superior nítido, y se difumina únicamente por el borde derecho (a partir del 68 % de su ancho) para no llegar de golpe al límite de la pantalla. El encuadre está centrado en los rostros. En móvil va debajo del texto, sin cambios. |

## Contenido de las diapositivas

| # | Titular | Pantalla del portátil |
|---|---|---|
| 1 | Tecnología que impulsa tu **negocio** | Foto de dos personas con un portátil e íconos flotantes (`assets/hero-1.jpg`), en lugar del portátil |
| 2 | Páginas web que trabajan por **ti** | Foto de un portátil mostrando un sitio web de Vianda Tech sobre un escritorio (`assets/hero-2.jpg`), en lugar del portátil |
| 3 | Software hecho a la **medida** | Foto de una desarrolladora con un portátil e interfaces de código flotantes en una oficina moderna (`assets/hero-3.jpg`, saturación al 72 % para ajustarla a la paleta), en lugar del portátil |
| 4 | Asesoría que cuida tu **inversión** | Foto de dos personas con una interfaz holográfica de código (`assets/hero-4.jpg`, saturación al 72 % para ajustarla a la paleta), en lugar del portátil |
| 5 | Tu negocio, en cada **móvil** | Foto de una mujer usando el móvil con íconos de compra flotantes en una oficina (`assets/hero-5.jpg`, saturación al 62 % para ajustarla a la paleta), en lugar del portátil |
| 6 | Procesos que se automatizan con **IA** | Banner de una ventana de código con un chip de IA y paneles flotantes (`assets/hero-6.jpg`, saturación al 65 % para ajustarlo a la paleta), en lugar del portátil |

La palabra en negrita de cada titular usa `--accent`. La diapositiva 1 es el mensaje de marca y no se asocia a una línea de negocio. Las diapositivas 2 a 6 corresponden, en orden, a las líneas de la spec 005: Sitios Web Profesionales, Software a Medida, Asesoría Tecnológica, Aplicaciones Móviles y Automatización con IA. Cada descripción reutiliza el texto de la tarjeta de la spec 005, abreviado cuando hace falta para respetar RF-14. Los textos son provisionales, pendientes de validar con el cliente. El resto de textos está en `index.html`.

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

- **Escritorio (más de 1000 px):** la diapositiva ocupa el hero de 500 px de alto. El portátil queda a la derecha del texto y los puntos debajo.
- **Móvil y tablet (1000 px o menos):** la ilustración (foto o portátil) va **arriba**, a ancho completo y con 230 px de alto, y el texto va debajo. Todas las diapositivas tienen el mismo alto, y la descripción reserva 3 renglones (66 px) para que el botón "Descubrir más" quede siempre a la misma altura. Los titulares usan tamaño fluido (`clamp(28px, 8vw, 36px)`), la descripción 15 px con interlineado 22 px, y el botón 44 px de alto (objetivo táctil recomendado). Debajo del botón hay puntos que solo indican la diapositiva actual (no se pueden tocar) y el botón de pausa no se muestra (RF-10). Se navega con swipe o esperando el avance automático. La barra superior (logotipo y "Hablemos") tiene un fondo blanco que se difumina hacia abajo hasta ser transparente, sin borde ni sombra, para separarla visualmente del carrusel sin un corte marcado. En escritorio no tiene fondo.

## Puntos abiertos

- **Textos.** Los titulares y descripciones de las diapositivas 2 a 4 son propuestos y no están aprobados.
- **Imágenes.** Las pantallas del portátil usan íconos genéricos, a la espera de capturas o piezas reales de cada servicio.
- **Pausa en móvil.** Sin botón de pausa, el usuario que no hace swipe no puede detener el avance automático, lo que cumple WCAG 2.2.2 solo en parte. Se aceptó por decisión de diseño y se mitiga con RF-13. En móvil, una vez detenido, no hay forma de reanudarlo salvo recargar la página.
- **Navegación.** No hay flechas. En escritorio no se arrastra con el ratón, solo hay puntos y pausa.
- **Enlaces.** Los seis botones "Descubrir más" apuntan a `#servicios`. Podrían enlazar a la sección de cada línea de negocio. Se quitó el botón secundario ("Ver proyectos" y luego "Contáctanos"); el contacto queda en el menú, en "Hablemos" y en la sección final.
- **Pruebas.** Se verificó con capturas el avance de la diapositiva 1 a la 2, la presencia del botón de pausa y que los controles no aparecen a 900 px. El swipe se probó en Chrome de escritorio con eventos táctiles simulados: avanzar, saltar de la última a la primera, retroceder desde la primera y descartar un arrastre corto. Falta probarlo en un dispositivo real, y probar el clic en pausa y los puntos. No hay pruebas automatizadas.
