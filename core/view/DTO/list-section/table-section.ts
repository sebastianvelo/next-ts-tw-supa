import { TableDataDTO } from "@/core/view/DTO/common/table";

interface TableSectionDTO {
    title: string;
    subtitle?: string;
    data: TableDataDTO;
    /**
     * Optional string key to identify unique rows.
     * If provided, will use row[rowKey] as the key.
     * Defaults to using the array index.
     */
    rowKey?: string;
}

export default TableSectionDTO;
