---
paths:
  - "app/**/*.tsx"
  - "components/**/*.tsx"
  - "features/**/*.tsx"
---

# Componentes

<!--
  Carga solo al tocar un .tsx de esas carpetas. Por eso puede ser más
  larga que CLAUDE.md sin costar contexto en sesiones que no tocan UI.
-->

## Ubicación

- `components/ui/` — primitivos del sistema. Sin lógica de negocio, sin fetch, sin
  estado de dominio. Un `Button` no sabe qué hace el botón
- `components/shared/` — compuestos que usa más de una feature
- `features/<nombre>/components/` — todo lo que solo usa esa feature

**No se importa cruzado entre features.** Si `features/a` necesita algo de
`features/b`, eso va a `components/shared/`. La excepción no existe: es la regla que
mantiene las features desacopladas.

## Server / Client

- Server Component por defecto
- `"use client"` requiere un comentario inmediatamente arriba con la razón concreta:
  estado, evento del usuario, o API del browser
- Nada de `useEffect` para fetching. Los datos se cargan en Server Components o
  Server Actions
- Un Client Component no importa un Server Component; lo recibe por `children`

## Anatomía obligatoria

Ningún componente está terminado sin esto:

1. Estados: default, hover, focus-visible, active, disabled, loading
2. Estado vacío en toda lista o contenedor de datos
3. Estado de error en todo componente que hace fetch o recibe input
4. Variantes declaradas explícitamente con CVA
5. Foco visible. Nunca `outline: none` sin reemplazo equivalente

`loading` mantiene las dimensiones del componente — nunca colapsa el layout.

## Implementación

- Un componente por archivo. El nombre del archivo es el nombre del componente
- Props tipadas con `interface`, no con `type`
- Variantes con CVA; clases condicionales con `cn()` de `lib/utils.ts`
- Handlers internos: `handleX`. Props de callback: `onX`
- Las keys de listas son IDs estables, nunca el índice del array
- Imágenes con `next/image`
- Composición sobre props booleanas: 4+ flags booleanas es señal de que faltan variantes
- Ningún archivo supera 250 líneas

## Accesibilidad

- Todo `<img>` con `alt`. Decorativas con `alt=""`
- Todo input con `<label>` asociado. `placeholder` no es label
- Ningún handler de click en un `<div>`: usar `<button>`
- Los primitivos interactivos usan Radix cuando existe el equivalente — trae el
  manejo de foco y teclado resuelto
