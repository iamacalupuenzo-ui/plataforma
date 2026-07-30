<!--
  ≤200 líneas. Se carga completo en CADA sesión.
  Toda línea tiene que ser falsable: poder señalar código que la viola.
  Lo derivable del repo NO va acá: árbol de directorios completo,
  lista de dependencias, overview de arquitectura.
  Estos comentarios se eliminan antes de entrar al contexto. No cuestan tokens.
-->

# <nombre-del-proyecto>

<Una línea: qué es y para quién.> Next.js 15 (App Router) · TypeScript · Tailwind v4.

## Comandos

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Levanta en http://localhost:3000 |
| `pnpm build` | Build de producción |
| `pnpm start` | Sirve el build |
| `pnpm lint` | ESLint (config de Next) |

## Estructura

<!-- Solo lo que NO es obvio por el nombre. `app/` y `hooks/` se explican solos. -->

- `features/<nombre>/` — una feature por carpeta, con sus `components/`, `services/` y `hooks/` adentro
- `components/ui/` — primitivos del sistema (CVA + Radix). Sin lógica de negocio
- `components/shared/` — compuestos que usa más de una feature
- `styles/tokens.css` — **única fuente de verdad** de valores visuales
- `lib/tokens/` — los mismos tokens expuestos a TypeScript

## No-negociables

<!-- Salen de: "¿qué le corregiste a Claude más de una vez?" -->

- Ningún valor literal de color, spacing, radio o sombra en componentes. Todo por token semántico
- **Nunca usar un primitivo** (`--orange-500`, `--neutral-800`) en un componente. Solo semánticos (`--color-brand-default`, `--color-text-primary`)
- Server Component por defecto. `"use client"` requiere un comentario arriba con la razón
- Ningún archivo supera 250 líneas. Si se supera, dividir
- La lógica va en `hooks/`, la presentación en `components/`
- Todo componente interactivo cubre: default, hover, focus-visible, disabled, loading
- Ningún secreto en variables `NEXT_PUBLIC_*`

## Convenciones

- Handlers internos: `handleClick`. Props de callback: `onClick`
- Un componente por archivo; el nombre del archivo es el nombre del componente
- Variantes de componente con CVA, nunca concatenando strings
- Clases condicionales con `cn()` de `lib/utils.ts`
- Imágenes con `next/image`, nunca `<img>`
- Los tipos compartidos van en `types/`, no junto al componente
- Ningún `any` explícito. Si el tipo no se sabe: `unknown` + narrowing
- No se importa cruzado entre features. Si dos las necesitan, va a `components/shared/`

## Operativo

<!-- Lo que hace perder 20 minutos la primera vez. -->

- El package manager es **pnpm**. `npm install` rompe el lockfile
- Tailwind v4 no tiene `tailwind.config.js`: la configuración vive en CSS
- <otras sorpresas del entorno>

## Comunicación

- Respondeme en español
- No expliques el código que escribiste salvo que lo pida
