import Text from "@/components/ui/atoms/text/Text";
import useFormField from "@/components/ui/form/field/hooks/useFormField";
import { FieldValues, useFormContext } from "react-hook-form";
import FormField, { FormFieldProps } from "./FormField";

interface FormFieldContainerProps<T extends FieldValues> extends Omit<FormFieldProps<T>, "register" | "control" | "errors"> { }

const FormFieldContainer = <T extends Record<string, any>>({ dependency, ...props }: FormFieldContainerProps<T>) => {
    const { control, formState: { errors } } = useFormContext<T>();

    const { errorMessage, shouldRender, error } = useFormField({
        control,
        errors,
        name: props.name as string,
        dependency
    });

    if (!shouldRender) {
        return null;
    }

    return (
        <div className="space-y-2" key={props.name as string}>
            <FormField {...props} dependency={dependency} />
            {error && (
                <Text t={errorMessage} size="xs" variant="danger" className="m-1" />
            )}
        </div>
    );
};

export default FormFieldContainer;