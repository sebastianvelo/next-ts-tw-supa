import PaginatorParams from "@/core/types/PaginatorParams";

export type PaginatedResult<T> = {
    items: T[];
    total: number;
};

type PaginationService<DynamicKeys, FullModel> = {
    [K in keyof Omit<DynamicKeys, "id"> & string as `getBy${Capitalize<K>}Paginated`]?:
    (value: DynamicKeys[K], params?: PaginatorParams) => Promise<PaginatedResult<FullModel>>;
};

export default PaginationService;