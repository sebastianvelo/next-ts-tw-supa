import UserHomeViewDTO from "./builders/home/dto";
import UserLayoutViewDTO from "./builders/layout/dto";

interface IUserViewService {
    getLayoutView(): Promise<UserLayoutViewDTO>;
    getHomeView(): Promise<UserHomeViewDTO>;
}

export default IUserViewService;