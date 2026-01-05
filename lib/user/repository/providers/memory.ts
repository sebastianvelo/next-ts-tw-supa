import MemoryClient from "@/core/db/memory/MemoryClient";
import TABLES from "@/core/app/db/Tables";
import LoggingProxy from "@/core/logging/LoggingProxy";
import MemoryRepository from "@/core/repository/memory";
import User from "@/lib/user/model";
import IUserRepository from "@/lib/user/repository/interface";

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