/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#25315b',
        'primary-light': '#34457f',
        'primary-intense': '#1461b8',
        secondary: '#191c24',
        dark: '#010101'
      },
      boxShadow: {
        main: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'main-ele':
          '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
      }
    }
  },
  plugins: []
}
