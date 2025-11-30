/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{css,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            default: '#3E736D',
            dark: '#06B6D4',
          },
          secondary: {
            default: '#267055',
            dark: '#06B6D4',
          },
          info: {
            default: '#666',
            dark: 'lightgray',
          },
        },
        keyframes: {
          'fade-in-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out',
        },
      },
    },
    plugins: [],
  };