import BaseService from "./types/base-service";
import MutationService from "./types/mutation-service";
import PaginationService from "./types/pagination-service";
import QueryService from "./types/query-service";

type APIService<Model, ExcludeKeys extends keyof any = ""> =
    BaseService<Model> &
    QueryService<Omit<Model, ExcludeKeys>, Model> &
    PaginationService<Omit<Model, ExcludeKeys>, Model> &
    MutationService<Model>;

export default APIService;
