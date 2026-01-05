import CoursePermissionAction from "@/lib/authorization/permission/course/rules/permission-action";
import InstitutionPermissionAction from "@/lib/authorization/permission/institution/rules/permission-action";
import { PathBuilder } from "@/routes/types/types";

export interface AuthorizeRoute {
    id: string;
    route: PathBuilder | string;
}

export interface AuthorizeInstitutionAction {
    id: string;
    action: InstitutionPermissionAction;
}

export interface AuthorizeProgramAction {
    id: string;
    action: InstitutionPermissionAction;
}

export interface AuthorizeSubjectAction {
    id: string;
    action: InstitutionPermissionAction;
}

export interface AuthorizeCourseAction {
    id: string;
    action: CoursePermissionAction;
}

export interface AuthorizeLessonAction {
    id: string;
    action: CoursePermissionAction;
}

export interface AuthorizeAssessmentAction {
    id: string;
    action: CoursePermissionAction;
}
