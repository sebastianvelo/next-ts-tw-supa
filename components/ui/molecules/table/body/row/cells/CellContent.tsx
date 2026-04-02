import Badge from "@/atoms/badge/Badge";
import { TableCellDTO, TableCellType } from "@/presentation/view/dto/molecules/table";
import Link from "next/link";

interface CellContentProps {
    cell: TableCellDTO;
    label: string;
}

const CellContent: React.FC<CellContentProps> = ({ cell, label }) => {
    switch (cell.type) {
        case TableCellType.LINK:
            return (
                <Link href={cell.href!} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {label}
                </Link>
            );
        case TableCellType.BADGE:
            return <Badge label={label} variant={cell.variant} />;
        default:
            return <>{label}</>;
    }
};

export default CellContent;