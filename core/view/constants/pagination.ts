import QueryParams from "@/core/types/QueryParams";

export const QUERY_DEFAULT: QueryParams = {
    paginator: {
        offset: 0,
        limit: 10
    }
};

export const PAGINATION_DEFAULT = {
    offset: 0,
    limit: 10
};

const PAGINATION_CONFIG = {
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_MAX_PAGES: 5,
    CATALOG: {
        PAGE_SIZE: 12,
    },
    LISTS: {
        PAGE_SIZE: 3,
    },
    TABLES: {
        PAGE_SIZE: 10,
    }
} as const;

export default PAGINATION_CONFIG;