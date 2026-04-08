import PaginatorDTO from "@/presentation/view/models/molecules/paginator/dto";
import FilterFieldDTO from "@/presentation/view/models/molecules/filter/dto";
import CardListSectionDTO from "@/presentation/view/models/molecules/section/card-list-section";

interface ListViewDTO<T = CardListSectionDTO> {
    title?: string;
    subtitle?: string;
    filters?: FilterFieldDTO[];
    list?: T;
    paginator?: PaginatorDTO;
}

export default ListViewDTO;
