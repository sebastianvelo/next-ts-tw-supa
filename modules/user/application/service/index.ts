import LoggingProxy from "@/core/logging/LoggingProxy";
import CreateDTO from "@/core/service/dto/create";
import UpdateDTO from "@/core/service/dto/update";
import WithTimestamps from "@/core/service/helpers/with-timestamps";
import { QUERY_DEFAULT } from "@/core/types/defaults";
import PaginatedResult from "@/core/types/PaginatedResult";
import QueryParams from "@/core/types/QueryParams";
import ERRORS from "@/errors";
import User from "@/modules/user/domain/model";
import UserRepository from "@/modules/user/infra/repository";
import { AuthUser } from "@supabase/supabase-js";
import UserRegistrationData from "../dto/UserRegistrationData";
import UserAPIService from "./interface";

class UserService implements UserAPIService {
    async getAll(): Promise<User[]> {
        return UserRepository.findAll();
    }

    async getAllPaginated(query: QueryParams<User> = QUERY_DEFAULT): Promise<PaginatedResult<User>> {
        return UserRepository.findAllPaginated(query);
    }

    async getById(id: string): Promise<User | null> {
        return UserRepository.findById(id);
    }

    async getByIdOrThrow(id: string): Promise<User> {
        const user = await this.getById(id);
        if (!user) throw ERRORS.USER.NOT_FOUND(id);
        return user;
    }

    async getByAuthId(authId: string): Promise<User | null> {
        return UserRepository.findByAuthId(authId);
    }

    async getByAuthIdOrThrow(authId: string): Promise<User> {
        const user = await UserRepository.findByAuthId(authId);
        if (!user) throw ERRORS.USER.AUTH_NOT_FOUND(authId);
        return user;
    }

    async getByIds(ids: string[]): Promise<User[]> {
        return UserRepository.findByIds(ids);
    }

    async getByEmail(email: string): Promise<User | null> {
        return UserRepository.findByEmail(email);
    }

    async exists(email: string): Promise<boolean> {
        const existingUser = await UserRepository.findByEmail(email);
        return existingUser !== null;
    }

    async create(user: CreateDTO<User>): Promise<User> {
        const exists = await this.exists(user.email);
        if (exists) {
            throw ERRORS.USER.ALREADY_EXISTS(user.email);
        }

        return UserRepository.create(WithTimestamps(user));
    }

    async update(id: string, data: UpdateDTO<User>): Promise<User | null> {
        if (data.email) {
            const existingUser = await UserRepository.findByEmail(data.email);
            if (existingUser && existingUser.id !== id) {
                throw ERRORS.USER.EMAIL_IN_USE(data.email);
            }
        }

        return UserRepository.update(id, data);
    }

    async delete(id: string): Promise<boolean> {
        return UserRepository.delete(id);
    }


    /**
     * Prepara datos de usuario desde información de OAuth
     */
    prepareUserRegistrationData(authUser: AuthUser): UserRegistrationData {
        const name =
            authUser.user_metadata?.full_name ||
            authUser.user_metadata?.name ||
            authUser.email?.split("@")[0] ||
            "Anonymous";

        return {
            id: authUser.id,
            email: authUser.email!,
            name,
            avatar: `https://api.dicebear.com/9.x/bottts/svg?seed=${name}`,
            provider: authUser.app_metadata?.provider,
        };
    }
}

export default LoggingProxy(UserService);