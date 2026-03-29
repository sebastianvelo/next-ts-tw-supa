export type Validation<T = number> = { value: T; message: string };

export type FormFieldDependency<T> = {
    field: keyof T;
    value: any;
}

export enum FormFieldType {
    TEXT = "text",
    EMAIL = "email",
    TEL = "tel",
    TEXTAREA = "textarea",
    NUMBER = "number",
    PASSWORD = "password",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    SELECT = "select",
    DATE = "date",
    FILE = "file",
    OBJECT_LIST = "object_list",
    QUESTION = "question"
}


