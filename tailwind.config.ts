import scrollbar from "tailwind-scrollbar";
import colors from "tailwindcss/colors";

export default {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
        "./context/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "rgb(var(--color-primary-50) / <alpha-value>)",
                    100: "rgb(var(--color-primary-100) / <alpha-value>)",
                    200: "rgb(var(--color-primary-200) / <alpha-value>)",
                    300: "rgb(var(--color-primary-300) / <alpha-value>)",
                    400: "rgb(var(--color-primary-400) / <alpha-value>)",
                    500: "rgb(var(--color-primary-500) / <alpha-value>)",
                    600: "rgb(var(--color-primary-600) / <alpha-value>)",
                    700: "rgb(var(--color-primary-700) / <alpha-value>)",
                    800: "rgb(var(--color-primary-800) / <alpha-value>)",
                    900: "rgb(var(--color-primary-900) / <alpha-value>)",
                    950: "rgb(var(--color-primary-950) / <alpha-value>)",
                },
                secondary: {
                    50: "rgb(var(--color-secondary-50) / <alpha-value>)",
                    100: "rgb(var(--color-secondary-100) / <alpha-value>)",
                    200: "rgb(var(--color-secondary-200) / <alpha-value>)",
                    300: "rgb(var(--color-secondary-300) / <alpha-value>)",
                    400: "rgb(var(--color-secondary-400) / <alpha-value>)",
                    500: "rgb(var(--color-secondary-500) / <alpha-value>)",
                    600: "rgb(var(--color-secondary-600) / <alpha-value>)",
                    700: "rgb(var(--color-secondary-700) / <alpha-value>)",
                    800: "rgb(var(--color-secondary-800) / <alpha-value>)",
                    900: "rgb(var(--color-secondary-900) / <alpha-value>)",
                    950: "rgb(var(--color-secondary-950) / <alpha-value>)",
                },
                accent: colors.blue,
                danger: colors.red,
                success: colors.green,
                warning: colors.yellow,
                info: colors.cyan
            },
            fontFamily: {
                brand: ["var(--font-oswald)", "sans-serif"],
            },
            keyframes: {
                "slide-in-right": {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                "slide-in-left": {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                "slide-in-bottom": {
                    "0%": { transform: "translateY(30%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                "slide-in-right": "slide-in-right 0.2s ease-out",
                "slide-in-left": "slide-in-left 0.2s ease-in-out",
                "slide-in-bottom": "slide-in-bottom 0.2s ease-out",
            },
        },
    },
    plugins: [
        scrollbar({ nocompatible: true }),
    ],
};