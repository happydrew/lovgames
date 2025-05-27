import { yellow } from '@mui/material/colors'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx'
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        'bg-dark': '#121212',
        'section-dark': '#1E1E1E',
        primary: '#3A9FF3',
        secondary: '#FFAA00',
        accent: '#FF4365',
        'text-light': '#FFFFFF',
        'text-muted': '#CCCCCC',
      },
      fontFamily: {
        logo: ['"Press Start 2P"', 'sans-serif'],
        header: ['"Russo One"', 'sans-serif'],
        body: ['"Kanit"', 'sans-serif']
      }
    }
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: '"Press Start 2P"',
            fontDisplay: 'swap',
          },
          {
            fontFamily: '"Russo One"',
            fontDisplay: 'swap',
          },
          {
            fontFamily: '"Kanit"',
            fontDisplay: 'swap',
          }
        ],
      });
    },
  ],
  darkMode: 'class'
} satisfies Config
