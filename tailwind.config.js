/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#1d1d1f',
          darkgray: '#2d2d2d',
          gray: '#6e6e73',
          lightgray: '#86868b',
          text: '#f5f5f7',
          blue: '#0071e3',
          bluehover: '#0077ed',
          card: '#1c1c1e',
          cardborder: '#38383a',
          surface: '#2c2c2e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
