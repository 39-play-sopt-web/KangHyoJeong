export const theme = {
  colors: {
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
    input: 'var(--color-input)',
    foreground: 'var(--color-foreground)',
    foregroundMuted: 'var(--color-foreground-muted)',
    border: 'var(--color-border)',
    primary: 'var(--color-primary)',
    primaryDark: 'var(--color-primary-dark)',
    onPrimary: 'var(--color-on-primary)',
    danger: 'var(--color-danger)',
  },
  gradients: {
    primary: 'var(--gradient-primary)',
  },
} as const;

export type AppTheme = typeof theme;
