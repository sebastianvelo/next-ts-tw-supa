import { TableDataDTO } from "@/presentation/view/dto/common/table";
import useTable from "@/molecules/table/hooks/useTable";
import React from "react";
import TableBody from "./body/TableBody";
import TableHeader from "./header/TableHeader";

export interface TableProps {
    data: TableDataDTO;
    rowKey?: string;
    className?: string;
}

const Table: React.FC<TableProps> = ({ data, rowKey, className = "" }) => {
    const { sortedBody, handleSort, renderSortIcon } = useTable(data);

    return (
        <div className={`overflow-x-auto rounded-lg shadow ring-1 ring-black ring-opacity-5 dark:ring-white/10 scrollbar-primary ${className}`}>
            <table className="min-w-full divide-y divide-secondary-300 dark:divide-secondary-700">
                <TableHeader
                    headers={data.headers}
                    handleSort={handleSort}
                    renderSortIcon={renderSortIcon}
                />
                <TableBody
                    rows={sortedBody}
                    headers={data.headers}
                    rowKey={rowKey}
                />
            </table>
        </div>
    );
};

export default Table;
