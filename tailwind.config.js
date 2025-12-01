/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                verde: {
                    DEFAULT: "#2F855A",
                    claro: "#68D391",
                    pistacho: "#CAFFD2",
                },
                rosa: {
                    DEFAULT: "#E68CB1",
                    suave: "#FAD7E8",
                },
                gris: {
                    claro: "#F7FAFC",
                    medio: "#CBD5E0",
                    texto: "#4A5568",
                },
                marron: {
                    DEFAULT: "#837469",
                    oscuro: "#523C20",
                },
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Poppins", "sans-serif"],
                script: ["Dancing Script", "cursive"],
            },
        },
    },
    plugins: [],
}
