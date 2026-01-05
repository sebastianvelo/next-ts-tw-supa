import { Language, LanguageProps } from "@/locales/types";
import { createContext } from "react";

export interface LanguageContextType {
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  LANGUAGES: LanguageProps[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;