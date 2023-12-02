/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
