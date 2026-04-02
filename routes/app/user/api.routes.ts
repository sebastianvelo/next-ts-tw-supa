import { API_BASE_PATH } from "@/routes/api/common";
import SEGMENTS from "@/routes/types/segments.routes";
import pathOf from "@/routes/utils/pathOf";

const API_ROOT = pathOf(API_BASE_PATH, SEGMENTS.USERS);
const BY_ID = (id: string) => pathOf(API_ROOT, id);

const API_USERS = {
    ROOT: API_ROOT,
    BY_ID: BY_ID,
    HOME: (userId: string) => pathOf(BY_ID(userId), SEGMENTS.HOME),
};

export default API_USERS;
