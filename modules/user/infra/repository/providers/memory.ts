import MemoryClient from "@/db/memory/MemoryClient";
import TABLES from "@/db/Tables";
import LoggingProxy from "@/core/logging/LoggingProxy";
import MemoryRepository from "@/core/repository/memory";
import User from "@/modules/user/domain/model";
import IUserRepository from "@/modules/user/domain/repository";

class UserRepositoryMemory extends MemoryRepository<User> implements IUserRepository {
    protected TABLE = TABLES.USER as const;

    protected getCollection(): User[] {
        return MemoryClient[this.TABLE];
    }

    protected generateId(): string {
        return `user_${this.getCollection().length + 1}`;
    }

    async findByAuthId(authId: string): Promise<User | null> {
        return this.getCollection().find((u) => u.authId === authId) || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.getCollection().find((u) => u.email === email) || null;
    }
}
export default LoggingProxy(UserRepositoryMemory);