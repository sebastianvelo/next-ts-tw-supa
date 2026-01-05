import { createClient } from "@/core/db/supabase/SupabaseServer";
import TABLES from "@/core/app/db/Tables";
import SupabaseRepository from "@/core/repository/supabase";
import User from "@/lib/user/model";
import UserKeys from "@/lib/user/model/keys";
import IUserRepository from "@/lib/user/repository/interface";

class UserRepositorySupabase extends SupabaseRepository<User> implements IUserRepository {
    protected TABLE = TABLES.USER;

    async findByAuthId(authId: string): Promise<User | null> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .eq(UserKeys.AUTHID, authId)
            .single();
        if (error) return null;
        return data;
    }

    async findByEmail(email: string): Promise<User | null> {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .eq(UserKeys.EMAIL, email)
            .single();
        if (error) return null;
        return data;
    }
}

export default new UserRepositorySupabase();