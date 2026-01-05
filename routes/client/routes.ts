import CLIENT_LOGIN from "../app/login/client.routes";
import CLIENT_USERS from "../app/user/client.routes";
import SEGMENTS from "../types/segments.routes";
import pathOf from "../utils/pathOf";

const ROUTES = {
    HOME: pathOf(SEGMENTS.HOME),
    NOT_FOUND: pathOf(SEGMENTS.NOT_FOUND),
    LOGIN: CLIENT_LOGIN,
    USER: CLIENT_USERS,
} as const;

export default ROUTES;