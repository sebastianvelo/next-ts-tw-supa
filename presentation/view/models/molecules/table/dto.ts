import { BadgeVariant } from "@/presentation/view/models/atoms/badge/dto";

export interface TableHeaderDTO {
    key: string;
    label: string;
    sortable?: boolean;
}

export enum TableCellType {
    LINK = "link",
    BADGE = "badge",
    ACTION = "action"
}

export interface TableCellDTO {
    label: string | number | boolean | null | undefined;
    value: any;
    href?: string;
    type?: TableCellType;
    variant?: BadgeVariant;
}

export interface TableRowDTO {
    [key: string]: TableCellDTO | string | number | boolean | null | undefined;
}

interface TableDataDTO {
    headers: TableHeaderDTO[];
    body: TableRowDTO[];
}

export default TableDataDTO;