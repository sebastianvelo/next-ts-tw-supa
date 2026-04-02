import VIEW_LOGIN from "@/routes/app/login/view.routes";
import VIEW_USER from "@/routes/app/user/view.routes";
import SEGMENTS from "@/routes/types/segments.routes";
import pathOf from "@/routes/utils/pathOf";

const ROUTES = {
    HOME: pathOf(SEGMENTS.HOME),
    NOT_FOUND: pathOf(SEGMENTS.NOT_FOUND),
    LOGIN: VIEW_LOGIN,
    USER: VIEW_USER,
} as const;

export default ROUTES;