import BaseRepository from "@/core/repository";
import User from "@/modules/user/domain/model";

interface IUserRepository extends BaseRepository<User> {
    findByAuthId(authId: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}

export default IUserRepository;