/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{css,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#3EB489',
            dark: '#ffffff',
          },
          secondary: {
            DEFAULT: '#267055',
            dark: '#ffffff',
          },
          info: {
            DEFAULT: '#64748b',
            dark: '#ffffff',
          },
        }
      },
    },
    plugins: [],
  };