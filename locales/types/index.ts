export enum Language {
    EN = "en",
    ES = "es"
}

export type LanguageProps = {
    code: Language;
    label: string;
    flag: string;
    nativeName: string;
};
