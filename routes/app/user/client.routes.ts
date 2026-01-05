import SEGMENTS from "@/routes/types/segments.routes";
import pathOf from "@/routes/utils/pathOf";

const CLIENT_ROOT = pathOf(SEGMENTS.USER);

const CLIENT_USERS = {
    ROOT: CLIENT_ROOT,
    INSTITUTIONS: pathOf(CLIENT_ROOT, SEGMENTS.INSTITUTIONS),
    COURSES: pathOf(CLIENT_ROOT, SEGMENTS.COURSES),
    NOTES: pathOf(CLIENT_ROOT, SEGMENTS.NOTES),
    SUBMISSIONS: pathOf(CLIENT_ROOT, SEGMENTS.SUBMISSIONS),
};

export default CLIENT_USERS;
