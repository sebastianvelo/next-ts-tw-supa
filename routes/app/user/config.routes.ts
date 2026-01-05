import QueryParam from "@/routes/types/params.routes";
import { RouteConfigMap } from "@/routes/types/types";
import CLIENT_LOGIN from "../login/client.routes";
import API_USERS from "./api.routes";
import CLIENT_USERS from "./client.routes";

const CONFIG_USERS: RouteConfigMap = {
    [CLIENT_USERS.ROOT]: {
        apiRoute: API_USERS.HOME,
        fallbackPath: () => CLIENT_LOGIN,
    },
    [CLIENT_USERS.INSTITUTIONS]: {
        apiRoute: API_USERS.INSTITUTIONS,
        allowedParams: [QueryParam.SEARCH],
    },
    [CLIENT_USERS.COURSES]: {
        apiRoute: API_USERS.COURSES,
        allowedParams: [QueryParam.SEARCH, QueryParam.STATUS],
    },
    [CLIENT_USERS.NOTES]: {
        apiRoute: API_USERS.NOTES,
    },
    [CLIENT_USERS.SUBMISSIONS]: {
        apiRoute: API_USERS.SUBMISSIONS,
        allowedParams: [QueryParam.STATUS, QueryParam.PAGE],
    },
};

export default CONFIG_USERS;
