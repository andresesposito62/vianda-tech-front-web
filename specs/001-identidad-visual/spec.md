# Especificación 001: Identidad visual

**Estado**: Borrador | **Creada**: 2026-10-30 | **Proyecto**: vianda-tech-front-web

## Fuentes

| Referencia | Rol |
|---|---|
| `Landing tecnológica minimalista en azul.png` (1672×941) | **Principal.** Define la paleta del sitio. |
| `look-and-feel.jpg` (1200×2662) | Secundaria. Aporta neutros y la lógica de alternar secciones. |

Todos los valores se muestrearon de los píxeles de las imágenes, no se estimaron a ojo. Donde un valor no se pudo medir directamente, aparece marcado como *derivado*.

## Paleta principal (landing)

### Azules

| Token | Hex | Uso en la landing |
|---|---|---|
| `--primary` | `#034DFC` | Fondo de botones ("Hablemos", "Descubrir más", "Contactar ahora"). Promedio de las tres muestras (`#0869FC`, `#0240FC`, `#003EFC`) |
| `--primary-text` | `#003153` | Palabra "negocio", etiquetas de sección, enlace "Ver más proyectos", íconos de servicios |
| `--primary-on-dark` | `#007BFF` | "al siguiente nivel?" sobre el fondo oscuro del CTA |
| `--primary-soft` | `#DCE9FE` | Círculo detrás de los íconos de servicios |
| `--cta-wedge` | `#073B8E` → `#0D4BA9` | Cuña diagonal del CTA |

### Neutros

| Token | Hex | Uso en la landing |
|---|---|---|
| `--ink` | `#00000E` | Titulares, "Proyectos" activo del footer, cifras |
| `--muted` | `#414A65` | Descripciones, enlaces del footer (`#424D68`), etiquetas de cifras (`#3E4361`) |
| `--dark` | `#0A1322` | Fondo del banner CTA |
| `--hero` | `#F0F5FD` | Fondo del hero, tono azulado muy claro |
| `--panel` | `#F6F7FB` | Fondo de las tarjetas de servicio |
| `--surface` | `#F3F5FA` | Franja de cifras |
| `--line` | `#E3E6EE` | Divisor vertical de la sección de servicios |
| `--line-strong` | `#D1D7E1` | Separadores de la franja de cifras |
| `--white` | `#FFFFFF` | Fondo general y footer |
| `--text-faint` | `#7D849B` | Texto del copyright |

## Colores que diferían y se ajustaron

La primera versión del CSS se había construido con la paleta de `look-and-feel.jpg`, y después con estimaciones. Estos valores se corrigieron al compararlos con la landing:

| Elemento | Antes | Ahora | Motivo |
|---|---|---|---|
| Botones | `#74A2FF` (azul pálido) | `#034DFC` | La landing usa un azul vivo y saturado |
| Texto del botón | negro | blanco | Blanco sobre `#034DFC` da 6.1:1 (cumple WCAG AA) |
| Azul de texto y enlaces | `#2F62D9` | `#003153` | Texto y enlaces en azul oscuro (13.6:1 sobre blanco) |
| Texto destacado sobre oscuro | `#74A2FF` | `#007BFF` | Medido en "al siguiente nivel?" |
| Fondo de íconos | `#D3E2FF` | `#DCE9FE` | Medido en los círculos de servicios |
| Texto principal | `#000103` | `#00000E` | Medido en titulares y cifras |
| Texto secundario | `#4B4B4B` (gris neutro) | `#414A65` (gris azulado) | La landing usa grises con tinte azul |
| Fondo del banner CTA | `#0C0B10` | `#0A1322` | Navy, no negro neutro |
| Tarjetas | `#F6F6F6` | `#F6F7FB` | Gris con tinte azul |
| Franja de cifras | `#F3F3F3` | `#F3F5FA` | Gris con tinte azul |
| Fondo del hero | blanco | `#F0F5FD` | La landing arranca con un azul muy claro |
| Líneas y divisores | `#E4E4E4` y `#DCDCDC` | `#E3E6EE` y `#D1D7E1` | Grises con tinte azul |
| Cuña del CTA | `#2F62D9` → `#74A2FF` | `#073B8E` → `#0D4BA9` | Azul profundo, no claro |

## Reglas de uso

1. El azul vivo (`--primary`) se reserva para acciones: botones y llamadas a la acción.
2. El azul de texto (`--primary-text`) resalta una palabra del titular, etiquetas de sección y enlaces.
3. Los neutros llevan un ligero tinte azul (navy), nunca grises puros. Esto da cohesión con el logo.
4. Fondos claros: blanco, `--hero`, `--panel` y `--surface`. Un único fondo oscuro, `--dark`, para el CTA.
5. Sobre fondo oscuro, el texto es blanco y el destacado usa `--primary-on-dark`.

## Contraste

| Combinación | Ratio | Resultado |
|---|---|---|
| Blanco sobre `--primary` | 6.1:1 | Cumple AA |
| `--primary-text` sobre blanco | 5.5:1 | Cumple AA |
| `--muted` sobre blanco | ~9:1 | Cumple AAA |
| `--primary-on-dark` sobre `--dark` | ~5:1 | Cumple AA |

## Referencia secundaria (look-and-feel)

Muestras de `look-and-feel.jpg`, que no se usan en el sitio salvo como inspiración de ritmo (secciones que alternan blanco, gris claro y negro):

| Hex | Uso en la referencia |
|---|---|
| `#74A2FF` | Botones y insignia "50%" |
| `#D3E2FF` | Tarjeta destacada |
| `#000103`, `#0C0B10` | Franja de ventajas y banner |
| `#F3F3F3`, `#F6F6F6` | Sección "Trend vehicles" y barra del footer |
| `#DEDEDE`, `#AAAAAA` | Pestañas inactivas |
| `#4B4B4B` | Texto secundario |

## Puntos abiertos

- **Estimaciones.** `--muted` y `--ink` salen de los píxeles más oscuros de texto fino, que no siempre alcanza el color real del texto. Conviene validarlos con el diseñador.
- **Texto del CTA.** El párrafo gris-azulado del CTA (`#C5CEE0`) es *derivado*. No se pudo medir con fiabilidad.
- **Imágenes.** Las miniaturas de proyectos y la escena del hero son degradados provisionales, hasta contar con fotos reales.
- **Estados.** Faltan definir foco y deshabilitado. El hover de botones aclara un 15 %.
