import PaginatorDTO from "@/presentation/view/dto/molecules/paginator/dto";
import FilterFieldDTO from "@/presentation/view/dto/molecules/filter/dto";
import CardListSectionDTO from "@/presentation/view/dto/molecules/section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    filters?: FilterFieldDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
