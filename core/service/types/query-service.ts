import PaginatorParams from "@/core/types/PaginatorParams";

type QueryService<DynamicKeys, FullModel> = {
    [K in keyof Omit<DynamicKeys, "id"> & string as `getBy${Capitalize<K>}`]:
    (value: DynamicKeys[K], params?: PaginatorParams) => Promise<FullModel[]>;
};

export default QueryService;