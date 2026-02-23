import Card from "@/components/ui/molecules/card/Card";
import Title from "@/components/ui/atoms/title/Title";

interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <div className="py-4 px-4 mx-auto xl:px-8 space-y-4 xl:w-3/4 2xl:w-1/2">
      <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
        <Title t={title} size="lg" />
      </div>
      <Card className="mx-auto">
        {children}
      </Card>
    </div>
  );
}

export default FormSection;