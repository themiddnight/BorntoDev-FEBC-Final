import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"
import { amber, blue, purple } from '@mui/material/colors'

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
          foreground: '#ddd',
          background: '#111',
          primary: amber[500],
          secondary: blue[500],
          content1: '#101',
          content2: amber[300],
          content3: purple[300],
        }
      },
      light: {
        colors: {
          foreground: '#111',
          background: '#fff',
          primary: purple[500],
          secondary: blue[700],
          content1: '#fff',
          content2: purple[700],
          content3: amber[900],
        }
      },
    }
  })],
}
export default config
