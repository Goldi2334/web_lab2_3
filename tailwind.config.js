/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pub/*.{html,css,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      "sea_blue":"#00FFFF",
      "cyan":"#22d3ee",
      "slot_bg": "#1eeff5",
      "in_section_bg":"#55faff"
    },
    extend: {},
  },
  plugins: [],
}

