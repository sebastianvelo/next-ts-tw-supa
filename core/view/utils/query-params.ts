import QueryParams from "@/core/types/QueryParams";
import ListViewQuery from "../queries/list-view";

type QueryParamsBuilder<T> = ListViewQuery & {
    limit: number;
    filter?: T;
}

const getQueryParams = <T = object>({ page, limit, sort, order, filter }: QueryParamsBuilder<T>): QueryParams<T> => ({
    paginator: {
        offset: page ? (page - 1) * limit : 0,
        limit
    },
    ...(sort ? { sorter: { column: sort as keyof T, ascending: order !== "desc" } } : {}),
    ...(filter ? { filter } : {})
});

export default getQueryParams;