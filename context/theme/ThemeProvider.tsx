"use client"
import { PropsWithChildren, useEffect, useState } from "react";
import ThemeContext, { AppTheme } from "./ThemeContext";
import { COLOR_THEME_KEY, DATA_THEME_KEY, themes } from "./constants";

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setThemeState] = useState<AppTheme>("blue");

    useEffect(() => {
        const savedTheme = localStorage.getItem(COLOR_THEME_KEY) as AppTheme;
        if (savedTheme) {
            setThemeState(savedTheme);
            document.documentElement.setAttribute(DATA_THEME_KEY, savedTheme);
        }
    }, []);

    const setTheme = (newTheme: AppTheme) => {
        setThemeState(newTheme);
        localStorage.setItem(COLOR_THEME_KEY, newTheme);
        document.documentElement.setAttribute(DATA_THEME_KEY, newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;