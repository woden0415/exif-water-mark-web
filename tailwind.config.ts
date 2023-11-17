import type { Config } from 'tailwindcss'
const konstaConfig = require('konsta/config')

const config: Config = konstaConfig({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media', // or 'class'
  plugins: [],
})

export default config
