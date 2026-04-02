import { UserHomeViewDTO, UserHomeLayoutDTO } from "./builders";

interface IUserViewService {
    getHomeLayout(): Promise<UserHomeLayoutDTO>;
    getHomeView(): Promise<UserHomeViewDTO>;
}

export default IUserViewService;