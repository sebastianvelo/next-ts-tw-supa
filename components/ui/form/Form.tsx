import useAppForm from "@/form/hooks/useAppForm";
import { LastStepContent } from "@/form/types";
import FormFieldDTO from "@/presentation/view/models/form/form-field";
import { FormProvider } from "react-hook-form";
import CardBody from "../molecules/card/CardBody";
import WizardStepsIndicator from "../organisms/wizard/indicator/WizardStepsIndicator";
import FormActions from "./actions/FormActions";
import FormFieldContainer from "./field/FormFieldContainer";

interface FormProps<T extends Record<string, any>> {
    fields: FormFieldDTO<T>[];
    apiRoute?: string;
    onSubmit?: (data: T) => Promise<void>;
    onSuccess?: (response: any) => void;
    onError?: (error: Error) => void;
    isWizard?: boolean;
    onLastStep?: () => void;
    showSubmitButton?: boolean;
    lastStepContent?: LastStepContent<T>;
}

const Form = <T extends Record<string, any>>({ fields, apiRoute, onSubmit, onSuccess, onError, isWizard, onLastStep, showSubmitButton = true, lastStepContent, ...props }: FormProps<T>) => {
    const { methods, handleSubmit, isSubmitting, reset, wizard } = useAppForm<T>({
        formFields: fields,
        onSubmit,
        onError,
        onSuccess,
        apiRoute,
        isWizard,
        onLastStep,
        hasExtraStep: !!lastStepContent
    });

    const renderLastStepContent = () => {
        if (typeof lastStepContent === "function") {
            return lastStepContent({ watch: methods.watch, submit: handleSubmit, fields });
        }
        return lastStepContent;
    }

    const stepStatuses = fields.map((field, i) => {
        if (i >= wizard.currentStep && !methods.watch()[field.name]) return "pending";
        if (!methods.watch()[field.name]) return "warning" as const;
        return "completed" as const;
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
                {isWizard && (
                    <WizardStepsIndicator
                        steps={fields.map((field) => field.label).filter(Boolean) as string[]}
                        goTo={wizard.handleNext}
                        currentStep={wizard.currentStep}
                        stepStatuses={stepStatuses}
                    />
                )}
                <CardBody className="w-full">
                    <div className="grid grid-cols-6 gap-4">
                        {wizard.visibleFields.map((field) => (
                            <FormFieldContainer<T>
                                key={field.name as string}
                                {...field}
                            />
                        ))}
                    </div>
                    {wizard.isLastStep && lastStepContent && renderLastStepContent()}
                </CardBody>
                <FormActions
                    {...props}
                    showSubmitButton={showSubmitButton}
                    isSubmitting={isSubmitting}
                    reset={reset}
                    isWizard={isWizard}
                    onNext={wizard.handleNext}
                    onPrev={wizard.handlePrev}
                    isFirstStep={wizard.isFirstStep}
                    isLastStep={wizard.isLastStep}
                />
            </form>
        </FormProvider>
    );
};

export default Form;