# Especificación 003: Menú hamburguesa móvil

**Estado**: Borrador | **Creada**: 2026-10-31 | **Proyecto**: vianda-tech-front-web

## Resumen

En móvil y tablet (1000 px o menos) la navegación principal se muestra en un menú hamburguesa en la barra superior. La fila de enlaces del pie de página (Servicios, Nosotros, Blog, Contacto) deja de mostrarse en esas pantallas, porque el menú la reemplaza. En escritorio no cambia nada.

Implementación: `index.html` (`.burger`, `#menu`), `styles.css` (secciones "Menú hamburguesa" y "Responsive") y `script.js` (bloque "Menú hamburguesa").

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | En 1000 px o menos, la barra superior muestra un botón de hamburguesa (tres rayas) a la derecha del botón "Hablemos". En escritorio el botón está oculto. |
| RF-02 | Al pulsar el botón se abre un panel desplegable bajo la barra, con los enlaces Servicios, Nosotros, Blog y Contacto. Al pulsarlo de nuevo se cierra. |
| RF-03 | El panel se cierra al elegir un enlace y al pulsar la tecla Escape. |
| RF-04 | Con el panel abierto, las tres rayas se convierten en una X. |
| RF-05 | En el menú móvil, "Servicios" es un enlace simple a `#servicios`. No muestra la flecha ni el submenú de escritorio (las seis líneas de negocio de la spec 005). |
| RF-06 | En 1000 px o menos, la fila de enlaces del pie de página no se muestra. El pie conserva logotipo, redes sociales y aviso de derechos. |
| RF-07 | El enlace "Blog" (`#blog`) sigue llevando al final de la página en móvil. Su ancla está en el bloque de redes sociales del pie y no en el enlace del pie. |

## Accesibilidad

| Requisito | Detalle |
|---|---|
| Teclado | El botón es un `button` nativo; Escape cierra el panel. |
| Lectores de pantalla | El botón tiene `aria-label` ("Abrir menú" / "Cerrar menú"), `aria-expanded` y `aria-controls="menu"`. |
| Objetivo táctil | El botón mide 44 × 44 px y cada enlace del panel tiene unos 46 px de alto. |
| Contraste | Los enlaces usan los colores de la spec 001. |

## Puntos abiertos

- **Submenú de servicios.** En móvil se omite. Podría añadirse como lista anidada si se quiere enlazar cada servicio por separado.
- **Cierre al tocar fuera.** El panel no se cierra al tocar fuera de él, solo con el botón, un enlace o Escape.
- **Foco.** Al abrir el panel el foco no se mueve a él ni se atrapa dentro.
- **Pruebas.** No se ha verificado en navegador ni en dispositivo real. No hay pruebas automatizadas.
