import TABLES from "@/db/Tables";
import SupabaseRepository from "@/core/repository/supabase";
import User from "@/modules/user/domain/model";
import UserKeys from "@/modules/user/domain/model/keys";
import IUserRepository from "@/modules/user/domain/repository";

class UserRepositorySupabase extends SupabaseRepository<User> implements IUserRepository {
    protected TABLE = TABLES.USER;

    async findByAuthId(authId: string): Promise<User | null> {
        const supabase = await this.CLIENT();
        const { data, error } = await supabase
            .from(this.TABLE)
            .select("*")
            .eq(UserKeys.AUTHID, authId)
            .single();
        if (error) return null;
        return data;
    }

    async findByEmail(email: string): Promise<User | null> {
        const supabase = await this.CLIENT();
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