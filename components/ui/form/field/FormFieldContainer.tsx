import Text from "@/components/ui/atoms/text/Text";
import { FieldErrors, FieldValues } from "react-hook-form";
import FormField, { FormFieldProps } from "./FormField";

interface FormFieldContainerProps<T extends FieldValues> extends FormFieldProps<T> {
    errors: FieldErrors<T>;
}

const FormFieldContainer = <T extends Record<string, any>>({ errors, ...props }: FormFieldContainerProps<T>) => {
    const name = props.name as keyof typeof errors;
    const errorMessage = errors[name]?.message as string | undefined;

    return (
        <div key={props.name as string}>
            <div className="flex space-x-1">
                <Text t={props.label} as="label" htmlFor={props.name as string} size="sm" weight="medium" />
                {props.validation?.required && <Text variant="danger">*</Text>}
            </div>
            <FormField {...props} />
            {errors[name] && (
                <Text t={errorMessage} size="xs" variant="danger" className="m-1" />
            )}
        </div>
    );
};

export default FormFieldContainer;