/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.625rem',
        'sm-m': '0.688rem',
        sm: ['0.75rem', '0.938rem'],
        base: ['0.813rem', '1rem'],
        'lg-m': '0.875rem',
        lg: '0.938rem',
        'xl-m': '1.063rem',
        xl: ['1.25rem', '1.5rem'],
        '2xl': '1.438rem',
        '3xl-m': ['1.563rem', '3.438rem'],
        '3xl': ['3.125rem', '3.438rem'],
        '4xl-m': ['2.5rem', '2.813rem'],
        '4xl': ['5rem', '5.625rem'],
      },
      colors: {
        'primary': '#0f0f11',
        'yellow': '#fbd13e',
        'red': '#b70000',
        'grey': {
          'light': '#999999',
          DEFAULT: '#9ea2aa',
          'dark': '#4d4d4d',
        },
      },
      borderRadius: {
        DEFAULT: '0.188rem',
      },
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1600px',
      },
      container: {
        padding: {
          DEFAULT: '0.938rem',
          sm: '0.938rem',
          md: '1.25rem',
          lg: '1.25rem',
          xl: '3.125rem',
        },
      },
    },
  },
  plugins: [],
}


