import '@emotion/react';

import type { AppTheme } from '@/shared/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
