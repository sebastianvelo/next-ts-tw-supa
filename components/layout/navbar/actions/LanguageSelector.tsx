"use client"
import Select from "@/components/ui/molecules/select/Select";
import useIsMobile from "@/hooks/app/useIsMobile";
import { SelectOption } from "@/components/ui/molecules/select/hooks/useSelectInput";
import useLanguage from "@/hooks/lang/useLanguage";
import I18n from "@/locales/I18nKeys";
import { Language } from "@/locales/types";

const LanguageSelector: React.FC = () => {
    const isMobile = useIsMobile();
    const { lang, setLang, LANGUAGES } = useLanguage();

    const languageOptions: SelectOption[] = LANGUAGES.map((language) => ({
        label: `${language.flag} ${isMobile ? "" : language.label}`,
        value: language.code
    }));

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Language);
    };

    return <Select name="language" label={I18n.NAVBAR.LANGUAGE} value={lang} onChange={handleLanguageChange} options={languageOptions} />;
};

export default LanguageSelector;