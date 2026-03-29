import QueryParams from "@/core/types/QueryParams";
import PaginatedResult from "@/core/types/PaginatedResult";

type PaginationService<DynamicKeys, FullModel> = {
    [K in keyof Omit<DynamicKeys, "id"> & string as `getBy${Capitalize<K>}Paginated`]?:
    (value: DynamicKeys[K], query?: QueryParams<FullModel>) => Promise<PaginatedResult<FullModel>>;
} & {
    getAllPaginated: (query?: QueryParams<FullModel>) => Promise<PaginatedResult<FullModel>>;
};

export default PaginationService;