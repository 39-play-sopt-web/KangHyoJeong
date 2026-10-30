import { color, fontFamily, fontSize } from './tokens';

export const theme = { color, fontFamily, fontSize } as const;

export type AppTheme = typeof theme;
