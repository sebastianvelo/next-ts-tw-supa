import CONFIG_ASSESSMENTS from "../app/assessment/config.routes";
import CONFIG_COURSES from "../app/course/config.routes";
import CONFIG_INSTITUTIONS from "../app/institution/config.routes";
import CONFIG_LESSONS from "../app/lesson/config.routes";
import CONFIG_MATERIALS from "../app/material/config.routes";
import CONFIG_PROGRAMS from "../app/program/config.routes";
import CONFIG_SUBJECTS from "../app/subject/config.routes";
import CONFIG_USERS from "../app/user/config.routes";
import { RouteConfigMap } from "../types/types";

const ROUTE_CONFIG_MAP: RouteConfigMap = {
    ...CONFIG_USERS,
    ...CONFIG_INSTITUTIONS,
    ...CONFIG_PROGRAMS,
    ...CONFIG_SUBJECTS,
    ...CONFIG_COURSES,
    ...CONFIG_LESSONS,
    ...CONFIG_ASSESSMENTS,
    ...CONFIG_MATERIALS,
};

export default ROUTE_CONFIG_MAP;