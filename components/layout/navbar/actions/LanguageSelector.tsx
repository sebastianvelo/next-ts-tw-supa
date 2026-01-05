"use client"
import Select from "@/components/ui/molecules/select/Select";
import useIsMobile from "@/hooks/app/useIsMobile";
import useLanguage from "@/hooks/lang/useLanguage";
import { SelectOption } from "@/hooks/components/useSelectInput";
import { Language } from "@/locales/types";

const LanguageSelector: React.FC = () => {
    const isMobile = useIsMobile();
    const { lang, setLang, LANGUAGES } = useLanguage();

    const languageOptions: SelectOption[] = LANGUAGES.map((language) => ({
        label: `${language.flag} ${!isMobile ? language.label : ""}`,
        value: language.code
    }));

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as Language);
    };

    return <Select name="language" label="Idioma" value={lang} onChange={handleLanguageChange} options={languageOptions} />;
};

export default LanguageSelector;