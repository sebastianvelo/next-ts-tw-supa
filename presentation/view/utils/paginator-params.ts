import PaginatorParams from "@/core/types/PaginatorParams";

const getPaginatorParams = (page: number | undefined, limit: number): PaginatorParams => ({
    offset: page ? (page - 1) * limit : 0,
    limit
});

export default getPaginatorParams;
