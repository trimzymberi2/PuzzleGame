/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all relevant file types for React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f98866',
        secondary: '#74907A',
        white: '#FFFFFF',
        primaryshadow: '#F98866',
        background: '#fde0d7',
        backgroundSecondary: '#f3f3f3',
        TextSecondary: '#EAEAEA',
        Border: '#827070',
        SecondaryBorder: '#60a5fa',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Italic: ['Italiana', 'serif'],
        Rufina: ['Rufina', 'monospace'],
        Slackey: ['Slackey', 'monospace'],
        Rubik: ['Rubik Mono One', 'monospace'],
        RubikOne: ['Rubik', 'monospace'],
      },
    },
  },
  plugins: [],
};
