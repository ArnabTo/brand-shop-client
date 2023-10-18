/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#000',        // Black for primary color
          secondary: '#fff',      // White for secondary color
          accent: '#444',         // Gray for accent color
          neutral: '#333',        // Dark gray for text
          'base-100': '#fff',     // White for background
          info: '#555',           // Light gray for informational content
          success: '#00cc66',     // Light green for success
          warning: '#ffcc00',     // Yellow for warning
          error: '#ff3333',       // Red for error messages
        },
      },
    ],
  },
}

