import { color, fontFamily, fontSize } from '@/styles/tokens.ts';

export const theme = { color, fontFamily, fontSize } as const;

export type AppTheme = typeof theme;
