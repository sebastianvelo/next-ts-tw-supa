"use client"
import LANGUAGES from "@/locales/lang";
import { Language } from "@/locales/types";
import { getInitialLanguage, LangLS } from "@/locales/utils";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import LanguageContext from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
  lang?: Language;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, lang: defLang }) => {
  const [lang, setLang] = useState<Language>(getInitialLanguage(defLang));

  useEffect(() => {
    localStorage.setItem(LangLS, lang);
  }, [lang]);

  const contextValue = useMemo(() => ({ lang, setLang, LANGUAGES }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;