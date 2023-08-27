/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
                Barlow: ["Barlow", "sans-serif"],
                Monoton: ["Monoton", "sans-serif"],
            },
            // ...
            colors: {
                "-main-blue": "rgba(59,70,100,255)",
                "-dark-blue": "rgba(24,31,50,255)",
                "-milky": "rgba(234,227,219,255)",
                "-redish-orange": "rgb(231, 84, 65)",
            },
        },
    },
    plugins: [],
};
