/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/views/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#005f73',        // Main brand color
        secondary: '#b8a474',      // Secondary accent color
        light: '#f8f8f8',          // Light background
        dark: '#222222',           // Default text color
        white: '#ffffff',          // For cards or text on dark backgrounds
        border: '#e0e0e0',         // Optional border color
        muted: '#777777',          // Footer or subdued text
        body: '#555555',           // For paragraph or blockquote text
      }
    },
  },
  plugins: [],
}
