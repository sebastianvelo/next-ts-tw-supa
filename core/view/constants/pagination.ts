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
        PAGE_SIZE: 10,
    }
} as const;

export default PAGINATION_CONFIG;