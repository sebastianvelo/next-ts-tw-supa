import en from "./en";
import es from "./es";

export type Translation = typeof es;

export type TranslationKey = keyof Translation;

const wordings = {
    en,
    es,
} as const;

export default wordings;