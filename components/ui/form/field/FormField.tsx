import Input from "@/atoms/input/Input";
import Textarea from "@/atoms/textarea/Textarea";
import ArrayField from "@/form/field/array/ArrayField";
import Question from "@/form/field/questions/Question";
import Select from "@/molecules/select/Select";
import { FormFieldType } from "@/presentation/forms/types";
import FormFieldDTO from "@/presentation/view/models/form/form-field";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

const FieldComponent = (type: FormFieldType) => {
    if (type === FormFieldType.SELECT) return Select;
    if (type === FormFieldType.TEXTAREA) return Textarea;
    return Input;
};

export interface FormFieldProps<T extends FieldValues> extends FormFieldDTO<T> { }

const FormField = <T extends FieldValues>({ type, name, label, placeholder, defaultValue, rows, options, validation, fields, addButtonLabel, question }: FormFieldProps<T>) => {
    const { register, control } = useFormContext<T>();

    if (type === FormFieldType.OBJECT_LIST) {
        return (
            <ArrayField
                name={name as string}
                fields={fields || []}
                addButtonLabel={addButtonLabel}
                label={label}
            />
        );
    }

    if (type === FormFieldType.QUESTION) {
        return (
            <Controller
                name={name as Path<T>}
                control={control}
                render={({ field }) => (
                    <Question {...(question!)} value={field.value} onChange={field.onChange} />
                )}
            />
        )
    }

    const props = {
        id: name as string,
        type,
        placeholder,
        rows,
        options: options || [],
        min: type === "number" ? 1 : undefined,
        defaultValue,
        label,
        ...register(name as Path<T>, validation),
    };

    const Field = FieldComponent(type);

    return <Field {...props as any} />;
};

export default FormField;
