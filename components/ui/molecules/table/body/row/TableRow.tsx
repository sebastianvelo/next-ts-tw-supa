import { TableHeaderDTO } from "@/presentation/view/dto/common/table";
import React from "react";
import RowCell from "./cells/RowCell";

const getRowClass = (rowIndex: number): string => {
    const isEvenRow = rowIndex % 2 === 0;

    return isEvenRow
        ? "bg-white dark:bg-secondary-950 hover:bg-secondary-100 dark:hover:bg-secondary-800/20"
        : "bg-secondary-50 dark:bg-secondary-900/50 hover:bg-secondary-200 dark:hover:bg-secondary-900/80";
};

interface TableRowRowProps {
    row: any;
    rowIndex: number;
    headers: TableHeaderDTO[];
}

const TableRow: React.FC<TableRowRowProps> = ({ row, rowIndex, headers }) => (
    <tr className={getRowClass(rowIndex)}>
        {headers.map((header) => <RowCell key={header.key} cell={row[header.key]} rowIndex={rowIndex} headerKey={header.key} />)}
    </tr>
);

export default TableRow;