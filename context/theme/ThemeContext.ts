import { createContext } from "react";

export type AppTheme = "blue" | "green" | "red" | "purple";

export interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  themes: readonly any[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;