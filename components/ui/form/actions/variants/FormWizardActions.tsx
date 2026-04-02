import Button from "@/atoms/button/Button";
import CardFooter from "@/molecules/card/CardFooter";
import { ArrowLeft, ArrowRight, Loader, SendHorizonal } from "lucide-react";

interface FormWizardActionsProps {
    onPrev?: () => void;
    onNext?: () => void;
    isFirstStep?: boolean;
    isLastStep?: boolean;
    isSubmitting: boolean;
    showSubmitButton?: boolean;
}

const FormWizardActions = ({ onPrev, onNext, isFirstStep, isLastStep, isSubmitting, showSubmitButton }: FormWizardActionsProps) => (
    <CardFooter className="bg-gradient-to-r from-secondary-100 via-white to-secondary-100 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950">
        <div className="flex justify-end w-full space-x-2">
            {!isFirstStep && (
                <Button variant="primary" onClick={onPrev} disabled={isSubmitting}>
                    <ArrowLeft />
                </Button>
            )}
            {isLastStep ? (
                (showSubmitButton ?? true) && (
                    <Button type="submit" variant="accent" disabled={isSubmitting}>
                        {isSubmitting ? <Loader /> : <SendHorizonal />}
                    </Button>
                )
            ) : (
                <Button onClick={onNext} disabled={isSubmitting}>
                    <ArrowRight />
                </Button>
            )}
        </div>
    </CardFooter>
);

export default FormWizardActions;
