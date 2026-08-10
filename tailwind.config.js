/** @type {import('tailwindcss').Config} */
const withOpacity = variable => `rgb(var(${variable}) / <alpha-value>)`;

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{css,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: withOpacity('--color-canvas'),
        surface: {
          DEFAULT: withOpacity('--color-surface'),
          elevated: withOpacity('--color-surface-elevated'),
          subtle: withOpacity('--color-surface-subtle'),
        },
        content: {
          DEFAULT: withOpacity('--color-content'),
          muted: withOpacity('--color-content-muted'),
          subtle: withOpacity('--color-content-subtle'),
          inverse: withOpacity('--color-content-inverse'),
        },
        accent: {
          DEFAULT: withOpacity('--color-accent'),
          strong: withOpacity('--color-accent-strong'),
          contrast: withOpacity('--color-accent-contrast'),
        },
        line: {
          DEFAULT: withOpacity('--color-line'),
          strong: withOpacity('--color-line-strong'),
        },
        focus: withOpacity('--color-focus'),
      },
      borderRadius: {
        card: 'var(--radius-card)',
        surface: 'var(--radius-surface)',
        control: 'var(--radius-control)',
      },
      boxShadow: {
        surface: 'var(--shadow-surface)',
        elevated: 'var(--shadow-elevated)',
      },
    },
  },
  plugins: [],
};
