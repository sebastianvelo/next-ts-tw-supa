import { API_BASE_PATH } from "@/routes/api/common";
import pathOf from "@/routes/utils/pathOf";

const API_ROOT = pathOf(API_BASE_PATH, "auth");

const API_AUTH = {
    ME: pathOf(API_ROOT, "me"),
    LOGOUT: pathOf(API_ROOT, "logout"),
    CALLBACK: pathOf(API_ROOT, "callback"),
};

export default API_AUTH;
