import SEGMENTS from "@/routes/types/segments.routes";
import pathOf from "@/routes/utils/pathOf";

const CLIENT_ROOT = pathOf(SEGMENTS.USER);

const CLIENT_USERS = {
    ROOT: CLIENT_ROOT,
};

export default CLIENT_USERS;
