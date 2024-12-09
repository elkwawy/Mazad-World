/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "bMC": "var(--bMC)",
        "sec-color": "var(--sec-color)",
      },
    },
  },
  plugins: [],
};
