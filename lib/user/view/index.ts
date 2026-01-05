import LoggingProxy from "@/core/logging/LoggingProxy";
import AuthorizationService from "@/lib/authorization/service";
import UserHomeViewDTO from "./builders/home/dto";
import buildUserHomeView from "./builders/home/index";
import buildUserLayoutView from "./builders/layout";
import UserLayoutViewDTO from "./builders/layout/dto";
import IUserViewService from "./interface";

class UserViewService implements IUserViewService {
    async getLayoutView(): Promise<UserLayoutViewDTO> {
        const user = await AuthorizationService.getCurrentUserOrThrow();

        return buildUserLayoutView({ user });
    }

    async getHomeView(): Promise<UserHomeViewDTO> {
        const user = await AuthorizationService.getCurrentUserOrThrow();

        return buildUserHomeView({ user });
    }
}

export default LoggingProxy(UserViewService);