import FormFieldDTO from "@/presentation/view/dto/form/form-field";
import usePost from "@/hooks/api/usePost";
import { Control, FieldErrors, useForm, UseFormRegister, UseFormReset, UseFormReturn, UseFormSetValue, UseFormTrigger, UseFormWatch } from "react-hook-form";
import useFormWizard, { FormWizard } from "./useFormWizard";

interface UseAppFormProps<T> {
    formFields: FormFieldDTO<T>[];
    apiRoute?: string;
    onSubmit?: (data: T) => Promise<void>;
    onSuccess?: (response: any) => void;
    onError?: (error: Error) => void;
    isWizard?: boolean;
    onLastStep?: () => void;
    hasExtraStep?: boolean;
}

type UseAppForm<T extends Record<string, any>> = {
    methods: UseFormReturn<T>;
    register: UseFormRegister<T>;
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<T>;
    isSubmitting: boolean;
    reset: UseFormReset<T>;
    watch: UseFormWatch<T>;
    setValue: UseFormSetValue<T>;
    control: Control<T, any, T>;
    trigger: UseFormTrigger<T>;
    formFields: FormFieldDTO<T>[];
    wizard: FormWizard<T>;
}

const useAppForm = <T extends Record<string, any>>({ formFields, onSubmit, onSuccess, onError, apiRoute, isWizard, onLastStep, hasExtraStep }: UseAppFormProps<T>): UseAppForm<T> => {
    const defaultValues = formFields.reduce((acc, field) => {
        acc[field.name as string] = field.defaultValue ?? "";
        return acc;
    }, {} as any);

    const methods = useForm<T>({
        defaultValues,
    });

    const { handleSubmit, formState: { errors, isSubmitting }, reset, watch, setValue, control, trigger, register } = methods;

    const { post } = usePost({
        url: apiRoute || "",
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

    const wizard = useFormWizard({
        formFields,
        trigger,
        isWizard,
        hasExtraStep,
        onLastStep
    });

    return {
        methods,
        register,
        handleSubmit: submit,
        errors,
        isSubmitting,
        reset,
        watch,
        setValue,
        control,
        trigger,
        formFields,
        wizard,
    };
};

export default useAppForm;