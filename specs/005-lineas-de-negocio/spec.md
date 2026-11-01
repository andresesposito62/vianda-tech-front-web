# Especificación 005: Líneas de negocio

**Estado**: Borrador | **Creada**: 2026-10-31 | **Proyecto**: vianda-tech-front-web

## Resumen

Vianda Tech organiza su oferta en cinco líneas de negocio. Se presentan como tarjetas en la sección "Soluciones digitales para empresas" (`#servicios`, bajo el rótulo "Nuestros servicios"), apiladas en una sola columna vertical, en escritorio y en móvil. Esta spec es la fuente de verdad de los nombres y textos de las líneas: cualquier otra sección (carrusel, SEO, menú) debe ser coherente con ella.

Implementación: `index.html` (`ul.services`, íconos SVG animados en línea), `styles.css` (`.services`, `.card` y bloque "Tarjetas de servicios: animaciones") y `script.js` (bloque "Tarjetas de servicios").

## Líneas de negocio

| # | Línea | Texto de la tarjeta | Ícono |
|---|---|---|---|
| 1 | Software a Medida | Creamos soluciones digitales para hacer más fácil cada tarea de tu negocio. | `i-terminal` |
| 2 | Asesoría Tecnológica | Te ayudamos a tomar mejores decisiones tecnológicas para aprovechar al máximo tu inversión. | `i-chat` |
| 3 | Sitios Web Profesionales | Diseñamos páginas web que resaltan lo mejor de tu negocio y te ayudan a atraer nuevos clientes. | `i-code` |
| 4 | Aplicaciones Móviles | Creamos experiencias digitales para que tus clientes puedan acceder a tu negocio desde cualquier lugar. | `i-phone` |
| 5 | Automatización con IA | Hacemos que la inteligencia artificial trabaje para tu negocio, simplificando tareas y mejorando la atención al cliente. | `i-cpu` |

## Requerimientos funcionales

| ID | Requerimiento |
|---|---|
| RF-01 | La sección muestra las cinco líneas, en el orden de la tabla, con ícono, título, texto y flecha. |
| RF-02 | En escritorio las tarjetas forman una lista vertical de una columna, a todo el ancho de la columna derecha de la sección, con 12 px entre ellas. Cada tarjeta es horizontal: ícono de 60 px a la izquierda, título (17 px) y texto (14 px) en el centro, y flecha a la derecha. Su alto depende del texto (hasta dos renglones) y no hay huecos vacíos.
| RF-03 | En móvil y tablet (1000 px o menos) la lista es igual pero más compacta: ícono de 44 px y texto de 16 y 14 px. |
| RF-04 | Los textos de las tarjetas pueden ocupar hasta cuatro renglones en escritorio. No se aplica el límite de dos renglones de la spec 002 (RF-14), que es solo para el carrusel. |
| RF-05 | Cada línea tiene un ícono propio, de trazo de 2 px y sin rellenos, para que se vea nítido a 26 px (spec 001). |
| RF-06 | Los nombres de las líneas se usan tal cual en el menú, el SEO y el carrusel cuando se haga referencia a ellas. |
| RF-07 | **Entrada.** La primera vez que la sección entra en pantalla, las cards suben en cascada (110 ms entre una y otra, 0,8 s cada una, con un leve rebote y un giro alterno de ±1,5°). Sin JavaScript las cards se ven normales. |
| RF-08 | **Íconos vivos.** Cada línea tiene un ícono con animación propia en bucle: Software a Medida, el cursor `_` parpadea; Asesoría Tecnológica, la burbuja "escribe" con tres puntos; Sitios Web Profesionales, los paréntesis `< >` se abren y cierran; Aplicaciones Móviles, el teléfono vibra como una notificación; Automatización con IA, la estrella de IA gira y brilla. Además, un anillo de pulso sale de cada círculo. |
| RF-09 | **Panel holográfico.** Al pasar el cursor (o al tocar, en pantallas táctiles) la card se convierte en un panel de vidrio azul oscuro con texto claro, su borde pasa a ser un arco eléctrico azul que vibra (filtro SVG de ruido, cambia unas 12 veces por segundo solo mientras hay una card activa) con resplandor, y un destello diagonal la cruza una vez. El ícono se ilumina con un brillo neón. Inspirado en el pin de referencia del cliente (panel holográfico con borde de arco eléctrico). |
| RF-10 | **Inclinación 3D.** Con ratón, la card se inclina hasta 4° (vertical) y 3° (horizontal) hacia el cursor con perspectiva y una luz azul radial sigue al puntero. No se aplica en pantallas táctiles. |
| RF-11 | Con la preferencia "reducir movimiento" no hay entrada, ni íconos animados, ni arco ni destello: las cards se ven siempre completas y el cambio de color al pasar el cursor se conserva. |

## Relación con otras secciones

- **Carrusel (spec 002).** Seis diapositivas: la 1 es el mensaje de marca (sin línea asociada) y las 2 a 6 siguen el orden de la tabla, con Sitios Web Profesionales primero. Cada una usa el ícono de su tarjeta.
- **SEO (spec 004).** Las palabras clave "desarrollo de software" y "páginas web" corresponden a las líneas 1 y 3. "Páginas para tu negocio" y "innovación" no aparecen en las tarjetas, pero sí en la descripción de la página.
- **Enlaces.** Las cinco tarjetas apuntan a `#`, pendientes de tener una página o sección por línea (spec 004, RF-12).

## Puntos abiertos

- **Integraciones.** ✅ Resuelto: no es una línea de negocio y no se ofrece como servicio independiente. Consecuencias resueltas: la diapositiva sobre integraciones se reemplazó, el submenú "Servicios" del menú de escritorio lista las seis líneas y se eliminó el ícono `i-puzzle`.
- **Carrusel.** ✅ Resuelto: las diapositivas coinciden con las líneas de negocio.
- **Renovación de Sistemas.** ✅ Eliminada como línea de negocio el 2026-10-31: se quitaron su tarjeta, su entrada del submenú, la diapositiva 7 del carrusel y el ícono `i-refresh`.
- **Páginas por línea.** Cada línea merece su propia página con `h1`, `title` y `description` para SEO.
- **Íconos del carrusel.** ✅ Resuelto: usan los mismos que las tarjetas. `i-puzzle` ya no se usa en ningún lado y se puede eliminar.
- **Textos.** Aprobados por el cliente el 2026-10-31 en la conversación de diseño; no hay versión validada con terceros.
