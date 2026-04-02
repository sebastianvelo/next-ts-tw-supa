import FormFieldDTO from "@/presentation/view/models/form/form-field";
import { useState, useEffect } from "react";
import { UseFormTrigger } from "react-hook-form";

interface UseFormWizardProps<T extends Record<string, any>> {
    formFields: FormFieldDTO<T>[];
    trigger: UseFormTrigger<T>;
    isWizard?: boolean;
    hasExtraStep?: boolean;
    onLastStep?: () => void;
}

export type FormWizard<T extends Record<string, any>> = {
    currentStep: number;
    handleNext: () => Promise<void>;
    handlePrev: () => void;
    visibleFields: FormFieldDTO<T>[];
    isFirstStep: boolean;
    isLastStep: boolean;
    length: number;
};

const useFormWizard = <T extends Record<string, any>>({ formFields, trigger, isWizard, hasExtraStep, onLastStep }: UseFormWizardProps<T>): FormWizard<T> => {
    const [currentStep, setCurrentStep] = useState(0);

    const length = formFields.length + (hasExtraStep ? 1 : 0);

    const handleNext = async () => {
        if (currentStep < formFields.length) {
            const fieldName = formFields[currentStep].name as any;
            const isValid = await trigger(fieldName);
            if (isValid) {
                const nextStep = Math.min(currentStep + 1, length - 1);
                setCurrentStep(nextStep);
            }
        } else {
            setCurrentStep((prev) => Math.min(prev + 1, length - 1));
        }
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const visibleFields = isWizard && currentStep < formFields.length
        ? [formFields[currentStep]]
        : isWizard ? [] : formFields;

    const isLastStep = currentStep === length - 1;

    useEffect(() => {
        if (isLastStep && onLastStep) {
            onLastStep();
        }
    }, [isLastStep, onLastStep]);

    return {
        currentStep,
        handleNext,
        handlePrev,
        visibleFields,
        length,
        isFirstStep: currentStep === 0,
        isLastStep,
    };
};

export default useFormWizard;
