import ERRORS from "@/errors";
import AuthService from "@/modules/auth/application/service";
import UserService from "@/modules/user/application/service";
import User from "@/modules/user/domain/model";

class AuthorizationService {
    async getCurrentUserOrThrow(): Promise<User> {
        const { user: authUser, error } = await AuthService.getAuthUser();

        if (error || !authUser) {
            throw ERRORS.AUTH.UNAUTHENTICATED;
        }

        const user = await UserService.getByAuthIdOrThrow(authUser.id);
        return user;
    }

    async getCurrentUser(): Promise<User | null> {
        const { user: authUser } = await AuthService.getAuthUser();

        if (!authUser) {
            return null;
        }

        try {
            return await UserService.getByAuthIdOrThrow(authUser.id);
        } catch (error) {
            return null;
        }
    }
}

export default new AuthorizationService();
