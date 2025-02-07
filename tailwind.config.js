/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{css,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            default: '#3EB489',
            dark: '#ff0000',
          },
          secondary: {
            default: '#267055',
            dark: '#fdcf04',
          },
          info: {
            default: '#64748b',
            dark: 'lightgray',
          },
        }
      },
    },
    plugins: [],
  };