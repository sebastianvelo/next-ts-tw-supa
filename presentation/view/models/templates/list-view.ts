import PaginatorDTO from "@/presentation/view/models/molecules/paginator/dto";
import FilterFieldDTO from "@/presentation/view/models/molecules/filter/dto";
import CardListSectionDTO from "@/presentation/view/models/molecules/section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    filters?: FilterFieldDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
