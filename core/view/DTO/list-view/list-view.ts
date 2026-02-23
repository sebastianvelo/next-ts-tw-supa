import PaginatorDTO from "@/core/view/DTO/common/paginator";
import FiltersSectionDTO from "@/core/view/DTO/filter/filters-section";
import { CardListSectionDTO } from "@/core/view/DTO/list-section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    filters?: FiltersSectionDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
