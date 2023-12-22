import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"
import { amber } from '@mui/material/colors'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {},
  },
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          foreground: '#dddddd',
          background: '#111111',
          primary: amber[500],
          secondary: '#76e',
          content1: '#101',
        }
      },
      light: {
        colors: {
          foreground: '#111111',
          background: '#dddddd',
          primary: amber[900],
          secondary: '#76e',
          content1: '#fff',
        }
      }
    }
  })],
}
export default config
