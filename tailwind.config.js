/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            fontFamily: 'IBM Plex Mono',
            p: {
              marginBottom: '1.5em',
              fontFamily: 'IBM Plex Mono',
            },
            h1: {
              fontFamily: 'IBM Plex Mono',
            },
            h2: {
              fontFamily: 'IBM Plex Mono',
            },
            h3: {
              fontFamily: 'IBM Plex Mono',
            },
            strong: {
              fontWeight: '600',
              color: '#111',
            },
            ul: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};