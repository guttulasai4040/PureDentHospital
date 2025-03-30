/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      boxShadow: {
        "custom-color": "0 0px 20px rgb(30,32,30)", // Example shadow with color
        "custom-lg": "0 10px 15px rgba(0, 0, 0, 0.5)", // Larger shadow with color
      },
    },
    colors: {
      primary: "#FFF6E4",
      secondary: "#826ee7",
      shade: "#a99ce8",

      brand: {
        light: "#fff",
        dark: "#333",
      },
    },
  },
  plugins: [],
};
