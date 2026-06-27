export const semanticColors = {
  brand: {
    default:  'var(--color-brand-default)',
    hover:    'var(--color-brand-hover)',
    active:   'var(--color-brand-active)',
    subtle:   'var(--color-brand-subtle)',
    emphasis: 'var(--color-brand-emphasis)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary:  'var(--color-text-tertiary)',
    disabled:  'var(--color-text-disabled)',
    inverse:   'var(--color-text-inverse)',
    brand:     'var(--color-text-brand)',
    onBrand:   'var(--color-text-on-brand)',
  },
  bg: {
    default:     'var(--color-bg-default)',
    subtle:      'var(--color-bg-subtle)',
    surface:     'var(--color-bg-surface)',
    elevated:    'var(--color-bg-elevated)',
    overlay:     'var(--color-bg-overlay)',
    brand:       'var(--color-bg-brand)',
    brandSubtle: 'var(--color-bg-brand-subtle)',
  },
  border: {
    default: 'var(--color-border-default)',
    strong:  'var(--color-border-strong)',
    brand:   'var(--color-border-brand)',
    focus:   'var(--color-border-focus)',
  },
  status: {
    success: {
      bg:     'var(--color-success-bg)',
      text:   'var(--color-success-text)',
      border: 'var(--color-success-border)',
    },
    error: {
      bg:     'var(--color-error-bg)',
      text:   'var(--color-error-text)',
      border: 'var(--color-error-border)',
    },
    warning: {
      bg:     'var(--color-warning-bg)',
      text:   'var(--color-warning-text)',
      border: 'var(--color-warning-border)',
    },
    info: {
      bg:     'var(--color-info-bg)',
      text:   'var(--color-info-text)',
      border: 'var(--color-info-border)',
    },
  },
} as const
