import User from "@/lib/user/model";

interface IUserRepository {
    findByAuthId(authId: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}

export default IUserRepository;