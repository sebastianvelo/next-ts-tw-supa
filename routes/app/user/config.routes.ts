import { RouteConfigMap } from "@/routes/types/types";
import CLIENT_LOGIN from "../login/client.routes";
import API_USERS from "./api.routes";
import CLIENT_USERS from "./client.routes";

const CONFIG_USERS: RouteConfigMap = {
    [CLIENT_USERS.ROOT]: {
        apiRoute: API_USERS.HOME,
        fallbackPath: () => CLIENT_LOGIN,
    },
};

export default CONFIG_USERS;
