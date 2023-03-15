/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      "xsm":"412px",
      "sm":"540px",
      "md":"768px",
      "lg":"1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
