import LoggingProxy from "@/core/logging/LoggingProxy";
import { getUserHomeViewData, getUserLayoutViewData } from "../use-case";
import { buildUserHomeView, buildUserHomeLayout, UserHomeViewDTO, UserHomeLayoutDTO } from "./builders";
import IUserViewService from "./interface";

class UserViewService implements IUserViewService {

    async getHomeLayout(): Promise<UserHomeLayoutDTO> {
        const data = await getUserLayoutViewData();
        return buildUserHomeLayout(data);
    }

    async getHomeView(): Promise<UserHomeViewDTO> {
        const data = await getUserHomeViewData();
        return buildUserHomeView(data);
    }

}

export default LoggingProxy(UserViewService);