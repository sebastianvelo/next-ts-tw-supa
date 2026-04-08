import TableDataDTO from "@/presentation/view/models/molecules/table/dto";

interface TableSectionDTO {
    title?: string;
    subtitle?: string;
    data: TableDataDTO;
    rowKey?: string;
}

export default TableSectionDTO;
