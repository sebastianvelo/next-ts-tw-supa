import { UseFormReset } from "react-hook-form";
import AppFormDefaultActions from "./AppFormDefaultActions";
import AppFormWizardActions from "./AppFormWizardActions";

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

const AppFormActions = <T extends Record<string, any>>({ isSubmitting, reset, isWizard, onNext, onPrev, isFirstStep, isLastStep, showSubmitButton }: AppFormActionsProps<T>) => {
    if (isWizard) {
        return (
            <AppFormWizardActions
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
        <AppFormDefaultActions reset={reset} isSubmitting={isSubmitting} />
    );
};

export default AppFormActions;