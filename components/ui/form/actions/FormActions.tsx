import { UseFormReset } from "react-hook-form";
import FormDefaultActions from "./variants/FormDefaultActions";
import FormWizardActions from "./variants/FormWizardActions";

interface AppFormActionsProps<T extends Record<string, any>> {
    isSubmitting: boolean;
    reset: UseFormReset<T>;
    isWizard?: boolean;
    onNext?: () => void;
    onPrev?: () => void;
    isLastStep?: boolean;
    isFirstStep?: boolean;
    showSubmitButton?: boolean;
}

const FormActions = <T extends Record<string, any>>({ isSubmitting, reset, isWizard, onNext, onPrev, isFirstStep, isLastStep, showSubmitButton }: AppFormActionsProps<T>) => {
    if (isWizard) {
        return (
            <FormWizardActions
                onNext={onNext}
                onPrev={onPrev}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                isSubmitting={isSubmitting}
                showSubmitButton={showSubmitButton}
            />
        );
    }

    return (
        <FormDefaultActions reset={reset} isSubmitting={isSubmitting} />
    );
};

export default FormActions;