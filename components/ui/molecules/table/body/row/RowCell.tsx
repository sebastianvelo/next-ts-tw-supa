import { TableCellDTO } from "@/core/view/DTO/common/table";
import useI18N from "@/hooks/lang/useI18N";
import Link from "next/link";
import React from "react";

const extractCellData = (cell: TableCellDTO | string | number | boolean | null | undefined) => {
    const isObjectWithLabel = cell !== null && typeof cell === "object" && "label" in cell;
    const isObjectWithHref = cell !== null && typeof cell === "object" && "href" in cell;

    return {
        label: isObjectWithLabel ? cell.label : cell,
        href: isObjectWithHref ? cell.href : undefined,
    };
};

interface RowCellProps {
    cell: TableCellDTO | string | number | boolean | null | undefined;
    rowIndex: number;
    headerKey: string;
}

const RowCell: React.FC<RowCellProps> = ({ cell, rowIndex, headerKey }) => {
    const { t } = useI18N();
    const { label, href } = extractCellData(cell);
    const cellKey = `${rowIndex}-${headerKey}`;
    const cellClassName = "whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400";
    const l = typeof label === "string" ? t(label) : label;

    return (
        <td key={cellKey} className={cellClassName}>
            {href ? (
                <Link href={href} className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                    {l}
                </Link>
            ) : l}
        </td>
    );
};

export default RowCell;
