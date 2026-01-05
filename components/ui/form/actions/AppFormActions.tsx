import Button from "@/components/ui/atoms/button/Button";
import { CardFooter } from "@/components/ui/molecules/card/Card";
import { FieldErrors, UseFormReset } from "react-hook-form";

interface AppFormActionsProps<T extends Record<string, any>> {
    errors: FieldErrors<T>;
    submitButtonText?: string;
    submitButtonLoadingText?: string;
    clearButtonText?: string;
    isSubmitting: boolean;
    reset: UseFormReset<T>;
}

const AppFormActions = <T extends Record<string, any>>({ errors, submitButtonText = "Crear", submitButtonLoadingText = "Creando...", clearButtonText = "Limpiar", isSubmitting, reset }: AppFormActionsProps<T>) => {

    return (
        <CardFooter>
            <div className="flex gap-2 justify-end w-full">
                <Button type="button" variant="secondary" onClick={() => reset()} disabled={isSubmitting}>
                    {clearButtonText}
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? submitButtonLoadingText : submitButtonText}
                </Button>
            </div>
        </CardFooter>
    );
};

export default AppFormActions;