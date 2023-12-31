import type { Config } from 'tailwindcss'

import konstaConfig from 'konsta/config'

const config: Config = konstaConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    borderRadius: {
      half: '50%',
    },
  },
  darkMode: 'media', // or 'class'
  plugins: [],
})

export default config
