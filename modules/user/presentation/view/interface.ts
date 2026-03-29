import { UserHomeViewDTO, UserLayoutViewDTO } from "./builders";

interface IUserViewService {
    getLayoutView(): Promise<UserLayoutViewDTO>;
    getHomeView(): Promise<UserHomeViewDTO>;
}

export default IUserViewService;