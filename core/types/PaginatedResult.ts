type PaginatedResult<T> = {
    items: T[];
    total: number;
};

export default PaginatedResult;

