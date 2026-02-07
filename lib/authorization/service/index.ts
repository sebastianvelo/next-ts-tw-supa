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

}

export default new AuthorizationService();