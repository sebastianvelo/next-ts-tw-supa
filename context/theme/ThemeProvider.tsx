"use client"
import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import ThemeContext, { AppTheme } from "./ThemeContext";
import { COLOR_THEME_KEY, DATA_THEME_KEY, themes } from "./constants";

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<AppTheme>("blue");

    useEffect(() => {
        const savedTheme = localStorage.getItem(COLOR_THEME_KEY) as AppTheme;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute(DATA_THEME_KEY, savedTheme);
        }
    }, []);

    const applyTheme = (newTheme: AppTheme) => {
        setTheme(newTheme);
        localStorage.setItem(COLOR_THEME_KEY, newTheme);
        document.documentElement.setAttribute(DATA_THEME_KEY, newTheme);
    };

    const themeContextValue = useMemo(() => ({ theme, applyTheme, themes }), [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;