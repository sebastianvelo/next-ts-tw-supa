import ERRORS from "@/errors";
import AuthService from "@/lib/auth/service";
import User from "@/lib/user/model";
import UserService from "@/lib/user/service";
import ROUTE_CONFIG_MAP from "@/routes/config";
import ID from "@/routes/config/ID";
import { PathBuilder } from "@/routes/types/types";

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

    getPermissionRequired<P>(route: PathBuilder | string): P | undefined {
        return ROUTE_CONFIG_MAP[typeof route === "string" ? route : route(ID)]?.requiredPermission as P;
    }
}

export default new AuthorizationService();