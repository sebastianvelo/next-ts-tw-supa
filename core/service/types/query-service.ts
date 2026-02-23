import QueryParams from "@/core/types/QueryParams";

type QueryService<DynamicKeys, FullModel> = {
    [K in keyof Omit<DynamicKeys, "id"> & string as `getBy${Capitalize<K>}`]:
    (value: DynamicKeys[K], query?: QueryParams<FullModel>) => Promise<FullModel[]>;
};

export default QueryService;