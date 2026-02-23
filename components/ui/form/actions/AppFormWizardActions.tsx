import Button from "@/components/ui/atoms/button/Button";
import CardFooter from "../../molecules/card/CardFooter";
import { ArrowLeft, ArrowRight, Loader, SendHorizonal } from "lucide-react";

interface AppFormWizardActionsProps {
    onPrev?: () => void;
    onNext?: () => void;
    isFirstStep?: boolean;
    isLastStep?: boolean;
    isSubmitting: boolean;
    showSubmitButton?: boolean;
}

const AppFormWizardActions = ({ onPrev, onNext, isFirstStep, isLastStep, isSubmitting, showSubmitButton }: AppFormWizardActionsProps) => (
    <CardFooter>
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

export default AppFormWizardActions;
