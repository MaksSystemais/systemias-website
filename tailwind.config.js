/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            fontSize: '1rem',
            '@screen sm': {
              fontSize: '1.125rem',
            },
            '@screen md': {
              fontSize: '1.25rem',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h1: {
              fontSize: '1.75em',
              '@screen sm': {
                fontSize: '2em',
              },
              '@screen md': {
                fontSize: '2.25em',
              },
            },
            h2: {
              fontSize: '1.5em',
              '@screen sm': {
                fontSize: '1.75em',
              },
              '@screen md': {
                fontSize: '2em',
              },
            },
            h3: {
              fontSize: '1.25em',
              '@screen sm': {
                fontSize: '1.5em',
              },
              '@screen md': {
                fontSize: '1.75em',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 