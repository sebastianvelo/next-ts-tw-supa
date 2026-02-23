import React from "react";

interface EmptyTableProps {
    colSpan: number;
}

const EmptyTable: React.FC<EmptyTableProps> = ({ colSpan }) => (
    <tr>
        <td
            colSpan={colSpan}
            className="px-3 py-4 text-center text-sm text-secondary-500 dark:text-secondary-400"
        >
            No data available
        </td>
    </tr>
);

export default EmptyTable;
