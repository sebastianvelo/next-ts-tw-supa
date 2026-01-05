import Model from "@/core/model/Model";
import { Without } from "@/core/types/Without";
import BaseRepository from "..";

abstract class MemoryRepository<T extends Model> extends BaseRepository<T> {
    protected abstract getCollection(): T[];
    protected abstract generateId(): string;

    async findAll(): Promise<T[]> {
        return this.getCollection();
    }

    async findById(id: string): Promise<T | null> {
        return this.getCollection().find((item) => item.id === id) || null;
    }

    async findByIds(ids: string[]): Promise<T[]> {
        return this.getCollection().filter((c) => ids.includes(c.id));
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