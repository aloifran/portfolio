/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    white: "rgb(255 255 255 / 0.9)",
                    black: "rgb(0 0 0 / 0.8)",
                },
            },
        },
    },
    plugins: [],
};
