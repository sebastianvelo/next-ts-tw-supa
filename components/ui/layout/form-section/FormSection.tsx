import Title from "@/components/ui/atoms/title/Title";
import AppForm from "@/components/ui/form/AppForm";
import Card from "@/components/ui/molecules/card/Card";
import FormSectionDTO from "@/core/view/DTO/form/form-section";

export interface FormSectionProps<T> extends FormSectionDTO<T> {
  onSubmit?: (data: T) => Promise<void>;
  onSuccess?: (response: any) => Promise<void>;
  onError?: (error: Error) => Promise<void>;
}

const FormSection = <T extends Record<string, any>>({ title, apiRoute, fields, ...props }: FormSectionProps<T>) => {
  return (
    <div className="py-4 px-4 mx-auto xl:px-8 space-y-4 xl:w-3/4 2xl:w-1/2">
      <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
        <Title t={title} size="lg" />
      </div>
      <Card className="mx-auto">
        {fields && <AppForm apiRoute={apiRoute} fields={fields} {...props} />}
      </Card>
    </div>
  );
}

export default FormSection;