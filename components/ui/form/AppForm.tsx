import { CardBody } from "@/components/ui/molecules/card/Card";
import FormFieldDTO from "@/core/view/DTO/form/form-field";
import useAppForm from "@/hooks/form/useAppForm";
import AppFormActions from "./actions/AppFormActions";
import FormFieldContainer from "./field/FormFieldContainer";

interface AppFormProps<T extends Record<string, any>> {
    fields: FormFieldDTO<T>[];
    apiRoute?: string;
    onSubmit?: (data: T) => Promise<void>;
    onSuccess?: (response: any) => void;
    onError?: (error: Error) => void;
    submitButtonText?: string;
    submitButtonLoadingText?: string;
    clearButtonText?: string;
}

const AppForm = <T extends Record<string, any>>({ fields, apiRoute, onSubmit, onSuccess, onError, ...props }: AppFormProps<T>) => {
    const { register, handleSubmit, errors, isSubmitting, reset, formFields } = useAppForm<T>({
        formFields: fields,
        onSubmit,
        onError,
        onSuccess,
        apiRoute
    });

    return (
        <form onSubmit={handleSubmit}>
            <CardBody className="space-y-4">
                {formFields.map((field) => (
                    <FormFieldContainer<T>
                        key={field.name as string}
                        {...field}
                        register={register}
                        errors={errors}
                    />
                ))}
            </CardBody>
            <AppFormActions {...props} errors={errors} isSubmitting={isSubmitting} reset={reset} />
        </form>
    );
};

export default AppForm;