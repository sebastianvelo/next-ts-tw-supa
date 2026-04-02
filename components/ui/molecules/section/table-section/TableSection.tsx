import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import { FallbackProps } from "@/molecules/section/fallback/Fallback";
import Table, { TableProps } from "@/molecules/table/Table";

export interface TableSectionProps extends TableProps {
    title: string;
    subtitle?: string;
    fallback?: FallbackProps;
}

const TableSection: React.FC<TableSectionProps> = ({ title, subtitle, data, rowKey, fallback, className }) => (
    <div className="py-4 px-4 mx-auto xl:p-6 animate-slide-in-bottom">
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
