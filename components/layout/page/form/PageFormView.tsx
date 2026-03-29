import Title from "@/atoms/title/Title";
import PageContent from "@/components/layout/main/content/PageContent";
import Form from "@/form/Form";
import { LastStepContent } from "@/form/types";
import useToast from "@/molecules/toast/hooks/useToast";
import Card from "@/molecules/card/Card";
import FormViewDTO from "@/presentation/view/dto/form/form-view";

interface PageFormViewProps<T extends Record<string, any>> extends FormViewDTO<T> {
    wrapperClassName?: string;
    className?: string;
    onLastStep?: () => void;
    showSubmitButton?: boolean;
    lastStepContent?: LastStepContent<T>;
}

const PageFormView = <T extends Record<string, any>>({ wrapperClassName = "max-w-6xl mx-auto p-4", className, title, apiRoute, fields, success, isWizard, onLastStep, showSubmitButton, lastStepContent }: PageFormViewProps<T>) => {
    const { showToast } = useToast();

    return (
        <PageContent className={className}>
            <div className={wrapperClassName}>
                <div className="space-y-4">
                    <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
                        <Title t={title} size="lg" />
                    </div>
                    <Card className="mx-auto">
                        {fields && (
                            <Form<T>
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
                    </Card>
                </div>
            </div>
        </PageContent>
    );
};

export default PageFormView;