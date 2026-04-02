import { createContext } from "react";

export interface NavigationErrorContextType {
  redirectError?: string;
  setRedirectError: (msg?: string) => void;
  clearRedirectError: () => void;
}

const NavigationErrorContext = createContext<NavigationErrorContextType | undefined>(undefined);

export default NavigationErrorContext;