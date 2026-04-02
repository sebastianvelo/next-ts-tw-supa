"use client"
import useDarkMode from "@/hooks/theme/useDarkMode";
import { Moon, Sun } from "lucide-react";

const baseClasses = "rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed p-1";
const colorClasses = "bg-white hover:bg-white dark:bg-secondary-800";
const ringClasses = "focus:ring-secondary-300 dark:focus:ring-yellow-300";
const txtClasses = "text-secondary-700 hover:text-sky-500 dark:text-secondary-300 dark:hover:text-yellow-200";
const borderClasses = "border border-black/20 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-yellow-200/50";

const ThemeToggleButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();


    return (
        <button className={`${baseClasses} ${colorClasses} ${borderClasses} ${txtClasses} ${ringClasses}`} onClick={toggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    );
};

export default ThemeToggleButton;