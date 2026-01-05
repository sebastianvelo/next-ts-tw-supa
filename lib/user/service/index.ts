import LoggingProxy from "@/core/logging/LoggingProxy";
import CreateDTO from "@/core/service/dto/create";
import UpdateDTO from "@/core/service/dto/update";
import WithTimestamps from "@/core/service/helpers/with-timestamps";
import ERRORS from "@/errors";
import CourseMembership from "@/lib/course-membership/model";
import InstitutionMembership from "@/lib/institution-membership/model";
import User from "@/lib/user/model";
import UserRepository from "@/lib/user/repository";
import UserDTO from "../view/dto/UserRegistrationData";
import UserAPIService from "./interface";

/**
 * UserService - Responsable SOLO de:
 * - CRUD de usuarios en la base de datos
 * - Lógica de negocio relacionada con usuarios
 * - Validaciones de usuarios
 */
class UserService implements UserAPIService {
    async getAll(): Promise<User[]> {
        return UserRepository.findAll();
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
        const user = await this.getByAuthId(authId);
        if (!user) throw ERRORS.USER.AUTH_NOT_FOUND(authId);
        return user;
    }

    async getByIds(ids: string[]): Promise<User[]> {
        return UserRepository.findByIds(ids);
    }

    async getByMemberships(roles: (CourseMembership | InstitutionMembership)[]): Promise<User[]> {
        const ids = roles.map(r => r.userId);
        return this.getByIds(ids);
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
     * Crea o actualiza un usuario desde datos de OAuth
     */
    async upsertFromOAuth(userData: UserDTO): Promise<User> {
        const existingUser = await this.getByEmail(userData.email);

        if (existingUser) {
            return existingUser;
        }

        return this.create({
            authId: userData.id,
            email: userData.email,
            name: userData.name,
            avatar: userData.avatar,
        });
    }
}

export default LoggingProxy(UserService);