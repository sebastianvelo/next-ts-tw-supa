import scrollbar from "tailwind-scrollbar";
import colors from "tailwindcss/colors";

export default {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
        "./context/**/*.{js,ts,jsx,tsx}",
        "./presentation/**/*.{js,ts,jsx,tsx}",
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
                "slide-in-top": {
                    from: { opacity: "0", transform: "translateY(-40px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "scale-up": {
                    from: { opacity: "0", transform: "scale(0.88)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "fade-blur": {
                    from: { opacity: "0", filter: "blur(8px)", transform: "scale(0.97)" },
                    to: { opacity: "1", filter: "blur(0px)", transform: "scale(1)" },
                },
                "flip-in": {
                    from: { opacity: "0", transform: "perspective(600px) rotateX(-20deg) translateY(20px)" },
                    to: { opacity: "1", transform: "perspective(600px) rotateX(0deg) translateY(0)" },
                },
                "elastic-pop": {
                    "0%": { opacity: "0", transform: "scale(0.5)" },
                    "60%": { opacity: "1", transform: "scale(1.05)" },
                    "80%": { transform: "scale(0.97)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            animation: {
                "slide-in-right": "slide-in-right 0.3s ease-out",
                "slide-in-left": "slide-in-left 0.3s ease-in-out",
                "slide-in-bottom": "slide-in-bottom 0.3s ease-out",
                "slide-in-top": "slide-in-top 0.3s cubic-bezier(0.22,1,0.36,1)",
                "scale-up": "scale-up 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                "fade-blur": "fade-blur 0.3s ease-out",
                "flip-in": "flip-in 0.35s cubic-bezier(0.22,1,0.36,1)",
                "elastic-pop": "elastic-pop 0.45s ease-out",
            },
        },
    },
    plugins: [
        scrollbar({ nocompatible: true }),
    ],
};