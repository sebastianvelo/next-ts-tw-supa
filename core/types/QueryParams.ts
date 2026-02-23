import PaginatorParams from "./PaginatorParams";
import Sorter from "./Sorter";

type QueryParams<T = object> = {
    paginator?: PaginatorParams;
    sorter?: Sorter<T>;
    filter?: Partial<T>;
};

export default QueryParams;
