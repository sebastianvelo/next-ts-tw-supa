import Model from "@/core/model/Model";
import PaginatedResult from "@/core/types/PaginatedResult";
import QueryParams from "@/core/types/QueryParams";
import { Without } from "@/core/types/Without";
import BaseRepository from "..";

abstract class MemoryRepository<T extends Model> extends BaseRepository<T> {
    protected abstract getCollection(): T[];
    protected abstract generateId(): string;

    async findAll(): Promise<T[]> {
        return this.getCollection();
    }

    async findById(id: string): Promise<T | null> {
        return this.getCollection().find((item) => item.id === id) ?? null;
    }

    async findByIds(ids: string[]): Promise<T[]> {
        return this.getCollection().filter((c) => ids.includes(c.id));
    }

    async findAndCountByIds(ids: string[], query?: QueryParams<T>): Promise<PaginatedResult<T>> {
        const items = await this.findByIds(ids);

        if (query?.paginator) {
            const start = query.paginator.offset ?? 0;
            const end = query.paginator.limit ? start + query.paginator.limit : undefined;
            return {
                items: items.slice(start, end),
                total: items.length
            }
        }

        return {
            items,
            total: items.length
        }
    }

    protected async findByFields(query?: QueryParams<T>): Promise<T[]> {
        const filters = query?.filter ?? {} as Partial<T>;
        let filtered = this.getCollection().filter((item) =>
            Object.entries(filters).every(([key, value]) => item[key as keyof T] === value)
        );

        if (query?.sorter) {
            filtered = filtered.sort((a, b) => {
                const aVal = a[query.sorter!.column];
                const bVal = b[query.sorter!.column];
                if (aVal < bVal) return query.sorter!.ascending ?? true ? -1 : 1;
                if (aVal > bVal) return query.sorter!.ascending ?? true ? 1 : -1;
                return 0;
            });
        }

        if (!query?.paginator) return filtered;
        const start = query.paginator.offset ?? 0;
        const end = query.paginator.limit ? start + query.paginator.limit : undefined;
        return filtered.slice(start, end);
    }

    protected async findAndCount(query?: QueryParams<T>): Promise<PaginatedResult<T>> {
        const filters = query?.filter ?? {} as Partial<T>;
        let filtered = this.getCollection().filter((item) =>
            Object.entries(filters).every(([key, value]) => item[key as keyof T] === value)
        );

        if (query?.sorter) {
            const ascending = query.sorter.ascending ?? true;
            filtered = filtered.sort((a, b) => {
                const aVal = a[query.sorter!.column];
                const bVal = b[query.sorter!.column];

                const aIsNil = aVal == null;
                const bIsNil = bVal == null;

                if (aIsNil && bIsNil) return 0;
                if (aIsNil) return 1;
                if (bIsNil) return -1;

                if (typeof aVal === "string" && typeof bVal === "string") {
                    const cmp = aVal.localeCompare(bVal);
                    return ascending ? cmp : -cmp;
                }

                if (aVal < bVal) return ascending ? -1 : 1;
                if (aVal > bVal) return ascending ? 1 : -1;
                return 0;
            });
        }

        const total = filtered.length;

        if (query?.paginator) {
            const start = query.paginator.offset ?? 0;
            const end = query.paginator.limit ? start + query.paginator.limit : undefined;
            filtered = filtered.slice(start, end);
        }

        return { items: filtered, total };
    }

    async create(data: Without<T, Model>): Promise<T> {
        const newItem = {
            id: this.generateId(),
            ...data,
        } as T;
        this.getCollection().push(newItem);

        return newItem;
    }

    async update(id: string, data: Partial<Without<T, Model>>): Promise<T | null> {
        const collection = this.getCollection();
        const index = collection.findIndex((item) => item.id === id);
        if (index === -1) return null;

        collection[index] = {
            ...collection[index],
            ...data,
            updatedAt: new Date().toISOString(),
        };
        return collection[index];
    }

    async delete(id: string): Promise<boolean> {
        const collection = this.getCollection();
        const index = collection.findIndex((item) => item.id === id);
        if (index === -1) return false;

        collection.splice(index, 1);
        return true;
    }
}

export default MemoryRepository;