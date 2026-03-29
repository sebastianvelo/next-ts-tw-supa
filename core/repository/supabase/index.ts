import { createClient } from "@/core/db/supabase/SupabaseServer";
import Model from "@/core/model/Model";
import BaseRepository from "@/core/repository";
import PaginatedResult from "@/core/types/PaginatedResult";
import QueryParams from "@/core/types/QueryParams";
import { Without } from "@/core/types/Without";
import { SupabaseClient } from "@supabase/supabase-js";

abstract class SupabaseRepository<T extends Model> extends BaseRepository<T> {
    protected abstract TABLE: string;
    protected CLIENT: () => Promise<SupabaseClient> = createClient;

    async findAll(): Promise<T[]> {
        const supabase = await this.CLIENT();
        const { data, error } = await supabase.from(this.TABLE).select("*");
        if (error) throw error;
        return data || [];
    }

    async findAllPaginated(query?: QueryParams<T>): Promise<PaginatedResult<T>> {
        return this.findAndCount(query);
    }

    async findById(id: string): Promise<T | null> {
        const supabase = await this.CLIENT();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .eq("id", id)
            .single();
        if (error) return null;
        return data;
    }

    async findByIds(ids: string[]): Promise<T[]> {
        const supabase = await this.CLIENT();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .in("id", ids);
        if (error || !data) return [];
        return data;
    }

    async findAndCountByIds(ids: string[], query?: QueryParams<T>): Promise<PaginatedResult<T>> {
        const supabase = await this.CLIENT();

        let q = supabase
            .from(this.TABLE)
            .select("*", { count: "exact" });

        q = q.in("id", ids);

        if (query?.paginator) {
            const start = query.paginator.offset ?? 0;
            q = q.range(start, start + (query.paginator.limit ?? 0));
        }

        const { data, count, error } = await q;
        if (error) throw error;
        return { items: data || [], total: count ?? 0 };
    }

    protected async findByFields(query?: QueryParams<T>): Promise<T[]> {
        const supabase = await this.CLIENT();

        let q = supabase.from(this.TABLE).select("*");

        const filters = query?.filter ?? {};
        for (const [key, value] of Object.entries(filters)) {
            q = q.eq(key, value);
        }

        if (query?.sorter) q = q.order(query.sorter.column as string, { ascending: query.sorter.ascending ?? true });

        if (query?.paginator) {
            const start = query.paginator.offset ?? 0;
            q = q.range(start, start + (query.paginator.limit ?? 0));
        }

        const { data, error } = await q;
        if (error) throw error;
        return data || [];
    }

    protected async findAndCount(query?: QueryParams<T>): Promise<PaginatedResult<T>> {
        const supabase = await this.CLIENT();

        let q = supabase
            .from(this.TABLE)
            .select("*", { count: "exact" }); // supabase devuelve el count en el header

        const filters = query?.filter ?? {};
        for (const [key, value] of Object.entries(filters)) {
            q = q.eq(key, value);
        }

        if (query?.sorter) q = q.order(query.sorter.column as string, { ascending: query.sorter.ascending ?? true });

        if (query?.paginator) {
            const start = query.paginator.offset ?? 0;
            q = q.range(start, start + (query.paginator.limit ?? 0));
        }

        const { data, count, error } = await q;
        if (error) throw error;
        return { items: data || [], total: count ?? 0 };
    }

    async create(data: Without<T, Model>): Promise<T> {
        const supabase = await this.CLIENT();
        const { data: inserted, error } = await supabase
            .from(this.TABLE)
            .insert([data])
            .select()
            .single();
        if (error) throw error;
        return inserted;
    }

    async update(id: string, data: Partial<Without<T, Model>>): Promise<T | null> {
        const supabase = await this.CLIENT();
        const { data: updated, error } = await supabase
            .from(this.TABLE)
            .update({
                ...data,
                updatedAt: new Date().toISOString(),
            })
            .eq("id", id)
            .select()
            .single();
        if (error) return null;
        return updated;
    }

    async delete(id: string): Promise<boolean> {
        const supabase = await this.CLIENT();
        const { error } = await supabase
            .from(this.TABLE)
            .delete()
            .eq("id", id);
        return !error;
    }
}

export default SupabaseRepository;