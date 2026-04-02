import { API_BASE_PATH } from "@/routes/api/common";
import pathOf from "@/routes/utils/pathOf";

const API_ROOT = pathOf(API_BASE_PATH, "layout");

const API_LAYOUT = {
    MENU: pathOf(API_ROOT, "menu"),
};

export default API_LAYOUT;
