<!--
  Sin frontmatter `paths:` → carga en CADA sesión, con la misma prioridad
  que CLAUDE.md. Por eso el límite es 80 líneas.
  Todo lo que aplique solo a un subconjunto de archivos va en una regla
  con `paths:` (ver components.md y styles.md).
-->

# Estilo de código

- Un archivo, una responsabilidad. Ningún archivo supera 250 líneas
- Nombres en inglés; comentarios y commits en español
- Ningún `console.log` en código commiteado
- Ningún `any` explícito. Si el tipo no se sabe: `unknown` + narrowing
- Las funciones exportadas llevan tipo de retorno explícito
- Nada de abreviaturas salvo las universales (`id`, `url`, `api`, `ref`)
- Ningún valor mágico: constante con nombre, o token si es visual
- Los imports de la app usan el alias `@/`, no rutas relativas que suban (`../../`)
