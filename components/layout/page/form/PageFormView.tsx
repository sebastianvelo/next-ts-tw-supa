import PageContent from "@/components/layout/main/content/PageContent";
import AppForm from "@/components/ui/form/AppForm";
import { LastStepContent } from "@/components/ui/form/types";
import FormSection from "@/components/ui/layout/form-section/FormSection";
import FormViewDTO from "@/core/view/DTO/form/form-view";
import useToast from "@/hooks/components/useToast";

interface PageFormViewProps<T extends Record<string, any>> extends FormViewDTO<T> {
    onLastStep?: () => void;
    showSubmitButton?: boolean;
    lastStepContent?: LastStepContent<T>;
}

const PageFormView = <T extends Record<string, any>>({ title, apiRoute, fields, success, isWizard, onLastStep, showSubmitButton, lastStepContent }: PageFormViewProps<T>) => {
    const { showToast } = useToast();

    return (
        <PageContent>
            <FormSection title={title}>
                {fields && (
                    <AppForm<T>
                        apiRoute={apiRoute}
                        fields={fields}
                        isWizard={isWizard}
                        onLastStep={onLastStep}
                        showSubmitButton={showSubmitButton}
                        lastStepContent={lastStepContent}
                        onError={async (e) => { showToast(e.cause as string, "error") }}
                        onSuccess={async () => { showToast(success ?? "", "success") }}
                    />
                )}
            </FormSection>
        </PageContent>
    );
};

export default PageFormView;