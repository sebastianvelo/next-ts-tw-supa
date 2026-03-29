import PaginatorDTO from "@/presentation/view/dto/common/paginator";
import FilterFieldDTO from "@/presentation/view/dto/filter/filter-field";
import CardListSectionDTO from "@/presentation/view/dto/list-section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    filters?: FilterFieldDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
