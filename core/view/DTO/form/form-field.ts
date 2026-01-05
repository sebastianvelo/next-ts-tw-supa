import { FormFieldType, Validation } from "@/core/forms/types";

interface FormFieldDTO<T> {
    name: keyof T;
    label: string;
    type: FormFieldType;
    defaultValue?: any;
    placeholder?: string;
    rows?: number;
    options?: Array<{ value: string | number; label: string; }>;
    checkboxLabel?: string;
    validation?: {
        required?: string;
        pattern?: Validation<RegExp>;
        minLength?: Validation;
        maxLength?: Validation;
        min?: Validation;
        max?: Validation;
        validate?: Record<string, (value: any) => boolean | string>;
    };
}

export default FormFieldDTO;