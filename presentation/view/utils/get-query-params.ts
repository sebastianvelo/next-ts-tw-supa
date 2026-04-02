import QueryParams from "@/core/types/QueryParams";
import ListViewQuery from "../queries/list-view";

type QueryParamsBuilder<T> = ListViewQuery & {
    limit: number;
    filter?: Partial<T>;
}

const getQueryParams = <T = object>({ page, limit, sort, order, filter }: QueryParamsBuilder<T>): QueryParams<T> => {
    const cleanFilter = filter
        ? Object.fromEntries(
            Object.entries(filter).filter(([, value]) => value !== undefined && value !== null)
        ) as Partial<T>
        : undefined;

    return {
        paginator: {
            offset: page ? (page - 1) * limit : 0,
            limit
        },
        ...(sort ? { sorter: { column: sort as keyof T, ascending: order !== "desc" } } : {}),
        ...(cleanFilter && Object.keys(cleanFilter).length > 0 ? { filter: cleanFilter } : {})
    };
};

export default getQueryParams;