export type Validation<T = number> = { value: T; message: string };

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


