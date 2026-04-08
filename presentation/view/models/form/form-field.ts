import { FormFieldDependency, FormFieldType, Validation } from "@/presentation/forms/types";
import QuestionDTO from "./question";

type SelectOption = {
    value: string | number;
    label: string;
};

type BaseValidation = {
    required?: string;
    validate?: Record<string, (value: any) => boolean | string>;
};

type TextLikeValidation = BaseValidation & {
    pattern?: Validation<RegExp>;
    minLength?: Validation;
    maxLength?: Validation;
};

type NumberValidation = BaseValidation & {
    min?: Validation;
    max?: Validation;
};

type DateValidation = BaseValidation & {
    min?: Validation<string | Date>;
    max?: Validation<string | Date>;
};

interface BaseFormFieldDTO<T> {
    name: keyof T;
    label: string;
    type: FormFieldType;
    defaultValue?: any;
    placeholder?: string;
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
    dependency?: FormFieldDependency<T>;
}

interface TextFieldDTO<T> extends BaseFormFieldDTO<T> {
    type:
    | FormFieldType.TEXT
    | FormFieldType.EMAIL
    | FormFieldType.TEL
    | FormFieldType.PASSWORD;
    validation?: TextLikeValidation;
}

interface TextareaFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.TEXTAREA;
    rows?: number;
    validation?: TextLikeValidation;
}

interface NumberFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.NUMBER;
    validation?: NumberValidation;
}

interface CheckboxFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.CHECKBOX;
    checkboxLabel?: string;
    validation?: BaseValidation;
}

interface RadioFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.RADIO;
    options: SelectOption[];
    validation?: BaseValidation;
}

interface SelectFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.SELECT;
    options: SelectOption[];
    validation?: BaseValidation;
}

interface DateFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.DATE;
    validation?: DateValidation;
}

interface FileFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.FILE;
    validation?: BaseValidation;
}

interface ObjectListFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.OBJECT_LIST;
    addButtonLabel?: string;
    fields: FormFieldDTO<any>[];
    validation?: BaseValidation;
}

interface QuestionFieldDTO<T> extends BaseFormFieldDTO<T> {
    type: FormFieldType.QUESTION;
    question: QuestionDTO<any>;
    validation?: BaseValidation;
}

type FormFieldDTO<T> =
    | TextFieldDTO<T>
    | TextareaFieldDTO<T>
    | NumberFieldDTO<T>
    | CheckboxFieldDTO<T>
    | RadioFieldDTO<T>
    | SelectFieldDTO<T>
    | DateFieldDTO<T>
    | FileFieldDTO<T>
    | ObjectListFieldDTO<T>
    | QuestionFieldDTO<T>;

export default FormFieldDTO;