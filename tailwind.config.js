/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',         // Scan all HTML and JS files in src/
    './src/views/**/*.html'         // Include HTML partials/components in views/
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Extend default sans font with Roboto
      },
      colors: {
        primary: '#005f73',        // Main brand color (used for headings, buttons, etc.)
        secondary: '#b8a474',      // Accent color (used for highlights or borders)
        light: '#f8f8f8',          // Light background (used for cards or main background)
        dark: '#222222',           // Default dark text color
        white: '#ffffff',          // Pure white (used for backgrounds or text)
        border: '#e0e0e0',         // Light border color (optional, use where separation is needed)
        muted: '#777777',          // Less prominent text (e.g., in footer or hover states)
        body: '#555555',           // General body text (slightly lighter than dark)
      }
    },
  },
  plugins: [], // Add custom plugins here if needed
}
