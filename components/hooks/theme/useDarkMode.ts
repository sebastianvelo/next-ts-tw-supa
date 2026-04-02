import { useEffect, useState } from "react";

const ThemeLS = "theme";
enum Themes {
    DARK = "dark",
    LIGHT = "light",
}

const getInitialTheme = (): boolean => {
    const storedPreference = typeof window === "undefined" ? Themes.DARK : localStorage.getItem(ThemeLS);
    if (storedPreference !== null) {
        return storedPreference === Themes.DARK;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

type UseDarkMode = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const useDarkMode = (): UseDarkMode => {
    const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (event: MediaQueryListEvent) => {
            if (localStorage.getItem(ThemeLS) === null) {
                setDarkMode(event.matches);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle(Themes.DARK, darkMode);
        localStorage.setItem(ThemeLS, darkMode ? Themes.DARK : Themes.LIGHT);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return { darkMode, toggleDarkMode };
};

export default useDarkMode;