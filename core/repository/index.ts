import Model from "@/core/model/Model";
import PaginatedResult from "@/core/types/PaginatedResult";
import QueryParams from "@/core/types/QueryParams";
import { Without } from "@/core/types/Without";

abstract class BaseRepository<T extends Model> {
    protected abstract TABLE: string;

    abstract findAll(): Promise<T[]>;
    abstract findById(id: string): Promise<T | null>;
    abstract findByIds(ids: string[]): Promise<T[]>;
    abstract findAndCountByIds(ids: string[], query?: QueryParams<T>): Promise<PaginatedResult<T>>;
    protected abstract findByFields(query?: QueryParams<T>): Promise<T[]>;
    protected abstract findAndCount(query?: QueryParams<T>): Promise<PaginatedResult<T>>;
    abstract create(data: Without<T, Model>): Promise<T>;
    abstract update(id: string, data: Partial<Without<T, Model>>): Promise<T | null>;
    abstract delete(id: string): Promise<boolean>;
}

export default BaseRepository;