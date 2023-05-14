/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/hero.png')",
      },
      colors: {
        'primary': '#BA5B80',
        'primary-light': '#E1C1CF',
        'secondary': '#E88697',
        'secondary-light': '#F5D0D6',
        'black': '#020101',
        'gray': '#AAAAAA',
        'white': '#FFF'
      },
      boxShadow: {
        'light': '0 0 10px 3px rgba(232, 135, 151, 0.2)',
        'dark': '0 0 10px 3px rgba(0, 0, 0, 0.2)',
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
  },
  plugins: [],
}
