import PaginatorDTO from "@/presentation/view/models/molecules/paginator/dto";
import PAGINATION_CONFIG from "@/presentation/view/constants/pagination";

const buildPaginator = (totalItems?: number, perPage?: number, maxPages: number = PAGINATION_CONFIG.DEFAULT_MAX_PAGES): PaginatorDTO | undefined => {
    if (!totalItems || !perPage) return undefined;

    return {
        total: Math.ceil(totalItems / perPage),
        maxPages,
    };
};

export default buildPaginator;