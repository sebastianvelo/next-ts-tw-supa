import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import { FallbackProps } from "@/components/ui/layout/fallback/Fallback";
import Table, { TableProps } from "@/components/ui/molecules/table/Table";

export interface TableSectionProps extends TableProps {
    title: string;
    subtitle?: string;
    fallback?: FallbackProps;
}

const TableSection: React.FC<TableSectionProps> = ({ title, subtitle, data, rowKey, fallback, className }) => (
    <div className="py-4 px-4 mx-auto xl:p-6 animate-slide-in-left xl:animate-slide-in-bottom">
        <div className="mx-auto rounded-md space-y-4">
            <div className="pb-2 border-b border-secondary-300 dark:border-secondary-800">
                <Title t={title} size="xl" />
                {subtitle && <Text t={subtitle} />}
            </div>
            <Table data={data} rowKey={rowKey} className={className} />
            {fallback?.condition && fallback.FallbackContent && (
                <div className="mx-auto">
                    <fallback.FallbackContent />
                </div>
            )}
        </div>
    </div>
);

export default TableSection;
