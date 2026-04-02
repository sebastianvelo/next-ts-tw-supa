import { RouteConfigMap } from "@/routes/types/types";
import VIEW_LOGIN from "../login/view.routes";
import API_USERS from "./api.routes";
import CLIENT_USERS from "./view.routes";

const CONFIG_USERS: RouteConfigMap = {
    [CLIENT_USERS.ROOT]: {
        apiRoute: API_USERS.HOME,
        fallbackPath: () => VIEW_LOGIN,
    },
};

export default CONFIG_USERS;
