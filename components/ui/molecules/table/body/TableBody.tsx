import { TableHeaderDTO, TableRowDTO } from "@/core/view/DTO/common/table";
import React from "react";
import EmptyTable from "./EmptyTable";
import TableRow from "./row/TableRow";

interface TableBodyProps {
    rows: TableRowDTO[];
    headers: TableHeaderDTO[];
    rowKey?: string;
}

const TableBody: React.FC<TableBodyProps> = ({ rows, headers, rowKey }) => {
    const extractRowKey = (row: TableRowDTO, rowIndex: number): React.Key => {
        if (!rowKey) return rowIndex;

        const cellValue = row[rowKey];
        if (cellValue === null || cellValue === undefined) return rowIndex;

        if (typeof cellValue === "object" && "value" in cellValue) {
            return cellValue.value as React.Key;
        }
        if (typeof cellValue !== "object") {
            return cellValue as React.Key;
        }

        return rowIndex;
    };

    const hasRows = rows.length > 0;

    return (
        <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800 bg-white dark:bg-transparent">
            {hasRows ? rows.map((row, rowIndex) => (
                <TableRow key={extractRowKey(row, rowIndex)} row={row} rowIndex={rowIndex} headers={headers} />
            )) : <EmptyTable colSpan={headers.length} />}
        </tbody>
    );
};

export default TableBody;