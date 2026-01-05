import PaginatorDTO from "@/core/view/DTO/common/paginator";
import FilterBadgeDTO from "@/core/view/DTO/filter/filter-badge";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    filters?: FilterBadgeDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
