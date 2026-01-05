import Input from "@/components/ui/atoms/input/Input";
import Textarea from "@/components/ui/atoms/textarea/Textarea";
import Select from "@/components/ui/molecules/select/Select";
import { FormFieldType } from "@/core/forms/types";
import FormFieldDTO from "@/core/view/DTO/form/form-field";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const FieldComponent = (type: FormFieldType) => {
    if (type === FormFieldType.SELECT) return Select;
    if (type === FormFieldType.TEXTAREA) return Textarea;
    return Input;
};

export interface FormFieldProps<T extends FieldValues> extends FormFieldDTO<T> {
    register: UseFormRegister<T>;
}

const FormField = <T extends FieldValues>({ type, name, placeholder, rows, options, validation, register }: FormFieldProps<T>) => {
    const props = {
        id: name as string,
        type,
        placeholder,
        rows,
        options: options || [],
        min: type === "number" ? 1 : undefined,
        ...register(name as Path<T>, validation),
    };

    const Field = FieldComponent(type);

    return <Field {...props} />;
};

export default FormField;
