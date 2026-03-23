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
          black: '#e8f4f8',
          darkgray: '#c8ddd0',
          gray: '#4a7a5a',
          lightgray: '#4a7a5a',
          text: '#1a3a2a',
          blue: '#2e9e4f',
          bluehover: '#3ab85e',
          card: 'rgba(255, 255, 255, 0.45)',
          cardborder: 'rgba(255, 255, 255, 0.6)',
          surface: 'rgba(255, 255, 255, 0.3)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
