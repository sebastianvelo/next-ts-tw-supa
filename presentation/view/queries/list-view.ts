export type SortOrder = "asc" | "desc";

interface ListViewQuery {
    page?: number;
    sort?: string;
    order?: SortOrder;
}

export default ListViewQuery;