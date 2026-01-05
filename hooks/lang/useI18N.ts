import { replacePlaceholders } from "@/locales/utils";
import wordings, { TranslationKey } from "@/locales/wordings";
import useLanguage from "./useLanguage";

type UseI18N = {
    t: (key?: string) => string;
    p: (key: string, data: Array<string | number>) => string;
    tlist: (key: string) => string[];
};

const useI18N = (): UseI18N => {
    const { lang } = useLanguage();

    const t = (key?: string): string => wordings[lang][key as TranslationKey] as string ?? key;
    const tlist = (key: string): string[] => wordings[lang][key as TranslationKey] as unknown as string[] ?? [];
    const p = (key: string, data: Array<string | number>) => replacePlaceholders(t(key), data);

    return {
        t,
        p,
        tlist
    };
}

export default useI18N;