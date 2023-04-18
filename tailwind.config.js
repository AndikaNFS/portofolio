/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

