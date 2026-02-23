import { LastStepContent } from "@/components/ui/form/types";
import CardBody from "../molecules/card/CardBody";
import CardHeader from "../molecules/card/CardHeader";
import FormFieldDTO from "@/core/view/DTO/form/form-field";
import useAppForm from "@/components/ui/form/hooks/useAppForm";
import { FormProvider } from "react-hook-form";
import Title from "../atoms/title/Title";
import AppFormActions from "./actions/AppFormActions";
import FormFieldContainer from "./field/FormFieldContainer";

interface AppFormProps<T extends Record<string, any>> {
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

const AppForm = <T extends Record<string, any>>({ fields, apiRoute, onSubmit, onSuccess, onError, isWizard, onLastStep, showSubmitButton = true, lastStepContent, ...props }: AppFormProps<T>) => {
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

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit}>
                {isWizard && (
                    <CardHeader>
                        <Title t={`${wizard.currentStep + 1} / ${wizard.length}`} size="md" align="right" />
                    </CardHeader>
                )}
                <CardBody className="space-y-4">
                    {wizard.visibleFields.map((field) => (
                        <FormFieldContainer<T>
                            key={field.name as string}
                            {...field}
                        />
                    ))}
                    {wizard.isLastStep && lastStepContent && renderLastStepContent()}
                </CardBody>
                <AppFormActions
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

export default AppForm;