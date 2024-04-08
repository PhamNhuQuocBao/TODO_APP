/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#0D0714",
        violet: "#9E78CF",
      },
    },
  },
  plugins: [],
};
