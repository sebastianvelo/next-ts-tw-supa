import ThemeContext, { ThemeContextType } from "@/context/theme/ThemeContext";
import { useContext } from "react";

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};

export default useTheme;