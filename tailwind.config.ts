import type { Config } from 'tailwindcss';
import theme from './config/theme';
import { createWithEqualityFn } from 'zustand/traditional';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: theme.colors,
      boxShadow: theme.boxShadow,
      fontSize: theme.fontSize,
      height: {
        content: 'calc(100% - 65px)',
      },
      backdropBlur: {
        dialog: 'blur(1px)',
      },
    },
  },
  plugins: [],
};
export default config;
