import Title from "@/atoms/title/Title";
import PageContent from "@/components/layout/content/PageContent";
import Form from "@/form/Form";
import { LastStepContent } from "@/form/types";
import useToast from "@/molecules/toast/hooks/useToast";
import Card from "@/molecules/card/Card";
import FormViewDTO from "@/presentation/view/models/form/form-view";
import Text from "@/atoms/text/Text";

interface PageFormViewProps<T extends Record<string, any>> extends FormViewDTO<T> {
    wrapperClassName?: string;
    className?: string;
    onLastStep?: () => void;
    showSubmitButton?: boolean;
    lastStepContent?: LastStepContent<T>;
}

const PageFormView = <T extends Record<string, any>>({ wrapperClassName = "p-4 xl:p-6", className, title, subtitle, apiRoute, fields, success, isWizard, onLastStep, showSubmitButton, lastStepContent }: PageFormViewProps<T>) => {
    const { showToast } = useToast();

    return (
        <PageContent className={className}>
            <div className={wrapperClassName}>
                <div className="space-y-4">
                    <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800 space-y-2">
                        <Title t={title} size="xl" />
                        <Text t={subtitle} size="lg" weight="semibold" />
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