/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': 'url(/images/hero.webp)',
        'narrowsuggestion': 'url(/images/narrow.webp)'
      },
      colors: {
        'active-gray': '#252C2F',
        'brdr-gray': '#E0E0E0',
        'active-black': '#161D20'
      }
    },
  },
  plugins: [],
}
