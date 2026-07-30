<!--
  Dos mitades con dueños distintos:
    · Foundations (2, 3, 5, 6) → /ds-foundations. Llevan marker.
    · Contrato de construcción (1, 4, 7, 8, 9) → se escribe el DÍA UNO,
      sin necesidad de tener el design system terminado.

  Principio: token, regla y racional en el mismo archivo. El hex sin el
  porqué produce aplicación mecánica; el porqué sin el hex produce
  interpretación libre.
-->

# Design — <nombre-del-proyecto>

## 1. Visual Theme & Atmosphere

**Tono:** <técnico y sobrio / cálido / editorial…>
**Densidad:** <alta o baja, y por qué — cuánto tiempo mira esto el usuario>
**Referencias:** <producto — qué se toma de él, específicamente>
**Antipatrón:** <qué NO puede aparecer nunca>

<!-- El antipatrón acota más que la descripción positiva. No lo dejes vacío. -->

---

<!-- owner: ds-foundations · regenerar con /ds-foundations · no editar a mano -->
## 2. Color Palette & Roles

Definidos en `styles/tokens.css` y expuestos a TS en `lib/tokens/semantic.ts`.

**Dos capas, no intercambiables.** Los primitivos (`--orange-500`, `--neutral-900`)
solo existen para definir semánticos. **En componentes, solo semánticos.**

| Token semántico | Rol |
|---|---|
| `--color-brand-default` · `-hover` · `-active` | Acción primaria y sus estados |
| `--color-brand-subtle` · `-emphasis` | Fondo de marca suave / énfasis fuerte |
| `--color-text-primary` · `-secondary` · `-tertiary` | Jerarquía de texto |
| `--color-text-disabled` · `-inverse` · `-on-brand` | Texto en contexto especial |
| `--color-bg-default` · `-subtle` · `-surface` · `-elevated` | Superficies por elevación |
| `--color-border-default` · `-strong` · `-focus` | Bordes y anillo de foco |
| `--color-{success,error,warning,info}-{bg,text,border}` | Estados de sistema |

**Regla:** ningún hex literal fuera de `styles/tokens.css`. Ningún primitivo en un
componente.

<!-- Verificar contraste ≥4.5:1 en texto normal cuando se cierren los valores. -->

---

<!-- owner: ds-foundations · PENDIENTE — la escala tipográfica no está definida todavía -->
## 3. Typography Rules

<!--
  styles/tokens.css declara: "Solo colores por ahora. Tipografía, bordes y
  sombras se agregan cuando estén definidos en Lyse."
  Hasta entonces valen estos valores de arranque.
-->

| Token | Tamaño / LH | Peso | Uso |
|---|---|---|---|
| `--text-xs` | 12 / 16 | 500 | Labels, metadata |
| `--text-sm` | 14 / 20 | 400 | Cuerpo por defecto |
| `--text-base` | 16 / 24 | 400 | Cuerpo largo |
| `--text-lg` | 20 / 28 | 600 | Títulos de sección |
| `--text-xl` | 28 / 36 | 600 | Título de página |

**Regla:** máximo 3 tamaños por pantalla. Más que eso es falta de jerarquía, no jerarquía.

---

## 4. Component Stylings

<!-- La sección más importante para un agente. No es "cómo se ve un botón":
     es qué tiene que existir para que un componente esté TERMINADO. -->

### Anatomía obligatoria

1. **Estados** — default, hover, focus-visible, active, disabled, loading
2. **Estado vacío** — toda lista o contenedor de datos
3. **Estado de error** — todo componente que hace fetch o recibe input
4. **Variantes** — declaradas con CVA, no implícitas por props booleanas sueltas
5. **Tamaños** — sm / md / lg, o justificar por qué solo hay uno
6. **Foco visible** — `--color-border-focus`. Nunca `outline: none` sin reemplazo

### Por componente

**Button**
- Variantes: `primary` | `secondary` | `ghost` | `danger`
- `primary` usa `--color-bg-brand` + `--color-text-on-brand`; hover a `--color-brand-hover`
- `loading` reemplaza el label por spinner y **mantiene el ancho** — nunca colapsa
- `disabled` usa `--color-text-disabled` y quita el pointer

**Input**
- Fondo `--color-bg-subtle`, borde `--color-border-default`
- Focus: borde `--color-border-focus`
- Error: borde y texto de ayuda en `--color-error-text`, con `aria-describedby`
- El label es un `<label>` real. `placeholder` no es label

<Agregar los componentes propios del proyecto acá.>

---

<!-- owner: ds-foundations · VALORES DE ARRANQUE — la escala no está en tokens.css todavía -->
## 5. Layout Principles

**Escala de espaciado (base 4):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
**Regla:** ningún valor fuera de la escala. Si hace falta 13px, el diseño está mal.

**Ritmo vertical:** el espacio entre secciones es siempre ≥2 pasos mayor que el espacio
interno de la sección. Es lo que produce agrupación visual.

---

<!-- owner: ds-foundations · VALORES DE ARRANQUE — pendiente de Lyse -->
## 6. Depth & Elevation

Las superficies ya están tokenizadas por nivel: `--color-bg-default` → `-subtle` →
`-surface` → `-elevated`. Las sombras todavía no.

| Nivel | Superficie | Sombra (arranque) |
|---|---|---|
| Base | `--color-bg-default` | none |
| Card | `--color-bg-surface` | `0 1px 2px rgb(0 0 0 / .08)` |
| Dropdown | `--color-bg-elevated` | `0 4px 12px rgb(0 0 0 / .12)` |
| Modal | `--color-bg-elevated` | `0 16px 32px rgb(0 0 0 / .16)` |

**Regla:** la elevación comunica jerarquía de interacción, no decoración. Un card que no
es clickeable no necesita sombra.

---

## 7. Do's and Don'ts

| ✅ Hacer | ❌ No hacer |
|---|---|
| Tokens semánticos en componentes | Primitivos (`--orange-500`) fuera de tokens.css |
| Variantes con CVA | Ternarios anidados de className |
| Un color de acento por pantalla | Varios colores compitiendo por atención |
| Estados vacíos con acción sugerida | Estados vacíos que solo dicen "sin datos" |
| Loading que preserva el layout | Spinners que colapsan el contenedor |
| Errores junto al campo que falló | Un banner genérico arriba de todo |
| Jerarquía por tamaño y peso | Jerarquía por color solamente |
| Radix para primitivos interactivos | Reimplementar foco y teclado a mano |

---

## 8. Responsive Behavior

**Breakpoints:** los de Tailwind — 640 (sm) · 768 (md) · 1024 (lg) · 1280 (xl)
**Estrategia:** mobile-first. Los estilos base son mobile; los modificadores suben.

- Touch targets mínimo 44×44px en viewports táctiles
- Las tablas colapsan a cards abajo de 768, nunca scroll horizontal
- Los modales pasan a bottom sheet en mobile
- Ningún texto abajo de 14px en mobile

---

## 9. Agent Prompt Guide

### Antes de construir un componente
> Leé DESIGN.md §4 y §7. Enumerá los 6 puntos de anatomía para este componente antes de
> escribir código. Si alguno no aplica, decí por qué.

### Antes de construir una pantalla
> Leé DESIGN.md §1, §5 y §8. Declará el breakpoint de diseño y qué pasa en los otros tres
> antes de maquetar.

### Al revisar un componente existente
> Contrastá contra §4. Reportá qué punto de anatomía falta. No propongas rediseños — solo
> lo que está incompleto.

### Al agregar un token
> Primitivo en `styles/tokens.css` → semántico que lo referencia, nombrado por rol →
> exponerlo en `lib/tokens/semantic.ts`. Nunca saltear un paso.
