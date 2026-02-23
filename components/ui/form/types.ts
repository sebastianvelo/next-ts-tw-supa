import FormFieldDTO from "@/core/view/DTO/form/form-field";
import { UseFormWatch } from "react-hook-form";

export interface LastStepProps<T extends Record<string, any>> {
    watch: UseFormWatch<T>;
    submit: () => Promise<void>;
    fields: FormFieldDTO<T>[];
}

export type LastStepContent<T extends Record<string, any>> = React.ReactNode | ((props: LastStepProps<T>) => React.ReactNode);