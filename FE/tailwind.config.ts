import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'color': 'rgba(245, 245, 245, 1)',
        'secondary': 'rgba(255, 255, 255, 1)'
      },
      fontSize: {
        base: '14px',
      },
      colors: {
        'dark-blue': 'rgba(15, 33, 103, 1)',
        'medium-blue': 'rgba(53, 89, 224, 1)',
        'light-blue': 'rgba(76, 185, 231, 1)',
      },
      borderColor: {
        'border-color': 'rgba(217, 217, 217, 1)',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
