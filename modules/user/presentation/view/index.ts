import LoggingProxy from "@/core/logging/LoggingProxy";
import { getUserHomeViewData, getUserLayoutViewData } from "@/modules/user/presentation/use-case";
import { buildUserHomeView, buildUserLayoutView, UserHomeViewDTO, UserLayoutViewDTO } from "./builders";
import IUserViewService from "./interface";

class UserViewService implements IUserViewService {
    async getLayoutView(): Promise<UserLayoutViewDTO> {
        const data = await getUserLayoutViewData();
        return buildUserLayoutView(data);
    }

    async getHomeView(): Promise<UserHomeViewDTO> {
        const data = await getUserHomeViewData();
        return buildUserHomeView(data);
    }

}

export default LoggingProxy(UserViewService);