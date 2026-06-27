# Template Next — Enzo System

Template base para proyectos React con Next.js 15.

## Stack
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind v4
- shadcn/ui + CVA
- Framer Motion
- next-themes (dark/light mode)

## Arrancar proyecto nuevo

1. Copiar esta carpeta con el nombre del proyecto
2. Cambiar `name` en `package.json`
3. `pnpm install`
4. `pnpm dev`

## Estructura

```
app/            → rutas (Next.js file-based routing)
features/       → lógica por dominio — cada feature tiene su propia carpeta
components/ui/  → componentes base (shadcn)
components/shared/ → componentes compuestos reutilizables
hooks/          → hooks globales
lib/utils.ts    → cn() y helpers
lib/tokens/     → tokens en TypeScript (primitivos + semánticos)
styles/tokens.css → CSS custom properties (fuente de verdad)
types/          → tipos globales
```

## Agregar una feature nueva

```
features/
└── nombre-feature/
    ├── components/   → UI de esta feature
    ├── hooks/        → lógica (useNombreFeature.ts)
    ├── services/     → llamadas a API
    ├── types/        → tipos específicos
    └── index.ts      → barrel export
```

## Tokens

Los colores viven en `styles/tokens.css` y se usan via CSS vars:
```tsx
<div className="bg-[var(--color-brand-default)]">...</div>
```

Tipografía, bordes y sombras se agregan cuando estén
definidos en Lyse Design System.
