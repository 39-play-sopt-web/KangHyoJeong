import type { Config } from 'tailwindcss';
import { color, fontFamily, fontSize } from './src/styles/tokens.ts';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: color,
      fontFamily: { sans: [fontFamily] },
      fontSize: Object.fromEntries(
        Object.entries(fontSize).map(([key, { size, weight }]) => [
          key,
          [size, { lineHeight: 'normal', fontWeight: String(weight) }],
        ]),
      ),
    },
  },
  plugins: [],
} satisfies Config;
