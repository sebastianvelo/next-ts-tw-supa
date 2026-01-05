import PaginatorDTO from "@/core/view/DTO/common/paginator";
import PAGINATION_CONFIG from "@/core/view/constants/pagination";

const buildPaginator = (totalItems?: number, perPage?: number, maxPages: number = PAGINATION_CONFIG.DEFAULT_MAX_PAGES): PaginatorDTO | undefined => {
    if (!totalItems || !perPage) return undefined;

    return {
        total: Math.ceil(totalItems / perPage),
        maxPages,
    };
};

export default buildPaginator;