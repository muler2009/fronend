/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        xs: "480px",
        ss: "640px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1700px"
      },
  
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans'],
        'Roboto': ['Roboto', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans'],
        'Oswald': ['Oswald', 'sans']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/rect.png')",
      }
    },
  },
  plugins: [],
}
