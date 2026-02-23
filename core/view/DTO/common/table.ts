export interface TableHeaderDTO {
    key: string;
    label: string;
    sortable?: boolean;
}

export interface TableCellDTO {
    label: string | number | boolean | null | undefined;
    value: any;
    href?: string;
}

export interface TableRowDTO {
    [key: string]: TableCellDTO | string | number | boolean | null | undefined;
}

export interface TableDataDTO {
    headers: TableHeaderDTO[];
    body: TableRowDTO[];
}
