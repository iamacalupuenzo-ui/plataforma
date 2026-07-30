---
paths:
  - "app/**/*.tsx"
  - "components/**/*.tsx"
  - "features/**/*.tsx"
  - "styles/**/*.css"
  - "app/globals.css"
  - "lib/tokens/**/*.ts"
---

# Estilos y tokens

<!--
  Carga solo al tocar UI o el sistema de tokens.
  Tailwind v4: la config vive en CSS, no hay tailwind.config.js.
-->

## Las dos capas de tokens

El sistema tiene dos capas y **no son intercambiables**:

| Capa | Ejemplo | Dónde se usa |
|---|---|---|
| Primitivos | `--orange-500`, `--neutral-800` | Solo dentro de `styles/tokens.css`, para definir semánticos |
| Semánticos | `--color-brand-default`, `--color-text-primary` | En componentes. **Únicos permitidos** |

**Nunca usar un primitivo en un componente.** El primitivo dice *qué color es*; el
semántico dice *para qué sirve*. Usar el primitivo rompe el theming: cuando cambia la
marca o se agrega dark mode, el componente queda con el valor viejo hardcodeado.

Desde TypeScript, los semánticos se consumen por `lib/tokens/semantic.ts`, no
escribiendo el `var(--…)` a mano.

## Reglas

- Ningún hex, rgb o hsl literal fuera de `styles/tokens.css`
- Ningún valor arbitrario de Tailwind (`p-[13px]`, `text-[#1a1a1a]`) — solo la escala
- Clases condicionales con `cn()`. Nunca template strings concatenados ni ternarios
  anidados de clases
- Las variantes de un componente se declaran con CVA, no con `if` sobre className
- Dark mode con `next-themes` y tokens semánticos. Nunca con lógica de color en JS
- Ninguna clase de Tailwind repetida 3+ veces en un archivo: extraer a variante de CVA

## Agregar un token

1. Si hace falta un valor nuevo, primero el primitivo en `styles/tokens.css`
2. Después el semántico que lo referencia, con nombre por **rol**, no por apariencia
   (`--color-danger-text`, no `--color-red-text`)
3. Después exponerlo en `lib/tokens/semantic.ts`

Un semántico sin primitivo detrás, o un primitivo usado directo en un componente, son
los dos errores que rompen el sistema.
