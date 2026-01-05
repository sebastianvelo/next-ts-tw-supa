import { createClient } from "@/core/db/supabase/SupabaseServer";
import Model from "@/core/model/Model";
import BaseRepository from "@/core/repository";
import { Without } from "@/core/types/Without";

abstract class SupabaseRepository<T extends Model> extends BaseRepository<T> {
    protected abstract TABLE: string;

    async findAll(): Promise<T[]> {
        const supabase = await createClient();
        const { data, error } = await supabase.from(this.TABLE).select("*");
        if (error) throw error;
        return data || [];
    }

    async findById(id: string): Promise<T | null> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .eq("id", id)
            .single();
        if (error) return null;
        return data;
    }

    async findByIds(ids: string[]): Promise<T[]> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .in("id", ids);
        if (error || !data) return [];
        return data;
    }

    async create(data: Without<T, Model>): Promise<T> {
        const supabase = await createClient();
        const { data: inserted, error } = await supabase
            .from(this.TABLE)
            .insert([data])
            .select()
            .single();
        if (error) throw error;
        return inserted;
    }

    async update(id: string, data: Partial<Without<T, Model>>): Promise<T | null> {
        const supabase = await createClient();
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
        const supabase = await createClient();
        const { error } = await supabase
            .from(this.TABLE)
            .delete()
            .eq("id", id);
        return !error;
    }
}

export default SupabaseRepository;