import CONFIG_CREATOR from "../app/creator/config.routes";
import CONFIG_USERS from "../app/user/config.routes";
import { RouteConfigMap } from "../types/types";

const ROUTE_CONFIG_MAP: RouteConfigMap = {
    ...CONFIG_USERS,
    ...CONFIG_CREATOR,
};

export default ROUTE_CONFIG_MAP;