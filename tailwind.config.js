/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
        Monoton: ["Monoton", "sans-serif"],
      },
      // ...
      colors: {
        mainBackground: "var(--mainBackground)",
        numberBackground: "var(--numberBackground)",
        numberHover: "var(--numberHover)",
        btnContainer: "var(--btnContainer)",
        btnColor: "var(--btnColor)",
      },
      textColor: {
        secondary: "var(--secondary)",
        main: "var(--moammad)",
      },
    },
  },
  plugins: [],
};
