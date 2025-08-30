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
        }
      },
    },
    plugins: [],
  };