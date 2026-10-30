# Especificación 001: Identidad visual

**Estado**: Borrador | **Creada**: 2026-10-30 | **Proyecto**: vianda-tech-front-web

## Fuente

Paleta extraída de `look-and-feel.jpg` (1200×2662 px). Los valores se muestrearon directamente de los píxeles de la imagen, no se estimaron a ojo.

## Paleta de colores

### Color de acento

| Token | Hex | Uso en la referencia |
|---|---|---|
| `--color-primary` | `#74A2FF` | Botón "Search", botón "View all", insignia "50%", botones principales |
| `--color-primary-soft` | `#D3E2FF` | Fondo de la tarjeta destacada, flecha de la categoría activa |

### Neutros oscuros

| Token | Hex | Uso en la referencia |
|---|---|---|
| `--color-black` | `#000103` | Franja de ventajas, texto principal y titulares |
| `--color-surface-dark` | `#0C0B10` | Banner promocional oscuro, parte inferior del hero |
| `--color-surface-dark-alt` | `#15161A` | Variante del fondo oscuro del banner |
| `--color-surface-dark-hover` | `#1D1C21` | Ventaja activa dentro de la franja negra |

### Neutros claros

| Token | Hex | Uso en la referencia |
|---|---|---|
| `--color-white` | `#FFFFFF` | Fondo general, tarjetas, barra de navegación |
| `--color-surface-light` | `#F3F3F3` | Fondo de la sección "Trend vehicles" |
| `--color-surface-footer` | `#F6F6F6` | Barra inferior del footer |
| `--color-tab` | `#DEDEDE` | Pestaña inactiva ("Hourly") |
| `--color-tab-strong` | `#AAAAAA` | Pestaña "Flat Rate" |
| `--color-text-muted` | `#4B4B4B` | Enlaces del footer y texto secundario |

## Reglas de uso

1. El azul es el único color de acento. Se reserva para acciones (botones, flechas activas) y para destacar un elemento.
2. Las secciones alternan fondo blanco, gris claro (`#F3F3F3`) y negro, para marcar el ritmo de la página.
3. Los titulares van en negro `#000103`, nunca en gris.
4. Sobre fondos oscuros, el texto es blanco y el acento sigue siendo `--color-primary`.

## Adaptaciones para Vianda Tech

La paleta de la referencia se aplicó a `styles.css` con dos ajustes por accesibilidad:

1. **Botones:** el texto blanco sobre `#74A2FF` da unos 2.5:1, por debajo de WCAG AA. Los botones usan texto `--color-black` sobre `--color-primary` (unos 8:1).
2. **Azul para texto:** `#74A2FF` es demasiado claro para texto o enlaces sobre blanco. Se añade `--color-primary-text` (`#2F62D9`, 5.4:1) para titulares destacados, enlaces, etiquetas y los íconos de las tarjetas.

| Token adicional | Hex | Uso |
|---|---|---|
| `--color-primary-text` | `#2F62D9` | Azul para texto, enlaces, íconos y borde de hover sobre fondo claro |

En fondos oscuros el texto destacado usa `--color-primary` (`#74A2FF`) directamente.

## Puntos abiertos

- **Logo.** `assets/logo.png` usa azules más intensos (de `#00B4FF` a `#0A1F7A`) que el acento `#74A2FF`. Conviven en la cabecera. Falta decidir si se unifica.
- **Imágenes.** Las miniaturas de proyectos y la escena del hero son degradados provisionales con tonos azul grisáceo ajenos a esta paleta, hasta contar con fotos reales.
- **Estados.** Faltan definir foco y deshabilitado (el hover de botones oscurece un 6 %).
