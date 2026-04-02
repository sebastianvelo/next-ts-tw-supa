import FormFieldDTO from "@/presentation/view/models/form/form-field";
import { UseFormWatch } from "react-hook-form";

export interface LastStepProps<T extends Record<string, unknown>> {
    watch: UseFormWatch<T>;
    submit: () => Promise<void>;
    fields: FormFieldDTO<T>[];
}

export type LastStepContent<T extends Record<string, unknown>> = React.ReactNode | ((props: LastStepProps<T>) => React.ReactNode);