import Button from "@/atoms/button/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import WizardStepsIndicator from "./indicator/WizardStepsIndicator";

export type WizardStep = {
    component: React.ReactNode;
    label?: string;
    onNext?: () => void;
    disableNext?: boolean;
};

interface WizardProps {
    className?: string;
    steps: WizardStep[];
}

const Wizard: React.FC<WizardProps> = ({ className, steps }) => {
    const [step, setStep] = useState<number>(0);

    const goTo = (next: number) => {
        setStep(next);
    };

    const handleNext = () => {
        steps[step].onNext?.();
        goTo(step + 1);
    };

    const handlePrev = () => goTo(step - 1);

    return (
        <div className={`flex flex-col w-full ${className}`}>
            <div className={`flex w-full justify-between`}>
                <Button onClick={handlePrev} disabled={step === 0}>
                    <ArrowLeft />
                </Button>
                <WizardStepsIndicator steps={steps.map((step, i) => step.label || `${i}`)} goTo={goTo} currentStep={step} />
                <Button onClick={handleNext} disabled={steps[step].disableNext || step === steps.length - 1}>
                    <ArrowRight />
                </Button>
            </div>
            <div className={`w-full`}>
                {steps[step].component}
            </div>
        </div>
    );
};

export default Wizard;