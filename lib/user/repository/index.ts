import BaseRepository from "@/core/repository";
import User from "@/lib/user/model";
import IUserRepository from "./interface";
import UserRepositoryMemory from "./providers/memory";
import UserRepositorySupabase from "./providers/supabase";

const USE_SUPABASE = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

const UserRepository: IUserRepository & BaseRepository<User> = USE_SUPABASE
    ? UserRepositorySupabase
    : UserRepositoryMemory;

export default UserRepository;