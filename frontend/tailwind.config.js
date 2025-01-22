/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Smooch: ["Smooch Sans", "sans-serif"],
        colors: {
          cardbg: '#f8f8f8',
        },
      }
    },
  },
  plugins: [],
}

