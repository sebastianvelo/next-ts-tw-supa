const FORM = {
    VALIDATION: {
        MIN_LENGTH: "form.validation.min-length",
        MAX_LENGTH: "form.validation.max-length",
        MIN: "form.validation.min",
        MAX: "form.validation.max",
        EMAIL: "form.validation.email",
        URL: "form.validation.url",
        PHONE: "form.validation.phone",
        NUMERIC: "form.validation.numeric",
        ALPHABETIC: "form.validation.alphabetic",
        ALPHANUMERIC: "form.validation.alphanumeric",
        STRONG_PASSWORD: "form.validation.strong_password",
        DATE_ISO: "form.validation.date-iso",
        DNI_AR: "form.validation.dni-ar",
        CUIT_AR: "form.validation.cuit-ar",
        REQUIRED: "form.validation.required"
    }
} as const;

export default FORM;
