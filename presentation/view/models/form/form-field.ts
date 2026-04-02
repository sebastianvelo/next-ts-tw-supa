import { FormFieldDependency, FormFieldType, Validation } from "@/presentation/forms/types";
import QuestionDTO from "./question";

interface FormFieldDTO<T> {
    name: keyof T;
    label?: string;
    type: FormFieldType;
    defaultValue?: any;
    placeholder?: string;
    rows?: number;
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
    options?: Array<{ value: string | number; label: string; }>;
    checkboxLabel?: string;
    addButtonLabel?: string;
    question?: QuestionDTO<any>;
    validation?: {
        required?: string;
        pattern?: Validation<RegExp>;
        minLength?: Validation;
        maxLength?: Validation;
        min?: Validation;
        max?: Validation;
        validate?: Record<string, (value: any) => boolean | string>;
    };
    fields?: FormFieldDTO<any>[];
    dependency?: FormFieldDependency<T>;
}

export default FormFieldDTO;