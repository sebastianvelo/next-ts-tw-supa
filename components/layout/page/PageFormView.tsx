import PageContent from "@/components/layout/main/PageContent";
import FormSection from "@/components/ui/layout/form-section/FormSection";
import FormViewDTO from "@/core/view/DTO/form/form-view";
import useToast from "@/hooks/components/useToast";

interface PageFormViewProps<T> extends FormViewDTO<T> { }

const PageFormView = <T extends Record<string, any>>({ title, apiRoute, fields, success }: PageFormViewProps<T>) => {
    const { showToast } = useToast();

    return (
        <PageContent>
            <FormSection<T>
                title={title}
                apiRoute={apiRoute}
                fields={fields}
                onError={async (e) => { showToast(e.cause as string, "error") }}
                onSuccess={async () => { showToast(success, "success") }}
            />
        </PageContent>
    );
};

export default PageFormView;