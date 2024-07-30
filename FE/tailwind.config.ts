import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      backgroundColor: {
        'color': 'rgba(245, 245, 245, 1)',
        'secondary': 'rgba(255, 255, 255, 1)',
        'translucent-black': 'rgba(0, 0, 0, 0.61)',
        'dark-input': 'rgb(61, 77, 96)',
        'dark': 'rgb(26, 34, 44)', // Dark mode background color
        'dark-secondary': 'rgb(36, 48, 63)' // Dark mode secondary color
      },
      fontSize: {
        base: '14px',
      },
      colors: {
        'dark-blue': 'rgba(15, 33, 103, 1)',
        'medium-blue': 'rgba(53, 89, 224, 1)',
        'light-blue': 'rgba(76, 185, 231, 1)',
        'body': 'rgba(245, 245, 245, 1)',
        'text': 'rgba(137, 137, 137, 1)',
        'dark-text': 'rgb(174, 183, 192)', // Dark mode text color
        'dark-text-secondary': 'rgb(174, 183, 192)', // Dark mode text color
        'dark': 'rgb(61, 77, 96)', // Dark mode border color
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

