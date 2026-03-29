import { FormFieldDependency } from "@/presentation/forms/types";
import { Control, FieldErrors, FieldValues, Path, useWatch } from "react-hook-form";

interface UseFormFieldProps<T extends FieldValues> {
    name: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    dependency?: FormFieldDependency<T>;
}

const useFormField = <T extends FieldValues>({ name, control, errors, dependency }: UseFormFieldProps<T>) => {
    const error = name.split(".").reduce((acc, key) => (acc as any)?.[key], errors) as any;
    const errorMessage = error?.message as string | undefined;

    const dependencyName = dependency?.field as string;
    let resolvedDependencyName = dependencyName;

    if (dependencyName && name.includes(".")) {
        const parentPath = name.substring(0, name.lastIndexOf("."));
        resolvedDependencyName = `${parentPath}.${dependencyName}`;
    }

    const dependentValue = useWatch({
        control,
        name: resolvedDependencyName as Path<T>,
    });

    let shouldRender = true;

    if (dependency) {
        const isDependentValueValid = Array.isArray(dependency.value)
            ? dependency.value.includes(dependentValue)
            : dependentValue === dependency.value;

        if (!isDependentValueValid) {
            shouldRender = false;
        }
    }

    return {
        errorMessage,
        shouldRender,
        error
    };
};

export default useFormField;
