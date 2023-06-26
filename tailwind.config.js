/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        "fade-in": 'fade-in 0.2s ease-in-out',
      },
      backgroundImage: {
        'hero': "url('/hero2.png')",
      },
      colors: {
        'primary': '#BA5B80',
        'primary-light': '#E1C1CF',
        'primary-dark': '#43091F',
        'secondary': '#E88697',
        'secondary-light': '#F5D0D6',
        'black': '#020101',
        'gray': '#AAAAAA',
        'white': '#FFF'
      },
      boxShadow: {
        'light': '0 0 10px 3px rgba(232, 135, 151, 0.2)',
        'sm-light': '0 0 5px 2px rgba(232, 135, 151, 0.2)',
        'dark': '0 0 10px 3px rgba(0, 0, 0, 0.2)',
        'b-dark': '0 10px 5px 5px rgba(0, 0, 0, 0.1)',
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill, minmax(350px, 1fr))',
    },
    gridAutoRows: {
      '22': '22rem',
    },
  },
  plugins: [],
}
