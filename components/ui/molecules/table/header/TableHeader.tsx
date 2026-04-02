import { TableHeaderDTO } from "@/presentation/view/dto/molecules/table";
import useI18N from "@/hooks/lang/useI18N";
import React from "react";

interface TableHeaderProps {
    headers: TableHeaderDTO[];
    handleSort: (key: string) => void;
    renderSortIcon: (header: TableHeaderDTO) => React.ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, handleSort, renderSortIcon }) => {
    const { t } = useI18N();

    return (
        <thead className="bg-secondary-50 dark:bg-black/20">
            <tr>
                {headers.map((header) => (
                    <th
                        key={header.key}
                        scope="col"
                        className={`
                            px-3 py-3.5 text-left text-sm font-semibold text-secondary-900 dark:text-secondary-100
                            ${header.sortable ? "cursor-pointer hover:bg-secondary-100 dark:hover:bg-white/5 group select-none" : ""}
                        `}
                        onClick={() => header.sortable && handleSort(header.key)}
                    >
                        <div className="flex items-center">
                            {t(header.label)}
                            {renderSortIcon(header)}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
