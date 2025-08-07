/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      colors: {
        'ios-bg': '#F9F9FB',
        'ios-bg-dark': '#000000',
        'ios-panel': '#FFFFFF',
        'ios-panel-dark': '#1C1C1E',
        'ios-panel-contrast': '#F0F0F0',
        'ios-panel-contrast-dark': '#2C2C2E',
        'ios-blue': '#0A84FF',
        'ios-border': '#E5E5EA',
        'ios-border-dark': '#38383A',
        'ios-text-primary': '#000000',
        'ios-text-primary-dark': '#FFFFFF',
        'ios-text-secondary': '#8A8A8E',
        'ios-text-secondary-dark': '#8D8D93',
      }
    },
  },
  plugins: [],
};