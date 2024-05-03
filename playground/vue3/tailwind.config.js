/** @type {import('tailwindcss').Config} */
import tokens from '@avc/foundations/lib/tailwind'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    '../../node_modules/@avc/ui-library/**/*.{js,vue,ts,html}'
  ],
  theme: {
    extend: {
      ...tokens
    }
  },
  plugins: []
}
