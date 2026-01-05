import FormFieldDTO from "@/core/view/DTO/form/form-field";
import usePost from "@/hooks/api/usePost";
import { useForm } from "react-hook-form";

interface UseSimpleFormProps<T> {
    formFields: FormFieldDTO<T>[];
    apiRoute?: string;
    onSubmit?: (data: T) => Promise<void>;
    onSuccess?: (response: any) => void;
    onError?: (error: Error) => void;
}

const useAppForm = <T extends Record<string, any>>({ formFields, onSubmit, onSuccess, onError, apiRoute }: UseSimpleFormProps<T>) => {
    const defaultValues = formFields.reduce((acc, field) => {
        acc[field.name as string] = field.defaultValue ?? "";
        return acc;
    }, {} as any);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch, setValue } = useForm<T>({
        defaultValues,
    });

    const { post } = usePost({
        url: apiRoute || '',
        onSuccess,
        onError,
    });

    const defaultSubmitter = async (data: T) => {
        if (apiRoute) {
            await post(data);
        }
    };

    const submit = handleSubmit(async (data) => {
        await (onSubmit || defaultSubmitter)(data);
    });

    return {
        register,
        handleSubmit: submit,
        errors,
        isSubmitting,
        reset,
        watch,
        setValue,
        formFields,
    };
};

export default useAppForm;