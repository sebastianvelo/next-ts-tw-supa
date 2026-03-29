import { TableCellDTO } from "@/presentation/view/dto/common/table";
import useI18N from "@/hooks/lang/useI18N";
import CellContent from "./CellContent";

type RawCell = TableCellDTO | string | number | boolean | null | undefined;

const CELL_CLASS = "whitespace-nowrap px-3 py-4 text-sm text-secondary-500 dark:text-secondary-400";

const toTableCellDTO = (cell: RawCell): TableCellDTO => {
    if (cell !== null && typeof cell === "object") return cell;
    return { label: cell, value: cell };
};

interface RowCellProps {
    cell: RawCell;
    rowIndex: number;
    headerKey: string;
}

const RowCell: React.FC<RowCellProps> = ({ cell, rowIndex, headerKey }) => {
    const { t } = useI18N();
    const dto = toTableCellDTO(cell);
    const label = typeof dto.label === "string" ? t(dto.label) : String(dto.label ?? "");

    return (
        <td key={`${rowIndex}-${headerKey}`} className={CELL_CLASS}>
            <CellContent cell={dto} label={label} />
        </td>
    );
};

export default RowCell;