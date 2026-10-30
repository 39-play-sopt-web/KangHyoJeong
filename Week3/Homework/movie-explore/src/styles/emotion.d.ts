import '@emotion/react';
import type { AppTheme } from '@/styles/theme.ts';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends AppTheme {}
}
