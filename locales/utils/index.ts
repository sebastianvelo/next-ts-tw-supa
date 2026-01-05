import LANGUAGES from "@/locales/lang";
import { Language, LanguageProps } from "@/locales/types";

export const LangLS = "lang";

export const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.slice(0, 2).toLowerCase() as Language;

    const supportedLanguages: Language[] = [Language.EN, Language.ES];

    if (supportedLanguages.includes(browserLang)) {
        return browserLang;
    }

    return Language.EN;
};

export const getInitialLanguage = (defLang?: Language): Language => {
    if (typeof window === "undefined") return Language.ES;
    const storedLang = localStorage.getItem(LangLS) as Language | null;

    const validLanguages: Language[] = [Language.EN, Language.ES];

    if (storedLang && validLanguages.includes(storedLang)) {
        return storedLang;
    }

    if (defLang && validLanguages.includes(defLang)) {
        return defLang;
    }

    return getBrowserLanguage();
};

export const getLanguageInfo = (code: Language): LanguageProps | undefined => {
    return LANGUAGES.find(lang => lang.code === code);
};

export const isValidLanguage = (code: string): code is Language => {
    const validCodes: string[] = ["en", "es"];
    return validCodes.includes(code);
};

/**
 * Reemplaza placeholders numéricos en un template por los valores de un array.
 * Sólo reconoce índices enteros >= 0.
 *
 * @param template - Cadena con placeholders como "{0}", "{1}", ...
 * @param data - Array cuyos elementos serán usados para sustituir.
 * @returns Cadena con los placeholders reemplazados.
 */
export const replacePlaceholders = (template: string, data: Array<string | number>): string => {
    return template.replace(/\{(\d+)\}/g, (match, group) => {
        const idx = Number(group);
        return idx < data.length && data[idx] !== undefined
            ? String(data[idx])
            : match;
    });
};