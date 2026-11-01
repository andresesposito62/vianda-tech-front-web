# Especificación 003: Menú hamburguesa móvil

**Estado**: Borrador | **Creada**: 2026-10-31 | **Proyecto**: vianda-tech-front-web

## Resumen

En móvil y tablet (1000 px o menos) la navegación principal se muestra en un menú hamburguesa que abre un cajón lateral. La fila de enlaces del pie de página (Servicios, Quiénes somos, Blog, Contacto) deja de mostrarse en esas pantallas, porque el menú la reemplaza. En escritorio no cambia nada.

Implementación: `index.html` (`.burger`, `#menu`), `styles.css` (secciones "Menú hamburguesa" y "Responsive") y `script.js` (bloque "Menú hamburguesa").

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | En 1000 px o menos, la barra superior muestra el logotipo y, a la derecha, un botón de hamburguesa (tres rayas). En escritorio el botón está oculto. |
| RF-02 | Al pulsar el botón se abre un **cajón lateral** que entra desde la derecha (86 % del ancho, máximo 360 px) y ocupa todo el alto de la pantalla, con un fondo oscuro detrás. Contiene: Servicios (con las cinco líneas de negocio de la spec 005 debajo, siempre visibles), Quiénes somos, Blog y Contacto, y al pie un botón "Contáctanos" a ancho completo, el teléfono y el correo. |
| RF-03 | El cajón se cierra al elegir un enlace, al tocar el fondo oscuro, al pulsar el botón de nuevo y con la tecla Escape (que devuelve el foco al botón). Mientras está abierto, la página de fondo no se desplaza. |
| RF-04 | Con el cajón abierto, las tres rayas se convierten en una X. |
| RF-05 | "Servicios" es un enlace a `#servicios` y las cinco líneas aparecen como sublista con tipografía menor, sin acordeón ni flecha. |
| RF-06 | En 1000 px o menos, la fila de enlaces del pie de página no se muestra. El pie conserva logotipo, redes sociales y aviso de derechos. |
| RF-07 | ~~El enlace "Blog" (`#blog`) sigue llevando al final de la página en móvil.~~ Sustituido por RF-12: el enlace "Blog" está oculto. |
| RF-08 | En 1000 px o menos, el botón "Contáctanos" deja la barra superior y pasa a ser un **botón flotante** circular fijo abajo a la derecha (16 px de margen más el área segura del dispositivo), de 56 px, con sombra, que muestra solo el ícono de WhatsApp (blanco sobre el azul oscuro `--primary-text` `#003153` de la paleta, el mismo de los botones principales, contraste 13,6:1) y lleva `aria-label="Contáctanos por WhatsApp"`, que abre WhatsApp con el número +57 322 306 4409 y un mensaje precargado (se abre en pestaña nueva). Se oculta con el menú abierto y mientras la sección de contacto está en pantalla, porque sería redundante. El pie de página deja espacio inferior para que el botón no tape su contenido. En escritorio sigue en la barra superior, con el mismo destino. El botón "Contáctanos" del cajón del menú abre también WhatsApp. La página declara `viewport-fit=cover` para que el margen del área segura funcione en iPhone con muesca.  Todo enlace de WhatsApp del sitio va al número oficial +57 322 306 4409 (constitución). |
| RF-09 | El enlace «Contacto» del menú (escritorio y cajón móvil) y del pie de página de todas las páginas abre WhatsApp al número oficial (constitución) en una pestaña nueva, con el mensaje «Hola, deseo contactar contigo» ya escrito (`https://wa.me/573223064409?text=Hola%2C%20deseo%20contactar%20contigo`). Ya no baja al bloque de contacto de la página. |
| RF-10 | Los íconos de contacto del pie de página (bloque `.footer__social`, ya sin el ancla `#blog`) son, en este orden, **WhatsApp** (al número oficial, pestaña nueva, mensaje «Hola, deseo contactar contigo»), **Correo** (`mailto:contacto@viandatech.com`, que abre el programa de correo predeterminado del usuario con asunto «Hola Vianda Tech!» y mensaje «Hola, deseo contactar contigo» ya escritos) e **Instagram**. Sustituyen a LinkedIn, YouTube y X. Todo correo del sitio es contacto@viandatech.com (constitución). El enlace de Instagram apunta a `#` hasta tener la URL del perfil de Vianda Tech. |
| RF-11 | Encima del aviso de derechos, el pie de página de todas las páginas muestra «Llámanos: **+57 322 306 4409**» como enlace 	el:+573223064409, para llamadas de voz (número oficial, constitución). En escritorio va alineado a la derecha; en 1000 px o menos va centrado, en 16 px y con 44 px de alto táctil. |
| RF-12 | **Blog oculto (2026-11-01).** La sección Blog se implementará después, así que se quitaron todas sus referencias visibles: el enlace «Blog» del menú de escritorio, del cajón móvil y del pie de página, y el ancla `id="blog"` que estaba en los íconos de contacto del pie. En el HTML de las siete páginas los enlaces quedan **comentados** (`<!-- Blog oculto … -->`) para restaurarlos al implementar la sección: hay que descomentarlos, apuntarlos a la página o sección real y crear su spec. Pendiente: añadir la página al `sitemap.xml` y a los datos estructurados cuando exista (spec 004, RF-12). |

## Accesibilidad

| Requisito | Detalle |
|---|---|
| Teclado | El botón es un `button` nativo. Al abrir, el foco pasa al primer enlace; Escape cierra y devuelve el foco al botón. Con el cajón cerrado, sus enlaces son `inert` (no reciben foco ni se leen) en móvil. |
| Lectores de pantalla | El botón tiene `aria-label` ("Abrir menú" / "Cerrar menú"), `aria-expanded` y `aria-controls="menu"`. |
| Objetivo táctil | El botón mide 44 × 44 px; los enlaces principales del cajón, 52 px de alto, y los de las líneas de negocio, 44 px. |
| Contraste | Los enlaces usan los colores de la spec 001. |

## Puntos abiertos


- **Foco.** El foco no queda atrapado dentro del cajón mientras está abierto; el fondo oscuro lo tapa al ratón y al tacto, pero con teclado se puede salir con Tab.
- **Pruebas.** No se ha verificado en navegador ni en dispositivo real. No hay pruebas automatizadas.
